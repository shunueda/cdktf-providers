// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpNeighborIpv6NeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Send BGP update to ACOS application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#acos_application_only RouterBgpNeighborIpv6Neighbor#acos_application_only}
  */
  readonly acosApplicationOnly?: number;
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#activate RouterBgpNeighborIpv6Neighbor#activate}
  */
  readonly activate?: number;
  /**
  * Minimum interval between sending BGP routing updates (time in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#advertisement_interval RouterBgpNeighborIpv6Neighbor#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Accept as-path with my AS present in it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#allowas_in RouterBgpNeighborIpv6Neighbor#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#allowas_in_count RouterBgpNeighborIpv6Neighbor#allowas_in_count}
  */
  readonly allowasInCount?: number;
  /**
  * AsNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#as_number RouterBgpNeighborIpv6Neighbor#as_number}
  */
  readonly asNumber: string;
  /**
  * Minimum interval between sending AS-origination routing updates (time in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#as_origination_interval RouterBgpNeighborIpv6Neighbor#as_origination_interval}
  */
  readonly asOriginationInterval?: number;
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#bfd RouterBgpNeighborIpv6Neighbor#bfd}
  */
  readonly bfd?: number;
  /**
  * Key String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#bfd_value RouterBgpNeighborIpv6Neighbor#bfd_value}
  */
  readonly bfdValue?: string;
  /**
  * Include Neighbor in Established State for Collision Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#collide_established RouterBgpNeighborIpv6Neighbor#collide_established}
  */
  readonly collideEstablished?: number;
  /**
  * BGP connect timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#connect RouterBgpNeighborIpv6Neighbor#connect}
  */
  readonly connect?: number;
  /**
  * Originate default route to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#default_originate RouterBgpNeighborIpv6Neighbor#default_originate}
  */
  readonly defaultOriginate?: number;
  /**
  * Neighbor specific description (Up to 80 characters describing this neighbor)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#description RouterBgpNeighborIpv6Neighbor#description}
  */
  readonly description?: string;
  /**
  * BGP per neighbor disallow-infinite-holdtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#disallow_infinite_holdtime RouterBgpNeighborIpv6Neighbor#disallow_infinite_holdtime}
  */
  readonly disallowInfiniteHoldtime?: number;
  /**
  * Do not perform capability negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#dont_capability_negotiate RouterBgpNeighborIpv6Neighbor#dont_capability_negotiate}
  */
  readonly dontCapabilityNegotiate?: number;
  /**
  * Advertise dynamic capability to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#dynamic RouterBgpNeighborIpv6Neighbor#dynamic}
  */
  readonly dynamic?: number;
  /**
  * Allow EBGP neighbors not on directly connected networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#ebgp_multihop RouterBgpNeighborIpv6Neighbor#ebgp_multihop}
  */
  readonly ebgpMultihop?: number;
  /**
  * maximum hop count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#ebgp_multihop_hop_count RouterBgpNeighborIpv6Neighbor#ebgp_multihop_hop_count}
  */
  readonly ebgpMultihopHopCount?: number;
  /**
  * Enforce EBGP neighbors to perform multihop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#enforce_multihop RouterBgpNeighborIpv6Neighbor#enforce_multihop}
  */
  readonly enforceMultihop?: number;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#ethernet RouterBgpNeighborIpv6Neighbor#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Advertise extended-nexthop capability to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#extended_nexthop RouterBgpNeighborIpv6Neighbor#extended_nexthop}
  */
  readonly extendedNexthop?: number;
  /**
  * enable graceful-restart helper for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#graceful_restart RouterBgpNeighborIpv6Neighbor#graceful_restart}
  */
  readonly gracefulRestart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#id RouterBgpNeighborIpv6Neighbor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allow inbound soft reconfiguration for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#inbound RouterBgpNeighborIpv6Neighbor#inbound}
  */
  readonly inbound?: number;
  /**
  * Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#key_id RouterBgpNeighborIpv6Neighbor#key_id}
  */
  readonly keyId?: number;
  /**
  * 'md5': md5; 'meticulous-md5': meticulous-md5; 'meticulous-sha1': meticulous-sha1; 'sha1': sha1; 'simple': simple;  (Keyed MD5/Meticulous Keyed MD5/Meticulous Keyed SHA1/Keyed SHA1/Simple Password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#key_type RouterBgpNeighborIpv6Neighbor#key_type}
  */
  readonly keyType?: string;
  /**
  * Logical interface (Lif interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#lif RouterBgpNeighborIpv6Neighbor#lif}
  */
  readonly lif?: string;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#loopback RouterBgpNeighborIpv6Neighbor#loopback}
  */
  readonly loopback?: number;
  /**
  * Maximum number of prefix accept from this peer (maximum no. of prefix limit (various depends on model))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#maximum_prefix RouterBgpNeighborIpv6Neighbor#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * threshold-value, 1 to 100 percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#maximum_prefix_thres RouterBgpNeighborIpv6Neighbor#maximum_prefix_thres}
  */
  readonly maximumPrefixThres?: number;
  /**
  * Enable multihop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#multihop RouterBgpNeighborIpv6Neighbor#multihop}
  */
  readonly multihop?: number;
  /**
  * Specify AS number of BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#nbr_remote_as RouterBgpNeighborIpv6Neighbor#nbr_remote_as}
  */
  readonly nbrRemoteAs?: string;
  /**
  * Neighbor IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#neighbor_ipv6 RouterBgpNeighborIpv6Neighbor#neighbor_ipv6}
  */
  readonly neighborIpv6: string;
  /**
  * Disable the next hop calculation for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#next_hop_self RouterBgpNeighborIpv6Neighbor#next_hop_self}
  */
  readonly nextHopSelf?: number;
  /**
  * Override capability negotiation result
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#override_capability RouterBgpNeighborIpv6Neighbor#override_capability}
  */
  readonly overrideCapability?: number;
  /**
  * Key String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#pass_value RouterBgpNeighborIpv6Neighbor#pass_value}
  */
  readonly passValue?: string;
  /**
  * Don't send open messages to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#passive RouterBgpNeighborIpv6Neighbor#passive}
  */
  readonly passive?: number;
  /**
  * Configure peer-group (peer-group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#peer_group_name RouterBgpNeighborIpv6Neighbor#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * 'both': both; 'receive': receive; 'send': send;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#prefix_list_direction RouterBgpNeighborIpv6Neighbor#prefix_list_direction}
  */
  readonly prefixListDirection?: string;
  /**
  * Remove private AS number from outbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#remove_private_as RouterBgpNeighborIpv6Neighbor#remove_private_as}
  */
  readonly removePrivateAs?: number;
  /**
  * restart value, 1 to 1440 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#restart_min RouterBgpNeighborIpv6Neighbor#restart_min}
  */
  readonly restartMin?: number;
  /**
  * Route-map to specify criteria to originate default (route-map name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#route_map RouterBgpNeighborIpv6Neighbor#route_map}
  */
  readonly routeMap?: string;
  /**
  * Advertise route-refresh capability to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#route_refresh RouterBgpNeighborIpv6Neighbor#route_refresh}
  */
  readonly routeRefresh?: number;
  /**
  * 'all': Send Standard, Extended, and Large Community attributes; 'both': Send Standard and Extended Community attributes; 'none': Disable Sending Community attributes; 'standard': Send Standard Community attributes; 'extended': Send Extended Community attributes; 'large': Send Large Community attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#send_community_val RouterBgpNeighborIpv6Neighbor#send_community_val}
  */
  readonly sendCommunityVal?: string;
  /**
  * Administratively shut down this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#shutdown RouterBgpNeighborIpv6Neighbor#shutdown}
  */
  readonly shutdown?: number;
  /**
  * Strict capability negotiation match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#strict_capability_match RouterBgpNeighborIpv6Neighbor#strict_capability_match}
  */
  readonly strictCapabilityMatch?: number;
  /**
  * Send BGP update to telemetry db
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#telemetry RouterBgpNeighborIpv6Neighbor#telemetry}
  */
  readonly telemetry?: number;
  /**
  * Holdtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#timers_holdtime RouterBgpNeighborIpv6Neighbor#timers_holdtime}
  */
  readonly timersHoldtime?: number;
  /**
  * Keepalive interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#timers_keepalive RouterBgpNeighborIpv6Neighbor#timers_keepalive}
  */
  readonly timersKeepalive?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#trunk RouterBgpNeighborIpv6Neighbor#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#tunnel RouterBgpNeighborIpv6Neighbor#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Route-map to selectively unsuppress suppressed routes (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#unsuppress_map RouterBgpNeighborIpv6Neighbor#unsuppress_map}
  */
  readonly unsuppressMap?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#update_source_ip RouterBgpNeighborIpv6Neighbor#update_source_ip}
  */
  readonly updateSourceIp?: string;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#update_source_ipv6 RouterBgpNeighborIpv6Neighbor#update_source_ipv6}
  */
  readonly updateSourceIpv6?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#uuid RouterBgpNeighborIpv6Neighbor#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#ve RouterBgpNeighborIpv6Neighbor#ve}
  */
  readonly ve?: number;
  /**
  * Set default weight for routes from this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#weight RouterBgpNeighborIpv6Neighbor#weight}
  */
  readonly weight?: number;
  /**
  * distribute_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#distribute_lists RouterBgpNeighborIpv6Neighbor#distribute_lists}
  */
  readonly distributeLists?: RouterBgpNeighborIpv6NeighborDistributeLists[] | cdktf.IResolvable;
  /**
  * neighbor_filter_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#neighbor_filter_lists RouterBgpNeighborIpv6Neighbor#neighbor_filter_lists}
  */
  readonly neighborFilterLists?: RouterBgpNeighborIpv6NeighborNeighborFilterLists[] | cdktf.IResolvable;
  /**
  * neighbor_prefix_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#neighbor_prefix_lists RouterBgpNeighborIpv6Neighbor#neighbor_prefix_lists}
  */
  readonly neighborPrefixLists?: RouterBgpNeighborIpv6NeighborNeighborPrefixLists[] | cdktf.IResolvable;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#neighbor_route_map_lists RouterBgpNeighborIpv6Neighbor#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpNeighborIpv6NeighborNeighborRouteMapLists[] | cdktf.IResolvable;
}
export interface RouterBgpNeighborIpv6NeighborDistributeLists {
  /**
  * Filter updates to/from this neighbor (IP standard/extended/named access list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#distribute_list RouterBgpNeighborIpv6Neighbor#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#distribute_list_direction RouterBgpNeighborIpv6Neighbor#distribute_list_direction}
  */
  readonly distributeListDirection?: string;
}

