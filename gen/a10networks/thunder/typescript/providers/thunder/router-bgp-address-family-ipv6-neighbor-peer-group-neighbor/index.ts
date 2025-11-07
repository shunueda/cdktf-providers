// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#activate RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#activate}
  */
  readonly activate?: number;
  /**
  * Accept as-path with my AS present in it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#allowas_in RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#allowas_in_count RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#allowas_in_count}
  */
  readonly allowasInCount?: number;
  /**
  * AsNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#as_number RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#as_number}
  */
  readonly asNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#id RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allow inbound soft reconfiguration for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#inbound RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#inbound}
  */
  readonly inbound?: number;
  /**
  * Maximum number of prefix accept from this peer (maximum no. of prefix limit (various depends on model))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#maximum_prefix RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * threshold-value, 1 to 100 percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#maximum_prefix_thres RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#maximum_prefix_thres}
  */
  readonly maximumPrefixThres?: number;
  /**
  * Disable the next hop calculation for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#next_hop_self RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#next_hop_self}
  */
  readonly nextHopSelf?: number;
  /**
  * Neighbor tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#peer_group RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#peer_group}
  */
  readonly peerGroup: string;
  /**
  * Remove private AS number from outbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#remove_private_as RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#remove_private_as}
  */
  readonly removePrivateAs?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#uuid RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#uuid}
  */
  readonly uuid?: string;
  /**
  * Set default weight for routes from this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#weight RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#weight}
  */
  readonly weight?: number;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#neighbor_route_map_lists RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapLists[] | cdktf.IResolvable;
}
export interface RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapLists {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#nbr_rmap_direction RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#nbr_route_map RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapListsToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapListsOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor thunder_router_bgp_address_family_ipv6_neighbor_peer_group_neighbor}
*/
export class RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_bgp_address_family_ipv6_neighbor_peer_group_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor to import
  * @param importFromId The id of the existing RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_bgp_address_family_ipv6_neighbor_peer_group_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_peer_group_neighbor thunder_router_bgp_address_family_ipv6_neighbor_peer_group_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_bgp_address_family_ipv6_neighbor_peer_group_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._allowasIn = config.allowasIn;
    this._allowasInCount = config.allowasInCount;
    this._asNumber = config.asNumber;
    this._id = config.id;
    this._inbound = config.inbound;
    this._maximumPrefix = config.maximumPrefix;
    this._maximumPrefixThres = config.maximumPrefixThres;
    this._nextHopSelf = config.nextHopSelf;
    this._peerGroup = config.peerGroup;
    this._removePrivateAs = config.removePrivateAs;
    this._uuid = config.uuid;
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
  private _neighborRouteMapLists = new RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapListsList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapLists[] | cdktf.IResolvable) {
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
      allowas_in: cdktf.numberToTerraform(this._allowasIn),
      allowas_in_count: cdktf.numberToTerraform(this._allowasInCount),
      as_number: cdktf.stringToTerraform(this._asNumber),
      id: cdktf.stringToTerraform(this._id),
      inbound: cdktf.numberToTerraform(this._inbound),
      maximum_prefix: cdktf.numberToTerraform(this._maximumPrefix),
      maximum_prefix_thres: cdktf.numberToTerraform(this._maximumPrefixThres),
      next_hop_self: cdktf.numberToTerraform(this._nextHopSelf),
      peer_group: cdktf.stringToTerraform(this._peerGroup),
      remove_private_as: cdktf.numberToTerraform(this._removePrivateAs),
      uuid: cdktf.stringToTerraform(this._uuid),
      weight: cdktf.numberToTerraform(this._weight),
      neighbor_route_map_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapListsToTerraform, true)(this._neighborRouteMapLists.internalValue),
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
      next_hop_self: {
        value: cdktf.numberToHclTerraform(this._nextHopSelf),
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
      remove_private_as: {
        value: cdktf.numberToHclTerraform(this._removePrivateAs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      neighbor_route_map_lists: {
        value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapListsToHclTerraform, true)(this._neighborRouteMapLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborNeighborRouteMapListsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
