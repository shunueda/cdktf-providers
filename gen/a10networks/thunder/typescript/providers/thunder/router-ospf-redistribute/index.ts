// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterOspfRedistributeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#id RouterOspfRedistributeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP-NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#ip_nat RouterOspfRedistributeA#ip_nat}
  */
  readonly ipNat?: number;
  /**
  * OSPF default metric (OSPF metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#metric_ip_nat RouterOspfRedistributeA#metric_ip_nat}
  */
  readonly metricIpNat?: number;
  /**
  * '1': Set OSPF External Type 1 metrics; '2': Set OSPF External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#metric_type_ip_nat RouterOspfRedistributeA#metric_type_ip_nat}
  */
  readonly metricTypeIpNat?: string;
  /**
  * ProcessId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#process_id RouterOspfRedistributeA#process_id}
  */
  readonly processId: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#route_map_ip_nat RouterOspfRedistributeA#route_map_ip_nat}
  */
  readonly routeMapIpNat?: string;
  /**
  * Set tag for routes redistributed into OSPF (32-bit tag value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#tag_ip_nat RouterOspfRedistributeA#tag_ip_nat}
  */
  readonly tagIpNat?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#uuid RouterOspfRedistributeA#uuid}
  */
  readonly uuid?: string;
  /**
  * ip_nat_floating_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#ip_nat_floating_list RouterOspfRedistributeA#ip_nat_floating_list}
  */
  readonly ipNatFloatingList?: RouterOspfRedistributeIpNatFloatingListStructA[] | cdktf.IResolvable;
  /**
  * ospf_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#ospf_list RouterOspfRedistributeA#ospf_list}
  */
  readonly ospfList?: RouterOspfRedistributeOspfListStructA[] | cdktf.IResolvable;
  /**
  * redist_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#redist_list RouterOspfRedistributeA#redist_list}
  */
  readonly redistList?: RouterOspfRedistributeRedistListStructA[] | cdktf.IResolvable;
  /**
  * vip_floating_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#vip_floating_list RouterOspfRedistributeA#vip_floating_list}
  */
  readonly vipFloatingList?: RouterOspfRedistributeVipFloatingListStructA[] | cdktf.IResolvable;
  /**
  * vip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#vip_list RouterOspfRedistributeA#vip_list}
  */
  readonly vipList?: RouterOspfRedistributeVipListStructA[] | cdktf.IResolvable;
}
export interface RouterOspfRedistributeIpNatFloatingListStructA {
  /**
  * Floating-IP as forward address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#ip_nat_floating_ip_forward RouterOspfRedistributeA#ip_nat_floating_ip_forward}
  */
  readonly ipNatFloatingIpForward?: string;
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#ip_nat_prefix RouterOspfRedistributeA#ip_nat_prefix}
  */
  readonly ipNatPrefix?: string;
}

export function routerOspfRedistributeIpNatFloatingListStructAToTerraform(struct?: RouterOspfRedistributeIpNatFloatingListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_nat_floating_ip_forward: cdktf.stringToTerraform(struct!.ipNatFloatingIpForward),
    ip_nat_prefix: cdktf.stringToTerraform(struct!.ipNatPrefix),
  }
}


