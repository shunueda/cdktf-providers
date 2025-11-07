// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#as_number RouterBgp#as_number}
  */
  readonly asNumber: string;
  /**
  * Enable automatic network number summarization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#auto_summary RouterBgp#auto_summary}
  */
  readonly autoSummary?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Supported BGP multipath numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#maximum_paths_value RouterBgp#maximum_paths_value}
  */
  readonly maximumPathsValue?: number;
  /**
  * Distribute a default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#originate RouterBgp#originate}
  */
  readonly originate?: number;
  /**
  * Perform IGP synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#synchronization RouterBgp#synchronization}
  */
  readonly synchronization?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#user_tag RouterBgp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * address_family block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#address_family RouterBgp#address_family}
  */
  readonly addressFamily?: RouterBgpAddressFamily;
  /**
  * aggregate_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#aggregate_address_list RouterBgp#aggregate_address_list}
  */
  readonly aggregateAddressList?: RouterBgpAggregateAddressListStruct[] | cdktf.IResolvable;
  /**
  * bgp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#bgp RouterBgp#bgp}
  */
  readonly bgp?: RouterBgpBgp;
  /**
  * distance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distance_list RouterBgp#distance_list}
  */
  readonly distanceList?: RouterBgpDistanceListStruct[] | cdktf.IResolvable;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor RouterBgp#neighbor}
  */
  readonly neighbor?: RouterBgpNeighbor;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#network RouterBgp#network}
  */
  readonly network?: RouterBgpNetwork;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#redistribute RouterBgp#redistribute}
  */
  readonly redistribute?: RouterBgpRedistribute;
  /**
  * timers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#timers RouterBgp#timers}
  */
  readonly timers?: RouterBgpTimers;
}
export interface RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapLists {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_rmap_direction RouterBgp#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_route_map RouterBgp#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapListsToTerraform(struct?: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapListsOutputReference {
    return new RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStruct {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#activate RouterBgp#activate}
  */
  readonly activate?: number;
  /**
  * Neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_ipv4 RouterBgp#neighbor_ipv4}
  */
  readonly neighborIpv4: string;
  /**
  * 'all': Send Standard, Extended, and Large Community attributes; 'both': Send Standard and Extended Community attributes; 'none': Disable Sending Community attributes; 'standard': Send Standard Community attributes; 'extended': Send Extended Community attributes; 'large': Send Large Community attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#send_community_val RouterBgp#send_community_val}
  */
  readonly sendCommunityVal?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_route_map_lists RouterBgp#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapLists[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStructToTerraform(struct?: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.numberToTerraform(struct!.activate),
    neighbor_ipv4: cdktf.stringToTerraform(struct!.neighborIpv4),
    send_community_val: cdktf.stringToTerraform(struct!.sendCommunityVal),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    neighbor_route_map_lists: cdktf.listMapper(routerBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapListsToTerraform, true)(struct!.neighborRouteMapLists),
  }
}


