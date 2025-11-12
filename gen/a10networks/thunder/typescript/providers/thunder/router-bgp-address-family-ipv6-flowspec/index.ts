// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpAddressFamilyIpv6FlowspecAConfig extends cdktf.TerraformMetaArguments {
  /**
  * AsNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#as_number RouterBgpAddressFamilyIpv6FlowspecA#as_number}
  */
  readonly asNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#id RouterBgpAddressFamilyIpv6FlowspecA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#uuid RouterBgpAddressFamilyIpv6FlowspecA#uuid}
  */
  readonly uuid?: string;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#neighbor RouterBgpAddressFamilyIpv6FlowspecA#neighbor}
  */
  readonly neighbor?: RouterBgpAddressFamilyIpv6FlowspecNeighborA;
}
export interface RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsA {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#nbr_rmap_direction RouterBgpAddressFamilyIpv6FlowspecA#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#nbr_route_map RouterBgpAddressFamilyIpv6FlowspecA#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsAToTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsA | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsA | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsAOutputReference {
    return new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructA {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#activate RouterBgpAddressFamilyIpv6FlowspecA#activate}
  */
  readonly activate?: number;
  /**
  * Neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#neighbor_ipv4 RouterBgpAddressFamilyIpv6FlowspecA#neighbor_ipv4}
  */
  readonly neighborIpv4: string;
  /**
  * 'all': Send Standard, Extended, and Large Community attributes; 'both': Send Standard and Extended Community attributes; 'none': Disable Sending Community attributes; 'standard': Send Standard Community attributes; 'extended': Send Extended Community attributes; 'large': Send Large Community attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#send_community_val RouterBgpAddressFamilyIpv6FlowspecA#send_community_val}
  */
  readonly sendCommunityVal?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#uuid RouterBgpAddressFamilyIpv6FlowspecA#uuid}
  */
  readonly uuid?: string;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#neighbor_route_map_lists RouterBgpAddressFamilyIpv6FlowspecA#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsA[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructAToTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.numberToTerraform(struct!.activate),
    neighbor_ipv4: cdktf.stringToTerraform(struct!.neighborIpv4),
    send_community_val: cdktf.stringToTerraform(struct!.sendCommunityVal),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    neighbor_route_map_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsAToTerraform, true)(struct!.neighborRouteMapLists),
  }
}


