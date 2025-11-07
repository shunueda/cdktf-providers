// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor#activate RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4Neighbor#activate}
  */
  readonly activate?: number;
  /**
  * AsNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor#as_number RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4Neighbor#as_number}
  */
  readonly asNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor#id RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4Neighbor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor#neighbor_ipv4 RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4Neighbor#neighbor_ipv4}
  */
  readonly neighborIpv4: string;
  /**
  * 'all': Send Standard, Extended, and Large Community attributes; 'both': Send Standard and Extended Community attributes; 'none': Disable Sending Community attributes; 'standard': Send Standard Community attributes; 'extended': Send Extended Community attributes; 'large': Send Large Community attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor#send_community_val RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4Neighbor#send_community_val}
  */
  readonly sendCommunityVal?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor#uuid RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4Neighbor#uuid}
  */
  readonly uuid?: string;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor#neighbor_route_map_lists RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4Neighbor#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapLists[] | cdktf.IResolvable;
}
export interface RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapLists {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor#nbr_rmap_direction RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4Neighbor#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor#nbr_route_map RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4Neighbor#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapListsToTerraform(struct?: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapListsToHclTerraform(struct?: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapLists | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapLists | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapLists | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapListsList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapLists[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapListsOutputReference {
    return new RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor thunder_router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor}
*/
export class RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4Neighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4Neighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4Neighbor to import
  * @param importFromId The id of the existing RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4Neighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4Neighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor thunder_router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_bgp_address_family_ipv4_flowspec_neighbor_ipv4_neighbor',
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
    this._asNumber = config.asNumber;
    this._id = config.id;
    this._neighborIpv4 = config.neighborIpv4;
    this._sendCommunityVal = config.sendCommunityVal;
    this._uuid = config.uuid;
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
  private _neighborRouteMapLists = new RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapListsList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapLists[] | cdktf.IResolvable) {
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
      as_number: cdktf.stringToTerraform(this._asNumber),
      id: cdktf.stringToTerraform(this._id),
      neighbor_ipv4: cdktf.stringToTerraform(this._neighborIpv4),
      send_community_val: cdktf.stringToTerraform(this._sendCommunityVal),
      uuid: cdktf.stringToTerraform(this._uuid),
      neighbor_route_map_lists: cdktf.listMapper(routerBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapListsToTerraform, true)(this._neighborRouteMapLists.internalValue),
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
      neighbor_ipv4: {
        value: cdktf.stringToHclTerraform(this._neighborIpv4),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor_route_map_lists: {
        value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapListsToHclTerraform, true)(this._neighborRouteMapLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv4FlowspecNeighborIpv4NeighborNeighborRouteMapListsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
