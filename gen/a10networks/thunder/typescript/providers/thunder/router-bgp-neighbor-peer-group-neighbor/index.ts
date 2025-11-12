// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpNeighborPeerGroupNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#activate RouterBgpNeighborPeerGroupNeighbor#activate}
  */
  readonly activate?: number;
  /**
  * Minimum interval between sending BGP routing updates (time in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#advertisement_interval RouterBgpNeighborPeerGroupNeighbor#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Accept as-path with my AS present in it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#allowas_in RouterBgpNeighborPeerGroupNeighbor#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#allowas_in_count RouterBgpNeighborPeerGroupNeighbor#allowas_in_count}
  */
  readonly allowasInCount?: number;
  /**
  * AsNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#as_number RouterBgpNeighborPeerGroupNeighbor#as_number}
  */
  readonly asNumber: string;
  /**
  * Minimum interval between sending AS-origination routing updates (time in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#as_origination_interval RouterBgpNeighborPeerGroupNeighbor#as_origination_interval}
  */
  readonly asOriginationInterval?: number;
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#bfd RouterBgpNeighborPeerGroupNeighbor#bfd}
  */
  readonly bfd?: number;
  /**
  * Include Neighbor in Established State for Collision Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#collide_established RouterBgpNeighborPeerGroupNeighbor#collide_established}
  */
  readonly collideEstablished?: number;
  /**
  * BGP connect timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#connect RouterBgpNeighborPeerGroupNeighbor#connect}
  */
  readonly connect?: number;
  /**
  * Originate default route to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#default_originate RouterBgpNeighborPeerGroupNeighbor#default_originate}
  */
  readonly defaultOriginate?: number;
  /**
  * Neighbor specific description (Up to 80 characters describing this neighbor)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#description RouterBgpNeighborPeerGroupNeighbor#description}
  */
  readonly description?: string;
  /**
  * Do not perform capability negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#dont_capability_negotiate RouterBgpNeighborPeerGroupNeighbor#dont_capability_negotiate}
  */
  readonly dontCapabilityNegotiate?: number;
  /**
  * Advertise dynamic capability to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#dynamic RouterBgpNeighborPeerGroupNeighbor#dynamic}
  */
  readonly dynamic?: number;
  /**
  * Allow EBGP neighbors not on directly connected networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#ebgp_multihop RouterBgpNeighborPeerGroupNeighbor#ebgp_multihop}
  */
  readonly ebgpMultihop?: number;
  /**
  * maximum hop count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#ebgp_multihop_hop_count RouterBgpNeighborPeerGroupNeighbor#ebgp_multihop_hop_count}
  */
  readonly ebgpMultihopHopCount?: number;
  /**
  * Enforce EBGP neighbors to perform multihop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#enforce_multihop RouterBgpNeighborPeerGroupNeighbor#enforce_multihop}
  */
  readonly enforceMultihop?: number;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#ethernet RouterBgpNeighborPeerGroupNeighbor#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Advertise extended-nexthop capability to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#extended_nexthop RouterBgpNeighborPeerGroupNeighbor#extended_nexthop}
  */
  readonly extendedNexthop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#id RouterBgpNeighborPeerGroupNeighbor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allow inbound soft reconfiguration for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#inbound RouterBgpNeighborPeerGroupNeighbor#inbound}
  */
  readonly inbound?: number;
  /**
  * Logical interface (Lif interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#lif RouterBgpNeighborPeerGroupNeighbor#lif}
  */
  readonly lif?: string;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#loopback RouterBgpNeighborPeerGroupNeighbor#loopback}
  */
  readonly loopback?: number;
  /**
  * Maximum number of prefix accept from this peer (maximum no. of prefix limit (various depends on model))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#maximum_prefix RouterBgpNeighborPeerGroupNeighbor#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * threshold-value, 1 to 100 percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#maximum_prefix_thres RouterBgpNeighborPeerGroupNeighbor#maximum_prefix_thres}
  */
  readonly maximumPrefixThres?: number;
  /**
  * Enable multihop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#multihop RouterBgpNeighborPeerGroupNeighbor#multihop}
  */
  readonly multihop?: number;
  /**
  * Override capability negotiation result
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#override_capability RouterBgpNeighborPeerGroupNeighbor#override_capability}
  */
  readonly overrideCapability?: number;
  /**
  * Key String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#pass_value RouterBgpNeighborPeerGroupNeighbor#pass_value}
  */
  readonly passValue?: string;
  /**
  * Don't send open messages to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#passive RouterBgpNeighborPeerGroupNeighbor#passive}
  */
  readonly passive?: number;
  /**
  * Neighbor tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#peer_group RouterBgpNeighborPeerGroupNeighbor#peer_group}
  */
  readonly peerGroup: string;
  /**
  * Configure peer-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#peer_group_key RouterBgpNeighborPeerGroupNeighbor#peer_group_key}
  */
  readonly peerGroupKey?: number;
  /**
  * Specify AS number of BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#peer_group_remote_as RouterBgpNeighborPeerGroupNeighbor#peer_group_remote_as}
  */
  readonly peerGroupRemoteAs?: string;
  /**
  * Remove private AS number from outbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#remove_private_as RouterBgpNeighborPeerGroupNeighbor#remove_private_as}
  */
  readonly removePrivateAs?: number;
  /**
  * Route-map to specify criteria to originate default (route-map name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#route_map RouterBgpNeighborPeerGroupNeighbor#route_map}
  */
  readonly routeMap?: string;
  /**
  * Advertise route-refresh capability to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#route_refresh RouterBgpNeighborPeerGroupNeighbor#route_refresh}
  */
  readonly routeRefresh?: number;
  /**
  * Administratively shut down this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#shutdown RouterBgpNeighborPeerGroupNeighbor#shutdown}
  */
  readonly shutdown?: number;
  /**
  * Strict capability negotiation match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#strict_capability_match RouterBgpNeighborPeerGroupNeighbor#strict_capability_match}
  */
  readonly strictCapabilityMatch?: number;
  /**
  * Holdtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#timers_holdtime RouterBgpNeighborPeerGroupNeighbor#timers_holdtime}
  */
  readonly timersHoldtime?: number;
  /**
  * Keepalive interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#timers_keepalive RouterBgpNeighborPeerGroupNeighbor#timers_keepalive}
  */
  readonly timersKeepalive?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#trunk RouterBgpNeighborPeerGroupNeighbor#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#tunnel RouterBgpNeighborPeerGroupNeighbor#tunnel}
  */
  readonly tunnel?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#update_source_ip RouterBgpNeighborPeerGroupNeighbor#update_source_ip}
  */
  readonly updateSourceIp?: string;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#update_source_ipv6 RouterBgpNeighborPeerGroupNeighbor#update_source_ipv6}
  */
  readonly updateSourceIpv6?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#uuid RouterBgpNeighborPeerGroupNeighbor#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#ve RouterBgpNeighborPeerGroupNeighbor#ve}
  */
  readonly ve?: number;
  /**
  * Set default weight for routes from this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#weight RouterBgpNeighborPeerGroupNeighbor#weight}
  */
  readonly weight?: number;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#neighbor_route_map_lists RouterBgpNeighborPeerGroupNeighbor#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpNeighborPeerGroupNeighborNeighborRouteMapLists[] | cdktf.IResolvable;
}
export interface RouterBgpNeighborPeerGroupNeighborNeighborRouteMapLists {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#nbr_rmap_direction RouterBgpNeighborPeerGroupNeighbor#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#nbr_route_map RouterBgpNeighborPeerGroupNeighbor#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpNeighborPeerGroupNeighborNeighborRouteMapListsToTerraform(struct?: RouterBgpNeighborPeerGroupNeighborNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpNeighborPeerGroupNeighborNeighborRouteMapListsToHclTerraform(struct?: RouterBgpNeighborPeerGroupNeighborNeighborRouteMapLists | cdktf.IResolvable): any {
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

export class RouterBgpNeighborPeerGroupNeighborNeighborRouteMapListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborPeerGroupNeighborNeighborRouteMapLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpNeighborPeerGroupNeighborNeighborRouteMapLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpNeighborPeerGroupNeighborNeighborRouteMapListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborPeerGroupNeighborNeighborRouteMapLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborPeerGroupNeighborNeighborRouteMapListsOutputReference {
    return new RouterBgpNeighborPeerGroupNeighborNeighborRouteMapListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor thunder_router_bgp_neighbor_peer_group_neighbor}
*/
export class RouterBgpNeighborPeerGroupNeighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_bgp_neighbor_peer_group_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpNeighborPeerGroupNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpNeighborPeerGroupNeighbor to import
  * @param importFromId The id of the existing RouterBgpNeighborPeerGroupNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpNeighborPeerGroupNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_bgp_neighbor_peer_group_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_neighbor_peer_group_neighbor thunder_router_bgp_neighbor_peer_group_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpNeighborPeerGroupNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpNeighborPeerGroupNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_bgp_neighbor_peer_group_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activate = config.activate;
    this._advertisementInterval = config.advertisementInterval;
    this._allowasIn = config.allowasIn;
    this._allowasInCount = config.allowasInCount;
    this._asNumber = config.asNumber;
    this._asOriginationInterval = config.asOriginationInterval;
    this._bfd = config.bfd;
    this._collideEstablished = config.collideEstablished;
    this._connect = config.connect;
    this._defaultOriginate = config.defaultOriginate;
    this._description = config.description;
    this._dontCapabilityNegotiate = config.dontCapabilityNegotiate;
    this._dynamic = config.dynamic;
    this._ebgpMultihop = config.ebgpMultihop;
    this._ebgpMultihopHopCount = config.ebgpMultihopHopCount;
    this._enforceMultihop = config.enforceMultihop;
    this._ethernet = config.ethernet;
    this._extendedNexthop = config.extendedNexthop;
    this._id = config.id;
    this._inbound = config.inbound;
    this._lif = config.lif;
    this._loopback = config.loopback;
    this._maximumPrefix = config.maximumPrefix;
    this._maximumPrefixThres = config.maximumPrefixThres;
    this._multihop = config.multihop;
    this._overrideCapability = config.overrideCapability;
    this._passValue = config.passValue;
    this._passive = config.passive;
    this._peerGroup = config.peerGroup;
    this._peerGroupKey = config.peerGroupKey;
    this._peerGroupRemoteAs = config.peerGroupRemoteAs;
    this._removePrivateAs = config.removePrivateAs;
    this._routeMap = config.routeMap;
    this._routeRefresh = config.routeRefresh;
    this._shutdown = config.shutdown;
    this._strictCapabilityMatch = config.strictCapabilityMatch;
    this._timersHoldtime = config.timersHoldtime;
    this._timersKeepalive = config.timersKeepalive;
    this._trunk = config.trunk;
    this._tunnel = config.tunnel;
    this._updateSourceIp = config.updateSourceIp;
    this._updateSourceIpv6 = config.updateSourceIpv6;
    this._uuid = config.uuid;
    this._ve = config.ve;
    this._weight = config.weight;
    this._neighborRouteMapLists.internalValue = config.neighborRouteMapLists;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // peer_group - computed: false, optional: false, required: true
  private _peerGroup?: string; 
  public get peerGroup() {
    return this.getStringAttribute('peer_group');
  }
  public set peerGroup(value: string) {
    this._peerGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupInput() {
    return this._peerGroup;
  }

  // peer_group_key - computed: false, optional: true, required: false
  private _peerGroupKey?: number; 
  public get peerGroupKey() {
    return this.getNumberAttribute('peer_group_key');
  }
  public set peerGroupKey(value: number) {
    this._peerGroupKey = value;
  }
  public resetPeerGroupKey() {
    this._peerGroupKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupKeyInput() {
    return this._peerGroupKey;
  }

  // peer_group_remote_as - computed: false, optional: true, required: false
  private _peerGroupRemoteAs?: string; 
  public get peerGroupRemoteAs() {
    return this.getStringAttribute('peer_group_remote_as');
  }
  public set peerGroupRemoteAs(value: string) {
    this._peerGroupRemoteAs = value;
  }
  public resetPeerGroupRemoteAs() {
    this._peerGroupRemoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupRemoteAsInput() {
    return this._peerGroupRemoteAs;
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

  // neighbor_route_map_lists - computed: false, optional: true, required: false
  private _neighborRouteMapLists = new RouterBgpNeighborPeerGroupNeighborNeighborRouteMapListsList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpNeighborPeerGroupNeighborNeighborRouteMapLists[] | cdktf.IResolvable) {
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
      activate: cdktf.numberToTerraform(this._activate),
      advertisement_interval: cdktf.numberToTerraform(this._advertisementInterval),
      allowas_in: cdktf.numberToTerraform(this._allowasIn),
      allowas_in_count: cdktf.numberToTerraform(this._allowasInCount),
      as_number: cdktf.stringToTerraform(this._asNumber),
      as_origination_interval: cdktf.numberToTerraform(this._asOriginationInterval),
      bfd: cdktf.numberToTerraform(this._bfd),
      collide_established: cdktf.numberToTerraform(this._collideEstablished),
      connect: cdktf.numberToTerraform(this._connect),
      default_originate: cdktf.numberToTerraform(this._defaultOriginate),
      description: cdktf.stringToTerraform(this._description),
      dont_capability_negotiate: cdktf.numberToTerraform(this._dontCapabilityNegotiate),
      dynamic: cdktf.numberToTerraform(this._dynamic),
      ebgp_multihop: cdktf.numberToTerraform(this._ebgpMultihop),
      ebgp_multihop_hop_count: cdktf.numberToTerraform(this._ebgpMultihopHopCount),
      enforce_multihop: cdktf.numberToTerraform(this._enforceMultihop),
      ethernet: cdktf.numberToTerraform(this._ethernet),
      extended_nexthop: cdktf.numberToTerraform(this._extendedNexthop),
      id: cdktf.stringToTerraform(this._id),
      inbound: cdktf.numberToTerraform(this._inbound),
      lif: cdktf.stringToTerraform(this._lif),
      loopback: cdktf.numberToTerraform(this._loopback),
      maximum_prefix: cdktf.numberToTerraform(this._maximumPrefix),
      maximum_prefix_thres: cdktf.numberToTerraform(this._maximumPrefixThres),
      multihop: cdktf.numberToTerraform(this._multihop),
      override_capability: cdktf.numberToTerraform(this._overrideCapability),
      pass_value: cdktf.stringToTerraform(this._passValue),
      passive: cdktf.numberToTerraform(this._passive),
      peer_group: cdktf.stringToTerraform(this._peerGroup),
      peer_group_key: cdktf.numberToTerraform(this._peerGroupKey),
      peer_group_remote_as: cdktf.stringToTerraform(this._peerGroupRemoteAs),
      remove_private_as: cdktf.numberToTerraform(this._removePrivateAs),
      route_map: cdktf.stringToTerraform(this._routeMap),
      route_refresh: cdktf.numberToTerraform(this._routeRefresh),
      shutdown: cdktf.numberToTerraform(this._shutdown),
      strict_capability_match: cdktf.numberToTerraform(this._strictCapabilityMatch),
      timers_holdtime: cdktf.numberToTerraform(this._timersHoldtime),
      timers_keepalive: cdktf.numberToTerraform(this._timersKeepalive),
      trunk: cdktf.numberToTerraform(this._trunk),
      tunnel: cdktf.numberToTerraform(this._tunnel),
      update_source_ip: cdktf.stringToTerraform(this._updateSourceIp),
      update_source_ipv6: cdktf.stringToTerraform(this._updateSourceIpv6),
      uuid: cdktf.stringToTerraform(this._uuid),
      ve: cdktf.numberToTerraform(this._ve),
      weight: cdktf.numberToTerraform(this._weight),
      neighbor_route_map_lists: cdktf.listMapper(routerBgpNeighborPeerGroupNeighborNeighborRouteMapListsToTerraform, true)(this._neighborRouteMapLists.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      peer_group: {
        value: cdktf.stringToHclTerraform(this._peerGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_group_key: {
        value: cdktf.numberToHclTerraform(this._peerGroupKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer_group_remote_as: {
        value: cdktf.stringToHclTerraform(this._peerGroupRemoteAs),
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
      neighbor_route_map_lists: {
        value: cdktf.listMapperHcl(routerBgpNeighborPeerGroupNeighborNeighborRouteMapListsToHclTerraform, true)(this._neighborRouteMapLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpNeighborPeerGroupNeighborNeighborRouteMapListsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