export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructA | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsAToHclTerraform, true)(struct!.neighborRouteMapLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructA | cdktf.IResolvable | undefined) {
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
  private _neighborRouteMapLists = new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsAList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListNeighborRouteMapListsA[] | cdktf.IResolvable) {
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

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructAOutputReference {
    return new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsA {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#nbr_rmap_direction RouterBgpAddressFamilyIpv6FlowspecA#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#nbr_route_map RouterBgpAddressFamilyIpv6FlowspecA#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsAToTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsA | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsA | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsAOutputReference {
    return new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructA {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#activate RouterBgpAddressFamilyIpv6FlowspecA#activate}
  */
  readonly activate?: number;
  /**
  * Neighbor IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#neighbor_ipv6 RouterBgpAddressFamilyIpv6FlowspecA#neighbor_ipv6}
  */
  readonly neighborIpv6: string;
  /**
  * 'all': Send Standard, Extended, and Large Community attributes; 'both': Send Standard and Extended Community attributes; 'none': Disable Sending Community attributes; 'standard': Send Standard Community attributes; 'extended': Send Extended Community attributes; 'large': Send Large Community attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#send_community_val RouterBgpAddressFamilyIpv6FlowspecA#send_community_val}
  */
  readonly sendCommunityVal?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#uuid RouterBgpAddressFamilyIpv6FlowspecA#uuid}
  */
  readonly uuid?: string;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#neighbor_route_map_lists RouterBgpAddressFamilyIpv6FlowspecA#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsA[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructAToTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.numberToTerraform(struct!.activate),
    neighbor_ipv6: cdktf.stringToTerraform(struct!.neighborIpv6),
    send_community_val: cdktf.stringToTerraform(struct!.sendCommunityVal),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    neighbor_route_map_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsAToTerraform, true)(struct!.neighborRouteMapLists),
  }
}


export function routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructA | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsAToHclTerraform, true)(struct!.neighborRouteMapLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructA | cdktf.IResolvable | undefined) {
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
  private _neighborRouteMapLists = new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsAList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListNeighborRouteMapListsA[] | cdktf.IResolvable) {
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

export class RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructAOutputReference {
    return new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6FlowspecNeighborA {
  /**
  * ipv4_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#ipv4_neighbor_list RouterBgpAddressFamilyIpv6FlowspecA#ipv4_neighbor_list}
  */
  readonly ipv4NeighborList?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructA[] | cdktf.IResolvable;
  /**
  * ipv6_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#ipv6_neighbor_list RouterBgpAddressFamilyIpv6FlowspecA#ipv6_neighbor_list}
  */
  readonly ipv6NeighborList?: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructA[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv6FlowspecNeighborAToTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborAOutputReference | RouterBgpAddressFamilyIpv6FlowspecNeighborA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_neighbor_list: cdktf.listMapper(routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructAToTerraform, true)(struct!.ipv4NeighborList),
    ipv6_neighbor_list: cdktf.listMapper(routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructAToTerraform, true)(struct!.ipv6NeighborList),
  }
}


export function routerBgpAddressFamilyIpv6FlowspecNeighborAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6FlowspecNeighborAOutputReference | RouterBgpAddressFamilyIpv6FlowspecNeighborA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructAToHclTerraform, true)(struct!.ipv4NeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructAList",
    },
    ipv6_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructAToHclTerraform, true)(struct!.ipv6NeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6FlowspecNeighborAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6FlowspecNeighborA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6FlowspecNeighborA | undefined) {
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
  private _ipv4NeighborList = new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructAList(this, "ipv4_neighbor_list", false);
  public get ipv4NeighborList() {
    return this._ipv4NeighborList;
  }
  public putIpv4NeighborList(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv4NeighborListStructA[] | cdktf.IResolvable) {
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
  private _ipv6NeighborList = new RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructAList(this, "ipv6_neighbor_list", false);
  public get ipv6NeighborList() {
    return this._ipv6NeighborList;
  }
  public putIpv6NeighborList(value: RouterBgpAddressFamilyIpv6FlowspecNeighborIpv6NeighborListStructA[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec thunder_router_bgp_address_family_ipv6_flowspec}
*/
export class RouterBgpAddressFamilyIpv6FlowspecA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_bgp_address_family_ipv6_flowspec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpAddressFamilyIpv6FlowspecA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpAddressFamilyIpv6FlowspecA to import
  * @param importFromId The id of the existing RouterBgpAddressFamilyIpv6FlowspecA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpAddressFamilyIpv6FlowspecA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_bgp_address_family_ipv6_flowspec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6_flowspec thunder_router_bgp_address_family_ipv6_flowspec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpAddressFamilyIpv6FlowspecAConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpAddressFamilyIpv6FlowspecAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_bgp_address_family_ipv6_flowspec',
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
    this._asNumber = config.asNumber;
    this._id = config.id;
    this._uuid = config.uuid;
    this._neighbor.internalValue = config.neighbor;
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
  private _neighbor = new RouterBgpAddressFamilyIpv6FlowspecNeighborAOutputReference(this, "neighbor");
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: RouterBgpAddressFamilyIpv6FlowspecNeighborA) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_number: cdktf.stringToTerraform(this._asNumber),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      neighbor: routerBgpAddressFamilyIpv6FlowspecNeighborAToTerraform(this._neighbor.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      neighbor: {
        value: routerBgpAddressFamilyIpv6FlowspecNeighborAToHclTerraform(this._neighbor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6FlowspecNeighborAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
