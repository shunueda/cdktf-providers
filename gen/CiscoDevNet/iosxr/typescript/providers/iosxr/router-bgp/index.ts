// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * bgp as-number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#as_number RouterBgp#as_number}
  */
  readonly asNumber: string;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bfd_minimum_interval RouterBgp#bfd_minimum_interval}
  */
  readonly bfdMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `2`-`16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bfd_multiplier RouterBgp#bfd_multiplier}
  */
  readonly bfdMultiplier?: number;
  /**
  * Ignore AIGP attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_bestpath_aigp_ignore RouterBgp#bgp_bestpath_aigp_ignore}
  */
  readonly bgpBestpathAigpIgnore?: boolean | cdktf.IResolvable;
  /**
  * Indicates a ignore node is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_bestpath_as_path_ignore RouterBgp#bgp_bestpath_as_path_ignore}
  */
  readonly bgpBestpathAsPathIgnore?: boolean | cdktf.IResolvable;
  /**
  * Indicates a multipath-relax node is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_bestpath_as_path_multipath_relax RouterBgp#bgp_bestpath_as_path_multipath_relax}
  */
  readonly bgpBestpathAsPathMultipathRelax?: boolean | cdktf.IResolvable;
  /**
  * Compare router-id for identical EBGP paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_bestpath_compare_routerid RouterBgp#bgp_bestpath_compare_routerid}
  */
  readonly bgpBestpathCompareRouterid?: boolean | cdktf.IResolvable;
  /**
  * Ignore cost-community comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_bestpath_cost_community_ignore RouterBgp#bgp_bestpath_cost_community_ignore}
  */
  readonly bgpBestpathCostCommunityIgnore?: boolean | cdktf.IResolvable;
  /**
  * Ignore IGP metric during path comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_bestpath_igp_metric_ignore RouterBgp#bgp_bestpath_igp_metric_ignore}
  */
  readonly bgpBestpathIgpMetricIgnore?: boolean | cdktf.IResolvable;
  /**
  * Use next-hop admin/metric from SR policy at Next Hop metric comparison stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_bestpath_igp_metric_sr_policy RouterBgp#bgp_bestpath_igp_metric_sr_policy}
  */
  readonly bgpBestpathIgpMetricSrPolicy?: boolean | cdktf.IResolvable;
  /**
  * Treat missing MED as the least preferred one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_bestpath_med_always RouterBgp#bgp_bestpath_med_always}
  */
  readonly bgpBestpathMedAlways?: boolean | cdktf.IResolvable;
  /**
  * Treat missing MED as the least preferred one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_bestpath_med_missing_as_worst RouterBgp#bgp_bestpath_med_missing_as_worst}
  */
  readonly bgpBestpathMedMissingAsWorst?: boolean | cdktf.IResolvable;
  /**
  * BGP bestpath selection will allow 'invalid' origin-AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_bestpath_origin_as_allow_invalid RouterBgp#bgp_bestpath_origin_as_allow_invalid}
  */
  readonly bgpBestpathOriginAsAllowInvalid?: boolean | cdktf.IResolvable;
  /**
  * BGP bestpath selection will use origin-AS validity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_bestpath_origin_as_use_validity RouterBgp#bgp_bestpath_origin_as_use_validity}
  */
  readonly bgpBestpathOriginAsUseValidity?: boolean | cdktf.IResolvable;
  /**
  * Consider only paths over SR Policy for bestpath selection, eBGP no-color ineligible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_bestpath_sr_policy_force RouterBgp#bgp_bestpath_sr_policy_force}
  */
  readonly bgpBestpathSrPolicyForce?: boolean | cdktf.IResolvable;
  /**
  * Consider only paths over SR Policy for bestpath selection, eBGP no-color eligible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_bestpath_sr_policy_prefer RouterBgp#bgp_bestpath_sr_policy_prefer}
  */
  readonly bgpBestpathSrPolicyPrefer?: boolean | cdktf.IResolvable;
  /**
  * Reset gracefully if configuration change forces a peer reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_graceful_restart_graceful_reset RouterBgp#bgp_graceful_restart_graceful_reset}
  */
  readonly bgpGracefulRestartGracefulReset?: boolean | cdktf.IResolvable;
  /**
  * Include extra detail in change messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_log_neighbor_changes_detail RouterBgp#bgp_log_neighbor_changes_detail}
  */
  readonly bgpLogNeighborChangesDetail?: boolean | cdktf.IResolvable;
  /**
  * Allow redistribution of iBGP into IGPs (dangerous)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_redistribute_internal RouterBgp#bgp_redistribute_internal}
  */
  readonly bgpRedistributeInternal?: boolean | cdktf.IResolvable;
  /**
  * Configure Router-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bgp_router_id RouterBgp#bgp_router_id}
  */
  readonly bgpRouterId?: string;
  /**
  * Distribute a default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#default_information_originate RouterBgp#default_information_originate}
  */
  readonly defaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * default redistributed metric
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#default_metric RouterBgp#default_metric}
  */
  readonly defaultMetric?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#delete_mode RouterBgp#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#device RouterBgp#device}
  */
  readonly device?: string;
  /**
  * Allow policy to modify all attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#ibgp_policy_out_enforce_modifications RouterBgp#ibgp_policy_out_enforce_modifications}
  */
  readonly ibgpPolicyOutEnforceModifications?: boolean | cdktf.IResolvable;
  /**
  * Specify a neighbor router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#neighbors RouterBgp#neighbors}
  */
  readonly neighbors?: RouterBgpNeighbors[] | cdktf.IResolvable;
  /**
  * Disable next-hop reachability validation for color-extcomm paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#nexthop_validation_color_extcomm_disable RouterBgp#nexthop_validation_color_extcomm_disable}
  */
  readonly nexthopValidationColorExtcommDisable?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP next-hop reachability validation by SR Policy for color-extcomm paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#nexthop_validation_color_extcomm_sr_policy RouterBgp#nexthop_validation_color_extcomm_sr_policy}
  */
  readonly nexthopValidationColorExtcommSrPolicy?: boolean | cdktf.IResolvable;
  /**
  * Enable non-stop-routing support for all neighbors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#nsr RouterBgp#nsr}
  */
  readonly nsr?: boolean | cdktf.IResolvable;
  /**
  * Disable non-stop-routing support for all neighbors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#nsr_disable RouterBgp#nsr_disable}
  */
  readonly nsrDisable?: boolean | cdktf.IResolvable;
  /**
  * Specify locator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#segment_routing_srv6_locator RouterBgp#segment_routing_srv6_locator}
  */
  readonly segmentRoutingSrv6Locator?: string;
  /**
  * Wide LIB allocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#segment_routing_srv6_usid_allocation_wide_local_id_block RouterBgp#segment_routing_srv6_usid_allocation_wide_local_id_block}
  */
  readonly segmentRoutingSrv6UsidAllocationWideLocalIdBlock?: boolean | cdktf.IResolvable;
  /**
  * Holdtime
  *   - Range: `3`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#timers_bgp_holdtime RouterBgp#timers_bgp_holdtime}
  */
  readonly timersBgpHoldtime?: number;
  /**
  * Minimum acceptable holdtime from neighbor
  *   - Range: `3`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#timers_bgp_holdtime_minimum_acceptable_holdtime RouterBgp#timers_bgp_holdtime_minimum_acceptable_holdtime}
  */
  readonly timersBgpHoldtimeMinimumAcceptableHoldtime?: number;
  /**
  * Keepalive interval
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#timers_bgp_keepalive_interval RouterBgp#timers_bgp_keepalive_interval}
  */
  readonly timersBgpKeepaliveInterval?: number;
  /**
  * Disable keepalives/hold time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#timers_bgp_keepalive_zero RouterBgp#timers_bgp_keepalive_zero}
  */
  readonly timersBgpKeepaliveZero?: boolean | cdktf.IResolvable;
  /**
  * Disable keepalives/hold time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#timers_bgp_keepalive_zero_holdtime_zero RouterBgp#timers_bgp_keepalive_zero_holdtime_zero}
  */
  readonly timersBgpKeepaliveZeroHoldtimeZero?: boolean | cdktf.IResolvable;
  /**
  * Minimum acceptable holdtime from neighbor
  *   - Range: `3`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#timers_bgp_keepalive_zero_minimum_acceptable_holdtime RouterBgp#timers_bgp_keepalive_zero_minimum_acceptable_holdtime}
  */
  readonly timersBgpKeepaliveZeroMinimumAcceptableHoldtime?: number;
}
export interface RouterBgpNeighbors {
  /**
  * IPaddress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#address RouterBgp#address}
  */
  readonly address: string;
  /**
  * time in milliseconds
  *   - Range: `0`-`999`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#advertisement_interval_milliseconds RouterBgp#advertisement_interval_milliseconds}
  */
  readonly advertisementIntervalMilliseconds?: number;
  /**
  * time in seconds
  *   - Range: `0`-`600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#advertisement_interval_seconds RouterBgp#advertisement_interval_seconds}
  */
  readonly advertisementIntervalSeconds?: number;
  /**
  * Enable Fast detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bfd_fast_detect RouterBgp#bfd_fast_detect}
  */
  readonly bfdFastDetect?: boolean | cdktf.IResolvable;
  /**
  * Prevent bfd settings from being inherited from the parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bfd_fast_detect_disable RouterBgp#bfd_fast_detect_disable}
  */
  readonly bfdFastDetectDisable?: boolean | cdktf.IResolvable;
  /**
  * (Deprecated) Hold down neighbor session until BFD is up (based on IOS-XR proprietary mechanism)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bfd_fast_detect_strict_mode RouterBgp#bfd_fast_detect_strict_mode}
  */
  readonly bfdFastDetectStrictMode?: boolean | cdktf.IResolvable;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bfd_minimum_interval RouterBgp#bfd_minimum_interval}
  */
  readonly bfdMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `2`-`16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#bfd_multiplier RouterBgp#bfd_multiplier}
  */
  readonly bfdMultiplier?: number;
  /**
  * Neighbor specific description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#description RouterBgp#description}
  */
  readonly description?: string;
  /**
  * maximum hop count
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#ebgp_multihop_maximum_hop_count RouterBgp#ebgp_multihop_maximum_hop_count}
  */
  readonly ebgpMultihopMaximumHopCount?: number;
  /**
  * Bypass the directly connected nexthop check for single-hop eBGP peering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#ignore_connected_check RouterBgp#ignore_connected_check}
  */
  readonly ignoreConnectedCheck?: boolean | cdktf.IResolvable;
  /**
  * Specifies an ENCRYPTED password will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#password RouterBgp#password}
  */
  readonly password?: string;
  /**
  * Prevent password from being inherited from parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#password_inheritance_disable RouterBgp#password_inheritance_disable}
  */
  readonly passwordInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Set remote AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#remote_as RouterBgp#remote_as}
  */
  readonly remoteAs?: string;
  /**
  * Administratively shut down this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#shutdown RouterBgp#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Holdtime
  *   - Range: `3`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#timers_holdtime RouterBgp#timers_holdtime}
  */
  readonly timersHoldtime?: number;
  /**
  * Minimum acceptable holdtime from neighbor
  *   - Range: `3`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#timers_holdtime_minimum_acceptable_holdtime RouterBgp#timers_holdtime_minimum_acceptable_holdtime}
  */
  readonly timersHoldtimeMinimumAcceptableHoldtime?: number;
  /**
  * Keepalive interval
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#timers_keepalive_interval RouterBgp#timers_keepalive_interval}
  */
  readonly timersKeepaliveInterval?: number;
  /**
  * Disable keepalives/hold time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#timers_keepalive_zero RouterBgp#timers_keepalive_zero}
  */
  readonly timersKeepaliveZero?: boolean | cdktf.IResolvable;
  /**
  * Disable keepalives/hold time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#timers_keepalive_zero_holdtime_zero RouterBgp#timers_keepalive_zero_holdtime_zero}
  */
  readonly timersKeepaliveZeroHoldtimeZero?: boolean | cdktf.IResolvable;
  /**
  * Minimum acceptable holdtime from neighbor
  *   - Range: `3`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#timers_keepalive_zero_minimum_acceptable_holdtime RouterBgp#timers_keepalive_zero_minimum_acceptable_holdtime}
  */
  readonly timersKeepaliveZeroMinimumAcceptableHoldtime?: number;
  /**
  * Enable EBGP TTL security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#ttl_security RouterBgp#ttl_security}
  */
  readonly ttlSecurity?: boolean | cdktf.IResolvable;
  /**
  * Source of routing updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#update_source RouterBgp#update_source}
  */
  readonly updateSource?: string;
  /**
  * Inherit configuration from a neighbor-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#use_neighbor_group RouterBgp#use_neighbor_group}
  */
  readonly useNeighborGroup?: string;
}

export function routerBgpNeighborsToTerraform(struct?: RouterBgpNeighbors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    advertisement_interval_milliseconds: cdktf.numberToTerraform(struct!.advertisementIntervalMilliseconds),
    advertisement_interval_seconds: cdktf.numberToTerraform(struct!.advertisementIntervalSeconds),
    bfd_fast_detect: cdktf.booleanToTerraform(struct!.bfdFastDetect),
    bfd_fast_detect_disable: cdktf.booleanToTerraform(struct!.bfdFastDetectDisable),
    bfd_fast_detect_strict_mode: cdktf.booleanToTerraform(struct!.bfdFastDetectStrictMode),
    bfd_minimum_interval: cdktf.numberToTerraform(struct!.bfdMinimumInterval),
    bfd_multiplier: cdktf.numberToTerraform(struct!.bfdMultiplier),
    description: cdktf.stringToTerraform(struct!.description),
    ebgp_multihop_maximum_hop_count: cdktf.numberToTerraform(struct!.ebgpMultihopMaximumHopCount),
    ignore_connected_check: cdktf.booleanToTerraform(struct!.ignoreConnectedCheck),
    password: cdktf.stringToTerraform(struct!.password),
    password_inheritance_disable: cdktf.booleanToTerraform(struct!.passwordInheritanceDisable),
    remote_as: cdktf.stringToTerraform(struct!.remoteAs),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
    timers_holdtime: cdktf.numberToTerraform(struct!.timersHoldtime),
    timers_holdtime_minimum_acceptable_holdtime: cdktf.numberToTerraform(struct!.timersHoldtimeMinimumAcceptableHoldtime),
    timers_keepalive_interval: cdktf.numberToTerraform(struct!.timersKeepaliveInterval),
    timers_keepalive_zero: cdktf.booleanToTerraform(struct!.timersKeepaliveZero),
    timers_keepalive_zero_holdtime_zero: cdktf.booleanToTerraform(struct!.timersKeepaliveZeroHoldtimeZero),
    timers_keepalive_zero_minimum_acceptable_holdtime: cdktf.numberToTerraform(struct!.timersKeepaliveZeroMinimumAcceptableHoldtime),
    ttl_security: cdktf.booleanToTerraform(struct!.ttlSecurity),
    update_source: cdktf.stringToTerraform(struct!.updateSource),
    use_neighbor_group: cdktf.stringToTerraform(struct!.useNeighborGroup),
  }
}


export function routerBgpNeighborsToHclTerraform(struct?: RouterBgpNeighbors | cdktf.IResolvable): any {
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
    advertisement_interval_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.advertisementIntervalMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    advertisement_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.advertisementIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_fast_detect: {
      value: cdktf.booleanToHclTerraform(struct!.bfdFastDetect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bfd_fast_detect_disable: {
      value: cdktf.booleanToHclTerraform(struct!.bfdFastDetectDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bfd_fast_detect_strict_mode: {
      value: cdktf.booleanToHclTerraform(struct!.bfdFastDetectStrictMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bfd_minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.bfdMinimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.bfdMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebgp_multihop_maximum_hop_count: {
      value: cdktf.numberToHclTerraform(struct!.ebgpMultihopMaximumHopCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_connected_check: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreConnectedCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_inheritance_disable: {
      value: cdktf.booleanToHclTerraform(struct!.passwordInheritanceDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_as: {
      value: cdktf.stringToHclTerraform(struct!.remoteAs),
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
    timers_holdtime: {
      value: cdktf.numberToHclTerraform(struct!.timersHoldtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timers_holdtime_minimum_acceptable_holdtime: {
      value: cdktf.numberToHclTerraform(struct!.timersHoldtimeMinimumAcceptableHoldtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timers_keepalive_interval: {
      value: cdktf.numberToHclTerraform(struct!.timersKeepaliveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timers_keepalive_zero: {
      value: cdktf.booleanToHclTerraform(struct!.timersKeepaliveZero),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timers_keepalive_zero_holdtime_zero: {
      value: cdktf.booleanToHclTerraform(struct!.timersKeepaliveZeroHoldtimeZero),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timers_keepalive_zero_minimum_acceptable_holdtime: {
      value: cdktf.numberToHclTerraform(struct!.timersKeepaliveZeroMinimumAcceptableHoldtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_security: {
      value: cdktf.booleanToHclTerraform(struct!.ttlSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_source: {
      value: cdktf.stringToHclTerraform(struct!.updateSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_neighbor_group: {
      value: cdktf.stringToHclTerraform(struct!.useNeighborGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighbors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._advertisementIntervalMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisementIntervalMilliseconds = this._advertisementIntervalMilliseconds;
    }
    if (this._advertisementIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisementIntervalSeconds = this._advertisementIntervalSeconds;
    }
    if (this._bfdFastDetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdFastDetect = this._bfdFastDetect;
    }
    if (this._bfdFastDetectDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdFastDetectDisable = this._bfdFastDetectDisable;
    }
    if (this._bfdFastDetectStrictMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdFastDetectStrictMode = this._bfdFastDetectStrictMode;
    }
    if (this._bfdMinimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdMinimumInterval = this._bfdMinimumInterval;
    }
    if (this._bfdMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdMultiplier = this._bfdMultiplier;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ebgpMultihopMaximumHopCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihopMaximumHopCount = this._ebgpMultihopMaximumHopCount;
    }
    if (this._ignoreConnectedCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreConnectedCheck = this._ignoreConnectedCheck;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordInheritanceDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordInheritanceDisable = this._passwordInheritanceDisable;
    }
    if (this._remoteAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAs = this._remoteAs;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._timersHoldtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.timersHoldtime = this._timersHoldtime;
    }
    if (this._timersHoldtimeMinimumAcceptableHoldtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.timersHoldtimeMinimumAcceptableHoldtime = this._timersHoldtimeMinimumAcceptableHoldtime;
    }
    if (this._timersKeepaliveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.timersKeepaliveInterval = this._timersKeepaliveInterval;
    }
    if (this._timersKeepaliveZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.timersKeepaliveZero = this._timersKeepaliveZero;
    }
    if (this._timersKeepaliveZeroHoldtimeZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.timersKeepaliveZeroHoldtimeZero = this._timersKeepaliveZeroHoldtimeZero;
    }
    if (this._timersKeepaliveZeroMinimumAcceptableHoldtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.timersKeepaliveZeroMinimumAcceptableHoldtime = this._timersKeepaliveZeroMinimumAcceptableHoldtime;
    }
    if (this._ttlSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlSecurity = this._ttlSecurity;
    }
    if (this._updateSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSource = this._updateSource;
    }
    if (this._useNeighborGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNeighborGroup = this._useNeighborGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighbors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._advertisementIntervalMilliseconds = undefined;
      this._advertisementIntervalSeconds = undefined;
      this._bfdFastDetect = undefined;
      this._bfdFastDetectDisable = undefined;
      this._bfdFastDetectStrictMode = undefined;
      this._bfdMinimumInterval = undefined;
      this._bfdMultiplier = undefined;
      this._description = undefined;
      this._ebgpMultihopMaximumHopCount = undefined;
      this._ignoreConnectedCheck = undefined;
      this._password = undefined;
      this._passwordInheritanceDisable = undefined;
      this._remoteAs = undefined;
      this._shutdown = undefined;
      this._timersHoldtime = undefined;
      this._timersHoldtimeMinimumAcceptableHoldtime = undefined;
      this._timersKeepaliveInterval = undefined;
      this._timersKeepaliveZero = undefined;
      this._timersKeepaliveZeroHoldtimeZero = undefined;
      this._timersKeepaliveZeroMinimumAcceptableHoldtime = undefined;
      this._ttlSecurity = undefined;
      this._updateSource = undefined;
      this._useNeighborGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._advertisementIntervalMilliseconds = value.advertisementIntervalMilliseconds;
      this._advertisementIntervalSeconds = value.advertisementIntervalSeconds;
      this._bfdFastDetect = value.bfdFastDetect;
      this._bfdFastDetectDisable = value.bfdFastDetectDisable;
      this._bfdFastDetectStrictMode = value.bfdFastDetectStrictMode;
      this._bfdMinimumInterval = value.bfdMinimumInterval;
      this._bfdMultiplier = value.bfdMultiplier;
      this._description = value.description;
      this._ebgpMultihopMaximumHopCount = value.ebgpMultihopMaximumHopCount;
      this._ignoreConnectedCheck = value.ignoreConnectedCheck;
      this._password = value.password;
      this._passwordInheritanceDisable = value.passwordInheritanceDisable;
      this._remoteAs = value.remoteAs;
      this._shutdown = value.shutdown;
      this._timersHoldtime = value.timersHoldtime;
      this._timersHoldtimeMinimumAcceptableHoldtime = value.timersHoldtimeMinimumAcceptableHoldtime;
      this._timersKeepaliveInterval = value.timersKeepaliveInterval;
      this._timersKeepaliveZero = value.timersKeepaliveZero;
      this._timersKeepaliveZeroHoldtimeZero = value.timersKeepaliveZeroHoldtimeZero;
      this._timersKeepaliveZeroMinimumAcceptableHoldtime = value.timersKeepaliveZeroMinimumAcceptableHoldtime;
      this._ttlSecurity = value.ttlSecurity;
      this._updateSource = value.updateSource;
      this._useNeighborGroup = value.useNeighborGroup;
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

  // advertisement_interval_milliseconds - computed: false, optional: true, required: false
  private _advertisementIntervalMilliseconds?: number; 
  public get advertisementIntervalMilliseconds() {
    return this.getNumberAttribute('advertisement_interval_milliseconds');
  }
  public set advertisementIntervalMilliseconds(value: number) {
    this._advertisementIntervalMilliseconds = value;
  }
  public resetAdvertisementIntervalMilliseconds() {
    this._advertisementIntervalMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementIntervalMillisecondsInput() {
    return this._advertisementIntervalMilliseconds;
  }

  // advertisement_interval_seconds - computed: false, optional: true, required: false
  private _advertisementIntervalSeconds?: number; 
  public get advertisementIntervalSeconds() {
    return this.getNumberAttribute('advertisement_interval_seconds');
  }
  public set advertisementIntervalSeconds(value: number) {
    this._advertisementIntervalSeconds = value;
  }
  public resetAdvertisementIntervalSeconds() {
    this._advertisementIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementIntervalSecondsInput() {
    return this._advertisementIntervalSeconds;
  }

  // bfd_fast_detect - computed: false, optional: true, required: false
  private _bfdFastDetect?: boolean | cdktf.IResolvable; 
  public get bfdFastDetect() {
    return this.getBooleanAttribute('bfd_fast_detect');
  }
  public set bfdFastDetect(value: boolean | cdktf.IResolvable) {
    this._bfdFastDetect = value;
  }
  public resetBfdFastDetect() {
    this._bfdFastDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectInput() {
    return this._bfdFastDetect;
  }

  // bfd_fast_detect_disable - computed: false, optional: true, required: false
  private _bfdFastDetectDisable?: boolean | cdktf.IResolvable; 
  public get bfdFastDetectDisable() {
    return this.getBooleanAttribute('bfd_fast_detect_disable');
  }
  public set bfdFastDetectDisable(value: boolean | cdktf.IResolvable) {
    this._bfdFastDetectDisable = value;
  }
  public resetBfdFastDetectDisable() {
    this._bfdFastDetectDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectDisableInput() {
    return this._bfdFastDetectDisable;
  }

  // bfd_fast_detect_strict_mode - computed: false, optional: true, required: false
  private _bfdFastDetectStrictMode?: boolean | cdktf.IResolvable; 
  public get bfdFastDetectStrictMode() {
    return this.getBooleanAttribute('bfd_fast_detect_strict_mode');
  }
  public set bfdFastDetectStrictMode(value: boolean | cdktf.IResolvable) {
    this._bfdFastDetectStrictMode = value;
  }
  public resetBfdFastDetectStrictMode() {
    this._bfdFastDetectStrictMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectStrictModeInput() {
    return this._bfdFastDetectStrictMode;
  }

  // bfd_minimum_interval - computed: false, optional: true, required: false
  private _bfdMinimumInterval?: number; 
  public get bfdMinimumInterval() {
    return this.getNumberAttribute('bfd_minimum_interval');
  }
  public set bfdMinimumInterval(value: number) {
    this._bfdMinimumInterval = value;
  }
  public resetBfdMinimumInterval() {
    this._bfdMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMinimumIntervalInput() {
    return this._bfdMinimumInterval;
  }

  // bfd_multiplier - computed: false, optional: true, required: false
  private _bfdMultiplier?: number; 
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }
  public set bfdMultiplier(value: number) {
    this._bfdMultiplier = value;
  }
  public resetBfdMultiplier() {
    this._bfdMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMultiplierInput() {
    return this._bfdMultiplier;
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

  // ebgp_multihop_maximum_hop_count - computed: false, optional: true, required: false
  private _ebgpMultihopMaximumHopCount?: number; 
  public get ebgpMultihopMaximumHopCount() {
    return this.getNumberAttribute('ebgp_multihop_maximum_hop_count');
  }
  public set ebgpMultihopMaximumHopCount(value: number) {
    this._ebgpMultihopMaximumHopCount = value;
  }
  public resetEbgpMultihopMaximumHopCount() {
    this._ebgpMultihopMaximumHopCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopMaximumHopCountInput() {
    return this._ebgpMultihopMaximumHopCount;
  }

  // ignore_connected_check - computed: false, optional: true, required: false
  private _ignoreConnectedCheck?: boolean | cdktf.IResolvable; 
  public get ignoreConnectedCheck() {
    return this.getBooleanAttribute('ignore_connected_check');
  }
  public set ignoreConnectedCheck(value: boolean | cdktf.IResolvable) {
    this._ignoreConnectedCheck = value;
  }
  public resetIgnoreConnectedCheck() {
    this._ignoreConnectedCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreConnectedCheckInput() {
    return this._ignoreConnectedCheck;
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

  // password_inheritance_disable - computed: false, optional: true, required: false
  private _passwordInheritanceDisable?: boolean | cdktf.IResolvable; 
  public get passwordInheritanceDisable() {
    return this.getBooleanAttribute('password_inheritance_disable');
  }
  public set passwordInheritanceDisable(value: boolean | cdktf.IResolvable) {
    this._passwordInheritanceDisable = value;
  }
  public resetPasswordInheritanceDisable() {
    this._passwordInheritanceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInheritanceDisableInput() {
    return this._passwordInheritanceDisable;
  }

  // remote_as - computed: false, optional: true, required: false
  private _remoteAs?: string; 
  public get remoteAs() {
    return this.getStringAttribute('remote_as');
  }
  public set remoteAs(value: string) {
    this._remoteAs = value;
  }
  public resetRemoteAs() {
    this._remoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
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

  // timers_holdtime - computed: false, optional: true, required: false
  private _timersHoldtime?: number; 
  public get timersHoldtime() {
    return this.getNumberAttribute('timers_holdtime');
  }
  public set timersHoldtime(value: number) {
    this._timersHoldtime = value;
  }
  public resetTimersHoldtime() {
    this._timersHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersHoldtimeInput() {
    return this._timersHoldtime;
  }

  // timers_holdtime_minimum_acceptable_holdtime - computed: false, optional: true, required: false
  private _timersHoldtimeMinimumAcceptableHoldtime?: number; 
  public get timersHoldtimeMinimumAcceptableHoldtime() {
    return this.getNumberAttribute('timers_holdtime_minimum_acceptable_holdtime');
  }
  public set timersHoldtimeMinimumAcceptableHoldtime(value: number) {
    this._timersHoldtimeMinimumAcceptableHoldtime = value;
  }
  public resetTimersHoldtimeMinimumAcceptableHoldtime() {
    this._timersHoldtimeMinimumAcceptableHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersHoldtimeMinimumAcceptableHoldtimeInput() {
    return this._timersHoldtimeMinimumAcceptableHoldtime;
  }

  // timers_keepalive_interval - computed: false, optional: true, required: false
  private _timersKeepaliveInterval?: number; 
  public get timersKeepaliveInterval() {
    return this.getNumberAttribute('timers_keepalive_interval');
  }
  public set timersKeepaliveInterval(value: number) {
    this._timersKeepaliveInterval = value;
  }
  public resetTimersKeepaliveInterval() {
    this._timersKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersKeepaliveIntervalInput() {
    return this._timersKeepaliveInterval;
  }

  // timers_keepalive_zero - computed: false, optional: true, required: false
  private _timersKeepaliveZero?: boolean | cdktf.IResolvable; 
  public get timersKeepaliveZero() {
    return this.getBooleanAttribute('timers_keepalive_zero');
  }
  public set timersKeepaliveZero(value: boolean | cdktf.IResolvable) {
    this._timersKeepaliveZero = value;
  }
  public resetTimersKeepaliveZero() {
    this._timersKeepaliveZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersKeepaliveZeroInput() {
    return this._timersKeepaliveZero;
  }

  // timers_keepalive_zero_holdtime_zero - computed: false, optional: true, required: false
  private _timersKeepaliveZeroHoldtimeZero?: boolean | cdktf.IResolvable; 
  public get timersKeepaliveZeroHoldtimeZero() {
    return this.getBooleanAttribute('timers_keepalive_zero_holdtime_zero');
  }
  public set timersKeepaliveZeroHoldtimeZero(value: boolean | cdktf.IResolvable) {
    this._timersKeepaliveZeroHoldtimeZero = value;
  }
  public resetTimersKeepaliveZeroHoldtimeZero() {
    this._timersKeepaliveZeroHoldtimeZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersKeepaliveZeroHoldtimeZeroInput() {
    return this._timersKeepaliveZeroHoldtimeZero;
  }

  // timers_keepalive_zero_minimum_acceptable_holdtime - computed: false, optional: true, required: false
  private _timersKeepaliveZeroMinimumAcceptableHoldtime?: number; 
  public get timersKeepaliveZeroMinimumAcceptableHoldtime() {
    return this.getNumberAttribute('timers_keepalive_zero_minimum_acceptable_holdtime');
  }
  public set timersKeepaliveZeroMinimumAcceptableHoldtime(value: number) {
    this._timersKeepaliveZeroMinimumAcceptableHoldtime = value;
  }
  public resetTimersKeepaliveZeroMinimumAcceptableHoldtime() {
    this._timersKeepaliveZeroMinimumAcceptableHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersKeepaliveZeroMinimumAcceptableHoldtimeInput() {
    return this._timersKeepaliveZeroMinimumAcceptableHoldtime;
  }

  // ttl_security - computed: false, optional: true, required: false
  private _ttlSecurity?: boolean | cdktf.IResolvable; 
  public get ttlSecurity() {
    return this.getBooleanAttribute('ttl_security');
  }
  public set ttlSecurity(value: boolean | cdktf.IResolvable) {
    this._ttlSecurity = value;
  }
  public resetTtlSecurity() {
    this._ttlSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecurityInput() {
    return this._ttlSecurity;
  }

  // update_source - computed: false, optional: true, required: false
  private _updateSource?: string; 
  public get updateSource() {
    return this.getStringAttribute('update_source');
  }
  public set updateSource(value: string) {
    this._updateSource = value;
  }
  public resetUpdateSource() {
    this._updateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceInput() {
    return this._updateSource;
  }

  // use_neighbor_group - computed: false, optional: true, required: false
  private _useNeighborGroup?: string; 
  public get useNeighborGroup() {
    return this.getStringAttribute('use_neighbor_group');
  }
  public set useNeighborGroup(value: string) {
    this._useNeighborGroup = value;
  }
  public resetUseNeighborGroup() {
    this._useNeighborGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNeighborGroupInput() {
    return this._useNeighborGroup;
  }
}

export class RouterBgpNeighborsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighbors[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborsOutputReference {
    return new RouterBgpNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp iosxr_router_bgp}
*/
export class RouterBgp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgp to import
  * @param importFromId The id of the existing RouterBgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp iosxr_router_bgp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_bgp',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asNumber = config.asNumber;
    this._bfdMinimumInterval = config.bfdMinimumInterval;
    this._bfdMultiplier = config.bfdMultiplier;
    this._bgpBestpathAigpIgnore = config.bgpBestpathAigpIgnore;
    this._bgpBestpathAsPathIgnore = config.bgpBestpathAsPathIgnore;
    this._bgpBestpathAsPathMultipathRelax = config.bgpBestpathAsPathMultipathRelax;
    this._bgpBestpathCompareRouterid = config.bgpBestpathCompareRouterid;
    this._bgpBestpathCostCommunityIgnore = config.bgpBestpathCostCommunityIgnore;
    this._bgpBestpathIgpMetricIgnore = config.bgpBestpathIgpMetricIgnore;
    this._bgpBestpathIgpMetricSrPolicy = config.bgpBestpathIgpMetricSrPolicy;
    this._bgpBestpathMedAlways = config.bgpBestpathMedAlways;
    this._bgpBestpathMedMissingAsWorst = config.bgpBestpathMedMissingAsWorst;
    this._bgpBestpathOriginAsAllowInvalid = config.bgpBestpathOriginAsAllowInvalid;
    this._bgpBestpathOriginAsUseValidity = config.bgpBestpathOriginAsUseValidity;
    this._bgpBestpathSrPolicyForce = config.bgpBestpathSrPolicyForce;
    this._bgpBestpathSrPolicyPrefer = config.bgpBestpathSrPolicyPrefer;
    this._bgpGracefulRestartGracefulReset = config.bgpGracefulRestartGracefulReset;
    this._bgpLogNeighborChangesDetail = config.bgpLogNeighborChangesDetail;
    this._bgpRedistributeInternal = config.bgpRedistributeInternal;
    this._bgpRouterId = config.bgpRouterId;
    this._defaultInformationOriginate = config.defaultInformationOriginate;
    this._defaultMetric = config.defaultMetric;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._ibgpPolicyOutEnforceModifications = config.ibgpPolicyOutEnforceModifications;
    this._neighbors.internalValue = config.neighbors;
    this._nexthopValidationColorExtcommDisable = config.nexthopValidationColorExtcommDisable;
    this._nexthopValidationColorExtcommSrPolicy = config.nexthopValidationColorExtcommSrPolicy;
    this._nsr = config.nsr;
    this._nsrDisable = config.nsrDisable;
    this._segmentRoutingSrv6Locator = config.segmentRoutingSrv6Locator;
    this._segmentRoutingSrv6UsidAllocationWideLocalIdBlock = config.segmentRoutingSrv6UsidAllocationWideLocalIdBlock;
    this._timersBgpHoldtime = config.timersBgpHoldtime;
    this._timersBgpHoldtimeMinimumAcceptableHoldtime = config.timersBgpHoldtimeMinimumAcceptableHoldtime;
    this._timersBgpKeepaliveInterval = config.timersBgpKeepaliveInterval;
    this._timersBgpKeepaliveZero = config.timersBgpKeepaliveZero;
    this._timersBgpKeepaliveZeroHoldtimeZero = config.timersBgpKeepaliveZeroHoldtimeZero;
    this._timersBgpKeepaliveZeroMinimumAcceptableHoldtime = config.timersBgpKeepaliveZeroMinimumAcceptableHoldtime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // bfd_minimum_interval - computed: false, optional: true, required: false
  private _bfdMinimumInterval?: number; 
  public get bfdMinimumInterval() {
    return this.getNumberAttribute('bfd_minimum_interval');
  }
  public set bfdMinimumInterval(value: number) {
    this._bfdMinimumInterval = value;
  }
  public resetBfdMinimumInterval() {
    this._bfdMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMinimumIntervalInput() {
    return this._bfdMinimumInterval;
  }

  // bfd_multiplier - computed: false, optional: true, required: false
  private _bfdMultiplier?: number; 
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }
  public set bfdMultiplier(value: number) {
    this._bfdMultiplier = value;
  }
  public resetBfdMultiplier() {
    this._bfdMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMultiplierInput() {
    return this._bfdMultiplier;
  }

  // bgp_bestpath_aigp_ignore - computed: false, optional: true, required: false
  private _bgpBestpathAigpIgnore?: boolean | cdktf.IResolvable; 
  public get bgpBestpathAigpIgnore() {
    return this.getBooleanAttribute('bgp_bestpath_aigp_ignore');
  }
  public set bgpBestpathAigpIgnore(value: boolean | cdktf.IResolvable) {
    this._bgpBestpathAigpIgnore = value;
  }
  public resetBgpBestpathAigpIgnore() {
    this._bgpBestpathAigpIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpBestpathAigpIgnoreInput() {
    return this._bgpBestpathAigpIgnore;
  }

  // bgp_bestpath_as_path_ignore - computed: false, optional: true, required: false
  private _bgpBestpathAsPathIgnore?: boolean | cdktf.IResolvable; 
  public get bgpBestpathAsPathIgnore() {
    return this.getBooleanAttribute('bgp_bestpath_as_path_ignore');
  }
  public set bgpBestpathAsPathIgnore(value: boolean | cdktf.IResolvable) {
    this._bgpBestpathAsPathIgnore = value;
  }
  public resetBgpBestpathAsPathIgnore() {
    this._bgpBestpathAsPathIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpBestpathAsPathIgnoreInput() {
    return this._bgpBestpathAsPathIgnore;
  }

  // bgp_bestpath_as_path_multipath_relax - computed: false, optional: true, required: false
  private _bgpBestpathAsPathMultipathRelax?: boolean | cdktf.IResolvable; 
  public get bgpBestpathAsPathMultipathRelax() {
    return this.getBooleanAttribute('bgp_bestpath_as_path_multipath_relax');
  }
  public set bgpBestpathAsPathMultipathRelax(value: boolean | cdktf.IResolvable) {
    this._bgpBestpathAsPathMultipathRelax = value;
  }
  public resetBgpBestpathAsPathMultipathRelax() {
    this._bgpBestpathAsPathMultipathRelax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpBestpathAsPathMultipathRelaxInput() {
    return this._bgpBestpathAsPathMultipathRelax;
  }

  // bgp_bestpath_compare_routerid - computed: false, optional: true, required: false
  private _bgpBestpathCompareRouterid?: boolean | cdktf.IResolvable; 
  public get bgpBestpathCompareRouterid() {
    return this.getBooleanAttribute('bgp_bestpath_compare_routerid');
  }
  public set bgpBestpathCompareRouterid(value: boolean | cdktf.IResolvable) {
    this._bgpBestpathCompareRouterid = value;
  }
  public resetBgpBestpathCompareRouterid() {
    this._bgpBestpathCompareRouterid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpBestpathCompareRouteridInput() {
    return this._bgpBestpathCompareRouterid;
  }

  // bgp_bestpath_cost_community_ignore - computed: false, optional: true, required: false
  private _bgpBestpathCostCommunityIgnore?: boolean | cdktf.IResolvable; 
  public get bgpBestpathCostCommunityIgnore() {
    return this.getBooleanAttribute('bgp_bestpath_cost_community_ignore');
  }
  public set bgpBestpathCostCommunityIgnore(value: boolean | cdktf.IResolvable) {
    this._bgpBestpathCostCommunityIgnore = value;
  }
  public resetBgpBestpathCostCommunityIgnore() {
    this._bgpBestpathCostCommunityIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpBestpathCostCommunityIgnoreInput() {
    return this._bgpBestpathCostCommunityIgnore;
  }

  // bgp_bestpath_igp_metric_ignore - computed: false, optional: true, required: false
  private _bgpBestpathIgpMetricIgnore?: boolean | cdktf.IResolvable; 
  public get bgpBestpathIgpMetricIgnore() {
    return this.getBooleanAttribute('bgp_bestpath_igp_metric_ignore');
  }
  public set bgpBestpathIgpMetricIgnore(value: boolean | cdktf.IResolvable) {
    this._bgpBestpathIgpMetricIgnore = value;
  }
  public resetBgpBestpathIgpMetricIgnore() {
    this._bgpBestpathIgpMetricIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpBestpathIgpMetricIgnoreInput() {
    return this._bgpBestpathIgpMetricIgnore;
  }

  // bgp_bestpath_igp_metric_sr_policy - computed: false, optional: true, required: false
  private _bgpBestpathIgpMetricSrPolicy?: boolean | cdktf.IResolvable; 
  public get bgpBestpathIgpMetricSrPolicy() {
    return this.getBooleanAttribute('bgp_bestpath_igp_metric_sr_policy');
  }
  public set bgpBestpathIgpMetricSrPolicy(value: boolean | cdktf.IResolvable) {
    this._bgpBestpathIgpMetricSrPolicy = value;
  }
  public resetBgpBestpathIgpMetricSrPolicy() {
    this._bgpBestpathIgpMetricSrPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpBestpathIgpMetricSrPolicyInput() {
    return this._bgpBestpathIgpMetricSrPolicy;
  }

  // bgp_bestpath_med_always - computed: false, optional: true, required: false
  private _bgpBestpathMedAlways?: boolean | cdktf.IResolvable; 
  public get bgpBestpathMedAlways() {
    return this.getBooleanAttribute('bgp_bestpath_med_always');
  }
  public set bgpBestpathMedAlways(value: boolean | cdktf.IResolvable) {
    this._bgpBestpathMedAlways = value;
  }
  public resetBgpBestpathMedAlways() {
    this._bgpBestpathMedAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpBestpathMedAlwaysInput() {
    return this._bgpBestpathMedAlways;
  }

  // bgp_bestpath_med_missing_as_worst - computed: false, optional: true, required: false
  private _bgpBestpathMedMissingAsWorst?: boolean | cdktf.IResolvable; 
  public get bgpBestpathMedMissingAsWorst() {
    return this.getBooleanAttribute('bgp_bestpath_med_missing_as_worst');
  }
  public set bgpBestpathMedMissingAsWorst(value: boolean | cdktf.IResolvable) {
    this._bgpBestpathMedMissingAsWorst = value;
  }
  public resetBgpBestpathMedMissingAsWorst() {
    this._bgpBestpathMedMissingAsWorst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpBestpathMedMissingAsWorstInput() {
    return this._bgpBestpathMedMissingAsWorst;
  }

  // bgp_bestpath_origin_as_allow_invalid - computed: false, optional: true, required: false
  private _bgpBestpathOriginAsAllowInvalid?: boolean | cdktf.IResolvable; 
  public get bgpBestpathOriginAsAllowInvalid() {
    return this.getBooleanAttribute('bgp_bestpath_origin_as_allow_invalid');
  }
  public set bgpBestpathOriginAsAllowInvalid(value: boolean | cdktf.IResolvable) {
    this._bgpBestpathOriginAsAllowInvalid = value;
  }
  public resetBgpBestpathOriginAsAllowInvalid() {
    this._bgpBestpathOriginAsAllowInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpBestpathOriginAsAllowInvalidInput() {
    return this._bgpBestpathOriginAsAllowInvalid;
  }

  // bgp_bestpath_origin_as_use_validity - computed: false, optional: true, required: false
  private _bgpBestpathOriginAsUseValidity?: boolean | cdktf.IResolvable; 
  public get bgpBestpathOriginAsUseValidity() {
    return this.getBooleanAttribute('bgp_bestpath_origin_as_use_validity');
  }
  public set bgpBestpathOriginAsUseValidity(value: boolean | cdktf.IResolvable) {
    this._bgpBestpathOriginAsUseValidity = value;
  }
  public resetBgpBestpathOriginAsUseValidity() {
    this._bgpBestpathOriginAsUseValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpBestpathOriginAsUseValidityInput() {
    return this._bgpBestpathOriginAsUseValidity;
  }

  // bgp_bestpath_sr_policy_force - computed: false, optional: true, required: false
  private _bgpBestpathSrPolicyForce?: boolean | cdktf.IResolvable; 
  public get bgpBestpathSrPolicyForce() {
    return this.getBooleanAttribute('bgp_bestpath_sr_policy_force');
  }
  public set bgpBestpathSrPolicyForce(value: boolean | cdktf.IResolvable) {
    this._bgpBestpathSrPolicyForce = value;
  }
  public resetBgpBestpathSrPolicyForce() {
    this._bgpBestpathSrPolicyForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpBestpathSrPolicyForceInput() {
    return this._bgpBestpathSrPolicyForce;
  }

  // bgp_bestpath_sr_policy_prefer - computed: false, optional: true, required: false
  private _bgpBestpathSrPolicyPrefer?: boolean | cdktf.IResolvable; 
  public get bgpBestpathSrPolicyPrefer() {
    return this.getBooleanAttribute('bgp_bestpath_sr_policy_prefer');
  }
  public set bgpBestpathSrPolicyPrefer(value: boolean | cdktf.IResolvable) {
    this._bgpBestpathSrPolicyPrefer = value;
  }
  public resetBgpBestpathSrPolicyPrefer() {
    this._bgpBestpathSrPolicyPrefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpBestpathSrPolicyPreferInput() {
    return this._bgpBestpathSrPolicyPrefer;
  }

  // bgp_graceful_restart_graceful_reset - computed: false, optional: true, required: false
  private _bgpGracefulRestartGracefulReset?: boolean | cdktf.IResolvable; 
  public get bgpGracefulRestartGracefulReset() {
    return this.getBooleanAttribute('bgp_graceful_restart_graceful_reset');
  }
  public set bgpGracefulRestartGracefulReset(value: boolean | cdktf.IResolvable) {
    this._bgpGracefulRestartGracefulReset = value;
  }
  public resetBgpGracefulRestartGracefulReset() {
    this._bgpGracefulRestartGracefulReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpGracefulRestartGracefulResetInput() {
    return this._bgpGracefulRestartGracefulReset;
  }

  // bgp_log_neighbor_changes_detail - computed: false, optional: true, required: false
  private _bgpLogNeighborChangesDetail?: boolean | cdktf.IResolvable; 
  public get bgpLogNeighborChangesDetail() {
    return this.getBooleanAttribute('bgp_log_neighbor_changes_detail');
  }
  public set bgpLogNeighborChangesDetail(value: boolean | cdktf.IResolvable) {
    this._bgpLogNeighborChangesDetail = value;
  }
  public resetBgpLogNeighborChangesDetail() {
    this._bgpLogNeighborChangesDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLogNeighborChangesDetailInput() {
    return this._bgpLogNeighborChangesDetail;
  }

  // bgp_redistribute_internal - computed: false, optional: true, required: false
  private _bgpRedistributeInternal?: boolean | cdktf.IResolvable; 
  public get bgpRedistributeInternal() {
    return this.getBooleanAttribute('bgp_redistribute_internal');
  }
  public set bgpRedistributeInternal(value: boolean | cdktf.IResolvable) {
    this._bgpRedistributeInternal = value;
  }
  public resetBgpRedistributeInternal() {
    this._bgpRedistributeInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRedistributeInternalInput() {
    return this._bgpRedistributeInternal;
  }

  // bgp_router_id - computed: false, optional: true, required: false
  private _bgpRouterId?: string; 
  public get bgpRouterId() {
    return this.getStringAttribute('bgp_router_id');
  }
  public set bgpRouterId(value: string) {
    this._bgpRouterId = value;
  }
  public resetBgpRouterId() {
    this._bgpRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRouterIdInput() {
    return this._bgpRouterId;
  }

  // default_information_originate - computed: false, optional: true, required: false
  private _defaultInformationOriginate?: boolean | cdktf.IResolvable; 
  public get defaultInformationOriginate() {
    return this.getBooleanAttribute('default_information_originate');
  }
  public set defaultInformationOriginate(value: boolean | cdktf.IResolvable) {
    this._defaultInformationOriginate = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate;
  }

  // default_metric - computed: false, optional: true, required: false
  private _defaultMetric?: number; 
  public get defaultMetric() {
    return this.getNumberAttribute('default_metric');
  }
  public set defaultMetric(value: number) {
    this._defaultMetric = value;
  }
  public resetDefaultMetric() {
    this._defaultMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMetricInput() {
    return this._defaultMetric;
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

  // ibgp_policy_out_enforce_modifications - computed: false, optional: true, required: false
  private _ibgpPolicyOutEnforceModifications?: boolean | cdktf.IResolvable; 
  public get ibgpPolicyOutEnforceModifications() {
    return this.getBooleanAttribute('ibgp_policy_out_enforce_modifications');
  }
  public set ibgpPolicyOutEnforceModifications(value: boolean | cdktf.IResolvable) {
    this._ibgpPolicyOutEnforceModifications = value;
  }
  public resetIbgpPolicyOutEnforceModifications() {
    this._ibgpPolicyOutEnforceModifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibgpPolicyOutEnforceModificationsInput() {
    return this._ibgpPolicyOutEnforceModifications;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // neighbors - computed: false, optional: true, required: false
  private _neighbors = new RouterBgpNeighborsList(this, "neighbors", false);
  public get neighbors() {
    return this._neighbors;
  }
  public putNeighbors(value: RouterBgpNeighbors[] | cdktf.IResolvable) {
    this._neighbors.internalValue = value;
  }
  public resetNeighbors() {
    this._neighbors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborsInput() {
    return this._neighbors.internalValue;
  }

  // nexthop_validation_color_extcomm_disable - computed: false, optional: true, required: false
  private _nexthopValidationColorExtcommDisable?: boolean | cdktf.IResolvable; 
  public get nexthopValidationColorExtcommDisable() {
    return this.getBooleanAttribute('nexthop_validation_color_extcomm_disable');
  }
  public set nexthopValidationColorExtcommDisable(value: boolean | cdktf.IResolvable) {
    this._nexthopValidationColorExtcommDisable = value;
  }
  public resetNexthopValidationColorExtcommDisable() {
    this._nexthopValidationColorExtcommDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopValidationColorExtcommDisableInput() {
    return this._nexthopValidationColorExtcommDisable;
  }

  // nexthop_validation_color_extcomm_sr_policy - computed: false, optional: true, required: false
  private _nexthopValidationColorExtcommSrPolicy?: boolean | cdktf.IResolvable; 
  public get nexthopValidationColorExtcommSrPolicy() {
    return this.getBooleanAttribute('nexthop_validation_color_extcomm_sr_policy');
  }
  public set nexthopValidationColorExtcommSrPolicy(value: boolean | cdktf.IResolvable) {
    this._nexthopValidationColorExtcommSrPolicy = value;
  }
  public resetNexthopValidationColorExtcommSrPolicy() {
    this._nexthopValidationColorExtcommSrPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopValidationColorExtcommSrPolicyInput() {
    return this._nexthopValidationColorExtcommSrPolicy;
  }

  // nsr - computed: false, optional: true, required: false
  private _nsr?: boolean | cdktf.IResolvable; 
  public get nsr() {
    return this.getBooleanAttribute('nsr');
  }
  public set nsr(value: boolean | cdktf.IResolvable) {
    this._nsr = value;
  }
  public resetNsr() {
    this._nsr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsrInput() {
    return this._nsr;
  }

  // nsr_disable - computed: false, optional: true, required: false
  private _nsrDisable?: boolean | cdktf.IResolvable; 
  public get nsrDisable() {
    return this.getBooleanAttribute('nsr_disable');
  }
  public set nsrDisable(value: boolean | cdktf.IResolvable) {
    this._nsrDisable = value;
  }
  public resetNsrDisable() {
    this._nsrDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsrDisableInput() {
    return this._nsrDisable;
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

  // segment_routing_srv6_usid_allocation_wide_local_id_block - computed: false, optional: true, required: false
  private _segmentRoutingSrv6UsidAllocationWideLocalIdBlock?: boolean | cdktf.IResolvable; 
  public get segmentRoutingSrv6UsidAllocationWideLocalIdBlock() {
    return this.getBooleanAttribute('segment_routing_srv6_usid_allocation_wide_local_id_block');
  }
  public set segmentRoutingSrv6UsidAllocationWideLocalIdBlock(value: boolean | cdktf.IResolvable) {
    this._segmentRoutingSrv6UsidAllocationWideLocalIdBlock = value;
  }
  public resetSegmentRoutingSrv6UsidAllocationWideLocalIdBlock() {
    this._segmentRoutingSrv6UsidAllocationWideLocalIdBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentRoutingSrv6UsidAllocationWideLocalIdBlockInput() {
    return this._segmentRoutingSrv6UsidAllocationWideLocalIdBlock;
  }

  // timers_bgp_holdtime - computed: false, optional: true, required: false
  private _timersBgpHoldtime?: number; 
  public get timersBgpHoldtime() {
    return this.getNumberAttribute('timers_bgp_holdtime');
  }
  public set timersBgpHoldtime(value: number) {
    this._timersBgpHoldtime = value;
  }
  public resetTimersBgpHoldtime() {
    this._timersBgpHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersBgpHoldtimeInput() {
    return this._timersBgpHoldtime;
  }

  // timers_bgp_holdtime_minimum_acceptable_holdtime - computed: false, optional: true, required: false
  private _timersBgpHoldtimeMinimumAcceptableHoldtime?: number; 
  public get timersBgpHoldtimeMinimumAcceptableHoldtime() {
    return this.getNumberAttribute('timers_bgp_holdtime_minimum_acceptable_holdtime');
  }
  public set timersBgpHoldtimeMinimumAcceptableHoldtime(value: number) {
    this._timersBgpHoldtimeMinimumAcceptableHoldtime = value;
  }
  public resetTimersBgpHoldtimeMinimumAcceptableHoldtime() {
    this._timersBgpHoldtimeMinimumAcceptableHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersBgpHoldtimeMinimumAcceptableHoldtimeInput() {
    return this._timersBgpHoldtimeMinimumAcceptableHoldtime;
  }

  // timers_bgp_keepalive_interval - computed: false, optional: true, required: false
  private _timersBgpKeepaliveInterval?: number; 
  public get timersBgpKeepaliveInterval() {
    return this.getNumberAttribute('timers_bgp_keepalive_interval');
  }
  public set timersBgpKeepaliveInterval(value: number) {
    this._timersBgpKeepaliveInterval = value;
  }
  public resetTimersBgpKeepaliveInterval() {
    this._timersBgpKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersBgpKeepaliveIntervalInput() {
    return this._timersBgpKeepaliveInterval;
  }

  // timers_bgp_keepalive_zero - computed: false, optional: true, required: false
  private _timersBgpKeepaliveZero?: boolean | cdktf.IResolvable; 
  public get timersBgpKeepaliveZero() {
    return this.getBooleanAttribute('timers_bgp_keepalive_zero');
  }
  public set timersBgpKeepaliveZero(value: boolean | cdktf.IResolvable) {
    this._timersBgpKeepaliveZero = value;
  }
  public resetTimersBgpKeepaliveZero() {
    this._timersBgpKeepaliveZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersBgpKeepaliveZeroInput() {
    return this._timersBgpKeepaliveZero;
  }

  // timers_bgp_keepalive_zero_holdtime_zero - computed: false, optional: true, required: false
  private _timersBgpKeepaliveZeroHoldtimeZero?: boolean | cdktf.IResolvable; 
  public get timersBgpKeepaliveZeroHoldtimeZero() {
    return this.getBooleanAttribute('timers_bgp_keepalive_zero_holdtime_zero');
  }
  public set timersBgpKeepaliveZeroHoldtimeZero(value: boolean | cdktf.IResolvable) {
    this._timersBgpKeepaliveZeroHoldtimeZero = value;
  }
  public resetTimersBgpKeepaliveZeroHoldtimeZero() {
    this._timersBgpKeepaliveZeroHoldtimeZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersBgpKeepaliveZeroHoldtimeZeroInput() {
    return this._timersBgpKeepaliveZeroHoldtimeZero;
  }

  // timers_bgp_keepalive_zero_minimum_acceptable_holdtime - computed: false, optional: true, required: false
  private _timersBgpKeepaliveZeroMinimumAcceptableHoldtime?: number; 
  public get timersBgpKeepaliveZeroMinimumAcceptableHoldtime() {
    return this.getNumberAttribute('timers_bgp_keepalive_zero_minimum_acceptable_holdtime');
  }
  public set timersBgpKeepaliveZeroMinimumAcceptableHoldtime(value: number) {
    this._timersBgpKeepaliveZeroMinimumAcceptableHoldtime = value;
  }
  public resetTimersBgpKeepaliveZeroMinimumAcceptableHoldtime() {
    this._timersBgpKeepaliveZeroMinimumAcceptableHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersBgpKeepaliveZeroMinimumAcceptableHoldtimeInput() {
    return this._timersBgpKeepaliveZeroMinimumAcceptableHoldtime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_number: cdktf.stringToTerraform(this._asNumber),
      bfd_minimum_interval: cdktf.numberToTerraform(this._bfdMinimumInterval),
      bfd_multiplier: cdktf.numberToTerraform(this._bfdMultiplier),
      bgp_bestpath_aigp_ignore: cdktf.booleanToTerraform(this._bgpBestpathAigpIgnore),
      bgp_bestpath_as_path_ignore: cdktf.booleanToTerraform(this._bgpBestpathAsPathIgnore),
      bgp_bestpath_as_path_multipath_relax: cdktf.booleanToTerraform(this._bgpBestpathAsPathMultipathRelax),
      bgp_bestpath_compare_routerid: cdktf.booleanToTerraform(this._bgpBestpathCompareRouterid),
      bgp_bestpath_cost_community_ignore: cdktf.booleanToTerraform(this._bgpBestpathCostCommunityIgnore),
      bgp_bestpath_igp_metric_ignore: cdktf.booleanToTerraform(this._bgpBestpathIgpMetricIgnore),
      bgp_bestpath_igp_metric_sr_policy: cdktf.booleanToTerraform(this._bgpBestpathIgpMetricSrPolicy),
      bgp_bestpath_med_always: cdktf.booleanToTerraform(this._bgpBestpathMedAlways),
      bgp_bestpath_med_missing_as_worst: cdktf.booleanToTerraform(this._bgpBestpathMedMissingAsWorst),
      bgp_bestpath_origin_as_allow_invalid: cdktf.booleanToTerraform(this._bgpBestpathOriginAsAllowInvalid),
      bgp_bestpath_origin_as_use_validity: cdktf.booleanToTerraform(this._bgpBestpathOriginAsUseValidity),
      bgp_bestpath_sr_policy_force: cdktf.booleanToTerraform(this._bgpBestpathSrPolicyForce),
      bgp_bestpath_sr_policy_prefer: cdktf.booleanToTerraform(this._bgpBestpathSrPolicyPrefer),
      bgp_graceful_restart_graceful_reset: cdktf.booleanToTerraform(this._bgpGracefulRestartGracefulReset),
      bgp_log_neighbor_changes_detail: cdktf.booleanToTerraform(this._bgpLogNeighborChangesDetail),
      bgp_redistribute_internal: cdktf.booleanToTerraform(this._bgpRedistributeInternal),
      bgp_router_id: cdktf.stringToTerraform(this._bgpRouterId),
      default_information_originate: cdktf.booleanToTerraform(this._defaultInformationOriginate),
      default_metric: cdktf.numberToTerraform(this._defaultMetric),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      ibgp_policy_out_enforce_modifications: cdktf.booleanToTerraform(this._ibgpPolicyOutEnforceModifications),
      neighbors: cdktf.listMapper(routerBgpNeighborsToTerraform, false)(this._neighbors.internalValue),
      nexthop_validation_color_extcomm_disable: cdktf.booleanToTerraform(this._nexthopValidationColorExtcommDisable),
      nexthop_validation_color_extcomm_sr_policy: cdktf.booleanToTerraform(this._nexthopValidationColorExtcommSrPolicy),
      nsr: cdktf.booleanToTerraform(this._nsr),
      nsr_disable: cdktf.booleanToTerraform(this._nsrDisable),
      segment_routing_srv6_locator: cdktf.stringToTerraform(this._segmentRoutingSrv6Locator),
      segment_routing_srv6_usid_allocation_wide_local_id_block: cdktf.booleanToTerraform(this._segmentRoutingSrv6UsidAllocationWideLocalIdBlock),
      timers_bgp_holdtime: cdktf.numberToTerraform(this._timersBgpHoldtime),
      timers_bgp_holdtime_minimum_acceptable_holdtime: cdktf.numberToTerraform(this._timersBgpHoldtimeMinimumAcceptableHoldtime),
      timers_bgp_keepalive_interval: cdktf.numberToTerraform(this._timersBgpKeepaliveInterval),
      timers_bgp_keepalive_zero: cdktf.booleanToTerraform(this._timersBgpKeepaliveZero),
      timers_bgp_keepalive_zero_holdtime_zero: cdktf.booleanToTerraform(this._timersBgpKeepaliveZeroHoldtimeZero),
      timers_bgp_keepalive_zero_minimum_acceptable_holdtime: cdktf.numberToTerraform(this._timersBgpKeepaliveZeroMinimumAcceptableHoldtime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as_number: {
        value: cdktf.stringToHclTerraform(this._asNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_minimum_interval: {
        value: cdktf.numberToHclTerraform(this._bfdMinimumInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_multiplier: {
        value: cdktf.numberToHclTerraform(this._bfdMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_bestpath_aigp_ignore: {
        value: cdktf.booleanToHclTerraform(this._bgpBestpathAigpIgnore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_bestpath_as_path_ignore: {
        value: cdktf.booleanToHclTerraform(this._bgpBestpathAsPathIgnore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_bestpath_as_path_multipath_relax: {
        value: cdktf.booleanToHclTerraform(this._bgpBestpathAsPathMultipathRelax),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_bestpath_compare_routerid: {
        value: cdktf.booleanToHclTerraform(this._bgpBestpathCompareRouterid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_bestpath_cost_community_ignore: {
        value: cdktf.booleanToHclTerraform(this._bgpBestpathCostCommunityIgnore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_bestpath_igp_metric_ignore: {
        value: cdktf.booleanToHclTerraform(this._bgpBestpathIgpMetricIgnore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_bestpath_igp_metric_sr_policy: {
        value: cdktf.booleanToHclTerraform(this._bgpBestpathIgpMetricSrPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_bestpath_med_always: {
        value: cdktf.booleanToHclTerraform(this._bgpBestpathMedAlways),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_bestpath_med_missing_as_worst: {
        value: cdktf.booleanToHclTerraform(this._bgpBestpathMedMissingAsWorst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_bestpath_origin_as_allow_invalid: {
        value: cdktf.booleanToHclTerraform(this._bgpBestpathOriginAsAllowInvalid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_bestpath_origin_as_use_validity: {
        value: cdktf.booleanToHclTerraform(this._bgpBestpathOriginAsUseValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_bestpath_sr_policy_force: {
        value: cdktf.booleanToHclTerraform(this._bgpBestpathSrPolicyForce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_bestpath_sr_policy_prefer: {
        value: cdktf.booleanToHclTerraform(this._bgpBestpathSrPolicyPrefer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_graceful_restart_graceful_reset: {
        value: cdktf.booleanToHclTerraform(this._bgpGracefulRestartGracefulReset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_log_neighbor_changes_detail: {
        value: cdktf.booleanToHclTerraform(this._bgpLogNeighborChangesDetail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_redistribute_internal: {
        value: cdktf.booleanToHclTerraform(this._bgpRedistributeInternal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_router_id: {
        value: cdktf.stringToHclTerraform(this._bgpRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_information_originate: {
        value: cdktf.booleanToHclTerraform(this._defaultInformationOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_metric: {
        value: cdktf.numberToHclTerraform(this._defaultMetric),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ibgp_policy_out_enforce_modifications: {
        value: cdktf.booleanToHclTerraform(this._ibgpPolicyOutEnforceModifications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      neighbors: {
        value: cdktf.listMapperHcl(routerBgpNeighborsToHclTerraform, false)(this._neighbors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpNeighborsList",
      },
      nexthop_validation_color_extcomm_disable: {
        value: cdktf.booleanToHclTerraform(this._nexthopValidationColorExtcommDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nexthop_validation_color_extcomm_sr_policy: {
        value: cdktf.booleanToHclTerraform(this._nexthopValidationColorExtcommSrPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsr: {
        value: cdktf.booleanToHclTerraform(this._nsr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsr_disable: {
        value: cdktf.booleanToHclTerraform(this._nsrDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      segment_routing_srv6_locator: {
        value: cdktf.stringToHclTerraform(this._segmentRoutingSrv6Locator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_routing_srv6_usid_allocation_wide_local_id_block: {
        value: cdktf.booleanToHclTerraform(this._segmentRoutingSrv6UsidAllocationWideLocalIdBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timers_bgp_holdtime: {
        value: cdktf.numberToHclTerraform(this._timersBgpHoldtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_bgp_holdtime_minimum_acceptable_holdtime: {
        value: cdktf.numberToHclTerraform(this._timersBgpHoldtimeMinimumAcceptableHoldtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_bgp_keepalive_interval: {
        value: cdktf.numberToHclTerraform(this._timersBgpKeepaliveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_bgp_keepalive_zero: {
        value: cdktf.booleanToHclTerraform(this._timersBgpKeepaliveZero),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timers_bgp_keepalive_zero_holdtime_zero: {
        value: cdktf.booleanToHclTerraform(this._timersBgpKeepaliveZeroHoldtimeZero),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timers_bgp_keepalive_zero_minimum_acceptable_holdtime: {
        value: cdktf.numberToHclTerraform(this._timersBgpKeepaliveZeroMinimumAcceptableHoldtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
