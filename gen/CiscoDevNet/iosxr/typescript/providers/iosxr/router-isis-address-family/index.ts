// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIsisAddressFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Advertise additional link attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#advertise_link_attributes RouterIsisAddressFamily#advertise_link_attributes}
  */
  readonly advertiseLinkAttributes?: boolean | cdktf.IResolvable;
  /**
  * Advertise prefixes of passive interfaces only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#advertise_passive_only RouterIsisAddressFamily#advertise_passive_only}
  */
  readonly advertisePassiveOnly?: boolean | cdktf.IResolvable;
  /**
  * af-name
  *   - Choices: `ipv4`, `ipv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#af_name RouterIsisAddressFamily#af_name}
  */
  readonly afName: string;
  /**
  * Distribute a default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#default_information_originate RouterIsisAddressFamily#default_information_originate}
  */
  readonly defaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#delete_mode RouterIsisAddressFamily#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#device RouterIsisAddressFamily#device}
  */
  readonly device?: string;
  /**
  * Delay before running FRR computation
  *   - Range: `100`-`60000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_delay_interval RouterIsisAddressFamily#fast_reroute_delay_interval}
  */
  readonly fastRerouteDelayInterval?: number;
  /**
  * Limit backup computation upto the prefix priority
  *   - Choices: `critical`, `high`, `medium`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_link_priority_limit RouterIsisAddressFamily#fast_reroute_per_link_priority_limit}
  */
  readonly fastReroutePerLinkPriorityLimit?: string;
  /**
  * Set priority-limit for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_link_priority_limit_levels RouterIsisAddressFamily#fast_reroute_per_link_priority_limit_levels}
  */
  readonly fastReroutePerLinkPriorityLimitLevels?: RouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevels[] | cdktf.IResolvable;
  /**
  * Exclude all interfaces from computation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_link_use_candidate_only RouterIsisAddressFamily#fast_reroute_per_link_use_candidate_only}
  */
  readonly fastReroutePerLinkUseCandidateOnly?: boolean | cdktf.IResolvable;
  /**
  * Disable load sharing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_load_sharing_disable RouterIsisAddressFamily#fast_reroute_per_prefix_load_sharing_disable}
  */
  readonly fastReroutePerPrefixLoadSharingDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable load sharing for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_load_sharing_disable_levels RouterIsisAddressFamily#fast_reroute_per_prefix_load_sharing_disable_levels}
  */
  readonly fastReroutePerPrefixLoadSharingDisableLevels?: RouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevels[] | cdktf.IResolvable;
  /**
  * Limit backup computation upto the prefix priority
  *   - Choices: `critical`, `high`, `medium`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_priority_limit RouterIsisAddressFamily#fast_reroute_per_prefix_priority_limit}
  */
  readonly fastReroutePerPrefixPriorityLimit?: string;
  /**
  * Set priority-limit for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_priority_limit_levels RouterIsisAddressFamily#fast_reroute_per_prefix_priority_limit_levels}
  */
  readonly fastReroutePerPrefixPriorityLimitLevels?: RouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevels[] | cdktf.IResolvable;
  /**
  * Filter PQ node router ID based on prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_remote_lfa_prefix_list RouterIsisAddressFamily#fast_reroute_per_prefix_remote_lfa_prefix_list}
  */
  readonly fastReroutePerPrefixRemoteLfaPrefixList?: string;
  /**
  * Enable router ID filtering for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_remote_lfa_prefix_list_levels RouterIsisAddressFamily#fast_reroute_per_prefix_remote_lfa_prefix_list_levels}
  */
  readonly fastReroutePerPrefixRemoteLfaPrefixListLevels?: RouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevels[] | cdktf.IResolvable;
  /**
  * Weighted global SRLG protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_srlg_protection_weighted_global RouterIsisAddressFamily#fast_reroute_per_prefix_srlg_protection_weighted_global}
  */
  readonly fastReroutePerPrefixSrlgProtectionWeightedGlobal?: boolean | cdktf.IResolvable;
  /**
  * Set SRLG protection type for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_srlg_protection_weighted_global_levels RouterIsisAddressFamily#fast_reroute_per_prefix_srlg_protection_weighted_global_levels}
  */
  readonly fastReroutePerPrefixSrlgProtectionWeightedGlobalLevels?: RouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevels[] | cdktf.IResolvable;
  /**
  * Set preference order among tiebreakers
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_tiebreaker_downstream_index RouterIsisAddressFamily#fast_reroute_per_prefix_tiebreaker_downstream_index}
  */
  readonly fastReroutePerPrefixTiebreakerDownstreamIndex?: number;
  /**
  * Set preference order among tiebreakers
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_tiebreaker_lc_disjoint_index RouterIsisAddressFamily#fast_reroute_per_prefix_tiebreaker_lc_disjoint_index}
  */
  readonly fastReroutePerPrefixTiebreakerLcDisjointIndex?: number;
  /**
  * Set preference order among tiebreakers
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_tiebreaker_lowest_backup_metric_index RouterIsisAddressFamily#fast_reroute_per_prefix_tiebreaker_lowest_backup_metric_index}
  */
  readonly fastReroutePerPrefixTiebreakerLowestBackupMetricIndex?: number;
  /**
  * Set preference order among tiebreakers
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_tiebreaker_node_protecting_index RouterIsisAddressFamily#fast_reroute_per_prefix_tiebreaker_node_protecting_index}
  */
  readonly fastReroutePerPrefixTiebreakerNodeProtectingIndex?: number;
  /**
  * Set preference order among tiebreakers
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_tiebreaker_primary_path_index RouterIsisAddressFamily#fast_reroute_per_prefix_tiebreaker_primary_path_index}
  */
  readonly fastReroutePerPrefixTiebreakerPrimaryPathIndex?: number;
  /**
  * Set preference order among tiebreakers
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_tiebreaker_secondary_path_index RouterIsisAddressFamily#fast_reroute_per_prefix_tiebreaker_secondary_path_index}
  */
  readonly fastReroutePerPrefixTiebreakerSecondaryPathIndex?: number;
  /**
  * Set preference order among tiebreakers
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_tiebreaker_srlg_disjoint_index RouterIsisAddressFamily#fast_reroute_per_prefix_tiebreaker_srlg_disjoint_index}
  */
  readonly fastReroutePerPrefixTiebreakerSrlgDisjointIndex?: number;
  /**
  * Exclude all interfaces from computation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#fast_reroute_per_prefix_use_candidate_only RouterIsisAddressFamily#fast_reroute_per_prefix_use_candidate_only}
  */
  readonly fastReroutePerPrefixUseCandidateOnly?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of redistributed prefixes
  *   - Range: `1`-`28000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#maximum_redistributed_prefixes RouterIsisAddressFamily#maximum_redistributed_prefixes}
  */
  readonly maximumRedistributedPrefixes?: number;
  /**
  * Set maximum redistributed prefixes for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#maximum_redistributed_prefixes_levels RouterIsisAddressFamily#maximum_redistributed_prefixes_levels}
  */
  readonly maximumRedistributedPrefixesLevels?: RouterIsisAddressFamilyMaximumRedistributedPrefixesLevels[] | cdktf.IResolvable;
  /**
  * Set metric-style for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#metric_style_levels RouterIsisAddressFamily#metric_style_levels}
  */
  readonly metricStyleLevels?: RouterIsisAddressFamilyMetricStyleLevels[] | cdktf.IResolvable;
  /**
  * Use old style of TLVs with narrow metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#metric_style_narrow RouterIsisAddressFamily#metric_style_narrow}
  */
  readonly metricStyleNarrow?: boolean | cdktf.IResolvable;
  /**
  * Accept both styles of TLVs during transition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#metric_style_narrow_transition RouterIsisAddressFamily#metric_style_narrow_transition}
  */
  readonly metricStyleNarrowTransition?: boolean | cdktf.IResolvable;
  /**
  * Send and accept both styles of TLVs during transition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#metric_style_transition RouterIsisAddressFamily#metric_style_transition}
  */
  readonly metricStyleTransition?: boolean | cdktf.IResolvable;
  /**
  * Use new style of TLVs to carry wider metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#metric_style_wide RouterIsisAddressFamily#metric_style_wide}
  */
  readonly metricStyleWide?: boolean | cdktf.IResolvable;
  /**
  * Accept both styles of TLVs during transition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#metric_style_wide_transition RouterIsisAddressFamily#metric_style_wide_transition}
  */
  readonly metricStyleWideTransition?: boolean | cdktf.IResolvable;
  /**
  * Enable local microloop avoidance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#microloop_avoidance RouterIsisAddressFamily#microloop_avoidance}
  */
  readonly microloopAvoidance?: boolean | cdktf.IResolvable;
  /**
  * Enable microloop avoidance for only protected prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#microloop_avoidance_protected RouterIsisAddressFamily#microloop_avoidance_protected}
  */
  readonly microloopAvoidanceProtected?: boolean | cdktf.IResolvable;
  /**
  * Delay in milliseconds
  *   - Range: `1000`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#microloop_avoidance_rib_update_delay RouterIsisAddressFamily#microloop_avoidance_rib_update_delay}
  */
  readonly microloopAvoidanceRibUpdateDelay?: number;
  /**
  * Provide Uloop protection based on a route policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#microloop_avoidance_segment_routing_route_policy RouterIsisAddressFamily#microloop_avoidance_segment_routing_route_policy}
  */
  readonly microloopAvoidanceSegmentRoutingRoutePolicy?: string;
  /**
  * Enable LDP IGP interface auto-configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#mpls_ldp_auto_config RouterIsisAddressFamily#mpls_ldp_auto_config}
  */
  readonly mplsLdpAutoConfig?: boolean | cdktf.IResolvable;
  /**
  * Enable mpls traffic-eng at level 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#mpls_traffic_eng_level_1 RouterIsisAddressFamily#mpls_traffic_eng_level_1}
  */
  readonly mplsTrafficEngLevel1?: boolean | cdktf.IResolvable;
  /**
  * Enable mpls traffic-eng at both level 1 and 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#mpls_traffic_eng_level_1_2 RouterIsisAddressFamily#mpls_traffic_eng_level_1_2}
  */
  readonly mplsTrafficEngLevel12?: boolean | cdktf.IResolvable;
  /**
  * Enable mpls traffic-eng at level 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#mpls_traffic_eng_level_2_only RouterIsisAddressFamily#mpls_traffic_eng_level_2_only}
  */
  readonly mplsTrafficEngLevel2Only?: boolean | cdktf.IResolvable;
  /**
  * interface-name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#mpls_traffic_eng_router_id_interface_name RouterIsisAddressFamily#mpls_traffic_eng_router_id_interface_name}
  */
  readonly mplsTrafficEngRouterIdInterfaceName?: string;
  /**
  * ipv4-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#mpls_traffic_eng_router_id_ipv4_address RouterIsisAddressFamily#mpls_traffic_eng_router_id_ipv4_address}
  */
  readonly mplsTrafficEngRouterIdIpv4Address?: string;
  /**
  * Process ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#process_id RouterIsisAddressFamily#process_id}
  */
  readonly processId: string;
  /**
  * Redistribute ISIS routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#redistribute_isis RouterIsisAddressFamily#redistribute_isis}
  */
  readonly redistributeIsis?: RouterIsisAddressFamilyRedistributeIsis[] | cdktf.IResolvable;
  /**
  * Router ID Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#router_id_interface_name RouterIsisAddressFamily#router_id_interface_name}
  */
  readonly routerIdInterfaceName?: string;
  /**
  * Router ID address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#router_id_ip_address RouterIsisAddressFamily#router_id_ip_address}
  */
  readonly routerIdIpAddress?: string;
  /**
  * saf-name
  *   - Choices: `multicast`, `unicast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#saf_name RouterIsisAddressFamily#saf_name}
  */
  readonly safName: string;
  /**
  * Enable Segment Routing using MPLS encapsulation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#segment_routing_mpls_enable RouterIsisAddressFamily#segment_routing_mpls_enable}
  */
  readonly segmentRoutingMplsEnable?: boolean | cdktf.IResolvable;
  /**
  * Prefer segment routing labels over LDP labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#segment_routing_mpls_sr_prefer RouterIsisAddressFamily#segment_routing_mpls_sr_prefer}
  */
  readonly segmentRoutingMplsSrPrefer?: boolean | cdktf.IResolvable;
  /**
  * Enter SRv6 Locator submode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#segment_routing_srv6_locators RouterIsisAddressFamily#segment_routing_srv6_locators}
  */
  readonly segmentRoutingSrv6Locators?: RouterIsisAddressFamilySegmentRoutingSrv6Locators[] | cdktf.IResolvable;
  /**
  * Use RFC 8405 backoff algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_interval_ietf RouterIsisAddressFamily#spf_interval_ietf}
  */
  readonly spfIntervalIetf?: boolean | cdktf.IResolvable;
  /**
  * Holddown interval for running a route calculation [10000]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_interval_ietf_holddown_interval RouterIsisAddressFamily#spf_interval_ietf_holddown_interval}
  */
  readonly spfIntervalIetfHolddownInterval?: number;
  /**
  * Initial delay before running a route calculation [50]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_interval_ietf_initial_wait RouterIsisAddressFamily#spf_interval_ietf_initial_wait}
  */
  readonly spfIntervalIetfInitialWait?: number;
  /**
  * Time To Learn interval for running a route calculation [500]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_interval_ietf_learn_interval RouterIsisAddressFamily#spf_interval_ietf_learn_interval}
  */
  readonly spfIntervalIetfLearnInterval?: number;
  /**
  * Long delay before running a route calculation [5000]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_interval_ietf_long_wait RouterIsisAddressFamily#spf_interval_ietf_long_wait}
  */
  readonly spfIntervalIetfLongWait?: number;
  /**
  * Short delay before running a route calculation [200]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_interval_ietf_short_wait RouterIsisAddressFamily#spf_interval_ietf_short_wait}
  */
  readonly spfIntervalIetfShortWait?: number;
  /**
  * Initial delay before running a route calculation [50]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_interval_initial_wait RouterIsisAddressFamily#spf_interval_initial_wait}
  */
  readonly spfIntervalInitialWait?: number;
  /**
  * Set SPF interval for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_interval_levels RouterIsisAddressFamily#spf_interval_levels}
  */
  readonly spfIntervalLevels?: RouterIsisAddressFamilySpfIntervalLevels[] | cdktf.IResolvable;
  /**
  * Maximum delay before running a route calculation [5000]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_interval_maximum_wait RouterIsisAddressFamily#spf_interval_maximum_wait}
  */
  readonly spfIntervalMaximumWait?: number;
  /**
  * Secondary delay before running a route calculation [200]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_interval_secondary_wait RouterIsisAddressFamily#spf_interval_secondary_wait}
  */
  readonly spfIntervalSecondaryWait?: number;
  /**
  * Specify critical priority prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_prefix_priority_critical_levels RouterIsisAddressFamily#spf_prefix_priority_critical_levels}
  */
  readonly spfPrefixPriorityCriticalLevels?: RouterIsisAddressFamilySpfPrefixPriorityCriticalLevels[] | cdktf.IResolvable;
  /**
  * Prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_prefix_priority_critical_prefix_list_name RouterIsisAddressFamily#spf_prefix_priority_critical_prefix_list_name}
  */
  readonly spfPrefixPriorityCriticalPrefixListName?: string;
  /**
  * Specify a tag to indicate priority
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_prefix_priority_critical_tag RouterIsisAddressFamily#spf_prefix_priority_critical_tag}
  */
  readonly spfPrefixPriorityCriticalTag?: number;
  /**
  * Specify high priority prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_prefix_priority_high_levels RouterIsisAddressFamily#spf_prefix_priority_high_levels}
  */
  readonly spfPrefixPriorityHighLevels?: RouterIsisAddressFamilySpfPrefixPriorityHighLevels[] | cdktf.IResolvable;
  /**
  * Prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_prefix_priority_high_prefix_list_name RouterIsisAddressFamily#spf_prefix_priority_high_prefix_list_name}
  */
  readonly spfPrefixPriorityHighPrefixListName?: string;
  /**
  * Specify a tag to indicate priority
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_prefix_priority_high_tag RouterIsisAddressFamily#spf_prefix_priority_high_tag}
  */
  readonly spfPrefixPriorityHighTag?: number;
  /**
  * Specify medium priority prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_prefix_priority_medium_levels RouterIsisAddressFamily#spf_prefix_priority_medium_levels}
  */
  readonly spfPrefixPriorityMediumLevels?: RouterIsisAddressFamilySpfPrefixPriorityMediumLevels[] | cdktf.IResolvable;
  /**
  * Prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_prefix_priority_medium_prefix_list_name RouterIsisAddressFamily#spf_prefix_priority_medium_prefix_list_name}
  */
  readonly spfPrefixPriorityMediumPrefixListName?: string;
  /**
  * Specify a tag to indicate priority
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#spf_prefix_priority_medium_tag RouterIsisAddressFamily#spf_prefix_priority_medium_tag}
  */
  readonly spfPrefixPriorityMediumTag?: number;
}
export interface RouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevels {
  /**
  * Level
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#level_number RouterIsisAddressFamily#level_number}
  */
  readonly levelNumber: number;
  /**
  * Limit backup computation upto the prefix priority
  *   - Choices: `critical`, `high`, `medium`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#priority_limit RouterIsisAddressFamily#priority_limit}
  */
  readonly priorityLimit: string;
}

