// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_rip_redistribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterRipRedistributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_rip_redistribute#id RouterRipRedistribute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_rip_redistribute#uuid RouterRipRedistribute#uuid}
  */
  readonly uuid?: string;
  /**
  * redist_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_rip_redistribute#redist_list RouterRipRedistribute#redist_list}
  */
  readonly redistList?: RouterRipRedistributeRedistListStruct[] | cdktf.IResolvable;
  /**
  * vip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_rip_redistribute#vip_list RouterRipRedistribute#vip_list}
  */
  readonly vipList?: RouterRipRedistributeVipListStruct[] | cdktf.IResolvable;
}
export interface RouterRipRedistributeRedistListStruct {
  /**
  * Metric for redistributed routes (metric value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_rip_redistribute#metric RouterRipRedistribute#metric}
  */
  readonly metric?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_rip_redistribute#route_map RouterRipRedistribute#route_map}
  */
  readonly routeMap?: string;
  /**
  * 'bgp': Border Gateway Protocol (BGP); 'connected': Connected; 'floating-ip': Floating IP; 'ip-nat-list': IP NAT list; 'ip-nat': IP NAT; 'isis': ISO IS-IS; 'lw4o6': LW4O6 Prefix; 'nat-map': NAT MAP Prefix; 'static-nat': Static NAT; 'ospf': Open Shortest Path First (OSPF); 'static': Static routes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_rip_redistribute#type RouterRipRedistribute#type}
  */
  readonly type?: string;
}

export function routerRipRedistributeRedistListStructToTerraform(struct?: RouterRipRedistributeRedistListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function routerRipRedistributeRedistListStructToHclTerraform(struct?: RouterRipRedistributeRedistListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRipRedistributeRedistListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipRedistributeRedistListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRipRedistributeRedistListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._routeMap = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._routeMap = value.routeMap;
      this._type = value.type;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // type - computed: false, optional: true, required: false
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
}

export class RouterRipRedistributeRedistListStructList extends cdktf.ComplexList {
  public internalValue? : RouterRipRedistributeRedistListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterRipRedistributeRedistListStructOutputReference {
    return new RouterRipRedistributeRedistListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterRipRedistributeVipListStruct {
  /**
  * Metric for redistributed routes (metric value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_rip_redistribute#vip_metric RouterRipRedistribute#vip_metric}
  */
  readonly vipMetric?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_rip_redistribute#vip_route_map RouterRipRedistribute#vip_route_map}
  */
  readonly vipRouteMap?: string;
  /**
  * 'only-flagged': Selected Virtual IP (VIP); 'only-not-flagged': Only not flagged;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_rip_redistribute#vip_type RouterRipRedistribute#vip_type}
  */
  readonly vipType?: string;
}

export function routerRipRedistributeVipListStructToTerraform(struct?: RouterRipRedistributeVipListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vip_metric: cdktf.numberToTerraform(struct!.vipMetric),
    vip_route_map: cdktf.stringToTerraform(struct!.vipRouteMap),
    vip_type: cdktf.stringToTerraform(struct!.vipType),
  }
}


export function routerRipRedistributeVipListStructToHclTerraform(struct?: RouterRipRedistributeVipListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vip_metric: {
      value: cdktf.numberToHclTerraform(struct!.vipMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip_route_map: {
      value: cdktf.stringToHclTerraform(struct!.vipRouteMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_type: {
      value: cdktf.stringToHclTerraform(struct!.vipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterRipRedistributeVipListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterRipRedistributeVipListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vipMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipMetric = this._vipMetric;
    }
    if (this._vipRouteMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipRouteMap = this._vipRouteMap;
    }
    if (this._vipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipType = this._vipType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterRipRedistributeVipListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vipMetric = undefined;
      this._vipRouteMap = undefined;
      this._vipType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vipMetric = value.vipMetric;
      this._vipRouteMap = value.vipRouteMap;
      this._vipType = value.vipType;
    }
  }

  // vip_metric - computed: false, optional: true, required: false
  private _vipMetric?: number; 
  public get vipMetric() {
    return this.getNumberAttribute('vip_metric');
  }
  public set vipMetric(value: number) {
    this._vipMetric = value;
  }
  public resetVipMetric() {
    this._vipMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipMetricInput() {
    return this._vipMetric;
  }

  // vip_route_map - computed: false, optional: true, required: false
  private _vipRouteMap?: string; 
  public get vipRouteMap() {
    return this.getStringAttribute('vip_route_map');
  }
  public set vipRouteMap(value: string) {
    this._vipRouteMap = value;
  }
  public resetVipRouteMap() {
    this._vipRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipRouteMapInput() {
    return this._vipRouteMap;
  }

  // vip_type - computed: false, optional: true, required: false
  private _vipType?: string; 
  public get vipType() {
    return this.getStringAttribute('vip_type');
  }
  public set vipType(value: string) {
    this._vipType = value;
  }
  public resetVipType() {
    this._vipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipTypeInput() {
    return this._vipType;
  }
}

export class RouterRipRedistributeVipListStructList extends cdktf.ComplexList {
  public internalValue? : RouterRipRedistributeVipListStruct[] | cdktf.IResolvable

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
  public get(index: number): RouterRipRedistributeVipListStructOutputReference {
    return new RouterRipRedistributeVipListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_rip_redistribute thunder_router_rip_redistribute}
*/
export class RouterRipRedistribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_rip_redistribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterRipRedistribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterRipRedistribute to import
  * @param importFromId The id of the existing RouterRipRedistribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_rip_redistribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterRipRedistribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_rip_redistribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_rip_redistribute thunder_router_rip_redistribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterRipRedistributeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterRipRedistributeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_rip_redistribute',
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
    this._id = config.id;
    this._uuid = config.uuid;
    this._redistList.internalValue = config.redistList;
    this._vipList.internalValue = config.vipList;
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

  // redist_list - computed: false, optional: true, required: false
  private _redistList = new RouterRipRedistributeRedistListStructList(this, "redist_list", false);
  public get redistList() {
    return this._redistList;
  }
  public putRedistList(value: RouterRipRedistributeRedistListStruct[] | cdktf.IResolvable) {
    this._redistList.internalValue = value;
  }
  public resetRedistList() {
    this._redistList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistListInput() {
    return this._redistList.internalValue;
  }

  // vip_list - computed: false, optional: true, required: false
  private _vipList = new RouterRipRedistributeVipListStructList(this, "vip_list", false);
  public get vipList() {
    return this._vipList;
  }
  public putVipList(value: RouterRipRedistributeVipListStruct[] | cdktf.IResolvable) {
    this._vipList.internalValue = value;
  }
  public resetVipList() {
    this._vipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipListInput() {
    return this._vipList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      redist_list: cdktf.listMapper(routerRipRedistributeRedistListStructToTerraform, true)(this._redistList.internalValue),
      vip_list: cdktf.listMapper(routerRipRedistributeVipListStructToTerraform, true)(this._vipList.internalValue),
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
      redist_list: {
        value: cdktf.listMapperHcl(routerRipRedistributeRedistListStructToHclTerraform, true)(this._redistList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipRedistributeRedistListStructList",
      },
      vip_list: {
        value: cdktf.listMapperHcl(routerRipRedistributeVipListStructToHclTerraform, true)(this._vipList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterRipRedistributeVipListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
