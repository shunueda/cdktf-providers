// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_route_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIpv6RipRouteMapAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_route_map#id RouterIpv6RipRouteMapA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_route_map#uuid RouterIpv6RipRouteMapA#uuid}
  */
  readonly uuid?: string;
  /**
  * map_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_route_map#map_cfg RouterIpv6RipRouteMapA#map_cfg}
  */
  readonly mapCfg?: RouterIpv6RipRouteMapMapCfgA[] | cdktf.IResolvable;
}
export interface RouterIpv6RipRouteMapMapCfgA {
  /**
  * Ethernet interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_route_map#ethernet RouterIpv6RipRouteMapA#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Loopback interface (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_route_map#loopback RouterIpv6RipRouteMapA#loopback}
  */
  readonly loopback?: number;
  /**
  * Route map name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_route_map#map RouterIpv6RipRouteMapA#map}
  */
  readonly map?: string;
  /**
  * 'in': Route map set for input filtering; 'out': Route map set for output filtering;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_route_map#route_map_direction RouterIpv6RipRouteMapA#route_map_direction}
  */
  readonly routeMapDirection?: string;
  /**
  * Trunk interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_route_map#trunk RouterIpv6RipRouteMapA#trunk}
  */
  readonly trunk?: number;
  /**
  * Tunnel interface (Tunnel interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_route_map#tunnel RouterIpv6RipRouteMapA#tunnel}
  */
  readonly tunnel?: number;
  /**
  * Virtual ethernet interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_route_map#ve RouterIpv6RipRouteMapA#ve}
  */
  readonly ve?: number;
}

export function routerIpv6RipRouteMapMapCfgAToTerraform(struct?: RouterIpv6RipRouteMapMapCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    loopback: cdktf.numberToTerraform(struct!.loopback),
    map: cdktf.stringToTerraform(struct!.map),
    route_map_direction: cdktf.stringToTerraform(struct!.routeMapDirection),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    tunnel: cdktf.numberToTerraform(struct!.tunnel),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function routerIpv6RipRouteMapMapCfgAToHclTerraform(struct?: RouterIpv6RipRouteMapMapCfgA | cdktf.IResolvable): any {
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
    loopback: {
      value: cdktf.numberToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    map: {
      value: cdktf.stringToHclTerraform(struct!.map),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_direction: {
      value: cdktf.stringToHclTerraform(struct!.routeMapDirection),
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
    tunnel: {
      value: cdktf.numberToHclTerraform(struct!.tunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class RouterIpv6RipRouteMapMapCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6RipRouteMapMapCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    if (this._routeMapDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapDirection = this._routeMapDirection;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._tunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6RipRouteMapMapCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
      this._loopback = undefined;
      this._map = undefined;
      this._routeMapDirection = undefined;
      this._trunk = undefined;
      this._tunnel = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
      this._loopback = value.loopback;
      this._map = value.map;
      this._routeMapDirection = value.routeMapDirection;
      this._trunk = value.trunk;
      this._tunnel = value.tunnel;
      this._ve = value.ve;
    }
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

  // map - computed: false, optional: true, required: false
  private _map?: string; 
  public get map() {
    return this.getStringAttribute('map');
  }
  public set map(value: string) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }

  // route_map_direction - computed: false, optional: true, required: false
  private _routeMapDirection?: string; 
  public get routeMapDirection() {
    return this.getStringAttribute('route_map_direction');
  }
  public set routeMapDirection(value: string) {
    this._routeMapDirection = value;
  }
  public resetRouteMapDirection() {
    this._routeMapDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapDirectionInput() {
    return this._routeMapDirection;
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
}

export class RouterIpv6RipRouteMapMapCfgAList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6RipRouteMapMapCfgA[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6RipRouteMapMapCfgAOutputReference {
    return new RouterIpv6RipRouteMapMapCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_route_map thunder_router_ipv6_rip_route_map}
*/
export class RouterIpv6RipRouteMapA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_ipv6_rip_route_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIpv6RipRouteMapA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIpv6RipRouteMapA to import
  * @param importFromId The id of the existing RouterIpv6RipRouteMapA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_route_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIpv6RipRouteMapA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_ipv6_rip_route_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_rip_route_map thunder_router_ipv6_rip_route_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIpv6RipRouteMapAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterIpv6RipRouteMapAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_ipv6_rip_route_map',
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
    this._id = config.id;
    this._uuid = config.uuid;
    this._mapCfg.internalValue = config.mapCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // map_cfg - computed: false, optional: true, required: false
  private _mapCfg = new RouterIpv6RipRouteMapMapCfgAList(this, "map_cfg", false);
  public get mapCfg() {
    return this._mapCfg;
  }
  public putMapCfg(value: RouterIpv6RipRouteMapMapCfgA[] | cdktf.IResolvable) {
    this._mapCfg.internalValue = value;
  }
  public resetMapCfg() {
    this._mapCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapCfgInput() {
    return this._mapCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      map_cfg: cdktf.listMapper(routerIpv6RipRouteMapMapCfgAToTerraform, true)(this._mapCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      map_cfg: {
        value: cdktf.listMapperHcl(routerIpv6RipRouteMapMapCfgAToHclTerraform, true)(this._mapCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6RipRouteMapMapCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
