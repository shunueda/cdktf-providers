// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpAddressFamilyIpv6NeighborIpv4NeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#activate RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#activate}
  */
  readonly activate?: number;
  /**
  * Accept as-path with my AS present in it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#allowas_in RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#allowas_in_count RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#allowas_in_count}
  */
  readonly allowasInCount?: number;
  /**
  * AsNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#as_number RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#as_number}
  */
  readonly asNumber: string;
  /**
  * Originate default route to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#default_originate RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#default_originate}
  */
  readonly defaultOriginate?: number;
  /**
  * enable graceful-restart helper for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#graceful_restart RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#graceful_restart}
  */
  readonly gracefulRestart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#id RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allow inbound soft reconfiguration for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#inbound RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#inbound}
  */
  readonly inbound?: number;
  /**
  * Maximum number of prefix accept from this peer (maximum no. of prefix limit (various depends on model))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#maximum_prefix RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * threshold-value, 1 to 100 percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#maximum_prefix_thres RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#maximum_prefix_thres}
  */
  readonly maximumPrefixThres?: number;
  /**
  * Neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#neighbor_ipv4 RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#neighbor_ipv4}
  */
  readonly neighborIpv4: string;
  /**
  * Disable the next hop calculation for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#next_hop_self RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#next_hop_self}
  */
  readonly nextHopSelf?: number;
  /**
  * Configure peer-group (peer-group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#peer_group_name RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * 'both': both; 'receive': receive; 'send': send;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#prefix_list_direction RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#prefix_list_direction}
  */
  readonly prefixListDirection?: string;
  /**
  * Remove private AS number from outbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#remove_private_as RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#remove_private_as}
  */
  readonly removePrivateAs?: number;
  /**
  * restart value, 1 to 1440 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#restart_min RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#restart_min}
  */
  readonly restartMin?: number;
  /**
  * Route-map to specify criteria to originate default (route-map name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#route_map RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#route_map}
  */
  readonly routeMap?: string;
  /**
  * 'all': Send Standard, Extended, and Large Community attributes; 'both': Send Standard and Extended Community attributes; 'none': Disable Sending Community attributes; 'standard': Send Standard Community attributes; 'extended': Send Extended Community attributes; 'large': Send Large Community attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#send_community_val RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#send_community_val}
  */
  readonly sendCommunityVal?: string;
  /**
  * Route-map to selectively unsuppress suppressed routes (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#unsuppress_map RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#unsuppress_map}
  */
  readonly unsuppressMap?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#uuid RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#uuid}
  */
  readonly uuid?: string;
  /**
  * Set default weight for routes from this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#weight RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#weight}
  */
  readonly weight?: number;
  /**
  * distribute_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#distribute_lists RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#distribute_lists}
  */
  readonly distributeLists?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeLists[] | cdktf.IResolvable;
  /**
  * neighbor_filter_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#neighbor_filter_lists RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#neighbor_filter_lists}
  */
  readonly neighborFilterLists?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterLists[] | cdktf.IResolvable;
  /**
  * neighbor_prefix_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#neighbor_prefix_lists RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#neighbor_prefix_lists}
  */
  readonly neighborPrefixLists?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixLists[] | cdktf.IResolvable;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#neighbor_route_map_lists RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapLists[] | cdktf.IResolvable;
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeLists {
  /**
  * Filter updates to/from this neighbor (IP standard/extended/named access list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#distribute_list RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#distribute_list_direction RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#distribute_list_direction}
  */
  readonly distributeListDirection?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeListsToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    distribute_list_direction: cdktf.stringToTerraform(struct!.distributeListDirection),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeListsOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterLists {
  /**
  * Establish BGP filters (AS path access-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#filter_list RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#filter_list}
  */
  readonly filterList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#filter_list_direction RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#filter_list_direction}
  */
  readonly filterListDirection?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterListsToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_list: cdktf.stringToTerraform(struct!.filterList),
    filter_list_direction: cdktf.stringToTerraform(struct!.filterListDirection),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterListsOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixLists {
  /**
  * Filter updates to/from this neighbor (Name of a prefix list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#nbr_prefix_list RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#nbr_prefix_list}
  */
  readonly nbrPrefixList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#nbr_prefix_list_direction RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#nbr_prefix_list_direction}
  */
  readonly nbrPrefixListDirection?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixListsToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_prefix_list: cdktf.stringToTerraform(struct!.nbrPrefixList),
    nbr_prefix_list_direction: cdktf.stringToTerraform(struct!.nbrPrefixListDirection),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixListsOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapLists {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#nbr_rmap_direction RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#nbr_route_map RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapListsToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapListsOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor thunder_router_bgp_address_family_ipv6_neighbor_ipv4_neighbor}
*/
export class RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_bgp_address_family_ipv6_neighbor_ipv4_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor to import
  * @param importFromId The id of the existing RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpAddressFamilyIpv6NeighborIpv4Neighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_bgp_address_family_ipv6_neighbor_ipv4_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_neighbor_ipv4_neighbor thunder_router_bgp_address_family_ipv6_neighbor_ipv4_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpAddressFamilyIpv6NeighborIpv4NeighborConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_bgp_address_family_ipv6_neighbor_ipv4_neighbor',
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
    this._defaultOriginate = config.defaultOriginate;
    this._gracefulRestart = config.gracefulRestart;
    this._id = config.id;
    this._inbound = config.inbound;
    this._maximumPrefix = config.maximumPrefix;
    this._maximumPrefixThres = config.maximumPrefixThres;
    this._neighborIpv4 = config.neighborIpv4;
    this._nextHopSelf = config.nextHopSelf;
    this._peerGroupName = config.peerGroupName;
    this._prefixListDirection = config.prefixListDirection;
    this._removePrivateAs = config.removePrivateAs;
    this._restartMin = config.restartMin;
    this._routeMap = config.routeMap;
    this._sendCommunityVal = config.sendCommunityVal;
    this._unsuppressMap = config.unsuppressMap;
    this._uuid = config.uuid;
    this._weight = config.weight;
    this._distributeLists.internalValue = config.distributeLists;
    this._neighborFilterLists.internalValue = config.neighborFilterLists;
    this._neighborPrefixLists.internalValue = config.neighborPrefixLists;
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

  // neighbor_ipv4 - computed: false, optional: false, required: true
  private _neighborIpv4?: string; 
  public get neighborIpv4() {
    return this.getStringAttribute('neighbor_ipv4');
  }
  public set neighborIpv4(value: string) {
    this._neighborIpv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborIpv4Input() {
    return this._neighborIpv4;
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

  // distribute_lists - computed: false, optional: true, required: false
  private _distributeLists = new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeListsList(this, "distribute_lists", false);
  public get distributeLists() {
    return this._distributeLists;
  }
  public putDistributeLists(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeLists[] | cdktf.IResolvable) {
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
  private _neighborFilterLists = new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterListsList(this, "neighbor_filter_lists", false);
  public get neighborFilterLists() {
    return this._neighborFilterLists;
  }
  public putNeighborFilterLists(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterLists[] | cdktf.IResolvable) {
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
  private _neighborPrefixLists = new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixListsList(this, "neighbor_prefix_lists", false);
  public get neighborPrefixLists() {
    return this._neighborPrefixLists;
  }
  public putNeighborPrefixLists(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixLists[] | cdktf.IResolvable) {
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
  private _neighborRouteMapLists = new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapListsList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapLists[] | cdktf.IResolvable) {
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
      default_originate: cdktf.numberToTerraform(this._defaultOriginate),
      graceful_restart: cdktf.numberToTerraform(this._gracefulRestart),
      id: cdktf.stringToTerraform(this._id),
      inbound: cdktf.numberToTerraform(this._inbound),
      maximum_prefix: cdktf.numberToTerraform(this._maximumPrefix),
      maximum_prefix_thres: cdktf.numberToTerraform(this._maximumPrefixThres),
      neighbor_ipv4: cdktf.stringToTerraform(this._neighborIpv4),
      next_hop_self: cdktf.numberToTerraform(this._nextHopSelf),
      peer_group_name: cdktf.stringToTerraform(this._peerGroupName),
      prefix_list_direction: cdktf.stringToTerraform(this._prefixListDirection),
      remove_private_as: cdktf.numberToTerraform(this._removePrivateAs),
      restart_min: cdktf.numberToTerraform(this._restartMin),
      route_map: cdktf.stringToTerraform(this._routeMap),
      send_community_val: cdktf.stringToTerraform(this._sendCommunityVal),
      unsuppress_map: cdktf.stringToTerraform(this._unsuppressMap),
      uuid: cdktf.stringToTerraform(this._uuid),
      weight: cdktf.numberToTerraform(this._weight),
      distribute_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeListsToTerraform, true)(this._distributeLists.internalValue),
      neighbor_filter_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterListsToTerraform, true)(this._neighborFilterLists.internalValue),
      neighbor_prefix_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixListsToTerraform, true)(this._neighborPrefixLists.internalValue),
      neighbor_route_map_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapListsToTerraform, true)(this._neighborRouteMapLists.internalValue),
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
      default_originate: {
        value: cdktf.numberToHclTerraform(this._defaultOriginate),
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
      neighbor_ipv4: {
        value: cdktf.stringToHclTerraform(this._neighborIpv4),
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
      send_community_val: {
        value: cdktf.stringToHclTerraform(this._sendCommunityVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsuppress_map: {
        value: cdktf.stringToHclTerraform(this._unsuppressMap),
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
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distribute_lists: {
        value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeListsToHclTerraform, true)(this._distributeLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv4NeighborDistributeListsList",
      },
      neighbor_filter_lists: {
        value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterListsToHclTerraform, true)(this._neighborFilterLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborFilterListsList",
      },
      neighbor_prefix_lists: {
        value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixListsToHclTerraform, true)(this._neighborPrefixLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborPrefixListsList",
      },
      neighbor_route_map_lists: {
        value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapListsToHclTerraform, true)(this._neighborRouteMapLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv4NeighborNeighborRouteMapListsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