export function routerOspfRedistributeIpNatFloatingListStructAToHclTerraform(struct?: RouterOspfRedistributeIpNatFloatingListStructA | cdktf.IResolvable): any {
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

export class RouterOspfRedistributeIpNatFloatingListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfRedistributeIpNatFloatingListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterOspfRedistributeIpNatFloatingListStructA | cdktf.IResolvable | undefined) {
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

export class RouterOspfRedistributeIpNatFloatingListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterOspfRedistributeIpNatFloatingListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfRedistributeIpNatFloatingListStructAOutputReference {
    return new RouterOspfRedistributeIpNatFloatingListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfRedistributeOspfListStructA {
  /**
  * OSPF default metric (OSPF metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#metric_ospf RouterOspfRedistributeA#metric_ospf}
  */
  readonly metricOspf?: number;
  /**
  * '1': Set OSPF External Type 1 metrics; '2': Set OSPF External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#metric_type_ospf RouterOspfRedistributeA#metric_type_ospf}
  */
  readonly metricTypeOspf?: string;
  /**
  * Open Shortest Path First (OSPF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#ospf RouterOspfRedistributeA#ospf}
  */
  readonly ospf?: number;
  /**
  * OSPF process ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#process_id RouterOspfRedistributeA#process_id}
  */
  readonly processId?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#route_map_ospf RouterOspfRedistributeA#route_map_ospf}
  */
  readonly routeMapOspf?: string;
  /**
  * Set tag for routes redistributed into OSPF (32-bit tag value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#tag_ospf RouterOspfRedistributeA#tag_ospf}
  */
  readonly tagOspf?: number;
}

export function routerOspfRedistributeOspfListStructAToTerraform(struct?: RouterOspfRedistributeOspfListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_ospf: cdktf.numberToTerraform(struct!.metricOspf),
    metric_type_ospf: cdktf.stringToTerraform(struct!.metricTypeOspf),
    ospf: cdktf.numberToTerraform(struct!.ospf),
    process_id: cdktf.numberToTerraform(struct!.processId),
    route_map_ospf: cdktf.stringToTerraform(struct!.routeMapOspf),
    tag_ospf: cdktf.numberToTerraform(struct!.tagOspf),
  }
}


export function routerOspfRedistributeOspfListStructAToHclTerraform(struct?: RouterOspfRedistributeOspfListStructA | cdktf.IResolvable): any {
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
      value: cdktf.numberToHclTerraform(struct!.processId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map_ospf: {
      value: cdktf.stringToHclTerraform(struct!.routeMapOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_ospf: {
      value: cdktf.numberToHclTerraform(struct!.tagOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterOspfRedistributeOspfListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfRedistributeOspfListStructA | cdktf.IResolvable | undefined {
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
    if (this._tagOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagOspf = this._tagOspf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfRedistributeOspfListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricOspf = undefined;
      this._metricTypeOspf = undefined;
      this._ospf = undefined;
      this._processId = undefined;
      this._routeMapOspf = undefined;
      this._tagOspf = undefined;
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
      this._tagOspf = value.tagOspf;
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
  private _processId?: number; 
  public get processId() {
    return this.getNumberAttribute('process_id');
  }
  public set processId(value: number) {
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

  // tag_ospf - computed: false, optional: true, required: false
  private _tagOspf?: number; 
  public get tagOspf() {
    return this.getNumberAttribute('tag_ospf');
  }
  public set tagOspf(value: number) {
    this._tagOspf = value;
  }
  public resetTagOspf() {
    this._tagOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagOspfInput() {
    return this._tagOspf;
  }
}

export class RouterOspfRedistributeOspfListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterOspfRedistributeOspfListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfRedistributeOspfListStructAOutputReference {
    return new RouterOspfRedistributeOspfListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfRedistributeRedistListStructA {
  /**
  * OSPF default metric (OSPF metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#metric RouterOspfRedistributeA#metric}
  */
  readonly metric?: number;
  /**
  * '1': Set OSPF External Type 1 metrics; '2': Set OSPF External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#metric_type RouterOspfRedistributeA#metric_type}
  */
  readonly metricType?: string;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#route_map RouterOspfRedistributeA#route_map}
  */
  readonly routeMap?: string;
  /**
  * Set tag for routes redistributed into OSPF (32-bit tag value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#tag RouterOspfRedistributeA#tag}
  */
  readonly tag?: number;
  /**
  * 'bgp': Border Gateway Protocol (BGP); 'connected': Connected; 'floating-ip': Floating IP; 'ip-nat-list': IP NAT list; 'lw4o6': LW4O6 Prefix; 'nat-map': NAT MAP Prefix; 'static-nat': Static NAT; 'isis': ISO IS-IS; 'rip': Routing Information Protocol (RIP); 'static': Static routes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#type RouterOspfRedistributeA#type}
  */
  readonly type?: string;
}

export function routerOspfRedistributeRedistListStructAToTerraform(struct?: RouterOspfRedistributeRedistListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    tag: cdktf.numberToTerraform(struct!.tag),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function routerOspfRedistributeRedistListStructAToHclTerraform(struct?: RouterOspfRedistributeRedistListStructA | cdktf.IResolvable): any {
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
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class RouterOspfRedistributeRedistListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfRedistributeRedistListStructA | cdktf.IResolvable | undefined {
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
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfRedistributeRedistListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._metricType = undefined;
      this._routeMap = undefined;
      this._tag = undefined;
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
      this._tag = value.tag;
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

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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

export class RouterOspfRedistributeRedistListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterOspfRedistributeRedistListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfRedistributeRedistListStructAOutputReference {
    return new RouterOspfRedistributeRedistListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfRedistributeVipFloatingListStructA {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#vip_address RouterOspfRedistributeA#vip_address}
  */
  readonly vipAddress?: string;
  /**
  * Floating-IP as forward address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#vip_floating_ip_forward RouterOspfRedistributeA#vip_floating_ip_forward}
  */
  readonly vipFloatingIpForward?: string;
}

export function routerOspfRedistributeVipFloatingListStructAToTerraform(struct?: RouterOspfRedistributeVipFloatingListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vip_address: cdktf.stringToTerraform(struct!.vipAddress),
    vip_floating_ip_forward: cdktf.stringToTerraform(struct!.vipFloatingIpForward),
  }
}


export function routerOspfRedistributeVipFloatingListStructAToHclTerraform(struct?: RouterOspfRedistributeVipFloatingListStructA | cdktf.IResolvable): any {
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

export class RouterOspfRedistributeVipFloatingListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfRedistributeVipFloatingListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterOspfRedistributeVipFloatingListStructA | cdktf.IResolvable | undefined) {
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

export class RouterOspfRedistributeVipFloatingListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterOspfRedistributeVipFloatingListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfRedistributeVipFloatingListStructAOutputReference {
    return new RouterOspfRedistributeVipFloatingListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterOspfRedistributeVipListStructA {
  /**
  * '1': Set OSPF External Type 1 metrics; '2': Set OSPF External Type 2 metrics;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#metric_type_vip RouterOspfRedistributeA#metric_type_vip}
  */
  readonly metricTypeVip?: string;
  /**
  * OSPF default metric (OSPF metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#metric_vip RouterOspfRedistributeA#metric_vip}
  */
  readonly metricVip?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#route_map_vip RouterOspfRedistributeA#route_map_vip}
  */
  readonly routeMapVip?: string;
  /**
  * Set tag for routes redistributed into OSPF (32-bit tag value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#tag_vip RouterOspfRedistributeA#tag_vip}
  */
  readonly tagVip?: number;
  /**
  * 'only-flagged': Selected Virtual IP (VIP); 'only-not-flagged': Only not flagged;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#type_vip RouterOspfRedistributeA#type_vip}
  */
  readonly typeVip?: string;
}

export function routerOspfRedistributeVipListStructAToTerraform(struct?: RouterOspfRedistributeVipListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_type_vip: cdktf.stringToTerraform(struct!.metricTypeVip),
    metric_vip: cdktf.numberToTerraform(struct!.metricVip),
    route_map_vip: cdktf.stringToTerraform(struct!.routeMapVip),
    tag_vip: cdktf.numberToTerraform(struct!.tagVip),
    type_vip: cdktf.stringToTerraform(struct!.typeVip),
  }
}


export function routerOspfRedistributeVipListStructAToHclTerraform(struct?: RouterOspfRedistributeVipListStructA | cdktf.IResolvable): any {
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
    tag_vip: {
      value: cdktf.numberToHclTerraform(struct!.tagVip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class RouterOspfRedistributeVipListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterOspfRedistributeVipListStructA | cdktf.IResolvable | undefined {
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
    if (this._tagVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagVip = this._tagVip;
    }
    if (this._typeVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeVip = this._typeVip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterOspfRedistributeVipListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricTypeVip = undefined;
      this._metricVip = undefined;
      this._routeMapVip = undefined;
      this._tagVip = undefined;
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
      this._tagVip = value.tagVip;
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

  // tag_vip - computed: false, optional: true, required: false
  private _tagVip?: number; 
  public get tagVip() {
    return this.getNumberAttribute('tag_vip');
  }
  public set tagVip(value: number) {
    this._tagVip = value;
  }
  public resetTagVip() {
    this._tagVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagVipInput() {
    return this._tagVip;
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

export class RouterOspfRedistributeVipListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterOspfRedistributeVipListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterOspfRedistributeVipListStructAOutputReference {
    return new RouterOspfRedistributeVipListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute thunder_router_ospf_redistribute}
*/
export class RouterOspfRedistributeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_ospf_redistribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterOspfRedistributeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterOspfRedistributeA to import
  * @param importFromId The id of the existing RouterOspfRedistributeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterOspfRedistributeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_ospf_redistribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_ospf_redistribute thunder_router_ospf_redistribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterOspfRedistributeAConfig
  */
  public constructor(scope: Construct, id: string, config: RouterOspfRedistributeAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_ospf_redistribute',
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
    this._ipNat = config.ipNat;
    this._metricIpNat = config.metricIpNat;
    this._metricTypeIpNat = config.metricTypeIpNat;
    this._processId = config.processId;
    this._routeMapIpNat = config.routeMapIpNat;
    this._tagIpNat = config.tagIpNat;
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

  // tag_ip_nat - computed: false, optional: true, required: false
  private _tagIpNat?: number; 
  public get tagIpNat() {
    return this.getNumberAttribute('tag_ip_nat');
  }
  public set tagIpNat(value: number) {
    this._tagIpNat = value;
  }
  public resetTagIpNat() {
    this._tagIpNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIpNatInput() {
    return this._tagIpNat;
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
  private _ipNatFloatingList = new RouterOspfRedistributeIpNatFloatingListStructAList(this, "ip_nat_floating_list", false);
  public get ipNatFloatingList() {
    return this._ipNatFloatingList;
  }
  public putIpNatFloatingList(value: RouterOspfRedistributeIpNatFloatingListStructA[] | cdktf.IResolvable) {
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
  private _ospfList = new RouterOspfRedistributeOspfListStructAList(this, "ospf_list", false);
  public get ospfList() {
    return this._ospfList;
  }
  public putOspfList(value: RouterOspfRedistributeOspfListStructA[] | cdktf.IResolvable) {
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
  private _redistList = new RouterOspfRedistributeRedistListStructAList(this, "redist_list", false);
  public get redistList() {
    return this._redistList;
  }
  public putRedistList(value: RouterOspfRedistributeRedistListStructA[] | cdktf.IResolvable) {
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
  private _vipFloatingList = new RouterOspfRedistributeVipFloatingListStructAList(this, "vip_floating_list", false);
  public get vipFloatingList() {
    return this._vipFloatingList;
  }
  public putVipFloatingList(value: RouterOspfRedistributeVipFloatingListStructA[] | cdktf.IResolvable) {
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
  private _vipList = new RouterOspfRedistributeVipListStructAList(this, "vip_list", false);
  public get vipList() {
    return this._vipList;
  }
  public putVipList(value: RouterOspfRedistributeVipListStructA[] | cdktf.IResolvable) {
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
      tag_ip_nat: cdktf.numberToTerraform(this._tagIpNat),
      uuid: cdktf.stringToTerraform(this._uuid),
      ip_nat_floating_list: cdktf.listMapper(routerOspfRedistributeIpNatFloatingListStructAToTerraform, true)(this._ipNatFloatingList.internalValue),
      ospf_list: cdktf.listMapper(routerOspfRedistributeOspfListStructAToTerraform, true)(this._ospfList.internalValue),
      redist_list: cdktf.listMapper(routerOspfRedistributeRedistListStructAToTerraform, true)(this._redistList.internalValue),
      vip_floating_list: cdktf.listMapper(routerOspfRedistributeVipFloatingListStructAToTerraform, true)(this._vipFloatingList.internalValue),
      vip_list: cdktf.listMapper(routerOspfRedistributeVipListStructAToTerraform, true)(this._vipList.internalValue),
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
      tag_ip_nat: {
        value: cdktf.numberToHclTerraform(this._tagIpNat),
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
      ip_nat_floating_list: {
        value: cdktf.listMapperHcl(routerOspfRedistributeIpNatFloatingListStructAToHclTerraform, true)(this._ipNatFloatingList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfRedistributeIpNatFloatingListStructAList",
      },
      ospf_list: {
        value: cdktf.listMapperHcl(routerOspfRedistributeOspfListStructAToHclTerraform, true)(this._ospfList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfRedistributeOspfListStructAList",
      },
      redist_list: {
        value: cdktf.listMapperHcl(routerOspfRedistributeRedistListStructAToHclTerraform, true)(this._redistList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfRedistributeRedistListStructAList",
      },
      vip_floating_list: {
        value: cdktf.listMapperHcl(routerOspfRedistributeVipFloatingListStructAToHclTerraform, true)(this._vipFloatingList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfRedistributeVipFloatingListStructAList",
      },
      vip_list: {
        value: cdktf.listMapperHcl(routerOspfRedistributeVipListStructAToHclTerraform, true)(this._vipList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterOspfRedistributeVipListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
