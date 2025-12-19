// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIpv6OspfRedistributeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#id RouterIpv6OspfRedistributeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP-NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#ip_nat RouterIpv6OspfRedistributeA#ip_nat}
  */
  readonly ipNat?: number;
  /**
  * OSPFV3 default metric (OSPFV3 metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#metric_ip_nat RouterIpv6OspfRedistributeA#metric_ip_nat}
  */
  readonly metricIpNat?: number;
  /**
  * '1': Set OSPFV3 External Type 1 metrics; '2': Set OSPFV3 External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#metric_type_ip_nat RouterIpv6OspfRedistributeA#metric_type_ip_nat}
  */
  readonly metricTypeIpNat?: string;
  /**
  * ProcessId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#process_id RouterIpv6OspfRedistributeA#process_id}
  */
  readonly processId: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#route_map_ip_nat RouterIpv6OspfRedistributeA#route_map_ip_nat}
  */
  readonly routeMapIpNat?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#uuid RouterIpv6OspfRedistributeA#uuid}
  */
  readonly uuid?: string;
  /**
  * ip_nat_floating_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#ip_nat_floating_list RouterIpv6OspfRedistributeA#ip_nat_floating_list}
  */
  readonly ipNatFloatingList?: RouterIpv6OspfRedistributeIpNatFloatingListStructA[] | cdktf.IResolvable;
  /**
  * ospf_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#ospf_list RouterIpv6OspfRedistributeA#ospf_list}
  */
  readonly ospfList?: RouterIpv6OspfRedistributeOspfListStructA[] | cdktf.IResolvable;
  /**
  * redist_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#redist_list RouterIpv6OspfRedistributeA#redist_list}
  */
  readonly redistList?: RouterIpv6OspfRedistributeRedistListStructA[] | cdktf.IResolvable;
  /**
  * vip_floating_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#vip_floating_list RouterIpv6OspfRedistributeA#vip_floating_list}
  */
  readonly vipFloatingList?: RouterIpv6OspfRedistributeVipFloatingListStructA[] | cdktf.IResolvable;
  /**
  * vip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#vip_list RouterIpv6OspfRedistributeA#vip_list}
  */
  readonly vipList?: RouterIpv6OspfRedistributeVipListStructA[] | cdktf.IResolvable;
}
export interface RouterIpv6OspfRedistributeIpNatFloatingListStructA {
  /**
  * Floating-IP as forward address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#ip_nat_floating_ip_forward RouterIpv6OspfRedistributeA#ip_nat_floating_ip_forward}
  */
  readonly ipNatFloatingIpForward?: string;
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#ip_nat_prefix RouterIpv6OspfRedistributeA#ip_nat_prefix}
  */
  readonly ipNatPrefix?: string;
}

export function routerIpv6OspfRedistributeIpNatFloatingListStructAToTerraform(struct?: RouterIpv6OspfRedistributeIpNatFloatingListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_nat_floating_ip_forward: cdktf.stringToTerraform(struct!.ipNatFloatingIpForward),
    ip_nat_prefix: cdktf.stringToTerraform(struct!.ipNatPrefix),
  }
}


