// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow import policy to specify a non-directly connected next-hop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#accept_remote_nexthop BgpGroup#accept_remote_nexthop}
  */
  readonly acceptRemoteNexthop?: boolean | cdktf.IResolvable;
  /**
  * Advertise best external routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#advertise_external BgpGroup#advertise_external}
  */
  readonly advertiseExternal?: boolean | cdktf.IResolvable;
  /**
  * Route matches active route upto med-comparison rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#advertise_external_conditional BgpGroup#advertise_external_conditional}
  */
  readonly advertiseExternalConditional?: boolean | cdktf.IResolvable;
  /**
  * Advertise inactive routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#advertise_inactive BgpGroup#advertise_inactive}
  */
  readonly advertiseInactive?: boolean | cdktf.IResolvable;
  /**
  * Advertise routes received from the same autonomous system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#advertise_peer_as BgpGroup#advertise_peer_as}
  */
  readonly advertisePeerAs?: boolean | cdktf.IResolvable;
  /**
  * Replace neighbor AS number with our AS number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#as_override BgpGroup#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Authentication algorithm name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#authentication_algorithm BgpGroup#authentication_algorithm}
  */
  readonly authenticationAlgorithm?: string;
  /**
  * MD5 authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#authentication_key BgpGroup#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Key chain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#authentication_key_chain BgpGroup#authentication_key_chain}
  */
  readonly authenticationKeyChain?: string;
  /**
  * Cluster identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#cluster BgpGroup#cluster}
  */
  readonly cluster?: string;
  /**
  * Enable route flap damping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#damping BgpGroup#damping}
  */
  readonly damping?: boolean | cdktf.IResolvable;
  /**
  * Text description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#description BgpGroup#description}
  */
  readonly description?: string;
  /**
  * Export policy list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#export BgpGroup#export}
  */
  readonly export?: string[];
  /**
  * Hold time used when negotiating with a peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#hold_time BgpGroup#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Import policy list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#import BgpGroup#import}
  */
  readonly import?: string[];
  /**
  * Retain all routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#keep_all BgpGroup#keep_all}
  */
  readonly keepAll?: boolean | cdktf.IResolvable;
  /**
  * Retain no routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#keep_none BgpGroup#keep_none}
  */
  readonly keepNone?: boolean | cdktf.IResolvable;
  /**
  * Address of local end of BGP session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#local_address BgpGroup#local_address}
  */
  readonly localAddress?: string;
  /**
  * Local autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#local_as BgpGroup#local_as}
  */
  readonly localAs?: string;
  /**
  * Treat this AS as an alias to the system AS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#local_as_alias BgpGroup#local_as_alias}
  */
  readonly localAsAlias?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of times this AS can be in an AS path (1..10).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#local_as_loops BgpGroup#local_as_loops}
  */
  readonly localAsLoops?: number;
  /**
  * Do not prepend global autonomous-system number in advertised paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#local_as_no_prepend_global_as BgpGroup#local_as_no_prepend_global_as}
  */
  readonly localAsNoPrependGlobalAs?: boolean | cdktf.IResolvable;
  /**
  * Hide this local AS in paths learned from this peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#local_as_private BgpGroup#local_as_private}
  */
  readonly localAsPrivate?: boolean | cdktf.IResolvable;
  /**
  * Local interface for IPv6 link local EBGP peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#local_interface BgpGroup#local_interface}
  */
  readonly localInterface?: string;
  /**
  * Value of LOCAL_PREF path attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#local_preference BgpGroup#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Log a message for peer state transitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#log_updown BgpGroup#log_updown}
  */
  readonly logUpdown?: boolean | cdktf.IResolvable;
  /**
  * Route metric sent in MED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#metric_out BgpGroup#metric_out}
  */
  readonly metricOut?: number;
  /**
  * Track the IGP metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#metric_out_igp BgpGroup#metric_out_igp}
  */
  readonly metricOutIgp?: boolean | cdktf.IResolvable;
  /**
  * Delay updating MED when IGP metric increases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#metric_out_igp_delay_med_update BgpGroup#metric_out_igp_delay_med_update}
  */
  readonly metricOutIgpDelayMedUpdate?: boolean | cdktf.IResolvable;
  /**
  * Metric offset for MED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#metric_out_igp_offset BgpGroup#metric_out_igp_offset}
  */
  readonly metricOutIgpOffset?: number;
  /**
  * Track the minimum IGP metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#metric_out_minimum_igp BgpGroup#metric_out_minimum_igp}
  */
  readonly metricOutMinimumIgp?: boolean | cdktf.IResolvable;
  /**
  * Metric offset for MED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#metric_out_minimum_igp_offset BgpGroup#metric_out_minimum_igp_offset}
  */
  readonly metricOutMinimumIgpOffset?: number;
  /**
  * Enable TCP path MTU discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#mtu_discovery BgpGroup#mtu_discovery}
  */
  readonly mtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Configure an EBGP multihop session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#multihop BgpGroup#multihop}
  */
  readonly multihop?: boolean | cdktf.IResolvable;
  /**
  * Name of group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#name BgpGroup#name}
  */
  readonly name: string;
  /**
  * Don't advertise routes received from the same autonomous system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#no_advertise_peer_as BgpGroup#no_advertise_peer_as}
  */
  readonly noAdvertisePeerAs?: boolean | cdktf.IResolvable;
  /**
  * Disable intracluster route redistribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#no_client_reflect BgpGroup#no_client_reflect}
  */
  readonly noClientReflect?: boolean | cdktf.IResolvable;
  /**
  * How long before exporting routes from routing table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#out_delay BgpGroup#out_delay}
  */
  readonly outDelay?: number;
  /**
  * Do not send open messages to a peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#passive BgpGroup#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#peer_as BgpGroup#peer_as}
  */
  readonly peerAs?: string;
  /**
  * Preference value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#preference BgpGroup#preference}
  */
  readonly preference?: number;
  /**
  * Remove well-known private AS numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#remove_private BgpGroup#remove_private}
  */
  readonly removePrivate?: boolean | cdktf.IResolvable;
  /**
  * Routing instance for bgp protocol if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#routing_instance BgpGroup#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Enable aggressive transmission of pure TCP ACKs and retransmissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#tcp_aggressive_transmission BgpGroup#tcp_aggressive_transmission}
  */
  readonly tcpAggressiveTransmission?: boolean | cdktf.IResolvable;
  /**
  * Type of peer group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#type BgpGroup#type}
  */
  readonly type?: string;
  /**
  * bfd_liveness_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#bfd_liveness_detection BgpGroup#bfd_liveness_detection}
  */
  readonly bfdLivenessDetection?: BgpGroupBfdLivenessDetection;
  /**
  * bgp_error_tolerance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#bgp_error_tolerance BgpGroup#bgp_error_tolerance}
  */
  readonly bgpErrorTolerance?: BgpGroupBgpErrorTolerance;
  /**
  * bgp_multipath block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#bgp_multipath BgpGroup#bgp_multipath}
  */
  readonly bgpMultipath?: BgpGroupBgpMultipath;
  /**
  * family_evpn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#family_evpn BgpGroup#family_evpn}
  */
  readonly familyEvpn?: BgpGroupFamilyEvpn[] | cdktf.IResolvable;
  /**
  * family_inet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#family_inet BgpGroup#family_inet}
  */
  readonly familyInet?: BgpGroupFamilyInet[] | cdktf.IResolvable;
  /**
  * family_inet6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#family_inet6 BgpGroup#family_inet6}
  */
  readonly familyInet6?: BgpGroupFamilyInet6[] | cdktf.IResolvable;
  /**
  * graceful_restart block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#graceful_restart BgpGroup#graceful_restart}
  */
  readonly gracefulRestart?: BgpGroupGracefulRestart;
}
export interface BgpGroupBfdLivenessDetection {
  /**
  * Authentication algorithm name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#authentication_algorithm BgpGroup#authentication_algorithm}
  */
  readonly authenticationAlgorithm?: string;
  /**
  * Authentication key chain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#authentication_key_chain BgpGroup#authentication_key_chain}
  */
  readonly authenticationKeyChain?: string;
  /**
  * Verify authentication only if authentication is negotiated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#authentication_loose_check BgpGroup#authentication_loose_check}
  */
  readonly authenticationLooseCheck?: boolean | cdktf.IResolvable;
  /**
  * High detection-time triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#detection_time_threshold BgpGroup#detection_time_threshold}
  */
  readonly detectionTimeThreshold?: number;
  /**
  * Time to hold the session-UP notification to the client (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#holddown_interval BgpGroup#holddown_interval}
  */
  readonly holddownInterval?: number;
  /**
  * Minimum transmit and receive interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#minimum_interval BgpGroup#minimum_interval}
  */
  readonly minimumInterval?: number;
  /**
  * Minimum receive interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#minimum_receive_interval BgpGroup#minimum_receive_interval}
  */
  readonly minimumReceiveInterval?: number;
  /**
  * Detection time multiplier (1..255).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#multiplier BgpGroup#multiplier}
  */
  readonly multiplier?: number;
  /**
  * BFD single-hop or multihop session-mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#session_mode BgpGroup#session_mode}
  */
  readonly sessionMode?: string;
  /**
  * Minimum transmit interval (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#transmit_interval_minimum_interval BgpGroup#transmit_interval_minimum_interval}
  */
  readonly transmitIntervalMinimumInterval?: number;
  /**
  * High transmit interval triggering a trap (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#transmit_interval_threshold BgpGroup#transmit_interval_threshold}
  */
  readonly transmitIntervalThreshold?: number;
  /**
  * BFD protocol version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#version BgpGroup#version}
  */
  readonly version?: string;
}