export function routerBgpNeighborIpv6NeighborDistributeListsToTerraform(struct?: RouterBgpNeighborIpv6NeighborDistributeLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    distribute_list_direction: cdktf.stringToTerraform(struct!.distributeListDirection),
  }
}


export function routerBgpNeighborIpv6NeighborDistributeListsToHclTerraform(struct?: RouterBgpNeighborIpv6NeighborDistributeLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribute_list: {
      value: cdktf.stringToHclTerraform(struct!.distributeList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribute_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.distributeListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborIpv6NeighborDistributeListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborIpv6NeighborDistributeLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeList = this._distributeList;
    }
    if (this._distributeListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListDirection = this._distributeListDirection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborIpv6NeighborDistributeLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distributeList = undefined;
      this._distributeListDirection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distributeList = value.distributeList;
      this._distributeListDirection = value.distributeListDirection;
    }
  }

  // distribute_list - computed: false, optional: true, required: false
  private _distributeList?: string; 
  public get distributeList() {
    return this.getStringAttribute('distribute_list');
  }
  public set distributeList(value: string) {
    this._distributeList = value;
  }
  public resetDistributeList() {
    this._distributeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInput() {
    return this._distributeList;
  }

  // distribute_list_direction - computed: false, optional: true, required: false
  private _distributeListDirection?: string; 
  public get distributeListDirection() {
    return this.getStringAttribute('distribute_list_direction');
  }
  public set distributeListDirection(value: string) {
    this._distributeListDirection = value;
  }
  public resetDistributeListDirection() {
    this._distributeListDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListDirectionInput() {
    return this._distributeListDirection;
  }
}

export class RouterBgpNeighborIpv6NeighborDistributeListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborIpv6NeighborDistributeLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborIpv6NeighborDistributeListsOutputReference {
    return new RouterBgpNeighborIpv6NeighborDistributeListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborIpv6NeighborNeighborFilterLists {
  /**
  * Establish BGP filters (AS path access-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#filter_list RouterBgpNeighborIpv6Neighbor#filter_list}
  */
  readonly filterList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#filter_list_direction RouterBgpNeighborIpv6Neighbor#filter_list_direction}
  */
  readonly filterListDirection?: string;
}

export function routerBgpNeighborIpv6NeighborNeighborFilterListsToTerraform(struct?: RouterBgpNeighborIpv6NeighborNeighborFilterLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_list: cdktf.stringToTerraform(struct!.filterList),
    filter_list_direction: cdktf.stringToTerraform(struct!.filterListDirection),
  }
}


export function routerBgpNeighborIpv6NeighborNeighborFilterListsToHclTerraform(struct?: RouterBgpNeighborIpv6NeighborNeighborFilterLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_list: {
      value: cdktf.stringToHclTerraform(struct!.filterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.filterListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborIpv6NeighborNeighborFilterListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborIpv6NeighborNeighborFilterLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterList = this._filterList;
    }
    if (this._filterListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListDirection = this._filterListDirection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborIpv6NeighborNeighborFilterLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterList = undefined;
      this._filterListDirection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterList = value.filterList;
      this._filterListDirection = value.filterListDirection;
    }
  }

  // filter_list - computed: false, optional: true, required: false
  private _filterList?: string; 
  public get filterList() {
    return this.getStringAttribute('filter_list');
  }
  public set filterList(value: string) {
    this._filterList = value;
  }
  public resetFilterList() {
    this._filterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList;
  }

  // filter_list_direction - computed: false, optional: true, required: false
  private _filterListDirection?: string; 
  public get filterListDirection() {
    return this.getStringAttribute('filter_list_direction');
  }
  public set filterListDirection(value: string) {
    this._filterListDirection = value;
  }
  public resetFilterListDirection() {
    this._filterListDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListDirectionInput() {
    return this._filterListDirection;
  }
}

export class RouterBgpNeighborIpv6NeighborNeighborFilterListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborIpv6NeighborNeighborFilterLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborIpv6NeighborNeighborFilterListsOutputReference {
    return new RouterBgpNeighborIpv6NeighborNeighborFilterListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborIpv6NeighborNeighborPrefixLists {
  /**
  * Filter updates to/from this neighbor (Name of a prefix list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#nbr_prefix_list RouterBgpNeighborIpv6Neighbor#nbr_prefix_list}
  */
  readonly nbrPrefixList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#nbr_prefix_list_direction RouterBgpNeighborIpv6Neighbor#nbr_prefix_list_direction}
  */
  readonly nbrPrefixListDirection?: string;
}

export function routerBgpNeighborIpv6NeighborNeighborPrefixListsToTerraform(struct?: RouterBgpNeighborIpv6NeighborNeighborPrefixLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_prefix_list: cdktf.stringToTerraform(struct!.nbrPrefixList),
    nbr_prefix_list_direction: cdktf.stringToTerraform(struct!.nbrPrefixListDirection),
  }
}


export function routerBgpNeighborIpv6NeighborNeighborPrefixListsToHclTerraform(struct?: RouterBgpNeighborIpv6NeighborNeighborPrefixLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nbr_prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.nbrPrefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nbr_prefix_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.nbrPrefixListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborIpv6NeighborNeighborPrefixListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborIpv6NeighborNeighborPrefixLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nbrPrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbrPrefixList = this._nbrPrefixList;
    }
    if (this._nbrPrefixListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbrPrefixListDirection = this._nbrPrefixListDirection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborIpv6NeighborNeighborPrefixLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nbrPrefixList = undefined;
      this._nbrPrefixListDirection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nbrPrefixList = value.nbrPrefixList;
      this._nbrPrefixListDirection = value.nbrPrefixListDirection;
    }
  }

  // nbr_prefix_list - computed: false, optional: true, required: false
  private _nbrPrefixList?: string; 
  public get nbrPrefixList() {
    return this.getStringAttribute('nbr_prefix_list');
  }
  public set nbrPrefixList(value: string) {
    this._nbrPrefixList = value;
  }
  public resetNbrPrefixList() {
    this._nbrPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbrPrefixListInput() {
    return this._nbrPrefixList;
  }

  // nbr_prefix_list_direction - computed: false, optional: true, required: false
  private _nbrPrefixListDirection?: string; 
  public get nbrPrefixListDirection() {
    return this.getStringAttribute('nbr_prefix_list_direction');
  }
  public set nbrPrefixListDirection(value: string) {
    this._nbrPrefixListDirection = value;
  }
  public resetNbrPrefixListDirection() {
    this._nbrPrefixListDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbrPrefixListDirectionInput() {
    return this._nbrPrefixListDirection;
  }
}

export class RouterBgpNeighborIpv6NeighborNeighborPrefixListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborIpv6NeighborNeighborPrefixLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborIpv6NeighborNeighborPrefixListsOutputReference {
    return new RouterBgpNeighborIpv6NeighborNeighborPrefixListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborIpv6NeighborNeighborRouteMapLists {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#nbr_rmap_direction RouterBgpNeighborIpv6Neighbor#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#nbr_route_map RouterBgpNeighborIpv6Neighbor#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpNeighborIpv6NeighborNeighborRouteMapListsToTerraform(struct?: RouterBgpNeighborIpv6NeighborNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpNeighborIpv6NeighborNeighborRouteMapListsToHclTerraform(struct?: RouterBgpNeighborIpv6NeighborNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nbr_rmap_direction: {
      value: cdktf.stringToHclTerraform(struct!.nbrRmapDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nbr_route_map: {
      value: cdktf.stringToHclTerraform(struct!.nbrRouteMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborIpv6NeighborNeighborRouteMapListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborIpv6NeighborNeighborRouteMapLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nbrRmapDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbrRmapDirection = this._nbrRmapDirection;
    }
    if (this._nbrRouteMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbrRouteMap = this._nbrRouteMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborIpv6NeighborNeighborRouteMapLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nbrRmapDirection = undefined;
      this._nbrRouteMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nbrRmapDirection = value.nbrRmapDirection;
      this._nbrRouteMap = value.nbrRouteMap;
    }
  }

  // nbr_rmap_direction - computed: false, optional: true, required: false
  private _nbrRmapDirection?: string; 
  public get nbrRmapDirection() {
    return this.getStringAttribute('nbr_rmap_direction');
  }
  public set nbrRmapDirection(value: string) {
    this._nbrRmapDirection = value;
  }
  public resetNbrRmapDirection() {
    this._nbrRmapDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbrRmapDirectionInput() {
    return this._nbrRmapDirection;
  }

  // nbr_route_map - computed: false, optional: true, required: false
  private _nbrRouteMap?: string; 
  public get nbrRouteMap() {
    return this.getStringAttribute('nbr_route_map');
  }
  public set nbrRouteMap(value: string) {
    this._nbrRouteMap = value;
  }
  public resetNbrRouteMap() {
    this._nbrRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbrRouteMapInput() {
    return this._nbrRouteMap;
  }
}

export class RouterBgpNeighborIpv6NeighborNeighborRouteMapListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborIpv6NeighborNeighborRouteMapLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborIpv6NeighborNeighborRouteMapListsOutputReference {
    return new RouterBgpNeighborIpv6NeighborNeighborRouteMapListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor thunder_router_bgp_neighbor_ipv6_neighbor}
*/
export class RouterBgpNeighborIpv6Neighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_bgp_neighbor_ipv6_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpNeighborIpv6Neighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpNeighborIpv6Neighbor to import
  * @param importFromId The id of the existing RouterBgpNeighborIpv6Neighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpNeighborIpv6Neighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_bgp_neighbor_ipv6_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_neighbor_ipv6_neighbor thunder_router_bgp_neighbor_ipv6_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpNeighborIpv6NeighborConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpNeighborIpv6NeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_bgp_neighbor_ipv6_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acosApplicationOnly = config.acosApplicationOnly;
    this._activate = config.activate;
    this._advertisementInterval = config.advertisementInterval;
    this._allowasIn = config.allowasIn;
    this._allowasInCount = config.allowasInCount;
    this._asNumber = config.asNumber;
    this._asOriginationInterval = config.asOriginationInterval;
    this._bfd = config.bfd;
    this._bfdValue = config.bfdValue;
    this._collideEstablished = config.collideEstablished;
    this._connect = config.connect;
    this._defaultOriginate = config.defaultOriginate;
    this._description = config.description;
    this._disallowInfiniteHoldtime = config.disallowInfiniteHoldtime;
    this._dontCapabilityNegotiate = config.dontCapabilityNegotiate;
    this._dynamic = config.dynamic;
    this._ebgpMultihop = config.ebgpMultihop;
    this._ebgpMultihopHopCount = config.ebgpMultihopHopCount;
    this._enforceMultihop = config.enforceMultihop;
    this._ethernet = config.ethernet;
    this._extendedNexthop = config.extendedNexthop;
    this._gracefulRestart = config.gracefulRestart;
    this._id = config.id;
    this._inbound = config.inbound;
    this._keyId = config.keyId;
    this._keyType = config.keyType;
    this._lif = config.lif;
    this._loopback = config.loopback;
    this._maximumPrefix = config.maximumPrefix;
    this._maximumPrefixThres = config.maximumPrefixThres;
    this._multihop = config.multihop;
    this._nbrRemoteAs = config.nbrRemoteAs;
    this._neighborIpv6 = config.neighborIpv6;
    this._nextHopSelf = config.nextHopSelf;
    this._overrideCapability = config.overrideCapability;
    this._passValue = config.passValue;
    this._passive = config.passive;
    this._peerGroupName = config.peerGroupName;
    this._prefixListDirection = config.prefixListDirection;
    this._removePrivateAs = config.removePrivateAs;
    this._restartMin = config.restartMin;
    this._routeMap = config.routeMap;
    this._routeRefresh = config.routeRefresh;
    this._sendCommunityVal = config.sendCommunityVal;
    this._shutdown = config.shutdown;
    this._strictCapabilityMatch = config.strictCapabilityMatch;
    this._telemetry = config.telemetry;
    this._timersHoldtime = config.timersHoldtime;
    this._timersKeepalive = config.timersKeepalive;
    this._trunk = config.trunk;
    this._tunnel = config.tunnel;
    this._unsuppressMap = config.unsuppressMap;
    this._updateSourceIp = config.updateSourceIp;
    this._updateSourceIpv6 = config.updateSourceIpv6;
    this._uuid = config.uuid;
    this._ve = config.ve;
    this._weight = config.weight;
    this._distributeLists.internalValue = config.distributeLists;
    this._neighborFilterLists.internalValue = config.neighborFilterLists;
    this._neighborPrefixLists.internalValue = config.neighborPrefixLists;
    this._neighborRouteMapLists.internalValue = config.neighborRouteMapLists;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acos_application_only - computed: false, optional: true, required: false
  private _acosApplicationOnly?: number; 
  public get acosApplicationOnly() {
    return this.getNumberAttribute('acos_application_only');
  }
  public set acosApplicationOnly(value: number) {
    this._acosApplicationOnly = value;
  }
  public resetAcosApplicationOnly() {
    this._acosApplicationOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acosApplicationOnlyInput() {
    return this._acosApplicationOnly;
  }

  // activate - computed: false, optional: true, required: false
  private _activate?: number; 
  public get activate() {
    return this.getNumberAttribute('activate');
  }
  public set activate(value: number) {
    this._activate = value;
  }
  public resetActivate() {
    this._activate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInput() {
    return this._activate;
  }

  // advertisement_interval - computed: false, optional: true, required: false
  private _advertisementInterval?: number; 
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
  }
  public set advertisementInterval(value: number) {
    this._advertisementInterval = value;
  }
  public resetAdvertisementInterval() {
    this._advertisementInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementIntervalInput() {
    return this._advertisementInterval;
  }

  // allowas_in - computed: false, optional: true, required: false
  private _allowasIn?: number; 
  public get allowasIn() {
    return this.getNumberAttribute('allowas_in');
  }
  public set allowasIn(value: number) {
    this._allowasIn = value;
  }
  public resetAllowasIn() {
    this._allowasIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInInput() {
    return this._allowasIn;
  }

  // allowas_in_count - computed: false, optional: true, required: false
  private _allowasInCount?: number; 
  public get allowasInCount() {
    return this.getNumberAttribute('allowas_in_count');
  }
  public set allowasInCount(value: number) {
    this._allowasInCount = value;
  }
  public resetAllowasInCount() {
    this._allowasInCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInCountInput() {
    return this._allowasInCount;
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

  // as_origination_interval - computed: false, optional: true, required: false
  private _asOriginationInterval?: number; 
  public get asOriginationInterval() {
    return this.getNumberAttribute('as_origination_interval');
  }
  public set asOriginationInterval(value: number) {
    this._asOriginationInterval = value;
  }
  public resetAsOriginationInterval() {
    this._asOriginationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOriginationIntervalInput() {
    return this._asOriginationInterval;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd?: number; 
  public get bfd() {
    return this.getNumberAttribute('bfd');
  }
  public set bfd(value: number) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // bfd_value - computed: false, optional: true, required: false
  private _bfdValue?: string; 
  public get bfdValue() {
    return this.getStringAttribute('bfd_value');
  }
  public set bfdValue(value: string) {
    this._bfdValue = value;
  }
  public resetBfdValue() {
    this._bfdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdValueInput() {
    return this._bfdValue;
  }

  // collide_established - computed: false, optional: true, required: false
  private _collideEstablished?: number; 
  public get collideEstablished() {
    return this.getNumberAttribute('collide_established');
  }
  public set collideEstablished(value: number) {
    this._collideEstablished = value;
  }
  public resetCollideEstablished() {
    this._collideEstablished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collideEstablishedInput() {
    return this._collideEstablished;
  }

  // connect - computed: false, optional: true, required: false
  private _connect?: number; 
  public get connect() {
    return this.getNumberAttribute('connect');
  }
  public set connect(value: number) {
    this._connect = value;
  }
  public resetConnect() {
    this._connect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect;
  }

  // default_originate - computed: false, optional: true, required: false
  private _defaultOriginate?: number; 
  public get defaultOriginate() {
    return this.getNumberAttribute('default_originate');
  }
  public set defaultOriginate(value: number) {
    this._defaultOriginate = value;
  }
  public resetDefaultOriginate() {
    this._defaultOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateInput() {
    return this._defaultOriginate;
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

  // disallow_infinite_holdtime - computed: false, optional: true, required: false
  private _disallowInfiniteHoldtime?: number; 
  public get disallowInfiniteHoldtime() {
    return this.getNumberAttribute('disallow_infinite_holdtime');
  }
  public set disallowInfiniteHoldtime(value: number) {
    this._disallowInfiniteHoldtime = value;
  }
  public resetDisallowInfiniteHoldtime() {
    this._disallowInfiniteHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowInfiniteHoldtimeInput() {
    return this._disallowInfiniteHoldtime;
  }

  // dont_capability_negotiate - computed: false, optional: true, required: false
  private _dontCapabilityNegotiate?: number; 
  public get dontCapabilityNegotiate() {
    return this.getNumberAttribute('dont_capability_negotiate');
  }
  public set dontCapabilityNegotiate(value: number) {
    this._dontCapabilityNegotiate = value;
  }
  public resetDontCapabilityNegotiate() {
    this._dontCapabilityNegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontCapabilityNegotiateInput() {
    return this._dontCapabilityNegotiate;
  }

  // dynamic - computed: false, optional: true, required: false
  private _dynamic?: number; 
  public get dynamic() {
    return this.getNumberAttribute('dynamic');
  }
  public set dynamic(value: number) {
    this._dynamic = value;
  }
  public resetDynamic() {
    this._dynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic;
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

  // ebgp_multihop_hop_count - computed: false, optional: true, required: false
  private _ebgpMultihopHopCount?: number; 
  public get ebgpMultihopHopCount() {
    return this.getNumberAttribute('ebgp_multihop_hop_count');
  }
  public set ebgpMultihopHopCount(value: number) {
    this._ebgpMultihopHopCount = value;
  }
  public resetEbgpMultihopHopCount() {
    this._ebgpMultihopHopCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopHopCountInput() {
    return this._ebgpMultihopHopCount;
  }

  // enforce_multihop - computed: false, optional: true, required: false
  private _enforceMultihop?: number; 
  public get enforceMultihop() {
    return this.getNumberAttribute('enforce_multihop');
  }
  public set enforceMultihop(value: number) {
    this._enforceMultihop = value;
  }
  public resetEnforceMultihop() {
    this._enforceMultihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceMultihopInput() {
    return this._enforceMultihop;
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // extended_nexthop - computed: false, optional: true, required: false
  private _extendedNexthop?: number; 
  public get extendedNexthop() {
    return this.getNumberAttribute('extended_nexthop');
  }
  public set extendedNexthop(value: number) {
    this._extendedNexthop = value;
  }
  public resetExtendedNexthop() {
    this._extendedNexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedNexthopInput() {
    return this._extendedNexthop;
  }

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart?: number; 
  public get gracefulRestart() {
    return this.getNumberAttribute('graceful_restart');
  }
  public set gracefulRestart(value: number) {
    this._gracefulRestart = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound?: number; 
  public get inbound() {
    return this.getNumberAttribute('inbound');
  }
  public set inbound(value: number) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // lif - computed: false, optional: true, required: false
  private _lif?: string; 
  public get lif() {
    return this.getStringAttribute('lif');
  }
  public set lif(value: string) {
    this._lif = value;
  }
  public resetLif() {
    this._lif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifInput() {
    return this._lif;
  }

  // loopback - computed: false, optional: true, required: false
  private _loopback?: number; 
  public get loopback() {
    return this.getNumberAttribute('loopback');
  }
  public set loopback(value: number) {
    this._loopback = value;
  }
  public resetLoopback() {
    this._loopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInput() {
    return this._loopback;
  }

  // maximum_prefix - computed: false, optional: true, required: false
  private _maximumPrefix?: number; 
  public get maximumPrefix() {
    return this.getNumberAttribute('maximum_prefix');
  }
  public set maximumPrefix(value: number) {
    this._maximumPrefix = value;
  }
  public resetMaximumPrefix() {
    this._maximumPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixInput() {
    return this._maximumPrefix;
  }

  // maximum_prefix_thres - computed: false, optional: true, required: false
  private _maximumPrefixThres?: number; 
  public get maximumPrefixThres() {
    return this.getNumberAttribute('maximum_prefix_thres');
  }
  public set maximumPrefixThres(value: number) {
    this._maximumPrefixThres = value;
  }
  public resetMaximumPrefixThres() {
    this._maximumPrefixThres = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresInput() {
    return this._maximumPrefixThres;
  }

  // multihop - computed: false, optional: true, required: false
  private _multihop?: number; 
  public get multihop() {
    return this.getNumberAttribute('multihop');
  }
  public set multihop(value: number) {
    this._multihop = value;
  }
  public resetMultihop() {
    this._multihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multihopInput() {
    return this._multihop;
  }

  // nbr_remote_as - computed: false, optional: true, required: false
  private _nbrRemoteAs?: string; 
  public get nbrRemoteAs() {
    return this.getStringAttribute('nbr_remote_as');
  }
  public set nbrRemoteAs(value: string) {
    this._nbrRemoteAs = value;
  }
  public resetNbrRemoteAs() {
    this._nbrRemoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbrRemoteAsInput() {
    return this._nbrRemoteAs;
  }

  // neighbor_ipv6 - computed: false, optional: false, required: true
  private _neighborIpv6?: string; 
  public get neighborIpv6() {
    return this.getStringAttribute('neighbor_ipv6');
  }
  public set neighborIpv6(value: string) {
    this._neighborIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborIpv6Input() {
    return this._neighborIpv6;
  }

  // next_hop_self - computed: false, optional: true, required: false
  private _nextHopSelf?: number; 
  public get nextHopSelf() {
    return this.getNumberAttribute('next_hop_self');
  }
  public set nextHopSelf(value: number) {
    this._nextHopSelf = value;
  }
  public resetNextHopSelf() {
    this._nextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInput() {
    return this._nextHopSelf;
  }

  // override_capability - computed: false, optional: true, required: false
  private _overrideCapability?: number; 
  public get overrideCapability() {
    return this.getNumberAttribute('override_capability');
  }
  public set overrideCapability(value: number) {
    this._overrideCapability = value;
  }
  public resetOverrideCapability() {
    this._overrideCapability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideCapabilityInput() {
    return this._overrideCapability;
  }

  // pass_value - computed: false, optional: true, required: false
  private _passValue?: string; 
  public get passValue() {
    return this.getStringAttribute('pass_value');
  }
  public set passValue(value: string) {
    this._passValue = value;
  }
  public resetPassValue() {
    this._passValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passValueInput() {
    return this._passValue;
  }

  // passive - computed: false, optional: true, required: false
  private _passive?: number; 
  public get passive() {
    return this.getNumberAttribute('passive');
  }
  public set passive(value: number) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // peer_group_name - computed: false, optional: true, required: false
  private _peerGroupName?: string; 
  public get peerGroupName() {
    return this.getStringAttribute('peer_group_name');
  }
  public set peerGroupName(value: string) {
    this._peerGroupName = value;
  }
  public resetPeerGroupName() {
    this._peerGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupNameInput() {
    return this._peerGroupName;
  }

  // prefix_list_direction - computed: false, optional: true, required: false
  private _prefixListDirection?: string; 
  public get prefixListDirection() {
    return this.getStringAttribute('prefix_list_direction');
  }
  public set prefixListDirection(value: string) {
    this._prefixListDirection = value;
  }
  public resetPrefixListDirection() {
    this._prefixListDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListDirectionInput() {
    return this._prefixListDirection;
  }

  // remove_private_as - computed: false, optional: true, required: false
  private _removePrivateAs?: number; 
  public get removePrivateAs() {
    return this.getNumberAttribute('remove_private_as');
  }
  public set removePrivateAs(value: number) {
    this._removePrivateAs = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs;
  }

  // restart_min - computed: false, optional: true, required: false
  private _restartMin?: number; 
  public get restartMin() {
    return this.getNumberAttribute('restart_min');
  }
  public set restartMin(value: number) {
    this._restartMin = value;
  }
  public resetRestartMin() {
    this._restartMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartMinInput() {
    return this._restartMin;
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // route_refresh - computed: false, optional: true, required: false
  private _routeRefresh?: number; 
  public get routeRefresh() {
    return this.getNumberAttribute('route_refresh');
  }
  public set routeRefresh(value: number) {
    this._routeRefresh = value;
  }
  public resetRouteRefresh() {
    this._routeRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeRefreshInput() {
    return this._routeRefresh;
  }

  // send_community_val - computed: false, optional: true, required: false
  private _sendCommunityVal?: string; 
  public get sendCommunityVal() {
    return this.getStringAttribute('send_community_val');
  }
  public set sendCommunityVal(value: string) {
    this._sendCommunityVal = value;
  }
  public resetSendCommunityVal() {
    this._sendCommunityVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityValInput() {
    return this._sendCommunityVal;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: number; 
  public get shutdown() {
    return this.getNumberAttribute('shutdown');
  }
  public set shutdown(value: number) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // strict_capability_match - computed: false, optional: true, required: false
  private _strictCapabilityMatch?: number; 
  public get strictCapabilityMatch() {
    return this.getNumberAttribute('strict_capability_match');
  }
  public set strictCapabilityMatch(value: number) {
    this._strictCapabilityMatch = value;
  }
  public resetStrictCapabilityMatch() {
    this._strictCapabilityMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictCapabilityMatchInput() {
    return this._strictCapabilityMatch;
  }

  // telemetry - computed: false, optional: true, required: false
  private _telemetry?: number; 
  public get telemetry() {
    return this.getNumberAttribute('telemetry');
  }
  public set telemetry(value: number) {
    this._telemetry = value;
  }
  public resetTelemetry() {
    this._telemetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryInput() {
    return this._telemetry;
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

  // timers_keepalive - computed: false, optional: true, required: false
  private _timersKeepalive?: number; 
  public get timersKeepalive() {
    return this.getNumberAttribute('timers_keepalive');
  }
  public set timersKeepalive(value: number) {
    this._timersKeepalive = value;
  }
  public resetTimersKeepalive() {
    this._timersKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersKeepaliveInput() {
    return this._timersKeepalive;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: number; 
  public get tunnel() {
    return this.getNumberAttribute('tunnel');
  }
  public set tunnel(value: number) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
  }

  // unsuppress_map - computed: false, optional: true, required: false
  private _unsuppressMap?: string; 
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }
  public set unsuppressMap(value: string) {
    this._unsuppressMap = value;
  }
  public resetUnsuppressMap() {
    this._unsuppressMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsuppressMapInput() {
    return this._unsuppressMap;
  }

  // update_source_ip - computed: false, optional: true, required: false
  private _updateSourceIp?: string; 
  public get updateSourceIp() {
    return this.getStringAttribute('update_source_ip');
  }
  public set updateSourceIp(value: string) {
    this._updateSourceIp = value;
  }
  public resetUpdateSourceIp() {
    this._updateSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceIpInput() {
    return this._updateSourceIp;
  }

  // update_source_ipv6 - computed: false, optional: true, required: false
  private _updateSourceIpv6?: string; 
  public get updateSourceIpv6() {
    return this.getStringAttribute('update_source_ipv6');
  }
  public set updateSourceIpv6(value: string) {
    this._updateSourceIpv6 = value;
  }
  public resetUpdateSourceIpv6() {
    this._updateSourceIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceIpv6Input() {
    return this._updateSourceIpv6;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
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

  // distribute_lists - computed: false, optional: true, required: false
  private _distributeLists = new RouterBgpNeighborIpv6NeighborDistributeListsList(this, "distribute_lists", false);
  public get distributeLists() {
    return this._distributeLists;
  }
  public putDistributeLists(value: RouterBgpNeighborIpv6NeighborDistributeLists[] | cdktf.IResolvable) {
    this._distributeLists.internalValue = value;
  }
  public resetDistributeLists() {
    this._distributeLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListsInput() {
    return this._distributeLists.internalValue;
  }

  // neighbor_filter_lists - computed: false, optional: true, required: false
  private _neighborFilterLists = new RouterBgpNeighborIpv6NeighborNeighborFilterListsList(this, "neighbor_filter_lists", false);
  public get neighborFilterLists() {
    return this._neighborFilterLists;
  }
  public putNeighborFilterLists(value: RouterBgpNeighborIpv6NeighborNeighborFilterLists[] | cdktf.IResolvable) {
    this._neighborFilterLists.internalValue = value;
  }
  public resetNeighborFilterLists() {
    this._neighborFilterLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborFilterListsInput() {
    return this._neighborFilterLists.internalValue;
  }

  // neighbor_prefix_lists - computed: false, optional: true, required: false
  private _neighborPrefixLists = new RouterBgpNeighborIpv6NeighborNeighborPrefixListsList(this, "neighbor_prefix_lists", false);
  public get neighborPrefixLists() {
    return this._neighborPrefixLists;
  }
  public putNeighborPrefixLists(value: RouterBgpNeighborIpv6NeighborNeighborPrefixLists[] | cdktf.IResolvable) {
    this._neighborPrefixLists.internalValue = value;
  }
  public resetNeighborPrefixLists() {
    this._neighborPrefixLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborPrefixListsInput() {
    return this._neighborPrefixLists.internalValue;
  }

  // neighbor_route_map_lists - computed: false, optional: true, required: false
  private _neighborRouteMapLists = new RouterBgpNeighborIpv6NeighborNeighborRouteMapListsList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpNeighborIpv6NeighborNeighborRouteMapLists[] | cdktf.IResolvable) {
    this._neighborRouteMapLists.internalValue = value;
  }
  public resetNeighborRouteMapLists() {
    this._neighborRouteMapLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborRouteMapListsInput() {
    return this._neighborRouteMapLists.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acos_application_only: cdktf.numberToTerraform(this._acosApplicationOnly),
      activate: cdktf.numberToTerraform(this._activate),
      advertisement_interval: cdktf.numberToTerraform(this._advertisementInterval),
      allowas_in: cdktf.numberToTerraform(this._allowasIn),
      allowas_in_count: cdktf.numberToTerraform(this._allowasInCount),
      as_number: cdktf.stringToTerraform(this._asNumber),
      as_origination_interval: cdktf.numberToTerraform(this._asOriginationInterval),
      bfd: cdktf.numberToTerraform(this._bfd),
      bfd_value: cdktf.stringToTerraform(this._bfdValue),
      collide_established: cdktf.numberToTerraform(this._collideEstablished),
      connect: cdktf.numberToTerraform(this._connect),
      default_originate: cdktf.numberToTerraform(this._defaultOriginate),
      description: cdktf.stringToTerraform(this._description),
      disallow_infinite_holdtime: cdktf.numberToTerraform(this._disallowInfiniteHoldtime),
      dont_capability_negotiate: cdktf.numberToTerraform(this._dontCapabilityNegotiate),
      dynamic: cdktf.numberToTerraform(this._dynamic),
      ebgp_multihop: cdktf.numberToTerraform(this._ebgpMultihop),
      ebgp_multihop_hop_count: cdktf.numberToTerraform(this._ebgpMultihopHopCount),
      enforce_multihop: cdktf.numberToTerraform(this._enforceMultihop),
      ethernet: cdktf.numberToTerraform(this._ethernet),
      extended_nexthop: cdktf.numberToTerraform(this._extendedNexthop),
      graceful_restart: cdktf.numberToTerraform(this._gracefulRestart),
      id: cdktf.stringToTerraform(this._id),
      inbound: cdktf.numberToTerraform(this._inbound),
      key_id: cdktf.numberToTerraform(this._keyId),
      key_type: cdktf.stringToTerraform(this._keyType),
      lif: cdktf.stringToTerraform(this._lif),
      loopback: cdktf.numberToTerraform(this._loopback),
      maximum_prefix: cdktf.numberToTerraform(this._maximumPrefix),
      maximum_prefix_thres: cdktf.numberToTerraform(this._maximumPrefixThres),
      multihop: cdktf.numberToTerraform(this._multihop),
      nbr_remote_as: cdktf.stringToTerraform(this._nbrRemoteAs),
      neighbor_ipv6: cdktf.stringToTerraform(this._neighborIpv6),
      next_hop_self: cdktf.numberToTerraform(this._nextHopSelf),
      override_capability: cdktf.numberToTerraform(this._overrideCapability),
      pass_value: cdktf.stringToTerraform(this._passValue),
      passive: cdktf.numberToTerraform(this._passive),
      peer_group_name: cdktf.stringToTerraform(this._peerGroupName),
      prefix_list_direction: cdktf.stringToTerraform(this._prefixListDirection),
      remove_private_as: cdktf.numberToTerraform(this._removePrivateAs),
      restart_min: cdktf.numberToTerraform(this._restartMin),
      route_map: cdktf.stringToTerraform(this._routeMap),
      route_refresh: cdktf.numberToTerraform(this._routeRefresh),
      send_community_val: cdktf.stringToTerraform(this._sendCommunityVal),
      shutdown: cdktf.numberToTerraform(this._shutdown),
      strict_capability_match: cdktf.numberToTerraform(this._strictCapabilityMatch),
      telemetry: cdktf.numberToTerraform(this._telemetry),
      timers_holdtime: cdktf.numberToTerraform(this._timersHoldtime),
      timers_keepalive: cdktf.numberToTerraform(this._timersKeepalive),
      trunk: cdktf.numberToTerraform(this._trunk),
      tunnel: cdktf.numberToTerraform(this._tunnel),
      unsuppress_map: cdktf.stringToTerraform(this._unsuppressMap),
      update_source_ip: cdktf.stringToTerraform(this._updateSourceIp),
      update_source_ipv6: cdktf.stringToTerraform(this._updateSourceIpv6),
      uuid: cdktf.stringToTerraform(this._uuid),
      ve: cdktf.numberToTerraform(this._ve),
      weight: cdktf.numberToTerraform(this._weight),
      distribute_lists: cdktf.listMapper(routerBgpNeighborIpv6NeighborDistributeListsToTerraform, true)(this._distributeLists.internalValue),
      neighbor_filter_lists: cdktf.listMapper(routerBgpNeighborIpv6NeighborNeighborFilterListsToTerraform, true)(this._neighborFilterLists.internalValue),
      neighbor_prefix_lists: cdktf.listMapper(routerBgpNeighborIpv6NeighborNeighborPrefixListsToTerraform, true)(this._neighborPrefixLists.internalValue),
      neighbor_route_map_lists: cdktf.listMapper(routerBgpNeighborIpv6NeighborNeighborRouteMapListsToTerraform, true)(this._neighborRouteMapLists.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acos_application_only: {
        value: cdktf.numberToHclTerraform(this._acosApplicationOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      activate: {
        value: cdktf.numberToHclTerraform(this._activate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      advertisement_interval: {
        value: cdktf.numberToHclTerraform(this._advertisementInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowas_in: {
        value: cdktf.numberToHclTerraform(this._allowasIn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowas_in_count: {
        value: cdktf.numberToHclTerraform(this._allowasInCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      as_number: {
        value: cdktf.stringToHclTerraform(this._asNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_origination_interval: {
        value: cdktf.numberToHclTerraform(this._asOriginationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd: {
        value: cdktf.numberToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_value: {
        value: cdktf.stringToHclTerraform(this._bfdValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collide_established: {
        value: cdktf.numberToHclTerraform(this._collideEstablished),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connect: {
        value: cdktf.numberToHclTerraform(this._connect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_originate: {
        value: cdktf.numberToHclTerraform(this._defaultOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disallow_infinite_holdtime: {
        value: cdktf.numberToHclTerraform(this._disallowInfiniteHoldtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dont_capability_negotiate: {
        value: cdktf.numberToHclTerraform(this._dontCapabilityNegotiate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic: {
        value: cdktf.numberToHclTerraform(this._dynamic),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ebgp_multihop: {
        value: cdktf.numberToHclTerraform(this._ebgpMultihop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ebgp_multihop_hop_count: {
        value: cdktf.numberToHclTerraform(this._ebgpMultihopHopCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enforce_multihop: {
        value: cdktf.numberToHclTerraform(this._enforceMultihop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ethernet: {
        value: cdktf.numberToHclTerraform(this._ethernet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extended_nexthop: {
        value: cdktf.numberToHclTerraform(this._extendedNexthop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      graceful_restart: {
        value: cdktf.numberToHclTerraform(this._gracefulRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound: {
        value: cdktf.numberToHclTerraform(this._inbound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_id: {
        value: cdktf.numberToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lif: {
        value: cdktf.stringToHclTerraform(this._lif),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback: {
        value: cdktf.numberToHclTerraform(this._loopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix: {
        value: cdktf.numberToHclTerraform(this._maximumPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_thres: {
        value: cdktf.numberToHclTerraform(this._maximumPrefixThres),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multihop: {
        value: cdktf.numberToHclTerraform(this._multihop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nbr_remote_as: {
        value: cdktf.stringToHclTerraform(this._nbrRemoteAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor_ipv6: {
        value: cdktf.stringToHclTerraform(this._neighborIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_self: {
        value: cdktf.numberToHclTerraform(this._nextHopSelf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      override_capability: {
        value: cdktf.numberToHclTerraform(this._overrideCapability),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pass_value: {
        value: cdktf.stringToHclTerraform(this._passValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive: {
        value: cdktf.numberToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_group_name: {
        value: cdktf.stringToHclTerraform(this._peerGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_direction: {
        value: cdktf.stringToHclTerraform(this._prefixListDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_private_as: {
        value: cdktf.numberToHclTerraform(this._removePrivateAs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restart_min: {
        value: cdktf.numberToHclTerraform(this._restartMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_map: {
        value: cdktf.stringToHclTerraform(this._routeMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_refresh: {
        value: cdktf.numberToHclTerraform(this._routeRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      send_community_val: {
        value: cdktf.stringToHclTerraform(this._sendCommunityVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown: {
        value: cdktf.numberToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      strict_capability_match: {
        value: cdktf.numberToHclTerraform(this._strictCapabilityMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      telemetry: {
        value: cdktf.numberToHclTerraform(this._telemetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_holdtime: {
        value: cdktf.numberToHclTerraform(this._timersHoldtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_keepalive: {
        value: cdktf.numberToHclTerraform(this._timersKeepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trunk: {
        value: cdktf.numberToHclTerraform(this._trunk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tunnel: {
        value: cdktf.numberToHclTerraform(this._tunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsuppress_map: {
        value: cdktf.stringToHclTerraform(this._unsuppressMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_source_ip: {
        value: cdktf.stringToHclTerraform(this._updateSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_source_ipv6: {
        value: cdktf.stringToHclTerraform(this._updateSourceIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ve: {
        value: cdktf.numberToHclTerraform(this._ve),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distribute_lists: {
        value: cdktf.listMapperHcl(routerBgpNeighborIpv6NeighborDistributeListsToHclTerraform, true)(this._distributeLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpNeighborIpv6NeighborDistributeListsList",
      },
      neighbor_filter_lists: {
        value: cdktf.listMapperHcl(routerBgpNeighborIpv6NeighborNeighborFilterListsToHclTerraform, true)(this._neighborFilterLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpNeighborIpv6NeighborNeighborFilterListsList",
      },
      neighbor_prefix_lists: {
        value: cdktf.listMapperHcl(routerBgpNeighborIpv6NeighborNeighborPrefixListsToHclTerraform, true)(this._neighborPrefixLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpNeighborIpv6NeighborNeighborPrefixListsList",
      },
      neighbor_route_map_lists: {
        value: cdktf.listMapperHcl(routerBgpNeighborIpv6NeighborNeighborRouteMapListsToHclTerraform, true)(this._neighborRouteMapLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpNeighborIpv6NeighborNeighborRouteMapListsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