export function routerBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStructToHclTerraform(struct?: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate: {
      value: cdktf.numberToHclTerraform(struct!.activate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.neighborIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community_val: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_route_map_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapListsToHclTerraform, true)(struct!.neighborRouteMapLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapListsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._neighborIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborIpv4 = this._neighborIpv4;
    }
    if (this._sendCommunityVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVal = this._sendCommunityVal;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._neighborRouteMapLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborRouteMapLists = this._neighborRouteMapLists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._neighborIpv4 = undefined;
      this._sendCommunityVal = undefined;
      this._uuid = undefined;
      this._neighborRouteMapLists.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activate = value.activate;
      this._neighborIpv4 = value.neighborIpv4;
      this._sendCommunityVal = value.sendCommunityVal;
      this._uuid = value.uuid;
      this._neighborRouteMapLists.internalValue = value.neighborRouteMapLists;
    }
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

  // neighbor_route_map_lists - computed: false, optional: true, required: false
  private _neighborRouteMapLists = new RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapListsList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListNeighborRouteMapLists[] | cdktf.IResolvable) {
    this._neighborRouteMapLists.internalValue = value;
  }
  public resetNeighborRouteMapLists() {
    this._neighborRouteMapLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborRouteMapListsInput() {
    return this._neighborRouteMapLists.internalValue;
  }
}

export class RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStructOutputReference {
    return new RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapLists {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_rmap_direction RouterBgp#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_route_map RouterBgp#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapListsToTerraform(struct?: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapListsOutputReference {
    return new RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStruct {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#activate RouterBgp#activate}
  */
  readonly activate?: number;
  /**
  * Neighbor IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_ipv6 RouterBgp#neighbor_ipv6}
  */
  readonly neighborIpv6: string;
  /**
  * 'all': Send Standard, Extended, and Large Community attributes; 'both': Send Standard and Extended Community attributes; 'none': Disable Sending Community attributes; 'standard': Send Standard Community attributes; 'extended': Send Extended Community attributes; 'large': Send Large Community attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#send_community_val RouterBgp#send_community_val}
  */
  readonly sendCommunityVal?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_route_map_lists RouterBgp#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapLists[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStructToTerraform(struct?: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.numberToTerraform(struct!.activate),
    neighbor_ipv6: cdktf.stringToTerraform(struct!.neighborIpv6),
    send_community_val: cdktf.stringToTerraform(struct!.sendCommunityVal),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    neighbor_route_map_lists: cdktf.listMapper(routerBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapListsToTerraform, true)(struct!.neighborRouteMapLists),
  }
}


export function routerBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStructToHclTerraform(struct?: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate: {
      value: cdktf.numberToHclTerraform(struct!.activate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.neighborIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community_val: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_route_map_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapListsToHclTerraform, true)(struct!.neighborRouteMapLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapListsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._neighborIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborIpv6 = this._neighborIpv6;
    }
    if (this._sendCommunityVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVal = this._sendCommunityVal;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._neighborRouteMapLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborRouteMapLists = this._neighborRouteMapLists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._neighborIpv6 = undefined;
      this._sendCommunityVal = undefined;
      this._uuid = undefined;
      this._neighborRouteMapLists.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activate = value.activate;
      this._neighborIpv6 = value.neighborIpv6;
      this._sendCommunityVal = value.sendCommunityVal;
      this._uuid = value.uuid;
      this._neighborRouteMapLists.internalValue = value.neighborRouteMapLists;
    }
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

  // neighbor_route_map_lists - computed: false, optional: true, required: false
  private _neighborRouteMapLists = new RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapListsList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListNeighborRouteMapLists[] | cdktf.IResolvable) {
    this._neighborRouteMapLists.internalValue = value;
  }
  public resetNeighborRouteMapLists() {
    this._neighborRouteMapLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborRouteMapListsInput() {
    return this._neighborRouteMapLists.internalValue;
  }
}

export class RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStructOutputReference {
    return new RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv4FlowspecNeighbor {
  /**
  * ipv4_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ipv4_neighbor_list RouterBgp#ipv4_neighbor_list}
  */
  readonly ipv4NeighborList?: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ipv6_neighbor_list RouterBgp#ipv6_neighbor_list}
  */
  readonly ipv6NeighborList?: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStruct[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv4FlowspecNeighborToTerraform(struct?: RouterBgpAddressFamilyIpv4FlowspecNeighborOutputReference | RouterBgpAddressFamilyIpv4FlowspecNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_neighbor_list: cdktf.listMapper(routerBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStructToTerraform, true)(struct!.ipv4NeighborList),
    ipv6_neighbor_list: cdktf.listMapper(routerBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStructToTerraform, true)(struct!.ipv6NeighborList),
  }
}


export function routerBgpAddressFamilyIpv4FlowspecNeighborToHclTerraform(struct?: RouterBgpAddressFamilyIpv4FlowspecNeighborOutputReference | RouterBgpAddressFamilyIpv4FlowspecNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStructToHclTerraform, true)(struct!.ipv4NeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStructList",
    },
    ipv6_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStructToHclTerraform, true)(struct!.ipv6NeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv4FlowspecNeighborOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv4FlowspecNeighbor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4NeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NeighborList = this._ipv4NeighborList?.internalValue;
    }
    if (this._ipv6NeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NeighborList = this._ipv6NeighborList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv4FlowspecNeighbor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4NeighborList.internalValue = undefined;
      this._ipv6NeighborList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4NeighborList.internalValue = value.ipv4NeighborList;
      this._ipv6NeighborList.internalValue = value.ipv6NeighborList;
    }
  }

  // ipv4_neighbor_list - computed: false, optional: true, required: false
  private _ipv4NeighborList = new RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStructList(this, "ipv4_neighbor_list", false);
  public get ipv4NeighborList() {
    return this._ipv4NeighborList;
  }
  public putIpv4NeighborList(value: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborListStruct[] | cdktf.IResolvable) {
    this._ipv4NeighborList.internalValue = value;
  }
  public resetIpv4NeighborList() {
    this._ipv4NeighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NeighborListInput() {
    return this._ipv4NeighborList.internalValue;
  }

  // ipv6_neighbor_list - computed: false, optional: true, required: false
  private _ipv6NeighborList = new RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStructList(this, "ipv6_neighbor_list", false);
  public get ipv6NeighborList() {
    return this._ipv6NeighborList;
  }
  public putIpv6NeighborList(value: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv6NeighborListStruct[] | cdktf.IResolvable) {
    this._ipv6NeighborList.internalValue = value;
  }
  public resetIpv6NeighborList() {
    this._ipv6NeighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NeighborListInput() {
    return this._ipv6NeighborList.internalValue;
  }
}
export interface RouterBgpAddressFamilyIpv4Flowspec {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor RouterBgp#neighbor}
  */
  readonly neighbor?: RouterBgpAddressFamilyIpv4FlowspecNeighbor;
}

export function routerBgpAddressFamilyIpv4FlowspecToTerraform(struct?: RouterBgpAddressFamilyIpv4FlowspecOutputReference | RouterBgpAddressFamilyIpv4Flowspec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    neighbor: routerBgpAddressFamilyIpv4FlowspecNeighborToTerraform(struct!.neighbor),
  }
}


export function routerBgpAddressFamilyIpv4FlowspecToHclTerraform(struct?: RouterBgpAddressFamilyIpv4FlowspecOutputReference | RouterBgpAddressFamilyIpv4Flowspec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor: {
      value: routerBgpAddressFamilyIpv4FlowspecNeighborToHclTerraform(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv4FlowspecNeighborList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv4FlowspecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv4Flowspec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv4Flowspec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._neighbor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._neighbor.internalValue = value.neighbor;
    }
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

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new RouterBgpAddressFamilyIpv4FlowspecNeighborOutputReference(this, "neighbor");
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: RouterBgpAddressFamilyIpv4FlowspecNeighbor) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }
}
export interface RouterBgpAddressFamilyIpv6AggregateAddressListStruct {
  /**
  * Configure BGP aggregate entries (Aggregate IPv6 prefix)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#aggregate_address RouterBgp#aggregate_address}
  */
  readonly aggregateAddress?: string;
  /**
  * Generate AS set path information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#as_set RouterBgp#as_set}
  */
  readonly asSet?: number;
  /**
  * Filter more specific routes from updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#summary_only RouterBgp#summary_only}
  */
  readonly summaryOnly?: number;
}

export function routerBgpAddressFamilyIpv6AggregateAddressListStructToTerraform(struct?: RouterBgpAddressFamilyIpv6AggregateAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_address: cdktf.stringToTerraform(struct!.aggregateAddress),
    as_set: cdktf.numberToTerraform(struct!.asSet),
    summary_only: cdktf.numberToTerraform(struct!.summaryOnly),
  }
}


export function routerBgpAddressFamilyIpv6AggregateAddressListStructToHclTerraform(struct?: RouterBgpAddressFamilyIpv6AggregateAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_address: {
      value: cdktf.stringToHclTerraform(struct!.aggregateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_set: {
      value: cdktf.numberToHclTerraform(struct!.asSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    summary_only: {
      value: cdktf.numberToHclTerraform(struct!.summaryOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6AggregateAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6AggregateAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateAddress = this._aggregateAddress;
    }
    if (this._asSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSet = this._asSet;
    }
    if (this._summaryOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnly = this._summaryOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6AggregateAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateAddress = undefined;
      this._asSet = undefined;
      this._summaryOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateAddress = value.aggregateAddress;
      this._asSet = value.asSet;
      this._summaryOnly = value.summaryOnly;
    }
  }

  // aggregate_address - computed: false, optional: true, required: false
  private _aggregateAddress?: string; 
  public get aggregateAddress() {
    return this.getStringAttribute('aggregate_address');
  }
  public set aggregateAddress(value: string) {
    this._aggregateAddress = value;
  }
  public resetAggregateAddress() {
    this._aggregateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateAddressInput() {
    return this._aggregateAddress;
  }

  // as_set - computed: false, optional: true, required: false
  private _asSet?: number; 
  public get asSet() {
    return this.getNumberAttribute('as_set');
  }
  public set asSet(value: number) {
    this._asSet = value;
  }
  public resetAsSet() {
    this._asSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asSetInput() {
    return this._asSet;
  }

  // summary_only - computed: false, optional: true, required: false
  private _summaryOnly?: number; 
  public get summaryOnly() {
    return this.getNumberAttribute('summary_only');
  }
  public set summaryOnly(value: number) {
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

export class RouterBgpAddressFamilyIpv6AggregateAddressListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6AggregateAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6AggregateAddressListStructOutputReference {
    return new RouterBgpAddressFamilyIpv6AggregateAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6Bgp {
  /**
  * Enable route-flap dampening
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dampening RouterBgp#dampening}
  */
  readonly dampening?: number;
  /**
  * Reachability Half-life time for the penalty(minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dampening_half RouterBgp#dampening_half}
  */
  readonly dampeningHalf?: number;
  /**
  * Maximum duration to suppress a stable route(minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dampening_max_supress RouterBgp#dampening_max_supress}
  */
  readonly dampeningMaxSupress?: number;
  /**
  * Value to start reusing a route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dampening_start_reuse RouterBgp#dampening_start_reuse}
  */
  readonly dampeningStartReuse?: number;
  /**
  * Value to start suppressing a route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dampening_start_supress RouterBgp#dampening_start_supress}
  */
  readonly dampeningStartSupress?: number;
  /**
  * Un-reachability Half-life time for the penalty(minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dampening_unreachability RouterBgp#dampening_unreachability}
  */
  readonly dampeningUnreachability?: number;
  /**
  * Route-map to specify criteria for dampening (Route-map name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6BgpToTerraform(struct?: RouterBgpAddressFamilyIpv6BgpOutputReference | RouterBgpAddressFamilyIpv6Bgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dampening: cdktf.numberToTerraform(struct!.dampening),
    dampening_half: cdktf.numberToTerraform(struct!.dampeningHalf),
    dampening_max_supress: cdktf.numberToTerraform(struct!.dampeningMaxSupress),
    dampening_start_reuse: cdktf.numberToTerraform(struct!.dampeningStartReuse),
    dampening_start_supress: cdktf.numberToTerraform(struct!.dampeningStartSupress),
    dampening_unreachability: cdktf.numberToTerraform(struct!.dampeningUnreachability),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6BgpToHclTerraform(struct?: RouterBgpAddressFamilyIpv6BgpOutputReference | RouterBgpAddressFamilyIpv6Bgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dampening: {
      value: cdktf.numberToHclTerraform(struct!.dampening),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_half: {
      value: cdktf.numberToHclTerraform(struct!.dampeningHalf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_max_supress: {
      value: cdktf.numberToHclTerraform(struct!.dampeningMaxSupress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_start_reuse: {
      value: cdktf.numberToHclTerraform(struct!.dampeningStartReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_start_supress: {
      value: cdktf.numberToHclTerraform(struct!.dampeningStartSupress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_unreachability: {
      value: cdktf.numberToHclTerraform(struct!.dampeningUnreachability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6BgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6Bgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dampening !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampening = this._dampening;
    }
    if (this._dampeningHalf !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningHalf = this._dampeningHalf;
    }
    if (this._dampeningMaxSupress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningMaxSupress = this._dampeningMaxSupress;
    }
    if (this._dampeningStartReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningStartReuse = this._dampeningStartReuse;
    }
    if (this._dampeningStartSupress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningStartSupress = this._dampeningStartSupress;
    }
    if (this._dampeningUnreachability !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningUnreachability = this._dampeningUnreachability;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6Bgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dampening = undefined;
      this._dampeningHalf = undefined;
      this._dampeningMaxSupress = undefined;
      this._dampeningStartReuse = undefined;
      this._dampeningStartSupress = undefined;
      this._dampeningUnreachability = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dampening = value.dampening;
      this._dampeningHalf = value.dampeningHalf;
      this._dampeningMaxSupress = value.dampeningMaxSupress;
      this._dampeningStartReuse = value.dampeningStartReuse;
      this._dampeningStartSupress = value.dampeningStartSupress;
      this._dampeningUnreachability = value.dampeningUnreachability;
      this._routeMap = value.routeMap;
    }
  }

  // dampening - computed: false, optional: true, required: false
  private _dampening?: number; 
  public get dampening() {
    return this.getNumberAttribute('dampening');
  }
  public set dampening(value: number) {
    this._dampening = value;
  }
  public resetDampening() {
    this._dampening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningInput() {
    return this._dampening;
  }

  // dampening_half - computed: false, optional: true, required: false
  private _dampeningHalf?: number; 
  public get dampeningHalf() {
    return this.getNumberAttribute('dampening_half');
  }
  public set dampeningHalf(value: number) {
    this._dampeningHalf = value;
  }
  public resetDampeningHalf() {
    this._dampeningHalf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningHalfInput() {
    return this._dampeningHalf;
  }

  // dampening_max_supress - computed: false, optional: true, required: false
  private _dampeningMaxSupress?: number; 
  public get dampeningMaxSupress() {
    return this.getNumberAttribute('dampening_max_supress');
  }
  public set dampeningMaxSupress(value: number) {
    this._dampeningMaxSupress = value;
  }
  public resetDampeningMaxSupress() {
    this._dampeningMaxSupress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningMaxSupressInput() {
    return this._dampeningMaxSupress;
  }

  // dampening_start_reuse - computed: false, optional: true, required: false
  private _dampeningStartReuse?: number; 
  public get dampeningStartReuse() {
    return this.getNumberAttribute('dampening_start_reuse');
  }
  public set dampeningStartReuse(value: number) {
    this._dampeningStartReuse = value;
  }
  public resetDampeningStartReuse() {
    this._dampeningStartReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningStartReuseInput() {
    return this._dampeningStartReuse;
  }

  // dampening_start_supress - computed: false, optional: true, required: false
  private _dampeningStartSupress?: number; 
  public get dampeningStartSupress() {
    return this.getNumberAttribute('dampening_start_supress');
  }
  public set dampeningStartSupress(value: number) {
    this._dampeningStartSupress = value;
  }
  public resetDampeningStartSupress() {
    this._dampeningStartSupress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningStartSupressInput() {
    return this._dampeningStartSupress;
  }

  // dampening_unreachability - computed: false, optional: true, required: false
  private _dampeningUnreachability?: number; 
  public get dampeningUnreachability() {
    return this.getNumberAttribute('dampening_unreachability');
  }
  public set dampeningUnreachability(value: number) {
    this._dampeningUnreachability = value;
  }
  public resetDampeningUnreachability() {
    this._dampeningUnreachability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningUnreachabilityInput() {
    return this._dampeningUnreachability;
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
}
export interface RouterBgpAddressFamilyIpv6Distance {
  /**
  * Distance for routes external to the AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distance_ext RouterBgp#distance_ext}
  */
  readonly distanceExt?: number;
  /**
  * Distance for routes internal to the AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distance_int RouterBgp#distance_int}
  */
  readonly distanceInt?: number;
  /**
  * Distance for local routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distance_local RouterBgp#distance_local}
  */
  readonly distanceLocal?: number;
}

export function routerBgpAddressFamilyIpv6DistanceToTerraform(struct?: RouterBgpAddressFamilyIpv6DistanceOutputReference | RouterBgpAddressFamilyIpv6Distance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance_ext: cdktf.numberToTerraform(struct!.distanceExt),
    distance_int: cdktf.numberToTerraform(struct!.distanceInt),
    distance_local: cdktf.numberToTerraform(struct!.distanceLocal),
  }
}


export function routerBgpAddressFamilyIpv6DistanceToHclTerraform(struct?: RouterBgpAddressFamilyIpv6DistanceOutputReference | RouterBgpAddressFamilyIpv6Distance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distance_ext: {
      value: cdktf.numberToHclTerraform(struct!.distanceExt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_int: {
      value: cdktf.numberToHclTerraform(struct!.distanceInt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_local: {
      value: cdktf.numberToHclTerraform(struct!.distanceLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6DistanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6Distance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distanceExt !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceExt = this._distanceExt;
    }
    if (this._distanceInt !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceInt = this._distanceInt;
    }
    if (this._distanceLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceLocal = this._distanceLocal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6Distance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distanceExt = undefined;
      this._distanceInt = undefined;
      this._distanceLocal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distanceExt = value.distanceExt;
      this._distanceInt = value.distanceInt;
      this._distanceLocal = value.distanceLocal;
    }
  }

  // distance_ext - computed: false, optional: true, required: false
  private _distanceExt?: number; 
  public get distanceExt() {
    return this.getNumberAttribute('distance_ext');
  }
  public set distanceExt(value: number) {
    this._distanceExt = value;
  }
  public resetDistanceExt() {
    this._distanceExt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceExtInput() {
    return this._distanceExt;
  }

  // distance_int - computed: false, optional: true, required: false
  private _distanceInt?: number; 
  public get distanceInt() {
    return this.getNumberAttribute('distance_int');
  }
  public set distanceInt(value: number) {
    this._distanceInt = value;
  }
  public resetDistanceInt() {
    this._distanceInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceIntInput() {
    return this._distanceInt;
  }

  // distance_local - computed: false, optional: true, required: false
  private _distanceLocal?: number; 
  public get distanceLocal() {
    return this.getNumberAttribute('distance_local');
  }
  public set distanceLocal(value: number) {
    this._distanceLocal = value;
  }
  public resetDistanceLocal() {
    this._distanceLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceLocalInput() {
    return this._distanceLocal;
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStruct {
  /**
  * Ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ethernet RouterBgp#ethernet}
  */
  readonly ethernet: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group_name RouterBgp#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
}

export function routerBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    peer_group_name: cdktf.stringToTerraform(struct!.peerGroupName),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_group_name: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._peerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupName = this._peerGroupName;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
      this._peerGroupName = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
      this._peerGroupName = value.peerGroupName;
      this._uuid = value.uuid;
    }
  }

  // ethernet - computed: false, optional: false, required: true
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
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
}

export class RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeLists {
  /**
  * Filter updates to/from this neighbor (IP standard/extended/named access list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distribute_list RouterBgp#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distribute_list_direction RouterBgp#distribute_list_direction}
  */
  readonly distributeListDirection?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    distribute_list_direction: cdktf.stringToTerraform(struct!.distributeListDirection),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterLists {
  /**
  * Establish BGP filters (AS path access-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#filter_list RouterBgp#filter_list}
  */
  readonly filterList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#filter_list_direction RouterBgp#filter_list_direction}
  */
  readonly filterListDirection?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_list: cdktf.stringToTerraform(struct!.filterList),
    filter_list_direction: cdktf.stringToTerraform(struct!.filterListDirection),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixLists {
  /**
  * Filter updates to/from this neighbor (Name of a prefix list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_prefix_list RouterBgp#nbr_prefix_list}
  */
  readonly nbrPrefixList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_prefix_list_direction RouterBgp#nbr_prefix_list_direction}
  */
  readonly nbrPrefixListDirection?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_prefix_list: cdktf.stringToTerraform(struct!.nbrPrefixList),
    nbr_prefix_list_direction: cdktf.stringToTerraform(struct!.nbrPrefixListDirection),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapLists {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_rmap_direction RouterBgp#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_route_map RouterBgp#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStruct {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#activate RouterBgp#activate}
  */
  readonly activate?: number;
  /**
  * Accept as-path with my AS present in it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#allowas_in RouterBgp#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#allowas_in_count RouterBgp#allowas_in_count}
  */
  readonly allowasInCount?: number;
  /**
  * Originate default route to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#default_originate RouterBgp#default_originate}
  */
  readonly defaultOriginate?: number;
  /**
  * enable graceful-restart helper for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#graceful_restart RouterBgp#graceful_restart}
  */
  readonly gracefulRestart?: number;
  /**
  * Allow inbound soft reconfiguration for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#inbound RouterBgp#inbound}
  */
  readonly inbound?: number;
  /**
  * Maximum number of prefix accept from this peer (maximum no. of prefix limit (various depends on model))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#maximum_prefix RouterBgp#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * threshold-value, 1 to 100 percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#maximum_prefix_thres RouterBgp#maximum_prefix_thres}
  */
  readonly maximumPrefixThres?: number;
  /**
  * Neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_ipv4 RouterBgp#neighbor_ipv4}
  */
  readonly neighborIpv4: string;
  /**
  * Disable the next hop calculation for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#next_hop_self RouterBgp#next_hop_self}
  */
  readonly nextHopSelf?: number;
  /**
  * Configure peer-group (peer-group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group_name RouterBgp#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * 'both': both; 'receive': receive; 'send': send;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#prefix_list_direction RouterBgp#prefix_list_direction}
  */
  readonly prefixListDirection?: string;
  /**
  * Remove private AS number from outbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#remove_private_as RouterBgp#remove_private_as}
  */
  readonly removePrivateAs?: number;
  /**
  * restart value, 1 to 1440 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#restart_min RouterBgp#restart_min}
  */
  readonly restartMin?: number;
  /**
  * Route-map to specify criteria to originate default (route-map name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
  /**
  * 'all': Send Standard, Extended, and Large Community attributes; 'both': Send Standard and Extended Community attributes; 'none': Disable Sending Community attributes; 'standard': Send Standard Community attributes; 'extended': Send Extended Community attributes; 'large': Send Large Community attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#send_community_val RouterBgp#send_community_val}
  */
  readonly sendCommunityVal?: string;
  /**
  * Route-map to selectively unsuppress suppressed routes (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#unsuppress_map RouterBgp#unsuppress_map}
  */
  readonly unsuppressMap?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * Set default weight for routes from this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#weight RouterBgp#weight}
  */
  readonly weight?: number;
  /**
  * distribute_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distribute_lists RouterBgp#distribute_lists}
  */
  readonly distributeLists?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeLists[] | cdktf.IResolvable;
  /**
  * neighbor_filter_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_filter_lists RouterBgp#neighbor_filter_lists}
  */
  readonly neighborFilterLists?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterLists[] | cdktf.IResolvable;
  /**
  * neighbor_prefix_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_prefix_lists RouterBgp#neighbor_prefix_lists}
  */
  readonly neighborPrefixLists?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixLists[] | cdktf.IResolvable;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_route_map_lists RouterBgp#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapLists[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListStructToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.numberToTerraform(struct!.activate),
    allowas_in: cdktf.numberToTerraform(struct!.allowasIn),
    allowas_in_count: cdktf.numberToTerraform(struct!.allowasInCount),
    default_originate: cdktf.numberToTerraform(struct!.defaultOriginate),
    graceful_restart: cdktf.numberToTerraform(struct!.gracefulRestart),
    inbound: cdktf.numberToTerraform(struct!.inbound),
    maximum_prefix: cdktf.numberToTerraform(struct!.maximumPrefix),
    maximum_prefix_thres: cdktf.numberToTerraform(struct!.maximumPrefixThres),
    neighbor_ipv4: cdktf.stringToTerraform(struct!.neighborIpv4),
    next_hop_self: cdktf.numberToTerraform(struct!.nextHopSelf),
    peer_group_name: cdktf.stringToTerraform(struct!.peerGroupName),
    prefix_list_direction: cdktf.stringToTerraform(struct!.prefixListDirection),
    remove_private_as: cdktf.numberToTerraform(struct!.removePrivateAs),
    restart_min: cdktf.numberToTerraform(struct!.restartMin),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    send_community_val: cdktf.stringToTerraform(struct!.sendCommunityVal),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
    distribute_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsToTerraform, true)(struct!.distributeLists),
    neighbor_filter_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsToTerraform, true)(struct!.neighborFilterLists),
    neighbor_prefix_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsToTerraform, true)(struct!.neighborPrefixLists),
    neighbor_route_map_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsToTerraform, true)(struct!.neighborRouteMapLists),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListStructToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate: {
      value: cdktf.numberToHclTerraform(struct!.activate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in: {
      value: cdktf.numberToHclTerraform(struct!.allowasIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_count: {
      value: cdktf.numberToHclTerraform(struct!.allowasInCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_originate: {
      value: cdktf.numberToHclTerraform(struct!.defaultOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graceful_restart: {
      value: cdktf.numberToHclTerraform(struct!.gracefulRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound: {
      value: cdktf.numberToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_thres: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThres),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.neighborIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self: {
      value: cdktf.numberToHclTerraform(struct!.nextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_group_name: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.prefixListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as: {
      value: cdktf.numberToHclTerraform(struct!.removePrivateAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restart_min: {
      value: cdktf.numberToHclTerraform(struct!.restartMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community_val: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsuppress_map: {
      value: cdktf.stringToHclTerraform(struct!.unsuppressMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distribute_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsToHclTerraform, true)(struct!.distributeLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsList",
    },
    neighbor_filter_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsToHclTerraform, true)(struct!.neighborFilterLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsList",
    },
    neighbor_prefix_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsToHclTerraform, true)(struct!.neighborPrefixLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsList",
    },
    neighbor_route_map_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsToHclTerraform, true)(struct!.neighborRouteMapLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._allowasIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn = this._allowasIn;
    }
    if (this._allowasInCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInCount = this._allowasInCount;
    }
    if (this._defaultOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginate = this._defaultOriginate;
    }
    if (this._gracefulRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestart = this._gracefulRestart;
    }
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._maximumPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix;
    }
    if (this._maximumPrefixThres !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThres = this._maximumPrefixThres;
    }
    if (this._neighborIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborIpv4 = this._neighborIpv4;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._peerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupName = this._peerGroupName;
    }
    if (this._prefixListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListDirection = this._prefixListDirection;
    }
    if (this._removePrivateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs;
    }
    if (this._restartMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartMin = this._restartMin;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._sendCommunityVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVal = this._sendCommunityVal;
    }
    if (this._unsuppressMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppressMap = this._unsuppressMap;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._distributeLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeLists = this._distributeLists?.internalValue;
    }
    if (this._neighborFilterLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborFilterLists = this._neighborFilterLists?.internalValue;
    }
    if (this._neighborPrefixLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPrefixLists = this._neighborPrefixLists?.internalValue;
    }
    if (this._neighborRouteMapLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborRouteMapLists = this._neighborRouteMapLists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._allowasIn = undefined;
      this._allowasInCount = undefined;
      this._defaultOriginate = undefined;
      this._gracefulRestart = undefined;
      this._inbound = undefined;
      this._maximumPrefix = undefined;
      this._maximumPrefixThres = undefined;
      this._neighborIpv4 = undefined;
      this._nextHopSelf = undefined;
      this._peerGroupName = undefined;
      this._prefixListDirection = undefined;
      this._removePrivateAs = undefined;
      this._restartMin = undefined;
      this._routeMap = undefined;
      this._sendCommunityVal = undefined;
      this._unsuppressMap = undefined;
      this._uuid = undefined;
      this._weight = undefined;
      this._distributeLists.internalValue = undefined;
      this._neighborFilterLists.internalValue = undefined;
      this._neighborPrefixLists.internalValue = undefined;
      this._neighborRouteMapLists.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activate = value.activate;
      this._allowasIn = value.allowasIn;
      this._allowasInCount = value.allowasInCount;
      this._defaultOriginate = value.defaultOriginate;
      this._gracefulRestart = value.gracefulRestart;
      this._inbound = value.inbound;
      this._maximumPrefix = value.maximumPrefix;
      this._maximumPrefixThres = value.maximumPrefixThres;
      this._neighborIpv4 = value.neighborIpv4;
      this._nextHopSelf = value.nextHopSelf;
      this._peerGroupName = value.peerGroupName;
      this._prefixListDirection = value.prefixListDirection;
      this._removePrivateAs = value.removePrivateAs;
      this._restartMin = value.restartMin;
      this._routeMap = value.routeMap;
      this._sendCommunityVal = value.sendCommunityVal;
      this._unsuppressMap = value.unsuppressMap;
      this._uuid = value.uuid;
      this._weight = value.weight;
      this._distributeLists.internalValue = value.distributeLists;
      this._neighborFilterLists.internalValue = value.neighborFilterLists;
      this._neighborPrefixLists.internalValue = value.neighborPrefixLists;
      this._neighborRouteMapLists.internalValue = value.neighborRouteMapLists;
    }
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
  private _distributeLists = new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsList(this, "distribute_lists", false);
  public get distributeLists() {
    return this._distributeLists;
  }
  public putDistributeLists(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeLists[] | cdktf.IResolvable) {
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
  private _neighborFilterLists = new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsList(this, "neighbor_filter_lists", false);
  public get neighborFilterLists() {
    return this._neighborFilterLists;
  }
  public putNeighborFilterLists(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterLists[] | cdktf.IResolvable) {
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
  private _neighborPrefixLists = new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsList(this, "neighbor_prefix_lists", false);
  public get neighborPrefixLists() {
    return this._neighborPrefixLists;
  }
  public putNeighborPrefixLists(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixLists[] | cdktf.IResolvable) {
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
  private _neighborRouteMapLists = new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapLists[] | cdktf.IResolvable) {
    this._neighborRouteMapLists.internalValue = value;
  }
  public resetNeighborRouteMapLists() {
    this._neighborRouteMapLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborRouteMapListsInput() {
    return this._neighborRouteMapLists.internalValue;
  }
}

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeLists {
  /**
  * Filter updates to/from this neighbor (IP standard/extended/named access list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distribute_list RouterBgp#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distribute_list_direction RouterBgp#distribute_list_direction}
  */
  readonly distributeListDirection?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    distribute_list_direction: cdktf.stringToTerraform(struct!.distributeListDirection),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterLists {
  /**
  * Establish BGP filters (AS path access-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#filter_list RouterBgp#filter_list}
  */
  readonly filterList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#filter_list_direction RouterBgp#filter_list_direction}
  */
  readonly filterListDirection?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_list: cdktf.stringToTerraform(struct!.filterList),
    filter_list_direction: cdktf.stringToTerraform(struct!.filterListDirection),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixLists {
  /**
  * Filter updates to/from this neighbor (Name of a prefix list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_prefix_list RouterBgp#nbr_prefix_list}
  */
  readonly nbrPrefixList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_prefix_list_direction RouterBgp#nbr_prefix_list_direction}
  */
  readonly nbrPrefixListDirection?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_prefix_list: cdktf.stringToTerraform(struct!.nbrPrefixList),
    nbr_prefix_list_direction: cdktf.stringToTerraform(struct!.nbrPrefixListDirection),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapLists {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_rmap_direction RouterBgp#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_route_map RouterBgp#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStruct {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#activate RouterBgp#activate}
  */
  readonly activate?: number;
  /**
  * Accept as-path with my AS present in it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#allowas_in RouterBgp#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#allowas_in_count RouterBgp#allowas_in_count}
  */
  readonly allowasInCount?: number;
  /**
  * Originate default route to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#default_originate RouterBgp#default_originate}
  */
  readonly defaultOriginate?: number;
  /**
  * enable graceful-restart helper for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#graceful_restart RouterBgp#graceful_restart}
  */
  readonly gracefulRestart?: number;
  /**
  * Allow inbound soft reconfiguration for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#inbound RouterBgp#inbound}
  */
  readonly inbound?: number;
  /**
  * Maximum number of prefix accept from this peer (maximum no. of prefix limit (various depends on model))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#maximum_prefix RouterBgp#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * threshold-value, 1 to 100 percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#maximum_prefix_thres RouterBgp#maximum_prefix_thres}
  */
  readonly maximumPrefixThres?: number;
  /**
  * Neighbor IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_ipv6 RouterBgp#neighbor_ipv6}
  */
  readonly neighborIpv6: string;
  /**
  * Disable the next hop calculation for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#next_hop_self RouterBgp#next_hop_self}
  */
  readonly nextHopSelf?: number;
  /**
  * Configure peer-group (peer-group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group_name RouterBgp#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * 'both': both; 'receive': receive; 'send': send;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#prefix_list_direction RouterBgp#prefix_list_direction}
  */
  readonly prefixListDirection?: string;
  /**
  * Remove private AS number from outbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#remove_private_as RouterBgp#remove_private_as}
  */
  readonly removePrivateAs?: number;
  /**
  * restart value, 1 to 1440 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#restart_min RouterBgp#restart_min}
  */
  readonly restartMin?: number;
  /**
  * Route-map to specify criteria to originate default (route-map name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
  /**
  * 'all': Send Standard, Extended, and Large Community attributes; 'both': Send Standard and Extended Community attributes; 'none': Disable Sending Community attributes; 'standard': Send Standard Community attributes; 'extended': Send Extended Community attributes; 'large': Send Large Community attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#send_community_val RouterBgp#send_community_val}
  */
  readonly sendCommunityVal?: string;
  /**
  * Route-map to selectively unsuppress suppressed routes (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#unsuppress_map RouterBgp#unsuppress_map}
  */
  readonly unsuppressMap?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * Set default weight for routes from this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#weight RouterBgp#weight}
  */
  readonly weight?: number;
  /**
  * distribute_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distribute_lists RouterBgp#distribute_lists}
  */
  readonly distributeLists?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeLists[] | cdktf.IResolvable;
  /**
  * neighbor_filter_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_filter_lists RouterBgp#neighbor_filter_lists}
  */
  readonly neighborFilterLists?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterLists[] | cdktf.IResolvable;
  /**
  * neighbor_prefix_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_prefix_lists RouterBgp#neighbor_prefix_lists}
  */
  readonly neighborPrefixLists?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixLists[] | cdktf.IResolvable;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_route_map_lists RouterBgp#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapLists[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListStructToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.numberToTerraform(struct!.activate),
    allowas_in: cdktf.numberToTerraform(struct!.allowasIn),
    allowas_in_count: cdktf.numberToTerraform(struct!.allowasInCount),
    default_originate: cdktf.numberToTerraform(struct!.defaultOriginate),
    graceful_restart: cdktf.numberToTerraform(struct!.gracefulRestart),
    inbound: cdktf.numberToTerraform(struct!.inbound),
    maximum_prefix: cdktf.numberToTerraform(struct!.maximumPrefix),
    maximum_prefix_thres: cdktf.numberToTerraform(struct!.maximumPrefixThres),
    neighbor_ipv6: cdktf.stringToTerraform(struct!.neighborIpv6),
    next_hop_self: cdktf.numberToTerraform(struct!.nextHopSelf),
    peer_group_name: cdktf.stringToTerraform(struct!.peerGroupName),
    prefix_list_direction: cdktf.stringToTerraform(struct!.prefixListDirection),
    remove_private_as: cdktf.numberToTerraform(struct!.removePrivateAs),
    restart_min: cdktf.numberToTerraform(struct!.restartMin),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    send_community_val: cdktf.stringToTerraform(struct!.sendCommunityVal),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
    distribute_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsToTerraform, true)(struct!.distributeLists),
    neighbor_filter_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsToTerraform, true)(struct!.neighborFilterLists),
    neighbor_prefix_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsToTerraform, true)(struct!.neighborPrefixLists),
    neighbor_route_map_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsToTerraform, true)(struct!.neighborRouteMapLists),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListStructToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate: {
      value: cdktf.numberToHclTerraform(struct!.activate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in: {
      value: cdktf.numberToHclTerraform(struct!.allowasIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_count: {
      value: cdktf.numberToHclTerraform(struct!.allowasInCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_originate: {
      value: cdktf.numberToHclTerraform(struct!.defaultOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graceful_restart: {
      value: cdktf.numberToHclTerraform(struct!.gracefulRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound: {
      value: cdktf.numberToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_thres: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThres),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.neighborIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self: {
      value: cdktf.numberToHclTerraform(struct!.nextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_group_name: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.prefixListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as: {
      value: cdktf.numberToHclTerraform(struct!.removePrivateAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restart_min: {
      value: cdktf.numberToHclTerraform(struct!.restartMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community_val: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsuppress_map: {
      value: cdktf.stringToHclTerraform(struct!.unsuppressMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distribute_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsToHclTerraform, true)(struct!.distributeLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsList",
    },
    neighbor_filter_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsToHclTerraform, true)(struct!.neighborFilterLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsList",
    },
    neighbor_prefix_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsToHclTerraform, true)(struct!.neighborPrefixLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsList",
    },
    neighbor_route_map_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsToHclTerraform, true)(struct!.neighborRouteMapLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._allowasIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn = this._allowasIn;
    }
    if (this._allowasInCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInCount = this._allowasInCount;
    }
    if (this._defaultOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginate = this._defaultOriginate;
    }
    if (this._gracefulRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestart = this._gracefulRestart;
    }
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._maximumPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix;
    }
    if (this._maximumPrefixThres !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThres = this._maximumPrefixThres;
    }
    if (this._neighborIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborIpv6 = this._neighborIpv6;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._peerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupName = this._peerGroupName;
    }
    if (this._prefixListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListDirection = this._prefixListDirection;
    }
    if (this._removePrivateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs;
    }
    if (this._restartMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartMin = this._restartMin;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._sendCommunityVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVal = this._sendCommunityVal;
    }
    if (this._unsuppressMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppressMap = this._unsuppressMap;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._distributeLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeLists = this._distributeLists?.internalValue;
    }
    if (this._neighborFilterLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborFilterLists = this._neighborFilterLists?.internalValue;
    }
    if (this._neighborPrefixLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPrefixLists = this._neighborPrefixLists?.internalValue;
    }
    if (this._neighborRouteMapLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborRouteMapLists = this._neighborRouteMapLists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._allowasIn = undefined;
      this._allowasInCount = undefined;
      this._defaultOriginate = undefined;
      this._gracefulRestart = undefined;
      this._inbound = undefined;
      this._maximumPrefix = undefined;
      this._maximumPrefixThres = undefined;
      this._neighborIpv6 = undefined;
      this._nextHopSelf = undefined;
      this._peerGroupName = undefined;
      this._prefixListDirection = undefined;
      this._removePrivateAs = undefined;
      this._restartMin = undefined;
      this._routeMap = undefined;
      this._sendCommunityVal = undefined;
      this._unsuppressMap = undefined;
      this._uuid = undefined;
      this._weight = undefined;
      this._distributeLists.internalValue = undefined;
      this._neighborFilterLists.internalValue = undefined;
      this._neighborPrefixLists.internalValue = undefined;
      this._neighborRouteMapLists.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activate = value.activate;
      this._allowasIn = value.allowasIn;
      this._allowasInCount = value.allowasInCount;
      this._defaultOriginate = value.defaultOriginate;
      this._gracefulRestart = value.gracefulRestart;
      this._inbound = value.inbound;
      this._maximumPrefix = value.maximumPrefix;
      this._maximumPrefixThres = value.maximumPrefixThres;
      this._neighborIpv6 = value.neighborIpv6;
      this._nextHopSelf = value.nextHopSelf;
      this._peerGroupName = value.peerGroupName;
      this._prefixListDirection = value.prefixListDirection;
      this._removePrivateAs = value.removePrivateAs;
      this._restartMin = value.restartMin;
      this._routeMap = value.routeMap;
      this._sendCommunityVal = value.sendCommunityVal;
      this._unsuppressMap = value.unsuppressMap;
      this._uuid = value.uuid;
      this._weight = value.weight;
      this._distributeLists.internalValue = value.distributeLists;
      this._neighborFilterLists.internalValue = value.neighborFilterLists;
      this._neighborPrefixLists.internalValue = value.neighborPrefixLists;
      this._neighborRouteMapLists.internalValue = value.neighborRouteMapLists;
    }
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
  private _distributeLists = new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsList(this, "distribute_lists", false);
  public get distributeLists() {
    return this._distributeLists;
  }
  public putDistributeLists(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeLists[] | cdktf.IResolvable) {
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
  private _neighborFilterLists = new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsList(this, "neighbor_filter_lists", false);
  public get neighborFilterLists() {
    return this._neighborFilterLists;
  }
  public putNeighborFilterLists(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterLists[] | cdktf.IResolvable) {
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
  private _neighborPrefixLists = new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsList(this, "neighbor_prefix_lists", false);
  public get neighborPrefixLists() {
    return this._neighborPrefixLists;
  }
  public putNeighborPrefixLists(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixLists[] | cdktf.IResolvable) {
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
  private _neighborRouteMapLists = new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapLists[] | cdktf.IResolvable) {
    this._neighborRouteMapLists.internalValue = value;
  }
  public resetNeighborRouteMapLists() {
    this._neighborRouteMapLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborRouteMapListsInput() {
    return this._neighborRouteMapLists.internalValue;
  }
}

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapLists {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_rmap_direction RouterBgp#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_route_map RouterBgp#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStruct {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#activate RouterBgp#activate}
  */
  readonly activate?: number;
  /**
  * Accept as-path with my AS present in it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#allowas_in RouterBgp#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#allowas_in_count RouterBgp#allowas_in_count}
  */
  readonly allowasInCount?: number;
  /**
  * Allow inbound soft reconfiguration for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#inbound RouterBgp#inbound}
  */
  readonly inbound?: number;
  /**
  * Maximum number of prefix accept from this peer (maximum no. of prefix limit (various depends on model))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#maximum_prefix RouterBgp#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * threshold-value, 1 to 100 percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#maximum_prefix_thres RouterBgp#maximum_prefix_thres}
  */
  readonly maximumPrefixThres?: number;
  /**
  * Disable the next hop calculation for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#next_hop_self RouterBgp#next_hop_self}
  */
  readonly nextHopSelf?: number;
  /**
  * Neighbor tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group RouterBgp#peer_group}
  */
  readonly peerGroup: string;
  /**
  * Remove private AS number from outbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#remove_private_as RouterBgp#remove_private_as}
  */
  readonly removePrivateAs?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * Set default weight for routes from this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#weight RouterBgp#weight}
  */
  readonly weight?: number;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_route_map_lists RouterBgp#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapLists[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.numberToTerraform(struct!.activate),
    allowas_in: cdktf.numberToTerraform(struct!.allowasIn),
    allowas_in_count: cdktf.numberToTerraform(struct!.allowasInCount),
    inbound: cdktf.numberToTerraform(struct!.inbound),
    maximum_prefix: cdktf.numberToTerraform(struct!.maximumPrefix),
    maximum_prefix_thres: cdktf.numberToTerraform(struct!.maximumPrefixThres),
    next_hop_self: cdktf.numberToTerraform(struct!.nextHopSelf),
    peer_group: cdktf.stringToTerraform(struct!.peerGroup),
    remove_private_as: cdktf.numberToTerraform(struct!.removePrivateAs),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
    neighbor_route_map_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsToTerraform, true)(struct!.neighborRouteMapLists),
  }
}


export function routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate: {
      value: cdktf.numberToHclTerraform(struct!.activate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in: {
      value: cdktf.numberToHclTerraform(struct!.allowasIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_count: {
      value: cdktf.numberToHclTerraform(struct!.allowasInCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound: {
      value: cdktf.numberToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_thres: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThres),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_hop_self: {
      value: cdktf.numberToHclTerraform(struct!.nextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_group: {
      value: cdktf.stringToHclTerraform(struct!.peerGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as: {
      value: cdktf.numberToHclTerraform(struct!.removePrivateAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_route_map_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsToHclTerraform, true)(struct!.neighborRouteMapLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._allowasIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn = this._allowasIn;
    }
    if (this._allowasInCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInCount = this._allowasInCount;
    }
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._maximumPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix;
    }
    if (this._maximumPrefixThres !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThres = this._maximumPrefixThres;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._peerGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroup = this._peerGroup;
    }
    if (this._removePrivateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._neighborRouteMapLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborRouteMapLists = this._neighborRouteMapLists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._allowasIn = undefined;
      this._allowasInCount = undefined;
      this._inbound = undefined;
      this._maximumPrefix = undefined;
      this._maximumPrefixThres = undefined;
      this._nextHopSelf = undefined;
      this._peerGroup = undefined;
      this._removePrivateAs = undefined;
      this._uuid = undefined;
      this._weight = undefined;
      this._neighborRouteMapLists.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activate = value.activate;
      this._allowasIn = value.allowasIn;
      this._allowasInCount = value.allowasInCount;
      this._inbound = value.inbound;
      this._maximumPrefix = value.maximumPrefix;
      this._maximumPrefixThres = value.maximumPrefixThres;
      this._nextHopSelf = value.nextHopSelf;
      this._peerGroup = value.peerGroup;
      this._removePrivateAs = value.removePrivateAs;
      this._uuid = value.uuid;
      this._weight = value.weight;
      this._neighborRouteMapLists.internalValue = value.neighborRouteMapLists;
    }
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
  private _neighborRouteMapLists = new RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapLists[] | cdktf.IResolvable) {
    this._neighborRouteMapLists.internalValue = value;
  }
  public resetNeighborRouteMapLists() {
    this._neighborRouteMapLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborRouteMapListsInput() {
    return this._neighborRouteMapLists.internalValue;
  }
}

export class RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group_name RouterBgp#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * Trunk interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#trunk RouterBgp#trunk}
  */
  readonly trunk: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
}

export function routerBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_group_name: cdktf.stringToTerraform(struct!.peerGroupName),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_group_name: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupName = this._peerGroupName;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peerGroupName = undefined;
      this._trunk = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peerGroupName = value.peerGroupName;
      this._trunk = value.trunk;
      this._uuid = value.uuid;
    }
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

  // trunk - computed: false, optional: false, required: true
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
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
}

export class RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group_name RouterBgp#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ve RouterBgp#ve}
  */
  readonly ve: number;
}

export function routerBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_group_name: cdktf.stringToTerraform(struct!.peerGroupName),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function routerBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_group_name: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupName = this._peerGroupName;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peerGroupName = undefined;
      this._uuid = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peerGroupName = value.peerGroupName;
      this._uuid = value.uuid;
      this._ve = value.ve;
    }
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

  // ve - computed: false, optional: false, required: true
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }
}

export class RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6Neighbor {
  /**
  * ethernet_neighbor_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ethernet_neighbor_ipv6_list RouterBgp#ethernet_neighbor_ipv6_list}
  */
  readonly ethernetNeighborIpv6List?: RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * ipv4_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ipv4_neighbor_list RouterBgp#ipv4_neighbor_list}
  */
  readonly ipv4NeighborList?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ipv6_neighbor_list RouterBgp#ipv6_neighbor_list}
  */
  readonly ipv6NeighborList?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStruct[] | cdktf.IResolvable;
  /**
  * peer_group_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group_neighbor_list RouterBgp#peer_group_neighbor_list}
  */
  readonly peerGroupNeighborList?: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStruct[] | cdktf.IResolvable;
  /**
  * trunk_neighbor_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#trunk_neighbor_ipv6_list RouterBgp#trunk_neighbor_ipv6_list}
  */
  readonly trunkNeighborIpv6List?: RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * ve_neighbor_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ve_neighbor_ipv6_list RouterBgp#ve_neighbor_ipv6_list}
  */
  readonly veNeighborIpv6List?: RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStruct[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv6NeighborToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborOutputReference | RouterBgpAddressFamilyIpv6Neighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_neighbor_ipv6_list: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructToTerraform, true)(struct!.ethernetNeighborIpv6List),
    ipv4_neighbor_list: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListStructToTerraform, true)(struct!.ipv4NeighborList),
    ipv6_neighbor_list: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListStructToTerraform, true)(struct!.ipv6NeighborList),
    peer_group_neighbor_list: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructToTerraform, true)(struct!.peerGroupNeighborList),
    trunk_neighbor_ipv6_list: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructToTerraform, true)(struct!.trunkNeighborIpv6List),
    ve_neighbor_ipv6_list: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructToTerraform, true)(struct!.veNeighborIpv6List),
  }
}


export function routerBgpAddressFamilyIpv6NeighborToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborOutputReference | RouterBgpAddressFamilyIpv6Neighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_neighbor_ipv6_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructToHclTerraform, true)(struct!.ethernetNeighborIpv6List),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructList",
    },
    ipv4_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListStructToHclTerraform, true)(struct!.ipv4NeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructList",
    },
    ipv6_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListStructToHclTerraform, true)(struct!.ipv6NeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructList",
    },
    peer_group_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructToHclTerraform, true)(struct!.peerGroupNeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructList",
    },
    trunk_neighbor_ipv6_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructToHclTerraform, true)(struct!.trunkNeighborIpv6List),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructList",
    },
    ve_neighbor_ipv6_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructToHclTerraform, true)(struct!.veNeighborIpv6List),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6Neighbor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetNeighborIpv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetNeighborIpv6List = this._ethernetNeighborIpv6List?.internalValue;
    }
    if (this._ipv4NeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NeighborList = this._ipv4NeighborList?.internalValue;
    }
    if (this._ipv6NeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NeighborList = this._ipv6NeighborList?.internalValue;
    }
    if (this._peerGroupNeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupNeighborList = this._peerGroupNeighborList?.internalValue;
    }
    if (this._trunkNeighborIpv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkNeighborIpv6List = this._trunkNeighborIpv6List?.internalValue;
    }
    if (this._veNeighborIpv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veNeighborIpv6List = this._veNeighborIpv6List?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6Neighbor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ethernetNeighborIpv6List.internalValue = undefined;
      this._ipv4NeighborList.internalValue = undefined;
      this._ipv6NeighborList.internalValue = undefined;
      this._peerGroupNeighborList.internalValue = undefined;
      this._trunkNeighborIpv6List.internalValue = undefined;
      this._veNeighborIpv6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ethernetNeighborIpv6List.internalValue = value.ethernetNeighborIpv6List;
      this._ipv4NeighborList.internalValue = value.ipv4NeighborList;
      this._ipv6NeighborList.internalValue = value.ipv6NeighborList;
      this._peerGroupNeighborList.internalValue = value.peerGroupNeighborList;
      this._trunkNeighborIpv6List.internalValue = value.trunkNeighborIpv6List;
      this._veNeighborIpv6List.internalValue = value.veNeighborIpv6List;
    }
  }

  // ethernet_neighbor_ipv6_list - computed: false, optional: true, required: false
  private _ethernetNeighborIpv6List = new RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructList(this, "ethernet_neighbor_ipv6_list", false);
  public get ethernetNeighborIpv6List() {
    return this._ethernetNeighborIpv6List;
  }
  public putEthernetNeighborIpv6List(value: RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStruct[] | cdktf.IResolvable) {
    this._ethernetNeighborIpv6List.internalValue = value;
  }
  public resetEthernetNeighborIpv6List() {
    this._ethernetNeighborIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetNeighborIpv6ListInput() {
    return this._ethernetNeighborIpv6List.internalValue;
  }

  // ipv4_neighbor_list - computed: false, optional: true, required: false
  private _ipv4NeighborList = new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructList(this, "ipv4_neighbor_list", false);
  public get ipv4NeighborList() {
    return this._ipv4NeighborList;
  }
  public putIpv4NeighborList(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStruct[] | cdktf.IResolvable) {
    this._ipv4NeighborList.internalValue = value;
  }
  public resetIpv4NeighborList() {
    this._ipv4NeighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NeighborListInput() {
    return this._ipv4NeighborList.internalValue;
  }

  // ipv6_neighbor_list - computed: false, optional: true, required: false
  private _ipv6NeighborList = new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructList(this, "ipv6_neighbor_list", false);
  public get ipv6NeighborList() {
    return this._ipv6NeighborList;
  }
  public putIpv6NeighborList(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStruct[] | cdktf.IResolvable) {
    this._ipv6NeighborList.internalValue = value;
  }
  public resetIpv6NeighborList() {
    this._ipv6NeighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NeighborListInput() {
    return this._ipv6NeighborList.internalValue;
  }

  // peer_group_neighbor_list - computed: false, optional: true, required: false
  private _peerGroupNeighborList = new RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructList(this, "peer_group_neighbor_list", false);
  public get peerGroupNeighborList() {
    return this._peerGroupNeighborList;
  }
  public putPeerGroupNeighborList(value: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStruct[] | cdktf.IResolvable) {
    this._peerGroupNeighborList.internalValue = value;
  }
  public resetPeerGroupNeighborList() {
    this._peerGroupNeighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupNeighborListInput() {
    return this._peerGroupNeighborList.internalValue;
  }

  // trunk_neighbor_ipv6_list - computed: false, optional: true, required: false
  private _trunkNeighborIpv6List = new RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructList(this, "trunk_neighbor_ipv6_list", false);
  public get trunkNeighborIpv6List() {
    return this._trunkNeighborIpv6List;
  }
  public putTrunkNeighborIpv6List(value: RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStruct[] | cdktf.IResolvable) {
    this._trunkNeighborIpv6List.internalValue = value;
  }
  public resetTrunkNeighborIpv6List() {
    this._trunkNeighborIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkNeighborIpv6ListInput() {
    return this._trunkNeighborIpv6List.internalValue;
  }

  // ve_neighbor_ipv6_list - computed: false, optional: true, required: false
  private _veNeighborIpv6List = new RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructList(this, "ve_neighbor_ipv6_list", false);
  public get veNeighborIpv6List() {
    return this._veNeighborIpv6List;
  }
  public putVeNeighborIpv6List(value: RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStruct[] | cdktf.IResolvable) {
    this._veNeighborIpv6List.internalValue = value;
  }
  public resetVeNeighborIpv6List() {
    this._veNeighborIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veNeighborIpv6ListInput() {
    return this._veNeighborIpv6List.internalValue;
  }
}
export interface RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStruct {
  /**
  * Specify a BGP backdoor route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#backdoor RouterBgp#backdoor}
  */
  readonly backdoor?: number;
  /**
  * community value in the format 1-4294967295|AA:NN|internet|local-AS|no-advertise|no-export
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#comm_value RouterBgp#comm_value}
  */
  readonly commValue?: string;
  /**
  * Network specific description (Up to 80 characters describing this network)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#description RouterBgp#description}
  */
  readonly description?: string;
  /**
  * Large community value in the format XX:YY:ZZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#lcomm_value RouterBgp#lcomm_value}
  */
  readonly lcommValue?: string;
  /**
  * Specify a network to announce via BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#network_ipv6 RouterBgp#network_ipv6}
  */
  readonly networkIpv6: string;
  /**
  * Route-map to modify the attributes (Name of the route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
}

export function routerBgpAddressFamilyIpv6NetworkIpv6NetworkListStructToTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backdoor: cdktf.numberToTerraform(struct!.backdoor),
    comm_value: cdktf.stringToTerraform(struct!.commValue),
    description: cdktf.stringToTerraform(struct!.description),
    lcomm_value: cdktf.stringToTerraform(struct!.lcommValue),
    network_ipv6: cdktf.stringToTerraform(struct!.networkIpv6),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerBgpAddressFamilyIpv6NetworkIpv6NetworkListStructToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backdoor: {
      value: cdktf.numberToHclTerraform(struct!.backdoor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comm_value: {
      value: cdktf.stringToHclTerraform(struct!.commValue),
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
    lcomm_value: {
      value: cdktf.stringToHclTerraform(struct!.lcommValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.networkIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backdoor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backdoor = this._backdoor;
    }
    if (this._commValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commValue = this._commValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._lcommValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lcommValue = this._lcommValue;
    }
    if (this._networkIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkIpv6 = this._networkIpv6;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backdoor = undefined;
      this._commValue = undefined;
      this._description = undefined;
      this._lcommValue = undefined;
      this._networkIpv6 = undefined;
      this._routeMap = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backdoor = value.backdoor;
      this._commValue = value.commValue;
      this._description = value.description;
      this._lcommValue = value.lcommValue;
      this._networkIpv6 = value.networkIpv6;
      this._routeMap = value.routeMap;
      this._uuid = value.uuid;
    }
  }

  // backdoor - computed: false, optional: true, required: false
  private _backdoor?: number; 
  public get backdoor() {
    return this.getNumberAttribute('backdoor');
  }
  public set backdoor(value: number) {
    this._backdoor = value;
  }
  public resetBackdoor() {
    this._backdoor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backdoorInput() {
    return this._backdoor;
  }

  // comm_value - computed: false, optional: true, required: false
  private _commValue?: string; 
  public get commValue() {
    return this.getStringAttribute('comm_value');
  }
  public set commValue(value: string) {
    this._commValue = value;
  }
  public resetCommValue() {
    this._commValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commValueInput() {
    return this._commValue;
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

  // lcomm_value - computed: false, optional: true, required: false
  private _lcommValue?: string; 
  public get lcommValue() {
    return this.getStringAttribute('lcomm_value');
  }
  public set lcommValue(value: string) {
    this._lcommValue = value;
  }
  public resetLcommValue() {
    this._lcommValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcommValueInput() {
    return this._lcommValue;
  }

  // network_ipv6 - computed: false, optional: false, required: true
  private _networkIpv6?: string; 
  public get networkIpv6() {
    return this.getStringAttribute('network_ipv6');
  }
  public set networkIpv6(value: string) {
    this._networkIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIpv6Input() {
    return this._networkIpv6;
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
}

export class RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructOutputReference {
    return new RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NetworkMonitorDefault {
  /**
  * default route monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#network_monitor_default RouterBgp#network_monitor_default}
  */
  readonly networkMonitorDefault?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
}

export function routerBgpAddressFamilyIpv6NetworkMonitorDefaultToTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkMonitorDefaultOutputReference | RouterBgpAddressFamilyIpv6NetworkMonitorDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_monitor_default: cdktf.numberToTerraform(struct!.networkMonitorDefault),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerBgpAddressFamilyIpv6NetworkMonitorDefaultToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkMonitorDefaultOutputReference | RouterBgpAddressFamilyIpv6NetworkMonitorDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_monitor_default: {
      value: cdktf.numberToHclTerraform(struct!.networkMonitorDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NetworkMonitorDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6NetworkMonitorDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkMonitorDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMonitorDefault = this._networkMonitorDefault;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NetworkMonitorDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkMonitorDefault = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkMonitorDefault = value.networkMonitorDefault;
      this._uuid = value.uuid;
    }
  }

  // network_monitor_default - computed: false, optional: true, required: false
  private _networkMonitorDefault?: number; 
  public get networkMonitorDefault() {
    return this.getNumberAttribute('network_monitor_default');
  }
  public set networkMonitorDefault(value: number) {
    this._networkMonitorDefault = value;
  }
  public resetNetworkMonitorDefault() {
    this._networkMonitorDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkMonitorDefaultInput() {
    return this._networkMonitorDefault;
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
}
export interface RouterBgpAddressFamilyIpv6NetworkMonitor {
  /**
  * default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#default RouterBgp#default}
  */
  readonly default?: RouterBgpAddressFamilyIpv6NetworkMonitorDefault;
}

export function routerBgpAddressFamilyIpv6NetworkMonitorToTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkMonitorOutputReference | RouterBgpAddressFamilyIpv6NetworkMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: routerBgpAddressFamilyIpv6NetworkMonitorDefaultToTerraform(struct!.default),
  }
}


export function routerBgpAddressFamilyIpv6NetworkMonitorToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkMonitorOutputReference | RouterBgpAddressFamilyIpv6NetworkMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: routerBgpAddressFamilyIpv6NetworkMonitorDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NetworkMonitorDefaultList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NetworkMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6NetworkMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NetworkMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default.internalValue = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default = new RouterBgpAddressFamilyIpv6NetworkMonitorDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: RouterBgpAddressFamilyIpv6NetworkMonitorDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }
}
export interface RouterBgpAddressFamilyIpv6NetworkSynchronization {
  /**
  * Perform IGP synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#network_synchronization RouterBgp#network_synchronization}
  */
  readonly networkSynchronization?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
}

export function routerBgpAddressFamilyIpv6NetworkSynchronizationToTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkSynchronizationOutputReference | RouterBgpAddressFamilyIpv6NetworkSynchronization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_synchronization: cdktf.numberToTerraform(struct!.networkSynchronization),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerBgpAddressFamilyIpv6NetworkSynchronizationToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkSynchronizationOutputReference | RouterBgpAddressFamilyIpv6NetworkSynchronization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_synchronization: {
      value: cdktf.numberToHclTerraform(struct!.networkSynchronization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NetworkSynchronizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6NetworkSynchronization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkSynchronization !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSynchronization = this._networkSynchronization;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NetworkSynchronization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkSynchronization = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkSynchronization = value.networkSynchronization;
      this._uuid = value.uuid;
    }
  }

  // network_synchronization - computed: false, optional: true, required: false
  private _networkSynchronization?: number; 
  public get networkSynchronization() {
    return this.getNumberAttribute('network_synchronization');
  }
  public set networkSynchronization(value: number) {
    this._networkSynchronization = value;
  }
  public resetNetworkSynchronization() {
    this._networkSynchronization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSynchronizationInput() {
    return this._networkSynchronization;
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
}
export interface RouterBgpAddressFamilyIpv6Network {
  /**
  * ipv6_network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ipv6_network_list RouterBgp#ipv6_network_list}
  */
  readonly ipv6NetworkList?: RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStruct[] | cdktf.IResolvable;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#monitor RouterBgp#monitor}
  */
  readonly monitor?: RouterBgpAddressFamilyIpv6NetworkMonitor;
  /**
  * synchronization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#synchronization RouterBgp#synchronization}
  */
  readonly synchronization?: RouterBgpAddressFamilyIpv6NetworkSynchronization;
}

export function routerBgpAddressFamilyIpv6NetworkToTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkOutputReference | RouterBgpAddressFamilyIpv6Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_network_list: cdktf.listMapper(routerBgpAddressFamilyIpv6NetworkIpv6NetworkListStructToTerraform, true)(struct!.ipv6NetworkList),
    monitor: routerBgpAddressFamilyIpv6NetworkMonitorToTerraform(struct!.monitor),
    synchronization: routerBgpAddressFamilyIpv6NetworkSynchronizationToTerraform(struct!.synchronization),
  }
}


export function routerBgpAddressFamilyIpv6NetworkToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkOutputReference | RouterBgpAddressFamilyIpv6Network): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_network_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NetworkIpv6NetworkListStructToHclTerraform, true)(struct!.ipv6NetworkList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructList",
    },
    monitor: {
      value: routerBgpAddressFamilyIpv6NetworkMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NetworkMonitorList",
    },
    synchronization: {
      value: routerBgpAddressFamilyIpv6NetworkSynchronizationToHclTerraform(struct!.synchronization),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NetworkSynchronizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6Network | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6NetworkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NetworkList = this._ipv6NetworkList?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._synchronization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronization = this._synchronization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6Network | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6NetworkList.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._synchronization.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6NetworkList.internalValue = value.ipv6NetworkList;
      this._monitor.internalValue = value.monitor;
      this._synchronization.internalValue = value.synchronization;
    }
  }

  // ipv6_network_list - computed: false, optional: true, required: false
  private _ipv6NetworkList = new RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructList(this, "ipv6_network_list", false);
  public get ipv6NetworkList() {
    return this._ipv6NetworkList;
  }
  public putIpv6NetworkList(value: RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStruct[] | cdktf.IResolvable) {
    this._ipv6NetworkList.internalValue = value;
  }
  public resetIpv6NetworkList() {
    this._ipv6NetworkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetworkListInput() {
    return this._ipv6NetworkList.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new RouterBgpAddressFamilyIpv6NetworkMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: RouterBgpAddressFamilyIpv6NetworkMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // synchronization - computed: false, optional: true, required: false
  private _synchronization = new RouterBgpAddressFamilyIpv6NetworkSynchronizationOutputReference(this, "synchronization");
  public get synchronization() {
    return this._synchronization;
  }
  public putSynchronization(value: RouterBgpAddressFamilyIpv6NetworkSynchronization) {
    this._synchronization.internalValue = value;
  }
  public resetSynchronization() {
    this._synchronization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizationInput() {
    return this._synchronization.internalValue;
  }
}
export interface RouterBgpAddressFamilyIpv6RedistributeConnectedCfg {
  /**
  * Connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#connected RouterBgp#connected}
  */
  readonly connected?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeConnectedCfgToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeConnectedCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeConnectedCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connected: cdktf.numberToTerraform(struct!.connected),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeConnectedCfgToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeConnectedCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeConnectedCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connected: {
      value: cdktf.numberToHclTerraform(struct!.connected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeConnectedCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeConnectedCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connected !== undefined) {
      hasAnyValues = true;
      internalValueResult.connected = this._connected;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeConnectedCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connected = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connected = value.connected;
      this._routeMap = value.routeMap;
    }
  }

  // connected - computed: false, optional: true, required: false
  private _connected?: number; 
  public get connected() {
    return this.getNumberAttribute('connected');
  }
  public set connected(value: number) {
    this._connected = value;
  }
  public resetConnected() {
    this._connected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedInput() {
    return this._connected;
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
}
export interface RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfg {
  /**
  * Floating IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#floating_ip RouterBgp#floating_ip}
  */
  readonly floatingIp?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeFloatingIpCfgToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: cdktf.numberToTerraform(struct!.floatingIp),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeFloatingIpCfgToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip: {
      value: cdktf.numberToHclTerraform(struct!.floatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._floatingIp = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._floatingIp = value.floatingIp;
      this._routeMap = value.routeMap;
    }
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp?: number; 
  public get floatingIp() {
    return this.getNumberAttribute('floating_ip');
  }
  public set floatingIp(value: number) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
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
}
export interface RouterBgpAddressFamilyIpv6RedistributeIpNatCfg {
  /**
  * IP NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ip_nat RouterBgp#ip_nat}
  */
  readonly ipNat?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeIpNatCfgToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeIpNatCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeIpNatCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_nat: cdktf.numberToTerraform(struct!.ipNat),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeIpNatCfgToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeIpNatCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeIpNatCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_nat: {
      value: cdktf.numberToHclTerraform(struct!.ipNat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeIpNatCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeIpNatCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNat = this._ipNat;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeIpNatCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipNat = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipNat = value.ipNat;
      this._routeMap = value.routeMap;
    }
  }

  // ip_nat - computed: false, optional: true, required: false
  private _ipNat?: number; 
  public get ipNat() {
    return this.getNumberAttribute('ip_nat');
  }
  public set ipNat(value: number) {
    this._ipNat = value;
  }
  public resetIpNat() {
    this._ipNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatInput() {
    return this._ipNat;
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
}
export interface RouterBgpAddressFamilyIpv6RedistributeIpNatListCfg {
  /**
  * IP NAT list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ip_nat_list RouterBgp#ip_nat_list}
  */
  readonly ipNatList?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeIpNatListCfgToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeIpNatListCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_nat_list: cdktf.numberToTerraform(struct!.ipNatList),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeIpNatListCfgToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeIpNatListCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_nat_list: {
      value: cdktf.numberToHclTerraform(struct!.ipNatList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeIpNatListCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipNatList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatList = this._ipNatList;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeIpNatListCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipNatList = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipNatList = value.ipNatList;
      this._routeMap = value.routeMap;
    }
  }

  // ip_nat_list - computed: false, optional: true, required: false
  private _ipNatList?: number; 
  public get ipNatList() {
    return this.getNumberAttribute('ip_nat_list');
  }
  public set ipNatList(value: number) {
    this._ipNatList = value;
  }
  public resetIpNatList() {
    this._ipNatList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatListInput() {
    return this._ipNatList;
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
}
export interface RouterBgpAddressFamilyIpv6RedistributeIsisCfg {
  /**
  * ISO IS-IS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#isis RouterBgp#isis}
  */
  readonly isis?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeIsisCfgToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeIsisCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeIsisCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isis: cdktf.numberToTerraform(struct!.isis),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeIsisCfgToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeIsisCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeIsisCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isis: {
      value: cdktf.numberToHclTerraform(struct!.isis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeIsisCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeIsisCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isis !== undefined) {
      hasAnyValues = true;
      internalValueResult.isis = this._isis;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeIsisCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isis = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isis = value.isis;
      this._routeMap = value.routeMap;
    }
  }

  // isis - computed: false, optional: true, required: false
  private _isis?: number; 
  public get isis() {
    return this.getNumberAttribute('isis');
  }
  public set isis(value: number) {
    this._isis = value;
  }
  public resetIsis() {
    this._isis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis;
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
}
export interface RouterBgpAddressFamilyIpv6RedistributeLw4O6Cfg {
  /**
  * LW4O6 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#lw4o6 RouterBgp#lw4o6}
  */
  readonly lw4O6?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeLw4O6CfgToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeLw4O6Cfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lw4o6: cdktf.numberToTerraform(struct!.lw4O6),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeLw4O6CfgToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeLw4O6Cfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lw4o6: {
      value: cdktf.numberToHclTerraform(struct!.lw4O6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeLw4O6Cfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lw4O6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.lw4O6 = this._lw4O6;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeLw4O6Cfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lw4O6 = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lw4O6 = value.lw4O6;
      this._routeMap = value.routeMap;
    }
  }

  // lw4o6 - computed: false, optional: true, required: false
  private _lw4O6?: number; 
  public get lw4O6() {
    return this.getNumberAttribute('lw4o6');
  }
  public set lw4O6(value: number) {
    this._lw4O6 = value;
  }
  public resetLw4O6() {
    this._lw4O6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lw4O6Input() {
    return this._lw4O6;
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
}
export interface RouterBgpAddressFamilyIpv6RedistributeNat64Cfg {
  /**
  * NAT64 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nat64 RouterBgp#nat64}
  */
  readonly nat64?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeNat64CfgToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeNat64CfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeNat64Cfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat64: cdktf.numberToTerraform(struct!.nat64),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeNat64CfgToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeNat64CfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeNat64Cfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat64: {
      value: cdktf.numberToHclTerraform(struct!.nat64),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeNat64CfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeNat64Cfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nat64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64 = this._nat64;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeNat64Cfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nat64 = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nat64 = value.nat64;
      this._routeMap = value.routeMap;
    }
  }

  // nat64 - computed: false, optional: true, required: false
  private _nat64?: number; 
  public get nat64() {
    return this.getNumberAttribute('nat64');
  }
  public set nat64(value: number) {
    this._nat64 = value;
  }
  public resetNat64() {
    this._nat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64Input() {
    return this._nat64;
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
}
export interface RouterBgpAddressFamilyIpv6RedistributeNatMapCfg {
  /**
  * NAT MAP Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nat_map RouterBgp#nat_map}
  */
  readonly natMap?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeNatMapCfgToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeNatMapCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeNatMapCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_map: cdktf.numberToTerraform(struct!.natMap),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeNatMapCfgToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeNatMapCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeNatMapCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_map: {
      value: cdktf.numberToHclTerraform(struct!.natMap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeNatMapCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeNatMapCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.natMap = this._natMap;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeNatMapCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._natMap = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._natMap = value.natMap;
      this._routeMap = value.routeMap;
    }
  }

  // nat_map - computed: false, optional: true, required: false
  private _natMap?: number; 
  public get natMap() {
    return this.getNumberAttribute('nat_map');
  }
  public set natMap(value: number) {
    this._natMap = value;
  }
  public resetNatMap() {
    this._natMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natMapInput() {
    return this._natMap;
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
}
export interface RouterBgpAddressFamilyIpv6RedistributeOspfCfg {
  /**
  * Open Shortest Path First (OSPF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ospf RouterBgp#ospf}
  */
  readonly ospf?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeOspfCfgToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeOspfCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeOspfCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ospf: cdktf.numberToTerraform(struct!.ospf),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeOspfCfgToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeOspfCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeOspfCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ospf: {
      value: cdktf.numberToHclTerraform(struct!.ospf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeOspfCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeOspfCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ospf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeOspfCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ospf = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ospf = value.ospf;
      this._routeMap = value.routeMap;
    }
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf?: number; 
  public get ospf() {
    return this.getNumberAttribute('ospf');
  }
  public set ospf(value: number) {
    this._ospf = value;
  }
  public resetOspf() {
    this._ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf;
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
}
export interface RouterBgpAddressFamilyIpv6RedistributeRipCfg {
  /**
  * Routing Information Protocol (RIP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#rip RouterBgp#rip}
  */
  readonly rip?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeRipCfgToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeRipCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeRipCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rip: cdktf.numberToTerraform(struct!.rip),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeRipCfgToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeRipCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeRipCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rip: {
      value: cdktf.numberToHclTerraform(struct!.rip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeRipCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeRipCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rip !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeRipCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rip = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rip = value.rip;
      this._routeMap = value.routeMap;
    }
  }

  // rip - computed: false, optional: true, required: false
  private _rip?: number; 
  public get rip() {
    return this.getNumberAttribute('rip');
  }
  public set rip(value: number) {
    this._rip = value;
  }
  public resetRip() {
    this._rip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip;
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
}
export interface RouterBgpAddressFamilyIpv6RedistributeStaticCfg {
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
  /**
  * Static routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#static RouterBgp#static}
  */
  readonly static?: number;
}

export function routerBgpAddressFamilyIpv6RedistributeStaticCfgToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeStaticCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeStaticCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    static: cdktf.numberToTerraform(struct!.static),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeStaticCfgToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeStaticCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeStaticCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static: {
      value: cdktf.numberToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeStaticCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeStaticCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeStaticCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routeMap = undefined;
      this._static = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routeMap = value.routeMap;
      this._static = value.static;
    }
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

  // static - computed: false, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }
}
export interface RouterBgpAddressFamilyIpv6RedistributeStaticNatCfg {
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
  /**
  * Static NAT Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#static_nat RouterBgp#static_nat}
  */
  readonly staticNat?: number;
}

export function routerBgpAddressFamilyIpv6RedistributeStaticNatCfgToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeStaticNatCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    static_nat: cdktf.numberToTerraform(struct!.staticNat),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeStaticNatCfgToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeStaticNatCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_nat: {
      value: cdktf.numberToHclTerraform(struct!.staticNat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeStaticNatCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._staticNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNat = this._staticNat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeStaticNatCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routeMap = undefined;
      this._staticNat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routeMap = value.routeMap;
      this._staticNat = value.staticNat;
    }
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

  // static_nat - computed: false, optional: true, required: false
  private _staticNat?: number; 
  public get staticNat() {
    return this.getNumberAttribute('static_nat');
  }
  public set staticNat(value: number) {
    this._staticNat = value;
  }
  public resetStaticNat() {
    this._staticNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatInput() {
    return this._staticNat;
  }
}
export interface RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfg {
  /**
  * Selected Virtual IP (VIP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#only_flagged RouterBgp#only_flagged}
  */
  readonly onlyFlagged?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    only_flagged: cdktf.numberToTerraform(struct!.onlyFlagged),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    only_flagged: {
      value: cdktf.numberToHclTerraform(struct!.onlyFlagged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onlyFlagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyFlagged = this._onlyFlagged;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onlyFlagged = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onlyFlagged = value.onlyFlagged;
      this._routeMap = value.routeMap;
    }
  }

  // only_flagged - computed: false, optional: true, required: false
  private _onlyFlagged?: number; 
  public get onlyFlagged() {
    return this.getNumberAttribute('only_flagged');
  }
  public set onlyFlagged(value: number) {
    this._onlyFlagged = value;
  }
  public resetOnlyFlagged() {
    this._onlyFlagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyFlaggedInput() {
    return this._onlyFlagged;
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
}
export interface RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfg {
  /**
  * Only not flagged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#only_not_flagged RouterBgp#only_not_flagged}
  */
  readonly onlyNotFlagged?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    only_not_flagged: cdktf.numberToTerraform(struct!.onlyNotFlagged),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgOutputReference | RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    only_not_flagged: {
      value: cdktf.numberToHclTerraform(struct!.onlyNotFlagged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onlyNotFlagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyNotFlagged = this._onlyNotFlagged;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onlyNotFlagged = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onlyNotFlagged = value.onlyNotFlagged;
      this._routeMap = value.routeMap;
    }
  }

  // only_not_flagged - computed: false, optional: true, required: false
  private _onlyNotFlagged?: number; 
  public get onlyNotFlagged() {
    return this.getNumberAttribute('only_not_flagged');
  }
  public set onlyNotFlagged(value: number) {
    this._onlyNotFlagged = value;
  }
  public resetOnlyNotFlagged() {
    this._onlyNotFlagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyNotFlaggedInput() {
    return this._onlyNotFlagged;
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
}
export interface RouterBgpAddressFamilyIpv6RedistributeVip {
  /**
  * only_flagged_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#only_flagged_cfg RouterBgp#only_flagged_cfg}
  */
  readonly onlyFlaggedCfg?: RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfg;
  /**
  * only_not_flagged_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#only_not_flagged_cfg RouterBgp#only_not_flagged_cfg}
  */
  readonly onlyNotFlaggedCfg?: RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfg;
}

export function routerBgpAddressFamilyIpv6RedistributeVipToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeVipOutputReference | RouterBgpAddressFamilyIpv6RedistributeVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    only_flagged_cfg: routerBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgToTerraform(struct!.onlyFlaggedCfg),
    only_not_flagged_cfg: routerBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgToTerraform(struct!.onlyNotFlaggedCfg),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeVipToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeVipOutputReference | RouterBgpAddressFamilyIpv6RedistributeVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    only_flagged_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgToHclTerraform(struct!.onlyFlaggedCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgList",
    },
    only_not_flagged_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgToHclTerraform(struct!.onlyNotFlaggedCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onlyFlaggedCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyFlaggedCfg = this._onlyFlaggedCfg?.internalValue;
    }
    if (this._onlyNotFlaggedCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyNotFlaggedCfg = this._onlyNotFlaggedCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onlyFlaggedCfg.internalValue = undefined;
      this._onlyNotFlaggedCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onlyFlaggedCfg.internalValue = value.onlyFlaggedCfg;
      this._onlyNotFlaggedCfg.internalValue = value.onlyNotFlaggedCfg;
    }
  }

  // only_flagged_cfg - computed: false, optional: true, required: false
  private _onlyFlaggedCfg = new RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgOutputReference(this, "only_flagged_cfg");
  public get onlyFlaggedCfg() {
    return this._onlyFlaggedCfg;
  }
  public putOnlyFlaggedCfg(value: RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfg) {
    this._onlyFlaggedCfg.internalValue = value;
  }
  public resetOnlyFlaggedCfg() {
    this._onlyFlaggedCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyFlaggedCfgInput() {
    return this._onlyFlaggedCfg.internalValue;
  }

  // only_not_flagged_cfg - computed: false, optional: true, required: false
  private _onlyNotFlaggedCfg = new RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgOutputReference(this, "only_not_flagged_cfg");
  public get onlyNotFlaggedCfg() {
    return this._onlyNotFlaggedCfg;
  }
  public putOnlyNotFlaggedCfg(value: RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfg) {
    this._onlyNotFlaggedCfg.internalValue = value;
  }
  public resetOnlyNotFlaggedCfg() {
    this._onlyNotFlaggedCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyNotFlaggedCfgInput() {
    return this._onlyNotFlaggedCfg.internalValue;
  }
}
export interface RouterBgpAddressFamilyIpv6Redistribute {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * connected_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#connected_cfg RouterBgp#connected_cfg}
  */
  readonly connectedCfg?: RouterBgpAddressFamilyIpv6RedistributeConnectedCfg;
  /**
  * floating_ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#floating_ip_cfg RouterBgp#floating_ip_cfg}
  */
  readonly floatingIpCfg?: RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfg;
  /**
  * ip_nat_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ip_nat_cfg RouterBgp#ip_nat_cfg}
  */
  readonly ipNatCfg?: RouterBgpAddressFamilyIpv6RedistributeIpNatCfg;
  /**
  * ip_nat_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ip_nat_list_cfg RouterBgp#ip_nat_list_cfg}
  */
  readonly ipNatListCfg?: RouterBgpAddressFamilyIpv6RedistributeIpNatListCfg;
  /**
  * isis_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#isis_cfg RouterBgp#isis_cfg}
  */
  readonly isisCfg?: RouterBgpAddressFamilyIpv6RedistributeIsisCfg;
  /**
  * lw4o6_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#lw4o6_cfg RouterBgp#lw4o6_cfg}
  */
  readonly lw4O6Cfg?: RouterBgpAddressFamilyIpv6RedistributeLw4O6Cfg;
  /**
  * nat64_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nat64_cfg RouterBgp#nat64_cfg}
  */
  readonly nat64Cfg?: RouterBgpAddressFamilyIpv6RedistributeNat64Cfg;
  /**
  * nat_map_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nat_map_cfg RouterBgp#nat_map_cfg}
  */
  readonly natMapCfg?: RouterBgpAddressFamilyIpv6RedistributeNatMapCfg;
  /**
  * ospf_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ospf_cfg RouterBgp#ospf_cfg}
  */
  readonly ospfCfg?: RouterBgpAddressFamilyIpv6RedistributeOspfCfg;
  /**
  * rip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#rip_cfg RouterBgp#rip_cfg}
  */
  readonly ripCfg?: RouterBgpAddressFamilyIpv6RedistributeRipCfg;
  /**
  * static_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#static_cfg RouterBgp#static_cfg}
  */
  readonly staticCfg?: RouterBgpAddressFamilyIpv6RedistributeStaticCfg;
  /**
  * static_nat_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#static_nat_cfg RouterBgp#static_nat_cfg}
  */
  readonly staticNatCfg?: RouterBgpAddressFamilyIpv6RedistributeStaticNatCfg;
  /**
  * vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#vip RouterBgp#vip}
  */
  readonly vip?: RouterBgpAddressFamilyIpv6RedistributeVip;
}

export function routerBgpAddressFamilyIpv6RedistributeToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeOutputReference | RouterBgpAddressFamilyIpv6Redistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    connected_cfg: routerBgpAddressFamilyIpv6RedistributeConnectedCfgToTerraform(struct!.connectedCfg),
    floating_ip_cfg: routerBgpAddressFamilyIpv6RedistributeFloatingIpCfgToTerraform(struct!.floatingIpCfg),
    ip_nat_cfg: routerBgpAddressFamilyIpv6RedistributeIpNatCfgToTerraform(struct!.ipNatCfg),
    ip_nat_list_cfg: routerBgpAddressFamilyIpv6RedistributeIpNatListCfgToTerraform(struct!.ipNatListCfg),
    isis_cfg: routerBgpAddressFamilyIpv6RedistributeIsisCfgToTerraform(struct!.isisCfg),
    lw4o6_cfg: routerBgpAddressFamilyIpv6RedistributeLw4O6CfgToTerraform(struct!.lw4O6Cfg),
    nat64_cfg: routerBgpAddressFamilyIpv6RedistributeNat64CfgToTerraform(struct!.nat64Cfg),
    nat_map_cfg: routerBgpAddressFamilyIpv6RedistributeNatMapCfgToTerraform(struct!.natMapCfg),
    ospf_cfg: routerBgpAddressFamilyIpv6RedistributeOspfCfgToTerraform(struct!.ospfCfg),
    rip_cfg: routerBgpAddressFamilyIpv6RedistributeRipCfgToTerraform(struct!.ripCfg),
    static_cfg: routerBgpAddressFamilyIpv6RedistributeStaticCfgToTerraform(struct!.staticCfg),
    static_nat_cfg: routerBgpAddressFamilyIpv6RedistributeStaticNatCfgToTerraform(struct!.staticNatCfg),
    vip: routerBgpAddressFamilyIpv6RedistributeVipToTerraform(struct!.vip),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeOutputReference | RouterBgpAddressFamilyIpv6Redistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connected_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeConnectedCfgToHclTerraform(struct!.connectedCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeConnectedCfgList",
    },
    floating_ip_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeFloatingIpCfgToHclTerraform(struct!.floatingIpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgList",
    },
    ip_nat_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeIpNatCfgToHclTerraform(struct!.ipNatCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeIpNatCfgList",
    },
    ip_nat_list_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeIpNatListCfgToHclTerraform(struct!.ipNatListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgList",
    },
    isis_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeIsisCfgToHclTerraform(struct!.isisCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeIsisCfgList",
    },
    lw4o6_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeLw4O6CfgToHclTerraform(struct!.lw4O6Cfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgList",
    },
    nat64_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeNat64CfgToHclTerraform(struct!.nat64Cfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeNat64CfgList",
    },
    nat_map_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeNatMapCfgToHclTerraform(struct!.natMapCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeNatMapCfgList",
    },
    ospf_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeOspfCfgToHclTerraform(struct!.ospfCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeOspfCfgList",
    },
    rip_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeRipCfgToHclTerraform(struct!.ripCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeRipCfgList",
    },
    static_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeStaticCfgToHclTerraform(struct!.staticCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeStaticCfgList",
    },
    static_nat_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeStaticNatCfgToHclTerraform(struct!.staticNatCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgList",
    },
    vip: {
      value: routerBgpAddressFamilyIpv6RedistributeVipToHclTerraform(struct!.vip),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeVipList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6Redistribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._connectedCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectedCfg = this._connectedCfg?.internalValue;
    }
    if (this._floatingIpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpCfg = this._floatingIpCfg?.internalValue;
    }
    if (this._ipNatCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatCfg = this._ipNatCfg?.internalValue;
    }
    if (this._ipNatListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatListCfg = this._ipNatListCfg?.internalValue;
    }
    if (this._isisCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisCfg = this._isisCfg?.internalValue;
    }
    if (this._lw4O6Cfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lw4O6Cfg = this._lw4O6Cfg?.internalValue;
    }
    if (this._nat64Cfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64Cfg = this._nat64Cfg?.internalValue;
    }
    if (this._natMapCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natMapCfg = this._natMapCfg?.internalValue;
    }
    if (this._ospfCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfCfg = this._ospfCfg?.internalValue;
    }
    if (this._ripCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ripCfg = this._ripCfg?.internalValue;
    }
    if (this._staticCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticCfg = this._staticCfg?.internalValue;
    }
    if (this._staticNatCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNatCfg = this._staticNatCfg?.internalValue;
    }
    if (this._vip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6Redistribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._connectedCfg.internalValue = undefined;
      this._floatingIpCfg.internalValue = undefined;
      this._ipNatCfg.internalValue = undefined;
      this._ipNatListCfg.internalValue = undefined;
      this._isisCfg.internalValue = undefined;
      this._lw4O6Cfg.internalValue = undefined;
      this._nat64Cfg.internalValue = undefined;
      this._natMapCfg.internalValue = undefined;
      this._ospfCfg.internalValue = undefined;
      this._ripCfg.internalValue = undefined;
      this._staticCfg.internalValue = undefined;
      this._staticNatCfg.internalValue = undefined;
      this._vip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._connectedCfg.internalValue = value.connectedCfg;
      this._floatingIpCfg.internalValue = value.floatingIpCfg;
      this._ipNatCfg.internalValue = value.ipNatCfg;
      this._ipNatListCfg.internalValue = value.ipNatListCfg;
      this._isisCfg.internalValue = value.isisCfg;
      this._lw4O6Cfg.internalValue = value.lw4O6Cfg;
      this._nat64Cfg.internalValue = value.nat64Cfg;
      this._natMapCfg.internalValue = value.natMapCfg;
      this._ospfCfg.internalValue = value.ospfCfg;
      this._ripCfg.internalValue = value.ripCfg;
      this._staticCfg.internalValue = value.staticCfg;
      this._staticNatCfg.internalValue = value.staticNatCfg;
      this._vip.internalValue = value.vip;
    }
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

  // connected_cfg - computed: false, optional: true, required: false
  private _connectedCfg = new RouterBgpAddressFamilyIpv6RedistributeConnectedCfgOutputReference(this, "connected_cfg");
  public get connectedCfg() {
    return this._connectedCfg;
  }
  public putConnectedCfg(value: RouterBgpAddressFamilyIpv6RedistributeConnectedCfg) {
    this._connectedCfg.internalValue = value;
  }
  public resetConnectedCfg() {
    this._connectedCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedCfgInput() {
    return this._connectedCfg.internalValue;
  }

  // floating_ip_cfg - computed: false, optional: true, required: false
  private _floatingIpCfg = new RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgOutputReference(this, "floating_ip_cfg");
  public get floatingIpCfg() {
    return this._floatingIpCfg;
  }
  public putFloatingIpCfg(value: RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfg) {
    this._floatingIpCfg.internalValue = value;
  }
  public resetFloatingIpCfg() {
    this._floatingIpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpCfgInput() {
    return this._floatingIpCfg.internalValue;
  }

  // ip_nat_cfg - computed: false, optional: true, required: false
  private _ipNatCfg = new RouterBgpAddressFamilyIpv6RedistributeIpNatCfgOutputReference(this, "ip_nat_cfg");
  public get ipNatCfg() {
    return this._ipNatCfg;
  }
  public putIpNatCfg(value: RouterBgpAddressFamilyIpv6RedistributeIpNatCfg) {
    this._ipNatCfg.internalValue = value;
  }
  public resetIpNatCfg() {
    this._ipNatCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatCfgInput() {
    return this._ipNatCfg.internalValue;
  }

  // ip_nat_list_cfg - computed: false, optional: true, required: false
  private _ipNatListCfg = new RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgOutputReference(this, "ip_nat_list_cfg");
  public get ipNatListCfg() {
    return this._ipNatListCfg;
  }
  public putIpNatListCfg(value: RouterBgpAddressFamilyIpv6RedistributeIpNatListCfg) {
    this._ipNatListCfg.internalValue = value;
  }
  public resetIpNatListCfg() {
    this._ipNatListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatListCfgInput() {
    return this._ipNatListCfg.internalValue;
  }

  // isis_cfg - computed: false, optional: true, required: false
  private _isisCfg = new RouterBgpAddressFamilyIpv6RedistributeIsisCfgOutputReference(this, "isis_cfg");
  public get isisCfg() {
    return this._isisCfg;
  }
  public putIsisCfg(value: RouterBgpAddressFamilyIpv6RedistributeIsisCfg) {
    this._isisCfg.internalValue = value;
  }
  public resetIsisCfg() {
    this._isisCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisCfgInput() {
    return this._isisCfg.internalValue;
  }

  // lw4o6_cfg - computed: false, optional: true, required: false
  private _lw4O6Cfg = new RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgOutputReference(this, "lw4o6_cfg");
  public get lw4O6Cfg() {
    return this._lw4O6Cfg;
  }
  public putLw4O6Cfg(value: RouterBgpAddressFamilyIpv6RedistributeLw4O6Cfg) {
    this._lw4O6Cfg.internalValue = value;
  }
  public resetLw4O6Cfg() {
    this._lw4O6Cfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lw4O6CfgInput() {
    return this._lw4O6Cfg.internalValue;
  }

  // nat64_cfg - computed: false, optional: true, required: false
  private _nat64Cfg = new RouterBgpAddressFamilyIpv6RedistributeNat64CfgOutputReference(this, "nat64_cfg");
  public get nat64Cfg() {
    return this._nat64Cfg;
  }
  public putNat64Cfg(value: RouterBgpAddressFamilyIpv6RedistributeNat64Cfg) {
    this._nat64Cfg.internalValue = value;
  }
  public resetNat64Cfg() {
    this._nat64Cfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64CfgInput() {
    return this._nat64Cfg.internalValue;
  }

  // nat_map_cfg - computed: false, optional: true, required: false
  private _natMapCfg = new RouterBgpAddressFamilyIpv6RedistributeNatMapCfgOutputReference(this, "nat_map_cfg");
  public get natMapCfg() {
    return this._natMapCfg;
  }
  public putNatMapCfg(value: RouterBgpAddressFamilyIpv6RedistributeNatMapCfg) {
    this._natMapCfg.internalValue = value;
  }
  public resetNatMapCfg() {
    this._natMapCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natMapCfgInput() {
    return this._natMapCfg.internalValue;
  }

  // ospf_cfg - computed: false, optional: true, required: false
  private _ospfCfg = new RouterBgpAddressFamilyIpv6RedistributeOspfCfgOutputReference(this, "ospf_cfg");
  public get ospfCfg() {
    return this._ospfCfg;
  }
  public putOspfCfg(value: RouterBgpAddressFamilyIpv6RedistributeOspfCfg) {
    this._ospfCfg.internalValue = value;
  }
  public resetOspfCfg() {
    this._ospfCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfCfgInput() {
    return this._ospfCfg.internalValue;
  }

  // rip_cfg - computed: false, optional: true, required: false
  private _ripCfg = new RouterBgpAddressFamilyIpv6RedistributeRipCfgOutputReference(this, "rip_cfg");
  public get ripCfg() {
    return this._ripCfg;
  }
  public putRipCfg(value: RouterBgpAddressFamilyIpv6RedistributeRipCfg) {
    this._ripCfg.internalValue = value;
  }
  public resetRipCfg() {
    this._ripCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripCfgInput() {
    return this._ripCfg.internalValue;
  }

  // static_cfg - computed: false, optional: true, required: false
  private _staticCfg = new RouterBgpAddressFamilyIpv6RedistributeStaticCfgOutputReference(this, "static_cfg");
  public get staticCfg() {
    return this._staticCfg;
  }
  public putStaticCfg(value: RouterBgpAddressFamilyIpv6RedistributeStaticCfg) {
    this._staticCfg.internalValue = value;
  }
  public resetStaticCfg() {
    this._staticCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticCfgInput() {
    return this._staticCfg.internalValue;
  }

  // static_nat_cfg - computed: false, optional: true, required: false
  private _staticNatCfg = new RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgOutputReference(this, "static_nat_cfg");
  public get staticNatCfg() {
    return this._staticNatCfg;
  }
  public putStaticNatCfg(value: RouterBgpAddressFamilyIpv6RedistributeStaticNatCfg) {
    this._staticNatCfg.internalValue = value;
  }
  public resetStaticNatCfg() {
    this._staticNatCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatCfgInput() {
    return this._staticNatCfg.internalValue;
  }

  // vip - computed: false, optional: true, required: false
  private _vip = new RouterBgpAddressFamilyIpv6RedistributeVipOutputReference(this, "vip");
  public get vip() {
    return this._vip;
  }
  public putVip(value: RouterBgpAddressFamilyIpv6RedistributeVip) {
    this._vip.internalValue = value;
  }
  public resetVip() {
    this._vip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip.internalValue;
  }
}
export interface RouterBgpAddressFamilyIpv6 {
  /**
  * Enable automatic network number summarization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#auto_summary RouterBgp#auto_summary}
  */
  readonly autoSummary?: number;
  /**
  * Supported BGP multipath numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#maximum_paths_value RouterBgp#maximum_paths_value}
  */
  readonly maximumPathsValue?: number;
  /**
  * Distribute an IPv6 default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#originate RouterBgp#originate}
  */
  readonly originate?: number;
  /**
  * Perform IGP synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#synchronization RouterBgp#synchronization}
  */
  readonly synchronization?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * aggregate_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#aggregate_address_list RouterBgp#aggregate_address_list}
  */
  readonly aggregateAddressList?: RouterBgpAddressFamilyIpv6AggregateAddressListStruct[] | cdktf.IResolvable;
  /**
  * bgp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#bgp RouterBgp#bgp}
  */
  readonly bgp?: RouterBgpAddressFamilyIpv6Bgp;
  /**
  * distance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distance RouterBgp#distance}
  */
  readonly distance?: RouterBgpAddressFamilyIpv6Distance;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor RouterBgp#neighbor}
  */
  readonly neighbor?: RouterBgpAddressFamilyIpv6Neighbor;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#network RouterBgp#network}
  */
  readonly network?: RouterBgpAddressFamilyIpv6Network;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#redistribute RouterBgp#redistribute}
  */
  readonly redistribute?: RouterBgpAddressFamilyIpv6Redistribute;
}

export function routerBgpAddressFamilyIpv6ToTerraform(struct?: RouterBgpAddressFamilyIpv6OutputReference | RouterBgpAddressFamilyIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_summary: cdktf.numberToTerraform(struct!.autoSummary),
    maximum_paths_value: cdktf.numberToTerraform(struct!.maximumPathsValue),
    originate: cdktf.numberToTerraform(struct!.originate),
    synchronization: cdktf.numberToTerraform(struct!.synchronization),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    aggregate_address_list: cdktf.listMapper(routerBgpAddressFamilyIpv6AggregateAddressListStructToTerraform, true)(struct!.aggregateAddressList),
    bgp: routerBgpAddressFamilyIpv6BgpToTerraform(struct!.bgp),
    distance: routerBgpAddressFamilyIpv6DistanceToTerraform(struct!.distance),
    neighbor: routerBgpAddressFamilyIpv6NeighborToTerraform(struct!.neighbor),
    network: routerBgpAddressFamilyIpv6NetworkToTerraform(struct!.network),
    redistribute: routerBgpAddressFamilyIpv6RedistributeToTerraform(struct!.redistribute),
  }
}


export function routerBgpAddressFamilyIpv6ToHclTerraform(struct?: RouterBgpAddressFamilyIpv6OutputReference | RouterBgpAddressFamilyIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_summary: {
      value: cdktf.numberToHclTerraform(struct!.autoSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_paths_value: {
      value: cdktf.numberToHclTerraform(struct!.maximumPathsValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    originate: {
      value: cdktf.numberToHclTerraform(struct!.originate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    synchronization: {
      value: cdktf.numberToHclTerraform(struct!.synchronization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregate_address_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6AggregateAddressListStructToHclTerraform, true)(struct!.aggregateAddressList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6AggregateAddressListStructList",
    },
    bgp: {
      value: routerBgpAddressFamilyIpv6BgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6BgpList",
    },
    distance: {
      value: routerBgpAddressFamilyIpv6DistanceToHclTerraform(struct!.distance),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6DistanceList",
    },
    neighbor: {
      value: routerBgpAddressFamilyIpv6NeighborToHclTerraform(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborList",
    },
    network: {
      value: routerBgpAddressFamilyIpv6NetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NetworkList",
    },
    redistribute: {
      value: routerBgpAddressFamilyIpv6RedistributeToHclTerraform(struct!.redistribute),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSummary = this._autoSummary;
    }
    if (this._maximumPathsValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPathsValue = this._maximumPathsValue;
    }
    if (this._originate !== undefined) {
      hasAnyValues = true;
      internalValueResult.originate = this._originate;
    }
    if (this._synchronization !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronization = this._synchronization;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._aggregateAddressList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateAddressList = this._aggregateAddressList?.internalValue;
    }
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    if (this._distance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance?.internalValue;
    }
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._redistribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistribute = this._redistribute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoSummary = undefined;
      this._maximumPathsValue = undefined;
      this._originate = undefined;
      this._synchronization = undefined;
      this._uuid = undefined;
      this._aggregateAddressList.internalValue = undefined;
      this._bgp.internalValue = undefined;
      this._distance.internalValue = undefined;
      this._neighbor.internalValue = undefined;
      this._network.internalValue = undefined;
      this._redistribute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoSummary = value.autoSummary;
      this._maximumPathsValue = value.maximumPathsValue;
      this._originate = value.originate;
      this._synchronization = value.synchronization;
      this._uuid = value.uuid;
      this._aggregateAddressList.internalValue = value.aggregateAddressList;
      this._bgp.internalValue = value.bgp;
      this._distance.internalValue = value.distance;
      this._neighbor.internalValue = value.neighbor;
      this._network.internalValue = value.network;
      this._redistribute.internalValue = value.redistribute;
    }
  }

  // auto_summary - computed: false, optional: true, required: false
  private _autoSummary?: number; 
  public get autoSummary() {
    return this.getNumberAttribute('auto_summary');
  }
  public set autoSummary(value: number) {
    this._autoSummary = value;
  }
  public resetAutoSummary() {
    this._autoSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummaryInput() {
    return this._autoSummary;
  }

  // maximum_paths_value - computed: false, optional: true, required: false
  private _maximumPathsValue?: number; 
  public get maximumPathsValue() {
    return this.getNumberAttribute('maximum_paths_value');
  }
  public set maximumPathsValue(value: number) {
    this._maximumPathsValue = value;
  }
  public resetMaximumPathsValue() {
    this._maximumPathsValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsValueInput() {
    return this._maximumPathsValue;
  }

  // originate - computed: false, optional: true, required: false
  private _originate?: number; 
  public get originate() {
    return this.getNumberAttribute('originate');
  }
  public set originate(value: number) {
    this._originate = value;
  }
  public resetOriginate() {
    this._originate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originateInput() {
    return this._originate;
  }

  // synchronization - computed: false, optional: true, required: false
  private _synchronization?: number; 
  public get synchronization() {
    return this.getNumberAttribute('synchronization');
  }
  public set synchronization(value: number) {
    this._synchronization = value;
  }
  public resetSynchronization() {
    this._synchronization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizationInput() {
    return this._synchronization;
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

  // aggregate_address_list - computed: false, optional: true, required: false
  private _aggregateAddressList = new RouterBgpAddressFamilyIpv6AggregateAddressListStructList(this, "aggregate_address_list", false);
  public get aggregateAddressList() {
    return this._aggregateAddressList;
  }
  public putAggregateAddressList(value: RouterBgpAddressFamilyIpv6AggregateAddressListStruct[] | cdktf.IResolvable) {
    this._aggregateAddressList.internalValue = value;
  }
  public resetAggregateAddressList() {
    this._aggregateAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateAddressListInput() {
    return this._aggregateAddressList.internalValue;
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new RouterBgpAddressFamilyIpv6BgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: RouterBgpAddressFamilyIpv6Bgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // distance - computed: false, optional: true, required: false
  private _distance = new RouterBgpAddressFamilyIpv6DistanceOutputReference(this, "distance");
  public get distance() {
    return this._distance;
  }
  public putDistance(value: RouterBgpAddressFamilyIpv6Distance) {
    this._distance.internalValue = value;
  }
  public resetDistance() {
    this._distance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance.internalValue;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new RouterBgpAddressFamilyIpv6NeighborOutputReference(this, "neighbor");
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: RouterBgpAddressFamilyIpv6Neighbor) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new RouterBgpAddressFamilyIpv6NetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: RouterBgpAddressFamilyIpv6Network) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute = new RouterBgpAddressFamilyIpv6RedistributeOutputReference(this, "redistribute");
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: RouterBgpAddressFamilyIpv6Redistribute) {
    this._redistribute.internalValue = value;
  }
  public resetRedistribute() {
    this._redistribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute.internalValue;
  }
}
export interface RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapLists {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_rmap_direction RouterBgp#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_route_map RouterBgp#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsToTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsOutputReference {
    return new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStruct {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#activate RouterBgp#activate}
  */
  readonly activate?: number;
  /**
  * Neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_ipv4 RouterBgp#neighbor_ipv4}
  */
  readonly neighborIpv4: string;
  /**
  * 'all': Send Standard, Extended, and Large Community attributes; 'both': Send Standard and Extended Community attributes; 'none': Disable Sending Community attributes; 'standard': Send Standard Community attributes; 'extended': Send Extended Community attributes; 'large': Send Large Community attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#send_community_val RouterBgp#send_community_val}
  */
  readonly sendCommunityVal?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_route_map_lists RouterBgp#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapLists[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructToTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.numberToTerraform(struct!.activate),
    neighbor_ipv4: cdktf.stringToTerraform(struct!.neighborIpv4),
    send_community_val: cdktf.stringToTerraform(struct!.sendCommunityVal),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    neighbor_route_map_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsToTerraform, true)(struct!.neighborRouteMapLists),
  }
}


export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructToHclTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate: {
      value: cdktf.numberToHclTerraform(struct!.activate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.neighborIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community_val: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_route_map_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsToHclTerraform, true)(struct!.neighborRouteMapLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._neighborIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborIpv4 = this._neighborIpv4;
    }
    if (this._sendCommunityVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVal = this._sendCommunityVal;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._neighborRouteMapLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborRouteMapLists = this._neighborRouteMapLists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._neighborIpv4 = undefined;
      this._sendCommunityVal = undefined;
      this._uuid = undefined;
      this._neighborRouteMapLists.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activate = value.activate;
      this._neighborIpv4 = value.neighborIpv4;
      this._sendCommunityVal = value.sendCommunityVal;
      this._uuid = value.uuid;
      this._neighborRouteMapLists.internalValue = value.neighborRouteMapLists;
    }
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

  // neighbor_route_map_lists - computed: false, optional: true, required: false
  private _neighborRouteMapLists = new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapLists[] | cdktf.IResolvable) {
    this._neighborRouteMapLists.internalValue = value;
  }
  public resetNeighborRouteMapLists() {
    this._neighborRouteMapLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborRouteMapListsInput() {
    return this._neighborRouteMapLists.internalValue;
  }
}

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructOutputReference {
    return new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapLists {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_rmap_direction RouterBgp#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_route_map RouterBgp#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsToTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsOutputReference {
    return new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStruct {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#activate RouterBgp#activate}
  */
  readonly activate?: number;
  /**
  * Neighbor IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_ipv6 RouterBgp#neighbor_ipv6}
  */
  readonly neighborIpv6: string;
  /**
  * 'all': Send Standard, Extended, and Large Community attributes; 'both': Send Standard and Extended Community attributes; 'none': Disable Sending Community attributes; 'standard': Send Standard Community attributes; 'extended': Send Extended Community attributes; 'large': Send Large Community attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#send_community_val RouterBgp#send_community_val}
  */
  readonly sendCommunityVal?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_route_map_lists RouterBgp#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapLists[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructToTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.numberToTerraform(struct!.activate),
    neighbor_ipv6: cdktf.stringToTerraform(struct!.neighborIpv6),
    send_community_val: cdktf.stringToTerraform(struct!.sendCommunityVal),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    neighbor_route_map_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsToTerraform, true)(struct!.neighborRouteMapLists),
  }
}


export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructToHclTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate: {
      value: cdktf.numberToHclTerraform(struct!.activate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.neighborIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community_val: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_route_map_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsToHclTerraform, true)(struct!.neighborRouteMapLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._neighborIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborIpv6 = this._neighborIpv6;
    }
    if (this._sendCommunityVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVal = this._sendCommunityVal;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._neighborRouteMapLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborRouteMapLists = this._neighborRouteMapLists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._neighborIpv6 = undefined;
      this._sendCommunityVal = undefined;
      this._uuid = undefined;
      this._neighborRouteMapLists.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activate = value.activate;
      this._neighborIpv6 = value.neighborIpv6;
      this._sendCommunityVal = value.sendCommunityVal;
      this._uuid = value.uuid;
      this._neighborRouteMapLists.internalValue = value.neighborRouteMapLists;
    }
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

  // neighbor_route_map_lists - computed: false, optional: true, required: false
  private _neighborRouteMapLists = new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapLists[] | cdktf.IResolvable) {
    this._neighborRouteMapLists.internalValue = value;
  }
  public resetNeighborRouteMapLists() {
    this._neighborRouteMapLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborRouteMapListsInput() {
    return this._neighborRouteMapLists.internalValue;
  }
}

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructOutputReference {
    return new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6FlowspecNeighbor {
  /**
  * ipv4_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ipv4_neighbor_list RouterBgp#ipv4_neighbor_list}
  */
  readonly ipv4NeighborList?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ipv6_neighbor_list RouterBgp#ipv6_neighbor_list}
  */
  readonly ipv6NeighborList?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStruct[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv6FlowspecNeighborToTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborOutputReference | RouterBgpAddressFamilyIpv6FlowspecNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_neighbor_list: cdktf.listMapper(routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructToTerraform, true)(struct!.ipv4NeighborList),
    ipv6_neighbor_list: cdktf.listMapper(routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructToTerraform, true)(struct!.ipv6NeighborList),
  }
}


export function routerBgpAddressFamilyIpv6FlowspecNeighborToHclTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborOutputReference | RouterBgpAddressFamilyIpv6FlowspecNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructToHclTerraform, true)(struct!.ipv4NeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructList",
    },
    ipv6_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructToHclTerraform, true)(struct!.ipv6NeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6FlowspecNeighborOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6FlowspecNeighbor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4NeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NeighborList = this._ipv4NeighborList?.internalValue;
    }
    if (this._ipv6NeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NeighborList = this._ipv6NeighborList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6FlowspecNeighbor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4NeighborList.internalValue = undefined;
      this._ipv6NeighborList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4NeighborList.internalValue = value.ipv4NeighborList;
      this._ipv6NeighborList.internalValue = value.ipv6NeighborList;
    }
  }

  // ipv4_neighbor_list - computed: false, optional: true, required: false
  private _ipv4NeighborList = new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructList(this, "ipv4_neighbor_list", false);
  public get ipv4NeighborList() {
    return this._ipv4NeighborList;
  }
  public putIpv4NeighborList(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStruct[] | cdktf.IResolvable) {
    this._ipv4NeighborList.internalValue = value;
  }
  public resetIpv4NeighborList() {
    this._ipv4NeighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NeighborListInput() {
    return this._ipv4NeighborList.internalValue;
  }

  // ipv6_neighbor_list - computed: false, optional: true, required: false
  private _ipv6NeighborList = new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructList(this, "ipv6_neighbor_list", false);
  public get ipv6NeighborList() {
    return this._ipv6NeighborList;
  }
  public putIpv6NeighborList(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStruct[] | cdktf.IResolvable) {
    this._ipv6NeighborList.internalValue = value;
  }
  public resetIpv6NeighborList() {
    this._ipv6NeighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NeighborListInput() {
    return this._ipv6NeighborList.internalValue;
  }
}
export interface RouterBgpAddressFamilyIpv6Flowspec {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor RouterBgp#neighbor}
  */
  readonly neighbor?: RouterBgpAddressFamilyIpv6FlowspecNeighbor;
}

export function routerBgpAddressFamilyIpv6FlowspecToTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecOutputReference | RouterBgpAddressFamilyIpv6Flowspec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    neighbor: routerBgpAddressFamilyIpv6FlowspecNeighborToTerraform(struct!.neighbor),
  }
}


export function routerBgpAddressFamilyIpv6FlowspecToHclTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecOutputReference | RouterBgpAddressFamilyIpv6Flowspec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor: {
      value: routerBgpAddressFamilyIpv6FlowspecNeighborToHclTerraform(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6FlowspecNeighborList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6FlowspecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6Flowspec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6Flowspec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._neighbor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._neighbor.internalValue = value.neighbor;
    }
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

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new RouterBgpAddressFamilyIpv6FlowspecNeighborOutputReference(this, "neighbor");
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: RouterBgpAddressFamilyIpv6FlowspecNeighbor) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }
}
export interface RouterBgpAddressFamily {
  /**
  * ipv4_flowspec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ipv4_flowspec RouterBgp#ipv4_flowspec}
  */
  readonly ipv4Flowspec?: RouterBgpAddressFamilyIpv4Flowspec;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ipv6 RouterBgp#ipv6}
  */
  readonly ipv6?: RouterBgpAddressFamilyIpv6;
  /**
  * ipv6_flowspec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ipv6_flowspec RouterBgp#ipv6_flowspec}
  */
  readonly ipv6Flowspec?: RouterBgpAddressFamilyIpv6Flowspec;
}

export function routerBgpAddressFamilyToTerraform(struct?: RouterBgpAddressFamilyOutputReference | RouterBgpAddressFamily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_flowspec: routerBgpAddressFamilyIpv4FlowspecToTerraform(struct!.ipv4Flowspec),
    ipv6: routerBgpAddressFamilyIpv6ToTerraform(struct!.ipv6),
    ipv6_flowspec: routerBgpAddressFamilyIpv6FlowspecToTerraform(struct!.ipv6Flowspec),
  }
}


export function routerBgpAddressFamilyToHclTerraform(struct?: RouterBgpAddressFamilyOutputReference | RouterBgpAddressFamily): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_flowspec: {
      value: routerBgpAddressFamilyIpv4FlowspecToHclTerraform(struct!.ipv4Flowspec),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv4FlowspecList",
    },
    ipv6: {
      value: routerBgpAddressFamilyIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6List",
    },
    ipv6_flowspec: {
      value: routerBgpAddressFamilyIpv6FlowspecToHclTerraform(struct!.ipv6Flowspec),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6FlowspecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamily | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Flowspec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Flowspec = this._ipv4Flowspec?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    if (this._ipv6Flowspec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Flowspec = this._ipv6Flowspec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamily | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Flowspec.internalValue = undefined;
      this._ipv6.internalValue = undefined;
      this._ipv6Flowspec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Flowspec.internalValue = value.ipv4Flowspec;
      this._ipv6.internalValue = value.ipv6;
      this._ipv6Flowspec.internalValue = value.ipv6Flowspec;
    }
  }

  // ipv4_flowspec - computed: false, optional: true, required: false
  private _ipv4Flowspec = new RouterBgpAddressFamilyIpv4FlowspecOutputReference(this, "ipv4_flowspec");
  public get ipv4Flowspec() {
    return this._ipv4Flowspec;
  }
  public putIpv4Flowspec(value: RouterBgpAddressFamilyIpv4Flowspec) {
    this._ipv4Flowspec.internalValue = value;
  }
  public resetIpv4Flowspec() {
    this._ipv4Flowspec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FlowspecInput() {
    return this._ipv4Flowspec.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new RouterBgpAddressFamilyIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: RouterBgpAddressFamilyIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // ipv6_flowspec - computed: false, optional: true, required: false
  private _ipv6Flowspec = new RouterBgpAddressFamilyIpv6FlowspecOutputReference(this, "ipv6_flowspec");
  public get ipv6Flowspec() {
    return this._ipv6Flowspec;
  }
  public putIpv6Flowspec(value: RouterBgpAddressFamilyIpv6Flowspec) {
    this._ipv6Flowspec.internalValue = value;
  }
  public resetIpv6Flowspec() {
    this._ipv6Flowspec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FlowspecInput() {
    return this._ipv6Flowspec.internalValue;
  }
}
export interface RouterBgpAggregateAddressListStruct {
  /**
  * Configure BGP aggregate entries (Aggregate prefix)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#aggregate_address RouterBgp#aggregate_address}
  */
  readonly aggregateAddress?: string;
  /**
  * Generate AS set path information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#as_set RouterBgp#as_set}
  */
  readonly asSet?: number;
  /**
  * Filter more specific routes from updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#summary_only RouterBgp#summary_only}
  */
  readonly summaryOnly?: number;
}

export function routerBgpAggregateAddressListStructToTerraform(struct?: RouterBgpAggregateAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_address: cdktf.stringToTerraform(struct!.aggregateAddress),
    as_set: cdktf.numberToTerraform(struct!.asSet),
    summary_only: cdktf.numberToTerraform(struct!.summaryOnly),
  }
}


export function routerBgpAggregateAddressListStructToHclTerraform(struct?: RouterBgpAggregateAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_address: {
      value: cdktf.stringToHclTerraform(struct!.aggregateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_set: {
      value: cdktf.numberToHclTerraform(struct!.asSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    summary_only: {
      value: cdktf.numberToHclTerraform(struct!.summaryOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAggregateAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAggregateAddressListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateAddress = this._aggregateAddress;
    }
    if (this._asSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSet = this._asSet;
    }
    if (this._summaryOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnly = this._summaryOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAggregateAddressListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateAddress = undefined;
      this._asSet = undefined;
      this._summaryOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateAddress = value.aggregateAddress;
      this._asSet = value.asSet;
      this._summaryOnly = value.summaryOnly;
    }
  }

  // aggregate_address - computed: false, optional: true, required: false
  private _aggregateAddress?: string; 
  public get aggregateAddress() {
    return this.getStringAttribute('aggregate_address');
  }
  public set aggregateAddress(value: string) {
    this._aggregateAddress = value;
  }
  public resetAggregateAddress() {
    this._aggregateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateAddressInput() {
    return this._aggregateAddress;
  }

  // as_set - computed: false, optional: true, required: false
  private _asSet?: number; 
  public get asSet() {
    return this.getNumberAttribute('as_set');
  }
  public set asSet(value: number) {
    this._asSet = value;
  }
  public resetAsSet() {
    this._asSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asSetInput() {
    return this._asSet;
  }

  // summary_only - computed: false, optional: true, required: false
  private _summaryOnly?: number; 
  public get summaryOnly() {
    return this.getNumberAttribute('summary_only');
  }
  public set summaryOnly(value: number) {
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

export class RouterBgpAggregateAddressListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAggregateAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAggregateAddressListStructOutputReference {
    return new RouterBgpAggregateAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpBgpBestpathCfg {
  /**
  * Compare router-id for identical EBGP paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#compare_routerid RouterBgp#compare_routerid}
  */
  readonly compareRouterid?: number;
  /**
  * Ignore as-path length in selecting a route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ignore RouterBgp#ignore}
  */
  readonly ignore?: number;
  /**
  * Treat missing MED as the least preferred one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#missing_as_worst RouterBgp#missing_as_worst}
  */
  readonly missingAsWorst?: number;
  /**
  * To remove rcvd MED attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#remove_recv_med RouterBgp#remove_recv_med}
  */
  readonly removeRecvMed?: number;
  /**
  * To remove send MED attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#remove_send_med RouterBgp#remove_send_med}
  */
  readonly removeSendMed?: number;
}

export function routerBgpBgpBestpathCfgToTerraform(struct?: RouterBgpBgpBestpathCfgOutputReference | RouterBgpBgpBestpathCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compare_routerid: cdktf.numberToTerraform(struct!.compareRouterid),
    ignore: cdktf.numberToTerraform(struct!.ignore),
    missing_as_worst: cdktf.numberToTerraform(struct!.missingAsWorst),
    remove_recv_med: cdktf.numberToTerraform(struct!.removeRecvMed),
    remove_send_med: cdktf.numberToTerraform(struct!.removeSendMed),
  }
}


export function routerBgpBgpBestpathCfgToHclTerraform(struct?: RouterBgpBgpBestpathCfgOutputReference | RouterBgpBgpBestpathCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compare_routerid: {
      value: cdktf.numberToHclTerraform(struct!.compareRouterid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore: {
      value: cdktf.numberToHclTerraform(struct!.ignore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    missing_as_worst: {
      value: cdktf.numberToHclTerraform(struct!.missingAsWorst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_recv_med: {
      value: cdktf.numberToHclTerraform(struct!.removeRecvMed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_send_med: {
      value: cdktf.numberToHclTerraform(struct!.removeSendMed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpBgpBestpathCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpBgpBestpathCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compareRouterid !== undefined) {
      hasAnyValues = true;
      internalValueResult.compareRouterid = this._compareRouterid;
    }
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._missingAsWorst !== undefined) {
      hasAnyValues = true;
      internalValueResult.missingAsWorst = this._missingAsWorst;
    }
    if (this._removeRecvMed !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeRecvMed = this._removeRecvMed;
    }
    if (this._removeSendMed !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeSendMed = this._removeSendMed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpBgpBestpathCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compareRouterid = undefined;
      this._ignore = undefined;
      this._missingAsWorst = undefined;
      this._removeRecvMed = undefined;
      this._removeSendMed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compareRouterid = value.compareRouterid;
      this._ignore = value.ignore;
      this._missingAsWorst = value.missingAsWorst;
      this._removeRecvMed = value.removeRecvMed;
      this._removeSendMed = value.removeSendMed;
    }
  }

  // compare_routerid - computed: false, optional: true, required: false
  private _compareRouterid?: number; 
  public get compareRouterid() {
    return this.getNumberAttribute('compare_routerid');
  }
  public set compareRouterid(value: number) {
    this._compareRouterid = value;
  }
  public resetCompareRouterid() {
    this._compareRouterid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareRouteridInput() {
    return this._compareRouterid;
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore?: number; 
  public get ignore() {
    return this.getNumberAttribute('ignore');
  }
  public set ignore(value: number) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // missing_as_worst - computed: false, optional: true, required: false
  private _missingAsWorst?: number; 
  public get missingAsWorst() {
    return this.getNumberAttribute('missing_as_worst');
  }
  public set missingAsWorst(value: number) {
    this._missingAsWorst = value;
  }
  public resetMissingAsWorst() {
    this._missingAsWorst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingAsWorstInput() {
    return this._missingAsWorst;
  }

  // remove_recv_med - computed: false, optional: true, required: false
  private _removeRecvMed?: number; 
  public get removeRecvMed() {
    return this.getNumberAttribute('remove_recv_med');
  }
  public set removeRecvMed(value: number) {
    this._removeRecvMed = value;
  }
  public resetRemoveRecvMed() {
    this._removeRecvMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeRecvMedInput() {
    return this._removeRecvMed;
  }

  // remove_send_med - computed: false, optional: true, required: false
  private _removeSendMed?: number; 
  public get removeSendMed() {
    return this.getNumberAttribute('remove_send_med');
  }
  public set removeSendMed(value: number) {
    this._removeSendMed = value;
  }
  public resetRemoveSendMed() {
    this._removeSendMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeSendMedInput() {
    return this._removeSendMed;
  }
}
export interface RouterBgpBgpDampeningCfg {
  /**
  * Enable route-flap dampening
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dampening RouterBgp#dampening}
  */
  readonly dampening?: number;
  /**
  * Reachability Half-life time for the penalty(minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dampening_half_time RouterBgp#dampening_half_time}
  */
  readonly dampeningHalfTime?: number;
  /**
  * Maximum duration to suppress a stable route(minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dampening_max_supress RouterBgp#dampening_max_supress}
  */
  readonly dampeningMaxSupress?: number;
  /**
  * Un-reachability Half-life time for the penalty(minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dampening_penalty RouterBgp#dampening_penalty}
  */
  readonly dampeningPenalty?: number;
  /**
  * Value to start reusing a route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dampening_reuse RouterBgp#dampening_reuse}
  */
  readonly dampeningReuse?: number;
  /**
  * Value to start suppressing a route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dampening_supress RouterBgp#dampening_supress}
  */
  readonly dampeningSupress?: number;
  /**
  * Route-map to specify criteria for dampening (Route-map name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpBgpDampeningCfgToTerraform(struct?: RouterBgpBgpDampeningCfgOutputReference | RouterBgpBgpDampeningCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dampening: cdktf.numberToTerraform(struct!.dampening),
    dampening_half_time: cdktf.numberToTerraform(struct!.dampeningHalfTime),
    dampening_max_supress: cdktf.numberToTerraform(struct!.dampeningMaxSupress),
    dampening_penalty: cdktf.numberToTerraform(struct!.dampeningPenalty),
    dampening_reuse: cdktf.numberToTerraform(struct!.dampeningReuse),
    dampening_supress: cdktf.numberToTerraform(struct!.dampeningSupress),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpBgpDampeningCfgToHclTerraform(struct?: RouterBgpBgpDampeningCfgOutputReference | RouterBgpBgpDampeningCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dampening: {
      value: cdktf.numberToHclTerraform(struct!.dampening),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_half_time: {
      value: cdktf.numberToHclTerraform(struct!.dampeningHalfTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_max_supress: {
      value: cdktf.numberToHclTerraform(struct!.dampeningMaxSupress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_penalty: {
      value: cdktf.numberToHclTerraform(struct!.dampeningPenalty),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_reuse: {
      value: cdktf.numberToHclTerraform(struct!.dampeningReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_supress: {
      value: cdktf.numberToHclTerraform(struct!.dampeningSupress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpBgpDampeningCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpBgpDampeningCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dampening !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampening = this._dampening;
    }
    if (this._dampeningHalfTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningHalfTime = this._dampeningHalfTime;
    }
    if (this._dampeningMaxSupress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningMaxSupress = this._dampeningMaxSupress;
    }
    if (this._dampeningPenalty !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningPenalty = this._dampeningPenalty;
    }
    if (this._dampeningReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningReuse = this._dampeningReuse;
    }
    if (this._dampeningSupress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningSupress = this._dampeningSupress;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpBgpDampeningCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dampening = undefined;
      this._dampeningHalfTime = undefined;
      this._dampeningMaxSupress = undefined;
      this._dampeningPenalty = undefined;
      this._dampeningReuse = undefined;
      this._dampeningSupress = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dampening = value.dampening;
      this._dampeningHalfTime = value.dampeningHalfTime;
      this._dampeningMaxSupress = value.dampeningMaxSupress;
      this._dampeningPenalty = value.dampeningPenalty;
      this._dampeningReuse = value.dampeningReuse;
      this._dampeningSupress = value.dampeningSupress;
      this._routeMap = value.routeMap;
    }
  }

  // dampening - computed: false, optional: true, required: false
  private _dampening?: number; 
  public get dampening() {
    return this.getNumberAttribute('dampening');
  }
  public set dampening(value: number) {
    this._dampening = value;
  }
  public resetDampening() {
    this._dampening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningInput() {
    return this._dampening;
  }

  // dampening_half_time - computed: false, optional: true, required: false
  private _dampeningHalfTime?: number; 
  public get dampeningHalfTime() {
    return this.getNumberAttribute('dampening_half_time');
  }
  public set dampeningHalfTime(value: number) {
    this._dampeningHalfTime = value;
  }
  public resetDampeningHalfTime() {
    this._dampeningHalfTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningHalfTimeInput() {
    return this._dampeningHalfTime;
  }

  // dampening_max_supress - computed: false, optional: true, required: false
  private _dampeningMaxSupress?: number; 
  public get dampeningMaxSupress() {
    return this.getNumberAttribute('dampening_max_supress');
  }
  public set dampeningMaxSupress(value: number) {
    this._dampeningMaxSupress = value;
  }
  public resetDampeningMaxSupress() {
    this._dampeningMaxSupress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningMaxSupressInput() {
    return this._dampeningMaxSupress;
  }

  // dampening_penalty - computed: false, optional: true, required: false
  private _dampeningPenalty?: number; 
  public get dampeningPenalty() {
    return this.getNumberAttribute('dampening_penalty');
  }
  public set dampeningPenalty(value: number) {
    this._dampeningPenalty = value;
  }
  public resetDampeningPenalty() {
    this._dampeningPenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningPenaltyInput() {
    return this._dampeningPenalty;
  }

  // dampening_reuse - computed: false, optional: true, required: false
  private _dampeningReuse?: number; 
  public get dampeningReuse() {
    return this.getNumberAttribute('dampening_reuse');
  }
  public set dampeningReuse(value: number) {
    this._dampeningReuse = value;
  }
  public resetDampeningReuse() {
    this._dampeningReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningReuseInput() {
    return this._dampeningReuse;
  }

  // dampening_supress - computed: false, optional: true, required: false
  private _dampeningSupress?: number; 
  public get dampeningSupress() {
    return this.getNumberAttribute('dampening_supress');
  }
  public set dampeningSupress(value: number) {
    this._dampeningSupress = value;
  }
  public resetDampeningSupress() {
    this._dampeningSupress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningSupressInput() {
    return this._dampeningSupress;
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
}
export interface RouterBgpBgp {
  /**
  * Allow comparing MED from different neighbors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#always_compare_med RouterBgp#always_compare_med}
  */
  readonly alwaysCompareMed?: number;
  /**
  * BGP Peer Graceful Restart time in seconds (default 90)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#bgp_restart_time RouterBgp#bgp_restart_time}
  */
  readonly bgpRestartTime?: number;
  /**
  * BGP Graceful Restart Stalepath retention time in seconds (default 360)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#bgp_stalepath_time RouterBgp#bgp_stalepath_time}
  */
  readonly bgpStalepathTime?: number;
  /**
  * Pick the best-MED path among paths advertised from the neighboring AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#deterministic_med RouterBgp#deterministic_med}
  */
  readonly deterministicMed?: number;
  /**
  * Enforce the first AS for EBGP routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#enforce_first_as RouterBgp#enforce_first_as}
  */
  readonly enforceFirstAs?: number;
  /**
  * Immediately reset session if a link to a directly connected external peer goes down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#fast_external_failover RouterBgp#fast_external_failover}
  */
  readonly fastExternalFailover?: number;
  /**
  * Configure BGP BGP Graceful Restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#graceful_restart RouterBgp#graceful_restart}
  */
  readonly gracefulRestart?: number;
  /**
  * Configure default local preference value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#local_preference_value RouterBgp#local_preference_value}
  */
  readonly localPreferenceValue?: number;
  /**
  * Log neighbor up/down and reset reason
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#log_neighbor_changes RouterBgp#log_neighbor_changes}
  */
  readonly logNeighborChanges?: number;
  /**
  * BGP nexthop-tracking status (count)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nexthop_trigger_count RouterBgp#nexthop_trigger_count}
  */
  readonly nexthopTriggerCount?: number;
  /**
  * Override current router identifier (peers will reset) (Manually configured router identifier)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#router_id RouterBgp#router_id}
  */
  readonly routerId?: string;
  /**
  * Configure background scan interval (Scan interval (sec) [Default:60 Disable:0])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#scan_time RouterBgp#scan_time}
  */
  readonly scanTime?: number;
  /**
  * bestpath_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#bestpath_cfg RouterBgp#bestpath_cfg}
  */
  readonly bestpathCfg?: RouterBgpBgpBestpathCfg;
  /**
  * dampening_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dampening_cfg RouterBgp#dampening_cfg}
  */
  readonly dampeningCfg?: RouterBgpBgpDampeningCfg;
}

export function routerBgpBgpToTerraform(struct?: RouterBgpBgpOutputReference | RouterBgpBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_compare_med: cdktf.numberToTerraform(struct!.alwaysCompareMed),
    bgp_restart_time: cdktf.numberToTerraform(struct!.bgpRestartTime),
    bgp_stalepath_time: cdktf.numberToTerraform(struct!.bgpStalepathTime),
    deterministic_med: cdktf.numberToTerraform(struct!.deterministicMed),
    enforce_first_as: cdktf.numberToTerraform(struct!.enforceFirstAs),
    fast_external_failover: cdktf.numberToTerraform(struct!.fastExternalFailover),
    graceful_restart: cdktf.numberToTerraform(struct!.gracefulRestart),
    local_preference_value: cdktf.numberToTerraform(struct!.localPreferenceValue),
    log_neighbor_changes: cdktf.numberToTerraform(struct!.logNeighborChanges),
    nexthop_trigger_count: cdktf.numberToTerraform(struct!.nexthopTriggerCount),
    router_id: cdktf.stringToTerraform(struct!.routerId),
    scan_time: cdktf.numberToTerraform(struct!.scanTime),
    bestpath_cfg: routerBgpBgpBestpathCfgToTerraform(struct!.bestpathCfg),
    dampening_cfg: routerBgpBgpDampeningCfgToTerraform(struct!.dampeningCfg),
  }
}


export function routerBgpBgpToHclTerraform(struct?: RouterBgpBgpOutputReference | RouterBgpBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_compare_med: {
      value: cdktf.numberToHclTerraform(struct!.alwaysCompareMed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgp_restart_time: {
      value: cdktf.numberToHclTerraform(struct!.bgpRestartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgp_stalepath_time: {
      value: cdktf.numberToHclTerraform(struct!.bgpStalepathTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deterministic_med: {
      value: cdktf.numberToHclTerraform(struct!.deterministicMed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforce_first_as: {
      value: cdktf.numberToHclTerraform(struct!.enforceFirstAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_external_failover: {
      value: cdktf.numberToHclTerraform(struct!.fastExternalFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graceful_restart: {
      value: cdktf.numberToHclTerraform(struct!.gracefulRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_preference_value: {
      value: cdktf.numberToHclTerraform(struct!.localPreferenceValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_neighbor_changes: {
      value: cdktf.numberToHclTerraform(struct!.logNeighborChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nexthop_trigger_count: {
      value: cdktf.numberToHclTerraform(struct!.nexthopTriggerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    router_id: {
      value: cdktf.stringToHclTerraform(struct!.routerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_time: {
      value: cdktf.numberToHclTerraform(struct!.scanTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bestpath_cfg: {
      value: routerBgpBgpBestpathCfgToHclTerraform(struct!.bestpathCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpBgpBestpathCfgList",
    },
    dampening_cfg: {
      value: routerBgpBgpDampeningCfgToHclTerraform(struct!.dampeningCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpBgpDampeningCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysCompareMed !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysCompareMed = this._alwaysCompareMed;
    }
    if (this._bgpRestartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpRestartTime = this._bgpRestartTime;
    }
    if (this._bgpStalepathTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpStalepathTime = this._bgpStalepathTime;
    }
    if (this._deterministicMed !== undefined) {
      hasAnyValues = true;
      internalValueResult.deterministicMed = this._deterministicMed;
    }
    if (this._enforceFirstAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceFirstAs = this._enforceFirstAs;
    }
    if (this._fastExternalFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastExternalFailover = this._fastExternalFailover;
    }
    if (this._gracefulRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestart = this._gracefulRestart;
    }
    if (this._localPreferenceValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreferenceValue = this._localPreferenceValue;
    }
    if (this._logNeighborChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.logNeighborChanges = this._logNeighborChanges;
    }
    if (this._nexthopTriggerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopTriggerCount = this._nexthopTriggerCount;
    }
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    if (this._scanTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanTime = this._scanTime;
    }
    if (this._bestpathCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bestpathCfg = this._bestpathCfg?.internalValue;
    }
    if (this._dampeningCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningCfg = this._dampeningCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysCompareMed = undefined;
      this._bgpRestartTime = undefined;
      this._bgpStalepathTime = undefined;
      this._deterministicMed = undefined;
      this._enforceFirstAs = undefined;
      this._fastExternalFailover = undefined;
      this._gracefulRestart = undefined;
      this._localPreferenceValue = undefined;
      this._logNeighborChanges = undefined;
      this._nexthopTriggerCount = undefined;
      this._routerId = undefined;
      this._scanTime = undefined;
      this._bestpathCfg.internalValue = undefined;
      this._dampeningCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysCompareMed = value.alwaysCompareMed;
      this._bgpRestartTime = value.bgpRestartTime;
      this._bgpStalepathTime = value.bgpStalepathTime;
      this._deterministicMed = value.deterministicMed;
      this._enforceFirstAs = value.enforceFirstAs;
      this._fastExternalFailover = value.fastExternalFailover;
      this._gracefulRestart = value.gracefulRestart;
      this._localPreferenceValue = value.localPreferenceValue;
      this._logNeighborChanges = value.logNeighborChanges;
      this._nexthopTriggerCount = value.nexthopTriggerCount;
      this._routerId = value.routerId;
      this._scanTime = value.scanTime;
      this._bestpathCfg.internalValue = value.bestpathCfg;
      this._dampeningCfg.internalValue = value.dampeningCfg;
    }
  }

  // always_compare_med - computed: false, optional: true, required: false
  private _alwaysCompareMed?: number; 
  public get alwaysCompareMed() {
    return this.getNumberAttribute('always_compare_med');
  }
  public set alwaysCompareMed(value: number) {
    this._alwaysCompareMed = value;
  }
  public resetAlwaysCompareMed() {
    this._alwaysCompareMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysCompareMedInput() {
    return this._alwaysCompareMed;
  }

  // bgp_restart_time - computed: false, optional: true, required: false
  private _bgpRestartTime?: number; 
  public get bgpRestartTime() {
    return this.getNumberAttribute('bgp_restart_time');
  }
  public set bgpRestartTime(value: number) {
    this._bgpRestartTime = value;
  }
  public resetBgpRestartTime() {
    this._bgpRestartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRestartTimeInput() {
    return this._bgpRestartTime;
  }

  // bgp_stalepath_time - computed: false, optional: true, required: false
  private _bgpStalepathTime?: number; 
  public get bgpStalepathTime() {
    return this.getNumberAttribute('bgp_stalepath_time');
  }
  public set bgpStalepathTime(value: number) {
    this._bgpStalepathTime = value;
  }
  public resetBgpStalepathTime() {
    this._bgpStalepathTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpStalepathTimeInput() {
    return this._bgpStalepathTime;
  }

  // deterministic_med - computed: false, optional: true, required: false
  private _deterministicMed?: number; 
  public get deterministicMed() {
    return this.getNumberAttribute('deterministic_med');
  }
  public set deterministicMed(value: number) {
    this._deterministicMed = value;
  }
  public resetDeterministicMed() {
    this._deterministicMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deterministicMedInput() {
    return this._deterministicMed;
  }

  // enforce_first_as - computed: false, optional: true, required: false
  private _enforceFirstAs?: number; 
  public get enforceFirstAs() {
    return this.getNumberAttribute('enforce_first_as');
  }
  public set enforceFirstAs(value: number) {
    this._enforceFirstAs = value;
  }
  public resetEnforceFirstAs() {
    this._enforceFirstAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceFirstAsInput() {
    return this._enforceFirstAs;
  }

  // fast_external_failover - computed: false, optional: true, required: false
  private _fastExternalFailover?: number; 
  public get fastExternalFailover() {
    return this.getNumberAttribute('fast_external_failover');
  }
  public set fastExternalFailover(value: number) {
    this._fastExternalFailover = value;
  }
  public resetFastExternalFailover() {
    this._fastExternalFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastExternalFailoverInput() {
    return this._fastExternalFailover;
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

  // local_preference_value - computed: false, optional: true, required: false
  private _localPreferenceValue?: number; 
  public get localPreferenceValue() {
    return this.getNumberAttribute('local_preference_value');
  }
  public set localPreferenceValue(value: number) {
    this._localPreferenceValue = value;
  }
  public resetLocalPreferenceValue() {
    this._localPreferenceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceValueInput() {
    return this._localPreferenceValue;
  }

  // log_neighbor_changes - computed: false, optional: true, required: false
  private _logNeighborChanges?: number; 
  public get logNeighborChanges() {
    return this.getNumberAttribute('log_neighbor_changes');
  }
  public set logNeighborChanges(value: number) {
    this._logNeighborChanges = value;
  }
  public resetLogNeighborChanges() {
    this._logNeighborChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNeighborChangesInput() {
    return this._logNeighborChanges;
  }

  // nexthop_trigger_count - computed: false, optional: true, required: false
  private _nexthopTriggerCount?: number; 
  public get nexthopTriggerCount() {
    return this.getNumberAttribute('nexthop_trigger_count');
  }
  public set nexthopTriggerCount(value: number) {
    this._nexthopTriggerCount = value;
  }
  public resetNexthopTriggerCount() {
    this._nexthopTriggerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopTriggerCountInput() {
    return this._nexthopTriggerCount;
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

  // scan_time - computed: false, optional: true, required: false
  private _scanTime?: number; 
  public get scanTime() {
    return this.getNumberAttribute('scan_time');
  }
  public set scanTime(value: number) {
    this._scanTime = value;
  }
  public resetScanTime() {
    this._scanTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanTimeInput() {
    return this._scanTime;
  }

  // bestpath_cfg - computed: false, optional: true, required: false
  private _bestpathCfg = new RouterBgpBgpBestpathCfgOutputReference(this, "bestpath_cfg");
  public get bestpathCfg() {
    return this._bestpathCfg;
  }
  public putBestpathCfg(value: RouterBgpBgpBestpathCfg) {
    this._bestpathCfg.internalValue = value;
  }
  public resetBestpathCfg() {
    this._bestpathCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestpathCfgInput() {
    return this._bestpathCfg.internalValue;
  }

  // dampening_cfg - computed: false, optional: true, required: false
  private _dampeningCfg = new RouterBgpBgpDampeningCfgOutputReference(this, "dampening_cfg");
  public get dampeningCfg() {
    return this._dampeningCfg;
  }
  public putDampeningCfg(value: RouterBgpBgpDampeningCfg) {
    this._dampeningCfg.internalValue = value;
  }
  public resetDampeningCfg() {
    this._dampeningCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningCfgInput() {
    return this._dampeningCfg.internalValue;
  }
}
export interface RouterBgpDistanceListStruct {
  /**
  * Access list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#acl_str RouterBgp#acl_str}
  */
  readonly aclStr?: string;
  /**
  * Define an administrative distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#admin_distance RouterBgp#admin_distance}
  */
  readonly adminDistance?: number;
  /**
  * Distance for routes external to the AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ext_routes_dist RouterBgp#ext_routes_dist}
  */
  readonly extRoutesDist?: number;
  /**
  * Distance for routes internal to the AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#int_routes_dist RouterBgp#int_routes_dist}
  */
  readonly intRoutesDist?: number;
  /**
  * Distance for local routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#local_routes_dist RouterBgp#local_routes_dist}
  */
  readonly localRoutesDist?: number;
  /**
  * IP source prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#src_prefix RouterBgp#src_prefix}
  */
  readonly srcPrefix?: string;
}

export function routerBgpDistanceListStructToTerraform(struct?: RouterBgpDistanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_str: cdktf.stringToTerraform(struct!.aclStr),
    admin_distance: cdktf.numberToTerraform(struct!.adminDistance),
    ext_routes_dist: cdktf.numberToTerraform(struct!.extRoutesDist),
    int_routes_dist: cdktf.numberToTerraform(struct!.intRoutesDist),
    local_routes_dist: cdktf.numberToTerraform(struct!.localRoutesDist),
    src_prefix: cdktf.stringToTerraform(struct!.srcPrefix),
  }
}


export function routerBgpDistanceListStructToHclTerraform(struct?: RouterBgpDistanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_str: {
      value: cdktf.stringToHclTerraform(struct!.aclStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_distance: {
      value: cdktf.numberToHclTerraform(struct!.adminDistance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ext_routes_dist: {
      value: cdktf.numberToHclTerraform(struct!.extRoutesDist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    int_routes_dist: {
      value: cdktf.numberToHclTerraform(struct!.intRoutesDist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_routes_dist: {
      value: cdktf.numberToHclTerraform(struct!.localRoutesDist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_prefix: {
      value: cdktf.stringToHclTerraform(struct!.srcPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpDistanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpDistanceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclStr = this._aclStr;
    }
    if (this._adminDistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminDistance = this._adminDistance;
    }
    if (this._extRoutesDist !== undefined) {
      hasAnyValues = true;
      internalValueResult.extRoutesDist = this._extRoutesDist;
    }
    if (this._intRoutesDist !== undefined) {
      hasAnyValues = true;
      internalValueResult.intRoutesDist = this._intRoutesDist;
    }
    if (this._localRoutesDist !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRoutesDist = this._localRoutesDist;
    }
    if (this._srcPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPrefix = this._srcPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpDistanceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclStr = undefined;
      this._adminDistance = undefined;
      this._extRoutesDist = undefined;
      this._intRoutesDist = undefined;
      this._localRoutesDist = undefined;
      this._srcPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclStr = value.aclStr;
      this._adminDistance = value.adminDistance;
      this._extRoutesDist = value.extRoutesDist;
      this._intRoutesDist = value.intRoutesDist;
      this._localRoutesDist = value.localRoutesDist;
      this._srcPrefix = value.srcPrefix;
    }
  }

  // acl_str - computed: false, optional: true, required: false
  private _aclStr?: string; 
  public get aclStr() {
    return this.getStringAttribute('acl_str');
  }
  public set aclStr(value: string) {
    this._aclStr = value;
  }
  public resetAclStr() {
    this._aclStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclStrInput() {
    return this._aclStr;
  }

  // admin_distance - computed: false, optional: true, required: false
  private _adminDistance?: number; 
  public get adminDistance() {
    return this.getNumberAttribute('admin_distance');
  }
  public set adminDistance(value: number) {
    this._adminDistance = value;
  }
  public resetAdminDistance() {
    this._adminDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminDistanceInput() {
    return this._adminDistance;
  }

  // ext_routes_dist - computed: false, optional: true, required: false
  private _extRoutesDist?: number; 
  public get extRoutesDist() {
    return this.getNumberAttribute('ext_routes_dist');
  }
  public set extRoutesDist(value: number) {
    this._extRoutesDist = value;
  }
  public resetExtRoutesDist() {
    this._extRoutesDist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extRoutesDistInput() {
    return this._extRoutesDist;
  }

  // int_routes_dist - computed: false, optional: true, required: false
  private _intRoutesDist?: number; 
  public get intRoutesDist() {
    return this.getNumberAttribute('int_routes_dist');
  }
  public set intRoutesDist(value: number) {
    this._intRoutesDist = value;
  }
  public resetIntRoutesDist() {
    this._intRoutesDist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intRoutesDistInput() {
    return this._intRoutesDist;
  }

  // local_routes_dist - computed: false, optional: true, required: false
  private _localRoutesDist?: number; 
  public get localRoutesDist() {
    return this.getNumberAttribute('local_routes_dist');
  }
  public set localRoutesDist(value: number) {
    this._localRoutesDist = value;
  }
  public resetLocalRoutesDist() {
    this._localRoutesDist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRoutesDistInput() {
    return this._localRoutesDist;
  }

  // src_prefix - computed: false, optional: true, required: false
  private _srcPrefix?: string; 
  public get srcPrefix() {
    return this.getStringAttribute('src_prefix');
  }
  public set srcPrefix(value: string) {
    this._srcPrefix = value;
  }
  public resetSrcPrefix() {
    this._srcPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPrefixInput() {
    return this._srcPrefix;
  }
}

export class RouterBgpDistanceListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpDistanceListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpDistanceListStructOutputReference {
    return new RouterBgpDistanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborEthernetNeighborListStruct {
  /**
  * Ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ethernet RouterBgp#ethernet}
  */
  readonly ethernet: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group_name RouterBgp#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#unnumbered RouterBgp#unnumbered}
  */
  readonly unnumbered?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
}

export function routerBgpNeighborEthernetNeighborListStructToTerraform(struct?: RouterBgpNeighborEthernetNeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    peer_group_name: cdktf.stringToTerraform(struct!.peerGroupName),
    unnumbered: cdktf.numberToTerraform(struct!.unnumbered),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerBgpNeighborEthernetNeighborListStructToHclTerraform(struct?: RouterBgpNeighborEthernetNeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_group_name: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unnumbered: {
      value: cdktf.numberToHclTerraform(struct!.unnumbered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborEthernetNeighborListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborEthernetNeighborListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._peerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupName = this._peerGroupName;
    }
    if (this._unnumbered !== undefined) {
      hasAnyValues = true;
      internalValueResult.unnumbered = this._unnumbered;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborEthernetNeighborListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
      this._peerGroupName = undefined;
      this._unnumbered = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
      this._peerGroupName = value.peerGroupName;
      this._unnumbered = value.unnumbered;
      this._uuid = value.uuid;
    }
  }

  // ethernet - computed: false, optional: false, required: true
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
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

  // unnumbered - computed: false, optional: true, required: false
  private _unnumbered?: number; 
  public get unnumbered() {
    return this.getNumberAttribute('unnumbered');
  }
  public set unnumbered(value: number) {
    this._unnumbered = value;
  }
  public resetUnnumbered() {
    this._unnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedInput() {
    return this._unnumbered;
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
}

export class RouterBgpNeighborEthernetNeighborListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborEthernetNeighborListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborEthernetNeighborListStructOutputReference {
    return new RouterBgpNeighborEthernetNeighborListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborIpv4NeighborListDistributeLists {
  /**
  * Filter updates to/from this neighbor (IP standard/extended/named access list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distribute_list RouterBgp#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distribute_list_direction RouterBgp#distribute_list_direction}
  */
  readonly distributeListDirection?: string;
}

export function routerBgpNeighborIpv4NeighborListDistributeListsToTerraform(struct?: RouterBgpNeighborIpv4NeighborListDistributeLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    distribute_list_direction: cdktf.stringToTerraform(struct!.distributeListDirection),
  }
}


export function routerBgpNeighborIpv4NeighborListDistributeListsToHclTerraform(struct?: RouterBgpNeighborIpv4NeighborListDistributeLists | cdktf.IResolvable): any {
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

export class RouterBgpNeighborIpv4NeighborListDistributeListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborIpv4NeighborListDistributeLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpNeighborIpv4NeighborListDistributeLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpNeighborIpv4NeighborListDistributeListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborIpv4NeighborListDistributeLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborIpv4NeighborListDistributeListsOutputReference {
    return new RouterBgpNeighborIpv4NeighborListDistributeListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborIpv4NeighborListNeighborFilterLists {
  /**
  * Establish BGP filters (AS path access-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#filter_list RouterBgp#filter_list}
  */
  readonly filterList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#filter_list_direction RouterBgp#filter_list_direction}
  */
  readonly filterListDirection?: string;
}

export function routerBgpNeighborIpv4NeighborListNeighborFilterListsToTerraform(struct?: RouterBgpNeighborIpv4NeighborListNeighborFilterLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_list: cdktf.stringToTerraform(struct!.filterList),
    filter_list_direction: cdktf.stringToTerraform(struct!.filterListDirection),
  }
}


export function routerBgpNeighborIpv4NeighborListNeighborFilterListsToHclTerraform(struct?: RouterBgpNeighborIpv4NeighborListNeighborFilterLists | cdktf.IResolvable): any {
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

export class RouterBgpNeighborIpv4NeighborListNeighborFilterListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborIpv4NeighborListNeighborFilterLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpNeighborIpv4NeighborListNeighborFilterLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpNeighborIpv4NeighborListNeighborFilterListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborIpv4NeighborListNeighborFilterLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborIpv4NeighborListNeighborFilterListsOutputReference {
    return new RouterBgpNeighborIpv4NeighborListNeighborFilterListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborIpv4NeighborListNeighborPrefixLists {
  /**
  * Filter updates to/from this neighbor (Name of a prefix list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_prefix_list RouterBgp#nbr_prefix_list}
  */
  readonly nbrPrefixList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_prefix_list_direction RouterBgp#nbr_prefix_list_direction}
  */
  readonly nbrPrefixListDirection?: string;
}

export function routerBgpNeighborIpv4NeighborListNeighborPrefixListsToTerraform(struct?: RouterBgpNeighborIpv4NeighborListNeighborPrefixLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_prefix_list: cdktf.stringToTerraform(struct!.nbrPrefixList),
    nbr_prefix_list_direction: cdktf.stringToTerraform(struct!.nbrPrefixListDirection),
  }
}


export function routerBgpNeighborIpv4NeighborListNeighborPrefixListsToHclTerraform(struct?: RouterBgpNeighborIpv4NeighborListNeighborPrefixLists | cdktf.IResolvable): any {
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

export class RouterBgpNeighborIpv4NeighborListNeighborPrefixListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborIpv4NeighborListNeighborPrefixLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpNeighborIpv4NeighborListNeighborPrefixLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpNeighborIpv4NeighborListNeighborPrefixListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborIpv4NeighborListNeighborPrefixLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborIpv4NeighborListNeighborPrefixListsOutputReference {
    return new RouterBgpNeighborIpv4NeighborListNeighborPrefixListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborIpv4NeighborListNeighborRouteMapLists {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_rmap_direction RouterBgp#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_route_map RouterBgp#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpNeighborIpv4NeighborListNeighborRouteMapListsToTerraform(struct?: RouterBgpNeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpNeighborIpv4NeighborListNeighborRouteMapListsToHclTerraform(struct?: RouterBgpNeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
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

export class RouterBgpNeighborIpv4NeighborListNeighborRouteMapListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpNeighborIpv4NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpNeighborIpv4NeighborListNeighborRouteMapListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborIpv4NeighborListNeighborRouteMapLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborIpv4NeighborListNeighborRouteMapListsOutputReference {
    return new RouterBgpNeighborIpv4NeighborListNeighborRouteMapListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborIpv4NeighborListStruct {
  /**
  * Send BGP update to ACOS application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#acos_application_only RouterBgp#acos_application_only}
  */
  readonly acosApplicationOnly?: number;
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#activate RouterBgp#activate}
  */
  readonly activate?: number;
  /**
  * Minimum interval between sending BGP routing updates (time in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#advertisement_interval RouterBgp#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Accept as-path with my AS present in it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#allowas_in RouterBgp#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#allowas_in_count RouterBgp#allowas_in_count}
  */
  readonly allowasInCount?: number;
  /**
  * Minimum interval between sending AS-origination routing updates (time in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#as_origination_interval RouterBgp#as_origination_interval}
  */
  readonly asOriginationInterval?: number;
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#bfd RouterBgp#bfd}
  */
  readonly bfd?: number;
  /**
  * Key String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#bfd_value RouterBgp#bfd_value}
  */
  readonly bfdValue?: string;
  /**
  * Include Neighbor in Established State for Collision Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#collide_established RouterBgp#collide_established}
  */
  readonly collideEstablished?: number;
  /**
  * BGP connect timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#connect RouterBgp#connect}
  */
  readonly connect?: number;
  /**
  * Originate default route to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#default_originate RouterBgp#default_originate}
  */
  readonly defaultOriginate?: number;
  /**
  * Neighbor specific description (Up to 80 characters describing this neighbor)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#description RouterBgp#description}
  */
  readonly description?: string;
  /**
  * BGP per neighbor disallow-infinite-holdtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#disallow_infinite_holdtime RouterBgp#disallow_infinite_holdtime}
  */
  readonly disallowInfiniteHoldtime?: number;
  /**
  * Do not perform capability negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dont_capability_negotiate RouterBgp#dont_capability_negotiate}
  */
  readonly dontCapabilityNegotiate?: number;
  /**
  * Advertise dynamic capability to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dynamic RouterBgp#dynamic}
  */
  readonly dynamic?: number;
  /**
  * Allow EBGP neighbors not on directly connected networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ebgp_multihop RouterBgp#ebgp_multihop}
  */
  readonly ebgpMultihop?: number;
  /**
  * maximum hop count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ebgp_multihop_hop_count RouterBgp#ebgp_multihop_hop_count}
  */
  readonly ebgpMultihopHopCount?: number;
  /**
  * Enforce EBGP neighbors to perform multihop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#enforce_multihop RouterBgp#enforce_multihop}
  */
  readonly enforceMultihop?: number;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ethernet RouterBgp#ethernet}
  */
  readonly ethernet?: number;
  /**
  * enable graceful-restart helper for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#graceful_restart RouterBgp#graceful_restart}
  */
  readonly gracefulRestart?: number;
  /**
  * Allow inbound soft reconfiguration for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#inbound RouterBgp#inbound}
  */
  readonly inbound?: number;
  /**
  * Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#key_id RouterBgp#key_id}
  */
  readonly keyId?: number;
  /**
  * 'md5': md5; 'meticulous-md5': meticulous-md5; 'meticulous-sha1': meticulous-sha1; 'sha1': sha1; 'simple': simple;  (Keyed MD5/Meticulous Keyed MD5/Meticulous Keyed SHA1/Keyed SHA1/Simple Password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#key_type RouterBgp#key_type}
  */
  readonly keyType?: string;
  /**
  * Logical interface (Lif interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#lif RouterBgp#lif}
  */
  readonly lif?: string;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#loopback RouterBgp#loopback}
  */
  readonly loopback?: number;
  /**
  * Maximum number of prefix accept from this peer (maximum no. of prefix limit (various depends on model))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#maximum_prefix RouterBgp#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * threshold-value, 1 to 100 percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#maximum_prefix_thres RouterBgp#maximum_prefix_thres}
  */
  readonly maximumPrefixThres?: number;
  /**
  * Enable multihop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#multihop RouterBgp#multihop}
  */
  readonly multihop?: number;
  /**
  * Specify AS number of BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_remote_as RouterBgp#nbr_remote_as}
  */
  readonly nbrRemoteAs?: string;
  /**
  * Neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_ipv4 RouterBgp#neighbor_ipv4}
  */
  readonly neighborIpv4: string;
  /**
  * Disable the next hop calculation for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#next_hop_self RouterBgp#next_hop_self}
  */
  readonly nextHopSelf?: number;
  /**
  * Override capability negotiation result
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#override_capability RouterBgp#override_capability}
  */
  readonly overrideCapability?: number;
  /**
  * Key String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#pass_value RouterBgp#pass_value}
  */
  readonly passValue?: string;
  /**
  * Don't send open messages to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#passive RouterBgp#passive}
  */
  readonly passive?: number;
  /**
  * Configure peer-group (peer-group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group_name RouterBgp#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * 'both': both; 'receive': receive; 'send': send;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#prefix_list_direction RouterBgp#prefix_list_direction}
  */
  readonly prefixListDirection?: string;
  /**
  * Remove private AS number from outbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#remove_private_as RouterBgp#remove_private_as}
  */
  readonly removePrivateAs?: number;
  /**
  * restart value, 1 to 1440 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#restart_min RouterBgp#restart_min}
  */
  readonly restartMin?: number;
  /**
  * Route-map to specify criteria to originate default (route-map name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
  /**
  * Advertise route-refresh capability to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_refresh RouterBgp#route_refresh}
  */
  readonly routeRefresh?: number;
  /**
  * 'all': Send Standard, Extended, and Large Community attributes; 'both': Send Standard and Extended Community attributes; 'none': Disable Sending Community attributes; 'standard': Send Standard Community attributes; 'extended': Send Extended Community attributes; 'large': Send Large Community attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#send_community_val RouterBgp#send_community_val}
  */
  readonly sendCommunityVal?: string;
  /**
  * Administratively shut down this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#shutdown RouterBgp#shutdown}
  */
  readonly shutdown?: number;
  /**
  * Strict capability negotiation match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#strict_capability_match RouterBgp#strict_capability_match}
  */
  readonly strictCapabilityMatch?: number;
  /**
  * Send BGP update to telemetry db
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#telemetry RouterBgp#telemetry}
  */
  readonly telemetry?: number;
  /**
  * Holdtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#timers_holdtime RouterBgp#timers_holdtime}
  */
  readonly timersHoldtime?: number;
  /**
  * Keepalive interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#timers_keepalive RouterBgp#timers_keepalive}
  */
  readonly timersKeepalive?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#trunk RouterBgp#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#tunnel RouterBgp#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Route-map to selectively unsuppress suppressed routes (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#unsuppress_map RouterBgp#unsuppress_map}
  */
  readonly unsuppressMap?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#update_source_ip RouterBgp#update_source_ip}
  */
  readonly updateSourceIp?: string;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#update_source_ipv6 RouterBgp#update_source_ipv6}
  */
  readonly updateSourceIpv6?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ve RouterBgp#ve}
  */
  readonly ve?: number;
  /**
  * Set default weight for routes from this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#weight RouterBgp#weight}
  */
  readonly weight?: number;
  /**
  * distribute_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distribute_lists RouterBgp#distribute_lists}
  */
  readonly distributeLists?: RouterBgpNeighborIpv4NeighborListDistributeLists[] | cdktf.IResolvable;
  /**
  * neighbor_filter_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_filter_lists RouterBgp#neighbor_filter_lists}
  */
  readonly neighborFilterLists?: RouterBgpNeighborIpv4NeighborListNeighborFilterLists[] | cdktf.IResolvable;
  /**
  * neighbor_prefix_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_prefix_lists RouterBgp#neighbor_prefix_lists}
  */
  readonly neighborPrefixLists?: RouterBgpNeighborIpv4NeighborListNeighborPrefixLists[] | cdktf.IResolvable;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_route_map_lists RouterBgp#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpNeighborIpv4NeighborListNeighborRouteMapLists[] | cdktf.IResolvable;
}

export function routerBgpNeighborIpv4NeighborListStructToTerraform(struct?: RouterBgpNeighborIpv4NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acos_application_only: cdktf.numberToTerraform(struct!.acosApplicationOnly),
    activate: cdktf.numberToTerraform(struct!.activate),
    advertisement_interval: cdktf.numberToTerraform(struct!.advertisementInterval),
    allowas_in: cdktf.numberToTerraform(struct!.allowasIn),
    allowas_in_count: cdktf.numberToTerraform(struct!.allowasInCount),
    as_origination_interval: cdktf.numberToTerraform(struct!.asOriginationInterval),
    bfd: cdktf.numberToTerraform(struct!.bfd),
    bfd_value: cdktf.stringToTerraform(struct!.bfdValue),
    collide_established: cdktf.numberToTerraform(struct!.collideEstablished),
    connect: cdktf.numberToTerraform(struct!.connect),
    default_originate: cdktf.numberToTerraform(struct!.defaultOriginate),
    description: cdktf.stringToTerraform(struct!.description),
    disallow_infinite_holdtime: cdktf.numberToTerraform(struct!.disallowInfiniteHoldtime),
    dont_capability_negotiate: cdktf.numberToTerraform(struct!.dontCapabilityNegotiate),
    dynamic: cdktf.numberToTerraform(struct!.dynamic),
    ebgp_multihop: cdktf.numberToTerraform(struct!.ebgpMultihop),
    ebgp_multihop_hop_count: cdktf.numberToTerraform(struct!.ebgpMultihopHopCount),
    enforce_multihop: cdktf.numberToTerraform(struct!.enforceMultihop),
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    graceful_restart: cdktf.numberToTerraform(struct!.gracefulRestart),
    inbound: cdktf.numberToTerraform(struct!.inbound),
    key_id: cdktf.numberToTerraform(struct!.keyId),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    lif: cdktf.stringToTerraform(struct!.lif),
    loopback: cdktf.numberToTerraform(struct!.loopback),
    maximum_prefix: cdktf.numberToTerraform(struct!.maximumPrefix),
    maximum_prefix_thres: cdktf.numberToTerraform(struct!.maximumPrefixThres),
    multihop: cdktf.numberToTerraform(struct!.multihop),
    nbr_remote_as: cdktf.stringToTerraform(struct!.nbrRemoteAs),
    neighbor_ipv4: cdktf.stringToTerraform(struct!.neighborIpv4),
    next_hop_self: cdktf.numberToTerraform(struct!.nextHopSelf),
    override_capability: cdktf.numberToTerraform(struct!.overrideCapability),
    pass_value: cdktf.stringToTerraform(struct!.passValue),
    passive: cdktf.numberToTerraform(struct!.passive),
    peer_group_name: cdktf.stringToTerraform(struct!.peerGroupName),
    prefix_list_direction: cdktf.stringToTerraform(struct!.prefixListDirection),
    remove_private_as: cdktf.numberToTerraform(struct!.removePrivateAs),
    restart_min: cdktf.numberToTerraform(struct!.restartMin),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    route_refresh: cdktf.numberToTerraform(struct!.routeRefresh),
    send_community_val: cdktf.stringToTerraform(struct!.sendCommunityVal),
    shutdown: cdktf.numberToTerraform(struct!.shutdown),
    strict_capability_match: cdktf.numberToTerraform(struct!.strictCapabilityMatch),
    telemetry: cdktf.numberToTerraform(struct!.telemetry),
    timers_holdtime: cdktf.numberToTerraform(struct!.timersHoldtime),
    timers_keepalive: cdktf.numberToTerraform(struct!.timersKeepalive),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
    update_source_ip: cdktf.stringToTerraform(struct!.updateSourceIp),
    update_source_ipv6: cdktf.stringToTerraform(struct!.updateSourceIpv6),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ve: cdktf.numberToTerraform(struct!.ve),
    weight: cdktf.numberToTerraform(struct!.weight),
    distribute_lists: cdktf.listMapper(routerBgpNeighborIpv4NeighborListDistributeListsToTerraform, true)(struct!.distributeLists),
    neighbor_filter_lists: cdktf.listMapper(routerBgpNeighborIpv4NeighborListNeighborFilterListsToTerraform, true)(struct!.neighborFilterLists),
    neighbor_prefix_lists: cdktf.listMapper(routerBgpNeighborIpv4NeighborListNeighborPrefixListsToTerraform, true)(struct!.neighborPrefixLists),
    neighbor_route_map_lists: cdktf.listMapper(routerBgpNeighborIpv4NeighborListNeighborRouteMapListsToTerraform, true)(struct!.neighborRouteMapLists),
  }
}


export function routerBgpNeighborIpv4NeighborListStructToHclTerraform(struct?: RouterBgpNeighborIpv4NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acos_application_only: {
      value: cdktf.numberToHclTerraform(struct!.acosApplicationOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    activate: {
      value: cdktf.numberToHclTerraform(struct!.activate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    advertisement_interval: {
      value: cdktf.numberToHclTerraform(struct!.advertisementInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in: {
      value: cdktf.numberToHclTerraform(struct!.allowasIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_count: {
      value: cdktf.numberToHclTerraform(struct!.allowasInCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    as_origination_interval: {
      value: cdktf.numberToHclTerraform(struct!.asOriginationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd: {
      value: cdktf.numberToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_value: {
      value: cdktf.stringToHclTerraform(struct!.bfdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collide_established: {
      value: cdktf.numberToHclTerraform(struct!.collideEstablished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect: {
      value: cdktf.numberToHclTerraform(struct!.connect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_originate: {
      value: cdktf.numberToHclTerraform(struct!.defaultOriginate),
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
    disallow_infinite_holdtime: {
      value: cdktf.numberToHclTerraform(struct!.disallowInfiniteHoldtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dont_capability_negotiate: {
      value: cdktf.numberToHclTerraform(struct!.dontCapabilityNegotiate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic: {
      value: cdktf.numberToHclTerraform(struct!.dynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_multihop: {
      value: cdktf.numberToHclTerraform(struct!.ebgpMultihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_multihop_hop_count: {
      value: cdktf.numberToHclTerraform(struct!.ebgpMultihopHopCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforce_multihop: {
      value: cdktf.numberToHclTerraform(struct!.enforceMultihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graceful_restart: {
      value: cdktf.numberToHclTerraform(struct!.gracefulRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound: {
      value: cdktf.numberToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lif: {
      value: cdktf.stringToHclTerraform(struct!.lif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loopback: {
      value: cdktf.numberToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_thres: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThres),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multihop: {
      value: cdktf.numberToHclTerraform(struct!.multihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nbr_remote_as: {
      value: cdktf.stringToHclTerraform(struct!.nbrRemoteAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.neighborIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self: {
      value: cdktf.numberToHclTerraform(struct!.nextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    override_capability: {
      value: cdktf.numberToHclTerraform(struct!.overrideCapability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pass_value: {
      value: cdktf.stringToHclTerraform(struct!.passValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passive: {
      value: cdktf.numberToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_group_name: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.prefixListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as: {
      value: cdktf.numberToHclTerraform(struct!.removePrivateAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restart_min: {
      value: cdktf.numberToHclTerraform(struct!.restartMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_refresh: {
      value: cdktf.numberToHclTerraform(struct!.routeRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_community_val: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shutdown: {
      value: cdktf.numberToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strict_capability_match: {
      value: cdktf.numberToHclTerraform(struct!.strictCapabilityMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telemetry: {
      value: cdktf.numberToHclTerraform(struct!.telemetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timers_holdtime: {
      value: cdktf.numberToHclTerraform(struct!.timersHoldtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timers_keepalive: {
      value: cdktf.numberToHclTerraform(struct!.timersKeepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel: {
      value: cdktf.numberToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsuppress_map: {
      value: cdktf.stringToHclTerraform(struct!.unsuppressMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.updateSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_source_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.updateSourceIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distribute_lists: {
      value: cdktf.listMapperHcl(routerBgpNeighborIpv4NeighborListDistributeListsToHclTerraform, true)(struct!.distributeLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborIpv4NeighborListDistributeListsList",
    },
    neighbor_filter_lists: {
      value: cdktf.listMapperHcl(routerBgpNeighborIpv4NeighborListNeighborFilterListsToHclTerraform, true)(struct!.neighborFilterLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborIpv4NeighborListNeighborFilterListsList",
    },
    neighbor_prefix_lists: {
      value: cdktf.listMapperHcl(routerBgpNeighborIpv4NeighborListNeighborPrefixListsToHclTerraform, true)(struct!.neighborPrefixLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborIpv4NeighborListNeighborPrefixListsList",
    },
    neighbor_route_map_lists: {
      value: cdktf.listMapperHcl(routerBgpNeighborIpv4NeighborListNeighborRouteMapListsToHclTerraform, true)(struct!.neighborRouteMapLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborIpv4NeighborListNeighborRouteMapListsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborIpv4NeighborListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborIpv4NeighborListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acosApplicationOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.acosApplicationOnly = this._acosApplicationOnly;
    }
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._advertisementInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisementInterval = this._advertisementInterval;
    }
    if (this._allowasIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn = this._allowasIn;
    }
    if (this._allowasInCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInCount = this._allowasInCount;
    }
    if (this._asOriginationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOriginationInterval = this._asOriginationInterval;
    }
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._bfdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdValue = this._bfdValue;
    }
    if (this._collideEstablished !== undefined) {
      hasAnyValues = true;
      internalValueResult.collideEstablished = this._collideEstablished;
    }
    if (this._connect !== undefined) {
      hasAnyValues = true;
      internalValueResult.connect = this._connect;
    }
    if (this._defaultOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginate = this._defaultOriginate;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disallowInfiniteHoldtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowInfiniteHoldtime = this._disallowInfiniteHoldtime;
    }
    if (this._dontCapabilityNegotiate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dontCapabilityNegotiate = this._dontCapabilityNegotiate;
    }
    if (this._dynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic;
    }
    if (this._ebgpMultihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihop = this._ebgpMultihop;
    }
    if (this._ebgpMultihopHopCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihopHopCount = this._ebgpMultihopHopCount;
    }
    if (this._enforceMultihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceMultihop = this._enforceMultihop;
    }
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._gracefulRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestart = this._gracefulRestart;
    }
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    if (this._maximumPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix;
    }
    if (this._maximumPrefixThres !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThres = this._maximumPrefixThres;
    }
    if (this._multihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.multihop = this._multihop;
    }
    if (this._nbrRemoteAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbrRemoteAs = this._nbrRemoteAs;
    }
    if (this._neighborIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborIpv4 = this._neighborIpv4;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._overrideCapability !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideCapability = this._overrideCapability;
    }
    if (this._passValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passValue = this._passValue;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._peerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupName = this._peerGroupName;
    }
    if (this._prefixListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListDirection = this._prefixListDirection;
    }
    if (this._removePrivateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs;
    }
    if (this._restartMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartMin = this._restartMin;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._routeRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeRefresh = this._routeRefresh;
    }
    if (this._sendCommunityVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVal = this._sendCommunityVal;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._strictCapabilityMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictCapabilityMatch = this._strictCapabilityMatch;
    }
    if (this._telemetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetry = this._telemetry;
    }
    if (this._timersHoldtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.timersHoldtime = this._timersHoldtime;
    }
    if (this._timersKeepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.timersKeepalive = this._timersKeepalive;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    if (this._unsuppressMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppressMap = this._unsuppressMap;
    }
    if (this._updateSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSourceIp = this._updateSourceIp;
    }
    if (this._updateSourceIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSourceIpv6 = this._updateSourceIpv6;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._distributeLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeLists = this._distributeLists?.internalValue;
    }
    if (this._neighborFilterLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborFilterLists = this._neighborFilterLists?.internalValue;
    }
    if (this._neighborPrefixLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPrefixLists = this._neighborPrefixLists?.internalValue;
    }
    if (this._neighborRouteMapLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborRouteMapLists = this._neighborRouteMapLists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborIpv4NeighborListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acosApplicationOnly = undefined;
      this._activate = undefined;
      this._advertisementInterval = undefined;
      this._allowasIn = undefined;
      this._allowasInCount = undefined;
      this._asOriginationInterval = undefined;
      this._bfd = undefined;
      this._bfdValue = undefined;
      this._collideEstablished = undefined;
      this._connect = undefined;
      this._defaultOriginate = undefined;
      this._description = undefined;
      this._disallowInfiniteHoldtime = undefined;
      this._dontCapabilityNegotiate = undefined;
      this._dynamic = undefined;
      this._ebgpMultihop = undefined;
      this._ebgpMultihopHopCount = undefined;
      this._enforceMultihop = undefined;
      this._ethernet = undefined;
      this._gracefulRestart = undefined;
      this._inbound = undefined;
      this._keyId = undefined;
      this._keyType = undefined;
      this._lif = undefined;
      this._loopback = undefined;
      this._maximumPrefix = undefined;
      this._maximumPrefixThres = undefined;
      this._multihop = undefined;
      this._nbrRemoteAs = undefined;
      this._neighborIpv4 = undefined;
      this._nextHopSelf = undefined;
      this._overrideCapability = undefined;
      this._passValue = undefined;
      this._passive = undefined;
      this._peerGroupName = undefined;
      this._prefixListDirection = undefined;
      this._removePrivateAs = undefined;
      this._restartMin = undefined;
      this._routeMap = undefined;
      this._routeRefresh = undefined;
      this._sendCommunityVal = undefined;
      this._shutdown = undefined;
      this._strictCapabilityMatch = undefined;
      this._telemetry = undefined;
      this._timersHoldtime = undefined;
      this._timersKeepalive = undefined;
      this._trunk = undefined;
      this._tunnel = undefined;
      this._unsuppressMap = undefined;
      this._updateSourceIp = undefined;
      this._updateSourceIpv6 = undefined;
      this._uuid = undefined;
      this._ve = undefined;
      this._weight = undefined;
      this._distributeLists.internalValue = undefined;
      this._neighborFilterLists.internalValue = undefined;
      this._neighborPrefixLists.internalValue = undefined;
      this._neighborRouteMapLists.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acosApplicationOnly = value.acosApplicationOnly;
      this._activate = value.activate;
      this._advertisementInterval = value.advertisementInterval;
      this._allowasIn = value.allowasIn;
      this._allowasInCount = value.allowasInCount;
      this._asOriginationInterval = value.asOriginationInterval;
      this._bfd = value.bfd;
      this._bfdValue = value.bfdValue;
      this._collideEstablished = value.collideEstablished;
      this._connect = value.connect;
      this._defaultOriginate = value.defaultOriginate;
      this._description = value.description;
      this._disallowInfiniteHoldtime = value.disallowInfiniteHoldtime;
      this._dontCapabilityNegotiate = value.dontCapabilityNegotiate;
      this._dynamic = value.dynamic;
      this._ebgpMultihop = value.ebgpMultihop;
      this._ebgpMultihopHopCount = value.ebgpMultihopHopCount;
      this._enforceMultihop = value.enforceMultihop;
      this._ethernet = value.ethernet;
      this._gracefulRestart = value.gracefulRestart;
      this._inbound = value.inbound;
      this._keyId = value.keyId;
      this._keyType = value.keyType;
      this._lif = value.lif;
      this._loopback = value.loopback;
      this._maximumPrefix = value.maximumPrefix;
      this._maximumPrefixThres = value.maximumPrefixThres;
      this._multihop = value.multihop;
      this._nbrRemoteAs = value.nbrRemoteAs;
      this._neighborIpv4 = value.neighborIpv4;
      this._nextHopSelf = value.nextHopSelf;
      this._overrideCapability = value.overrideCapability;
      this._passValue = value.passValue;
      this._passive = value.passive;
      this._peerGroupName = value.peerGroupName;
      this._prefixListDirection = value.prefixListDirection;
      this._removePrivateAs = value.removePrivateAs;
      this._restartMin = value.restartMin;
      this._routeMap = value.routeMap;
      this._routeRefresh = value.routeRefresh;
      this._sendCommunityVal = value.sendCommunityVal;
      this._shutdown = value.shutdown;
      this._strictCapabilityMatch = value.strictCapabilityMatch;
      this._telemetry = value.telemetry;
      this._timersHoldtime = value.timersHoldtime;
      this._timersKeepalive = value.timersKeepalive;
      this._trunk = value.trunk;
      this._tunnel = value.tunnel;
      this._unsuppressMap = value.unsuppressMap;
      this._updateSourceIp = value.updateSourceIp;
      this._updateSourceIpv6 = value.updateSourceIpv6;
      this._uuid = value.uuid;
      this._ve = value.ve;
      this._weight = value.weight;
      this._distributeLists.internalValue = value.distributeLists;
      this._neighborFilterLists.internalValue = value.neighborFilterLists;
      this._neighborPrefixLists.internalValue = value.neighborPrefixLists;
      this._neighborRouteMapLists.internalValue = value.neighborRouteMapLists;
    }
  }

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
  private _distributeLists = new RouterBgpNeighborIpv4NeighborListDistributeListsList(this, "distribute_lists", false);
  public get distributeLists() {
    return this._distributeLists;
  }
  public putDistributeLists(value: RouterBgpNeighborIpv4NeighborListDistributeLists[] | cdktf.IResolvable) {
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
  private _neighborFilterLists = new RouterBgpNeighborIpv4NeighborListNeighborFilterListsList(this, "neighbor_filter_lists", false);
  public get neighborFilterLists() {
    return this._neighborFilterLists;
  }
  public putNeighborFilterLists(value: RouterBgpNeighborIpv4NeighborListNeighborFilterLists[] | cdktf.IResolvable) {
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
  private _neighborPrefixLists = new RouterBgpNeighborIpv4NeighborListNeighborPrefixListsList(this, "neighbor_prefix_lists", false);
  public get neighborPrefixLists() {
    return this._neighborPrefixLists;
  }
  public putNeighborPrefixLists(value: RouterBgpNeighborIpv4NeighborListNeighborPrefixLists[] | cdktf.IResolvable) {
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
  private _neighborRouteMapLists = new RouterBgpNeighborIpv4NeighborListNeighborRouteMapListsList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpNeighborIpv4NeighborListNeighborRouteMapLists[] | cdktf.IResolvable) {
    this._neighborRouteMapLists.internalValue = value;
  }
  public resetNeighborRouteMapLists() {
    this._neighborRouteMapLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborRouteMapListsInput() {
    return this._neighborRouteMapLists.internalValue;
  }
}

export class RouterBgpNeighborIpv4NeighborListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborIpv4NeighborListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborIpv4NeighborListStructOutputReference {
    return new RouterBgpNeighborIpv4NeighborListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborIpv6NeighborListDistributeLists {
  /**
  * Filter updates to/from this neighbor (IP standard/extended/named access list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distribute_list RouterBgp#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distribute_list_direction RouterBgp#distribute_list_direction}
  */
  readonly distributeListDirection?: string;
}

export function routerBgpNeighborIpv6NeighborListDistributeListsToTerraform(struct?: RouterBgpNeighborIpv6NeighborListDistributeLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    distribute_list_direction: cdktf.stringToTerraform(struct!.distributeListDirection),
  }
}


export function routerBgpNeighborIpv6NeighborListDistributeListsToHclTerraform(struct?: RouterBgpNeighborIpv6NeighborListDistributeLists | cdktf.IResolvable): any {
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

export class RouterBgpNeighborIpv6NeighborListDistributeListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborIpv6NeighborListDistributeLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpNeighborIpv6NeighborListDistributeLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpNeighborIpv6NeighborListDistributeListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborIpv6NeighborListDistributeLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborIpv6NeighborListDistributeListsOutputReference {
    return new RouterBgpNeighborIpv6NeighborListDistributeListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborIpv6NeighborListNeighborFilterLists {
  /**
  * Establish BGP filters (AS path access-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#filter_list RouterBgp#filter_list}
  */
  readonly filterList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#filter_list_direction RouterBgp#filter_list_direction}
  */
  readonly filterListDirection?: string;
}

export function routerBgpNeighborIpv6NeighborListNeighborFilterListsToTerraform(struct?: RouterBgpNeighborIpv6NeighborListNeighborFilterLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_list: cdktf.stringToTerraform(struct!.filterList),
    filter_list_direction: cdktf.stringToTerraform(struct!.filterListDirection),
  }
}


export function routerBgpNeighborIpv6NeighborListNeighborFilterListsToHclTerraform(struct?: RouterBgpNeighborIpv6NeighborListNeighborFilterLists | cdktf.IResolvable): any {
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

export class RouterBgpNeighborIpv6NeighborListNeighborFilterListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborIpv6NeighborListNeighborFilterLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpNeighborIpv6NeighborListNeighborFilterLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpNeighborIpv6NeighborListNeighborFilterListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborIpv6NeighborListNeighborFilterLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborIpv6NeighborListNeighborFilterListsOutputReference {
    return new RouterBgpNeighborIpv6NeighborListNeighborFilterListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborIpv6NeighborListNeighborPrefixLists {
  /**
  * Filter updates to/from this neighbor (Name of a prefix list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_prefix_list RouterBgp#nbr_prefix_list}
  */
  readonly nbrPrefixList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_prefix_list_direction RouterBgp#nbr_prefix_list_direction}
  */
  readonly nbrPrefixListDirection?: string;
}

export function routerBgpNeighborIpv6NeighborListNeighborPrefixListsToTerraform(struct?: RouterBgpNeighborIpv6NeighborListNeighborPrefixLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_prefix_list: cdktf.stringToTerraform(struct!.nbrPrefixList),
    nbr_prefix_list_direction: cdktf.stringToTerraform(struct!.nbrPrefixListDirection),
  }
}


export function routerBgpNeighborIpv6NeighborListNeighborPrefixListsToHclTerraform(struct?: RouterBgpNeighborIpv6NeighborListNeighborPrefixLists | cdktf.IResolvable): any {
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

export class RouterBgpNeighborIpv6NeighborListNeighborPrefixListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborIpv6NeighborListNeighborPrefixLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpNeighborIpv6NeighborListNeighborPrefixLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpNeighborIpv6NeighborListNeighborPrefixListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborIpv6NeighborListNeighborPrefixLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborIpv6NeighborListNeighborPrefixListsOutputReference {
    return new RouterBgpNeighborIpv6NeighborListNeighborPrefixListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborIpv6NeighborListNeighborRouteMapLists {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_rmap_direction RouterBgp#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_route_map RouterBgp#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpNeighborIpv6NeighborListNeighborRouteMapListsToTerraform(struct?: RouterBgpNeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpNeighborIpv6NeighborListNeighborRouteMapListsToHclTerraform(struct?: RouterBgpNeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
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

export class RouterBgpNeighborIpv6NeighborListNeighborRouteMapListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpNeighborIpv6NeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpNeighborIpv6NeighborListNeighborRouteMapListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborIpv6NeighborListNeighborRouteMapLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborIpv6NeighborListNeighborRouteMapListsOutputReference {
    return new RouterBgpNeighborIpv6NeighborListNeighborRouteMapListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborIpv6NeighborListStruct {
  /**
  * Send BGP update to ACOS application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#acos_application_only RouterBgp#acos_application_only}
  */
  readonly acosApplicationOnly?: number;
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#activate RouterBgp#activate}
  */
  readonly activate?: number;
  /**
  * Minimum interval between sending BGP routing updates (time in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#advertisement_interval RouterBgp#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Accept as-path with my AS present in it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#allowas_in RouterBgp#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#allowas_in_count RouterBgp#allowas_in_count}
  */
  readonly allowasInCount?: number;
  /**
  * Minimum interval between sending AS-origination routing updates (time in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#as_origination_interval RouterBgp#as_origination_interval}
  */
  readonly asOriginationInterval?: number;
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#bfd RouterBgp#bfd}
  */
  readonly bfd?: number;
  /**
  * Key String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#bfd_value RouterBgp#bfd_value}
  */
  readonly bfdValue?: string;
  /**
  * Include Neighbor in Established State for Collision Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#collide_established RouterBgp#collide_established}
  */
  readonly collideEstablished?: number;
  /**
  * BGP connect timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#connect RouterBgp#connect}
  */
  readonly connect?: number;
  /**
  * Originate default route to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#default_originate RouterBgp#default_originate}
  */
  readonly defaultOriginate?: number;
  /**
  * Neighbor specific description (Up to 80 characters describing this neighbor)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#description RouterBgp#description}
  */
  readonly description?: string;
  /**
  * BGP per neighbor disallow-infinite-holdtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#disallow_infinite_holdtime RouterBgp#disallow_infinite_holdtime}
  */
  readonly disallowInfiniteHoldtime?: number;
  /**
  * Do not perform capability negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dont_capability_negotiate RouterBgp#dont_capability_negotiate}
  */
  readonly dontCapabilityNegotiate?: number;
  /**
  * Advertise dynamic capability to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dynamic RouterBgp#dynamic}
  */
  readonly dynamic?: number;
  /**
  * Allow EBGP neighbors not on directly connected networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ebgp_multihop RouterBgp#ebgp_multihop}
  */
  readonly ebgpMultihop?: number;
  /**
  * maximum hop count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ebgp_multihop_hop_count RouterBgp#ebgp_multihop_hop_count}
  */
  readonly ebgpMultihopHopCount?: number;
  /**
  * Enforce EBGP neighbors to perform multihop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#enforce_multihop RouterBgp#enforce_multihop}
  */
  readonly enforceMultihop?: number;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ethernet RouterBgp#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Advertise extended-nexthop capability to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#extended_nexthop RouterBgp#extended_nexthop}
  */
  readonly extendedNexthop?: number;
  /**
  * enable graceful-restart helper for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#graceful_restart RouterBgp#graceful_restart}
  */
  readonly gracefulRestart?: number;
  /**
  * Allow inbound soft reconfiguration for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#inbound RouterBgp#inbound}
  */
  readonly inbound?: number;
  /**
  * Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#key_id RouterBgp#key_id}
  */
  readonly keyId?: number;
  /**
  * 'md5': md5; 'meticulous-md5': meticulous-md5; 'meticulous-sha1': meticulous-sha1; 'sha1': sha1; 'simple': simple;  (Keyed MD5/Meticulous Keyed MD5/Meticulous Keyed SHA1/Keyed SHA1/Simple Password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#key_type RouterBgp#key_type}
  */
  readonly keyType?: string;
  /**
  * Logical interface (Lif interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#lif RouterBgp#lif}
  */
  readonly lif?: string;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#loopback RouterBgp#loopback}
  */
  readonly loopback?: number;
  /**
  * Maximum number of prefix accept from this peer (maximum no. of prefix limit (various depends on model))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#maximum_prefix RouterBgp#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * threshold-value, 1 to 100 percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#maximum_prefix_thres RouterBgp#maximum_prefix_thres}
  */
  readonly maximumPrefixThres?: number;
  /**
  * Enable multihop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#multihop RouterBgp#multihop}
  */
  readonly multihop?: number;
  /**
  * Specify AS number of BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_remote_as RouterBgp#nbr_remote_as}
  */
  readonly nbrRemoteAs?: string;
  /**
  * Neighbor IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_ipv6 RouterBgp#neighbor_ipv6}
  */
  readonly neighborIpv6: string;
  /**
  * Disable the next hop calculation for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#next_hop_self RouterBgp#next_hop_self}
  */
  readonly nextHopSelf?: number;
  /**
  * Override capability negotiation result
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#override_capability RouterBgp#override_capability}
  */
  readonly overrideCapability?: number;
  /**
  * Key String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#pass_value RouterBgp#pass_value}
  */
  readonly passValue?: string;
  /**
  * Don't send open messages to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#passive RouterBgp#passive}
  */
  readonly passive?: number;
  /**
  * Configure peer-group (peer-group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group_name RouterBgp#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * 'both': both; 'receive': receive; 'send': send;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#prefix_list_direction RouterBgp#prefix_list_direction}
  */
  readonly prefixListDirection?: string;
  /**
  * Remove private AS number from outbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#remove_private_as RouterBgp#remove_private_as}
  */
  readonly removePrivateAs?: number;
  /**
  * restart value, 1 to 1440 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#restart_min RouterBgp#restart_min}
  */
  readonly restartMin?: number;
  /**
  * Route-map to specify criteria to originate default (route-map name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
  /**
  * Advertise route-refresh capability to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_refresh RouterBgp#route_refresh}
  */
  readonly routeRefresh?: number;
  /**
  * 'all': Send Standard, Extended, and Large Community attributes; 'both': Send Standard and Extended Community attributes; 'none': Disable Sending Community attributes; 'standard': Send Standard Community attributes; 'extended': Send Extended Community attributes; 'large': Send Large Community attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#send_community_val RouterBgp#send_community_val}
  */
  readonly sendCommunityVal?: string;
  /**
  * Administratively shut down this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#shutdown RouterBgp#shutdown}
  */
  readonly shutdown?: number;
  /**
  * Strict capability negotiation match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#strict_capability_match RouterBgp#strict_capability_match}
  */
  readonly strictCapabilityMatch?: number;
  /**
  * Send BGP update to telemetry db
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#telemetry RouterBgp#telemetry}
  */
  readonly telemetry?: number;
  /**
  * Holdtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#timers_holdtime RouterBgp#timers_holdtime}
  */
  readonly timersHoldtime?: number;
  /**
  * Keepalive interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#timers_keepalive RouterBgp#timers_keepalive}
  */
  readonly timersKeepalive?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#trunk RouterBgp#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#tunnel RouterBgp#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Route-map to selectively unsuppress suppressed routes (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#unsuppress_map RouterBgp#unsuppress_map}
  */
  readonly unsuppressMap?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#update_source_ip RouterBgp#update_source_ip}
  */
  readonly updateSourceIp?: string;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#update_source_ipv6 RouterBgp#update_source_ipv6}
  */
  readonly updateSourceIpv6?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ve RouterBgp#ve}
  */
  readonly ve?: number;
  /**
  * Set default weight for routes from this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#weight RouterBgp#weight}
  */
  readonly weight?: number;
  /**
  * distribute_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#distribute_lists RouterBgp#distribute_lists}
  */
  readonly distributeLists?: RouterBgpNeighborIpv6NeighborListDistributeLists[] | cdktf.IResolvable;
  /**
  * neighbor_filter_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_filter_lists RouterBgp#neighbor_filter_lists}
  */
  readonly neighborFilterLists?: RouterBgpNeighborIpv6NeighborListNeighborFilterLists[] | cdktf.IResolvable;
  /**
  * neighbor_prefix_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_prefix_lists RouterBgp#neighbor_prefix_lists}
  */
  readonly neighborPrefixLists?: RouterBgpNeighborIpv6NeighborListNeighborPrefixLists[] | cdktf.IResolvable;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_route_map_lists RouterBgp#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpNeighborIpv6NeighborListNeighborRouteMapLists[] | cdktf.IResolvable;
}

export function routerBgpNeighborIpv6NeighborListStructToTerraform(struct?: RouterBgpNeighborIpv6NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acos_application_only: cdktf.numberToTerraform(struct!.acosApplicationOnly),
    activate: cdktf.numberToTerraform(struct!.activate),
    advertisement_interval: cdktf.numberToTerraform(struct!.advertisementInterval),
    allowas_in: cdktf.numberToTerraform(struct!.allowasIn),
    allowas_in_count: cdktf.numberToTerraform(struct!.allowasInCount),
    as_origination_interval: cdktf.numberToTerraform(struct!.asOriginationInterval),
    bfd: cdktf.numberToTerraform(struct!.bfd),
    bfd_value: cdktf.stringToTerraform(struct!.bfdValue),
    collide_established: cdktf.numberToTerraform(struct!.collideEstablished),
    connect: cdktf.numberToTerraform(struct!.connect),
    default_originate: cdktf.numberToTerraform(struct!.defaultOriginate),
    description: cdktf.stringToTerraform(struct!.description),
    disallow_infinite_holdtime: cdktf.numberToTerraform(struct!.disallowInfiniteHoldtime),
    dont_capability_negotiate: cdktf.numberToTerraform(struct!.dontCapabilityNegotiate),
    dynamic: cdktf.numberToTerraform(struct!.dynamic),
    ebgp_multihop: cdktf.numberToTerraform(struct!.ebgpMultihop),
    ebgp_multihop_hop_count: cdktf.numberToTerraform(struct!.ebgpMultihopHopCount),
    enforce_multihop: cdktf.numberToTerraform(struct!.enforceMultihop),
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    extended_nexthop: cdktf.numberToTerraform(struct!.extendedNexthop),
    graceful_restart: cdktf.numberToTerraform(struct!.gracefulRestart),
    inbound: cdktf.numberToTerraform(struct!.inbound),
    key_id: cdktf.numberToTerraform(struct!.keyId),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    lif: cdktf.stringToTerraform(struct!.lif),
    loopback: cdktf.numberToTerraform(struct!.loopback),
    maximum_prefix: cdktf.numberToTerraform(struct!.maximumPrefix),
    maximum_prefix_thres: cdktf.numberToTerraform(struct!.maximumPrefixThres),
    multihop: cdktf.numberToTerraform(struct!.multihop),
    nbr_remote_as: cdktf.stringToTerraform(struct!.nbrRemoteAs),
    neighbor_ipv6: cdktf.stringToTerraform(struct!.neighborIpv6),
    next_hop_self: cdktf.numberToTerraform(struct!.nextHopSelf),
    override_capability: cdktf.numberToTerraform(struct!.overrideCapability),
    pass_value: cdktf.stringToTerraform(struct!.passValue),
    passive: cdktf.numberToTerraform(struct!.passive),
    peer_group_name: cdktf.stringToTerraform(struct!.peerGroupName),
    prefix_list_direction: cdktf.stringToTerraform(struct!.prefixListDirection),
    remove_private_as: cdktf.numberToTerraform(struct!.removePrivateAs),
    restart_min: cdktf.numberToTerraform(struct!.restartMin),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    route_refresh: cdktf.numberToTerraform(struct!.routeRefresh),
    send_community_val: cdktf.stringToTerraform(struct!.sendCommunityVal),
    shutdown: cdktf.numberToTerraform(struct!.shutdown),
    strict_capability_match: cdktf.numberToTerraform(struct!.strictCapabilityMatch),
    telemetry: cdktf.numberToTerraform(struct!.telemetry),
    timers_holdtime: cdktf.numberToTerraform(struct!.timersHoldtime),
    timers_keepalive: cdktf.numberToTerraform(struct!.timersKeepalive),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
    update_source_ip: cdktf.stringToTerraform(struct!.updateSourceIp),
    update_source_ipv6: cdktf.stringToTerraform(struct!.updateSourceIpv6),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ve: cdktf.numberToTerraform(struct!.ve),
    weight: cdktf.numberToTerraform(struct!.weight),
    distribute_lists: cdktf.listMapper(routerBgpNeighborIpv6NeighborListDistributeListsToTerraform, true)(struct!.distributeLists),
    neighbor_filter_lists: cdktf.listMapper(routerBgpNeighborIpv6NeighborListNeighborFilterListsToTerraform, true)(struct!.neighborFilterLists),
    neighbor_prefix_lists: cdktf.listMapper(routerBgpNeighborIpv6NeighborListNeighborPrefixListsToTerraform, true)(struct!.neighborPrefixLists),
    neighbor_route_map_lists: cdktf.listMapper(routerBgpNeighborIpv6NeighborListNeighborRouteMapListsToTerraform, true)(struct!.neighborRouteMapLists),
  }
}


export function routerBgpNeighborIpv6NeighborListStructToHclTerraform(struct?: RouterBgpNeighborIpv6NeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acos_application_only: {
      value: cdktf.numberToHclTerraform(struct!.acosApplicationOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    activate: {
      value: cdktf.numberToHclTerraform(struct!.activate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    advertisement_interval: {
      value: cdktf.numberToHclTerraform(struct!.advertisementInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in: {
      value: cdktf.numberToHclTerraform(struct!.allowasIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_count: {
      value: cdktf.numberToHclTerraform(struct!.allowasInCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    as_origination_interval: {
      value: cdktf.numberToHclTerraform(struct!.asOriginationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd: {
      value: cdktf.numberToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_value: {
      value: cdktf.stringToHclTerraform(struct!.bfdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collide_established: {
      value: cdktf.numberToHclTerraform(struct!.collideEstablished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect: {
      value: cdktf.numberToHclTerraform(struct!.connect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_originate: {
      value: cdktf.numberToHclTerraform(struct!.defaultOriginate),
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
    disallow_infinite_holdtime: {
      value: cdktf.numberToHclTerraform(struct!.disallowInfiniteHoldtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dont_capability_negotiate: {
      value: cdktf.numberToHclTerraform(struct!.dontCapabilityNegotiate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic: {
      value: cdktf.numberToHclTerraform(struct!.dynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_multihop: {
      value: cdktf.numberToHclTerraform(struct!.ebgpMultihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_multihop_hop_count: {
      value: cdktf.numberToHclTerraform(struct!.ebgpMultihopHopCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforce_multihop: {
      value: cdktf.numberToHclTerraform(struct!.enforceMultihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extended_nexthop: {
      value: cdktf.numberToHclTerraform(struct!.extendedNexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graceful_restart: {
      value: cdktf.numberToHclTerraform(struct!.gracefulRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound: {
      value: cdktf.numberToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lif: {
      value: cdktf.stringToHclTerraform(struct!.lif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loopback: {
      value: cdktf.numberToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_thres: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThres),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multihop: {
      value: cdktf.numberToHclTerraform(struct!.multihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nbr_remote_as: {
      value: cdktf.stringToHclTerraform(struct!.nbrRemoteAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.neighborIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self: {
      value: cdktf.numberToHclTerraform(struct!.nextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    override_capability: {
      value: cdktf.numberToHclTerraform(struct!.overrideCapability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pass_value: {
      value: cdktf.stringToHclTerraform(struct!.passValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passive: {
      value: cdktf.numberToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_group_name: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.prefixListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as: {
      value: cdktf.numberToHclTerraform(struct!.removePrivateAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restart_min: {
      value: cdktf.numberToHclTerraform(struct!.restartMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_refresh: {
      value: cdktf.numberToHclTerraform(struct!.routeRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_community_val: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shutdown: {
      value: cdktf.numberToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strict_capability_match: {
      value: cdktf.numberToHclTerraform(struct!.strictCapabilityMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telemetry: {
      value: cdktf.numberToHclTerraform(struct!.telemetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timers_holdtime: {
      value: cdktf.numberToHclTerraform(struct!.timersHoldtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timers_keepalive: {
      value: cdktf.numberToHclTerraform(struct!.timersKeepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel: {
      value: cdktf.numberToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsuppress_map: {
      value: cdktf.stringToHclTerraform(struct!.unsuppressMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.updateSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_source_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.updateSourceIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distribute_lists: {
      value: cdktf.listMapperHcl(routerBgpNeighborIpv6NeighborListDistributeListsToHclTerraform, true)(struct!.distributeLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborIpv6NeighborListDistributeListsList",
    },
    neighbor_filter_lists: {
      value: cdktf.listMapperHcl(routerBgpNeighborIpv6NeighborListNeighborFilterListsToHclTerraform, true)(struct!.neighborFilterLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborIpv6NeighborListNeighborFilterListsList",
    },
    neighbor_prefix_lists: {
      value: cdktf.listMapperHcl(routerBgpNeighborIpv6NeighborListNeighborPrefixListsToHclTerraform, true)(struct!.neighborPrefixLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborIpv6NeighborListNeighborPrefixListsList",
    },
    neighbor_route_map_lists: {
      value: cdktf.listMapperHcl(routerBgpNeighborIpv6NeighborListNeighborRouteMapListsToHclTerraform, true)(struct!.neighborRouteMapLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborIpv6NeighborListNeighborRouteMapListsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborIpv6NeighborListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborIpv6NeighborListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acosApplicationOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.acosApplicationOnly = this._acosApplicationOnly;
    }
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._advertisementInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisementInterval = this._advertisementInterval;
    }
    if (this._allowasIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn = this._allowasIn;
    }
    if (this._allowasInCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInCount = this._allowasInCount;
    }
    if (this._asOriginationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOriginationInterval = this._asOriginationInterval;
    }
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._bfdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdValue = this._bfdValue;
    }
    if (this._collideEstablished !== undefined) {
      hasAnyValues = true;
      internalValueResult.collideEstablished = this._collideEstablished;
    }
    if (this._connect !== undefined) {
      hasAnyValues = true;
      internalValueResult.connect = this._connect;
    }
    if (this._defaultOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginate = this._defaultOriginate;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disallowInfiniteHoldtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowInfiniteHoldtime = this._disallowInfiniteHoldtime;
    }
    if (this._dontCapabilityNegotiate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dontCapabilityNegotiate = this._dontCapabilityNegotiate;
    }
    if (this._dynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic;
    }
    if (this._ebgpMultihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihop = this._ebgpMultihop;
    }
    if (this._ebgpMultihopHopCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihopHopCount = this._ebgpMultihopHopCount;
    }
    if (this._enforceMultihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceMultihop = this._enforceMultihop;
    }
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._extendedNexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedNexthop = this._extendedNexthop;
    }
    if (this._gracefulRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestart = this._gracefulRestart;
    }
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    if (this._maximumPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix;
    }
    if (this._maximumPrefixThres !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThres = this._maximumPrefixThres;
    }
    if (this._multihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.multihop = this._multihop;
    }
    if (this._nbrRemoteAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbrRemoteAs = this._nbrRemoteAs;
    }
    if (this._neighborIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborIpv6 = this._neighborIpv6;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._overrideCapability !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideCapability = this._overrideCapability;
    }
    if (this._passValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passValue = this._passValue;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._peerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupName = this._peerGroupName;
    }
    if (this._prefixListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListDirection = this._prefixListDirection;
    }
    if (this._removePrivateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs;
    }
    if (this._restartMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartMin = this._restartMin;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._routeRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeRefresh = this._routeRefresh;
    }
    if (this._sendCommunityVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVal = this._sendCommunityVal;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._strictCapabilityMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictCapabilityMatch = this._strictCapabilityMatch;
    }
    if (this._telemetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetry = this._telemetry;
    }
    if (this._timersHoldtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.timersHoldtime = this._timersHoldtime;
    }
    if (this._timersKeepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.timersKeepalive = this._timersKeepalive;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    if (this._unsuppressMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppressMap = this._unsuppressMap;
    }
    if (this._updateSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSourceIp = this._updateSourceIp;
    }
    if (this._updateSourceIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSourceIpv6 = this._updateSourceIpv6;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._distributeLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeLists = this._distributeLists?.internalValue;
    }
    if (this._neighborFilterLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborFilterLists = this._neighborFilterLists?.internalValue;
    }
    if (this._neighborPrefixLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPrefixLists = this._neighborPrefixLists?.internalValue;
    }
    if (this._neighborRouteMapLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborRouteMapLists = this._neighborRouteMapLists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborIpv6NeighborListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acosApplicationOnly = undefined;
      this._activate = undefined;
      this._advertisementInterval = undefined;
      this._allowasIn = undefined;
      this._allowasInCount = undefined;
      this._asOriginationInterval = undefined;
      this._bfd = undefined;
      this._bfdValue = undefined;
      this._collideEstablished = undefined;
      this._connect = undefined;
      this._defaultOriginate = undefined;
      this._description = undefined;
      this._disallowInfiniteHoldtime = undefined;
      this._dontCapabilityNegotiate = undefined;
      this._dynamic = undefined;
      this._ebgpMultihop = undefined;
      this._ebgpMultihopHopCount = undefined;
      this._enforceMultihop = undefined;
      this._ethernet = undefined;
      this._extendedNexthop = undefined;
      this._gracefulRestart = undefined;
      this._inbound = undefined;
      this._keyId = undefined;
      this._keyType = undefined;
      this._lif = undefined;
      this._loopback = undefined;
      this._maximumPrefix = undefined;
      this._maximumPrefixThres = undefined;
      this._multihop = undefined;
      this._nbrRemoteAs = undefined;
      this._neighborIpv6 = undefined;
      this._nextHopSelf = undefined;
      this._overrideCapability = undefined;
      this._passValue = undefined;
      this._passive = undefined;
      this._peerGroupName = undefined;
      this._prefixListDirection = undefined;
      this._removePrivateAs = undefined;
      this._restartMin = undefined;
      this._routeMap = undefined;
      this._routeRefresh = undefined;
      this._sendCommunityVal = undefined;
      this._shutdown = undefined;
      this._strictCapabilityMatch = undefined;
      this._telemetry = undefined;
      this._timersHoldtime = undefined;
      this._timersKeepalive = undefined;
      this._trunk = undefined;
      this._tunnel = undefined;
      this._unsuppressMap = undefined;
      this._updateSourceIp = undefined;
      this._updateSourceIpv6 = undefined;
      this._uuid = undefined;
      this._ve = undefined;
      this._weight = undefined;
      this._distributeLists.internalValue = undefined;
      this._neighborFilterLists.internalValue = undefined;
      this._neighborPrefixLists.internalValue = undefined;
      this._neighborRouteMapLists.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acosApplicationOnly = value.acosApplicationOnly;
      this._activate = value.activate;
      this._advertisementInterval = value.advertisementInterval;
      this._allowasIn = value.allowasIn;
      this._allowasInCount = value.allowasInCount;
      this._asOriginationInterval = value.asOriginationInterval;
      this._bfd = value.bfd;
      this._bfdValue = value.bfdValue;
      this._collideEstablished = value.collideEstablished;
      this._connect = value.connect;
      this._defaultOriginate = value.defaultOriginate;
      this._description = value.description;
      this._disallowInfiniteHoldtime = value.disallowInfiniteHoldtime;
      this._dontCapabilityNegotiate = value.dontCapabilityNegotiate;
      this._dynamic = value.dynamic;
      this._ebgpMultihop = value.ebgpMultihop;
      this._ebgpMultihopHopCount = value.ebgpMultihopHopCount;
      this._enforceMultihop = value.enforceMultihop;
      this._ethernet = value.ethernet;
      this._extendedNexthop = value.extendedNexthop;
      this._gracefulRestart = value.gracefulRestart;
      this._inbound = value.inbound;
      this._keyId = value.keyId;
      this._keyType = value.keyType;
      this._lif = value.lif;
      this._loopback = value.loopback;
      this._maximumPrefix = value.maximumPrefix;
      this._maximumPrefixThres = value.maximumPrefixThres;
      this._multihop = value.multihop;
      this._nbrRemoteAs = value.nbrRemoteAs;
      this._neighborIpv6 = value.neighborIpv6;
      this._nextHopSelf = value.nextHopSelf;
      this._overrideCapability = value.overrideCapability;
      this._passValue = value.passValue;
      this._passive = value.passive;
      this._peerGroupName = value.peerGroupName;
      this._prefixListDirection = value.prefixListDirection;
      this._removePrivateAs = value.removePrivateAs;
      this._restartMin = value.restartMin;
      this._routeMap = value.routeMap;
      this._routeRefresh = value.routeRefresh;
      this._sendCommunityVal = value.sendCommunityVal;
      this._shutdown = value.shutdown;
      this._strictCapabilityMatch = value.strictCapabilityMatch;
      this._telemetry = value.telemetry;
      this._timersHoldtime = value.timersHoldtime;
      this._timersKeepalive = value.timersKeepalive;
      this._trunk = value.trunk;
      this._tunnel = value.tunnel;
      this._unsuppressMap = value.unsuppressMap;
      this._updateSourceIp = value.updateSourceIp;
      this._updateSourceIpv6 = value.updateSourceIpv6;
      this._uuid = value.uuid;
      this._ve = value.ve;
      this._weight = value.weight;
      this._distributeLists.internalValue = value.distributeLists;
      this._neighborFilterLists.internalValue = value.neighborFilterLists;
      this._neighborPrefixLists.internalValue = value.neighborPrefixLists;
      this._neighborRouteMapLists.internalValue = value.neighborRouteMapLists;
    }
  }

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
  private _distributeLists = new RouterBgpNeighborIpv6NeighborListDistributeListsList(this, "distribute_lists", false);
  public get distributeLists() {
    return this._distributeLists;
  }
  public putDistributeLists(value: RouterBgpNeighborIpv6NeighborListDistributeLists[] | cdktf.IResolvable) {
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
  private _neighborFilterLists = new RouterBgpNeighborIpv6NeighborListNeighborFilterListsList(this, "neighbor_filter_lists", false);
  public get neighborFilterLists() {
    return this._neighborFilterLists;
  }
  public putNeighborFilterLists(value: RouterBgpNeighborIpv6NeighborListNeighborFilterLists[] | cdktf.IResolvable) {
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
  private _neighborPrefixLists = new RouterBgpNeighborIpv6NeighborListNeighborPrefixListsList(this, "neighbor_prefix_lists", false);
  public get neighborPrefixLists() {
    return this._neighborPrefixLists;
  }
  public putNeighborPrefixLists(value: RouterBgpNeighborIpv6NeighborListNeighborPrefixLists[] | cdktf.IResolvable) {
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
  private _neighborRouteMapLists = new RouterBgpNeighborIpv6NeighborListNeighborRouteMapListsList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpNeighborIpv6NeighborListNeighborRouteMapLists[] | cdktf.IResolvable) {
    this._neighborRouteMapLists.internalValue = value;
  }
  public resetNeighborRouteMapLists() {
    this._neighborRouteMapLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborRouteMapListsInput() {
    return this._neighborRouteMapLists.internalValue;
  }
}

export class RouterBgpNeighborIpv6NeighborListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborIpv6NeighborListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborIpv6NeighborListStructOutputReference {
    return new RouterBgpNeighborIpv6NeighborListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborPeerGroupNeighborListNeighborRouteMapLists {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_rmap_direction RouterBgp#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nbr_route_map RouterBgp#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpNeighborPeerGroupNeighborListNeighborRouteMapListsToTerraform(struct?: RouterBgpNeighborPeerGroupNeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpNeighborPeerGroupNeighborListNeighborRouteMapListsToHclTerraform(struct?: RouterBgpNeighborPeerGroupNeighborListNeighborRouteMapLists | cdktf.IResolvable): any {
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

export class RouterBgpNeighborPeerGroupNeighborListNeighborRouteMapListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborPeerGroupNeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpNeighborPeerGroupNeighborListNeighborRouteMapLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpNeighborPeerGroupNeighborListNeighborRouteMapListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborPeerGroupNeighborListNeighborRouteMapLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborPeerGroupNeighborListNeighborRouteMapListsOutputReference {
    return new RouterBgpNeighborPeerGroupNeighborListNeighborRouteMapListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborPeerGroupNeighborListStruct {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#activate RouterBgp#activate}
  */
  readonly activate?: number;
  /**
  * Minimum interval between sending BGP routing updates (time in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#advertisement_interval RouterBgp#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Accept as-path with my AS present in it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#allowas_in RouterBgp#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#allowas_in_count RouterBgp#allowas_in_count}
  */
  readonly allowasInCount?: number;
  /**
  * Minimum interval between sending AS-origination routing updates (time in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#as_origination_interval RouterBgp#as_origination_interval}
  */
  readonly asOriginationInterval?: number;
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#bfd RouterBgp#bfd}
  */
  readonly bfd?: number;
  /**
  * Include Neighbor in Established State for Collision Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#collide_established RouterBgp#collide_established}
  */
  readonly collideEstablished?: number;
  /**
  * BGP connect timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#connect RouterBgp#connect}
  */
  readonly connect?: number;
  /**
  * Originate default route to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#default_originate RouterBgp#default_originate}
  */
  readonly defaultOriginate?: number;
  /**
  * Neighbor specific description (Up to 80 characters describing this neighbor)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#description RouterBgp#description}
  */
  readonly description?: string;
  /**
  * Do not perform capability negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dont_capability_negotiate RouterBgp#dont_capability_negotiate}
  */
  readonly dontCapabilityNegotiate?: number;
  /**
  * Advertise dynamic capability to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#dynamic RouterBgp#dynamic}
  */
  readonly dynamic?: number;
  /**
  * Allow EBGP neighbors not on directly connected networks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ebgp_multihop RouterBgp#ebgp_multihop}
  */
  readonly ebgpMultihop?: number;
  /**
  * maximum hop count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ebgp_multihop_hop_count RouterBgp#ebgp_multihop_hop_count}
  */
  readonly ebgpMultihopHopCount?: number;
  /**
  * Enforce EBGP neighbors to perform multihop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#enforce_multihop RouterBgp#enforce_multihop}
  */
  readonly enforceMultihop?: number;
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ethernet RouterBgp#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Advertise extended-nexthop capability to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#extended_nexthop RouterBgp#extended_nexthop}
  */
  readonly extendedNexthop?: number;
  /**
  * Allow inbound soft reconfiguration for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#inbound RouterBgp#inbound}
  */
  readonly inbound?: number;
  /**
  * Logical interface (Lif interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#lif RouterBgp#lif}
  */
  readonly lif?: string;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#loopback RouterBgp#loopback}
  */
  readonly loopback?: number;
  /**
  * Maximum number of prefix accept from this peer (maximum no. of prefix limit (various depends on model))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#maximum_prefix RouterBgp#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * threshold-value, 1 to 100 percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#maximum_prefix_thres RouterBgp#maximum_prefix_thres}
  */
  readonly maximumPrefixThres?: number;
  /**
  * Enable multihop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#multihop RouterBgp#multihop}
  */
  readonly multihop?: number;
  /**
  * Override capability negotiation result
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#override_capability RouterBgp#override_capability}
  */
  readonly overrideCapability?: number;
  /**
  * Key String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#pass_value RouterBgp#pass_value}
  */
  readonly passValue?: string;
  /**
  * Don't send open messages to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#passive RouterBgp#passive}
  */
  readonly passive?: number;
  /**
  * Neighbor tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group RouterBgp#peer_group}
  */
  readonly peerGroup: string;
  /**
  * Configure peer-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group_key RouterBgp#peer_group_key}
  */
  readonly peerGroupKey?: number;
  /**
  * Specify AS number of BGP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group_remote_as RouterBgp#peer_group_remote_as}
  */
  readonly peerGroupRemoteAs?: string;
  /**
  * Remove private AS number from outbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#remove_private_as RouterBgp#remove_private_as}
  */
  readonly removePrivateAs?: number;
  /**
  * Route-map to specify criteria to originate default (route-map name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
  /**
  * Advertise route-refresh capability to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_refresh RouterBgp#route_refresh}
  */
  readonly routeRefresh?: number;
  /**
  * Administratively shut down this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#shutdown RouterBgp#shutdown}
  */
  readonly shutdown?: number;
  /**
  * Strict capability negotiation match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#strict_capability_match RouterBgp#strict_capability_match}
  */
  readonly strictCapabilityMatch?: number;
  /**
  * Holdtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#timers_holdtime RouterBgp#timers_holdtime}
  */
  readonly timersHoldtime?: number;
  /**
  * Keepalive interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#timers_keepalive RouterBgp#timers_keepalive}
  */
  readonly timersKeepalive?: number;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#trunk RouterBgp#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#tunnel RouterBgp#tunnel}
  */
  readonly tunnel?: number;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#update_source_ip RouterBgp#update_source_ip}
  */
  readonly updateSourceIp?: string;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#update_source_ipv6 RouterBgp#update_source_ipv6}
  */
  readonly updateSourceIpv6?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ve RouterBgp#ve}
  */
  readonly ve?: number;
  /**
  * Set default weight for routes from this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#weight RouterBgp#weight}
  */
  readonly weight?: number;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#neighbor_route_map_lists RouterBgp#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpNeighborPeerGroupNeighborListNeighborRouteMapLists[] | cdktf.IResolvable;
}

export function routerBgpNeighborPeerGroupNeighborListStructToTerraform(struct?: RouterBgpNeighborPeerGroupNeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.numberToTerraform(struct!.activate),
    advertisement_interval: cdktf.numberToTerraform(struct!.advertisementInterval),
    allowas_in: cdktf.numberToTerraform(struct!.allowasIn),
    allowas_in_count: cdktf.numberToTerraform(struct!.allowasInCount),
    as_origination_interval: cdktf.numberToTerraform(struct!.asOriginationInterval),
    bfd: cdktf.numberToTerraform(struct!.bfd),
    collide_established: cdktf.numberToTerraform(struct!.collideEstablished),
    connect: cdktf.numberToTerraform(struct!.connect),
    default_originate: cdktf.numberToTerraform(struct!.defaultOriginate),
    description: cdktf.stringToTerraform(struct!.description),
    dont_capability_negotiate: cdktf.numberToTerraform(struct!.dontCapabilityNegotiate),
    dynamic: cdktf.numberToTerraform(struct!.dynamic),
    ebgp_multihop: cdktf.numberToTerraform(struct!.ebgpMultihop),
    ebgp_multihop_hop_count: cdktf.numberToTerraform(struct!.ebgpMultihopHopCount),
    enforce_multihop: cdktf.numberToTerraform(struct!.enforceMultihop),
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    extended_nexthop: cdktf.numberToTerraform(struct!.extendedNexthop),
    inbound: cdktf.numberToTerraform(struct!.inbound),
    lif: cdktf.stringToTerraform(struct!.lif),
    loopback: cdktf.numberToTerraform(struct!.loopback),
    maximum_prefix: cdktf.numberToTerraform(struct!.maximumPrefix),
    maximum_prefix_thres: cdktf.numberToTerraform(struct!.maximumPrefixThres),
    multihop: cdktf.numberToTerraform(struct!.multihop),
    override_capability: cdktf.numberToTerraform(struct!.overrideCapability),
    pass_value: cdktf.stringToTerraform(struct!.passValue),
    passive: cdktf.numberToTerraform(struct!.passive),
    peer_group: cdktf.stringToTerraform(struct!.peerGroup),
    peer_group_key: cdktf.numberToTerraform(struct!.peerGroupKey),
    peer_group_remote_as: cdktf.stringToTerraform(struct!.peerGroupRemoteAs),
    remove_private_as: cdktf.numberToTerraform(struct!.removePrivateAs),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    route_refresh: cdktf.numberToTerraform(struct!.routeRefresh),
    shutdown: cdktf.numberToTerraform(struct!.shutdown),
    strict_capability_match: cdktf.numberToTerraform(struct!.strictCapabilityMatch),
    timers_holdtime: cdktf.numberToTerraform(struct!.timersHoldtime),
    timers_keepalive: cdktf.numberToTerraform(struct!.timersKeepalive),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    update_source_ip: cdktf.stringToTerraform(struct!.updateSourceIp),
    update_source_ipv6: cdktf.stringToTerraform(struct!.updateSourceIpv6),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ve: cdktf.numberToTerraform(struct!.ve),
    weight: cdktf.numberToTerraform(struct!.weight),
    neighbor_route_map_lists: cdktf.listMapper(routerBgpNeighborPeerGroupNeighborListNeighborRouteMapListsToTerraform, true)(struct!.neighborRouteMapLists),
  }
}


export function routerBgpNeighborPeerGroupNeighborListStructToHclTerraform(struct?: RouterBgpNeighborPeerGroupNeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate: {
      value: cdktf.numberToHclTerraform(struct!.activate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    advertisement_interval: {
      value: cdktf.numberToHclTerraform(struct!.advertisementInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in: {
      value: cdktf.numberToHclTerraform(struct!.allowasIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_count: {
      value: cdktf.numberToHclTerraform(struct!.allowasInCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    as_origination_interval: {
      value: cdktf.numberToHclTerraform(struct!.asOriginationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd: {
      value: cdktf.numberToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collide_established: {
      value: cdktf.numberToHclTerraform(struct!.collideEstablished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect: {
      value: cdktf.numberToHclTerraform(struct!.connect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_originate: {
      value: cdktf.numberToHclTerraform(struct!.defaultOriginate),
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
    dont_capability_negotiate: {
      value: cdktf.numberToHclTerraform(struct!.dontCapabilityNegotiate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic: {
      value: cdktf.numberToHclTerraform(struct!.dynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_multihop: {
      value: cdktf.numberToHclTerraform(struct!.ebgpMultihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_multihop_hop_count: {
      value: cdktf.numberToHclTerraform(struct!.ebgpMultihopHopCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforce_multihop: {
      value: cdktf.numberToHclTerraform(struct!.enforceMultihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extended_nexthop: {
      value: cdktf.numberToHclTerraform(struct!.extendedNexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound: {
      value: cdktf.numberToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lif: {
      value: cdktf.stringToHclTerraform(struct!.lif),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loopback: {
      value: cdktf.numberToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_thres: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThres),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multihop: {
      value: cdktf.numberToHclTerraform(struct!.multihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    override_capability: {
      value: cdktf.numberToHclTerraform(struct!.overrideCapability),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pass_value: {
      value: cdktf.stringToHclTerraform(struct!.passValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passive: {
      value: cdktf.numberToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_group: {
      value: cdktf.stringToHclTerraform(struct!.peerGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_group_key: {
      value: cdktf.numberToHclTerraform(struct!.peerGroupKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_group_remote_as: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupRemoteAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as: {
      value: cdktf.numberToHclTerraform(struct!.removePrivateAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_refresh: {
      value: cdktf.numberToHclTerraform(struct!.routeRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shutdown: {
      value: cdktf.numberToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strict_capability_match: {
      value: cdktf.numberToHclTerraform(struct!.strictCapabilityMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timers_holdtime: {
      value: cdktf.numberToHclTerraform(struct!.timersHoldtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timers_keepalive: {
      value: cdktf.numberToHclTerraform(struct!.timersKeepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel: {
      value: cdktf.numberToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.updateSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_source_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.updateSourceIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_route_map_lists: {
      value: cdktf.listMapperHcl(routerBgpNeighborPeerGroupNeighborListNeighborRouteMapListsToHclTerraform, true)(struct!.neighborRouteMapLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborPeerGroupNeighborListNeighborRouteMapListsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborPeerGroupNeighborListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborPeerGroupNeighborListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._advertisementInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisementInterval = this._advertisementInterval;
    }
    if (this._allowasIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn = this._allowasIn;
    }
    if (this._allowasInCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInCount = this._allowasInCount;
    }
    if (this._asOriginationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOriginationInterval = this._asOriginationInterval;
    }
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._collideEstablished !== undefined) {
      hasAnyValues = true;
      internalValueResult.collideEstablished = this._collideEstablished;
    }
    if (this._connect !== undefined) {
      hasAnyValues = true;
      internalValueResult.connect = this._connect;
    }
    if (this._defaultOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginate = this._defaultOriginate;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dontCapabilityNegotiate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dontCapabilityNegotiate = this._dontCapabilityNegotiate;
    }
    if (this._dynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic;
    }
    if (this._ebgpMultihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihop = this._ebgpMultihop;
    }
    if (this._ebgpMultihopHopCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihopHopCount = this._ebgpMultihopHopCount;
    }
    if (this._enforceMultihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceMultihop = this._enforceMultihop;
    }
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._extendedNexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedNexthop = this._extendedNexthop;
    }
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._lif !== undefined) {
      hasAnyValues = true;
      internalValueResult.lif = this._lif;
    }
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    if (this._maximumPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix;
    }
    if (this._maximumPrefixThres !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThres = this._maximumPrefixThres;
    }
    if (this._multihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.multihop = this._multihop;
    }
    if (this._overrideCapability !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideCapability = this._overrideCapability;
    }
    if (this._passValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passValue = this._passValue;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._peerGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroup = this._peerGroup;
    }
    if (this._peerGroupKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupKey = this._peerGroupKey;
    }
    if (this._peerGroupRemoteAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupRemoteAs = this._peerGroupRemoteAs;
    }
    if (this._removePrivateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._routeRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeRefresh = this._routeRefresh;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._strictCapabilityMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictCapabilityMatch = this._strictCapabilityMatch;
    }
    if (this._timersHoldtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.timersHoldtime = this._timersHoldtime;
    }
    if (this._timersKeepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.timersKeepalive = this._timersKeepalive;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    if (this._updateSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSourceIp = this._updateSourceIp;
    }
    if (this._updateSourceIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSourceIpv6 = this._updateSourceIpv6;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._neighborRouteMapLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborRouteMapLists = this._neighborRouteMapLists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborPeerGroupNeighborListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._advertisementInterval = undefined;
      this._allowasIn = undefined;
      this._allowasInCount = undefined;
      this._asOriginationInterval = undefined;
      this._bfd = undefined;
      this._collideEstablished = undefined;
      this._connect = undefined;
      this._defaultOriginate = undefined;
      this._description = undefined;
      this._dontCapabilityNegotiate = undefined;
      this._dynamic = undefined;
      this._ebgpMultihop = undefined;
      this._ebgpMultihopHopCount = undefined;
      this._enforceMultihop = undefined;
      this._ethernet = undefined;
      this._extendedNexthop = undefined;
      this._inbound = undefined;
      this._lif = undefined;
      this._loopback = undefined;
      this._maximumPrefix = undefined;
      this._maximumPrefixThres = undefined;
      this._multihop = undefined;
      this._overrideCapability = undefined;
      this._passValue = undefined;
      this._passive = undefined;
      this._peerGroup = undefined;
      this._peerGroupKey = undefined;
      this._peerGroupRemoteAs = undefined;
      this._removePrivateAs = undefined;
      this._routeMap = undefined;
      this._routeRefresh = undefined;
      this._shutdown = undefined;
      this._strictCapabilityMatch = undefined;
      this._timersHoldtime = undefined;
      this._timersKeepalive = undefined;
      this._trunk = undefined;
      this._tunnel = undefined;
      this._updateSourceIp = undefined;
      this._updateSourceIpv6 = undefined;
      this._uuid = undefined;
      this._ve = undefined;
      this._weight = undefined;
      this._neighborRouteMapLists.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activate = value.activate;
      this._advertisementInterval = value.advertisementInterval;
      this._allowasIn = value.allowasIn;
      this._allowasInCount = value.allowasInCount;
      this._asOriginationInterval = value.asOriginationInterval;
      this._bfd = value.bfd;
      this._collideEstablished = value.collideEstablished;
      this._connect = value.connect;
      this._defaultOriginate = value.defaultOriginate;
      this._description = value.description;
      this._dontCapabilityNegotiate = value.dontCapabilityNegotiate;
      this._dynamic = value.dynamic;
      this._ebgpMultihop = value.ebgpMultihop;
      this._ebgpMultihopHopCount = value.ebgpMultihopHopCount;
      this._enforceMultihop = value.enforceMultihop;
      this._ethernet = value.ethernet;
      this._extendedNexthop = value.extendedNexthop;
      this._inbound = value.inbound;
      this._lif = value.lif;
      this._loopback = value.loopback;
      this._maximumPrefix = value.maximumPrefix;
      this._maximumPrefixThres = value.maximumPrefixThres;
      this._multihop = value.multihop;
      this._overrideCapability = value.overrideCapability;
      this._passValue = value.passValue;
      this._passive = value.passive;
      this._peerGroup = value.peerGroup;
      this._peerGroupKey = value.peerGroupKey;
      this._peerGroupRemoteAs = value.peerGroupRemoteAs;
      this._removePrivateAs = value.removePrivateAs;
      this._routeMap = value.routeMap;
      this._routeRefresh = value.routeRefresh;
      this._shutdown = value.shutdown;
      this._strictCapabilityMatch = value.strictCapabilityMatch;
      this._timersHoldtime = value.timersHoldtime;
      this._timersKeepalive = value.timersKeepalive;
      this._trunk = value.trunk;
      this._tunnel = value.tunnel;
      this._updateSourceIp = value.updateSourceIp;
      this._updateSourceIpv6 = value.updateSourceIpv6;
      this._uuid = value.uuid;
      this._ve = value.ve;
      this._weight = value.weight;
      this._neighborRouteMapLists.internalValue = value.neighborRouteMapLists;
    }
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
  private _neighborRouteMapLists = new RouterBgpNeighborPeerGroupNeighborListNeighborRouteMapListsList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpNeighborPeerGroupNeighborListNeighborRouteMapLists[] | cdktf.IResolvable) {
    this._neighborRouteMapLists.internalValue = value;
  }
  public resetNeighborRouteMapLists() {
    this._neighborRouteMapLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborRouteMapListsInput() {
    return this._neighborRouteMapLists.internalValue;
  }
}

export class RouterBgpNeighborPeerGroupNeighborListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborPeerGroupNeighborListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborPeerGroupNeighborListStructOutputReference {
    return new RouterBgpNeighborPeerGroupNeighborListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborTrunkNeighborListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group_name RouterBgp#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * Trunk interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#trunk RouterBgp#trunk}
  */
  readonly trunk: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#unnumbered RouterBgp#unnumbered}
  */
  readonly unnumbered?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
}

export function routerBgpNeighborTrunkNeighborListStructToTerraform(struct?: RouterBgpNeighborTrunkNeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_group_name: cdktf.stringToTerraform(struct!.peerGroupName),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    unnumbered: cdktf.numberToTerraform(struct!.unnumbered),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerBgpNeighborTrunkNeighborListStructToHclTerraform(struct?: RouterBgpNeighborTrunkNeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_group_name: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unnumbered: {
      value: cdktf.numberToHclTerraform(struct!.unnumbered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborTrunkNeighborListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborTrunkNeighborListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupName = this._peerGroupName;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._unnumbered !== undefined) {
      hasAnyValues = true;
      internalValueResult.unnumbered = this._unnumbered;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborTrunkNeighborListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peerGroupName = undefined;
      this._trunk = undefined;
      this._unnumbered = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peerGroupName = value.peerGroupName;
      this._trunk = value.trunk;
      this._unnumbered = value.unnumbered;
      this._uuid = value.uuid;
    }
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

  // trunk - computed: false, optional: false, required: true
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // unnumbered - computed: false, optional: true, required: false
  private _unnumbered?: number; 
  public get unnumbered() {
    return this.getNumberAttribute('unnumbered');
  }
  public set unnumbered(value: number) {
    this._unnumbered = value;
  }
  public resetUnnumbered() {
    this._unnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedInput() {
    return this._unnumbered;
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
}

export class RouterBgpNeighborTrunkNeighborListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborTrunkNeighborListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborTrunkNeighborListStructOutputReference {
    return new RouterBgpNeighborTrunkNeighborListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborVeNeighborListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group_name RouterBgp#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#unnumbered RouterBgp#unnumbered}
  */
  readonly unnumbered?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ve RouterBgp#ve}
  */
  readonly ve: number;
}

export function routerBgpNeighborVeNeighborListStructToTerraform(struct?: RouterBgpNeighborVeNeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_group_name: cdktf.stringToTerraform(struct!.peerGroupName),
    unnumbered: cdktf.numberToTerraform(struct!.unnumbered),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function routerBgpNeighborVeNeighborListStructToHclTerraform(struct?: RouterBgpNeighborVeNeighborListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_group_name: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unnumbered: {
      value: cdktf.numberToHclTerraform(struct!.unnumbered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborVeNeighborListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborVeNeighborListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupName = this._peerGroupName;
    }
    if (this._unnumbered !== undefined) {
      hasAnyValues = true;
      internalValueResult.unnumbered = this._unnumbered;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborVeNeighborListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peerGroupName = undefined;
      this._unnumbered = undefined;
      this._uuid = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peerGroupName = value.peerGroupName;
      this._unnumbered = value.unnumbered;
      this._uuid = value.uuid;
      this._ve = value.ve;
    }
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

  // unnumbered - computed: false, optional: true, required: false
  private _unnumbered?: number; 
  public get unnumbered() {
    return this.getNumberAttribute('unnumbered');
  }
  public set unnumbered(value: number) {
    this._unnumbered = value;
  }
  public resetUnnumbered() {
    this._unnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedInput() {
    return this._unnumbered;
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

  // ve - computed: false, optional: false, required: true
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }
}

export class RouterBgpNeighborVeNeighborListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborVeNeighborListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborVeNeighborListStructOutputReference {
    return new RouterBgpNeighborVeNeighborListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighbor {
  /**
  * ethernet_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ethernet_neighbor_list RouterBgp#ethernet_neighbor_list}
  */
  readonly ethernetNeighborList?: RouterBgpNeighborEthernetNeighborListStruct[] | cdktf.IResolvable;
  /**
  * ipv4_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ipv4_neighbor_list RouterBgp#ipv4_neighbor_list}
  */
  readonly ipv4NeighborList?: RouterBgpNeighborIpv4NeighborListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ipv6_neighbor_list RouterBgp#ipv6_neighbor_list}
  */
  readonly ipv6NeighborList?: RouterBgpNeighborIpv6NeighborListStruct[] | cdktf.IResolvable;
  /**
  * peer_group_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#peer_group_neighbor_list RouterBgp#peer_group_neighbor_list}
  */
  readonly peerGroupNeighborList?: RouterBgpNeighborPeerGroupNeighborListStruct[] | cdktf.IResolvable;
  /**
  * trunk_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#trunk_neighbor_list RouterBgp#trunk_neighbor_list}
  */
  readonly trunkNeighborList?: RouterBgpNeighborTrunkNeighborListStruct[] | cdktf.IResolvable;
  /**
  * ve_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ve_neighbor_list RouterBgp#ve_neighbor_list}
  */
  readonly veNeighborList?: RouterBgpNeighborVeNeighborListStruct[] | cdktf.IResolvable;
}

export function routerBgpNeighborToTerraform(struct?: RouterBgpNeighborOutputReference | RouterBgpNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_neighbor_list: cdktf.listMapper(routerBgpNeighborEthernetNeighborListStructToTerraform, true)(struct!.ethernetNeighborList),
    ipv4_neighbor_list: cdktf.listMapper(routerBgpNeighborIpv4NeighborListStructToTerraform, true)(struct!.ipv4NeighborList),
    ipv6_neighbor_list: cdktf.listMapper(routerBgpNeighborIpv6NeighborListStructToTerraform, true)(struct!.ipv6NeighborList),
    peer_group_neighbor_list: cdktf.listMapper(routerBgpNeighborPeerGroupNeighborListStructToTerraform, true)(struct!.peerGroupNeighborList),
    trunk_neighbor_list: cdktf.listMapper(routerBgpNeighborTrunkNeighborListStructToTerraform, true)(struct!.trunkNeighborList),
    ve_neighbor_list: cdktf.listMapper(routerBgpNeighborVeNeighborListStructToTerraform, true)(struct!.veNeighborList),
  }
}


export function routerBgpNeighborToHclTerraform(struct?: RouterBgpNeighborOutputReference | RouterBgpNeighbor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpNeighborEthernetNeighborListStructToHclTerraform, true)(struct!.ethernetNeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborEthernetNeighborListStructList",
    },
    ipv4_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpNeighborIpv4NeighborListStructToHclTerraform, true)(struct!.ipv4NeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborIpv4NeighborListStructList",
    },
    ipv6_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpNeighborIpv6NeighborListStructToHclTerraform, true)(struct!.ipv6NeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborIpv6NeighborListStructList",
    },
    peer_group_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpNeighborPeerGroupNeighborListStructToHclTerraform, true)(struct!.peerGroupNeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborPeerGroupNeighborListStructList",
    },
    trunk_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpNeighborTrunkNeighborListStructToHclTerraform, true)(struct!.trunkNeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborTrunkNeighborListStructList",
    },
    ve_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpNeighborVeNeighborListStructToHclTerraform, true)(struct!.veNeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborVeNeighborListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpNeighbor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetNeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetNeighborList = this._ethernetNeighborList?.internalValue;
    }
    if (this._ipv4NeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NeighborList = this._ipv4NeighborList?.internalValue;
    }
    if (this._ipv6NeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NeighborList = this._ipv6NeighborList?.internalValue;
    }
    if (this._peerGroupNeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupNeighborList = this._peerGroupNeighborList?.internalValue;
    }
    if (this._trunkNeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkNeighborList = this._trunkNeighborList?.internalValue;
    }
    if (this._veNeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veNeighborList = this._veNeighborList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighbor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ethernetNeighborList.internalValue = undefined;
      this._ipv4NeighborList.internalValue = undefined;
      this._ipv6NeighborList.internalValue = undefined;
      this._peerGroupNeighborList.internalValue = undefined;
      this._trunkNeighborList.internalValue = undefined;
      this._veNeighborList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ethernetNeighborList.internalValue = value.ethernetNeighborList;
      this._ipv4NeighborList.internalValue = value.ipv4NeighborList;
      this._ipv6NeighborList.internalValue = value.ipv6NeighborList;
      this._peerGroupNeighborList.internalValue = value.peerGroupNeighborList;
      this._trunkNeighborList.internalValue = value.trunkNeighborList;
      this._veNeighborList.internalValue = value.veNeighborList;
    }
  }

  // ethernet_neighbor_list - computed: false, optional: true, required: false
  private _ethernetNeighborList = new RouterBgpNeighborEthernetNeighborListStructList(this, "ethernet_neighbor_list", false);
  public get ethernetNeighborList() {
    return this._ethernetNeighborList;
  }
  public putEthernetNeighborList(value: RouterBgpNeighborEthernetNeighborListStruct[] | cdktf.IResolvable) {
    this._ethernetNeighborList.internalValue = value;
  }
  public resetEthernetNeighborList() {
    this._ethernetNeighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetNeighborListInput() {
    return this._ethernetNeighborList.internalValue;
  }

  // ipv4_neighbor_list - computed: false, optional: true, required: false
  private _ipv4NeighborList = new RouterBgpNeighborIpv4NeighborListStructList(this, "ipv4_neighbor_list", false);
  public get ipv4NeighborList() {
    return this._ipv4NeighborList;
  }
  public putIpv4NeighborList(value: RouterBgpNeighborIpv4NeighborListStruct[] | cdktf.IResolvable) {
    this._ipv4NeighborList.internalValue = value;
  }
  public resetIpv4NeighborList() {
    this._ipv4NeighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NeighborListInput() {
    return this._ipv4NeighborList.internalValue;
  }

  // ipv6_neighbor_list - computed: false, optional: true, required: false
  private _ipv6NeighborList = new RouterBgpNeighborIpv6NeighborListStructList(this, "ipv6_neighbor_list", false);
  public get ipv6NeighborList() {
    return this._ipv6NeighborList;
  }
  public putIpv6NeighborList(value: RouterBgpNeighborIpv6NeighborListStruct[] | cdktf.IResolvable) {
    this._ipv6NeighborList.internalValue = value;
  }
  public resetIpv6NeighborList() {
    this._ipv6NeighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NeighborListInput() {
    return this._ipv6NeighborList.internalValue;
  }

  // peer_group_neighbor_list - computed: false, optional: true, required: false
  private _peerGroupNeighborList = new RouterBgpNeighborPeerGroupNeighborListStructList(this, "peer_group_neighbor_list", false);
  public get peerGroupNeighborList() {
    return this._peerGroupNeighborList;
  }
  public putPeerGroupNeighborList(value: RouterBgpNeighborPeerGroupNeighborListStruct[] | cdktf.IResolvable) {
    this._peerGroupNeighborList.internalValue = value;
  }
  public resetPeerGroupNeighborList() {
    this._peerGroupNeighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupNeighborListInput() {
    return this._peerGroupNeighborList.internalValue;
  }

  // trunk_neighbor_list - computed: false, optional: true, required: false
  private _trunkNeighborList = new RouterBgpNeighborTrunkNeighborListStructList(this, "trunk_neighbor_list", false);
  public get trunkNeighborList() {
    return this._trunkNeighborList;
  }
  public putTrunkNeighborList(value: RouterBgpNeighborTrunkNeighborListStruct[] | cdktf.IResolvable) {
    this._trunkNeighborList.internalValue = value;
  }
  public resetTrunkNeighborList() {
    this._trunkNeighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkNeighborListInput() {
    return this._trunkNeighborList.internalValue;
  }

  // ve_neighbor_list - computed: false, optional: true, required: false
  private _veNeighborList = new RouterBgpNeighborVeNeighborListStructList(this, "ve_neighbor_list", false);
  public get veNeighborList() {
    return this._veNeighborList;
  }
  public putVeNeighborList(value: RouterBgpNeighborVeNeighborListStruct[] | cdktf.IResolvable) {
    this._veNeighborList.internalValue = value;
  }
  public resetVeNeighborList() {
    this._veNeighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veNeighborListInput() {
    return this._veNeighborList.internalValue;
  }
}
export interface RouterBgpNetworkIpCidrListStruct {
  /**
  * Specify a BGP backdoor route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#backdoor RouterBgp#backdoor}
  */
  readonly backdoor?: number;
  /**
  * community value in the format 1-4294967295|AA:NN|internet|local-AS|no-advertise|no-export
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#comm_value RouterBgp#comm_value}
  */
  readonly commValue?: string;
  /**
  * Network specific description (Up to 80 characters describing this network)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#description RouterBgp#description}
  */
  readonly description?: string;
  /**
  * Large community value in the format XX:YY:ZZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#lcomm_value RouterBgp#lcomm_value}
  */
  readonly lcommValue?: string;
  /**
  * Specify network mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#network_ipv4_cidr RouterBgp#network_ipv4_cidr}
  */
  readonly networkIpv4Cidr: string;
  /**
  * Route-map to modify the attributes (Name of the route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
}

export function routerBgpNetworkIpCidrListStructToTerraform(struct?: RouterBgpNetworkIpCidrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backdoor: cdktf.numberToTerraform(struct!.backdoor),
    comm_value: cdktf.stringToTerraform(struct!.commValue),
    description: cdktf.stringToTerraform(struct!.description),
    lcomm_value: cdktf.stringToTerraform(struct!.lcommValue),
    network_ipv4_cidr: cdktf.stringToTerraform(struct!.networkIpv4Cidr),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerBgpNetworkIpCidrListStructToHclTerraform(struct?: RouterBgpNetworkIpCidrListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backdoor: {
      value: cdktf.numberToHclTerraform(struct!.backdoor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comm_value: {
      value: cdktf.stringToHclTerraform(struct!.commValue),
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
    lcomm_value: {
      value: cdktf.stringToHclTerraform(struct!.lcommValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_ipv4_cidr: {
      value: cdktf.stringToHclTerraform(struct!.networkIpv4Cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNetworkIpCidrListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNetworkIpCidrListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backdoor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backdoor = this._backdoor;
    }
    if (this._commValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commValue = this._commValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._lcommValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lcommValue = this._lcommValue;
    }
    if (this._networkIpv4Cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkIpv4Cidr = this._networkIpv4Cidr;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNetworkIpCidrListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backdoor = undefined;
      this._commValue = undefined;
      this._description = undefined;
      this._lcommValue = undefined;
      this._networkIpv4Cidr = undefined;
      this._routeMap = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backdoor = value.backdoor;
      this._commValue = value.commValue;
      this._description = value.description;
      this._lcommValue = value.lcommValue;
      this._networkIpv4Cidr = value.networkIpv4Cidr;
      this._routeMap = value.routeMap;
      this._uuid = value.uuid;
    }
  }

  // backdoor - computed: false, optional: true, required: false
  private _backdoor?: number; 
  public get backdoor() {
    return this.getNumberAttribute('backdoor');
  }
  public set backdoor(value: number) {
    this._backdoor = value;
  }
  public resetBackdoor() {
    this._backdoor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backdoorInput() {
    return this._backdoor;
  }

  // comm_value - computed: false, optional: true, required: false
  private _commValue?: string; 
  public get commValue() {
    return this.getStringAttribute('comm_value');
  }
  public set commValue(value: string) {
    this._commValue = value;
  }
  public resetCommValue() {
    this._commValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commValueInput() {
    return this._commValue;
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

  // lcomm_value - computed: false, optional: true, required: false
  private _lcommValue?: string; 
  public get lcommValue() {
    return this.getStringAttribute('lcomm_value');
  }
  public set lcommValue(value: string) {
    this._lcommValue = value;
  }
  public resetLcommValue() {
    this._lcommValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcommValueInput() {
    return this._lcommValue;
  }

  // network_ipv4_cidr - computed: false, optional: false, required: true
  private _networkIpv4Cidr?: string; 
  public get networkIpv4Cidr() {
    return this.getStringAttribute('network_ipv4_cidr');
  }
  public set networkIpv4Cidr(value: string) {
    this._networkIpv4Cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIpv4CidrInput() {
    return this._networkIpv4Cidr;
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
}

export class RouterBgpNetworkIpCidrListStructList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNetworkIpCidrListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNetworkIpCidrListStructOutputReference {
    return new RouterBgpNetworkIpCidrListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNetworkMonitorDefault {
  /**
  * default route monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#network_monitor_default RouterBgp#network_monitor_default}
  */
  readonly networkMonitorDefault?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
}

export function routerBgpNetworkMonitorDefaultToTerraform(struct?: RouterBgpNetworkMonitorDefaultOutputReference | RouterBgpNetworkMonitorDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_monitor_default: cdktf.numberToTerraform(struct!.networkMonitorDefault),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerBgpNetworkMonitorDefaultToHclTerraform(struct?: RouterBgpNetworkMonitorDefaultOutputReference | RouterBgpNetworkMonitorDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_monitor_default: {
      value: cdktf.numberToHclTerraform(struct!.networkMonitorDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNetworkMonitorDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpNetworkMonitorDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkMonitorDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMonitorDefault = this._networkMonitorDefault;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNetworkMonitorDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkMonitorDefault = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkMonitorDefault = value.networkMonitorDefault;
      this._uuid = value.uuid;
    }
  }

  // network_monitor_default - computed: false, optional: true, required: false
  private _networkMonitorDefault?: number; 
  public get networkMonitorDefault() {
    return this.getNumberAttribute('network_monitor_default');
  }
  public set networkMonitorDefault(value: number) {
    this._networkMonitorDefault = value;
  }
  public resetNetworkMonitorDefault() {
    this._networkMonitorDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkMonitorDefaultInput() {
    return this._networkMonitorDefault;
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
}
export interface RouterBgpNetworkMonitor {
  /**
  * default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#default RouterBgp#default}
  */
  readonly default?: RouterBgpNetworkMonitorDefault;
}

export function routerBgpNetworkMonitorToTerraform(struct?: RouterBgpNetworkMonitorOutputReference | RouterBgpNetworkMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: routerBgpNetworkMonitorDefaultToTerraform(struct!.default),
  }
}


export function routerBgpNetworkMonitorToHclTerraform(struct?: RouterBgpNetworkMonitorOutputReference | RouterBgpNetworkMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: routerBgpNetworkMonitorDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNetworkMonitorDefaultList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNetworkMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpNetworkMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNetworkMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default.internalValue = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default = new RouterBgpNetworkMonitorDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: RouterBgpNetworkMonitorDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }
}
export interface RouterBgpNetworkSynchronization {
  /**
  * Perform IGP synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#network_synchronization RouterBgp#network_synchronization}
  */
  readonly networkSynchronization?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
}

export function routerBgpNetworkSynchronizationToTerraform(struct?: RouterBgpNetworkSynchronizationOutputReference | RouterBgpNetworkSynchronization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_synchronization: cdktf.numberToTerraform(struct!.networkSynchronization),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerBgpNetworkSynchronizationToHclTerraform(struct?: RouterBgpNetworkSynchronizationOutputReference | RouterBgpNetworkSynchronization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_synchronization: {
      value: cdktf.numberToHclTerraform(struct!.networkSynchronization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNetworkSynchronizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpNetworkSynchronization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkSynchronization !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSynchronization = this._networkSynchronization;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNetworkSynchronization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkSynchronization = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkSynchronization = value.networkSynchronization;
      this._uuid = value.uuid;
    }
  }

  // network_synchronization - computed: false, optional: true, required: false
  private _networkSynchronization?: number; 
  public get networkSynchronization() {
    return this.getNumberAttribute('network_synchronization');
  }
  public set networkSynchronization(value: number) {
    this._networkSynchronization = value;
  }
  public resetNetworkSynchronization() {
    this._networkSynchronization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSynchronizationInput() {
    return this._networkSynchronization;
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
}
export interface RouterBgpNetwork {
  /**
  * ip_cidr_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ip_cidr_list RouterBgp#ip_cidr_list}
  */
  readonly ipCidrList?: RouterBgpNetworkIpCidrListStruct[] | cdktf.IResolvable;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#monitor RouterBgp#monitor}
  */
  readonly monitor?: RouterBgpNetworkMonitor;
  /**
  * synchronization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#synchronization RouterBgp#synchronization}
  */
  readonly synchronization?: RouterBgpNetworkSynchronization;
}

export function routerBgpNetworkToTerraform(struct?: RouterBgpNetworkOutputReference | RouterBgpNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_cidr_list: cdktf.listMapper(routerBgpNetworkIpCidrListStructToTerraform, true)(struct!.ipCidrList),
    monitor: routerBgpNetworkMonitorToTerraform(struct!.monitor),
    synchronization: routerBgpNetworkSynchronizationToTerraform(struct!.synchronization),
  }
}


export function routerBgpNetworkToHclTerraform(struct?: RouterBgpNetworkOutputReference | RouterBgpNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_cidr_list: {
      value: cdktf.listMapperHcl(routerBgpNetworkIpCidrListStructToHclTerraform, true)(struct!.ipCidrList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNetworkIpCidrListStructList",
    },
    monitor: {
      value: routerBgpNetworkMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNetworkMonitorList",
    },
    synchronization: {
      value: routerBgpNetworkSynchronizationToHclTerraform(struct!.synchronization),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNetworkSynchronizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipCidrList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCidrList = this._ipCidrList?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._synchronization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronization = this._synchronization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipCidrList.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._synchronization.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipCidrList.internalValue = value.ipCidrList;
      this._monitor.internalValue = value.monitor;
      this._synchronization.internalValue = value.synchronization;
    }
  }

  // ip_cidr_list - computed: false, optional: true, required: false
  private _ipCidrList = new RouterBgpNetworkIpCidrListStructList(this, "ip_cidr_list", false);
  public get ipCidrList() {
    return this._ipCidrList;
  }
  public putIpCidrList(value: RouterBgpNetworkIpCidrListStruct[] | cdktf.IResolvable) {
    this._ipCidrList.internalValue = value;
  }
  public resetIpCidrList() {
    this._ipCidrList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCidrListInput() {
    return this._ipCidrList.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new RouterBgpNetworkMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: RouterBgpNetworkMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // synchronization - computed: false, optional: true, required: false
  private _synchronization = new RouterBgpNetworkSynchronizationOutputReference(this, "synchronization");
  public get synchronization() {
    return this._synchronization;
  }
  public putSynchronization(value: RouterBgpNetworkSynchronization) {
    this._synchronization.internalValue = value;
  }
  public resetSynchronization() {
    this._synchronization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizationInput() {
    return this._synchronization.internalValue;
  }
}
export interface RouterBgpRedistributeConnectedCfg {
  /**
  * Connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#connected RouterBgp#connected}
  */
  readonly connected?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeConnectedCfgToTerraform(struct?: RouterBgpRedistributeConnectedCfgOutputReference | RouterBgpRedistributeConnectedCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connected: cdktf.numberToTerraform(struct!.connected),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeConnectedCfgToHclTerraform(struct?: RouterBgpRedistributeConnectedCfgOutputReference | RouterBgpRedistributeConnectedCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connected: {
      value: cdktf.numberToHclTerraform(struct!.connected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeConnectedCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeConnectedCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connected !== undefined) {
      hasAnyValues = true;
      internalValueResult.connected = this._connected;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistributeConnectedCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connected = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connected = value.connected;
      this._routeMap = value.routeMap;
    }
  }

  // connected - computed: false, optional: true, required: false
  private _connected?: number; 
  public get connected() {
    return this.getNumberAttribute('connected');
  }
  public set connected(value: number) {
    this._connected = value;
  }
  public resetConnected() {
    this._connected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedInput() {
    return this._connected;
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
}
export interface RouterBgpRedistributeFloatingIpCfg {
  /**
  * Floating IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#floating_ip RouterBgp#floating_ip}
  */
  readonly floatingIp?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeFloatingIpCfgToTerraform(struct?: RouterBgpRedistributeFloatingIpCfgOutputReference | RouterBgpRedistributeFloatingIpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: cdktf.numberToTerraform(struct!.floatingIp),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeFloatingIpCfgToHclTerraform(struct?: RouterBgpRedistributeFloatingIpCfgOutputReference | RouterBgpRedistributeFloatingIpCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip: {
      value: cdktf.numberToHclTerraform(struct!.floatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeFloatingIpCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeFloatingIpCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistributeFloatingIpCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._floatingIp = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._floatingIp = value.floatingIp;
      this._routeMap = value.routeMap;
    }
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp?: number; 
  public get floatingIp() {
    return this.getNumberAttribute('floating_ip');
  }
  public set floatingIp(value: number) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
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
}
export interface RouterBgpRedistributeIpNatCfg {
  /**
  * IP NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ip_nat RouterBgp#ip_nat}
  */
  readonly ipNat?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeIpNatCfgToTerraform(struct?: RouterBgpRedistributeIpNatCfgOutputReference | RouterBgpRedistributeIpNatCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_nat: cdktf.numberToTerraform(struct!.ipNat),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeIpNatCfgToHclTerraform(struct?: RouterBgpRedistributeIpNatCfgOutputReference | RouterBgpRedistributeIpNatCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_nat: {
      value: cdktf.numberToHclTerraform(struct!.ipNat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeIpNatCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeIpNatCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNat = this._ipNat;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistributeIpNatCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipNat = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipNat = value.ipNat;
      this._routeMap = value.routeMap;
    }
  }

  // ip_nat - computed: false, optional: true, required: false
  private _ipNat?: number; 
  public get ipNat() {
    return this.getNumberAttribute('ip_nat');
  }
  public set ipNat(value: number) {
    this._ipNat = value;
  }
  public resetIpNat() {
    this._ipNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatInput() {
    return this._ipNat;
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
}
export interface RouterBgpRedistributeIpNatListCfg {
  /**
  * IP NAT list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ip_nat_list RouterBgp#ip_nat_list}
  */
  readonly ipNatList?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeIpNatListCfgToTerraform(struct?: RouterBgpRedistributeIpNatListCfgOutputReference | RouterBgpRedistributeIpNatListCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_nat_list: cdktf.numberToTerraform(struct!.ipNatList),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeIpNatListCfgToHclTerraform(struct?: RouterBgpRedistributeIpNatListCfgOutputReference | RouterBgpRedistributeIpNatListCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_nat_list: {
      value: cdktf.numberToHclTerraform(struct!.ipNatList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeIpNatListCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeIpNatListCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipNatList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatList = this._ipNatList;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistributeIpNatListCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipNatList = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipNatList = value.ipNatList;
      this._routeMap = value.routeMap;
    }
  }

  // ip_nat_list - computed: false, optional: true, required: false
  private _ipNatList?: number; 
  public get ipNatList() {
    return this.getNumberAttribute('ip_nat_list');
  }
  public set ipNatList(value: number) {
    this._ipNatList = value;
  }
  public resetIpNatList() {
    this._ipNatList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatListInput() {
    return this._ipNatList;
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
}
export interface RouterBgpRedistributeIsisCfg {
  /**
  * ISO IS-IS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#isis RouterBgp#isis}
  */
  readonly isis?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeIsisCfgToTerraform(struct?: RouterBgpRedistributeIsisCfgOutputReference | RouterBgpRedistributeIsisCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isis: cdktf.numberToTerraform(struct!.isis),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeIsisCfgToHclTerraform(struct?: RouterBgpRedistributeIsisCfgOutputReference | RouterBgpRedistributeIsisCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isis: {
      value: cdktf.numberToHclTerraform(struct!.isis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeIsisCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeIsisCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isis !== undefined) {
      hasAnyValues = true;
      internalValueResult.isis = this._isis;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistributeIsisCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isis = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isis = value.isis;
      this._routeMap = value.routeMap;
    }
  }

  // isis - computed: false, optional: true, required: false
  private _isis?: number; 
  public get isis() {
    return this.getNumberAttribute('isis');
  }
  public set isis(value: number) {
    this._isis = value;
  }
  public resetIsis() {
    this._isis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis;
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
}
export interface RouterBgpRedistributeLw4O6Cfg {
  /**
  * LW4O6 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#lw4o6 RouterBgp#lw4o6}
  */
  readonly lw4O6?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeLw4O6CfgToTerraform(struct?: RouterBgpRedistributeLw4O6CfgOutputReference | RouterBgpRedistributeLw4O6Cfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lw4o6: cdktf.numberToTerraform(struct!.lw4O6),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeLw4O6CfgToHclTerraform(struct?: RouterBgpRedistributeLw4O6CfgOutputReference | RouterBgpRedistributeLw4O6Cfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lw4o6: {
      value: cdktf.numberToHclTerraform(struct!.lw4O6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeLw4O6CfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeLw4O6Cfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lw4O6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.lw4O6 = this._lw4O6;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistributeLw4O6Cfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lw4O6 = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lw4O6 = value.lw4O6;
      this._routeMap = value.routeMap;
    }
  }

  // lw4o6 - computed: false, optional: true, required: false
  private _lw4O6?: number; 
  public get lw4O6() {
    return this.getNumberAttribute('lw4o6');
  }
  public set lw4O6(value: number) {
    this._lw4O6 = value;
  }
  public resetLw4O6() {
    this._lw4O6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lw4O6Input() {
    return this._lw4O6;
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
}
export interface RouterBgpRedistributeNatMapCfg {
  /**
  * NAT MAP Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nat_map RouterBgp#nat_map}
  */
  readonly natMap?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeNatMapCfgToTerraform(struct?: RouterBgpRedistributeNatMapCfgOutputReference | RouterBgpRedistributeNatMapCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_map: cdktf.numberToTerraform(struct!.natMap),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeNatMapCfgToHclTerraform(struct?: RouterBgpRedistributeNatMapCfgOutputReference | RouterBgpRedistributeNatMapCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_map: {
      value: cdktf.numberToHclTerraform(struct!.natMap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeNatMapCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeNatMapCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.natMap = this._natMap;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistributeNatMapCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._natMap = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._natMap = value.natMap;
      this._routeMap = value.routeMap;
    }
  }

  // nat_map - computed: false, optional: true, required: false
  private _natMap?: number; 
  public get natMap() {
    return this.getNumberAttribute('nat_map');
  }
  public set natMap(value: number) {
    this._natMap = value;
  }
  public resetNatMap() {
    this._natMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natMapInput() {
    return this._natMap;
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
}
export interface RouterBgpRedistributeOspfCfg {
  /**
  * Open Shortest Path First (OSPF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ospf RouterBgp#ospf}
  */
  readonly ospf?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeOspfCfgToTerraform(struct?: RouterBgpRedistributeOspfCfgOutputReference | RouterBgpRedistributeOspfCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ospf: cdktf.numberToTerraform(struct!.ospf),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeOspfCfgToHclTerraform(struct?: RouterBgpRedistributeOspfCfgOutputReference | RouterBgpRedistributeOspfCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ospf: {
      value: cdktf.numberToHclTerraform(struct!.ospf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeOspfCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeOspfCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ospf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistributeOspfCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ospf = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ospf = value.ospf;
      this._routeMap = value.routeMap;
    }
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf?: number; 
  public get ospf() {
    return this.getNumberAttribute('ospf');
  }
  public set ospf(value: number) {
    this._ospf = value;
  }
  public resetOspf() {
    this._ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf;
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
}
export interface RouterBgpRedistributeRipCfg {
  /**
  * Routing Information Protocol (RIP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#rip RouterBgp#rip}
  */
  readonly rip?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeRipCfgToTerraform(struct?: RouterBgpRedistributeRipCfgOutputReference | RouterBgpRedistributeRipCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rip: cdktf.numberToTerraform(struct!.rip),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeRipCfgToHclTerraform(struct?: RouterBgpRedistributeRipCfgOutputReference | RouterBgpRedistributeRipCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rip: {
      value: cdktf.numberToHclTerraform(struct!.rip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeRipCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeRipCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rip !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistributeRipCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rip = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rip = value.rip;
      this._routeMap = value.routeMap;
    }
  }

  // rip - computed: false, optional: true, required: false
  private _rip?: number; 
  public get rip() {
    return this.getNumberAttribute('rip');
  }
  public set rip(value: number) {
    this._rip = value;
  }
  public resetRip() {
    this._rip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip;
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
}
export interface RouterBgpRedistributeStaticCfg {
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
  /**
  * Static routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#static RouterBgp#static}
  */
  readonly static?: number;
}

export function routerBgpRedistributeStaticCfgToTerraform(struct?: RouterBgpRedistributeStaticCfgOutputReference | RouterBgpRedistributeStaticCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    static: cdktf.numberToTerraform(struct!.static),
  }
}


export function routerBgpRedistributeStaticCfgToHclTerraform(struct?: RouterBgpRedistributeStaticCfgOutputReference | RouterBgpRedistributeStaticCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static: {
      value: cdktf.numberToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeStaticCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeStaticCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistributeStaticCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routeMap = undefined;
      this._static = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routeMap = value.routeMap;
      this._static = value.static;
    }
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

  // static - computed: false, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }
}
export interface RouterBgpRedistributeStaticNatCfg {
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
  /**
  * Static NAT Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#static_nat RouterBgp#static_nat}
  */
  readonly staticNat?: number;
}

export function routerBgpRedistributeStaticNatCfgToTerraform(struct?: RouterBgpRedistributeStaticNatCfgOutputReference | RouterBgpRedistributeStaticNatCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    static_nat: cdktf.numberToTerraform(struct!.staticNat),
  }
}


export function routerBgpRedistributeStaticNatCfgToHclTerraform(struct?: RouterBgpRedistributeStaticNatCfgOutputReference | RouterBgpRedistributeStaticNatCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_nat: {
      value: cdktf.numberToHclTerraform(struct!.staticNat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeStaticNatCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeStaticNatCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._staticNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNat = this._staticNat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistributeStaticNatCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routeMap = undefined;
      this._staticNat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routeMap = value.routeMap;
      this._staticNat = value.staticNat;
    }
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

  // static_nat - computed: false, optional: true, required: false
  private _staticNat?: number; 
  public get staticNat() {
    return this.getNumberAttribute('static_nat');
  }
  public set staticNat(value: number) {
    this._staticNat = value;
  }
  public resetStaticNat() {
    this._staticNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatInput() {
    return this._staticNat;
  }
}
export interface RouterBgpRedistributeVipOnlyFlaggedCfg {
  /**
  * Selected Virtual IP (VIP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#only_flagged RouterBgp#only_flagged}
  */
  readonly onlyFlagged?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeVipOnlyFlaggedCfgToTerraform(struct?: RouterBgpRedistributeVipOnlyFlaggedCfgOutputReference | RouterBgpRedistributeVipOnlyFlaggedCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    only_flagged: cdktf.numberToTerraform(struct!.onlyFlagged),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeVipOnlyFlaggedCfgToHclTerraform(struct?: RouterBgpRedistributeVipOnlyFlaggedCfgOutputReference | RouterBgpRedistributeVipOnlyFlaggedCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    only_flagged: {
      value: cdktf.numberToHclTerraform(struct!.onlyFlagged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeVipOnlyFlaggedCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeVipOnlyFlaggedCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onlyFlagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyFlagged = this._onlyFlagged;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistributeVipOnlyFlaggedCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onlyFlagged = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onlyFlagged = value.onlyFlagged;
      this._routeMap = value.routeMap;
    }
  }

  // only_flagged - computed: false, optional: true, required: false
  private _onlyFlagged?: number; 
  public get onlyFlagged() {
    return this.getNumberAttribute('only_flagged');
  }
  public set onlyFlagged(value: number) {
    this._onlyFlagged = value;
  }
  public resetOnlyFlagged() {
    this._onlyFlagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyFlaggedInput() {
    return this._onlyFlagged;
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
}
export interface RouterBgpRedistributeVipOnlyNotFlaggedCfg {
  /**
  * Only not flagged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#only_not_flagged RouterBgp#only_not_flagged}
  */
  readonly onlyNotFlagged?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeVipOnlyNotFlaggedCfgToTerraform(struct?: RouterBgpRedistributeVipOnlyNotFlaggedCfgOutputReference | RouterBgpRedistributeVipOnlyNotFlaggedCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    only_not_flagged: cdktf.numberToTerraform(struct!.onlyNotFlagged),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeVipOnlyNotFlaggedCfgToHclTerraform(struct?: RouterBgpRedistributeVipOnlyNotFlaggedCfgOutputReference | RouterBgpRedistributeVipOnlyNotFlaggedCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    only_not_flagged: {
      value: cdktf.numberToHclTerraform(struct!.onlyNotFlagged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeVipOnlyNotFlaggedCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeVipOnlyNotFlaggedCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onlyNotFlagged !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyNotFlagged = this._onlyNotFlagged;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistributeVipOnlyNotFlaggedCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onlyNotFlagged = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onlyNotFlagged = value.onlyNotFlagged;
      this._routeMap = value.routeMap;
    }
  }

  // only_not_flagged - computed: false, optional: true, required: false
  private _onlyNotFlagged?: number; 
  public get onlyNotFlagged() {
    return this.getNumberAttribute('only_not_flagged');
  }
  public set onlyNotFlagged(value: number) {
    this._onlyNotFlagged = value;
  }
  public resetOnlyNotFlagged() {
    this._onlyNotFlagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyNotFlaggedInput() {
    return this._onlyNotFlagged;
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
}
export interface RouterBgpRedistributeVip {
  /**
  * only_flagged_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#only_flagged_cfg RouterBgp#only_flagged_cfg}
  */
  readonly onlyFlaggedCfg?: RouterBgpRedistributeVipOnlyFlaggedCfg;
  /**
  * only_not_flagged_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#only_not_flagged_cfg RouterBgp#only_not_flagged_cfg}
  */
  readonly onlyNotFlaggedCfg?: RouterBgpRedistributeVipOnlyNotFlaggedCfg;
}

export function routerBgpRedistributeVipToTerraform(struct?: RouterBgpRedistributeVipOutputReference | RouterBgpRedistributeVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    only_flagged_cfg: routerBgpRedistributeVipOnlyFlaggedCfgToTerraform(struct!.onlyFlaggedCfg),
    only_not_flagged_cfg: routerBgpRedistributeVipOnlyNotFlaggedCfgToTerraform(struct!.onlyNotFlaggedCfg),
  }
}


export function routerBgpRedistributeVipToHclTerraform(struct?: RouterBgpRedistributeVipOutputReference | RouterBgpRedistributeVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    only_flagged_cfg: {
      value: routerBgpRedistributeVipOnlyFlaggedCfgToHclTerraform(struct!.onlyFlaggedCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeVipOnlyFlaggedCfgList",
    },
    only_not_flagged_cfg: {
      value: routerBgpRedistributeVipOnlyNotFlaggedCfgToHclTerraform(struct!.onlyNotFlaggedCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeVipOnlyNotFlaggedCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onlyFlaggedCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyFlaggedCfg = this._onlyFlaggedCfg?.internalValue;
    }
    if (this._onlyNotFlaggedCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyNotFlaggedCfg = this._onlyNotFlaggedCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistributeVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onlyFlaggedCfg.internalValue = undefined;
      this._onlyNotFlaggedCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onlyFlaggedCfg.internalValue = value.onlyFlaggedCfg;
      this._onlyNotFlaggedCfg.internalValue = value.onlyNotFlaggedCfg;
    }
  }

  // only_flagged_cfg - computed: false, optional: true, required: false
  private _onlyFlaggedCfg = new RouterBgpRedistributeVipOnlyFlaggedCfgOutputReference(this, "only_flagged_cfg");
  public get onlyFlaggedCfg() {
    return this._onlyFlaggedCfg;
  }
  public putOnlyFlaggedCfg(value: RouterBgpRedistributeVipOnlyFlaggedCfg) {
    this._onlyFlaggedCfg.internalValue = value;
  }
  public resetOnlyFlaggedCfg() {
    this._onlyFlaggedCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyFlaggedCfgInput() {
    return this._onlyFlaggedCfg.internalValue;
  }

  // only_not_flagged_cfg - computed: false, optional: true, required: false
  private _onlyNotFlaggedCfg = new RouterBgpRedistributeVipOnlyNotFlaggedCfgOutputReference(this, "only_not_flagged_cfg");
  public get onlyNotFlaggedCfg() {
    return this._onlyNotFlaggedCfg;
  }
  public putOnlyNotFlaggedCfg(value: RouterBgpRedistributeVipOnlyNotFlaggedCfg) {
    this._onlyNotFlaggedCfg.internalValue = value;
  }
  public resetOnlyNotFlaggedCfg() {
    this._onlyNotFlaggedCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyNotFlaggedCfgInput() {
    return this._onlyNotFlaggedCfg.internalValue;
  }
}
export interface RouterBgpRedistribute {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#uuid RouterBgp#uuid}
  */
  readonly uuid?: string;
  /**
  * connected_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#connected_cfg RouterBgp#connected_cfg}
  */
  readonly connectedCfg?: RouterBgpRedistributeConnectedCfg;
  /**
  * floating_ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#floating_ip_cfg RouterBgp#floating_ip_cfg}
  */
  readonly floatingIpCfg?: RouterBgpRedistributeFloatingIpCfg;
  /**
  * ip_nat_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ip_nat_cfg RouterBgp#ip_nat_cfg}
  */
  readonly ipNatCfg?: RouterBgpRedistributeIpNatCfg;
  /**
  * ip_nat_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ip_nat_list_cfg RouterBgp#ip_nat_list_cfg}
  */
  readonly ipNatListCfg?: RouterBgpRedistributeIpNatListCfg;
  /**
  * isis_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#isis_cfg RouterBgp#isis_cfg}
  */
  readonly isisCfg?: RouterBgpRedistributeIsisCfg;
  /**
  * lw4o6_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#lw4o6_cfg RouterBgp#lw4o6_cfg}
  */
  readonly lw4O6Cfg?: RouterBgpRedistributeLw4O6Cfg;
  /**
  * nat_map_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#nat_map_cfg RouterBgp#nat_map_cfg}
  */
  readonly natMapCfg?: RouterBgpRedistributeNatMapCfg;
  /**
  * ospf_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#ospf_cfg RouterBgp#ospf_cfg}
  */
  readonly ospfCfg?: RouterBgpRedistributeOspfCfg;
  /**
  * rip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#rip_cfg RouterBgp#rip_cfg}
  */
  readonly ripCfg?: RouterBgpRedistributeRipCfg;
  /**
  * static_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#static_cfg RouterBgp#static_cfg}
  */
  readonly staticCfg?: RouterBgpRedistributeStaticCfg;
  /**
  * static_nat_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#static_nat_cfg RouterBgp#static_nat_cfg}
  */
  readonly staticNatCfg?: RouterBgpRedistributeStaticNatCfg;
  /**
  * vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#vip RouterBgp#vip}
  */
  readonly vip?: RouterBgpRedistributeVip;
}

export function routerBgpRedistributeToTerraform(struct?: RouterBgpRedistributeOutputReference | RouterBgpRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    connected_cfg: routerBgpRedistributeConnectedCfgToTerraform(struct!.connectedCfg),
    floating_ip_cfg: routerBgpRedistributeFloatingIpCfgToTerraform(struct!.floatingIpCfg),
    ip_nat_cfg: routerBgpRedistributeIpNatCfgToTerraform(struct!.ipNatCfg),
    ip_nat_list_cfg: routerBgpRedistributeIpNatListCfgToTerraform(struct!.ipNatListCfg),
    isis_cfg: routerBgpRedistributeIsisCfgToTerraform(struct!.isisCfg),
    lw4o6_cfg: routerBgpRedistributeLw4O6CfgToTerraform(struct!.lw4O6Cfg),
    nat_map_cfg: routerBgpRedistributeNatMapCfgToTerraform(struct!.natMapCfg),
    ospf_cfg: routerBgpRedistributeOspfCfgToTerraform(struct!.ospfCfg),
    rip_cfg: routerBgpRedistributeRipCfgToTerraform(struct!.ripCfg),
    static_cfg: routerBgpRedistributeStaticCfgToTerraform(struct!.staticCfg),
    static_nat_cfg: routerBgpRedistributeStaticNatCfgToTerraform(struct!.staticNatCfg),
    vip: routerBgpRedistributeVipToTerraform(struct!.vip),
  }
}


export function routerBgpRedistributeToHclTerraform(struct?: RouterBgpRedistributeOutputReference | RouterBgpRedistribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connected_cfg: {
      value: routerBgpRedistributeConnectedCfgToHclTerraform(struct!.connectedCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeConnectedCfgList",
    },
    floating_ip_cfg: {
      value: routerBgpRedistributeFloatingIpCfgToHclTerraform(struct!.floatingIpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeFloatingIpCfgList",
    },
    ip_nat_cfg: {
      value: routerBgpRedistributeIpNatCfgToHclTerraform(struct!.ipNatCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeIpNatCfgList",
    },
    ip_nat_list_cfg: {
      value: routerBgpRedistributeIpNatListCfgToHclTerraform(struct!.ipNatListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeIpNatListCfgList",
    },
    isis_cfg: {
      value: routerBgpRedistributeIsisCfgToHclTerraform(struct!.isisCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeIsisCfgList",
    },
    lw4o6_cfg: {
      value: routerBgpRedistributeLw4O6CfgToHclTerraform(struct!.lw4O6Cfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeLw4O6CfgList",
    },
    nat_map_cfg: {
      value: routerBgpRedistributeNatMapCfgToHclTerraform(struct!.natMapCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeNatMapCfgList",
    },
    ospf_cfg: {
      value: routerBgpRedistributeOspfCfgToHclTerraform(struct!.ospfCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeOspfCfgList",
    },
    rip_cfg: {
      value: routerBgpRedistributeRipCfgToHclTerraform(struct!.ripCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeRipCfgList",
    },
    static_cfg: {
      value: routerBgpRedistributeStaticCfgToHclTerraform(struct!.staticCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeStaticCfgList",
    },
    static_nat_cfg: {
      value: routerBgpRedistributeStaticNatCfgToHclTerraform(struct!.staticNatCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeStaticNatCfgList",
    },
    vip: {
      value: routerBgpRedistributeVipToHclTerraform(struct!.vip),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeVipList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._connectedCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectedCfg = this._connectedCfg?.internalValue;
    }
    if (this._floatingIpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpCfg = this._floatingIpCfg?.internalValue;
    }
    if (this._ipNatCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatCfg = this._ipNatCfg?.internalValue;
    }
    if (this._ipNatListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatListCfg = this._ipNatListCfg?.internalValue;
    }
    if (this._isisCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisCfg = this._isisCfg?.internalValue;
    }
    if (this._lw4O6Cfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lw4O6Cfg = this._lw4O6Cfg?.internalValue;
    }
    if (this._natMapCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natMapCfg = this._natMapCfg?.internalValue;
    }
    if (this._ospfCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfCfg = this._ospfCfg?.internalValue;
    }
    if (this._ripCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ripCfg = this._ripCfg?.internalValue;
    }
    if (this._staticCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticCfg = this._staticCfg?.internalValue;
    }
    if (this._staticNatCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNatCfg = this._staticNatCfg?.internalValue;
    }
    if (this._vip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._connectedCfg.internalValue = undefined;
      this._floatingIpCfg.internalValue = undefined;
      this._ipNatCfg.internalValue = undefined;
      this._ipNatListCfg.internalValue = undefined;
      this._isisCfg.internalValue = undefined;
      this._lw4O6Cfg.internalValue = undefined;
      this._natMapCfg.internalValue = undefined;
      this._ospfCfg.internalValue = undefined;
      this._ripCfg.internalValue = undefined;
      this._staticCfg.internalValue = undefined;
      this._staticNatCfg.internalValue = undefined;
      this._vip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._connectedCfg.internalValue = value.connectedCfg;
      this._floatingIpCfg.internalValue = value.floatingIpCfg;
      this._ipNatCfg.internalValue = value.ipNatCfg;
      this._ipNatListCfg.internalValue = value.ipNatListCfg;
      this._isisCfg.internalValue = value.isisCfg;
      this._lw4O6Cfg.internalValue = value.lw4O6Cfg;
      this._natMapCfg.internalValue = value.natMapCfg;
      this._ospfCfg.internalValue = value.ospfCfg;
      this._ripCfg.internalValue = value.ripCfg;
      this._staticCfg.internalValue = value.staticCfg;
      this._staticNatCfg.internalValue = value.staticNatCfg;
      this._vip.internalValue = value.vip;
    }
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

  // connected_cfg - computed: false, optional: true, required: false
  private _connectedCfg = new RouterBgpRedistributeConnectedCfgOutputReference(this, "connected_cfg");
  public get connectedCfg() {
    return this._connectedCfg;
  }
  public putConnectedCfg(value: RouterBgpRedistributeConnectedCfg) {
    this._connectedCfg.internalValue = value;
  }
  public resetConnectedCfg() {
    this._connectedCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedCfgInput() {
    return this._connectedCfg.internalValue;
  }

  // floating_ip_cfg - computed: false, optional: true, required: false
  private _floatingIpCfg = new RouterBgpRedistributeFloatingIpCfgOutputReference(this, "floating_ip_cfg");
  public get floatingIpCfg() {
    return this._floatingIpCfg;
  }
  public putFloatingIpCfg(value: RouterBgpRedistributeFloatingIpCfg) {
    this._floatingIpCfg.internalValue = value;
  }
  public resetFloatingIpCfg() {
    this._floatingIpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpCfgInput() {
    return this._floatingIpCfg.internalValue;
  }

  // ip_nat_cfg - computed: false, optional: true, required: false
  private _ipNatCfg = new RouterBgpRedistributeIpNatCfgOutputReference(this, "ip_nat_cfg");
  public get ipNatCfg() {
    return this._ipNatCfg;
  }
  public putIpNatCfg(value: RouterBgpRedistributeIpNatCfg) {
    this._ipNatCfg.internalValue = value;
  }
  public resetIpNatCfg() {
    this._ipNatCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatCfgInput() {
    return this._ipNatCfg.internalValue;
  }

  // ip_nat_list_cfg - computed: false, optional: true, required: false
  private _ipNatListCfg = new RouterBgpRedistributeIpNatListCfgOutputReference(this, "ip_nat_list_cfg");
  public get ipNatListCfg() {
    return this._ipNatListCfg;
  }
  public putIpNatListCfg(value: RouterBgpRedistributeIpNatListCfg) {
    this._ipNatListCfg.internalValue = value;
  }
  public resetIpNatListCfg() {
    this._ipNatListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatListCfgInput() {
    return this._ipNatListCfg.internalValue;
  }

  // isis_cfg - computed: false, optional: true, required: false
  private _isisCfg = new RouterBgpRedistributeIsisCfgOutputReference(this, "isis_cfg");
  public get isisCfg() {
    return this._isisCfg;
  }
  public putIsisCfg(value: RouterBgpRedistributeIsisCfg) {
    this._isisCfg.internalValue = value;
  }
  public resetIsisCfg() {
    this._isisCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisCfgInput() {
    return this._isisCfg.internalValue;
  }

  // lw4o6_cfg - computed: false, optional: true, required: false
  private _lw4O6Cfg = new RouterBgpRedistributeLw4O6CfgOutputReference(this, "lw4o6_cfg");
  public get lw4O6Cfg() {
    return this._lw4O6Cfg;
  }
  public putLw4O6Cfg(value: RouterBgpRedistributeLw4O6Cfg) {
    this._lw4O6Cfg.internalValue = value;
  }
  public resetLw4O6Cfg() {
    this._lw4O6Cfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lw4O6CfgInput() {
    return this._lw4O6Cfg.internalValue;
  }

  // nat_map_cfg - computed: false, optional: true, required: false
  private _natMapCfg = new RouterBgpRedistributeNatMapCfgOutputReference(this, "nat_map_cfg");
  public get natMapCfg() {
    return this._natMapCfg;
  }
  public putNatMapCfg(value: RouterBgpRedistributeNatMapCfg) {
    this._natMapCfg.internalValue = value;
  }
  public resetNatMapCfg() {
    this._natMapCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natMapCfgInput() {
    return this._natMapCfg.internalValue;
  }

  // ospf_cfg - computed: false, optional: true, required: false
  private _ospfCfg = new RouterBgpRedistributeOspfCfgOutputReference(this, "ospf_cfg");
  public get ospfCfg() {
    return this._ospfCfg;
  }
  public putOspfCfg(value: RouterBgpRedistributeOspfCfg) {
    this._ospfCfg.internalValue = value;
  }
  public resetOspfCfg() {
    this._ospfCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfCfgInput() {
    return this._ospfCfg.internalValue;
  }

  // rip_cfg - computed: false, optional: true, required: false
  private _ripCfg = new RouterBgpRedistributeRipCfgOutputReference(this, "rip_cfg");
  public get ripCfg() {
    return this._ripCfg;
  }
  public putRipCfg(value: RouterBgpRedistributeRipCfg) {
    this._ripCfg.internalValue = value;
  }
  public resetRipCfg() {
    this._ripCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripCfgInput() {
    return this._ripCfg.internalValue;
  }

  // static_cfg - computed: false, optional: true, required: false
  private _staticCfg = new RouterBgpRedistributeStaticCfgOutputReference(this, "static_cfg");
  public get staticCfg() {
    return this._staticCfg;
  }
  public putStaticCfg(value: RouterBgpRedistributeStaticCfg) {
    this._staticCfg.internalValue = value;
  }
  public resetStaticCfg() {
    this._staticCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticCfgInput() {
    return this._staticCfg.internalValue;
  }

  // static_nat_cfg - computed: false, optional: true, required: false
  private _staticNatCfg = new RouterBgpRedistributeStaticNatCfgOutputReference(this, "static_nat_cfg");
  public get staticNatCfg() {
    return this._staticNatCfg;
  }
  public putStaticNatCfg(value: RouterBgpRedistributeStaticNatCfg) {
    this._staticNatCfg.internalValue = value;
  }
  public resetStaticNatCfg() {
    this._staticNatCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatCfgInput() {
    return this._staticNatCfg.internalValue;
  }

  // vip - computed: false, optional: true, required: false
  private _vip = new RouterBgpRedistributeVipOutputReference(this, "vip");
  public get vip() {
    return this._vip;
  }
  public putVip(value: RouterBgpRedistributeVip) {
    this._vip.internalValue = value;
  }
  public resetVip() {
    this._vip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip.internalValue;
  }
}
export interface RouterBgpTimers {
  /**
  * Holdtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#bgp_holdtime RouterBgp#bgp_holdtime}
  */
  readonly bgpHoldtime?: number;
  /**
  * Keepalive interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#bgp_keepalive RouterBgp#bgp_keepalive}
  */
  readonly bgpKeepalive?: number;
}

export function routerBgpTimersToTerraform(struct?: RouterBgpTimersOutputReference | RouterBgpTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_holdtime: cdktf.numberToTerraform(struct!.bgpHoldtime),
    bgp_keepalive: cdktf.numberToTerraform(struct!.bgpKeepalive),
  }
}


export function routerBgpTimersToHclTerraform(struct?: RouterBgpTimersOutputReference | RouterBgpTimers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_holdtime: {
      value: cdktf.numberToHclTerraform(struct!.bgpHoldtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgp_keepalive: {
      value: cdktf.numberToHclTerraform(struct!.bgpKeepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpTimersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpTimers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpHoldtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpHoldtime = this._bgpHoldtime;
    }
    if (this._bgpKeepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpKeepalive = this._bgpKeepalive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpTimers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgpHoldtime = undefined;
      this._bgpKeepalive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgpHoldtime = value.bgpHoldtime;
      this._bgpKeepalive = value.bgpKeepalive;
    }
  }

  // bgp_holdtime - computed: false, optional: true, required: false
  private _bgpHoldtime?: number; 
  public get bgpHoldtime() {
    return this.getNumberAttribute('bgp_holdtime');
  }
  public set bgpHoldtime(value: number) {
    this._bgpHoldtime = value;
  }
  public resetBgpHoldtime() {
    this._bgpHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpHoldtimeInput() {
    return this._bgpHoldtime;
  }

  // bgp_keepalive - computed: false, optional: true, required: false
  private _bgpKeepalive?: number; 
  public get bgpKeepalive() {
    return this.getNumberAttribute('bgp_keepalive');
  }
  public set bgpKeepalive(value: number) {
    this._bgpKeepalive = value;
  }
  public resetBgpKeepalive() {
    this._bgpKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpKeepaliveInput() {
    return this._bgpKeepalive;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp thunder_router_bgp}
*/
export class RouterBgp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgp to import
  * @param importFromId The id of the existing RouterBgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp thunder_router_bgp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_bgp',
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
    this._asNumber = config.asNumber;
    this._autoSummary = config.autoSummary;
    this._id = config.id;
    this._maximumPathsValue = config.maximumPathsValue;
    this._originate = config.originate;
    this._synchronization = config.synchronization;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._addressFamily.internalValue = config.addressFamily;
    this._aggregateAddressList.internalValue = config.aggregateAddressList;
    this._bgp.internalValue = config.bgp;
    this._distanceList.internalValue = config.distanceList;
    this._neighbor.internalValue = config.neighbor;
    this._network.internalValue = config.network;
    this._redistribute.internalValue = config.redistribute;
    this._timers.internalValue = config.timers;
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

  // auto_summary - computed: false, optional: true, required: false
  private _autoSummary?: number; 
  public get autoSummary() {
    return this.getNumberAttribute('auto_summary');
  }
  public set autoSummary(value: number) {
    this._autoSummary = value;
  }
  public resetAutoSummary() {
    this._autoSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummaryInput() {
    return this._autoSummary;
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

  // maximum_paths_value - computed: false, optional: true, required: false
  private _maximumPathsValue?: number; 
  public get maximumPathsValue() {
    return this.getNumberAttribute('maximum_paths_value');
  }
  public set maximumPathsValue(value: number) {
    this._maximumPathsValue = value;
  }
  public resetMaximumPathsValue() {
    this._maximumPathsValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsValueInput() {
    return this._maximumPathsValue;
  }

  // originate - computed: false, optional: true, required: false
  private _originate?: number; 
  public get originate() {
    return this.getNumberAttribute('originate');
  }
  public set originate(value: number) {
    this._originate = value;
  }
  public resetOriginate() {
    this._originate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originateInput() {
    return this._originate;
  }

  // synchronization - computed: false, optional: true, required: false
  private _synchronization?: number; 
  public get synchronization() {
    return this.getNumberAttribute('synchronization');
  }
  public set synchronization(value: number) {
    this._synchronization = value;
  }
  public resetSynchronization() {
    this._synchronization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizationInput() {
    return this._synchronization;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // address_family - computed: false, optional: true, required: false
  private _addressFamily = new RouterBgpAddressFamilyOutputReference(this, "address_family");
  public get addressFamily() {
    return this._addressFamily;
  }
  public putAddressFamily(value: RouterBgpAddressFamily) {
    this._addressFamily.internalValue = value;
  }
  public resetAddressFamily() {
    this._addressFamily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily.internalValue;
  }

  // aggregate_address_list - computed: false, optional: true, required: false
  private _aggregateAddressList = new RouterBgpAggregateAddressListStructList(this, "aggregate_address_list", false);
  public get aggregateAddressList() {
    return this._aggregateAddressList;
  }
  public putAggregateAddressList(value: RouterBgpAggregateAddressListStruct[] | cdktf.IResolvable) {
    this._aggregateAddressList.internalValue = value;
  }
  public resetAggregateAddressList() {
    this._aggregateAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateAddressListInput() {
    return this._aggregateAddressList.internalValue;
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new RouterBgpBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: RouterBgpBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // distance_list - computed: false, optional: true, required: false
  private _distanceList = new RouterBgpDistanceListStructList(this, "distance_list", false);
  public get distanceList() {
    return this._distanceList;
  }
  public putDistanceList(value: RouterBgpDistanceListStruct[] | cdktf.IResolvable) {
    this._distanceList.internalValue = value;
  }
  public resetDistanceList() {
    this._distanceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceListInput() {
    return this._distanceList.internalValue;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new RouterBgpNeighborOutputReference(this, "neighbor");
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: RouterBgpNeighbor) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new RouterBgpNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: RouterBgpNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute = new RouterBgpRedistributeOutputReference(this, "redistribute");
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: RouterBgpRedistribute) {
    this._redistribute.internalValue = value;
  }
  public resetRedistribute() {
    this._redistribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute.internalValue;
  }

  // timers - computed: false, optional: true, required: false
  private _timers = new RouterBgpTimersOutputReference(this, "timers");
  public get timers() {
    return this._timers;
  }
  public putTimers(value: RouterBgpTimers) {
    this._timers.internalValue = value;
  }
  public resetTimers() {
    this._timers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersInput() {
    return this._timers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_number: cdktf.stringToTerraform(this._asNumber),
      auto_summary: cdktf.numberToTerraform(this._autoSummary),
      id: cdktf.stringToTerraform(this._id),
      maximum_paths_value: cdktf.numberToTerraform(this._maximumPathsValue),
      originate: cdktf.numberToTerraform(this._originate),
      synchronization: cdktf.numberToTerraform(this._synchronization),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      address_family: routerBgpAddressFamilyToTerraform(this._addressFamily.internalValue),
      aggregate_address_list: cdktf.listMapper(routerBgpAggregateAddressListStructToTerraform, true)(this._aggregateAddressList.internalValue),
      bgp: routerBgpBgpToTerraform(this._bgp.internalValue),
      distance_list: cdktf.listMapper(routerBgpDistanceListStructToTerraform, true)(this._distanceList.internalValue),
      neighbor: routerBgpNeighborToTerraform(this._neighbor.internalValue),
      network: routerBgpNetworkToTerraform(this._network.internalValue),
      redistribute: routerBgpRedistributeToTerraform(this._redistribute.internalValue),
      timers: routerBgpTimersToTerraform(this._timers.internalValue),
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
      auto_summary: {
        value: cdktf.numberToHclTerraform(this._autoSummary),
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
      maximum_paths_value: {
        value: cdktf.numberToHclTerraform(this._maximumPathsValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      originate: {
        value: cdktf.numberToHclTerraform(this._originate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      synchronization: {
        value: cdktf.numberToHclTerraform(this._synchronization),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      address_family: {
        value: routerBgpAddressFamilyToHclTerraform(this._addressFamily.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyList",
      },
      aggregate_address_list: {
        value: cdktf.listMapperHcl(routerBgpAggregateAddressListStructToHclTerraform, true)(this._aggregateAddressList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAggregateAddressListStructList",
      },
      bgp: {
        value: routerBgpBgpToHclTerraform(this._bgp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpBgpList",
      },
      distance_list: {
        value: cdktf.listMapperHcl(routerBgpDistanceListStructToHclTerraform, true)(this._distanceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpDistanceListStructList",
      },
      neighbor: {
        value: routerBgpNeighborToHclTerraform(this._neighbor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpNeighborList",
      },
      network: {
        value: routerBgpNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpNetworkList",
      },
      redistribute: {
        value: routerBgpRedistributeToHclTerraform(this._redistribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpRedistributeList",
      },
      timers: {
        value: routerBgpTimersToHclTerraform(this._timers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpTimersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