export function bgpGroupBfdLivenessDetectionToTerraform(struct?: BgpGroupBfdLivenessDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_algorithm: cdktf.stringToTerraform(struct!.authenticationAlgorithm),
    authentication_key_chain: cdktf.stringToTerraform(struct!.authenticationKeyChain),
    authentication_loose_check: cdktf.booleanToTerraform(struct!.authenticationLooseCheck),
    detection_time_threshold: cdktf.numberToTerraform(struct!.detectionTimeThreshold),
    holddown_interval: cdktf.numberToTerraform(struct!.holddownInterval),
    minimum_interval: cdktf.numberToTerraform(struct!.minimumInterval),
    minimum_receive_interval: cdktf.numberToTerraform(struct!.minimumReceiveInterval),
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    session_mode: cdktf.stringToTerraform(struct!.sessionMode),
    transmit_interval_minimum_interval: cdktf.numberToTerraform(struct!.transmitIntervalMinimumInterval),
    transmit_interval_threshold: cdktf.numberToTerraform(struct!.transmitIntervalThreshold),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function bgpGroupBfdLivenessDetectionToHclTerraform(struct?: BgpGroupBfdLivenessDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.authenticationAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_key_chain: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKeyChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_loose_check: {
      value: cdktf.booleanToHclTerraform(struct!.authenticationLooseCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    detection_time_threshold: {
      value: cdktf.numberToHclTerraform(struct!.detectionTimeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    holddown_interval: {
      value: cdktf.numberToHclTerraform(struct!.holddownInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.minimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_receive_interval: {
      value: cdktf.numberToHclTerraform(struct!.minimumReceiveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_mode: {
      value: cdktf.stringToHclTerraform(struct!.sessionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transmit_interval_minimum_interval: {
      value: cdktf.numberToHclTerraform(struct!.transmitIntervalMinimumInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_interval_threshold: {
      value: cdktf.numberToHclTerraform(struct!.transmitIntervalThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpGroupBfdLivenessDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpGroupBfdLivenessDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationAlgorithm = this._authenticationAlgorithm;
    }
    if (this._authenticationKeyChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKeyChain = this._authenticationKeyChain;
    }
    if (this._authenticationLooseCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationLooseCheck = this._authenticationLooseCheck;
    }
    if (this._detectionTimeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionTimeThreshold = this._detectionTimeThreshold;
    }
    if (this._holddownInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.holddownInterval = this._holddownInterval;
    }
    if (this._minimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumInterval = this._minimumInterval;
    }
    if (this._minimumReceiveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumReceiveInterval = this._minimumReceiveInterval;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._sessionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMode = this._sessionMode;
    }
    if (this._transmitIntervalMinimumInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitIntervalMinimumInterval = this._transmitIntervalMinimumInterval;
    }
    if (this._transmitIntervalThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitIntervalThreshold = this._transmitIntervalThreshold;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpGroupBfdLivenessDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationAlgorithm = undefined;
      this._authenticationKeyChain = undefined;
      this._authenticationLooseCheck = undefined;
      this._detectionTimeThreshold = undefined;
      this._holddownInterval = undefined;
      this._minimumInterval = undefined;
      this._minimumReceiveInterval = undefined;
      this._multiplier = undefined;
      this._sessionMode = undefined;
      this._transmitIntervalMinimumInterval = undefined;
      this._transmitIntervalThreshold = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationAlgorithm = value.authenticationAlgorithm;
      this._authenticationKeyChain = value.authenticationKeyChain;
      this._authenticationLooseCheck = value.authenticationLooseCheck;
      this._detectionTimeThreshold = value.detectionTimeThreshold;
      this._holddownInterval = value.holddownInterval;
      this._minimumInterval = value.minimumInterval;
      this._minimumReceiveInterval = value.minimumReceiveInterval;
      this._multiplier = value.multiplier;
      this._sessionMode = value.sessionMode;
      this._transmitIntervalMinimumInterval = value.transmitIntervalMinimumInterval;
      this._transmitIntervalThreshold = value.transmitIntervalThreshold;
      this._version = value.version;
    }
  }

  // authentication_algorithm - computed: false, optional: true, required: false
  private _authenticationAlgorithm?: string; 
  public get authenticationAlgorithm() {
    return this.getStringAttribute('authentication_algorithm');
  }
  public set authenticationAlgorithm(value: string) {
    this._authenticationAlgorithm = value;
  }
  public resetAuthenticationAlgorithm() {
    this._authenticationAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAlgorithmInput() {
    return this._authenticationAlgorithm;
  }

  // authentication_key_chain - computed: false, optional: true, required: false
  private _authenticationKeyChain?: string; 
  public get authenticationKeyChain() {
    return this.getStringAttribute('authentication_key_chain');
  }
  public set authenticationKeyChain(value: string) {
    this._authenticationKeyChain = value;
  }
  public resetAuthenticationKeyChain() {
    this._authenticationKeyChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyChainInput() {
    return this._authenticationKeyChain;
  }

  // authentication_loose_check - computed: false, optional: true, required: false
  private _authenticationLooseCheck?: boolean | cdktf.IResolvable; 
  public get authenticationLooseCheck() {
    return this.getBooleanAttribute('authentication_loose_check');
  }
  public set authenticationLooseCheck(value: boolean | cdktf.IResolvable) {
    this._authenticationLooseCheck = value;
  }
  public resetAuthenticationLooseCheck() {
    this._authenticationLooseCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationLooseCheckInput() {
    return this._authenticationLooseCheck;
  }

  // detection_time_threshold - computed: false, optional: true, required: false
  private _detectionTimeThreshold?: number; 
  public get detectionTimeThreshold() {
    return this.getNumberAttribute('detection_time_threshold');
  }
  public set detectionTimeThreshold(value: number) {
    this._detectionTimeThreshold = value;
  }
  public resetDetectionTimeThreshold() {
    this._detectionTimeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionTimeThresholdInput() {
    return this._detectionTimeThreshold;
  }

  // holddown_interval - computed: false, optional: true, required: false
  private _holddownInterval?: number; 
  public get holddownInterval() {
    return this.getNumberAttribute('holddown_interval');
  }
  public set holddownInterval(value: number) {
    this._holddownInterval = value;
  }
  public resetHolddownInterval() {
    this._holddownInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holddownIntervalInput() {
    return this._holddownInterval;
  }

  // minimum_interval - computed: false, optional: true, required: false
  private _minimumInterval?: number; 
  public get minimumInterval() {
    return this.getNumberAttribute('minimum_interval');
  }
  public set minimumInterval(value: number) {
    this._minimumInterval = value;
  }
  public resetMinimumInterval() {
    this._minimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumIntervalInput() {
    return this._minimumInterval;
  }

  // minimum_receive_interval - computed: false, optional: true, required: false
  private _minimumReceiveInterval?: number; 
  public get minimumReceiveInterval() {
    return this.getNumberAttribute('minimum_receive_interval');
  }
  public set minimumReceiveInterval(value: number) {
    this._minimumReceiveInterval = value;
  }
  public resetMinimumReceiveInterval() {
    this._minimumReceiveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumReceiveIntervalInput() {
    return this._minimumReceiveInterval;
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // session_mode - computed: false, optional: true, required: false
  private _sessionMode?: string; 
  public get sessionMode() {
    return this.getStringAttribute('session_mode');
  }
  public set sessionMode(value: string) {
    this._sessionMode = value;
  }
  public resetSessionMode() {
    this._sessionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionModeInput() {
    return this._sessionMode;
  }

  // transmit_interval_minimum_interval - computed: false, optional: true, required: false
  private _transmitIntervalMinimumInterval?: number; 
  public get transmitIntervalMinimumInterval() {
    return this.getNumberAttribute('transmit_interval_minimum_interval');
  }
  public set transmitIntervalMinimumInterval(value: number) {
    this._transmitIntervalMinimumInterval = value;
  }
  public resetTransmitIntervalMinimumInterval() {
    this._transmitIntervalMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitIntervalMinimumIntervalInput() {
    return this._transmitIntervalMinimumInterval;
  }

  // transmit_interval_threshold - computed: false, optional: true, required: false
  private _transmitIntervalThreshold?: number; 
  public get transmitIntervalThreshold() {
    return this.getNumberAttribute('transmit_interval_threshold');
  }
  public set transmitIntervalThreshold(value: number) {
    this._transmitIntervalThreshold = value;
  }
  public resetTransmitIntervalThreshold() {
    this._transmitIntervalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitIntervalThresholdInput() {
    return this._transmitIntervalThreshold;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface BgpGroupBgpErrorTolerance {
  /**
  * Maximum number of malformed routes from a peer (0..4294967295).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#malformed_route_limit BgpGroup#malformed_route_limit}
  */
  readonly malformedRouteLimit?: number;
  /**
  * Time used when logging malformed update (10..65535 seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#malformed_update_log_interval BgpGroup#malformed_update_log_interval}
  */
  readonly malformedUpdateLogInterval?: number;
  /**
  * No malformed route limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#no_malformed_route_limit BgpGroup#no_malformed_route_limit}
  */
  readonly noMalformedRouteLimit?: boolean | cdktf.IResolvable;
}

export function bgpGroupBgpErrorToleranceToTerraform(struct?: BgpGroupBgpErrorTolerance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    malformed_route_limit: cdktf.numberToTerraform(struct!.malformedRouteLimit),
    malformed_update_log_interval: cdktf.numberToTerraform(struct!.malformedUpdateLogInterval),
    no_malformed_route_limit: cdktf.booleanToTerraform(struct!.noMalformedRouteLimit),
  }
}


export function bgpGroupBgpErrorToleranceToHclTerraform(struct?: BgpGroupBgpErrorTolerance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    malformed_route_limit: {
      value: cdktf.numberToHclTerraform(struct!.malformedRouteLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_update_log_interval: {
      value: cdktf.numberToHclTerraform(struct!.malformedUpdateLogInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_malformed_route_limit: {
      value: cdktf.booleanToHclTerraform(struct!.noMalformedRouteLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpGroupBgpErrorToleranceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpGroupBgpErrorTolerance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._malformedRouteLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedRouteLimit = this._malformedRouteLimit;
    }
    if (this._malformedUpdateLogInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedUpdateLogInterval = this._malformedUpdateLogInterval;
    }
    if (this._noMalformedRouteLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMalformedRouteLimit = this._noMalformedRouteLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpGroupBgpErrorTolerance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._malformedRouteLimit = undefined;
      this._malformedUpdateLogInterval = undefined;
      this._noMalformedRouteLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._malformedRouteLimit = value.malformedRouteLimit;
      this._malformedUpdateLogInterval = value.malformedUpdateLogInterval;
      this._noMalformedRouteLimit = value.noMalformedRouteLimit;
    }
  }

  // malformed_route_limit - computed: false, optional: true, required: false
  private _malformedRouteLimit?: number; 
  public get malformedRouteLimit() {
    return this.getNumberAttribute('malformed_route_limit');
  }
  public set malformedRouteLimit(value: number) {
    this._malformedRouteLimit = value;
  }
  public resetMalformedRouteLimit() {
    this._malformedRouteLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedRouteLimitInput() {
    return this._malformedRouteLimit;
  }

  // malformed_update_log_interval - computed: false, optional: true, required: false
  private _malformedUpdateLogInterval?: number; 
  public get malformedUpdateLogInterval() {
    return this.getNumberAttribute('malformed_update_log_interval');
  }
  public set malformedUpdateLogInterval(value: number) {
    this._malformedUpdateLogInterval = value;
  }
  public resetMalformedUpdateLogInterval() {
    this._malformedUpdateLogInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedUpdateLogIntervalInput() {
    return this._malformedUpdateLogInterval;
  }

  // no_malformed_route_limit - computed: false, optional: true, required: false
  private _noMalformedRouteLimit?: boolean | cdktf.IResolvable; 
  public get noMalformedRouteLimit() {
    return this.getBooleanAttribute('no_malformed_route_limit');
  }
  public set noMalformedRouteLimit(value: boolean | cdktf.IResolvable) {
    this._noMalformedRouteLimit = value;
  }
  public resetNoMalformedRouteLimit() {
    this._noMalformedRouteLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMalformedRouteLimitInput() {
    return this._noMalformedRouteLimit;
  }
}
export interface BgpGroupBgpMultipath {
  /**
  * Allows the BGP multipath and protection to co-exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#allow_protection BgpGroup#allow_protection}
  */
  readonly allowProtection?: boolean | cdktf.IResolvable;
  /**
  * Disable Multipath.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#disable BgpGroup#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Use paths received from different ASs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#multiple_as BgpGroup#multiple_as}
  */
  readonly multipleAs?: boolean | cdktf.IResolvable;
}

export function bgpGroupBgpMultipathToTerraform(struct?: BgpGroupBgpMultipath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_protection: cdktf.booleanToTerraform(struct!.allowProtection),
    disable: cdktf.booleanToTerraform(struct!.disable),
    multiple_as: cdktf.booleanToTerraform(struct!.multipleAs),
  }
}


export function bgpGroupBgpMultipathToHclTerraform(struct?: BgpGroupBgpMultipath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_protection: {
      value: cdktf.booleanToHclTerraform(struct!.allowProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multiple_as: {
      value: cdktf.booleanToHclTerraform(struct!.multipleAs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpGroupBgpMultipathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpGroupBgpMultipath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowProtection = this._allowProtection;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._multipleAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleAs = this._multipleAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpGroupBgpMultipath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowProtection = undefined;
      this._disable = undefined;
      this._multipleAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowProtection = value.allowProtection;
      this._disable = value.disable;
      this._multipleAs = value.multipleAs;
    }
  }

  // allow_protection - computed: false, optional: true, required: false
  private _allowProtection?: boolean | cdktf.IResolvable; 
  public get allowProtection() {
    return this.getBooleanAttribute('allow_protection');
  }
  public set allowProtection(value: boolean | cdktf.IResolvable) {
    this._allowProtection = value;
  }
  public resetAllowProtection() {
    this._allowProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowProtectionInput() {
    return this._allowProtection;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // multiple_as - computed: false, optional: true, required: false
  private _multipleAs?: boolean | cdktf.IResolvable; 
  public get multipleAs() {
    return this.getBooleanAttribute('multiple_as');
  }
  public set multipleAs(value: boolean | cdktf.IResolvable) {
    this._multipleAs = value;
  }
  public resetMultipleAs() {
    this._multipleAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleAsInput() {
    return this._multipleAs;
  }
}
export interface BgpGroupFamilyEvpnAcceptedPrefixLimit {
  /**
  * Maximum number of prefixes accepted from a peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#maximum BgpGroup#maximum}
  */
  readonly maximum?: number;
  /**
  * Clear peer connection on reaching limit with this percentage of prefix-limit to start warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown BgpGroup#teardown}
  */
  readonly teardown?: number;
  /**
  * Timeout before attempting to restart peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown_idle_timeout BgpGroup#teardown_idle_timeout}
  */
  readonly teardownIdleTimeout?: number;
  /**
  * Idle the peer until the user intervenes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown_idle_timeout_forever BgpGroup#teardown_idle_timeout_forever}
  */
  readonly teardownIdleTimeoutForever?: boolean | cdktf.IResolvable;
}

export function bgpGroupFamilyEvpnAcceptedPrefixLimitToTerraform(struct?: BgpGroupFamilyEvpnAcceptedPrefixLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    teardown: cdktf.numberToTerraform(struct!.teardown),
    teardown_idle_timeout: cdktf.numberToTerraform(struct!.teardownIdleTimeout),
    teardown_idle_timeout_forever: cdktf.booleanToTerraform(struct!.teardownIdleTimeoutForever),
  }
}


export function bgpGroupFamilyEvpnAcceptedPrefixLimitToHclTerraform(struct?: BgpGroupFamilyEvpnAcceptedPrefixLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown: {
      value: cdktf.numberToHclTerraform(struct!.teardown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.teardownIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown_idle_timeout_forever: {
      value: cdktf.booleanToHclTerraform(struct!.teardownIdleTimeoutForever),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpGroupFamilyEvpnAcceptedPrefixLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpGroupFamilyEvpnAcceptedPrefixLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._teardown !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardown = this._teardown;
    }
    if (this._teardownIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardownIdleTimeout = this._teardownIdleTimeout;
    }
    if (this._teardownIdleTimeoutForever !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardownIdleTimeoutForever = this._teardownIdleTimeoutForever;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpGroupFamilyEvpnAcceptedPrefixLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._teardown = undefined;
      this._teardownIdleTimeout = undefined;
      this._teardownIdleTimeoutForever = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._teardown = value.teardown;
      this._teardownIdleTimeout = value.teardownIdleTimeout;
      this._teardownIdleTimeoutForever = value.teardownIdleTimeoutForever;
    }
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // teardown - computed: false, optional: true, required: false
  private _teardown?: number; 
  public get teardown() {
    return this.getNumberAttribute('teardown');
  }
  public set teardown(value: number) {
    this._teardown = value;
  }
  public resetTeardown() {
    this._teardown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownInput() {
    return this._teardown;
  }

  // teardown_idle_timeout - computed: false, optional: true, required: false
  private _teardownIdleTimeout?: number; 
  public get teardownIdleTimeout() {
    return this.getNumberAttribute('teardown_idle_timeout');
  }
  public set teardownIdleTimeout(value: number) {
    this._teardownIdleTimeout = value;
  }
  public resetTeardownIdleTimeout() {
    this._teardownIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownIdleTimeoutInput() {
    return this._teardownIdleTimeout;
  }

  // teardown_idle_timeout_forever - computed: false, optional: true, required: false
  private _teardownIdleTimeoutForever?: boolean | cdktf.IResolvable; 
  public get teardownIdleTimeoutForever() {
    return this.getBooleanAttribute('teardown_idle_timeout_forever');
  }
  public set teardownIdleTimeoutForever(value: boolean | cdktf.IResolvable) {
    this._teardownIdleTimeoutForever = value;
  }
  public resetTeardownIdleTimeoutForever() {
    this._teardownIdleTimeoutForever = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownIdleTimeoutForeverInput() {
    return this._teardownIdleTimeoutForever;
  }
}
export interface BgpGroupFamilyEvpnPrefixLimit {
  /**
  * Maximum number of prefixes accepted from a peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#maximum BgpGroup#maximum}
  */
  readonly maximum?: number;
  /**
  * Clear peer connection on reaching limit with this percentage of prefix-limit to start warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown BgpGroup#teardown}
  */
  readonly teardown?: number;
  /**
  * Timeout before attempting to restart peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown_idle_timeout BgpGroup#teardown_idle_timeout}
  */
  readonly teardownIdleTimeout?: number;
  /**
  * Idle the peer until the user intervenes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown_idle_timeout_forever BgpGroup#teardown_idle_timeout_forever}
  */
  readonly teardownIdleTimeoutForever?: boolean | cdktf.IResolvable;
}

export function bgpGroupFamilyEvpnPrefixLimitToTerraform(struct?: BgpGroupFamilyEvpnPrefixLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    teardown: cdktf.numberToTerraform(struct!.teardown),
    teardown_idle_timeout: cdktf.numberToTerraform(struct!.teardownIdleTimeout),
    teardown_idle_timeout_forever: cdktf.booleanToTerraform(struct!.teardownIdleTimeoutForever),
  }
}


export function bgpGroupFamilyEvpnPrefixLimitToHclTerraform(struct?: BgpGroupFamilyEvpnPrefixLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown: {
      value: cdktf.numberToHclTerraform(struct!.teardown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.teardownIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown_idle_timeout_forever: {
      value: cdktf.booleanToHclTerraform(struct!.teardownIdleTimeoutForever),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpGroupFamilyEvpnPrefixLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpGroupFamilyEvpnPrefixLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._teardown !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardown = this._teardown;
    }
    if (this._teardownIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardownIdleTimeout = this._teardownIdleTimeout;
    }
    if (this._teardownIdleTimeoutForever !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardownIdleTimeoutForever = this._teardownIdleTimeoutForever;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpGroupFamilyEvpnPrefixLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._teardown = undefined;
      this._teardownIdleTimeout = undefined;
      this._teardownIdleTimeoutForever = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._teardown = value.teardown;
      this._teardownIdleTimeout = value.teardownIdleTimeout;
      this._teardownIdleTimeoutForever = value.teardownIdleTimeoutForever;
    }
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // teardown - computed: false, optional: true, required: false
  private _teardown?: number; 
  public get teardown() {
    return this.getNumberAttribute('teardown');
  }
  public set teardown(value: number) {
    this._teardown = value;
  }
  public resetTeardown() {
    this._teardown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownInput() {
    return this._teardown;
  }

  // teardown_idle_timeout - computed: false, optional: true, required: false
  private _teardownIdleTimeout?: number; 
  public get teardownIdleTimeout() {
    return this.getNumberAttribute('teardown_idle_timeout');
  }
  public set teardownIdleTimeout(value: number) {
    this._teardownIdleTimeout = value;
  }
  public resetTeardownIdleTimeout() {
    this._teardownIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownIdleTimeoutInput() {
    return this._teardownIdleTimeout;
  }

  // teardown_idle_timeout_forever - computed: false, optional: true, required: false
  private _teardownIdleTimeoutForever?: boolean | cdktf.IResolvable; 
  public get teardownIdleTimeoutForever() {
    return this.getBooleanAttribute('teardown_idle_timeout_forever');
  }
  public set teardownIdleTimeoutForever(value: boolean | cdktf.IResolvable) {
    this._teardownIdleTimeoutForever = value;
  }
  public resetTeardownIdleTimeoutForever() {
    this._teardownIdleTimeoutForever = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownIdleTimeoutForeverInput() {
    return this._teardownIdleTimeoutForever;
  }
}
export interface BgpGroupFamilyEvpn {
  /**
  * NLRI type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#nlri_type BgpGroup#nlri_type}
  */
  readonly nlriType?: string;
  /**
  * accepted_prefix_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#accepted_prefix_limit BgpGroup#accepted_prefix_limit}
  */
  readonly acceptedPrefixLimit?: BgpGroupFamilyEvpnAcceptedPrefixLimit;
  /**
  * prefix_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#prefix_limit BgpGroup#prefix_limit}
  */
  readonly prefixLimit?: BgpGroupFamilyEvpnPrefixLimit;
}

export function bgpGroupFamilyEvpnToTerraform(struct?: BgpGroupFamilyEvpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nlri_type: cdktf.stringToTerraform(struct!.nlriType),
    accepted_prefix_limit: bgpGroupFamilyEvpnAcceptedPrefixLimitToTerraform(struct!.acceptedPrefixLimit),
    prefix_limit: bgpGroupFamilyEvpnPrefixLimitToTerraform(struct!.prefixLimit),
  }
}


export function bgpGroupFamilyEvpnToHclTerraform(struct?: BgpGroupFamilyEvpn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nlri_type: {
      value: cdktf.stringToHclTerraform(struct!.nlriType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accepted_prefix_limit: {
      value: bgpGroupFamilyEvpnAcceptedPrefixLimitToHclTerraform(struct!.acceptedPrefixLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpGroupFamilyEvpnAcceptedPrefixLimit",
    },
    prefix_limit: {
      value: bgpGroupFamilyEvpnPrefixLimitToHclTerraform(struct!.prefixLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpGroupFamilyEvpnPrefixLimit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpGroupFamilyEvpnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpGroupFamilyEvpn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nlriType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nlriType = this._nlriType;
    }
    if (this._acceptedPrefixLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptedPrefixLimit = this._acceptedPrefixLimit?.internalValue;
    }
    if (this._prefixLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLimit = this._prefixLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpGroupFamilyEvpn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nlriType = undefined;
      this._acceptedPrefixLimit.internalValue = undefined;
      this._prefixLimit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nlriType = value.nlriType;
      this._acceptedPrefixLimit.internalValue = value.acceptedPrefixLimit;
      this._prefixLimit.internalValue = value.prefixLimit;
    }
  }

  // nlri_type - computed: true, optional: true, required: false
  private _nlriType?: string; 
  public get nlriType() {
    return this.getStringAttribute('nlri_type');
  }
  public set nlriType(value: string) {
    this._nlriType = value;
  }
  public resetNlriType() {
    this._nlriType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nlriTypeInput() {
    return this._nlriType;
  }

  // accepted_prefix_limit - computed: false, optional: true, required: false
  private _acceptedPrefixLimit = new BgpGroupFamilyEvpnAcceptedPrefixLimitOutputReference(this, "accepted_prefix_limit");
  public get acceptedPrefixLimit() {
    return this._acceptedPrefixLimit;
  }
  public putAcceptedPrefixLimit(value: BgpGroupFamilyEvpnAcceptedPrefixLimit) {
    this._acceptedPrefixLimit.internalValue = value;
  }
  public resetAcceptedPrefixLimit() {
    this._acceptedPrefixLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedPrefixLimitInput() {
    return this._acceptedPrefixLimit.internalValue;
  }

  // prefix_limit - computed: false, optional: true, required: false
  private _prefixLimit = new BgpGroupFamilyEvpnPrefixLimitOutputReference(this, "prefix_limit");
  public get prefixLimit() {
    return this._prefixLimit;
  }
  public putPrefixLimit(value: BgpGroupFamilyEvpnPrefixLimit) {
    this._prefixLimit.internalValue = value;
  }
  public resetPrefixLimit() {
    this._prefixLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLimitInput() {
    return this._prefixLimit.internalValue;
  }
}

export class BgpGroupFamilyEvpnList extends cdktf.ComplexList {
  public internalValue? : BgpGroupFamilyEvpn[] | cdktf.IResolvable

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
  public get(index: number): BgpGroupFamilyEvpnOutputReference {
    return new BgpGroupFamilyEvpnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpGroupFamilyInetAcceptedPrefixLimit {
  /**
  * Maximum number of prefixes accepted from a peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#maximum BgpGroup#maximum}
  */
  readonly maximum?: number;
  /**
  * Clear peer connection on reaching limit with this percentage of prefix-limit to start warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown BgpGroup#teardown}
  */
  readonly teardown?: number;
  /**
  * Timeout before attempting to restart peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown_idle_timeout BgpGroup#teardown_idle_timeout}
  */
  readonly teardownIdleTimeout?: number;
  /**
  * Idle the peer until the user intervenes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown_idle_timeout_forever BgpGroup#teardown_idle_timeout_forever}
  */
  readonly teardownIdleTimeoutForever?: boolean | cdktf.IResolvable;
}

export function bgpGroupFamilyInetAcceptedPrefixLimitToTerraform(struct?: BgpGroupFamilyInetAcceptedPrefixLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    teardown: cdktf.numberToTerraform(struct!.teardown),
    teardown_idle_timeout: cdktf.numberToTerraform(struct!.teardownIdleTimeout),
    teardown_idle_timeout_forever: cdktf.booleanToTerraform(struct!.teardownIdleTimeoutForever),
  }
}


export function bgpGroupFamilyInetAcceptedPrefixLimitToHclTerraform(struct?: BgpGroupFamilyInetAcceptedPrefixLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown: {
      value: cdktf.numberToHclTerraform(struct!.teardown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.teardownIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown_idle_timeout_forever: {
      value: cdktf.booleanToHclTerraform(struct!.teardownIdleTimeoutForever),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpGroupFamilyInetAcceptedPrefixLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpGroupFamilyInetAcceptedPrefixLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._teardown !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardown = this._teardown;
    }
    if (this._teardownIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardownIdleTimeout = this._teardownIdleTimeout;
    }
    if (this._teardownIdleTimeoutForever !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardownIdleTimeoutForever = this._teardownIdleTimeoutForever;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpGroupFamilyInetAcceptedPrefixLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._teardown = undefined;
      this._teardownIdleTimeout = undefined;
      this._teardownIdleTimeoutForever = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._teardown = value.teardown;
      this._teardownIdleTimeout = value.teardownIdleTimeout;
      this._teardownIdleTimeoutForever = value.teardownIdleTimeoutForever;
    }
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // teardown - computed: false, optional: true, required: false
  private _teardown?: number; 
  public get teardown() {
    return this.getNumberAttribute('teardown');
  }
  public set teardown(value: number) {
    this._teardown = value;
  }
  public resetTeardown() {
    this._teardown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownInput() {
    return this._teardown;
  }

  // teardown_idle_timeout - computed: false, optional: true, required: false
  private _teardownIdleTimeout?: number; 
  public get teardownIdleTimeout() {
    return this.getNumberAttribute('teardown_idle_timeout');
  }
  public set teardownIdleTimeout(value: number) {
    this._teardownIdleTimeout = value;
  }
  public resetTeardownIdleTimeout() {
    this._teardownIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownIdleTimeoutInput() {
    return this._teardownIdleTimeout;
  }

  // teardown_idle_timeout_forever - computed: false, optional: true, required: false
  private _teardownIdleTimeoutForever?: boolean | cdktf.IResolvable; 
  public get teardownIdleTimeoutForever() {
    return this.getBooleanAttribute('teardown_idle_timeout_forever');
  }
  public set teardownIdleTimeoutForever(value: boolean | cdktf.IResolvable) {
    this._teardownIdleTimeoutForever = value;
  }
  public resetTeardownIdleTimeoutForever() {
    this._teardownIdleTimeoutForever = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownIdleTimeoutForeverInput() {
    return this._teardownIdleTimeoutForever;
  }
}
export interface BgpGroupFamilyInetPrefixLimit {
  /**
  * Maximum number of prefixes accepted from a peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#maximum BgpGroup#maximum}
  */
  readonly maximum?: number;
  /**
  * Clear peer connection on reaching limit with this percentage of prefix-limit to start warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown BgpGroup#teardown}
  */
  readonly teardown?: number;
  /**
  * Timeout before attempting to restart peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown_idle_timeout BgpGroup#teardown_idle_timeout}
  */
  readonly teardownIdleTimeout?: number;
  /**
  * Idle the peer until the user intervenes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown_idle_timeout_forever BgpGroup#teardown_idle_timeout_forever}
  */
  readonly teardownIdleTimeoutForever?: boolean | cdktf.IResolvable;
}

export function bgpGroupFamilyInetPrefixLimitToTerraform(struct?: BgpGroupFamilyInetPrefixLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    teardown: cdktf.numberToTerraform(struct!.teardown),
    teardown_idle_timeout: cdktf.numberToTerraform(struct!.teardownIdleTimeout),
    teardown_idle_timeout_forever: cdktf.booleanToTerraform(struct!.teardownIdleTimeoutForever),
  }
}


export function bgpGroupFamilyInetPrefixLimitToHclTerraform(struct?: BgpGroupFamilyInetPrefixLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown: {
      value: cdktf.numberToHclTerraform(struct!.teardown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.teardownIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown_idle_timeout_forever: {
      value: cdktf.booleanToHclTerraform(struct!.teardownIdleTimeoutForever),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpGroupFamilyInetPrefixLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpGroupFamilyInetPrefixLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._teardown !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardown = this._teardown;
    }
    if (this._teardownIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardownIdleTimeout = this._teardownIdleTimeout;
    }
    if (this._teardownIdleTimeoutForever !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardownIdleTimeoutForever = this._teardownIdleTimeoutForever;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpGroupFamilyInetPrefixLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._teardown = undefined;
      this._teardownIdleTimeout = undefined;
      this._teardownIdleTimeoutForever = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._teardown = value.teardown;
      this._teardownIdleTimeout = value.teardownIdleTimeout;
      this._teardownIdleTimeoutForever = value.teardownIdleTimeoutForever;
    }
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // teardown - computed: false, optional: true, required: false
  private _teardown?: number; 
  public get teardown() {
    return this.getNumberAttribute('teardown');
  }
  public set teardown(value: number) {
    this._teardown = value;
  }
  public resetTeardown() {
    this._teardown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownInput() {
    return this._teardown;
  }

  // teardown_idle_timeout - computed: false, optional: true, required: false
  private _teardownIdleTimeout?: number; 
  public get teardownIdleTimeout() {
    return this.getNumberAttribute('teardown_idle_timeout');
  }
  public set teardownIdleTimeout(value: number) {
    this._teardownIdleTimeout = value;
  }
  public resetTeardownIdleTimeout() {
    this._teardownIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownIdleTimeoutInput() {
    return this._teardownIdleTimeout;
  }

  // teardown_idle_timeout_forever - computed: false, optional: true, required: false
  private _teardownIdleTimeoutForever?: boolean | cdktf.IResolvable; 
  public get teardownIdleTimeoutForever() {
    return this.getBooleanAttribute('teardown_idle_timeout_forever');
  }
  public set teardownIdleTimeoutForever(value: boolean | cdktf.IResolvable) {
    this._teardownIdleTimeoutForever = value;
  }
  public resetTeardownIdleTimeoutForever() {
    this._teardownIdleTimeoutForever = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownIdleTimeoutForeverInput() {
    return this._teardownIdleTimeoutForever;
  }
}
export interface BgpGroupFamilyInet {
  /**
  * NLRI type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#nlri_type BgpGroup#nlri_type}
  */
  readonly nlriType: string;
  /**
  * accepted_prefix_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#accepted_prefix_limit BgpGroup#accepted_prefix_limit}
  */
  readonly acceptedPrefixLimit?: BgpGroupFamilyInetAcceptedPrefixLimit;
  /**
  * prefix_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#prefix_limit BgpGroup#prefix_limit}
  */
  readonly prefixLimit?: BgpGroupFamilyInetPrefixLimit;
}

export function bgpGroupFamilyInetToTerraform(struct?: BgpGroupFamilyInet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nlri_type: cdktf.stringToTerraform(struct!.nlriType),
    accepted_prefix_limit: bgpGroupFamilyInetAcceptedPrefixLimitToTerraform(struct!.acceptedPrefixLimit),
    prefix_limit: bgpGroupFamilyInetPrefixLimitToTerraform(struct!.prefixLimit),
  }
}


export function bgpGroupFamilyInetToHclTerraform(struct?: BgpGroupFamilyInet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nlri_type: {
      value: cdktf.stringToHclTerraform(struct!.nlriType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accepted_prefix_limit: {
      value: bgpGroupFamilyInetAcceptedPrefixLimitToHclTerraform(struct!.acceptedPrefixLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpGroupFamilyInetAcceptedPrefixLimit",
    },
    prefix_limit: {
      value: bgpGroupFamilyInetPrefixLimitToHclTerraform(struct!.prefixLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpGroupFamilyInetPrefixLimit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpGroupFamilyInetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpGroupFamilyInet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nlriType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nlriType = this._nlriType;
    }
    if (this._acceptedPrefixLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptedPrefixLimit = this._acceptedPrefixLimit?.internalValue;
    }
    if (this._prefixLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLimit = this._prefixLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpGroupFamilyInet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nlriType = undefined;
      this._acceptedPrefixLimit.internalValue = undefined;
      this._prefixLimit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nlriType = value.nlriType;
      this._acceptedPrefixLimit.internalValue = value.acceptedPrefixLimit;
      this._prefixLimit.internalValue = value.prefixLimit;
    }
  }

  // nlri_type - computed: false, optional: false, required: true
  private _nlriType?: string; 
  public get nlriType() {
    return this.getStringAttribute('nlri_type');
  }
  public set nlriType(value: string) {
    this._nlriType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nlriTypeInput() {
    return this._nlriType;
  }

  // accepted_prefix_limit - computed: false, optional: true, required: false
  private _acceptedPrefixLimit = new BgpGroupFamilyInetAcceptedPrefixLimitOutputReference(this, "accepted_prefix_limit");
  public get acceptedPrefixLimit() {
    return this._acceptedPrefixLimit;
  }
  public putAcceptedPrefixLimit(value: BgpGroupFamilyInetAcceptedPrefixLimit) {
    this._acceptedPrefixLimit.internalValue = value;
  }
  public resetAcceptedPrefixLimit() {
    this._acceptedPrefixLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedPrefixLimitInput() {
    return this._acceptedPrefixLimit.internalValue;
  }

  // prefix_limit - computed: false, optional: true, required: false
  private _prefixLimit = new BgpGroupFamilyInetPrefixLimitOutputReference(this, "prefix_limit");
  public get prefixLimit() {
    return this._prefixLimit;
  }
  public putPrefixLimit(value: BgpGroupFamilyInetPrefixLimit) {
    this._prefixLimit.internalValue = value;
  }
  public resetPrefixLimit() {
    this._prefixLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLimitInput() {
    return this._prefixLimit.internalValue;
  }
}

export class BgpGroupFamilyInetList extends cdktf.ComplexList {
  public internalValue? : BgpGroupFamilyInet[] | cdktf.IResolvable

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
  public get(index: number): BgpGroupFamilyInetOutputReference {
    return new BgpGroupFamilyInetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpGroupFamilyInet6AcceptedPrefixLimit {
  /**
  * Maximum number of prefixes accepted from a peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#maximum BgpGroup#maximum}
  */
  readonly maximum?: number;
  /**
  * Clear peer connection on reaching limit with this percentage of prefix-limit to start warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown BgpGroup#teardown}
  */
  readonly teardown?: number;
  /**
  * Timeout before attempting to restart peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown_idle_timeout BgpGroup#teardown_idle_timeout}
  */
  readonly teardownIdleTimeout?: number;
  /**
  * Idle the peer until the user intervenes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown_idle_timeout_forever BgpGroup#teardown_idle_timeout_forever}
  */
  readonly teardownIdleTimeoutForever?: boolean | cdktf.IResolvable;
}

export function bgpGroupFamilyInet6AcceptedPrefixLimitToTerraform(struct?: BgpGroupFamilyInet6AcceptedPrefixLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    teardown: cdktf.numberToTerraform(struct!.teardown),
    teardown_idle_timeout: cdktf.numberToTerraform(struct!.teardownIdleTimeout),
    teardown_idle_timeout_forever: cdktf.booleanToTerraform(struct!.teardownIdleTimeoutForever),
  }
}


export function bgpGroupFamilyInet6AcceptedPrefixLimitToHclTerraform(struct?: BgpGroupFamilyInet6AcceptedPrefixLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown: {
      value: cdktf.numberToHclTerraform(struct!.teardown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.teardownIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown_idle_timeout_forever: {
      value: cdktf.booleanToHclTerraform(struct!.teardownIdleTimeoutForever),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpGroupFamilyInet6AcceptedPrefixLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpGroupFamilyInet6AcceptedPrefixLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._teardown !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardown = this._teardown;
    }
    if (this._teardownIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardownIdleTimeout = this._teardownIdleTimeout;
    }
    if (this._teardownIdleTimeoutForever !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardownIdleTimeoutForever = this._teardownIdleTimeoutForever;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpGroupFamilyInet6AcceptedPrefixLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._teardown = undefined;
      this._teardownIdleTimeout = undefined;
      this._teardownIdleTimeoutForever = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._teardown = value.teardown;
      this._teardownIdleTimeout = value.teardownIdleTimeout;
      this._teardownIdleTimeoutForever = value.teardownIdleTimeoutForever;
    }
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // teardown - computed: false, optional: true, required: false
  private _teardown?: number; 
  public get teardown() {
    return this.getNumberAttribute('teardown');
  }
  public set teardown(value: number) {
    this._teardown = value;
  }
  public resetTeardown() {
    this._teardown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownInput() {
    return this._teardown;
  }

  // teardown_idle_timeout - computed: false, optional: true, required: false
  private _teardownIdleTimeout?: number; 
  public get teardownIdleTimeout() {
    return this.getNumberAttribute('teardown_idle_timeout');
  }
  public set teardownIdleTimeout(value: number) {
    this._teardownIdleTimeout = value;
  }
  public resetTeardownIdleTimeout() {
    this._teardownIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownIdleTimeoutInput() {
    return this._teardownIdleTimeout;
  }

  // teardown_idle_timeout_forever - computed: false, optional: true, required: false
  private _teardownIdleTimeoutForever?: boolean | cdktf.IResolvable; 
  public get teardownIdleTimeoutForever() {
    return this.getBooleanAttribute('teardown_idle_timeout_forever');
  }
  public set teardownIdleTimeoutForever(value: boolean | cdktf.IResolvable) {
    this._teardownIdleTimeoutForever = value;
  }
  public resetTeardownIdleTimeoutForever() {
    this._teardownIdleTimeoutForever = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownIdleTimeoutForeverInput() {
    return this._teardownIdleTimeoutForever;
  }
}
export interface BgpGroupFamilyInet6PrefixLimit {
  /**
  * Maximum number of prefixes accepted from a peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#maximum BgpGroup#maximum}
  */
  readonly maximum?: number;
  /**
  * Clear peer connection on reaching limit with this percentage of prefix-limit to start warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown BgpGroup#teardown}
  */
  readonly teardown?: number;
  /**
  * Timeout before attempting to restart peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown_idle_timeout BgpGroup#teardown_idle_timeout}
  */
  readonly teardownIdleTimeout?: number;
  /**
  * Idle the peer until the user intervenes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#teardown_idle_timeout_forever BgpGroup#teardown_idle_timeout_forever}
  */
  readonly teardownIdleTimeoutForever?: boolean | cdktf.IResolvable;
}

export function bgpGroupFamilyInet6PrefixLimitToTerraform(struct?: BgpGroupFamilyInet6PrefixLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    teardown: cdktf.numberToTerraform(struct!.teardown),
    teardown_idle_timeout: cdktf.numberToTerraform(struct!.teardownIdleTimeout),
    teardown_idle_timeout_forever: cdktf.booleanToTerraform(struct!.teardownIdleTimeoutForever),
  }
}


export function bgpGroupFamilyInet6PrefixLimitToHclTerraform(struct?: BgpGroupFamilyInet6PrefixLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown: {
      value: cdktf.numberToHclTerraform(struct!.teardown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.teardownIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    teardown_idle_timeout_forever: {
      value: cdktf.booleanToHclTerraform(struct!.teardownIdleTimeoutForever),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpGroupFamilyInet6PrefixLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpGroupFamilyInet6PrefixLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._teardown !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardown = this._teardown;
    }
    if (this._teardownIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardownIdleTimeout = this._teardownIdleTimeout;
    }
    if (this._teardownIdleTimeoutForever !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardownIdleTimeoutForever = this._teardownIdleTimeoutForever;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpGroupFamilyInet6PrefixLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._teardown = undefined;
      this._teardownIdleTimeout = undefined;
      this._teardownIdleTimeoutForever = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._teardown = value.teardown;
      this._teardownIdleTimeout = value.teardownIdleTimeout;
      this._teardownIdleTimeoutForever = value.teardownIdleTimeoutForever;
    }
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // teardown - computed: false, optional: true, required: false
  private _teardown?: number; 
  public get teardown() {
    return this.getNumberAttribute('teardown');
  }
  public set teardown(value: number) {
    this._teardown = value;
  }
  public resetTeardown() {
    this._teardown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownInput() {
    return this._teardown;
  }

  // teardown_idle_timeout - computed: false, optional: true, required: false
  private _teardownIdleTimeout?: number; 
  public get teardownIdleTimeout() {
    return this.getNumberAttribute('teardown_idle_timeout');
  }
  public set teardownIdleTimeout(value: number) {
    this._teardownIdleTimeout = value;
  }
  public resetTeardownIdleTimeout() {
    this._teardownIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownIdleTimeoutInput() {
    return this._teardownIdleTimeout;
  }

  // teardown_idle_timeout_forever - computed: false, optional: true, required: false
  private _teardownIdleTimeoutForever?: boolean | cdktf.IResolvable; 
  public get teardownIdleTimeoutForever() {
    return this.getBooleanAttribute('teardown_idle_timeout_forever');
  }
  public set teardownIdleTimeoutForever(value: boolean | cdktf.IResolvable) {
    this._teardownIdleTimeoutForever = value;
  }
  public resetTeardownIdleTimeoutForever() {
    this._teardownIdleTimeoutForever = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownIdleTimeoutForeverInput() {
    return this._teardownIdleTimeoutForever;
  }
}
export interface BgpGroupFamilyInet6 {
  /**
  * NLRI type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#nlri_type BgpGroup#nlri_type}
  */
  readonly nlriType: string;
  /**
  * accepted_prefix_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#accepted_prefix_limit BgpGroup#accepted_prefix_limit}
  */
  readonly acceptedPrefixLimit?: BgpGroupFamilyInet6AcceptedPrefixLimit;
  /**
  * prefix_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#prefix_limit BgpGroup#prefix_limit}
  */
  readonly prefixLimit?: BgpGroupFamilyInet6PrefixLimit;
}

export function bgpGroupFamilyInet6ToTerraform(struct?: BgpGroupFamilyInet6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nlri_type: cdktf.stringToTerraform(struct!.nlriType),
    accepted_prefix_limit: bgpGroupFamilyInet6AcceptedPrefixLimitToTerraform(struct!.acceptedPrefixLimit),
    prefix_limit: bgpGroupFamilyInet6PrefixLimitToTerraform(struct!.prefixLimit),
  }
}


export function bgpGroupFamilyInet6ToHclTerraform(struct?: BgpGroupFamilyInet6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nlri_type: {
      value: cdktf.stringToHclTerraform(struct!.nlriType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accepted_prefix_limit: {
      value: bgpGroupFamilyInet6AcceptedPrefixLimitToHclTerraform(struct!.acceptedPrefixLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpGroupFamilyInet6AcceptedPrefixLimit",
    },
    prefix_limit: {
      value: bgpGroupFamilyInet6PrefixLimitToHclTerraform(struct!.prefixLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpGroupFamilyInet6PrefixLimit",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpGroupFamilyInet6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpGroupFamilyInet6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nlriType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nlriType = this._nlriType;
    }
    if (this._acceptedPrefixLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptedPrefixLimit = this._acceptedPrefixLimit?.internalValue;
    }
    if (this._prefixLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLimit = this._prefixLimit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpGroupFamilyInet6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nlriType = undefined;
      this._acceptedPrefixLimit.internalValue = undefined;
      this._prefixLimit.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nlriType = value.nlriType;
      this._acceptedPrefixLimit.internalValue = value.acceptedPrefixLimit;
      this._prefixLimit.internalValue = value.prefixLimit;
    }
  }

  // nlri_type - computed: false, optional: false, required: true
  private _nlriType?: string; 
  public get nlriType() {
    return this.getStringAttribute('nlri_type');
  }
  public set nlriType(value: string) {
    this._nlriType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nlriTypeInput() {
    return this._nlriType;
  }

  // accepted_prefix_limit - computed: false, optional: true, required: false
  private _acceptedPrefixLimit = new BgpGroupFamilyInet6AcceptedPrefixLimitOutputReference(this, "accepted_prefix_limit");
  public get acceptedPrefixLimit() {
    return this._acceptedPrefixLimit;
  }
  public putAcceptedPrefixLimit(value: BgpGroupFamilyInet6AcceptedPrefixLimit) {
    this._acceptedPrefixLimit.internalValue = value;
  }
  public resetAcceptedPrefixLimit() {
    this._acceptedPrefixLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedPrefixLimitInput() {
    return this._acceptedPrefixLimit.internalValue;
  }

  // prefix_limit - computed: false, optional: true, required: false
  private _prefixLimit = new BgpGroupFamilyInet6PrefixLimitOutputReference(this, "prefix_limit");
  public get prefixLimit() {
    return this._prefixLimit;
  }
  public putPrefixLimit(value: BgpGroupFamilyInet6PrefixLimit) {
    this._prefixLimit.internalValue = value;
  }
  public resetPrefixLimit() {
    this._prefixLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLimitInput() {
    return this._prefixLimit.internalValue;
  }
}

export class BgpGroupFamilyInet6List extends cdktf.ComplexList {
  public internalValue? : BgpGroupFamilyInet6[] | cdktf.IResolvable

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
  public get(index: number): BgpGroupFamilyInet6OutputReference {
    return new BgpGroupFamilyInet6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpGroupGracefulRestart {
  /**
  * Disable graceful restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#disable BgpGroup#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Restart time used when negotiating with a peer (1..600).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#restart_time BgpGroup#restart_time}
  */
  readonly restartTime?: number;
  /**
  * Maximum time for which stale routes are kept (1..600).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#stale_route_time BgpGroup#stale_route_time}
  */
  readonly staleRouteTime?: number;
}

export function bgpGroupGracefulRestartToTerraform(struct?: BgpGroupGracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    restart_time: cdktf.numberToTerraform(struct!.restartTime),
    stale_route_time: cdktf.numberToTerraform(struct!.staleRouteTime),
  }
}


export function bgpGroupGracefulRestartToHclTerraform(struct?: BgpGroupGracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restart_time: {
      value: cdktf.numberToHclTerraform(struct!.restartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stale_route_time: {
      value: cdktf.numberToHclTerraform(struct!.staleRouteTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpGroupGracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpGroupGracefulRestart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._restartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartTime = this._restartTime;
    }
    if (this._staleRouteTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleRouteTime = this._staleRouteTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpGroupGracefulRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._restartTime = undefined;
      this._staleRouteTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._restartTime = value.restartTime;
      this._staleRouteTime = value.staleRouteTime;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // restart_time - computed: false, optional: true, required: false
  private _restartTime?: number; 
  public get restartTime() {
    return this.getNumberAttribute('restart_time');
  }
  public set restartTime(value: number) {
    this._restartTime = value;
  }
  public resetRestartTime() {
    this._restartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartTimeInput() {
    return this._restartTime;
  }

  // stale_route_time - computed: false, optional: true, required: false
  private _staleRouteTime?: number; 
  public get staleRouteTime() {
    return this.getNumberAttribute('stale_route_time');
  }
  public set staleRouteTime(value: number) {
    this._staleRouteTime = value;
  }
  public resetStaleRouteTime() {
    this._staleRouteTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleRouteTimeInput() {
    return this._staleRouteTime;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group junos_bgp_group}
*/
export class BgpGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_bgp_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpGroup to import
  * @param importFromId The id of the existing BgpGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_bgp_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bgp_group junos_bgp_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpGroupConfig
  */
  public constructor(scope: Construct, id: string, config: BgpGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_bgp_group',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptRemoteNexthop = config.acceptRemoteNexthop;
    this._advertiseExternal = config.advertiseExternal;
    this._advertiseExternalConditional = config.advertiseExternalConditional;
    this._advertiseInactive = config.advertiseInactive;
    this._advertisePeerAs = config.advertisePeerAs;
    this._asOverride = config.asOverride;
    this._authenticationAlgorithm = config.authenticationAlgorithm;
    this._authenticationKey = config.authenticationKey;
    this._authenticationKeyChain = config.authenticationKeyChain;
    this._cluster = config.cluster;
    this._damping = config.damping;
    this._description = config.description;
    this._export = config.export;
    this._holdTime = config.holdTime;
    this._import = config.import;
    this._keepAll = config.keepAll;
    this._keepNone = config.keepNone;
    this._localAddress = config.localAddress;
    this._localAs = config.localAs;
    this._localAsAlias = config.localAsAlias;
    this._localAsLoops = config.localAsLoops;
    this._localAsNoPrependGlobalAs = config.localAsNoPrependGlobalAs;
    this._localAsPrivate = config.localAsPrivate;
    this._localInterface = config.localInterface;
    this._localPreference = config.localPreference;
    this._logUpdown = config.logUpdown;
    this._metricOut = config.metricOut;
    this._metricOutIgp = config.metricOutIgp;
    this._metricOutIgpDelayMedUpdate = config.metricOutIgpDelayMedUpdate;
    this._metricOutIgpOffset = config.metricOutIgpOffset;
    this._metricOutMinimumIgp = config.metricOutMinimumIgp;
    this._metricOutMinimumIgpOffset = config.metricOutMinimumIgpOffset;
    this._mtuDiscovery = config.mtuDiscovery;
    this._multihop = config.multihop;
    this._name = config.name;
    this._noAdvertisePeerAs = config.noAdvertisePeerAs;
    this._noClientReflect = config.noClientReflect;
    this._outDelay = config.outDelay;
    this._passive = config.passive;
    this._peerAs = config.peerAs;
    this._preference = config.preference;
    this._removePrivate = config.removePrivate;
    this._routingInstance = config.routingInstance;
    this._tcpAggressiveTransmission = config.tcpAggressiveTransmission;
    this._type = config.type;
    this._bfdLivenessDetection.internalValue = config.bfdLivenessDetection;
    this._bgpErrorTolerance.internalValue = config.bgpErrorTolerance;
    this._bgpMultipath.internalValue = config.bgpMultipath;
    this._familyEvpn.internalValue = config.familyEvpn;
    this._familyInet.internalValue = config.familyInet;
    this._familyInet6.internalValue = config.familyInet6;
    this._gracefulRestart.internalValue = config.gracefulRestart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_remote_nexthop - computed: false, optional: true, required: false
  private _acceptRemoteNexthop?: boolean | cdktf.IResolvable; 
  public get acceptRemoteNexthop() {
    return this.getBooleanAttribute('accept_remote_nexthop');
  }
  public set acceptRemoteNexthop(value: boolean | cdktf.IResolvable) {
    this._acceptRemoteNexthop = value;
  }
  public resetAcceptRemoteNexthop() {
    this._acceptRemoteNexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptRemoteNexthopInput() {
    return this._acceptRemoteNexthop;
  }

  // advertise_external - computed: true, optional: true, required: false
  private _advertiseExternal?: boolean | cdktf.IResolvable; 
  public get advertiseExternal() {
    return this.getBooleanAttribute('advertise_external');
  }
  public set advertiseExternal(value: boolean | cdktf.IResolvable) {
    this._advertiseExternal = value;
  }
  public resetAdvertiseExternal() {
    this._advertiseExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseExternalInput() {
    return this._advertiseExternal;
  }

  // advertise_external_conditional - computed: false, optional: true, required: false
  private _advertiseExternalConditional?: boolean | cdktf.IResolvable; 
  public get advertiseExternalConditional() {
    return this.getBooleanAttribute('advertise_external_conditional');
  }
  public set advertiseExternalConditional(value: boolean | cdktf.IResolvable) {
    this._advertiseExternalConditional = value;
  }
  public resetAdvertiseExternalConditional() {
    this._advertiseExternalConditional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseExternalConditionalInput() {
    return this._advertiseExternalConditional;
  }

  // advertise_inactive - computed: false, optional: true, required: false
  private _advertiseInactive?: boolean | cdktf.IResolvable; 
  public get advertiseInactive() {
    return this.getBooleanAttribute('advertise_inactive');
  }
  public set advertiseInactive(value: boolean | cdktf.IResolvable) {
    this._advertiseInactive = value;
  }
  public resetAdvertiseInactive() {
    this._advertiseInactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInactiveInput() {
    return this._advertiseInactive;
  }

  // advertise_peer_as - computed: false, optional: true, required: false
  private _advertisePeerAs?: boolean | cdktf.IResolvable; 
  public get advertisePeerAs() {
    return this.getBooleanAttribute('advertise_peer_as');
  }
  public set advertisePeerAs(value: boolean | cdktf.IResolvable) {
    this._advertisePeerAs = value;
  }
  public resetAdvertisePeerAs() {
    this._advertisePeerAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisePeerAsInput() {
    return this._advertisePeerAs;
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

  // authentication_algorithm - computed: false, optional: true, required: false
  private _authenticationAlgorithm?: string; 
  public get authenticationAlgorithm() {
    return this.getStringAttribute('authentication_algorithm');
  }
  public set authenticationAlgorithm(value: string) {
    this._authenticationAlgorithm = value;
  }
  public resetAuthenticationAlgorithm() {
    this._authenticationAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAlgorithmInput() {
    return this._authenticationAlgorithm;
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // authentication_key_chain - computed: false, optional: true, required: false
  private _authenticationKeyChain?: string; 
  public get authenticationKeyChain() {
    return this.getStringAttribute('authentication_key_chain');
  }
  public set authenticationKeyChain(value: string) {
    this._authenticationKeyChain = value;
  }
  public resetAuthenticationKeyChain() {
    this._authenticationKeyChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyChainInput() {
    return this._authenticationKeyChain;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // damping - computed: false, optional: true, required: false
  private _damping?: boolean | cdktf.IResolvable; 
  public get damping() {
    return this.getBooleanAttribute('damping');
  }
  public set damping(value: boolean | cdktf.IResolvable) {
    this._damping = value;
  }
  public resetDamping() {
    this._damping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampingInput() {
    return this._damping;
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

  // export - computed: false, optional: true, required: false
  private _export?: string[]; 
  public get export() {
    return this.getListAttribute('export');
  }
  public set export(value: string[]) {
    this._export = value;
  }
  public resetExport() {
    this._export = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import - computed: false, optional: true, required: false
  private _import?: string[]; 
  public get import() {
    return this.getListAttribute('import');
  }
  public set import(value: string[]) {
    this._import = value;
  }
  public resetImport() {
    this._import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import;
  }

  // keep_all - computed: false, optional: true, required: false
  private _keepAll?: boolean | cdktf.IResolvable; 
  public get keepAll() {
    return this.getBooleanAttribute('keep_all');
  }
  public set keepAll(value: boolean | cdktf.IResolvable) {
    this._keepAll = value;
  }
  public resetKeepAll() {
    this._keepAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAllInput() {
    return this._keepAll;
  }

  // keep_none - computed: false, optional: true, required: false
  private _keepNone?: boolean | cdktf.IResolvable; 
  public get keepNone() {
    return this.getBooleanAttribute('keep_none');
  }
  public set keepNone(value: boolean | cdktf.IResolvable) {
    this._keepNone = value;
  }
  public resetKeepNone() {
    this._keepNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepNoneInput() {
    return this._keepNone;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress?: string; 
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }
  public set localAddress(value: string) {
    this._localAddress = value;
  }
  public resetLocalAddress() {
    this._localAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
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

  // local_as_alias - computed: false, optional: true, required: false
  private _localAsAlias?: boolean | cdktf.IResolvable; 
  public get localAsAlias() {
    return this.getBooleanAttribute('local_as_alias');
  }
  public set localAsAlias(value: boolean | cdktf.IResolvable) {
    this._localAsAlias = value;
  }
  public resetLocalAsAlias() {
    this._localAsAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsAliasInput() {
    return this._localAsAlias;
  }

  // local_as_loops - computed: false, optional: true, required: false
  private _localAsLoops?: number; 
  public get localAsLoops() {
    return this.getNumberAttribute('local_as_loops');
  }
  public set localAsLoops(value: number) {
    this._localAsLoops = value;
  }
  public resetLocalAsLoops() {
    this._localAsLoops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsLoopsInput() {
    return this._localAsLoops;
  }

  // local_as_no_prepend_global_as - computed: false, optional: true, required: false
  private _localAsNoPrependGlobalAs?: boolean | cdktf.IResolvable; 
  public get localAsNoPrependGlobalAs() {
    return this.getBooleanAttribute('local_as_no_prepend_global_as');
  }
  public set localAsNoPrependGlobalAs(value: boolean | cdktf.IResolvable) {
    this._localAsNoPrependGlobalAs = value;
  }
  public resetLocalAsNoPrependGlobalAs() {
    this._localAsNoPrependGlobalAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsNoPrependGlobalAsInput() {
    return this._localAsNoPrependGlobalAs;
  }

  // local_as_private - computed: false, optional: true, required: false
  private _localAsPrivate?: boolean | cdktf.IResolvable; 
  public get localAsPrivate() {
    return this.getBooleanAttribute('local_as_private');
  }
  public set localAsPrivate(value: boolean | cdktf.IResolvable) {
    this._localAsPrivate = value;
  }
  public resetLocalAsPrivate() {
    this._localAsPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsPrivateInput() {
    return this._localAsPrivate;
  }

  // local_interface - computed: false, optional: true, required: false
  private _localInterface?: string; 
  public get localInterface() {
    return this.getStringAttribute('local_interface');
  }
  public set localInterface(value: string) {
    this._localInterface = value;
  }
  public resetLocalInterface() {
    this._localInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInterfaceInput() {
    return this._localInterface;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // log_updown - computed: false, optional: true, required: false
  private _logUpdown?: boolean | cdktf.IResolvable; 
  public get logUpdown() {
    return this.getBooleanAttribute('log_updown');
  }
  public set logUpdown(value: boolean | cdktf.IResolvable) {
    this._logUpdown = value;
  }
  public resetLogUpdown() {
    this._logUpdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUpdownInput() {
    return this._logUpdown;
  }

  // metric_out - computed: false, optional: true, required: false
  private _metricOut?: number; 
  public get metricOut() {
    return this.getNumberAttribute('metric_out');
  }
  public set metricOut(value: number) {
    this._metricOut = value;
  }
  public resetMetricOut() {
    this._metricOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricOutInput() {
    return this._metricOut;
  }

  // metric_out_igp - computed: true, optional: true, required: false
  private _metricOutIgp?: boolean | cdktf.IResolvable; 
  public get metricOutIgp() {
    return this.getBooleanAttribute('metric_out_igp');
  }
  public set metricOutIgp(value: boolean | cdktf.IResolvable) {
    this._metricOutIgp = value;
  }
  public resetMetricOutIgp() {
    this._metricOutIgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricOutIgpInput() {
    return this._metricOutIgp;
  }

  // metric_out_igp_delay_med_update - computed: false, optional: true, required: false
  private _metricOutIgpDelayMedUpdate?: boolean | cdktf.IResolvable; 
  public get metricOutIgpDelayMedUpdate() {
    return this.getBooleanAttribute('metric_out_igp_delay_med_update');
  }
  public set metricOutIgpDelayMedUpdate(value: boolean | cdktf.IResolvable) {
    this._metricOutIgpDelayMedUpdate = value;
  }
  public resetMetricOutIgpDelayMedUpdate() {
    this._metricOutIgpDelayMedUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricOutIgpDelayMedUpdateInput() {
    return this._metricOutIgpDelayMedUpdate;
  }

  // metric_out_igp_offset - computed: false, optional: true, required: false
  private _metricOutIgpOffset?: number; 
  public get metricOutIgpOffset() {
    return this.getNumberAttribute('metric_out_igp_offset');
  }
  public set metricOutIgpOffset(value: number) {
    this._metricOutIgpOffset = value;
  }
  public resetMetricOutIgpOffset() {
    this._metricOutIgpOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricOutIgpOffsetInput() {
    return this._metricOutIgpOffset;
  }

  // metric_out_minimum_igp - computed: true, optional: true, required: false
  private _metricOutMinimumIgp?: boolean | cdktf.IResolvable; 
  public get metricOutMinimumIgp() {
    return this.getBooleanAttribute('metric_out_minimum_igp');
  }
  public set metricOutMinimumIgp(value: boolean | cdktf.IResolvable) {
    this._metricOutMinimumIgp = value;
  }
  public resetMetricOutMinimumIgp() {
    this._metricOutMinimumIgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricOutMinimumIgpInput() {
    return this._metricOutMinimumIgp;
  }

  // metric_out_minimum_igp_offset - computed: false, optional: true, required: false
  private _metricOutMinimumIgpOffset?: number; 
  public get metricOutMinimumIgpOffset() {
    return this.getNumberAttribute('metric_out_minimum_igp_offset');
  }
  public set metricOutMinimumIgpOffset(value: number) {
    this._metricOutMinimumIgpOffset = value;
  }
  public resetMetricOutMinimumIgpOffset() {
    this._metricOutMinimumIgpOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricOutMinimumIgpOffsetInput() {
    return this._metricOutMinimumIgpOffset;
  }

  // mtu_discovery - computed: false, optional: true, required: false
  private _mtuDiscovery?: boolean | cdktf.IResolvable; 
  public get mtuDiscovery() {
    return this.getBooleanAttribute('mtu_discovery');
  }
  public set mtuDiscovery(value: boolean | cdktf.IResolvable) {
    this._mtuDiscovery = value;
  }
  public resetMtuDiscovery() {
    this._mtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuDiscoveryInput() {
    return this._mtuDiscovery;
  }

  // multihop - computed: false, optional: true, required: false
  private _multihop?: boolean | cdktf.IResolvable; 
  public get multihop() {
    return this.getBooleanAttribute('multihop');
  }
  public set multihop(value: boolean | cdktf.IResolvable) {
    this._multihop = value;
  }
  public resetMultihop() {
    this._multihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multihopInput() {
    return this._multihop;
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

  // no_advertise_peer_as - computed: false, optional: true, required: false
  private _noAdvertisePeerAs?: boolean | cdktf.IResolvable; 
  public get noAdvertisePeerAs() {
    return this.getBooleanAttribute('no_advertise_peer_as');
  }
  public set noAdvertisePeerAs(value: boolean | cdktf.IResolvable) {
    this._noAdvertisePeerAs = value;
  }
  public resetNoAdvertisePeerAs() {
    this._noAdvertisePeerAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAdvertisePeerAsInput() {
    return this._noAdvertisePeerAs;
  }

  // no_client_reflect - computed: false, optional: true, required: false
  private _noClientReflect?: boolean | cdktf.IResolvable; 
  public get noClientReflect() {
    return this.getBooleanAttribute('no_client_reflect');
  }
  public set noClientReflect(value: boolean | cdktf.IResolvable) {
    this._noClientReflect = value;
  }
  public resetNoClientReflect() {
    this._noClientReflect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noClientReflectInput() {
    return this._noClientReflect;
  }

  // out_delay - computed: false, optional: true, required: false
  private _outDelay?: number; 
  public get outDelay() {
    return this.getNumberAttribute('out_delay');
  }
  public set outDelay(value: number) {
    this._outDelay = value;
  }
  public resetOutDelay() {
    this._outDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outDelayInput() {
    return this._outDelay;
  }

  // passive - computed: false, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // peer_as - computed: false, optional: true, required: false
  private _peerAs?: string; 
  public get peerAs() {
    return this.getStringAttribute('peer_as');
  }
  public set peerAs(value: string) {
    this._peerAs = value;
  }
  public resetPeerAs() {
    this._peerAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsInput() {
    return this._peerAs;
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

  // remove_private - computed: false, optional: true, required: false
  private _removePrivate?: boolean | cdktf.IResolvable; 
  public get removePrivate() {
    return this.getBooleanAttribute('remove_private');
  }
  public set removePrivate(value: boolean | cdktf.IResolvable) {
    this._removePrivate = value;
  }
  public resetRemovePrivate() {
    this._removePrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateInput() {
    return this._removePrivate;
  }

  // routing_instance - computed: true, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // tcp_aggressive_transmission - computed: false, optional: true, required: false
  private _tcpAggressiveTransmission?: boolean | cdktf.IResolvable; 
  public get tcpAggressiveTransmission() {
    return this.getBooleanAttribute('tcp_aggressive_transmission');
  }
  public set tcpAggressiveTransmission(value: boolean | cdktf.IResolvable) {
    this._tcpAggressiveTransmission = value;
  }
  public resetTcpAggressiveTransmission() {
    this._tcpAggressiveTransmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAggressiveTransmissionInput() {
    return this._tcpAggressiveTransmission;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // bfd_liveness_detection - computed: false, optional: true, required: false
  private _bfdLivenessDetection = new BgpGroupBfdLivenessDetectionOutputReference(this, "bfd_liveness_detection");
  public get bfdLivenessDetection() {
    return this._bfdLivenessDetection;
  }
  public putBfdLivenessDetection(value: BgpGroupBfdLivenessDetection) {
    this._bfdLivenessDetection.internalValue = value;
  }
  public resetBfdLivenessDetection() {
    this._bfdLivenessDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdLivenessDetectionInput() {
    return this._bfdLivenessDetection.internalValue;
  }

  // bgp_error_tolerance - computed: false, optional: true, required: false
  private _bgpErrorTolerance = new BgpGroupBgpErrorToleranceOutputReference(this, "bgp_error_tolerance");
  public get bgpErrorTolerance() {
    return this._bgpErrorTolerance;
  }
  public putBgpErrorTolerance(value: BgpGroupBgpErrorTolerance) {
    this._bgpErrorTolerance.internalValue = value;
  }
  public resetBgpErrorTolerance() {
    this._bgpErrorTolerance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpErrorToleranceInput() {
    return this._bgpErrorTolerance.internalValue;
  }

  // bgp_multipath - computed: false, optional: true, required: false
  private _bgpMultipath = new BgpGroupBgpMultipathOutputReference(this, "bgp_multipath");
  public get bgpMultipath() {
    return this._bgpMultipath;
  }
  public putBgpMultipath(value: BgpGroupBgpMultipath) {
    this._bgpMultipath.internalValue = value;
  }
  public resetBgpMultipath() {
    this._bgpMultipath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpMultipathInput() {
    return this._bgpMultipath.internalValue;
  }

  // family_evpn - computed: false, optional: true, required: false
  private _familyEvpn = new BgpGroupFamilyEvpnList(this, "family_evpn", false);
  public get familyEvpn() {
    return this._familyEvpn;
  }
  public putFamilyEvpn(value: BgpGroupFamilyEvpn[] | cdktf.IResolvable) {
    this._familyEvpn.internalValue = value;
  }
  public resetFamilyEvpn() {
    this._familyEvpn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyEvpnInput() {
    return this._familyEvpn.internalValue;
  }

  // family_inet - computed: false, optional: true, required: false
  private _familyInet = new BgpGroupFamilyInetList(this, "family_inet", false);
  public get familyInet() {
    return this._familyInet;
  }
  public putFamilyInet(value: BgpGroupFamilyInet[] | cdktf.IResolvable) {
    this._familyInet.internalValue = value;
  }
  public resetFamilyInet() {
    this._familyInet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInetInput() {
    return this._familyInet.internalValue;
  }

  // family_inet6 - computed: false, optional: true, required: false
  private _familyInet6 = new BgpGroupFamilyInet6List(this, "family_inet6", false);
  public get familyInet6() {
    return this._familyInet6;
  }
  public putFamilyInet6(value: BgpGroupFamilyInet6[] | cdktf.IResolvable) {
    this._familyInet6.internalValue = value;
  }
  public resetFamilyInet6() {
    this._familyInet6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInet6Input() {
    return this._familyInet6.internalValue;
  }

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart = new BgpGroupGracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }
  public putGracefulRestart(value: BgpGroupGracefulRestart) {
    this._gracefulRestart.internalValue = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_remote_nexthop: cdktf.booleanToTerraform(this._acceptRemoteNexthop),
      advertise_external: cdktf.booleanToTerraform(this._advertiseExternal),
      advertise_external_conditional: cdktf.booleanToTerraform(this._advertiseExternalConditional),
      advertise_inactive: cdktf.booleanToTerraform(this._advertiseInactive),
      advertise_peer_as: cdktf.booleanToTerraform(this._advertisePeerAs),
      as_override: cdktf.booleanToTerraform(this._asOverride),
      authentication_algorithm: cdktf.stringToTerraform(this._authenticationAlgorithm),
      authentication_key: cdktf.stringToTerraform(this._authenticationKey),
      authentication_key_chain: cdktf.stringToTerraform(this._authenticationKeyChain),
      cluster: cdktf.stringToTerraform(this._cluster),
      damping: cdktf.booleanToTerraform(this._damping),
      description: cdktf.stringToTerraform(this._description),
      export: cdktf.listMapper(cdktf.stringToTerraform, false)(this._export),
      hold_time: cdktf.numberToTerraform(this._holdTime),
      import: cdktf.listMapper(cdktf.stringToTerraform, false)(this._import),
      keep_all: cdktf.booleanToTerraform(this._keepAll),
      keep_none: cdktf.booleanToTerraform(this._keepNone),
      local_address: cdktf.stringToTerraform(this._localAddress),
      local_as: cdktf.stringToTerraform(this._localAs),
      local_as_alias: cdktf.booleanToTerraform(this._localAsAlias),
      local_as_loops: cdktf.numberToTerraform(this._localAsLoops),
      local_as_no_prepend_global_as: cdktf.booleanToTerraform(this._localAsNoPrependGlobalAs),
      local_as_private: cdktf.booleanToTerraform(this._localAsPrivate),
      local_interface: cdktf.stringToTerraform(this._localInterface),
      local_preference: cdktf.numberToTerraform(this._localPreference),
      log_updown: cdktf.booleanToTerraform(this._logUpdown),
      metric_out: cdktf.numberToTerraform(this._metricOut),
      metric_out_igp: cdktf.booleanToTerraform(this._metricOutIgp),
      metric_out_igp_delay_med_update: cdktf.booleanToTerraform(this._metricOutIgpDelayMedUpdate),
      metric_out_igp_offset: cdktf.numberToTerraform(this._metricOutIgpOffset),
      metric_out_minimum_igp: cdktf.booleanToTerraform(this._metricOutMinimumIgp),
      metric_out_minimum_igp_offset: cdktf.numberToTerraform(this._metricOutMinimumIgpOffset),
      mtu_discovery: cdktf.booleanToTerraform(this._mtuDiscovery),
      multihop: cdktf.booleanToTerraform(this._multihop),
      name: cdktf.stringToTerraform(this._name),
      no_advertise_peer_as: cdktf.booleanToTerraform(this._noAdvertisePeerAs),
      no_client_reflect: cdktf.booleanToTerraform(this._noClientReflect),
      out_delay: cdktf.numberToTerraform(this._outDelay),
      passive: cdktf.booleanToTerraform(this._passive),
      peer_as: cdktf.stringToTerraform(this._peerAs),
      preference: cdktf.numberToTerraform(this._preference),
      remove_private: cdktf.booleanToTerraform(this._removePrivate),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      tcp_aggressive_transmission: cdktf.booleanToTerraform(this._tcpAggressiveTransmission),
      type: cdktf.stringToTerraform(this._type),
      bfd_liveness_detection: bgpGroupBfdLivenessDetectionToTerraform(this._bfdLivenessDetection.internalValue),
      bgp_error_tolerance: bgpGroupBgpErrorToleranceToTerraform(this._bgpErrorTolerance.internalValue),
      bgp_multipath: bgpGroupBgpMultipathToTerraform(this._bgpMultipath.internalValue),
      family_evpn: cdktf.listMapper(bgpGroupFamilyEvpnToTerraform, true)(this._familyEvpn.internalValue),
      family_inet: cdktf.listMapper(bgpGroupFamilyInetToTerraform, true)(this._familyInet.internalValue),
      family_inet6: cdktf.listMapper(bgpGroupFamilyInet6ToTerraform, true)(this._familyInet6.internalValue),
      graceful_restart: bgpGroupGracefulRestartToTerraform(this._gracefulRestart.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_remote_nexthop: {
        value: cdktf.booleanToHclTerraform(this._acceptRemoteNexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_external: {
        value: cdktf.booleanToHclTerraform(this._advertiseExternal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_external_conditional: {
        value: cdktf.booleanToHclTerraform(this._advertiseExternalConditional),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_inactive: {
        value: cdktf.booleanToHclTerraform(this._advertiseInactive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_peer_as: {
        value: cdktf.booleanToHclTerraform(this._advertisePeerAs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      as_override: {
        value: cdktf.booleanToHclTerraform(this._asOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_algorithm: {
        value: cdktf.stringToHclTerraform(this._authenticationAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_key: {
        value: cdktf.stringToHclTerraform(this._authenticationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_key_chain: {
        value: cdktf.stringToHclTerraform(this._authenticationKeyChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      damping: {
        value: cdktf.booleanToHclTerraform(this._damping),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._export),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hold_time: {
        value: cdktf.numberToHclTerraform(this._holdTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      import: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._import),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      keep_all: {
        value: cdktf.booleanToHclTerraform(this._keepAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keep_none: {
        value: cdktf.booleanToHclTerraform(this._keepNone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_address: {
        value: cdktf.stringToHclTerraform(this._localAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_as: {
        value: cdktf.stringToHclTerraform(this._localAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_as_alias: {
        value: cdktf.booleanToHclTerraform(this._localAsAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_as_loops: {
        value: cdktf.numberToHclTerraform(this._localAsLoops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_as_no_prepend_global_as: {
        value: cdktf.booleanToHclTerraform(this._localAsNoPrependGlobalAs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_as_private: {
        value: cdktf.booleanToHclTerraform(this._localAsPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_interface: {
        value: cdktf.stringToHclTerraform(this._localInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_preference: {
        value: cdktf.numberToHclTerraform(this._localPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_updown: {
        value: cdktf.booleanToHclTerraform(this._logUpdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_out: {
        value: cdktf.numberToHclTerraform(this._metricOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_out_igp: {
        value: cdktf.booleanToHclTerraform(this._metricOutIgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_out_igp_delay_med_update: {
        value: cdktf.booleanToHclTerraform(this._metricOutIgpDelayMedUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_out_igp_offset: {
        value: cdktf.numberToHclTerraform(this._metricOutIgpOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_out_minimum_igp: {
        value: cdktf.booleanToHclTerraform(this._metricOutMinimumIgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_out_minimum_igp_offset: {
        value: cdktf.numberToHclTerraform(this._metricOutMinimumIgpOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu_discovery: {
        value: cdktf.booleanToHclTerraform(this._mtuDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multihop: {
        value: cdktf.booleanToHclTerraform(this._multihop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_advertise_peer_as: {
        value: cdktf.booleanToHclTerraform(this._noAdvertisePeerAs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_client_reflect: {
        value: cdktf.booleanToHclTerraform(this._noClientReflect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      out_delay: {
        value: cdktf.numberToHclTerraform(this._outDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      passive: {
        value: cdktf.booleanToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      peer_as: {
        value: cdktf.stringToHclTerraform(this._peerAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preference: {
        value: cdktf.numberToHclTerraform(this._preference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_private: {
        value: cdktf.booleanToHclTerraform(this._removePrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_aggressive_transmission: {
        value: cdktf.booleanToHclTerraform(this._tcpAggressiveTransmission),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd_liveness_detection: {
        value: bgpGroupBfdLivenessDetectionToHclTerraform(this._bfdLivenessDetection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpGroupBfdLivenessDetection",
      },
      bgp_error_tolerance: {
        value: bgpGroupBgpErrorToleranceToHclTerraform(this._bgpErrorTolerance.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpGroupBgpErrorTolerance",
      },
      bgp_multipath: {
        value: bgpGroupBgpMultipathToHclTerraform(this._bgpMultipath.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpGroupBgpMultipath",
      },
      family_evpn: {
        value: cdktf.listMapperHcl(bgpGroupFamilyEvpnToHclTerraform, true)(this._familyEvpn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpGroupFamilyEvpnList",
      },
      family_inet: {
        value: cdktf.listMapperHcl(bgpGroupFamilyInetToHclTerraform, true)(this._familyInet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpGroupFamilyInetList",
      },
      family_inet6: {
        value: cdktf.listMapperHcl(bgpGroupFamilyInet6ToHclTerraform, true)(this._familyInet6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpGroupFamilyInet6List",
      },
      graceful_restart: {
        value: bgpGroupGracefulRestartToHclTerraform(this._gracefulRestart.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpGroupGracefulRestart",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