export function routerIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsToTerraform(struct?: RouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    priority_limit: cdktf.stringToTerraform(struct!.priorityLimit),
  }
}


export function routerIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsToHclTerraform(struct?: RouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_limit: {
      value: cdktf.stringToHclTerraform(struct!.priorityLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._priorityLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityLimit = this._priorityLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
      this._priorityLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
      this._priorityLimit = value.priorityLimit;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // priority_limit - computed: false, optional: false, required: true
  private _priorityLimit?: string; 
  public get priorityLimit() {
    return this.getStringAttribute('priority_limit');
  }
  public set priorityLimit(value: string) {
    this._priorityLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityLimitInput() {
    return this._priorityLimit;
  }
}

export class RouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsOutputReference {
    return new RouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevels {
  /**
  * Disable load sharing for one level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#level_number RouterIsisAddressFamily#level_number}
  */
  readonly levelNumber: number;
}

export function routerIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsToTerraform(struct?: RouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
  }
}


export function routerIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsToHclTerraform(struct?: RouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }
}

export class RouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsOutputReference {
    return new RouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevels {
  /**
  * Level
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#level_number RouterIsisAddressFamily#level_number}
  */
  readonly levelNumber: number;
  /**
  * Limit backup computation upto the prefix priority
  *   - Choices: `critical`, `high`, `medium`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#priority_limit RouterIsisAddressFamily#priority_limit}
  */
  readonly priorityLimit: string;
}

export function routerIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsToTerraform(struct?: RouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    priority_limit: cdktf.stringToTerraform(struct!.priorityLimit),
  }
}


export function routerIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsToHclTerraform(struct?: RouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_limit: {
      value: cdktf.stringToHclTerraform(struct!.priorityLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._priorityLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityLimit = this._priorityLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
      this._priorityLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
      this._priorityLimit = value.priorityLimit;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // priority_limit - computed: false, optional: false, required: true
  private _priorityLimit?: string; 
  public get priorityLimit() {
    return this.getStringAttribute('priority_limit');
  }
  public set priorityLimit(value: string) {
    this._priorityLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityLimitInput() {
    return this._priorityLimit;
  }
}

export class RouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsOutputReference {
    return new RouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevels {
  /**
  * Enable router ID filtering for one level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#level_number RouterIsisAddressFamily#level_number}
  */
  readonly levelNumber: number;
  /**
  * Filter PQ node router ID based on prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#prefix_list RouterIsisAddressFamily#prefix_list}
  */
  readonly prefixList: string;
}

export function routerIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsToTerraform(struct?: RouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function routerIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsToHclTerraform(struct?: RouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
      this._prefixList = value.prefixList;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // prefix_list - computed: false, optional: false, required: true
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}

export class RouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsOutputReference {
    return new RouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevels {
  /**
  * Set SRLG protection type for one level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#level_number RouterIsisAddressFamily#level_number}
  */
  readonly levelNumber: number;
}

export function routerIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsToTerraform(struct?: RouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
  }
}


export function routerIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsToHclTerraform(struct?: RouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }
}

export class RouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsOutputReference {
    return new RouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilyMaximumRedistributedPrefixesLevels {
  /**
  * Set maximum redistributed prefixes for one level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#level_number RouterIsisAddressFamily#level_number}
  */
  readonly levelNumber: number;
  /**
  * Maximum number of redistributed prefixes
  *   - Range: `1`-`28000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#maximum_redistributed_prefixes RouterIsisAddressFamily#maximum_redistributed_prefixes}
  */
  readonly maximumRedistributedPrefixes: number;
}

export function routerIsisAddressFamilyMaximumRedistributedPrefixesLevelsToTerraform(struct?: RouterIsisAddressFamilyMaximumRedistributedPrefixesLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    maximum_redistributed_prefixes: cdktf.numberToTerraform(struct!.maximumRedistributedPrefixes),
  }
}


export function routerIsisAddressFamilyMaximumRedistributedPrefixesLevelsToHclTerraform(struct?: RouterIsisAddressFamilyMaximumRedistributedPrefixesLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_redistributed_prefixes: {
      value: cdktf.numberToHclTerraform(struct!.maximumRedistributedPrefixes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyMaximumRedistributedPrefixesLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilyMaximumRedistributedPrefixesLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._maximumRedistributedPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRedistributedPrefixes = this._maximumRedistributedPrefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyMaximumRedistributedPrefixesLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
      this._maximumRedistributedPrefixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
      this._maximumRedistributedPrefixes = value.maximumRedistributedPrefixes;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // maximum_redistributed_prefixes - computed: false, optional: false, required: true
  private _maximumRedistributedPrefixes?: number; 
  public get maximumRedistributedPrefixes() {
    return this.getNumberAttribute('maximum_redistributed_prefixes');
  }
  public set maximumRedistributedPrefixes(value: number) {
    this._maximumRedistributedPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRedistributedPrefixesInput() {
    return this._maximumRedistributedPrefixes;
  }
}

export class RouterIsisAddressFamilyMaximumRedistributedPrefixesLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilyMaximumRedistributedPrefixesLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilyMaximumRedistributedPrefixesLevelsOutputReference {
    return new RouterIsisAddressFamilyMaximumRedistributedPrefixesLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilyMetricStyleLevels {
  /**
  * Level
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#level_number RouterIsisAddressFamily#level_number}
  */
  readonly levelNumber: number;
  /**
  * Use old style of TLVs with narrow metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#narrow RouterIsisAddressFamily#narrow}
  */
  readonly narrow?: boolean | cdktf.IResolvable;
  /**
  * Accept both styles of TLVs during transition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#narrow_transition RouterIsisAddressFamily#narrow_transition}
  */
  readonly narrowTransition?: boolean | cdktf.IResolvable;
  /**
  * Send and accept both styles of TLVs during transition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#transition RouterIsisAddressFamily#transition}
  */
  readonly transition?: boolean | cdktf.IResolvable;
  /**
  * Use new style of TLVs to carry wider metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#wide RouterIsisAddressFamily#wide}
  */
  readonly wide?: boolean | cdktf.IResolvable;
  /**
  * Accept both styles of TLVs during transition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#wide_transition RouterIsisAddressFamily#wide_transition}
  */
  readonly wideTransition?: boolean | cdktf.IResolvable;
}

export function routerIsisAddressFamilyMetricStyleLevelsToTerraform(struct?: RouterIsisAddressFamilyMetricStyleLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    narrow: cdktf.booleanToTerraform(struct!.narrow),
    narrow_transition: cdktf.booleanToTerraform(struct!.narrowTransition),
    transition: cdktf.booleanToTerraform(struct!.transition),
    wide: cdktf.booleanToTerraform(struct!.wide),
    wide_transition: cdktf.booleanToTerraform(struct!.wideTransition),
  }
}


export function routerIsisAddressFamilyMetricStyleLevelsToHclTerraform(struct?: RouterIsisAddressFamilyMetricStyleLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    narrow: {
      value: cdktf.booleanToHclTerraform(struct!.narrow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    narrow_transition: {
      value: cdktf.booleanToHclTerraform(struct!.narrowTransition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transition: {
      value: cdktf.booleanToHclTerraform(struct!.transition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wide: {
      value: cdktf.booleanToHclTerraform(struct!.wide),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wide_transition: {
      value: cdktf.booleanToHclTerraform(struct!.wideTransition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilyMetricStyleLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilyMetricStyleLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._narrow !== undefined) {
      hasAnyValues = true;
      internalValueResult.narrow = this._narrow;
    }
    if (this._narrowTransition !== undefined) {
      hasAnyValues = true;
      internalValueResult.narrowTransition = this._narrowTransition;
    }
    if (this._transition !== undefined) {
      hasAnyValues = true;
      internalValueResult.transition = this._transition;
    }
    if (this._wide !== undefined) {
      hasAnyValues = true;
      internalValueResult.wide = this._wide;
    }
    if (this._wideTransition !== undefined) {
      hasAnyValues = true;
      internalValueResult.wideTransition = this._wideTransition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyMetricStyleLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
      this._narrow = undefined;
      this._narrowTransition = undefined;
      this._transition = undefined;
      this._wide = undefined;
      this._wideTransition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
      this._narrow = value.narrow;
      this._narrowTransition = value.narrowTransition;
      this._transition = value.transition;
      this._wide = value.wide;
      this._wideTransition = value.wideTransition;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // narrow - computed: false, optional: true, required: false
  private _narrow?: boolean | cdktf.IResolvable; 
  public get narrow() {
    return this.getBooleanAttribute('narrow');
  }
  public set narrow(value: boolean | cdktf.IResolvable) {
    this._narrow = value;
  }
  public resetNarrow() {
    this._narrow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get narrowInput() {
    return this._narrow;
  }

  // narrow_transition - computed: false, optional: true, required: false
  private _narrowTransition?: boolean | cdktf.IResolvable; 
  public get narrowTransition() {
    return this.getBooleanAttribute('narrow_transition');
  }
  public set narrowTransition(value: boolean | cdktf.IResolvable) {
    this._narrowTransition = value;
  }
  public resetNarrowTransition() {
    this._narrowTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get narrowTransitionInput() {
    return this._narrowTransition;
  }

  // transition - computed: false, optional: true, required: false
  private _transition?: boolean | cdktf.IResolvable; 
  public get transition() {
    return this.getBooleanAttribute('transition');
  }
  public set transition(value: boolean | cdktf.IResolvable) {
    this._transition = value;
  }
  public resetTransition() {
    this._transition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionInput() {
    return this._transition;
  }

  // wide - computed: false, optional: true, required: false
  private _wide?: boolean | cdktf.IResolvable; 
  public get wide() {
    return this.getBooleanAttribute('wide');
  }
  public set wide(value: boolean | cdktf.IResolvable) {
    this._wide = value;
  }
  public resetWide() {
    this._wide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wideInput() {
    return this._wide;
  }

  // wide_transition - computed: false, optional: true, required: false
  private _wideTransition?: boolean | cdktf.IResolvable; 
  public get wideTransition() {
    return this.getBooleanAttribute('wide_transition');
  }
  public set wideTransition(value: boolean | cdktf.IResolvable) {
    this._wideTransition = value;
  }
  public resetWideTransition() {
    this._wideTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wideTransitionInput() {
    return this._wideTransition;
  }
}

export class RouterIsisAddressFamilyMetricStyleLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilyMetricStyleLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilyMetricStyleLevelsOutputReference {
    return new RouterIsisAddressFamilyMetricStyleLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilyRedistributeIsis {
  /**
  * Set the up/down bit to 0 in prefix advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#down_flag_clear RouterIsisAddressFamily#down_flag_clear}
  */
  readonly downFlagClear?: boolean | cdktf.IResolvable;
  /**
  * IS-IS instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#instance_id RouterIsisAddressFamily#instance_id}
  */
  readonly instanceId: string;
  /**
  * Redistribute routes into both levels
  *   - Choices: `level-1`, `level-1-2`, `level-2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#level RouterIsisAddressFamily#level}
  */
  readonly level?: string;
  /**
  * Metric for redistributed routes
  *   - Range: `0`-`16777215`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#metric RouterIsisAddressFamily#metric}
  */
  readonly metric?: number;
  /**
  * IS-IS metric type for redistributed routes
  *   - Choices: `external`, `internal`, `rib-metric-as-external`, `rib-metric-as-internal`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#metric_type RouterIsisAddressFamily#metric_type}
  */
  readonly metricType?: string;
  /**
  * Route policy reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#route_policy RouterIsisAddressFamily#route_policy}
  */
  readonly routePolicy?: string;
}

export function routerIsisAddressFamilyRedistributeIsisToTerraform(struct?: RouterIsisAddressFamilyRedistributeIsis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    down_flag_clear: cdktf.booleanToTerraform(struct!.downFlagClear),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    level: cdktf.stringToTerraform(struct!.level),
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
  }
}


export function routerIsisAddressFamilyRedistributeIsisToHclTerraform(struct?: RouterIsisAddressFamilyRedistributeIsis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    down_flag_clear: {
      value: cdktf.booleanToHclTerraform(struct!.downFlagClear),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class RouterIsisAddressFamilyRedistributeIsisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilyRedistributeIsis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downFlagClear !== undefined) {
      hasAnyValues = true;
      internalValueResult.downFlagClear = this._downFlagClear;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilyRedistributeIsis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._downFlagClear = undefined;
      this._instanceId = undefined;
      this._level = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._routePolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._downFlagClear = value.downFlagClear;
      this._instanceId = value.instanceId;
      this._level = value.level;
      this._metric = value.metric;
      this._metricType = value.metricType;
      this._routePolicy = value.routePolicy;
    }
  }

  // down_flag_clear - computed: false, optional: true, required: false
  private _downFlagClear?: boolean | cdktf.IResolvable; 
  public get downFlagClear() {
    return this.getBooleanAttribute('down_flag_clear');
  }
  public set downFlagClear(value: boolean | cdktf.IResolvable) {
    this._downFlagClear = value;
  }
  public resetDownFlagClear() {
    this._downFlagClear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downFlagClearInput() {
    return this._downFlagClear;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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

export class RouterIsisAddressFamilyRedistributeIsisList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilyRedistributeIsis[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilyRedistributeIsisOutputReference {
    return new RouterIsisAddressFamilyRedistributeIsisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevels {
  /**
  * Set Metric for one level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#level_number RouterIsisAddressFamily#level_number}
  */
  readonly levelNumber: number;
  /**
  * Srv6 locator metric
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#metric RouterIsisAddressFamily#metric}
  */
  readonly metric: number;
}

export function routerIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsToTerraform(struct?: RouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function routerIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsToHclTerraform(struct?: RouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
      this._metric = value.metric;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }
}

export class RouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsOutputReference {
    return new RouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevels {
  /**
  * Set Tag for one level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#level_number RouterIsisAddressFamily#level_number}
  */
  readonly levelNumber: number;
  /**
  * Srv6 locator tag
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#tag RouterIsisAddressFamily#tag}
  */
  readonly tag: number;
}

export function routerIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsToTerraform(struct?: RouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function routerIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsToHclTerraform(struct?: RouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
      this._tag = value.tag;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class RouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsOutputReference {
    return new RouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilySegmentRoutingSrv6Locators {
  /**
  * Advertise the locator only in the specified level
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#level RouterIsisAddressFamily#level}
  */
  readonly level?: number;
  /**
  * Locator name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#locator_name RouterIsisAddressFamily#locator_name}
  */
  readonly locatorName: string;
  /**
  * Advertise the locator metric for a given level
  *   - Range: `1`-`16777214`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#metric RouterIsisAddressFamily#metric}
  */
  readonly metric?: number;
  /**
  * Set Metric for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#metric_levels RouterIsisAddressFamily#metric_levels}
  */
  readonly metricLevels?: RouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevels[] | cdktf.IResolvable;
  /**
  * Advertise the locator tag for a given level
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#tag RouterIsisAddressFamily#tag}
  */
  readonly tag?: number;
  /**
  * Set Tag for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#tag_levels RouterIsisAddressFamily#tag_levels}
  */
  readonly tagLevels?: RouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevels[] | cdktf.IResolvable;
}

export function routerIsisAddressFamilySegmentRoutingSrv6LocatorsToTerraform(struct?: RouterIsisAddressFamilySegmentRoutingSrv6Locators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.numberToTerraform(struct!.level),
    locator_name: cdktf.stringToTerraform(struct!.locatorName),
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_levels: cdktf.listMapper(routerIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsToTerraform, false)(struct!.metricLevels),
    tag: cdktf.numberToTerraform(struct!.tag),
    tag_levels: cdktf.listMapper(routerIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsToTerraform, false)(struct!.tagLevels),
  }
}


export function routerIsisAddressFamilySegmentRoutingSrv6LocatorsToHclTerraform(struct?: RouterIsisAddressFamilySegmentRoutingSrv6Locators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    locator_name: {
      value: cdktf.stringToHclTerraform(struct!.locatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_levels: {
      value: cdktf.listMapperHcl(routerIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsToHclTerraform, false)(struct!.metricLevels),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsList",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tag_levels: {
      value: cdktf.listMapperHcl(routerIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsToHclTerraform, false)(struct!.tagLevels),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilySegmentRoutingSrv6LocatorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilySegmentRoutingSrv6Locators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._locatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.locatorName = this._locatorName;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricLevels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricLevels = this._metricLevels?.internalValue;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._tagLevels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagLevels = this._tagLevels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilySegmentRoutingSrv6Locators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._locatorName = undefined;
      this._metric = undefined;
      this._metricLevels.internalValue = undefined;
      this._tag = undefined;
      this._tagLevels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._locatorName = value.locatorName;
      this._metric = value.metric;
      this._metricLevels.internalValue = value.metricLevels;
      this._tag = value.tag;
      this._tagLevels.internalValue = value.tagLevels;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // locator_name - computed: false, optional: false, required: true
  private _locatorName?: string; 
  public get locatorName() {
    return this.getStringAttribute('locator_name');
  }
  public set locatorName(value: string) {
    this._locatorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locatorNameInput() {
    return this._locatorName;
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

  // metric_levels - computed: false, optional: true, required: false
  private _metricLevels = new RouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevelsList(this, "metric_levels", false);
  public get metricLevels() {
    return this._metricLevels;
  }
  public putMetricLevels(value: RouterIsisAddressFamilySegmentRoutingSrv6LocatorsMetricLevels[] | cdktf.IResolvable) {
    this._metricLevels.internalValue = value;
  }
  public resetMetricLevels() {
    this._metricLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLevelsInput() {
    return this._metricLevels.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tag_levels - computed: false, optional: true, required: false
  private _tagLevels = new RouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevelsList(this, "tag_levels", false);
  public get tagLevels() {
    return this._tagLevels;
  }
  public putTagLevels(value: RouterIsisAddressFamilySegmentRoutingSrv6LocatorsTagLevels[] | cdktf.IResolvable) {
    this._tagLevels.internalValue = value;
  }
  public resetTagLevels() {
    this._tagLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagLevelsInput() {
    return this._tagLevels.internalValue;
  }
}

export class RouterIsisAddressFamilySegmentRoutingSrv6LocatorsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilySegmentRoutingSrv6Locators[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilySegmentRoutingSrv6LocatorsOutputReference {
    return new RouterIsisAddressFamilySegmentRoutingSrv6LocatorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilySpfIntervalLevels {
  /**
  * Use RFC 8405 backoff algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#ietf RouterIsisAddressFamily#ietf}
  */
  readonly ietf?: boolean | cdktf.IResolvable;
  /**
  * Holddown interval for running a route calculation [10000]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#ietf_holddown_interval RouterIsisAddressFamily#ietf_holddown_interval}
  */
  readonly ietfHolddownInterval?: number;
  /**
  * Initial delay before running a route calculation [50]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#ietf_initial_wait RouterIsisAddressFamily#ietf_initial_wait}
  */
  readonly ietfInitialWait?: number;
  /**
  * Time To Learn interval for running a route calculation [500]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#ietf_learn_interval RouterIsisAddressFamily#ietf_learn_interval}
  */
  readonly ietfLearnInterval?: number;
  /**
  * Long delay before running a route calculation [5000]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#ietf_long_wait RouterIsisAddressFamily#ietf_long_wait}
  */
  readonly ietfLongWait?: number;
  /**
  * Short delay before running a route calculation [200]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#ietf_short_wait RouterIsisAddressFamily#ietf_short_wait}
  */
  readonly ietfShortWait?: number;
  /**
  * Initial delay before running a route calculation [50]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#initial_wait RouterIsisAddressFamily#initial_wait}
  */
  readonly initialWait?: number;
  /**
  * Level
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#level_number RouterIsisAddressFamily#level_number}
  */
  readonly levelNumber: number;
  /**
  * Maximum delay before running a route calculation [5000]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#maximum_wait RouterIsisAddressFamily#maximum_wait}
  */
  readonly maximumWait?: number;
  /**
  * Secondary delay before running a route calculation [200]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#secondary_wait RouterIsisAddressFamily#secondary_wait}
  */
  readonly secondaryWait?: number;
}

export function routerIsisAddressFamilySpfIntervalLevelsToTerraform(struct?: RouterIsisAddressFamilySpfIntervalLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ietf: cdktf.booleanToTerraform(struct!.ietf),
    ietf_holddown_interval: cdktf.numberToTerraform(struct!.ietfHolddownInterval),
    ietf_initial_wait: cdktf.numberToTerraform(struct!.ietfInitialWait),
    ietf_learn_interval: cdktf.numberToTerraform(struct!.ietfLearnInterval),
    ietf_long_wait: cdktf.numberToTerraform(struct!.ietfLongWait),
    ietf_short_wait: cdktf.numberToTerraform(struct!.ietfShortWait),
    initial_wait: cdktf.numberToTerraform(struct!.initialWait),
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    maximum_wait: cdktf.numberToTerraform(struct!.maximumWait),
    secondary_wait: cdktf.numberToTerraform(struct!.secondaryWait),
  }
}


export function routerIsisAddressFamilySpfIntervalLevelsToHclTerraform(struct?: RouterIsisAddressFamilySpfIntervalLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ietf: {
      value: cdktf.booleanToHclTerraform(struct!.ietf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ietf_holddown_interval: {
      value: cdktf.numberToHclTerraform(struct!.ietfHolddownInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ietf_initial_wait: {
      value: cdktf.numberToHclTerraform(struct!.ietfInitialWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ietf_learn_interval: {
      value: cdktf.numberToHclTerraform(struct!.ietfLearnInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ietf_long_wait: {
      value: cdktf.numberToHclTerraform(struct!.ietfLongWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ietf_short_wait: {
      value: cdktf.numberToHclTerraform(struct!.ietfShortWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_wait: {
      value: cdktf.numberToHclTerraform(struct!.initialWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_wait: {
      value: cdktf.numberToHclTerraform(struct!.maximumWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_wait: {
      value: cdktf.numberToHclTerraform(struct!.secondaryWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilySpfIntervalLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilySpfIntervalLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ietf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ietf = this._ietf;
    }
    if (this._ietfHolddownInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ietfHolddownInterval = this._ietfHolddownInterval;
    }
    if (this._ietfInitialWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.ietfInitialWait = this._ietfInitialWait;
    }
    if (this._ietfLearnInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ietfLearnInterval = this._ietfLearnInterval;
    }
    if (this._ietfLongWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.ietfLongWait = this._ietfLongWait;
    }
    if (this._ietfShortWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.ietfShortWait = this._ietfShortWait;
    }
    if (this._initialWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialWait = this._initialWait;
    }
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._maximumWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumWait = this._maximumWait;
    }
    if (this._secondaryWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryWait = this._secondaryWait;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilySpfIntervalLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ietf = undefined;
      this._ietfHolddownInterval = undefined;
      this._ietfInitialWait = undefined;
      this._ietfLearnInterval = undefined;
      this._ietfLongWait = undefined;
      this._ietfShortWait = undefined;
      this._initialWait = undefined;
      this._levelNumber = undefined;
      this._maximumWait = undefined;
      this._secondaryWait = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ietf = value.ietf;
      this._ietfHolddownInterval = value.ietfHolddownInterval;
      this._ietfInitialWait = value.ietfInitialWait;
      this._ietfLearnInterval = value.ietfLearnInterval;
      this._ietfLongWait = value.ietfLongWait;
      this._ietfShortWait = value.ietfShortWait;
      this._initialWait = value.initialWait;
      this._levelNumber = value.levelNumber;
      this._maximumWait = value.maximumWait;
      this._secondaryWait = value.secondaryWait;
    }
  }

  // ietf - computed: false, optional: true, required: false
  private _ietf?: boolean | cdktf.IResolvable; 
  public get ietf() {
    return this.getBooleanAttribute('ietf');
  }
  public set ietf(value: boolean | cdktf.IResolvable) {
    this._ietf = value;
  }
  public resetIetf() {
    this._ietf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ietfInput() {
    return this._ietf;
  }

  // ietf_holddown_interval - computed: false, optional: true, required: false
  private _ietfHolddownInterval?: number; 
  public get ietfHolddownInterval() {
    return this.getNumberAttribute('ietf_holddown_interval');
  }
  public set ietfHolddownInterval(value: number) {
    this._ietfHolddownInterval = value;
  }
  public resetIetfHolddownInterval() {
    this._ietfHolddownInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ietfHolddownIntervalInput() {
    return this._ietfHolddownInterval;
  }

  // ietf_initial_wait - computed: false, optional: true, required: false
  private _ietfInitialWait?: number; 
  public get ietfInitialWait() {
    return this.getNumberAttribute('ietf_initial_wait');
  }
  public set ietfInitialWait(value: number) {
    this._ietfInitialWait = value;
  }
  public resetIetfInitialWait() {
    this._ietfInitialWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ietfInitialWaitInput() {
    return this._ietfInitialWait;
  }

  // ietf_learn_interval - computed: false, optional: true, required: false
  private _ietfLearnInterval?: number; 
  public get ietfLearnInterval() {
    return this.getNumberAttribute('ietf_learn_interval');
  }
  public set ietfLearnInterval(value: number) {
    this._ietfLearnInterval = value;
  }
  public resetIetfLearnInterval() {
    this._ietfLearnInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ietfLearnIntervalInput() {
    return this._ietfLearnInterval;
  }

  // ietf_long_wait - computed: false, optional: true, required: false
  private _ietfLongWait?: number; 
  public get ietfLongWait() {
    return this.getNumberAttribute('ietf_long_wait');
  }
  public set ietfLongWait(value: number) {
    this._ietfLongWait = value;
  }
  public resetIetfLongWait() {
    this._ietfLongWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ietfLongWaitInput() {
    return this._ietfLongWait;
  }

  // ietf_short_wait - computed: false, optional: true, required: false
  private _ietfShortWait?: number; 
  public get ietfShortWait() {
    return this.getNumberAttribute('ietf_short_wait');
  }
  public set ietfShortWait(value: number) {
    this._ietfShortWait = value;
  }
  public resetIetfShortWait() {
    this._ietfShortWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ietfShortWaitInput() {
    return this._ietfShortWait;
  }

  // initial_wait - computed: false, optional: true, required: false
  private _initialWait?: number; 
  public get initialWait() {
    return this.getNumberAttribute('initial_wait');
  }
  public set initialWait(value: number) {
    this._initialWait = value;
  }
  public resetInitialWait() {
    this._initialWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialWaitInput() {
    return this._initialWait;
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // maximum_wait - computed: false, optional: true, required: false
  private _maximumWait?: number; 
  public get maximumWait() {
    return this.getNumberAttribute('maximum_wait');
  }
  public set maximumWait(value: number) {
    this._maximumWait = value;
  }
  public resetMaximumWait() {
    this._maximumWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumWaitInput() {
    return this._maximumWait;
  }

  // secondary_wait - computed: false, optional: true, required: false
  private _secondaryWait?: number; 
  public get secondaryWait() {
    return this.getNumberAttribute('secondary_wait');
  }
  public set secondaryWait(value: number) {
    this._secondaryWait = value;
  }
  public resetSecondaryWait() {
    this._secondaryWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryWaitInput() {
    return this._secondaryWait;
  }
}

export class RouterIsisAddressFamilySpfIntervalLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilySpfIntervalLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilySpfIntervalLevelsOutputReference {
    return new RouterIsisAddressFamilySpfIntervalLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilySpfPrefixPriorityCriticalLevels {
  /**
  * Level
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#level_number RouterIsisAddressFamily#level_number}
  */
  readonly levelNumber: number;
  /**
  * Prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#prefix_list_name RouterIsisAddressFamily#prefix_list_name}
  */
  readonly prefixListName?: string;
  /**
  * Specify a tag to indicate priority
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#tag RouterIsisAddressFamily#tag}
  */
  readonly tag?: number;
}

export function routerIsisAddressFamilySpfPrefixPriorityCriticalLevelsToTerraform(struct?: RouterIsisAddressFamilySpfPrefixPriorityCriticalLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    prefix_list_name: cdktf.stringToTerraform(struct!.prefixListName),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function routerIsisAddressFamilySpfPrefixPriorityCriticalLevelsToHclTerraform(struct?: RouterIsisAddressFamilySpfPrefixPriorityCriticalLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_list_name: {
      value: cdktf.stringToHclTerraform(struct!.prefixListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilySpfPrefixPriorityCriticalLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilySpfPrefixPriorityCriticalLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._prefixListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListName = this._prefixListName;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilySpfPrefixPriorityCriticalLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
      this._prefixListName = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
      this._prefixListName = value.prefixListName;
      this._tag = value.tag;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // prefix_list_name - computed: false, optional: true, required: false
  private _prefixListName?: string; 
  public get prefixListName() {
    return this.getStringAttribute('prefix_list_name');
  }
  public set prefixListName(value: string) {
    this._prefixListName = value;
  }
  public resetPrefixListName() {
    this._prefixListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListNameInput() {
    return this._prefixListName;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class RouterIsisAddressFamilySpfPrefixPriorityCriticalLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilySpfPrefixPriorityCriticalLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilySpfPrefixPriorityCriticalLevelsOutputReference {
    return new RouterIsisAddressFamilySpfPrefixPriorityCriticalLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilySpfPrefixPriorityHighLevels {
  /**
  * Level
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#level_number RouterIsisAddressFamily#level_number}
  */
  readonly levelNumber: number;
  /**
  * Prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#prefix_list_name RouterIsisAddressFamily#prefix_list_name}
  */
  readonly prefixListName?: string;
  /**
  * Specify a tag to indicate priority
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#tag RouterIsisAddressFamily#tag}
  */
  readonly tag?: number;
}

export function routerIsisAddressFamilySpfPrefixPriorityHighLevelsToTerraform(struct?: RouterIsisAddressFamilySpfPrefixPriorityHighLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    prefix_list_name: cdktf.stringToTerraform(struct!.prefixListName),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function routerIsisAddressFamilySpfPrefixPriorityHighLevelsToHclTerraform(struct?: RouterIsisAddressFamilySpfPrefixPriorityHighLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_list_name: {
      value: cdktf.stringToHclTerraform(struct!.prefixListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilySpfPrefixPriorityHighLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilySpfPrefixPriorityHighLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._prefixListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListName = this._prefixListName;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilySpfPrefixPriorityHighLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
      this._prefixListName = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
      this._prefixListName = value.prefixListName;
      this._tag = value.tag;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // prefix_list_name - computed: false, optional: true, required: false
  private _prefixListName?: string; 
  public get prefixListName() {
    return this.getStringAttribute('prefix_list_name');
  }
  public set prefixListName(value: string) {
    this._prefixListName = value;
  }
  public resetPrefixListName() {
    this._prefixListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListNameInput() {
    return this._prefixListName;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class RouterIsisAddressFamilySpfPrefixPriorityHighLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilySpfPrefixPriorityHighLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilySpfPrefixPriorityHighLevelsOutputReference {
    return new RouterIsisAddressFamilySpfPrefixPriorityHighLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisAddressFamilySpfPrefixPriorityMediumLevels {
  /**
  * Level
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#level_number RouterIsisAddressFamily#level_number}
  */
  readonly levelNumber: number;
  /**
  * Prefix-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#prefix_list_name RouterIsisAddressFamily#prefix_list_name}
  */
  readonly prefixListName?: string;
  /**
  * Specify a tag to indicate priority
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#tag RouterIsisAddressFamily#tag}
  */
  readonly tag?: number;
}

export function routerIsisAddressFamilySpfPrefixPriorityMediumLevelsToTerraform(struct?: RouterIsisAddressFamilySpfPrefixPriorityMediumLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    prefix_list_name: cdktf.stringToTerraform(struct!.prefixListName),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function routerIsisAddressFamilySpfPrefixPriorityMediumLevelsToHclTerraform(struct?: RouterIsisAddressFamilySpfPrefixPriorityMediumLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_list_name: {
      value: cdktf.stringToHclTerraform(struct!.prefixListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisAddressFamilySpfPrefixPriorityMediumLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAddressFamilySpfPrefixPriorityMediumLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._prefixListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListName = this._prefixListName;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAddressFamilySpfPrefixPriorityMediumLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
      this._prefixListName = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
      this._prefixListName = value.prefixListName;
      this._tag = value.tag;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // prefix_list_name - computed: false, optional: true, required: false
  private _prefixListName?: string; 
  public get prefixListName() {
    return this.getStringAttribute('prefix_list_name');
  }
  public set prefixListName(value: string) {
    this._prefixListName = value;
  }
  public resetPrefixListName() {
    this._prefixListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListNameInput() {
    return this._prefixListName;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class RouterIsisAddressFamilySpfPrefixPriorityMediumLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAddressFamilySpfPrefixPriorityMediumLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAddressFamilySpfPrefixPriorityMediumLevelsOutputReference {
    return new RouterIsisAddressFamilySpfPrefixPriorityMediumLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family iosxr_router_isis_address_family}
*/
export class RouterIsisAddressFamily extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_isis_address_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIsisAddressFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIsisAddressFamily to import
  * @param importFromId The id of the existing RouterIsisAddressFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIsisAddressFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_isis_address_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_address_family iosxr_router_isis_address_family} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIsisAddressFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: RouterIsisAddressFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_isis_address_family',
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
    this._advertiseLinkAttributes = config.advertiseLinkAttributes;
    this._advertisePassiveOnly = config.advertisePassiveOnly;
    this._afName = config.afName;
    this._defaultInformationOriginate = config.defaultInformationOriginate;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._fastRerouteDelayInterval = config.fastRerouteDelayInterval;
    this._fastReroutePerLinkPriorityLimit = config.fastReroutePerLinkPriorityLimit;
    this._fastReroutePerLinkPriorityLimitLevels.internalValue = config.fastReroutePerLinkPriorityLimitLevels;
    this._fastReroutePerLinkUseCandidateOnly = config.fastReroutePerLinkUseCandidateOnly;
    this._fastReroutePerPrefixLoadSharingDisable = config.fastReroutePerPrefixLoadSharingDisable;
    this._fastReroutePerPrefixLoadSharingDisableLevels.internalValue = config.fastReroutePerPrefixLoadSharingDisableLevels;
    this._fastReroutePerPrefixPriorityLimit = config.fastReroutePerPrefixPriorityLimit;
    this._fastReroutePerPrefixPriorityLimitLevels.internalValue = config.fastReroutePerPrefixPriorityLimitLevels;
    this._fastReroutePerPrefixRemoteLfaPrefixList = config.fastReroutePerPrefixRemoteLfaPrefixList;
    this._fastReroutePerPrefixRemoteLfaPrefixListLevels.internalValue = config.fastReroutePerPrefixRemoteLfaPrefixListLevels;
    this._fastReroutePerPrefixSrlgProtectionWeightedGlobal = config.fastReroutePerPrefixSrlgProtectionWeightedGlobal;
    this._fastReroutePerPrefixSrlgProtectionWeightedGlobalLevels.internalValue = config.fastReroutePerPrefixSrlgProtectionWeightedGlobalLevels;
    this._fastReroutePerPrefixTiebreakerDownstreamIndex = config.fastReroutePerPrefixTiebreakerDownstreamIndex;
    this._fastReroutePerPrefixTiebreakerLcDisjointIndex = config.fastReroutePerPrefixTiebreakerLcDisjointIndex;
    this._fastReroutePerPrefixTiebreakerLowestBackupMetricIndex = config.fastReroutePerPrefixTiebreakerLowestBackupMetricIndex;
    this._fastReroutePerPrefixTiebreakerNodeProtectingIndex = config.fastReroutePerPrefixTiebreakerNodeProtectingIndex;
    this._fastReroutePerPrefixTiebreakerPrimaryPathIndex = config.fastReroutePerPrefixTiebreakerPrimaryPathIndex;
    this._fastReroutePerPrefixTiebreakerSecondaryPathIndex = config.fastReroutePerPrefixTiebreakerSecondaryPathIndex;
    this._fastReroutePerPrefixTiebreakerSrlgDisjointIndex = config.fastReroutePerPrefixTiebreakerSrlgDisjointIndex;
    this._fastReroutePerPrefixUseCandidateOnly = config.fastReroutePerPrefixUseCandidateOnly;
    this._maximumRedistributedPrefixes = config.maximumRedistributedPrefixes;
    this._maximumRedistributedPrefixesLevels.internalValue = config.maximumRedistributedPrefixesLevels;
    this._metricStyleLevels.internalValue = config.metricStyleLevels;
    this._metricStyleNarrow = config.metricStyleNarrow;
    this._metricStyleNarrowTransition = config.metricStyleNarrowTransition;
    this._metricStyleTransition = config.metricStyleTransition;
    this._metricStyleWide = config.metricStyleWide;
    this._metricStyleWideTransition = config.metricStyleWideTransition;
    this._microloopAvoidance = config.microloopAvoidance;
    this._microloopAvoidanceProtected = config.microloopAvoidanceProtected;
    this._microloopAvoidanceRibUpdateDelay = config.microloopAvoidanceRibUpdateDelay;
    this._microloopAvoidanceSegmentRoutingRoutePolicy = config.microloopAvoidanceSegmentRoutingRoutePolicy;
    this._mplsLdpAutoConfig = config.mplsLdpAutoConfig;
    this._mplsTrafficEngLevel1 = config.mplsTrafficEngLevel1;
    this._mplsTrafficEngLevel12 = config.mplsTrafficEngLevel12;
    this._mplsTrafficEngLevel2Only = config.mplsTrafficEngLevel2Only;
    this._mplsTrafficEngRouterIdInterfaceName = config.mplsTrafficEngRouterIdInterfaceName;
    this._mplsTrafficEngRouterIdIpv4Address = config.mplsTrafficEngRouterIdIpv4Address;
    this._processId = config.processId;
    this._redistributeIsis.internalValue = config.redistributeIsis;
    this._routerIdInterfaceName = config.routerIdInterfaceName;
    this._routerIdIpAddress = config.routerIdIpAddress;
    this._safName = config.safName;
    this._segmentRoutingMplsEnable = config.segmentRoutingMplsEnable;
    this._segmentRoutingMplsSrPrefer = config.segmentRoutingMplsSrPrefer;
    this._segmentRoutingSrv6Locators.internalValue = config.segmentRoutingSrv6Locators;
    this._spfIntervalIetf = config.spfIntervalIetf;
    this._spfIntervalIetfHolddownInterval = config.spfIntervalIetfHolddownInterval;
    this._spfIntervalIetfInitialWait = config.spfIntervalIetfInitialWait;
    this._spfIntervalIetfLearnInterval = config.spfIntervalIetfLearnInterval;
    this._spfIntervalIetfLongWait = config.spfIntervalIetfLongWait;
    this._spfIntervalIetfShortWait = config.spfIntervalIetfShortWait;
    this._spfIntervalInitialWait = config.spfIntervalInitialWait;
    this._spfIntervalLevels.internalValue = config.spfIntervalLevels;
    this._spfIntervalMaximumWait = config.spfIntervalMaximumWait;
    this._spfIntervalSecondaryWait = config.spfIntervalSecondaryWait;
    this._spfPrefixPriorityCriticalLevels.internalValue = config.spfPrefixPriorityCriticalLevels;
    this._spfPrefixPriorityCriticalPrefixListName = config.spfPrefixPriorityCriticalPrefixListName;
    this._spfPrefixPriorityCriticalTag = config.spfPrefixPriorityCriticalTag;
    this._spfPrefixPriorityHighLevels.internalValue = config.spfPrefixPriorityHighLevels;
    this._spfPrefixPriorityHighPrefixListName = config.spfPrefixPriorityHighPrefixListName;
    this._spfPrefixPriorityHighTag = config.spfPrefixPriorityHighTag;
    this._spfPrefixPriorityMediumLevels.internalValue = config.spfPrefixPriorityMediumLevels;
    this._spfPrefixPriorityMediumPrefixListName = config.spfPrefixPriorityMediumPrefixListName;
    this._spfPrefixPriorityMediumTag = config.spfPrefixPriorityMediumTag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise_link_attributes - computed: false, optional: true, required: false
  private _advertiseLinkAttributes?: boolean | cdktf.IResolvable; 
  public get advertiseLinkAttributes() {
    return this.getBooleanAttribute('advertise_link_attributes');
  }
  public set advertiseLinkAttributes(value: boolean | cdktf.IResolvable) {
    this._advertiseLinkAttributes = value;
  }
  public resetAdvertiseLinkAttributes() {
    this._advertiseLinkAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseLinkAttributesInput() {
    return this._advertiseLinkAttributes;
  }

  // advertise_passive_only - computed: false, optional: true, required: false
  private _advertisePassiveOnly?: boolean | cdktf.IResolvable; 
  public get advertisePassiveOnly() {
    return this.getBooleanAttribute('advertise_passive_only');
  }
  public set advertisePassiveOnly(value: boolean | cdktf.IResolvable) {
    this._advertisePassiveOnly = value;
  }
  public resetAdvertisePassiveOnly() {
    this._advertisePassiveOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisePassiveOnlyInput() {
    return this._advertisePassiveOnly;
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

  // fast_reroute_delay_interval - computed: false, optional: true, required: false
  private _fastRerouteDelayInterval?: number; 
  public get fastRerouteDelayInterval() {
    return this.getNumberAttribute('fast_reroute_delay_interval');
  }
  public set fastRerouteDelayInterval(value: number) {
    this._fastRerouteDelayInterval = value;
  }
  public resetFastRerouteDelayInterval() {
    this._fastRerouteDelayInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastRerouteDelayIntervalInput() {
    return this._fastRerouteDelayInterval;
  }

  // fast_reroute_per_link_priority_limit - computed: false, optional: true, required: false
  private _fastReroutePerLinkPriorityLimit?: string; 
  public get fastReroutePerLinkPriorityLimit() {
    return this.getStringAttribute('fast_reroute_per_link_priority_limit');
  }
  public set fastReroutePerLinkPriorityLimit(value: string) {
    this._fastReroutePerLinkPriorityLimit = value;
  }
  public resetFastReroutePerLinkPriorityLimit() {
    this._fastReroutePerLinkPriorityLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerLinkPriorityLimitInput() {
    return this._fastReroutePerLinkPriorityLimit;
  }

  // fast_reroute_per_link_priority_limit_levels - computed: false, optional: true, required: false
  private _fastReroutePerLinkPriorityLimitLevels = new RouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsList(this, "fast_reroute_per_link_priority_limit_levels", false);
  public get fastReroutePerLinkPriorityLimitLevels() {
    return this._fastReroutePerLinkPriorityLimitLevels;
  }
  public putFastReroutePerLinkPriorityLimitLevels(value: RouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevels[] | cdktf.IResolvable) {
    this._fastReroutePerLinkPriorityLimitLevels.internalValue = value;
  }
  public resetFastReroutePerLinkPriorityLimitLevels() {
    this._fastReroutePerLinkPriorityLimitLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerLinkPriorityLimitLevelsInput() {
    return this._fastReroutePerLinkPriorityLimitLevels.internalValue;
  }

  // fast_reroute_per_link_use_candidate_only - computed: false, optional: true, required: false
  private _fastReroutePerLinkUseCandidateOnly?: boolean | cdktf.IResolvable; 
  public get fastReroutePerLinkUseCandidateOnly() {
    return this.getBooleanAttribute('fast_reroute_per_link_use_candidate_only');
  }
  public set fastReroutePerLinkUseCandidateOnly(value: boolean | cdktf.IResolvable) {
    this._fastReroutePerLinkUseCandidateOnly = value;
  }
  public resetFastReroutePerLinkUseCandidateOnly() {
    this._fastReroutePerLinkUseCandidateOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerLinkUseCandidateOnlyInput() {
    return this._fastReroutePerLinkUseCandidateOnly;
  }

  // fast_reroute_per_prefix_load_sharing_disable - computed: false, optional: true, required: false
  private _fastReroutePerPrefixLoadSharingDisable?: boolean | cdktf.IResolvable; 
  public get fastReroutePerPrefixLoadSharingDisable() {
    return this.getBooleanAttribute('fast_reroute_per_prefix_load_sharing_disable');
  }
  public set fastReroutePerPrefixLoadSharingDisable(value: boolean | cdktf.IResolvable) {
    this._fastReroutePerPrefixLoadSharingDisable = value;
  }
  public resetFastReroutePerPrefixLoadSharingDisable() {
    this._fastReroutePerPrefixLoadSharingDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixLoadSharingDisableInput() {
    return this._fastReroutePerPrefixLoadSharingDisable;
  }

  // fast_reroute_per_prefix_load_sharing_disable_levels - computed: false, optional: true, required: false
  private _fastReroutePerPrefixLoadSharingDisableLevels = new RouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsList(this, "fast_reroute_per_prefix_load_sharing_disable_levels", false);
  public get fastReroutePerPrefixLoadSharingDisableLevels() {
    return this._fastReroutePerPrefixLoadSharingDisableLevels;
  }
  public putFastReroutePerPrefixLoadSharingDisableLevels(value: RouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevels[] | cdktf.IResolvable) {
    this._fastReroutePerPrefixLoadSharingDisableLevels.internalValue = value;
  }
  public resetFastReroutePerPrefixLoadSharingDisableLevels() {
    this._fastReroutePerPrefixLoadSharingDisableLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixLoadSharingDisableLevelsInput() {
    return this._fastReroutePerPrefixLoadSharingDisableLevels.internalValue;
  }

  // fast_reroute_per_prefix_priority_limit - computed: false, optional: true, required: false
  private _fastReroutePerPrefixPriorityLimit?: string; 
  public get fastReroutePerPrefixPriorityLimit() {
    return this.getStringAttribute('fast_reroute_per_prefix_priority_limit');
  }
  public set fastReroutePerPrefixPriorityLimit(value: string) {
    this._fastReroutePerPrefixPriorityLimit = value;
  }
  public resetFastReroutePerPrefixPriorityLimit() {
    this._fastReroutePerPrefixPriorityLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixPriorityLimitInput() {
    return this._fastReroutePerPrefixPriorityLimit;
  }

  // fast_reroute_per_prefix_priority_limit_levels - computed: false, optional: true, required: false
  private _fastReroutePerPrefixPriorityLimitLevels = new RouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsList(this, "fast_reroute_per_prefix_priority_limit_levels", false);
  public get fastReroutePerPrefixPriorityLimitLevels() {
    return this._fastReroutePerPrefixPriorityLimitLevels;
  }
  public putFastReroutePerPrefixPriorityLimitLevels(value: RouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevels[] | cdktf.IResolvable) {
    this._fastReroutePerPrefixPriorityLimitLevels.internalValue = value;
  }
  public resetFastReroutePerPrefixPriorityLimitLevels() {
    this._fastReroutePerPrefixPriorityLimitLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixPriorityLimitLevelsInput() {
    return this._fastReroutePerPrefixPriorityLimitLevels.internalValue;
  }

  // fast_reroute_per_prefix_remote_lfa_prefix_list - computed: false, optional: true, required: false
  private _fastReroutePerPrefixRemoteLfaPrefixList?: string; 
  public get fastReroutePerPrefixRemoteLfaPrefixList() {
    return this.getStringAttribute('fast_reroute_per_prefix_remote_lfa_prefix_list');
  }
  public set fastReroutePerPrefixRemoteLfaPrefixList(value: string) {
    this._fastReroutePerPrefixRemoteLfaPrefixList = value;
  }
  public resetFastReroutePerPrefixRemoteLfaPrefixList() {
    this._fastReroutePerPrefixRemoteLfaPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixRemoteLfaPrefixListInput() {
    return this._fastReroutePerPrefixRemoteLfaPrefixList;
  }

  // fast_reroute_per_prefix_remote_lfa_prefix_list_levels - computed: false, optional: true, required: false
  private _fastReroutePerPrefixRemoteLfaPrefixListLevels = new RouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsList(this, "fast_reroute_per_prefix_remote_lfa_prefix_list_levels", false);
  public get fastReroutePerPrefixRemoteLfaPrefixListLevels() {
    return this._fastReroutePerPrefixRemoteLfaPrefixListLevels;
  }
  public putFastReroutePerPrefixRemoteLfaPrefixListLevels(value: RouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevels[] | cdktf.IResolvable) {
    this._fastReroutePerPrefixRemoteLfaPrefixListLevels.internalValue = value;
  }
  public resetFastReroutePerPrefixRemoteLfaPrefixListLevels() {
    this._fastReroutePerPrefixRemoteLfaPrefixListLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixRemoteLfaPrefixListLevelsInput() {
    return this._fastReroutePerPrefixRemoteLfaPrefixListLevels.internalValue;
  }

  // fast_reroute_per_prefix_srlg_protection_weighted_global - computed: false, optional: true, required: false
  private _fastReroutePerPrefixSrlgProtectionWeightedGlobal?: boolean | cdktf.IResolvable; 
  public get fastReroutePerPrefixSrlgProtectionWeightedGlobal() {
    return this.getBooleanAttribute('fast_reroute_per_prefix_srlg_protection_weighted_global');
  }
  public set fastReroutePerPrefixSrlgProtectionWeightedGlobal(value: boolean | cdktf.IResolvable) {
    this._fastReroutePerPrefixSrlgProtectionWeightedGlobal = value;
  }
  public resetFastReroutePerPrefixSrlgProtectionWeightedGlobal() {
    this._fastReroutePerPrefixSrlgProtectionWeightedGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixSrlgProtectionWeightedGlobalInput() {
    return this._fastReroutePerPrefixSrlgProtectionWeightedGlobal;
  }

  // fast_reroute_per_prefix_srlg_protection_weighted_global_levels - computed: false, optional: true, required: false
  private _fastReroutePerPrefixSrlgProtectionWeightedGlobalLevels = new RouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsList(this, "fast_reroute_per_prefix_srlg_protection_weighted_global_levels", false);
  public get fastReroutePerPrefixSrlgProtectionWeightedGlobalLevels() {
    return this._fastReroutePerPrefixSrlgProtectionWeightedGlobalLevels;
  }
  public putFastReroutePerPrefixSrlgProtectionWeightedGlobalLevels(value: RouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevels[] | cdktf.IResolvable) {
    this._fastReroutePerPrefixSrlgProtectionWeightedGlobalLevels.internalValue = value;
  }
  public resetFastReroutePerPrefixSrlgProtectionWeightedGlobalLevels() {
    this._fastReroutePerPrefixSrlgProtectionWeightedGlobalLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsInput() {
    return this._fastReroutePerPrefixSrlgProtectionWeightedGlobalLevels.internalValue;
  }

  // fast_reroute_per_prefix_tiebreaker_downstream_index - computed: false, optional: true, required: false
  private _fastReroutePerPrefixTiebreakerDownstreamIndex?: number; 
  public get fastReroutePerPrefixTiebreakerDownstreamIndex() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_downstream_index');
  }
  public set fastReroutePerPrefixTiebreakerDownstreamIndex(value: number) {
    this._fastReroutePerPrefixTiebreakerDownstreamIndex = value;
  }
  public resetFastReroutePerPrefixTiebreakerDownstreamIndex() {
    this._fastReroutePerPrefixTiebreakerDownstreamIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixTiebreakerDownstreamIndexInput() {
    return this._fastReroutePerPrefixTiebreakerDownstreamIndex;
  }

  // fast_reroute_per_prefix_tiebreaker_lc_disjoint_index - computed: false, optional: true, required: false
  private _fastReroutePerPrefixTiebreakerLcDisjointIndex?: number; 
  public get fastReroutePerPrefixTiebreakerLcDisjointIndex() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_lc_disjoint_index');
  }
  public set fastReroutePerPrefixTiebreakerLcDisjointIndex(value: number) {
    this._fastReroutePerPrefixTiebreakerLcDisjointIndex = value;
  }
  public resetFastReroutePerPrefixTiebreakerLcDisjointIndex() {
    this._fastReroutePerPrefixTiebreakerLcDisjointIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixTiebreakerLcDisjointIndexInput() {
    return this._fastReroutePerPrefixTiebreakerLcDisjointIndex;
  }

  // fast_reroute_per_prefix_tiebreaker_lowest_backup_metric_index - computed: false, optional: true, required: false
  private _fastReroutePerPrefixTiebreakerLowestBackupMetricIndex?: number; 
  public get fastReroutePerPrefixTiebreakerLowestBackupMetricIndex() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_lowest_backup_metric_index');
  }
  public set fastReroutePerPrefixTiebreakerLowestBackupMetricIndex(value: number) {
    this._fastReroutePerPrefixTiebreakerLowestBackupMetricIndex = value;
  }
  public resetFastReroutePerPrefixTiebreakerLowestBackupMetricIndex() {
    this._fastReroutePerPrefixTiebreakerLowestBackupMetricIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixTiebreakerLowestBackupMetricIndexInput() {
    return this._fastReroutePerPrefixTiebreakerLowestBackupMetricIndex;
  }

  // fast_reroute_per_prefix_tiebreaker_node_protecting_index - computed: false, optional: true, required: false
  private _fastReroutePerPrefixTiebreakerNodeProtectingIndex?: number; 
  public get fastReroutePerPrefixTiebreakerNodeProtectingIndex() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_node_protecting_index');
  }
  public set fastReroutePerPrefixTiebreakerNodeProtectingIndex(value: number) {
    this._fastReroutePerPrefixTiebreakerNodeProtectingIndex = value;
  }
  public resetFastReroutePerPrefixTiebreakerNodeProtectingIndex() {
    this._fastReroutePerPrefixTiebreakerNodeProtectingIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixTiebreakerNodeProtectingIndexInput() {
    return this._fastReroutePerPrefixTiebreakerNodeProtectingIndex;
  }

  // fast_reroute_per_prefix_tiebreaker_primary_path_index - computed: false, optional: true, required: false
  private _fastReroutePerPrefixTiebreakerPrimaryPathIndex?: number; 
  public get fastReroutePerPrefixTiebreakerPrimaryPathIndex() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_primary_path_index');
  }
  public set fastReroutePerPrefixTiebreakerPrimaryPathIndex(value: number) {
    this._fastReroutePerPrefixTiebreakerPrimaryPathIndex = value;
  }
  public resetFastReroutePerPrefixTiebreakerPrimaryPathIndex() {
    this._fastReroutePerPrefixTiebreakerPrimaryPathIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixTiebreakerPrimaryPathIndexInput() {
    return this._fastReroutePerPrefixTiebreakerPrimaryPathIndex;
  }

  // fast_reroute_per_prefix_tiebreaker_secondary_path_index - computed: false, optional: true, required: false
  private _fastReroutePerPrefixTiebreakerSecondaryPathIndex?: number; 
  public get fastReroutePerPrefixTiebreakerSecondaryPathIndex() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_secondary_path_index');
  }
  public set fastReroutePerPrefixTiebreakerSecondaryPathIndex(value: number) {
    this._fastReroutePerPrefixTiebreakerSecondaryPathIndex = value;
  }
  public resetFastReroutePerPrefixTiebreakerSecondaryPathIndex() {
    this._fastReroutePerPrefixTiebreakerSecondaryPathIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixTiebreakerSecondaryPathIndexInput() {
    return this._fastReroutePerPrefixTiebreakerSecondaryPathIndex;
  }

  // fast_reroute_per_prefix_tiebreaker_srlg_disjoint_index - computed: false, optional: true, required: false
  private _fastReroutePerPrefixTiebreakerSrlgDisjointIndex?: number; 
  public get fastReroutePerPrefixTiebreakerSrlgDisjointIndex() {
    return this.getNumberAttribute('fast_reroute_per_prefix_tiebreaker_srlg_disjoint_index');
  }
  public set fastReroutePerPrefixTiebreakerSrlgDisjointIndex(value: number) {
    this._fastReroutePerPrefixTiebreakerSrlgDisjointIndex = value;
  }
  public resetFastReroutePerPrefixTiebreakerSrlgDisjointIndex() {
    this._fastReroutePerPrefixTiebreakerSrlgDisjointIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixTiebreakerSrlgDisjointIndexInput() {
    return this._fastReroutePerPrefixTiebreakerSrlgDisjointIndex;
  }

  // fast_reroute_per_prefix_use_candidate_only - computed: false, optional: true, required: false
  private _fastReroutePerPrefixUseCandidateOnly?: boolean | cdktf.IResolvable; 
  public get fastReroutePerPrefixUseCandidateOnly() {
    return this.getBooleanAttribute('fast_reroute_per_prefix_use_candidate_only');
  }
  public set fastReroutePerPrefixUseCandidateOnly(value: boolean | cdktf.IResolvable) {
    this._fastReroutePerPrefixUseCandidateOnly = value;
  }
  public resetFastReroutePerPrefixUseCandidateOnly() {
    this._fastReroutePerPrefixUseCandidateOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastReroutePerPrefixUseCandidateOnlyInput() {
    return this._fastReroutePerPrefixUseCandidateOnly;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maximum_redistributed_prefixes - computed: false, optional: true, required: false
  private _maximumRedistributedPrefixes?: number; 
  public get maximumRedistributedPrefixes() {
    return this.getNumberAttribute('maximum_redistributed_prefixes');
  }
  public set maximumRedistributedPrefixes(value: number) {
    this._maximumRedistributedPrefixes = value;
  }
  public resetMaximumRedistributedPrefixes() {
    this._maximumRedistributedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRedistributedPrefixesInput() {
    return this._maximumRedistributedPrefixes;
  }

  // maximum_redistributed_prefixes_levels - computed: false, optional: true, required: false
  private _maximumRedistributedPrefixesLevels = new RouterIsisAddressFamilyMaximumRedistributedPrefixesLevelsList(this, "maximum_redistributed_prefixes_levels", false);
  public get maximumRedistributedPrefixesLevels() {
    return this._maximumRedistributedPrefixesLevels;
  }
  public putMaximumRedistributedPrefixesLevels(value: RouterIsisAddressFamilyMaximumRedistributedPrefixesLevels[] | cdktf.IResolvable) {
    this._maximumRedistributedPrefixesLevels.internalValue = value;
  }
  public resetMaximumRedistributedPrefixesLevels() {
    this._maximumRedistributedPrefixesLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRedistributedPrefixesLevelsInput() {
    return this._maximumRedistributedPrefixesLevels.internalValue;
  }

  // metric_style_levels - computed: false, optional: true, required: false
  private _metricStyleLevels = new RouterIsisAddressFamilyMetricStyleLevelsList(this, "metric_style_levels", false);
  public get metricStyleLevels() {
    return this._metricStyleLevels;
  }
  public putMetricStyleLevels(value: RouterIsisAddressFamilyMetricStyleLevels[] | cdktf.IResolvable) {
    this._metricStyleLevels.internalValue = value;
  }
  public resetMetricStyleLevels() {
    this._metricStyleLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStyleLevelsInput() {
    return this._metricStyleLevels.internalValue;
  }

  // metric_style_narrow - computed: false, optional: true, required: false
  private _metricStyleNarrow?: boolean | cdktf.IResolvable; 
  public get metricStyleNarrow() {
    return this.getBooleanAttribute('metric_style_narrow');
  }
  public set metricStyleNarrow(value: boolean | cdktf.IResolvable) {
    this._metricStyleNarrow = value;
  }
  public resetMetricStyleNarrow() {
    this._metricStyleNarrow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStyleNarrowInput() {
    return this._metricStyleNarrow;
  }

  // metric_style_narrow_transition - computed: false, optional: true, required: false
  private _metricStyleNarrowTransition?: boolean | cdktf.IResolvable; 
  public get metricStyleNarrowTransition() {
    return this.getBooleanAttribute('metric_style_narrow_transition');
  }
  public set metricStyleNarrowTransition(value: boolean | cdktf.IResolvable) {
    this._metricStyleNarrowTransition = value;
  }
  public resetMetricStyleNarrowTransition() {
    this._metricStyleNarrowTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStyleNarrowTransitionInput() {
    return this._metricStyleNarrowTransition;
  }

  // metric_style_transition - computed: false, optional: true, required: false
  private _metricStyleTransition?: boolean | cdktf.IResolvable; 
  public get metricStyleTransition() {
    return this.getBooleanAttribute('metric_style_transition');
  }
  public set metricStyleTransition(value: boolean | cdktf.IResolvable) {
    this._metricStyleTransition = value;
  }
  public resetMetricStyleTransition() {
    this._metricStyleTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStyleTransitionInput() {
    return this._metricStyleTransition;
  }

  // metric_style_wide - computed: false, optional: true, required: false
  private _metricStyleWide?: boolean | cdktf.IResolvable; 
  public get metricStyleWide() {
    return this.getBooleanAttribute('metric_style_wide');
  }
  public set metricStyleWide(value: boolean | cdktf.IResolvable) {
    this._metricStyleWide = value;
  }
  public resetMetricStyleWide() {
    this._metricStyleWide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStyleWideInput() {
    return this._metricStyleWide;
  }

  // metric_style_wide_transition - computed: false, optional: true, required: false
  private _metricStyleWideTransition?: boolean | cdktf.IResolvable; 
  public get metricStyleWideTransition() {
    return this.getBooleanAttribute('metric_style_wide_transition');
  }
  public set metricStyleWideTransition(value: boolean | cdktf.IResolvable) {
    this._metricStyleWideTransition = value;
  }
  public resetMetricStyleWideTransition() {
    this._metricStyleWideTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStyleWideTransitionInput() {
    return this._metricStyleWideTransition;
  }

  // microloop_avoidance - computed: false, optional: true, required: false
  private _microloopAvoidance?: boolean | cdktf.IResolvable; 
  public get microloopAvoidance() {
    return this.getBooleanAttribute('microloop_avoidance');
  }
  public set microloopAvoidance(value: boolean | cdktf.IResolvable) {
    this._microloopAvoidance = value;
  }
  public resetMicroloopAvoidance() {
    this._microloopAvoidance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microloopAvoidanceInput() {
    return this._microloopAvoidance;
  }

  // microloop_avoidance_protected - computed: false, optional: true, required: false
  private _microloopAvoidanceProtected?: boolean | cdktf.IResolvable; 
  public get microloopAvoidanceProtected() {
    return this.getBooleanAttribute('microloop_avoidance_protected');
  }
  public set microloopAvoidanceProtected(value: boolean | cdktf.IResolvable) {
    this._microloopAvoidanceProtected = value;
  }
  public resetMicroloopAvoidanceProtected() {
    this._microloopAvoidanceProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microloopAvoidanceProtectedInput() {
    return this._microloopAvoidanceProtected;
  }

  // microloop_avoidance_rib_update_delay - computed: false, optional: true, required: false
  private _microloopAvoidanceRibUpdateDelay?: number; 
  public get microloopAvoidanceRibUpdateDelay() {
    return this.getNumberAttribute('microloop_avoidance_rib_update_delay');
  }
  public set microloopAvoidanceRibUpdateDelay(value: number) {
    this._microloopAvoidanceRibUpdateDelay = value;
  }
  public resetMicroloopAvoidanceRibUpdateDelay() {
    this._microloopAvoidanceRibUpdateDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microloopAvoidanceRibUpdateDelayInput() {
    return this._microloopAvoidanceRibUpdateDelay;
  }

  // microloop_avoidance_segment_routing_route_policy - computed: false, optional: true, required: false
  private _microloopAvoidanceSegmentRoutingRoutePolicy?: string; 
  public get microloopAvoidanceSegmentRoutingRoutePolicy() {
    return this.getStringAttribute('microloop_avoidance_segment_routing_route_policy');
  }
  public set microloopAvoidanceSegmentRoutingRoutePolicy(value: string) {
    this._microloopAvoidanceSegmentRoutingRoutePolicy = value;
  }
  public resetMicroloopAvoidanceSegmentRoutingRoutePolicy() {
    this._microloopAvoidanceSegmentRoutingRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microloopAvoidanceSegmentRoutingRoutePolicyInput() {
    return this._microloopAvoidanceSegmentRoutingRoutePolicy;
  }

  // mpls_ldp_auto_config - computed: false, optional: true, required: false
  private _mplsLdpAutoConfig?: boolean | cdktf.IResolvable; 
  public get mplsLdpAutoConfig() {
    return this.getBooleanAttribute('mpls_ldp_auto_config');
  }
  public set mplsLdpAutoConfig(value: boolean | cdktf.IResolvable) {
    this._mplsLdpAutoConfig = value;
  }
  public resetMplsLdpAutoConfig() {
    this._mplsLdpAutoConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsLdpAutoConfigInput() {
    return this._mplsLdpAutoConfig;
  }

  // mpls_traffic_eng_level_1 - computed: false, optional: true, required: false
  private _mplsTrafficEngLevel1?: boolean | cdktf.IResolvable; 
  public get mplsTrafficEngLevel1() {
    return this.getBooleanAttribute('mpls_traffic_eng_level_1');
  }
  public set mplsTrafficEngLevel1(value: boolean | cdktf.IResolvable) {
    this._mplsTrafficEngLevel1 = value;
  }
  public resetMplsTrafficEngLevel1() {
    this._mplsTrafficEngLevel1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsTrafficEngLevel1Input() {
    return this._mplsTrafficEngLevel1;
  }

  // mpls_traffic_eng_level_1_2 - computed: false, optional: true, required: false
  private _mplsTrafficEngLevel12?: boolean | cdktf.IResolvable; 
  public get mplsTrafficEngLevel12() {
    return this.getBooleanAttribute('mpls_traffic_eng_level_1_2');
  }
  public set mplsTrafficEngLevel12(value: boolean | cdktf.IResolvable) {
    this._mplsTrafficEngLevel12 = value;
  }
  public resetMplsTrafficEngLevel12() {
    this._mplsTrafficEngLevel12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsTrafficEngLevel12Input() {
    return this._mplsTrafficEngLevel12;
  }

  // mpls_traffic_eng_level_2_only - computed: false, optional: true, required: false
  private _mplsTrafficEngLevel2Only?: boolean | cdktf.IResolvable; 
  public get mplsTrafficEngLevel2Only() {
    return this.getBooleanAttribute('mpls_traffic_eng_level_2_only');
  }
  public set mplsTrafficEngLevel2Only(value: boolean | cdktf.IResolvable) {
    this._mplsTrafficEngLevel2Only = value;
  }
  public resetMplsTrafficEngLevel2Only() {
    this._mplsTrafficEngLevel2Only = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsTrafficEngLevel2OnlyInput() {
    return this._mplsTrafficEngLevel2Only;
  }

  // mpls_traffic_eng_router_id_interface_name - computed: false, optional: true, required: false
  private _mplsTrafficEngRouterIdInterfaceName?: string; 
  public get mplsTrafficEngRouterIdInterfaceName() {
    return this.getStringAttribute('mpls_traffic_eng_router_id_interface_name');
  }
  public set mplsTrafficEngRouterIdInterfaceName(value: string) {
    this._mplsTrafficEngRouterIdInterfaceName = value;
  }
  public resetMplsTrafficEngRouterIdInterfaceName() {
    this._mplsTrafficEngRouterIdInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsTrafficEngRouterIdInterfaceNameInput() {
    return this._mplsTrafficEngRouterIdInterfaceName;
  }

  // mpls_traffic_eng_router_id_ipv4_address - computed: false, optional: true, required: false
  private _mplsTrafficEngRouterIdIpv4Address?: string; 
  public get mplsTrafficEngRouterIdIpv4Address() {
    return this.getStringAttribute('mpls_traffic_eng_router_id_ipv4_address');
  }
  public set mplsTrafficEngRouterIdIpv4Address(value: string) {
    this._mplsTrafficEngRouterIdIpv4Address = value;
  }
  public resetMplsTrafficEngRouterIdIpv4Address() {
    this._mplsTrafficEngRouterIdIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsTrafficEngRouterIdIpv4AddressInput() {
    return this._mplsTrafficEngRouterIdIpv4Address;
  }

  // process_id - computed: false, optional: false, required: true
  private _processId?: string; 
  public get processId() {
    return this.getStringAttribute('process_id');
  }
  public set processId(value: string) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // redistribute_isis - computed: false, optional: true, required: false
  private _redistributeIsis = new RouterIsisAddressFamilyRedistributeIsisList(this, "redistribute_isis", false);
  public get redistributeIsis() {
    return this._redistributeIsis;
  }
  public putRedistributeIsis(value: RouterIsisAddressFamilyRedistributeIsis[] | cdktf.IResolvable) {
    this._redistributeIsis.internalValue = value;
  }
  public resetRedistributeIsis() {
    this._redistributeIsis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeIsisInput() {
    return this._redistributeIsis.internalValue;
  }

  // router_id_interface_name - computed: false, optional: true, required: false
  private _routerIdInterfaceName?: string; 
  public get routerIdInterfaceName() {
    return this.getStringAttribute('router_id_interface_name');
  }
  public set routerIdInterfaceName(value: string) {
    this._routerIdInterfaceName = value;
  }
  public resetRouterIdInterfaceName() {
    this._routerIdInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInterfaceNameInput() {
    return this._routerIdInterfaceName;
  }

  // router_id_ip_address - computed: false, optional: true, required: false
  private _routerIdIpAddress?: string; 
  public get routerIdIpAddress() {
    return this.getStringAttribute('router_id_ip_address');
  }
  public set routerIdIpAddress(value: string) {
    this._routerIdIpAddress = value;
  }
  public resetRouterIdIpAddress() {
    this._routerIdIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdIpAddressInput() {
    return this._routerIdIpAddress;
  }

  // saf_name - computed: false, optional: false, required: true
  private _safName?: string; 
  public get safName() {
    return this.getStringAttribute('saf_name');
  }
  public set safName(value: string) {
    this._safName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get safNameInput() {
    return this._safName;
  }

  // segment_routing_mpls_enable - computed: false, optional: true, required: false
  private _segmentRoutingMplsEnable?: boolean | cdktf.IResolvable; 
  public get segmentRoutingMplsEnable() {
    return this.getBooleanAttribute('segment_routing_mpls_enable');
  }
  public set segmentRoutingMplsEnable(value: boolean | cdktf.IResolvable) {
    this._segmentRoutingMplsEnable = value;
  }
  public resetSegmentRoutingMplsEnable() {
    this._segmentRoutingMplsEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentRoutingMplsEnableInput() {
    return this._segmentRoutingMplsEnable;
  }

  // segment_routing_mpls_sr_prefer - computed: false, optional: true, required: false
  private _segmentRoutingMplsSrPrefer?: boolean | cdktf.IResolvable; 
  public get segmentRoutingMplsSrPrefer() {
    return this.getBooleanAttribute('segment_routing_mpls_sr_prefer');
  }
  public set segmentRoutingMplsSrPrefer(value: boolean | cdktf.IResolvable) {
    this._segmentRoutingMplsSrPrefer = value;
  }
  public resetSegmentRoutingMplsSrPrefer() {
    this._segmentRoutingMplsSrPrefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentRoutingMplsSrPreferInput() {
    return this._segmentRoutingMplsSrPrefer;
  }

  // segment_routing_srv6_locators - computed: false, optional: true, required: false
  private _segmentRoutingSrv6Locators = new RouterIsisAddressFamilySegmentRoutingSrv6LocatorsList(this, "segment_routing_srv6_locators", false);
  public get segmentRoutingSrv6Locators() {
    return this._segmentRoutingSrv6Locators;
  }
  public putSegmentRoutingSrv6Locators(value: RouterIsisAddressFamilySegmentRoutingSrv6Locators[] | cdktf.IResolvable) {
    this._segmentRoutingSrv6Locators.internalValue = value;
  }
  public resetSegmentRoutingSrv6Locators() {
    this._segmentRoutingSrv6Locators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentRoutingSrv6LocatorsInput() {
    return this._segmentRoutingSrv6Locators.internalValue;
  }

  // spf_interval_ietf - computed: false, optional: true, required: false
  private _spfIntervalIetf?: boolean | cdktf.IResolvable; 
  public get spfIntervalIetf() {
    return this.getBooleanAttribute('spf_interval_ietf');
  }
  public set spfIntervalIetf(value: boolean | cdktf.IResolvable) {
    this._spfIntervalIetf = value;
  }
  public resetSpfIntervalIetf() {
    this._spfIntervalIetf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfIntervalIetfInput() {
    return this._spfIntervalIetf;
  }

  // spf_interval_ietf_holddown_interval - computed: false, optional: true, required: false
  private _spfIntervalIetfHolddownInterval?: number; 
  public get spfIntervalIetfHolddownInterval() {
    return this.getNumberAttribute('spf_interval_ietf_holddown_interval');
  }
  public set spfIntervalIetfHolddownInterval(value: number) {
    this._spfIntervalIetfHolddownInterval = value;
  }
  public resetSpfIntervalIetfHolddownInterval() {
    this._spfIntervalIetfHolddownInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfIntervalIetfHolddownIntervalInput() {
    return this._spfIntervalIetfHolddownInterval;
  }

  // spf_interval_ietf_initial_wait - computed: false, optional: true, required: false
  private _spfIntervalIetfInitialWait?: number; 
  public get spfIntervalIetfInitialWait() {
    return this.getNumberAttribute('spf_interval_ietf_initial_wait');
  }
  public set spfIntervalIetfInitialWait(value: number) {
    this._spfIntervalIetfInitialWait = value;
  }
  public resetSpfIntervalIetfInitialWait() {
    this._spfIntervalIetfInitialWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfIntervalIetfInitialWaitInput() {
    return this._spfIntervalIetfInitialWait;
  }

  // spf_interval_ietf_learn_interval - computed: false, optional: true, required: false
  private _spfIntervalIetfLearnInterval?: number; 
  public get spfIntervalIetfLearnInterval() {
    return this.getNumberAttribute('spf_interval_ietf_learn_interval');
  }
  public set spfIntervalIetfLearnInterval(value: number) {
    this._spfIntervalIetfLearnInterval = value;
  }
  public resetSpfIntervalIetfLearnInterval() {
    this._spfIntervalIetfLearnInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfIntervalIetfLearnIntervalInput() {
    return this._spfIntervalIetfLearnInterval;
  }

  // spf_interval_ietf_long_wait - computed: false, optional: true, required: false
  private _spfIntervalIetfLongWait?: number; 
  public get spfIntervalIetfLongWait() {
    return this.getNumberAttribute('spf_interval_ietf_long_wait');
  }
  public set spfIntervalIetfLongWait(value: number) {
    this._spfIntervalIetfLongWait = value;
  }
  public resetSpfIntervalIetfLongWait() {
    this._spfIntervalIetfLongWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfIntervalIetfLongWaitInput() {
    return this._spfIntervalIetfLongWait;
  }

  // spf_interval_ietf_short_wait - computed: false, optional: true, required: false
  private _spfIntervalIetfShortWait?: number; 
  public get spfIntervalIetfShortWait() {
    return this.getNumberAttribute('spf_interval_ietf_short_wait');
  }
  public set spfIntervalIetfShortWait(value: number) {
    this._spfIntervalIetfShortWait = value;
  }
  public resetSpfIntervalIetfShortWait() {
    this._spfIntervalIetfShortWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfIntervalIetfShortWaitInput() {
    return this._spfIntervalIetfShortWait;
  }

  // spf_interval_initial_wait - computed: false, optional: true, required: false
  private _spfIntervalInitialWait?: number; 
  public get spfIntervalInitialWait() {
    return this.getNumberAttribute('spf_interval_initial_wait');
  }
  public set spfIntervalInitialWait(value: number) {
    this._spfIntervalInitialWait = value;
  }
  public resetSpfIntervalInitialWait() {
    this._spfIntervalInitialWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfIntervalInitialWaitInput() {
    return this._spfIntervalInitialWait;
  }

  // spf_interval_levels - computed: false, optional: true, required: false
  private _spfIntervalLevels = new RouterIsisAddressFamilySpfIntervalLevelsList(this, "spf_interval_levels", false);
  public get spfIntervalLevels() {
    return this._spfIntervalLevels;
  }
  public putSpfIntervalLevels(value: RouterIsisAddressFamilySpfIntervalLevels[] | cdktf.IResolvable) {
    this._spfIntervalLevels.internalValue = value;
  }
  public resetSpfIntervalLevels() {
    this._spfIntervalLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfIntervalLevelsInput() {
    return this._spfIntervalLevels.internalValue;
  }

  // spf_interval_maximum_wait - computed: false, optional: true, required: false
  private _spfIntervalMaximumWait?: number; 
  public get spfIntervalMaximumWait() {
    return this.getNumberAttribute('spf_interval_maximum_wait');
  }
  public set spfIntervalMaximumWait(value: number) {
    this._spfIntervalMaximumWait = value;
  }
  public resetSpfIntervalMaximumWait() {
    this._spfIntervalMaximumWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfIntervalMaximumWaitInput() {
    return this._spfIntervalMaximumWait;
  }

  // spf_interval_secondary_wait - computed: false, optional: true, required: false
  private _spfIntervalSecondaryWait?: number; 
  public get spfIntervalSecondaryWait() {
    return this.getNumberAttribute('spf_interval_secondary_wait');
  }
  public set spfIntervalSecondaryWait(value: number) {
    this._spfIntervalSecondaryWait = value;
  }
  public resetSpfIntervalSecondaryWait() {
    this._spfIntervalSecondaryWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfIntervalSecondaryWaitInput() {
    return this._spfIntervalSecondaryWait;
  }

  // spf_prefix_priority_critical_levels - computed: false, optional: true, required: false
  private _spfPrefixPriorityCriticalLevels = new RouterIsisAddressFamilySpfPrefixPriorityCriticalLevelsList(this, "spf_prefix_priority_critical_levels", false);
  public get spfPrefixPriorityCriticalLevels() {
    return this._spfPrefixPriorityCriticalLevels;
  }
  public putSpfPrefixPriorityCriticalLevels(value: RouterIsisAddressFamilySpfPrefixPriorityCriticalLevels[] | cdktf.IResolvable) {
    this._spfPrefixPriorityCriticalLevels.internalValue = value;
  }
  public resetSpfPrefixPriorityCriticalLevels() {
    this._spfPrefixPriorityCriticalLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfPrefixPriorityCriticalLevelsInput() {
    return this._spfPrefixPriorityCriticalLevels.internalValue;
  }

  // spf_prefix_priority_critical_prefix_list_name - computed: false, optional: true, required: false
  private _spfPrefixPriorityCriticalPrefixListName?: string; 
  public get spfPrefixPriorityCriticalPrefixListName() {
    return this.getStringAttribute('spf_prefix_priority_critical_prefix_list_name');
  }
  public set spfPrefixPriorityCriticalPrefixListName(value: string) {
    this._spfPrefixPriorityCriticalPrefixListName = value;
  }
  public resetSpfPrefixPriorityCriticalPrefixListName() {
    this._spfPrefixPriorityCriticalPrefixListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfPrefixPriorityCriticalPrefixListNameInput() {
    return this._spfPrefixPriorityCriticalPrefixListName;
  }

  // spf_prefix_priority_critical_tag - computed: false, optional: true, required: false
  private _spfPrefixPriorityCriticalTag?: number; 
  public get spfPrefixPriorityCriticalTag() {
    return this.getNumberAttribute('spf_prefix_priority_critical_tag');
  }
  public set spfPrefixPriorityCriticalTag(value: number) {
    this._spfPrefixPriorityCriticalTag = value;
  }
  public resetSpfPrefixPriorityCriticalTag() {
    this._spfPrefixPriorityCriticalTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfPrefixPriorityCriticalTagInput() {
    return this._spfPrefixPriorityCriticalTag;
  }

  // spf_prefix_priority_high_levels - computed: false, optional: true, required: false
  private _spfPrefixPriorityHighLevels = new RouterIsisAddressFamilySpfPrefixPriorityHighLevelsList(this, "spf_prefix_priority_high_levels", false);
  public get spfPrefixPriorityHighLevels() {
    return this._spfPrefixPriorityHighLevels;
  }
  public putSpfPrefixPriorityHighLevels(value: RouterIsisAddressFamilySpfPrefixPriorityHighLevels[] | cdktf.IResolvable) {
    this._spfPrefixPriorityHighLevels.internalValue = value;
  }
  public resetSpfPrefixPriorityHighLevels() {
    this._spfPrefixPriorityHighLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfPrefixPriorityHighLevelsInput() {
    return this._spfPrefixPriorityHighLevels.internalValue;
  }

  // spf_prefix_priority_high_prefix_list_name - computed: false, optional: true, required: false
  private _spfPrefixPriorityHighPrefixListName?: string; 
  public get spfPrefixPriorityHighPrefixListName() {
    return this.getStringAttribute('spf_prefix_priority_high_prefix_list_name');
  }
  public set spfPrefixPriorityHighPrefixListName(value: string) {
    this._spfPrefixPriorityHighPrefixListName = value;
  }
  public resetSpfPrefixPriorityHighPrefixListName() {
    this._spfPrefixPriorityHighPrefixListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfPrefixPriorityHighPrefixListNameInput() {
    return this._spfPrefixPriorityHighPrefixListName;
  }

  // spf_prefix_priority_high_tag - computed: false, optional: true, required: false
  private _spfPrefixPriorityHighTag?: number; 
  public get spfPrefixPriorityHighTag() {
    return this.getNumberAttribute('spf_prefix_priority_high_tag');
  }
  public set spfPrefixPriorityHighTag(value: number) {
    this._spfPrefixPriorityHighTag = value;
  }
  public resetSpfPrefixPriorityHighTag() {
    this._spfPrefixPriorityHighTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfPrefixPriorityHighTagInput() {
    return this._spfPrefixPriorityHighTag;
  }

  // spf_prefix_priority_medium_levels - computed: false, optional: true, required: false
  private _spfPrefixPriorityMediumLevels = new RouterIsisAddressFamilySpfPrefixPriorityMediumLevelsList(this, "spf_prefix_priority_medium_levels", false);
  public get spfPrefixPriorityMediumLevels() {
    return this._spfPrefixPriorityMediumLevels;
  }
  public putSpfPrefixPriorityMediumLevels(value: RouterIsisAddressFamilySpfPrefixPriorityMediumLevels[] | cdktf.IResolvable) {
    this._spfPrefixPriorityMediumLevels.internalValue = value;
  }
  public resetSpfPrefixPriorityMediumLevels() {
    this._spfPrefixPriorityMediumLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfPrefixPriorityMediumLevelsInput() {
    return this._spfPrefixPriorityMediumLevels.internalValue;
  }

  // spf_prefix_priority_medium_prefix_list_name - computed: false, optional: true, required: false
  private _spfPrefixPriorityMediumPrefixListName?: string; 
  public get spfPrefixPriorityMediumPrefixListName() {
    return this.getStringAttribute('spf_prefix_priority_medium_prefix_list_name');
  }
  public set spfPrefixPriorityMediumPrefixListName(value: string) {
    this._spfPrefixPriorityMediumPrefixListName = value;
  }
  public resetSpfPrefixPriorityMediumPrefixListName() {
    this._spfPrefixPriorityMediumPrefixListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfPrefixPriorityMediumPrefixListNameInput() {
    return this._spfPrefixPriorityMediumPrefixListName;
  }

  // spf_prefix_priority_medium_tag - computed: false, optional: true, required: false
  private _spfPrefixPriorityMediumTag?: number; 
  public get spfPrefixPriorityMediumTag() {
    return this.getNumberAttribute('spf_prefix_priority_medium_tag');
  }
  public set spfPrefixPriorityMediumTag(value: number) {
    this._spfPrefixPriorityMediumTag = value;
  }
  public resetSpfPrefixPriorityMediumTag() {
    this._spfPrefixPriorityMediumTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfPrefixPriorityMediumTagInput() {
    return this._spfPrefixPriorityMediumTag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_link_attributes: cdktf.booleanToTerraform(this._advertiseLinkAttributes),
      advertise_passive_only: cdktf.booleanToTerraform(this._advertisePassiveOnly),
      af_name: cdktf.stringToTerraform(this._afName),
      default_information_originate: cdktf.booleanToTerraform(this._defaultInformationOriginate),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      fast_reroute_delay_interval: cdktf.numberToTerraform(this._fastRerouteDelayInterval),
      fast_reroute_per_link_priority_limit: cdktf.stringToTerraform(this._fastReroutePerLinkPriorityLimit),
      fast_reroute_per_link_priority_limit_levels: cdktf.listMapper(routerIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsToTerraform, false)(this._fastReroutePerLinkPriorityLimitLevels.internalValue),
      fast_reroute_per_link_use_candidate_only: cdktf.booleanToTerraform(this._fastReroutePerLinkUseCandidateOnly),
      fast_reroute_per_prefix_load_sharing_disable: cdktf.booleanToTerraform(this._fastReroutePerPrefixLoadSharingDisable),
      fast_reroute_per_prefix_load_sharing_disable_levels: cdktf.listMapper(routerIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsToTerraform, false)(this._fastReroutePerPrefixLoadSharingDisableLevels.internalValue),
      fast_reroute_per_prefix_priority_limit: cdktf.stringToTerraform(this._fastReroutePerPrefixPriorityLimit),
      fast_reroute_per_prefix_priority_limit_levels: cdktf.listMapper(routerIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsToTerraform, false)(this._fastReroutePerPrefixPriorityLimitLevels.internalValue),
      fast_reroute_per_prefix_remote_lfa_prefix_list: cdktf.stringToTerraform(this._fastReroutePerPrefixRemoteLfaPrefixList),
      fast_reroute_per_prefix_remote_lfa_prefix_list_levels: cdktf.listMapper(routerIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsToTerraform, false)(this._fastReroutePerPrefixRemoteLfaPrefixListLevels.internalValue),
      fast_reroute_per_prefix_srlg_protection_weighted_global: cdktf.booleanToTerraform(this._fastReroutePerPrefixSrlgProtectionWeightedGlobal),
      fast_reroute_per_prefix_srlg_protection_weighted_global_levels: cdktf.listMapper(routerIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsToTerraform, false)(this._fastReroutePerPrefixSrlgProtectionWeightedGlobalLevels.internalValue),
      fast_reroute_per_prefix_tiebreaker_downstream_index: cdktf.numberToTerraform(this._fastReroutePerPrefixTiebreakerDownstreamIndex),
      fast_reroute_per_prefix_tiebreaker_lc_disjoint_index: cdktf.numberToTerraform(this._fastReroutePerPrefixTiebreakerLcDisjointIndex),
      fast_reroute_per_prefix_tiebreaker_lowest_backup_metric_index: cdktf.numberToTerraform(this._fastReroutePerPrefixTiebreakerLowestBackupMetricIndex),
      fast_reroute_per_prefix_tiebreaker_node_protecting_index: cdktf.numberToTerraform(this._fastReroutePerPrefixTiebreakerNodeProtectingIndex),
      fast_reroute_per_prefix_tiebreaker_primary_path_index: cdktf.numberToTerraform(this._fastReroutePerPrefixTiebreakerPrimaryPathIndex),
      fast_reroute_per_prefix_tiebreaker_secondary_path_index: cdktf.numberToTerraform(this._fastReroutePerPrefixTiebreakerSecondaryPathIndex),
      fast_reroute_per_prefix_tiebreaker_srlg_disjoint_index: cdktf.numberToTerraform(this._fastReroutePerPrefixTiebreakerSrlgDisjointIndex),
      fast_reroute_per_prefix_use_candidate_only: cdktf.booleanToTerraform(this._fastReroutePerPrefixUseCandidateOnly),
      maximum_redistributed_prefixes: cdktf.numberToTerraform(this._maximumRedistributedPrefixes),
      maximum_redistributed_prefixes_levels: cdktf.listMapper(routerIsisAddressFamilyMaximumRedistributedPrefixesLevelsToTerraform, false)(this._maximumRedistributedPrefixesLevels.internalValue),
      metric_style_levels: cdktf.listMapper(routerIsisAddressFamilyMetricStyleLevelsToTerraform, false)(this._metricStyleLevels.internalValue),
      metric_style_narrow: cdktf.booleanToTerraform(this._metricStyleNarrow),
      metric_style_narrow_transition: cdktf.booleanToTerraform(this._metricStyleNarrowTransition),
      metric_style_transition: cdktf.booleanToTerraform(this._metricStyleTransition),
      metric_style_wide: cdktf.booleanToTerraform(this._metricStyleWide),
      metric_style_wide_transition: cdktf.booleanToTerraform(this._metricStyleWideTransition),
      microloop_avoidance: cdktf.booleanToTerraform(this._microloopAvoidance),
      microloop_avoidance_protected: cdktf.booleanToTerraform(this._microloopAvoidanceProtected),
      microloop_avoidance_rib_update_delay: cdktf.numberToTerraform(this._microloopAvoidanceRibUpdateDelay),
      microloop_avoidance_segment_routing_route_policy: cdktf.stringToTerraform(this._microloopAvoidanceSegmentRoutingRoutePolicy),
      mpls_ldp_auto_config: cdktf.booleanToTerraform(this._mplsLdpAutoConfig),
      mpls_traffic_eng_level_1: cdktf.booleanToTerraform(this._mplsTrafficEngLevel1),
      mpls_traffic_eng_level_1_2: cdktf.booleanToTerraform(this._mplsTrafficEngLevel12),
      mpls_traffic_eng_level_2_only: cdktf.booleanToTerraform(this._mplsTrafficEngLevel2Only),
      mpls_traffic_eng_router_id_interface_name: cdktf.stringToTerraform(this._mplsTrafficEngRouterIdInterfaceName),
      mpls_traffic_eng_router_id_ipv4_address: cdktf.stringToTerraform(this._mplsTrafficEngRouterIdIpv4Address),
      process_id: cdktf.stringToTerraform(this._processId),
      redistribute_isis: cdktf.listMapper(routerIsisAddressFamilyRedistributeIsisToTerraform, false)(this._redistributeIsis.internalValue),
      router_id_interface_name: cdktf.stringToTerraform(this._routerIdInterfaceName),
      router_id_ip_address: cdktf.stringToTerraform(this._routerIdIpAddress),
      saf_name: cdktf.stringToTerraform(this._safName),
      segment_routing_mpls_enable: cdktf.booleanToTerraform(this._segmentRoutingMplsEnable),
      segment_routing_mpls_sr_prefer: cdktf.booleanToTerraform(this._segmentRoutingMplsSrPrefer),
      segment_routing_srv6_locators: cdktf.listMapper(routerIsisAddressFamilySegmentRoutingSrv6LocatorsToTerraform, false)(this._segmentRoutingSrv6Locators.internalValue),
      spf_interval_ietf: cdktf.booleanToTerraform(this._spfIntervalIetf),
      spf_interval_ietf_holddown_interval: cdktf.numberToTerraform(this._spfIntervalIetfHolddownInterval),
      spf_interval_ietf_initial_wait: cdktf.numberToTerraform(this._spfIntervalIetfInitialWait),
      spf_interval_ietf_learn_interval: cdktf.numberToTerraform(this._spfIntervalIetfLearnInterval),
      spf_interval_ietf_long_wait: cdktf.numberToTerraform(this._spfIntervalIetfLongWait),
      spf_interval_ietf_short_wait: cdktf.numberToTerraform(this._spfIntervalIetfShortWait),
      spf_interval_initial_wait: cdktf.numberToTerraform(this._spfIntervalInitialWait),
      spf_interval_levels: cdktf.listMapper(routerIsisAddressFamilySpfIntervalLevelsToTerraform, false)(this._spfIntervalLevels.internalValue),
      spf_interval_maximum_wait: cdktf.numberToTerraform(this._spfIntervalMaximumWait),
      spf_interval_secondary_wait: cdktf.numberToTerraform(this._spfIntervalSecondaryWait),
      spf_prefix_priority_critical_levels: cdktf.listMapper(routerIsisAddressFamilySpfPrefixPriorityCriticalLevelsToTerraform, false)(this._spfPrefixPriorityCriticalLevels.internalValue),
      spf_prefix_priority_critical_prefix_list_name: cdktf.stringToTerraform(this._spfPrefixPriorityCriticalPrefixListName),
      spf_prefix_priority_critical_tag: cdktf.numberToTerraform(this._spfPrefixPriorityCriticalTag),
      spf_prefix_priority_high_levels: cdktf.listMapper(routerIsisAddressFamilySpfPrefixPriorityHighLevelsToTerraform, false)(this._spfPrefixPriorityHighLevels.internalValue),
      spf_prefix_priority_high_prefix_list_name: cdktf.stringToTerraform(this._spfPrefixPriorityHighPrefixListName),
      spf_prefix_priority_high_tag: cdktf.numberToTerraform(this._spfPrefixPriorityHighTag),
      spf_prefix_priority_medium_levels: cdktf.listMapper(routerIsisAddressFamilySpfPrefixPriorityMediumLevelsToTerraform, false)(this._spfPrefixPriorityMediumLevels.internalValue),
      spf_prefix_priority_medium_prefix_list_name: cdktf.stringToTerraform(this._spfPrefixPriorityMediumPrefixListName),
      spf_prefix_priority_medium_tag: cdktf.numberToTerraform(this._spfPrefixPriorityMediumTag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_link_attributes: {
        value: cdktf.booleanToHclTerraform(this._advertiseLinkAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_passive_only: {
        value: cdktf.booleanToHclTerraform(this._advertisePassiveOnly),
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
      default_information_originate: {
        value: cdktf.booleanToHclTerraform(this._defaultInformationOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      fast_reroute_delay_interval: {
        value: cdktf.numberToHclTerraform(this._fastRerouteDelayInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_reroute_per_link_priority_limit: {
        value: cdktf.stringToHclTerraform(this._fastReroutePerLinkPriorityLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_reroute_per_link_priority_limit_levels: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsToHclTerraform, false)(this._fastReroutePerLinkPriorityLimitLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilyFastReroutePerLinkPriorityLimitLevelsList",
      },
      fast_reroute_per_link_use_candidate_only: {
        value: cdktf.booleanToHclTerraform(this._fastReroutePerLinkUseCandidateOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fast_reroute_per_prefix_load_sharing_disable: {
        value: cdktf.booleanToHclTerraform(this._fastReroutePerPrefixLoadSharingDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fast_reroute_per_prefix_load_sharing_disable_levels: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsToHclTerraform, false)(this._fastReroutePerPrefixLoadSharingDisableLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilyFastReroutePerPrefixLoadSharingDisableLevelsList",
      },
      fast_reroute_per_prefix_priority_limit: {
        value: cdktf.stringToHclTerraform(this._fastReroutePerPrefixPriorityLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_reroute_per_prefix_priority_limit_levels: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsToHclTerraform, false)(this._fastReroutePerPrefixPriorityLimitLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilyFastReroutePerPrefixPriorityLimitLevelsList",
      },
      fast_reroute_per_prefix_remote_lfa_prefix_list: {
        value: cdktf.stringToHclTerraform(this._fastReroutePerPrefixRemoteLfaPrefixList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_reroute_per_prefix_remote_lfa_prefix_list_levels: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsToHclTerraform, false)(this._fastReroutePerPrefixRemoteLfaPrefixListLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilyFastReroutePerPrefixRemoteLfaPrefixListLevelsList",
      },
      fast_reroute_per_prefix_srlg_protection_weighted_global: {
        value: cdktf.booleanToHclTerraform(this._fastReroutePerPrefixSrlgProtectionWeightedGlobal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fast_reroute_per_prefix_srlg_protection_weighted_global_levels: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsToHclTerraform, false)(this._fastReroutePerPrefixSrlgProtectionWeightedGlobalLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilyFastReroutePerPrefixSrlgProtectionWeightedGlobalLevelsList",
      },
      fast_reroute_per_prefix_tiebreaker_downstream_index: {
        value: cdktf.numberToHclTerraform(this._fastReroutePerPrefixTiebreakerDownstreamIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_reroute_per_prefix_tiebreaker_lc_disjoint_index: {
        value: cdktf.numberToHclTerraform(this._fastReroutePerPrefixTiebreakerLcDisjointIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_reroute_per_prefix_tiebreaker_lowest_backup_metric_index: {
        value: cdktf.numberToHclTerraform(this._fastReroutePerPrefixTiebreakerLowestBackupMetricIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_reroute_per_prefix_tiebreaker_node_protecting_index: {
        value: cdktf.numberToHclTerraform(this._fastReroutePerPrefixTiebreakerNodeProtectingIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_reroute_per_prefix_tiebreaker_primary_path_index: {
        value: cdktf.numberToHclTerraform(this._fastReroutePerPrefixTiebreakerPrimaryPathIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_reroute_per_prefix_tiebreaker_secondary_path_index: {
        value: cdktf.numberToHclTerraform(this._fastReroutePerPrefixTiebreakerSecondaryPathIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_reroute_per_prefix_tiebreaker_srlg_disjoint_index: {
        value: cdktf.numberToHclTerraform(this._fastReroutePerPrefixTiebreakerSrlgDisjointIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_reroute_per_prefix_use_candidate_only: {
        value: cdktf.booleanToHclTerraform(this._fastReroutePerPrefixUseCandidateOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maximum_redistributed_prefixes: {
        value: cdktf.numberToHclTerraform(this._maximumRedistributedPrefixes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_redistributed_prefixes_levels: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilyMaximumRedistributedPrefixesLevelsToHclTerraform, false)(this._maximumRedistributedPrefixesLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilyMaximumRedistributedPrefixesLevelsList",
      },
      metric_style_levels: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilyMetricStyleLevelsToHclTerraform, false)(this._metricStyleLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilyMetricStyleLevelsList",
      },
      metric_style_narrow: {
        value: cdktf.booleanToHclTerraform(this._metricStyleNarrow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_style_narrow_transition: {
        value: cdktf.booleanToHclTerraform(this._metricStyleNarrowTransition),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_style_transition: {
        value: cdktf.booleanToHclTerraform(this._metricStyleTransition),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_style_wide: {
        value: cdktf.booleanToHclTerraform(this._metricStyleWide),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_style_wide_transition: {
        value: cdktf.booleanToHclTerraform(this._metricStyleWideTransition),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      microloop_avoidance: {
        value: cdktf.booleanToHclTerraform(this._microloopAvoidance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      microloop_avoidance_protected: {
        value: cdktf.booleanToHclTerraform(this._microloopAvoidanceProtected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      microloop_avoidance_rib_update_delay: {
        value: cdktf.numberToHclTerraform(this._microloopAvoidanceRibUpdateDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      microloop_avoidance_segment_routing_route_policy: {
        value: cdktf.stringToHclTerraform(this._microloopAvoidanceSegmentRoutingRoutePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpls_ldp_auto_config: {
        value: cdktf.booleanToHclTerraform(this._mplsLdpAutoConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mpls_traffic_eng_level_1: {
        value: cdktf.booleanToHclTerraform(this._mplsTrafficEngLevel1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mpls_traffic_eng_level_1_2: {
        value: cdktf.booleanToHclTerraform(this._mplsTrafficEngLevel12),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mpls_traffic_eng_level_2_only: {
        value: cdktf.booleanToHclTerraform(this._mplsTrafficEngLevel2Only),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mpls_traffic_eng_router_id_interface_name: {
        value: cdktf.stringToHclTerraform(this._mplsTrafficEngRouterIdInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpls_traffic_eng_router_id_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._mplsTrafficEngRouterIdIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_id: {
        value: cdktf.stringToHclTerraform(this._processId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_isis: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilyRedistributeIsisToHclTerraform, false)(this._redistributeIsis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilyRedistributeIsisList",
      },
      router_id_interface_name: {
        value: cdktf.stringToHclTerraform(this._routerIdInterfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id_ip_address: {
        value: cdktf.stringToHclTerraform(this._routerIdIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saf_name: {
        value: cdktf.stringToHclTerraform(this._safName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_routing_mpls_enable: {
        value: cdktf.booleanToHclTerraform(this._segmentRoutingMplsEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      segment_routing_mpls_sr_prefer: {
        value: cdktf.booleanToHclTerraform(this._segmentRoutingMplsSrPrefer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      segment_routing_srv6_locators: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilySegmentRoutingSrv6LocatorsToHclTerraform, false)(this._segmentRoutingSrv6Locators.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilySegmentRoutingSrv6LocatorsList",
      },
      spf_interval_ietf: {
        value: cdktf.booleanToHclTerraform(this._spfIntervalIetf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spf_interval_ietf_holddown_interval: {
        value: cdktf.numberToHclTerraform(this._spfIntervalIetfHolddownInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf_interval_ietf_initial_wait: {
        value: cdktf.numberToHclTerraform(this._spfIntervalIetfInitialWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf_interval_ietf_learn_interval: {
        value: cdktf.numberToHclTerraform(this._spfIntervalIetfLearnInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf_interval_ietf_long_wait: {
        value: cdktf.numberToHclTerraform(this._spfIntervalIetfLongWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf_interval_ietf_short_wait: {
        value: cdktf.numberToHclTerraform(this._spfIntervalIetfShortWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf_interval_initial_wait: {
        value: cdktf.numberToHclTerraform(this._spfIntervalInitialWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf_interval_levels: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilySpfIntervalLevelsToHclTerraform, false)(this._spfIntervalLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilySpfIntervalLevelsList",
      },
      spf_interval_maximum_wait: {
        value: cdktf.numberToHclTerraform(this._spfIntervalMaximumWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf_interval_secondary_wait: {
        value: cdktf.numberToHclTerraform(this._spfIntervalSecondaryWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf_prefix_priority_critical_levels: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilySpfPrefixPriorityCriticalLevelsToHclTerraform, false)(this._spfPrefixPriorityCriticalLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilySpfPrefixPriorityCriticalLevelsList",
      },
      spf_prefix_priority_critical_prefix_list_name: {
        value: cdktf.stringToHclTerraform(this._spfPrefixPriorityCriticalPrefixListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spf_prefix_priority_critical_tag: {
        value: cdktf.numberToHclTerraform(this._spfPrefixPriorityCriticalTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf_prefix_priority_high_levels: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilySpfPrefixPriorityHighLevelsToHclTerraform, false)(this._spfPrefixPriorityHighLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilySpfPrefixPriorityHighLevelsList",
      },
      spf_prefix_priority_high_prefix_list_name: {
        value: cdktf.stringToHclTerraform(this._spfPrefixPriorityHighPrefixListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spf_prefix_priority_high_tag: {
        value: cdktf.numberToHclTerraform(this._spfPrefixPriorityHighTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spf_prefix_priority_medium_levels: {
        value: cdktf.listMapperHcl(routerIsisAddressFamilySpfPrefixPriorityMediumLevelsToHclTerraform, false)(this._spfPrefixPriorityMediumLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAddressFamilySpfPrefixPriorityMediumLevelsList",
      },
      spf_prefix_priority_medium_prefix_list_name: {
        value: cdktf.stringToHclTerraform(this._spfPrefixPriorityMediumPrefixListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spf_prefix_priority_medium_tag: {
        value: cdktf.numberToHclTerraform(this._spfPrefixPriorityMediumTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