export function routerIpv6OspfRedistributeIpNatFloatingListStructAToHclTerraform(struct?: RouterIpv6OspfRedistributeIpNatFloatingListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_nat_floating_ip_forward: {
      value: cdktf.stringToHclTerraform(struct!.ipNatFloatingIpForward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_nat_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipNatPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfRedistributeIpNatFloatingListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfRedistributeIpNatFloatingListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipNatFloatingIpForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatFloatingIpForward = this._ipNatFloatingIpForward;
    }
    if (this._ipNatPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatPrefix = this._ipNatPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfRedistributeIpNatFloatingListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipNatFloatingIpForward = undefined;
      this._ipNatPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipNatFloatingIpForward = value.ipNatFloatingIpForward;
      this._ipNatPrefix = value.ipNatPrefix;
    }
  }

  // ip_nat_floating_ip_forward - computed: false, optional: true, required: false
  private _ipNatFloatingIpForward?: string; 
  public get ipNatFloatingIpForward() {
    return this.getStringAttribute('ip_nat_floating_ip_forward');
  }
  public set ipNatFloatingIpForward(value: string) {
    this._ipNatFloatingIpForward = value;
  }
  public resetIpNatFloatingIpForward() {
    this._ipNatFloatingIpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatFloatingIpForwardInput() {
    return this._ipNatFloatingIpForward;
  }

  // ip_nat_prefix - computed: false, optional: true, required: false
  private _ipNatPrefix?: string; 
  public get ipNatPrefix() {
    return this.getStringAttribute('ip_nat_prefix');
  }
  public set ipNatPrefix(value: string) {
    this._ipNatPrefix = value;
  }
  public resetIpNatPrefix() {
    this._ipNatPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatPrefixInput() {
    return this._ipNatPrefix;
  }
}

export class RouterIpv6OspfRedistributeIpNatFloatingListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfRedistributeIpNatFloatingListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfRedistributeIpNatFloatingListStructAOutputReference {
    return new RouterIpv6OspfRedistributeIpNatFloatingListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfRedistributeOspfListStructA {
  /**
  * OSPFV3 default metric (OSPFV3 metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#metric_ospf RouterIpv6OspfRedistributeA#metric_ospf}
  */
  readonly metricOspf?: number;
  /**
  * '1': Set OSPFV3 External Type 1 metrics; '2': Set OSPFV3 External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#metric_type_ospf RouterIpv6OspfRedistributeA#metric_type_ospf}
  */
  readonly metricTypeOspf?: string;
  /**
  * Open Shortest Path First (OSPF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#ospf RouterIpv6OspfRedistributeA#ospf}
  */
  readonly ospf?: number;
  /**
  * OSPFV3 process tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#process_id RouterIpv6OspfRedistributeA#process_id}
  */
  readonly processId?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#route_map_ospf RouterIpv6OspfRedistributeA#route_map_ospf}
  */
  readonly routeMapOspf?: string;
}

export function routerIpv6OspfRedistributeOspfListStructAToTerraform(struct?: RouterIpv6OspfRedistributeOspfListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_ospf: cdktf.numberToTerraform(struct!.metricOspf),
    metric_type_ospf: cdktf.stringToTerraform(struct!.metricTypeOspf),
    ospf: cdktf.numberToTerraform(struct!.ospf),
    process_id: cdktf.stringToTerraform(struct!.processId),
    route_map_ospf: cdktf.stringToTerraform(struct!.routeMapOspf),
  }
}


export function routerIpv6OspfRedistributeOspfListStructAToHclTerraform(struct?: RouterIpv6OspfRedistributeOspfListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_ospf: {
      value: cdktf.numberToHclTerraform(struct!.metricOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type_ospf: {
      value: cdktf.stringToHclTerraform(struct!.metricTypeOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ospf: {
      value: cdktf.numberToHclTerraform(struct!.ospf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    process_id: {
      value: cdktf.stringToHclTerraform(struct!.processId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_ospf: {
      value: cdktf.stringToHclTerraform(struct!.routeMapOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfRedistributeOspfListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfRedistributeOspfListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricOspf = this._metricOspf;
    }
    if (this._metricTypeOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTypeOspf = this._metricTypeOspf;
    }
    if (this._ospf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf;
    }
    if (this._processId !== undefined) {
      hasAnyValues = true;
      internalValueResult.processId = this._processId;
    }
    if (this._routeMapOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOspf = this._routeMapOspf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfRedistributeOspfListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricOspf = undefined;
      this._metricTypeOspf = undefined;
      this._ospf = undefined;
      this._processId = undefined;
      this._routeMapOspf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricOspf = value.metricOspf;
      this._metricTypeOspf = value.metricTypeOspf;
      this._ospf = value.ospf;
      this._processId = value.processId;
      this._routeMapOspf = value.routeMapOspf;
    }
  }

  // metric_ospf - computed: false, optional: true, required: false
  private _metricOspf?: number; 
  public get metricOspf() {
    return this.getNumberAttribute('metric_ospf');
  }
  public set metricOspf(value: number) {
    this._metricOspf = value;
  }
  public resetMetricOspf() {
    this._metricOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricOspfInput() {
    return this._metricOspf;
  }

  // metric_type_ospf - computed: false, optional: true, required: false
  private _metricTypeOspf?: string; 
  public get metricTypeOspf() {
    return this.getStringAttribute('metric_type_ospf');
  }
  public set metricTypeOspf(value: string) {
    this._metricTypeOspf = value;
  }
  public resetMetricTypeOspf() {
    this._metricTypeOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeOspfInput() {
    return this._metricTypeOspf;
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

  // process_id - computed: false, optional: true, required: false
  private _processId?: string; 
  public get processId() {
    return this.getStringAttribute('process_id');
  }
  public set processId(value: string) {
    this._processId = value;
  }
  public resetProcessId() {
    this._processId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // route_map_ospf - computed: false, optional: true, required: false
  private _routeMapOspf?: string; 
  public get routeMapOspf() {
    return this.getStringAttribute('route_map_ospf');
  }
  public set routeMapOspf(value: string) {
    this._routeMapOspf = value;
  }
  public resetRouteMapOspf() {
    this._routeMapOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOspfInput() {
    return this._routeMapOspf;
  }
}

export class RouterIpv6OspfRedistributeOspfListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfRedistributeOspfListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfRedistributeOspfListStructAOutputReference {
    return new RouterIpv6OspfRedistributeOspfListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfRedistributeRedistListStructA {
  /**
  * OSPFV3 default metric (OSPFV3 metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#metric RouterIpv6OspfRedistributeA#metric}
  */
  readonly metric?: number;
  /**
  * '1': Set OSPFV3 External Type 1 metrics; '2': Set OSPFV3 External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#metric_type RouterIpv6OspfRedistributeA#metric_type}
  */
  readonly metricType?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#route_map RouterIpv6OspfRedistributeA#route_map}
  */
  readonly routeMap?: string;
  /**
  * 'bgp': Border Gateway Protocol (BGP); 'connected': Connected; 'floating-ip': Floating IP; 'ip-nat-list': IP NAT list; 'nat-map': NAT MAP Prefix; 'static-nat': Static NAT; 'public-ip': Public IPv6 Prefixes; 'nat64': NAT64 Prefix; 'lw4o6': LW4O6 Prefix; 'isis': ISO IS-IS; 'rip': Routing Information Protocol (RIP); 'static': Static routes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#type RouterIpv6OspfRedistributeA#type}
  */
  readonly type?: string;
}

export function routerIpv6OspfRedistributeRedistListStructAToTerraform(struct?: RouterIpv6OspfRedistributeRedistListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function routerIpv6OspfRedistributeRedistListStructAToHclTerraform(struct?: RouterIpv6OspfRedistributeRedistListStructA | cdktf.IResolvable): any {
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
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
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

export class RouterIpv6OspfRedistributeRedistListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfRedistributeRedistListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
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

  public set internalValue(value: RouterIpv6OspfRedistributeRedistListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._metricType = undefined;
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
      this._metricType = value.metricType;
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

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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

export class RouterIpv6OspfRedistributeRedistListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfRedistributeRedistListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfRedistributeRedistListStructAOutputReference {
    return new RouterIpv6OspfRedistributeRedistListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfRedistributeVipFloatingListStructA {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#vip_address RouterIpv6OspfRedistributeA#vip_address}
  */
  readonly vipAddress?: string;
  /**
  * Floating-IP as forward address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#vip_floating_ip_forward RouterIpv6OspfRedistributeA#vip_floating_ip_forward}
  */
  readonly vipFloatingIpForward?: string;
}

export function routerIpv6OspfRedistributeVipFloatingListStructAToTerraform(struct?: RouterIpv6OspfRedistributeVipFloatingListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vip_address: cdktf.stringToTerraform(struct!.vipAddress),
    vip_floating_ip_forward: cdktf.stringToTerraform(struct!.vipFloatingIpForward),
  }
}


export function routerIpv6OspfRedistributeVipFloatingListStructAToHclTerraform(struct?: RouterIpv6OspfRedistributeVipFloatingListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vip_address: {
      value: cdktf.stringToHclTerraform(struct!.vipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_floating_ip_forward: {
      value: cdktf.stringToHclTerraform(struct!.vipFloatingIpForward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfRedistributeVipFloatingListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfRedistributeVipFloatingListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipAddress = this._vipAddress;
    }
    if (this._vipFloatingIpForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipFloatingIpForward = this._vipFloatingIpForward;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfRedistributeVipFloatingListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vipAddress = undefined;
      this._vipFloatingIpForward = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vipAddress = value.vipAddress;
      this._vipFloatingIpForward = value.vipFloatingIpForward;
    }
  }

  // vip_address - computed: false, optional: true, required: false
  private _vipAddress?: string; 
  public get vipAddress() {
    return this.getStringAttribute('vip_address');
  }
  public set vipAddress(value: string) {
    this._vipAddress = value;
  }
  public resetVipAddress() {
    this._vipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipAddressInput() {
    return this._vipAddress;
  }

  // vip_floating_ip_forward - computed: false, optional: true, required: false
  private _vipFloatingIpForward?: string; 
  public get vipFloatingIpForward() {
    return this.getStringAttribute('vip_floating_ip_forward');
  }
  public set vipFloatingIpForward(value: string) {
    this._vipFloatingIpForward = value;
  }
  public resetVipFloatingIpForward() {
    this._vipFloatingIpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipFloatingIpForwardInput() {
    return this._vipFloatingIpForward;
  }
}

export class RouterIpv6OspfRedistributeVipFloatingListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfRedistributeVipFloatingListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfRedistributeVipFloatingListStructAOutputReference {
    return new RouterIpv6OspfRedistributeVipFloatingListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIpv6OspfRedistributeVipListStructA {
  /**
  * '1': Set OSPFV3 External Type 1 metrics; '2': Set OSPFV3 External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#metric_type_vip RouterIpv6OspfRedistributeA#metric_type_vip}
  */
  readonly metricTypeVip?: string;
  /**
  * OSPFV3 default metric (OSPFV3 metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#metric_vip RouterIpv6OspfRedistributeA#metric_vip}
  */
  readonly metricVip?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#route_map_vip RouterIpv6OspfRedistributeA#route_map_vip}
  */
  readonly routeMapVip?: string;
  /**
  * 'only-flagged': Selected Virtual IP (VIP); 'only-not-flagged': Only not flagged;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#type_vip RouterIpv6OspfRedistributeA#type_vip}
  */
  readonly typeVip?: string;
}

export function routerIpv6OspfRedistributeVipListStructAToTerraform(struct?: RouterIpv6OspfRedistributeVipListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_type_vip: cdktf.stringToTerraform(struct!.metricTypeVip),
    metric_vip: cdktf.numberToTerraform(struct!.metricVip),
    route_map_vip: cdktf.stringToTerraform(struct!.routeMapVip),
    type_vip: cdktf.stringToTerraform(struct!.typeVip),
  }
}


export function routerIpv6OspfRedistributeVipListStructAToHclTerraform(struct?: RouterIpv6OspfRedistributeVipListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_type_vip: {
      value: cdktf.stringToHclTerraform(struct!.metricTypeVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_vip: {
      value: cdktf.numberToHclTerraform(struct!.metricVip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map_vip: {
      value: cdktf.stringToHclTerraform(struct!.routeMapVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_vip: {
      value: cdktf.stringToHclTerraform(struct!.typeVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIpv6OspfRedistributeVipListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIpv6OspfRedistributeVipListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricTypeVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTypeVip = this._metricTypeVip;
    }
    if (this._metricVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricVip = this._metricVip;
    }
    if (this._routeMapVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapVip = this._routeMapVip;
    }
    if (this._typeVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeVip = this._typeVip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIpv6OspfRedistributeVipListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricTypeVip = undefined;
      this._metricVip = undefined;
      this._routeMapVip = undefined;
      this._typeVip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricTypeVip = value.metricTypeVip;
      this._metricVip = value.metricVip;
      this._routeMapVip = value.routeMapVip;
      this._typeVip = value.typeVip;
    }
  }

  // metric_type_vip - computed: false, optional: true, required: false
  private _metricTypeVip?: string; 
  public get metricTypeVip() {
    return this.getStringAttribute('metric_type_vip');
  }
  public set metricTypeVip(value: string) {
    this._metricTypeVip = value;
  }
  public resetMetricTypeVip() {
    this._metricTypeVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeVipInput() {
    return this._metricTypeVip;
  }

  // metric_vip - computed: false, optional: true, required: false
  private _metricVip?: number; 
  public get metricVip() {
    return this.getNumberAttribute('metric_vip');
  }
  public set metricVip(value: number) {
    this._metricVip = value;
  }
  public resetMetricVip() {
    this._metricVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricVipInput() {
    return this._metricVip;
  }

  // route_map_vip - computed: false, optional: true, required: false
  private _routeMapVip?: string; 
  public get routeMapVip() {
    return this.getStringAttribute('route_map_vip');
  }
  public set routeMapVip(value: string) {
    this._routeMapVip = value;
  }
  public resetRouteMapVip() {
    this._routeMapVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapVipInput() {
    return this._routeMapVip;
  }

  // type_vip - computed: false, optional: true, required: false
  private _typeVip?: string; 
  public get typeVip() {
    return this.getStringAttribute('type_vip');
  }
  public set typeVip(value: string) {
    this._typeVip = value;
  }
  public resetTypeVip() {
    this._typeVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeVipInput() {
    return this._typeVip;
  }
}

export class RouterIpv6OspfRedistributeVipListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterIpv6OspfRedistributeVipListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterIpv6OspfRedistributeVipListStructAOutputReference {
    return new RouterIpv6OspfRedistributeVipListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute thunder_router_ipv6_ospf_redistribute}
*/
export class RouterIpv6OspfRedistributeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_ipv6_ospf_redistribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIpv6OspfRedistributeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIpv6OspfRedistributeA to import
  * @param importFromId The id of the existing RouterIpv6OspfRedistributeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIpv6OspfRedistributeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_ipv6_ospf_redistribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_ipv6_ospf_redistribute thunder_router_ipv6_ospf_redistribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIpv6OspfRedistributeAConfig
  */
  public constructor(scope: Construct, id: string, config: RouterIpv6OspfRedistributeAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_ipv6_ospf_redistribute',
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
    this._ipNat = config.ipNat;
    this._metricIpNat = config.metricIpNat;
    this._metricTypeIpNat = config.metricTypeIpNat;
    this._processId = config.processId;
    this._routeMapIpNat = config.routeMapIpNat;
    this._uuid = config.uuid;
    this._ipNatFloatingList.internalValue = config.ipNatFloatingList;
    this._ospfList.internalValue = config.ospfList;
    this._redistList.internalValue = config.redistList;
    this._vipFloatingList.internalValue = config.vipFloatingList;
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

  // metric_ip_nat - computed: false, optional: true, required: false
  private _metricIpNat?: number; 
  public get metricIpNat() {
    return this.getNumberAttribute('metric_ip_nat');
  }
  public set metricIpNat(value: number) {
    this._metricIpNat = value;
  }
  public resetMetricIpNat() {
    this._metricIpNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIpNatInput() {
    return this._metricIpNat;
  }

  // metric_type_ip_nat - computed: false, optional: true, required: false
  private _metricTypeIpNat?: string; 
  public get metricTypeIpNat() {
    return this.getStringAttribute('metric_type_ip_nat');
  }
  public set metricTypeIpNat(value: string) {
    this._metricTypeIpNat = value;
  }
  public resetMetricTypeIpNat() {
    this._metricTypeIpNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeIpNatInput() {
    return this._metricTypeIpNat;
  }

  // process_id - computed: false, optional: false, required: true
  private _processId?: string; 
  public get processId() {
    return this.getStringAttribute('process_id');
  }
  public set processId(value: string) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // route_map_ip_nat - computed: false, optional: true, required: false
  private _routeMapIpNat?: string; 
  public get routeMapIpNat() {
    return this.getStringAttribute('route_map_ip_nat');
  }
  public set routeMapIpNat(value: string) {
    this._routeMapIpNat = value;
  }
  public resetRouteMapIpNat() {
    this._routeMapIpNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapIpNatInput() {
    return this._routeMapIpNat;
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

  // ip_nat_floating_list - computed: false, optional: true, required: false
  private _ipNatFloatingList = new RouterIpv6OspfRedistributeIpNatFloatingListStructAList(this, "ip_nat_floating_list", false);
  public get ipNatFloatingList() {
    return this._ipNatFloatingList;
  }
  public putIpNatFloatingList(value: RouterIpv6OspfRedistributeIpNatFloatingListStructA[] | cdktf.IResolvable) {
    this._ipNatFloatingList.internalValue = value;
  }
  public resetIpNatFloatingList() {
    this._ipNatFloatingList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNatFloatingListInput() {
    return this._ipNatFloatingList.internalValue;
  }

  // ospf_list - computed: false, optional: true, required: false
  private _ospfList = new RouterIpv6OspfRedistributeOspfListStructAList(this, "ospf_list", false);
  public get ospfList() {
    return this._ospfList;
  }
  public putOspfList(value: RouterIpv6OspfRedistributeOspfListStructA[] | cdktf.IResolvable) {
    this._ospfList.internalValue = value;
  }
  public resetOspfList() {
    this._ospfList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfListInput() {
    return this._ospfList.internalValue;
  }

  // redist_list - computed: false, optional: true, required: false
  private _redistList = new RouterIpv6OspfRedistributeRedistListStructAList(this, "redist_list", false);
  public get redistList() {
    return this._redistList;
  }
  public putRedistList(value: RouterIpv6OspfRedistributeRedistListStructA[] | cdktf.IResolvable) {
    this._redistList.internalValue = value;
  }
  public resetRedistList() {
    this._redistList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistListInput() {
    return this._redistList.internalValue;
  }

  // vip_floating_list - computed: false, optional: true, required: false
  private _vipFloatingList = new RouterIpv6OspfRedistributeVipFloatingListStructAList(this, "vip_floating_list", false);
  public get vipFloatingList() {
    return this._vipFloatingList;
  }
  public putVipFloatingList(value: RouterIpv6OspfRedistributeVipFloatingListStructA[] | cdktf.IResolvable) {
    this._vipFloatingList.internalValue = value;
  }
  public resetVipFloatingList() {
    this._vipFloatingList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipFloatingListInput() {
    return this._vipFloatingList.internalValue;
  }

  // vip_list - computed: false, optional: true, required: false
  private _vipList = new RouterIpv6OspfRedistributeVipListStructAList(this, "vip_list", false);
  public get vipList() {
    return this._vipList;
  }
  public putVipList(value: RouterIpv6OspfRedistributeVipListStructA[] | cdktf.IResolvable) {
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
      ip_nat: cdktf.numberToTerraform(this._ipNat),
      metric_ip_nat: cdktf.numberToTerraform(this._metricIpNat),
      metric_type_ip_nat: cdktf.stringToTerraform(this._metricTypeIpNat),
      process_id: cdktf.stringToTerraform(this._processId),
      route_map_ip_nat: cdktf.stringToTerraform(this._routeMapIpNat),
      uuid: cdktf.stringToTerraform(this._uuid),
      ip_nat_floating_list: cdktf.listMapper(routerIpv6OspfRedistributeIpNatFloatingListStructAToTerraform, true)(this._ipNatFloatingList.internalValue),
      ospf_list: cdktf.listMapper(routerIpv6OspfRedistributeOspfListStructAToTerraform, true)(this._ospfList.internalValue),
      redist_list: cdktf.listMapper(routerIpv6OspfRedistributeRedistListStructAToTerraform, true)(this._redistList.internalValue),
      vip_floating_list: cdktf.listMapper(routerIpv6OspfRedistributeVipFloatingListStructAToTerraform, true)(this._vipFloatingList.internalValue),
      vip_list: cdktf.listMapper(routerIpv6OspfRedistributeVipListStructAToTerraform, true)(this._vipList.internalValue),
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
      ip_nat: {
        value: cdktf.numberToHclTerraform(this._ipNat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_ip_nat: {
        value: cdktf.numberToHclTerraform(this._metricIpNat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_type_ip_nat: {
        value: cdktf.stringToHclTerraform(this._metricTypeIpNat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_id: {
        value: cdktf.stringToHclTerraform(this._processId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_ip_nat: {
        value: cdktf.stringToHclTerraform(this._routeMapIpNat),
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
      ip_nat_floating_list: {
        value: cdktf.listMapperHcl(routerIpv6OspfRedistributeIpNatFloatingListStructAToHclTerraform, true)(this._ipNatFloatingList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6OspfRedistributeIpNatFloatingListStructAList",
      },
      ospf_list: {
        value: cdktf.listMapperHcl(routerIpv6OspfRedistributeOspfListStructAToHclTerraform, true)(this._ospfList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6OspfRedistributeOspfListStructAList",
      },
      redist_list: {
        value: cdktf.listMapperHcl(routerIpv6OspfRedistributeRedistListStructAToHclTerraform, true)(this._redistList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6OspfRedistributeRedistListStructAList",
      },
      vip_floating_list: {
        value: cdktf.listMapperHcl(routerIpv6OspfRedistributeVipFloatingListStructAToHclTerraform, true)(this._vipFloatingList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6OspfRedistributeVipFloatingListStructAList",
      },
      vip_list: {
        value: cdktf.listMapperHcl(routerIpv6OspfRedistributeVipListStructAToHclTerraform, true)(this._vipList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIpv6OspfRedistributeVipListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
