// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpVrfConfig extends cdktf.TerraformMetaArguments {
  /**
  * bgp as-number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#as_number RouterBgpVrf#as_number}
  */
  readonly asNumber: string;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#bfd_minimum_interval RouterBgpVrf#bfd_minimum_interval}
  */
  readonly bfdMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `2`-`16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#bfd_multiplier RouterBgpVrf#bfd_multiplier}
  */
  readonly bfdMultiplier?: number;
  /**
  * Configure Router-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#bgp_router_id RouterBgpVrf#bgp_router_id}
  */
  readonly bgpRouterId?: string;
  /**
  * Distribute a default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#default_information_originate RouterBgpVrf#default_information_originate}
  */
  readonly defaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * default redistributed metric
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#default_metric RouterBgpVrf#default_metric}
  */
  readonly defaultMetric?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#delete_mode RouterBgpVrf#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#device RouterBgpVrf#device}
  */
  readonly device?: string;
  /**
  * Specify a neighbor router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#neighbors RouterBgpVrf#neighbors}
  */
  readonly neighbors?: RouterBgpVrfNeighbors[] | cdktf.IResolvable;
  /**
  * Automatic route distinguisher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#rd_auto RouterBgpVrf#rd_auto}
  */
  readonly rdAuto?: boolean | cdktf.IResolvable;
  /**
  * ASN4:index (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#rd_four_byte_as_index RouterBgpVrf#rd_four_byte_as_index}
  */
  readonly rdFourByteAsIndex?: number;
  /**
  * 4-byte AS number in asplain format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#rd_four_byte_as_number RouterBgpVrf#rd_four_byte_as_number}
  */
  readonly rdFourByteAsNumber?: string;
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#rd_ipv4_address_address RouterBgpVrf#rd_ipv4_address_address}
  */
  readonly rdIpv4AddressAddress?: string;
  /**
  * IPv4Address:index (hex or decimal format)
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#rd_ipv4_address_index RouterBgpVrf#rd_ipv4_address_index}
  */
  readonly rdIpv4AddressIndex?: number;
  /**
  * ASN2:index (hex or decimal format)
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#rd_two_byte_as_index RouterBgpVrf#rd_two_byte_as_index}
  */
  readonly rdTwoByteAsIndex?: number;
  /**
  * 2-byte AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#rd_two_byte_as_number RouterBgpVrf#rd_two_byte_as_number}
  */
  readonly rdTwoByteAsNumber?: string;
  /**
  * Holdtime
  *   - Range: `3`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#timers_bgp_holdtime RouterBgpVrf#timers_bgp_holdtime}
  */
  readonly timersBgpHoldtime?: number;
  /**
  * Minimum acceptable holdtime from neighbor
  *   - Range: `3`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#timers_bgp_holdtime_minimum_acceptable_holdtime RouterBgpVrf#timers_bgp_holdtime_minimum_acceptable_holdtime}
  */
  readonly timersBgpHoldtimeMinimumAcceptableHoldtime?: number;
  /**
  * Keepalive interval
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#timers_bgp_keepalive_interval RouterBgpVrf#timers_bgp_keepalive_interval}
  */
  readonly timersBgpKeepaliveInterval?: number;
  /**
  * Disable keepalives/hold time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#timers_bgp_keepalive_zero RouterBgpVrf#timers_bgp_keepalive_zero}
  */
  readonly timersBgpKeepaliveZero?: boolean | cdktf.IResolvable;
  /**
  * Disable keepalives/hold time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#timers_bgp_keepalive_zero_holdtime_zero RouterBgpVrf#timers_bgp_keepalive_zero_holdtime_zero}
  */
  readonly timersBgpKeepaliveZeroHoldtimeZero?: boolean | cdktf.IResolvable;
  /**
  * Minimum acceptable holdtime from neighbor
  *   - Range: `3`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#timers_bgp_keepalive_zero_minimum_acceptable_holdtime RouterBgpVrf#timers_bgp_keepalive_zero_minimum_acceptable_holdtime}
  */
  readonly timersBgpKeepaliveZeroMinimumAcceptableHoldtime?: number;
  /**
  * VRF name - maximum length 32 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#vrf_name RouterBgpVrf#vrf_name}
  */
  readonly vrfName: string;
}
export interface RouterBgpVrfNeighbors {
  /**
  * IPaddress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#address RouterBgpVrf#address}
  */
  readonly address: string;
  /**
  * time in milliseconds
  *   - Range: `0`-`999`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#advertisement_interval_milliseconds RouterBgpVrf#advertisement_interval_milliseconds}
  */
  readonly advertisementIntervalMilliseconds?: number;
  /**
  * time in seconds
  *   - Range: `0`-`600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#advertisement_interval_seconds RouterBgpVrf#advertisement_interval_seconds}
  */
  readonly advertisementIntervalSeconds?: number;
  /**
  * Enable Fast detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#bfd_fast_detect RouterBgpVrf#bfd_fast_detect}
  */
  readonly bfdFastDetect?: boolean | cdktf.IResolvable;
  /**
  * Prevent bfd settings from being inherited from the parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#bfd_fast_detect_disable RouterBgpVrf#bfd_fast_detect_disable}
  */
  readonly bfdFastDetectDisable?: boolean | cdktf.IResolvable;
  /**
  * (Deprecated) Hold down neighbor session until BFD is up (based on IOS-XR proprietary mechanism)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#bfd_fast_detect_strict_mode RouterBgpVrf#bfd_fast_detect_strict_mode}
  */
  readonly bfdFastDetectStrictMode?: boolean | cdktf.IResolvable;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#bfd_minimum_interval RouterBgpVrf#bfd_minimum_interval}
  */
  readonly bfdMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `2`-`16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#bfd_multiplier RouterBgpVrf#bfd_multiplier}
  */
  readonly bfdMultiplier?: number;
  /**
  * Neighbor specific description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#description RouterBgpVrf#description}
  */
  readonly description?: string;
  /**
  * maximum hop count
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#ebgp_multihop_maximum_hop_count RouterBgpVrf#ebgp_multihop_maximum_hop_count}
  */
  readonly ebgpMultihopMaximumHopCount?: number;
  /**
  * Bypass the directly connected nexthop check for single-hop eBGP peering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#ignore_connected_check RouterBgpVrf#ignore_connected_check}
  */
  readonly ignoreConnectedCheck?: boolean | cdktf.IResolvable;
  /**
  * AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#local_as RouterBgpVrf#local_as}
  */
  readonly localAs?: string;
  /**
  * Prevent local AS from being inherited from parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#local_as_inheritance_disable RouterBgpVrf#local_as_inheritance_disable}
  */
  readonly localAsInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Do not prepend local AS to announcements from this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#local_as_no_prepend RouterBgpVrf#local_as_no_prepend}
  */
  readonly localAsNoPrepend?: boolean | cdktf.IResolvable;
  /**
  * Prepend only local AS to announcements to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#local_as_no_prepend_replace_as RouterBgpVrf#local_as_no_prepend_replace_as}
  */
  readonly localAsNoPrependReplaceAs?: boolean | cdktf.IResolvable;
  /**
  * Dual-AS mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#local_as_no_prepend_replace_as_dual_as RouterBgpVrf#local_as_no_prepend_replace_as_dual_as}
  */
  readonly localAsNoPrependReplaceAsDualAs?: boolean | cdktf.IResolvable;
  /**
  * Specifies an ENCRYPTED password will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#password RouterBgpVrf#password}
  */
  readonly password?: string;
  /**
  * Prevent password from being inherited from parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#password_inheritance_disable RouterBgpVrf#password_inheritance_disable}
  */
  readonly passwordInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Set remote AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#remote_as RouterBgpVrf#remote_as}
  */
  readonly remoteAs?: string;
  /**
  * Administratively shut down this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#shutdown RouterBgpVrf#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Holdtime
  *   - Range: `3`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#timers_holdtime RouterBgpVrf#timers_holdtime}
  */
  readonly timersHoldtime?: number;
  /**
  * Minimum acceptable holdtime from neighbor
  *   - Range: `3`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#timers_holdtime_minimum_acceptable_holdtime RouterBgpVrf#timers_holdtime_minimum_acceptable_holdtime}
  */
  readonly timersHoldtimeMinimumAcceptableHoldtime?: number;
  /**
  * Keepalive interval
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#timers_keepalive_interval RouterBgpVrf#timers_keepalive_interval}
  */
  readonly timersKeepaliveInterval?: number;
  /**
  * Disable keepalives/hold time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#timers_keepalive_zero RouterBgpVrf#timers_keepalive_zero}
  */
  readonly timersKeepaliveZero?: boolean | cdktf.IResolvable;
  /**
  * Disable keepalives/hold time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#timers_keepalive_zero_holdtime_zero RouterBgpVrf#timers_keepalive_zero_holdtime_zero}
  */
  readonly timersKeepaliveZeroHoldtimeZero?: boolean | cdktf.IResolvable;
  /**
  * Minimum acceptable holdtime from neighbor
  *   - Range: `3`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#timers_keepalive_zero_minimum_acceptable_holdtime RouterBgpVrf#timers_keepalive_zero_minimum_acceptable_holdtime}
  */
  readonly timersKeepaliveZeroMinimumAcceptableHoldtime?: number;
  /**
  * Enable EBGP TTL security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#ttl_security RouterBgpVrf#ttl_security}
  */
  readonly ttlSecurity?: boolean | cdktf.IResolvable;
  /**
  * Source of routing updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#update_source RouterBgpVrf#update_source}
  */
  readonly updateSource?: string;
  /**
  * Inherit configuration from a neighbor-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#use_neighbor_group RouterBgpVrf#use_neighbor_group}
  */
  readonly useNeighborGroup?: string;
}

export function routerBgpVrfNeighborsToTerraform(struct?: RouterBgpVrfNeighbors | cdktf.IResolvable): any {
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
    local_as: cdktf.stringToTerraform(struct!.localAs),
    local_as_inheritance_disable: cdktf.booleanToTerraform(struct!.localAsInheritanceDisable),
    local_as_no_prepend: cdktf.booleanToTerraform(struct!.localAsNoPrepend),
    local_as_no_prepend_replace_as: cdktf.booleanToTerraform(struct!.localAsNoPrependReplaceAs),
    local_as_no_prepend_replace_as_dual_as: cdktf.booleanToTerraform(struct!.localAsNoPrependReplaceAsDualAs),
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


export function routerBgpVrfNeighborsToHclTerraform(struct?: RouterBgpVrfNeighbors | cdktf.IResolvable): any {
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
    local_as: {
      value: cdktf.stringToHclTerraform(struct!.localAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_as_inheritance_disable: {
      value: cdktf.booleanToHclTerraform(struct!.localAsInheritanceDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_as_no_prepend: {
      value: cdktf.booleanToHclTerraform(struct!.localAsNoPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_as_no_prepend_replace_as: {
      value: cdktf.booleanToHclTerraform(struct!.localAsNoPrependReplaceAs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_as_no_prepend_replace_as_dual_as: {
      value: cdktf.booleanToHclTerraform(struct!.localAsNoPrependReplaceAsDualAs),
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

export class RouterBgpVrfNeighborsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrfNeighbors | cdktf.IResolvable | undefined {
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
    if (this._localAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAs = this._localAs;
    }
    if (this._localAsInheritanceDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsInheritanceDisable = this._localAsInheritanceDisable;
    }
    if (this._localAsNoPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsNoPrepend = this._localAsNoPrepend;
    }
    if (this._localAsNoPrependReplaceAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsNoPrependReplaceAs = this._localAsNoPrependReplaceAs;
    }
    if (this._localAsNoPrependReplaceAsDualAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsNoPrependReplaceAsDualAs = this._localAsNoPrependReplaceAsDualAs;
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

  public set internalValue(value: RouterBgpVrfNeighbors | cdktf.IResolvable | undefined) {
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
      this._localAs = undefined;
      this._localAsInheritanceDisable = undefined;
      this._localAsNoPrepend = undefined;
      this._localAsNoPrependReplaceAs = undefined;
      this._localAsNoPrependReplaceAsDualAs = undefined;
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
      this._localAs = value.localAs;
      this._localAsInheritanceDisable = value.localAsInheritanceDisable;
      this._localAsNoPrepend = value.localAsNoPrepend;
      this._localAsNoPrependReplaceAs = value.localAsNoPrependReplaceAs;
      this._localAsNoPrependReplaceAsDualAs = value.localAsNoPrependReplaceAsDualAs;
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

  // local_as - computed: false, optional: true, required: false
  private _localAs?: string; 
  public get localAs() {
    return this.getStringAttribute('local_as');
  }
  public set localAs(value: string) {
    this._localAs = value;
  }
  public resetLocalAs() {
    this._localAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInput() {
    return this._localAs;
  }

  // local_as_inheritance_disable - computed: false, optional: true, required: false
  private _localAsInheritanceDisable?: boolean | cdktf.IResolvable; 
  public get localAsInheritanceDisable() {
    return this.getBooleanAttribute('local_as_inheritance_disable');
  }
  public set localAsInheritanceDisable(value: boolean | cdktf.IResolvable) {
    this._localAsInheritanceDisable = value;
  }
  public resetLocalAsInheritanceDisable() {
    this._localAsInheritanceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInheritanceDisableInput() {
    return this._localAsInheritanceDisable;
  }

  // local_as_no_prepend - computed: false, optional: true, required: false
  private _localAsNoPrepend?: boolean | cdktf.IResolvable; 
  public get localAsNoPrepend() {
    return this.getBooleanAttribute('local_as_no_prepend');
  }
  public set localAsNoPrepend(value: boolean | cdktf.IResolvable) {
    this._localAsNoPrepend = value;
  }
  public resetLocalAsNoPrepend() {
    this._localAsNoPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsNoPrependInput() {
    return this._localAsNoPrepend;
  }

  // local_as_no_prepend_replace_as - computed: false, optional: true, required: false
  private _localAsNoPrependReplaceAs?: boolean | cdktf.IResolvable; 
  public get localAsNoPrependReplaceAs() {
    return this.getBooleanAttribute('local_as_no_prepend_replace_as');
  }
  public set localAsNoPrependReplaceAs(value: boolean | cdktf.IResolvable) {
    this._localAsNoPrependReplaceAs = value;
  }
  public resetLocalAsNoPrependReplaceAs() {
    this._localAsNoPrependReplaceAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsNoPrependReplaceAsInput() {
    return this._localAsNoPrependReplaceAs;
  }

  // local_as_no_prepend_replace_as_dual_as - computed: false, optional: true, required: false
  private _localAsNoPrependReplaceAsDualAs?: boolean | cdktf.IResolvable; 
  public get localAsNoPrependReplaceAsDualAs() {
    return this.getBooleanAttribute('local_as_no_prepend_replace_as_dual_as');
  }
  public set localAsNoPrependReplaceAsDualAs(value: boolean | cdktf.IResolvable) {
    this._localAsNoPrependReplaceAsDualAs = value;
  }
  public resetLocalAsNoPrependReplaceAsDualAs() {
    this._localAsNoPrependReplaceAsDualAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsNoPrependReplaceAsDualAsInput() {
    return this._localAsNoPrependReplaceAsDualAs;
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

export class RouterBgpVrfNeighborsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrfNeighbors[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrfNeighborsOutputReference {
    return new RouterBgpVrfNeighborsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf iosxr_router_bgp_vrf}
*/
export class RouterBgpVrf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_bgp_vrf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpVrf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpVrf to import
  * @param importFromId The id of the existing RouterBgpVrf that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpVrf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_bgp_vrf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf iosxr_router_bgp_vrf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpVrfConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpVrfConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_bgp_vrf',
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
    this._asNumber = config.asNumber;
    this._bfdMinimumInterval = config.bfdMinimumInterval;
    this._bfdMultiplier = config.bfdMultiplier;
    this._bgpRouterId = config.bgpRouterId;
    this._defaultInformationOriginate = config.defaultInformationOriginate;
    this._defaultMetric = config.defaultMetric;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._neighbors.internalValue = config.neighbors;
    this._rdAuto = config.rdAuto;
    this._rdFourByteAsIndex = config.rdFourByteAsIndex;
    this._rdFourByteAsNumber = config.rdFourByteAsNumber;
    this._rdIpv4AddressAddress = config.rdIpv4AddressAddress;
    this._rdIpv4AddressIndex = config.rdIpv4AddressIndex;
    this._rdTwoByteAsIndex = config.rdTwoByteAsIndex;
    this._rdTwoByteAsNumber = config.rdTwoByteAsNumber;
    this._timersBgpHoldtime = config.timersBgpHoldtime;
    this._timersBgpHoldtimeMinimumAcceptableHoldtime = config.timersBgpHoldtimeMinimumAcceptableHoldtime;
    this._timersBgpKeepaliveInterval = config.timersBgpKeepaliveInterval;
    this._timersBgpKeepaliveZero = config.timersBgpKeepaliveZero;
    this._timersBgpKeepaliveZeroHoldtimeZero = config.timersBgpKeepaliveZeroHoldtimeZero;
    this._timersBgpKeepaliveZeroMinimumAcceptableHoldtime = config.timersBgpKeepaliveZeroMinimumAcceptableHoldtime;
    this._vrfName = config.vrfName;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // neighbors - computed: false, optional: true, required: false
  private _neighbors = new RouterBgpVrfNeighborsList(this, "neighbors", false);
  public get neighbors() {
    return this._neighbors;
  }
  public putNeighbors(value: RouterBgpVrfNeighbors[] | cdktf.IResolvable) {
    this._neighbors.internalValue = value;
  }
  public resetNeighbors() {
    this._neighbors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborsInput() {
    return this._neighbors.internalValue;
  }

  // rd_auto - computed: false, optional: true, required: false
  private _rdAuto?: boolean | cdktf.IResolvable; 
  public get rdAuto() {
    return this.getBooleanAttribute('rd_auto');
  }
  public set rdAuto(value: boolean | cdktf.IResolvable) {
    this._rdAuto = value;
  }
  public resetRdAuto() {
    this._rdAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdAutoInput() {
    return this._rdAuto;
  }

  // rd_four_byte_as_index - computed: false, optional: true, required: false
  private _rdFourByteAsIndex?: number; 
  public get rdFourByteAsIndex() {
    return this.getNumberAttribute('rd_four_byte_as_index');
  }
  public set rdFourByteAsIndex(value: number) {
    this._rdFourByteAsIndex = value;
  }
  public resetRdFourByteAsIndex() {
    this._rdFourByteAsIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdFourByteAsIndexInput() {
    return this._rdFourByteAsIndex;
  }

  // rd_four_byte_as_number - computed: false, optional: true, required: false
  private _rdFourByteAsNumber?: string; 
  public get rdFourByteAsNumber() {
    return this.getStringAttribute('rd_four_byte_as_number');
  }
  public set rdFourByteAsNumber(value: string) {
    this._rdFourByteAsNumber = value;
  }
  public resetRdFourByteAsNumber() {
    this._rdFourByteAsNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdFourByteAsNumberInput() {
    return this._rdFourByteAsNumber;
  }

  // rd_ipv4_address_address - computed: false, optional: true, required: false
  private _rdIpv4AddressAddress?: string; 
  public get rdIpv4AddressAddress() {
    return this.getStringAttribute('rd_ipv4_address_address');
  }
  public set rdIpv4AddressAddress(value: string) {
    this._rdIpv4AddressAddress = value;
  }
  public resetRdIpv4AddressAddress() {
    this._rdIpv4AddressAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdIpv4AddressAddressInput() {
    return this._rdIpv4AddressAddress;
  }

  // rd_ipv4_address_index - computed: false, optional: true, required: false
  private _rdIpv4AddressIndex?: number; 
  public get rdIpv4AddressIndex() {
    return this.getNumberAttribute('rd_ipv4_address_index');
  }
  public set rdIpv4AddressIndex(value: number) {
    this._rdIpv4AddressIndex = value;
  }
  public resetRdIpv4AddressIndex() {
    this._rdIpv4AddressIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdIpv4AddressIndexInput() {
    return this._rdIpv4AddressIndex;
  }

  // rd_two_byte_as_index - computed: false, optional: true, required: false
  private _rdTwoByteAsIndex?: number; 
  public get rdTwoByteAsIndex() {
    return this.getNumberAttribute('rd_two_byte_as_index');
  }
  public set rdTwoByteAsIndex(value: number) {
    this._rdTwoByteAsIndex = value;
  }
  public resetRdTwoByteAsIndex() {
    this._rdTwoByteAsIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdTwoByteAsIndexInput() {
    return this._rdTwoByteAsIndex;
  }

  // rd_two_byte_as_number - computed: false, optional: true, required: false
  private _rdTwoByteAsNumber?: string; 
  public get rdTwoByteAsNumber() {
    return this.getStringAttribute('rd_two_byte_as_number');
  }
  public set rdTwoByteAsNumber(value: string) {
    this._rdTwoByteAsNumber = value;
  }
  public resetRdTwoByteAsNumber() {
    this._rdTwoByteAsNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdTwoByteAsNumberInput() {
    return this._rdTwoByteAsNumber;
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
      as_number: cdktf.stringToTerraform(this._asNumber),
      bfd_minimum_interval: cdktf.numberToTerraform(this._bfdMinimumInterval),
      bfd_multiplier: cdktf.numberToTerraform(this._bfdMultiplier),
      bgp_router_id: cdktf.stringToTerraform(this._bgpRouterId),
      default_information_originate: cdktf.booleanToTerraform(this._defaultInformationOriginate),
      default_metric: cdktf.numberToTerraform(this._defaultMetric),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      neighbors: cdktf.listMapper(routerBgpVrfNeighborsToTerraform, false)(this._neighbors.internalValue),
      rd_auto: cdktf.booleanToTerraform(this._rdAuto),
      rd_four_byte_as_index: cdktf.numberToTerraform(this._rdFourByteAsIndex),
      rd_four_byte_as_number: cdktf.stringToTerraform(this._rdFourByteAsNumber),
      rd_ipv4_address_address: cdktf.stringToTerraform(this._rdIpv4AddressAddress),
      rd_ipv4_address_index: cdktf.numberToTerraform(this._rdIpv4AddressIndex),
      rd_two_byte_as_index: cdktf.numberToTerraform(this._rdTwoByteAsIndex),
      rd_two_byte_as_number: cdktf.stringToTerraform(this._rdTwoByteAsNumber),
      timers_bgp_holdtime: cdktf.numberToTerraform(this._timersBgpHoldtime),
      timers_bgp_holdtime_minimum_acceptable_holdtime: cdktf.numberToTerraform(this._timersBgpHoldtimeMinimumAcceptableHoldtime),
      timers_bgp_keepalive_interval: cdktf.numberToTerraform(this._timersBgpKeepaliveInterval),
      timers_bgp_keepalive_zero: cdktf.booleanToTerraform(this._timersBgpKeepaliveZero),
      timers_bgp_keepalive_zero_holdtime_zero: cdktf.booleanToTerraform(this._timersBgpKeepaliveZeroHoldtimeZero),
      timers_bgp_keepalive_zero_minimum_acceptable_holdtime: cdktf.numberToTerraform(this._timersBgpKeepaliveZeroMinimumAcceptableHoldtime),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
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
      neighbors: {
        value: cdktf.listMapperHcl(routerBgpVrfNeighborsToHclTerraform, false)(this._neighbors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpVrfNeighborsList",
      },
      rd_auto: {
        value: cdktf.booleanToHclTerraform(this._rdAuto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rd_four_byte_as_index: {
        value: cdktf.numberToHclTerraform(this._rdFourByteAsIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rd_four_byte_as_number: {
        value: cdktf.stringToHclTerraform(this._rdFourByteAsNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rd_ipv4_address_address: {
        value: cdktf.stringToHclTerraform(this._rdIpv4AddressAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rd_ipv4_address_index: {
        value: cdktf.numberToHclTerraform(this._rdIpv4AddressIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rd_two_byte_as_index: {
        value: cdktf.numberToHclTerraform(this._rdTwoByteAsIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rd_two_byte_as_number: {
        value: cdktf.stringToHclTerraform(this._rdTwoByteAsNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
