// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpRedistributeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * AsNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#as_number RouterBgpRedistributeA#as_number}
  */
  readonly asNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#id RouterBgpRedistributeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#uuid RouterBgpRedistributeA#uuid}
  */
  readonly uuid?: string;
  /**
  * connected_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#connected_cfg RouterBgpRedistributeA#connected_cfg}
  */
  readonly connectedCfg?: RouterBgpRedistributeConnectedCfgA;
  /**
  * floating_ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#floating_ip_cfg RouterBgpRedistributeA#floating_ip_cfg}
  */
  readonly floatingIpCfg?: RouterBgpRedistributeFloatingIpCfgA;
  /**
  * ip_nat_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#ip_nat_cfg RouterBgpRedistributeA#ip_nat_cfg}
  */
  readonly ipNatCfg?: RouterBgpRedistributeIpNatCfgA;
  /**
  * ip_nat_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#ip_nat_list_cfg RouterBgpRedistributeA#ip_nat_list_cfg}
  */
  readonly ipNatListCfg?: RouterBgpRedistributeIpNatListCfgA;
  /**
  * isis_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#isis_cfg RouterBgpRedistributeA#isis_cfg}
  */
  readonly isisCfg?: RouterBgpRedistributeIsisCfgA;
  /**
  * lw4o6_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#lw4o6_cfg RouterBgpRedistributeA#lw4o6_cfg}
  */
  readonly lw4O6Cfg?: RouterBgpRedistributeLw4O6CfgA;
  /**
  * nat_map_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#nat_map_cfg RouterBgpRedistributeA#nat_map_cfg}
  */
  readonly natMapCfg?: RouterBgpRedistributeNatMapCfgA;
  /**
  * ospf_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#ospf_cfg RouterBgpRedistributeA#ospf_cfg}
  */
  readonly ospfCfg?: RouterBgpRedistributeOspfCfgA;
  /**
  * rip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#rip_cfg RouterBgpRedistributeA#rip_cfg}
  */
  readonly ripCfg?: RouterBgpRedistributeRipCfgA;
  /**
  * static_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#static_cfg RouterBgpRedistributeA#static_cfg}
  */
  readonly staticCfg?: RouterBgpRedistributeStaticCfgA;
  /**
  * static_nat_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#static_nat_cfg RouterBgpRedistributeA#static_nat_cfg}
  */
  readonly staticNatCfg?: RouterBgpRedistributeStaticNatCfgA;
  /**
  * vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#vip RouterBgpRedistributeA#vip}
  */
  readonly vip?: RouterBgpRedistributeVipA;
}
export interface RouterBgpRedistributeConnectedCfgA {
  /**
  * Connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#connected RouterBgpRedistributeA#connected}
  */
  readonly connected?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#route_map RouterBgpRedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeConnectedCfgAToTerraform(struct?: RouterBgpRedistributeConnectedCfgAOutputReference | RouterBgpRedistributeConnectedCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connected: cdktf.numberToTerraform(struct!.connected),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeConnectedCfgAToHclTerraform(struct?: RouterBgpRedistributeConnectedCfgAOutputReference | RouterBgpRedistributeConnectedCfgA): any {
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

export class RouterBgpRedistributeConnectedCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeConnectedCfgA | undefined {
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

  public set internalValue(value: RouterBgpRedistributeConnectedCfgA | undefined) {
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
export interface RouterBgpRedistributeFloatingIpCfgA {
  /**
  * Floating IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#floating_ip RouterBgpRedistributeA#floating_ip}
  */
  readonly floatingIp?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#route_map RouterBgpRedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeFloatingIpCfgAToTerraform(struct?: RouterBgpRedistributeFloatingIpCfgAOutputReference | RouterBgpRedistributeFloatingIpCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: cdktf.numberToTerraform(struct!.floatingIp),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeFloatingIpCfgAToHclTerraform(struct?: RouterBgpRedistributeFloatingIpCfgAOutputReference | RouterBgpRedistributeFloatingIpCfgA): any {
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

export class RouterBgpRedistributeFloatingIpCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeFloatingIpCfgA | undefined {
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

  public set internalValue(value: RouterBgpRedistributeFloatingIpCfgA | undefined) {
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
export interface RouterBgpRedistributeIpNatCfgA {
  /**
  * IP NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#ip_nat RouterBgpRedistributeA#ip_nat}
  */
  readonly ipNat?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#route_map RouterBgpRedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeIpNatCfgAToTerraform(struct?: RouterBgpRedistributeIpNatCfgAOutputReference | RouterBgpRedistributeIpNatCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_nat: cdktf.numberToTerraform(struct!.ipNat),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeIpNatCfgAToHclTerraform(struct?: RouterBgpRedistributeIpNatCfgAOutputReference | RouterBgpRedistributeIpNatCfgA): any {
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

export class RouterBgpRedistributeIpNatCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeIpNatCfgA | undefined {
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

  public set internalValue(value: RouterBgpRedistributeIpNatCfgA | undefined) {
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
export interface RouterBgpRedistributeIpNatListCfgA {
  /**
  * IP NAT list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#ip_nat_list RouterBgpRedistributeA#ip_nat_list}
  */
  readonly ipNatList?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#route_map RouterBgpRedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeIpNatListCfgAToTerraform(struct?: RouterBgpRedistributeIpNatListCfgAOutputReference | RouterBgpRedistributeIpNatListCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_nat_list: cdktf.numberToTerraform(struct!.ipNatList),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeIpNatListCfgAToHclTerraform(struct?: RouterBgpRedistributeIpNatListCfgAOutputReference | RouterBgpRedistributeIpNatListCfgA): any {
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

export class RouterBgpRedistributeIpNatListCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeIpNatListCfgA | undefined {
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

  public set internalValue(value: RouterBgpRedistributeIpNatListCfgA | undefined) {
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
export interface RouterBgpRedistributeIsisCfgA {
  /**
  * ISO IS-IS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#isis RouterBgpRedistributeA#isis}
  */
  readonly isis?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#route_map RouterBgpRedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeIsisCfgAToTerraform(struct?: RouterBgpRedistributeIsisCfgAOutputReference | RouterBgpRedistributeIsisCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isis: cdktf.numberToTerraform(struct!.isis),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeIsisCfgAToHclTerraform(struct?: RouterBgpRedistributeIsisCfgAOutputReference | RouterBgpRedistributeIsisCfgA): any {
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

export class RouterBgpRedistributeIsisCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeIsisCfgA | undefined {
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

  public set internalValue(value: RouterBgpRedistributeIsisCfgA | undefined) {
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
export interface RouterBgpRedistributeLw4O6CfgA {
  /**
  * LW4O6 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#lw4o6 RouterBgpRedistributeA#lw4o6}
  */
  readonly lw4O6?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#route_map RouterBgpRedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeLw4O6CfgAToTerraform(struct?: RouterBgpRedistributeLw4O6CfgAOutputReference | RouterBgpRedistributeLw4O6CfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lw4o6: cdktf.numberToTerraform(struct!.lw4O6),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeLw4O6CfgAToHclTerraform(struct?: RouterBgpRedistributeLw4O6CfgAOutputReference | RouterBgpRedistributeLw4O6CfgA): any {
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

export class RouterBgpRedistributeLw4O6CfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeLw4O6CfgA | undefined {
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

  public set internalValue(value: RouterBgpRedistributeLw4O6CfgA | undefined) {
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
export interface RouterBgpRedistributeNatMapCfgA {
  /**
  * NAT MAP Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#nat_map RouterBgpRedistributeA#nat_map}
  */
  readonly natMap?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#route_map RouterBgpRedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeNatMapCfgAToTerraform(struct?: RouterBgpRedistributeNatMapCfgAOutputReference | RouterBgpRedistributeNatMapCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_map: cdktf.numberToTerraform(struct!.natMap),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeNatMapCfgAToHclTerraform(struct?: RouterBgpRedistributeNatMapCfgAOutputReference | RouterBgpRedistributeNatMapCfgA): any {
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

export class RouterBgpRedistributeNatMapCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeNatMapCfgA | undefined {
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

  public set internalValue(value: RouterBgpRedistributeNatMapCfgA | undefined) {
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
export interface RouterBgpRedistributeOspfCfgA {
  /**
  * Open Shortest Path First (OSPF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#ospf RouterBgpRedistributeA#ospf}
  */
  readonly ospf?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#route_map RouterBgpRedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeOspfCfgAToTerraform(struct?: RouterBgpRedistributeOspfCfgAOutputReference | RouterBgpRedistributeOspfCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ospf: cdktf.numberToTerraform(struct!.ospf),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeOspfCfgAToHclTerraform(struct?: RouterBgpRedistributeOspfCfgAOutputReference | RouterBgpRedistributeOspfCfgA): any {
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

export class RouterBgpRedistributeOspfCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeOspfCfgA | undefined {
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

  public set internalValue(value: RouterBgpRedistributeOspfCfgA | undefined) {
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
export interface RouterBgpRedistributeRipCfgA {
  /**
  * Routing Information Protocol (RIP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#rip RouterBgpRedistributeA#rip}
  */
  readonly rip?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#route_map RouterBgpRedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeRipCfgAToTerraform(struct?: RouterBgpRedistributeRipCfgAOutputReference | RouterBgpRedistributeRipCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rip: cdktf.numberToTerraform(struct!.rip),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeRipCfgAToHclTerraform(struct?: RouterBgpRedistributeRipCfgAOutputReference | RouterBgpRedistributeRipCfgA): any {
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

export class RouterBgpRedistributeRipCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeRipCfgA | undefined {
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

  public set internalValue(value: RouterBgpRedistributeRipCfgA | undefined) {
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
export interface RouterBgpRedistributeStaticCfgA {
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#route_map RouterBgpRedistributeA#route_map}
  */
  readonly routeMap?: string;
  /**
  * Static routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#static RouterBgpRedistributeA#static}
  */
  readonly static?: number;
}

export function routerBgpRedistributeStaticCfgAToTerraform(struct?: RouterBgpRedistributeStaticCfgAOutputReference | RouterBgpRedistributeStaticCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    static: cdktf.numberToTerraform(struct!.static),
  }
}


export function routerBgpRedistributeStaticCfgAToHclTerraform(struct?: RouterBgpRedistributeStaticCfgAOutputReference | RouterBgpRedistributeStaticCfgA): any {
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

export class RouterBgpRedistributeStaticCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeStaticCfgA | undefined {
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

  public set internalValue(value: RouterBgpRedistributeStaticCfgA | undefined) {
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
export interface RouterBgpRedistributeStaticNatCfgA {
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#route_map RouterBgpRedistributeA#route_map}
  */
  readonly routeMap?: string;
  /**
  * Static NAT Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#static_nat RouterBgpRedistributeA#static_nat}
  */
  readonly staticNat?: number;
}

export function routerBgpRedistributeStaticNatCfgAToTerraform(struct?: RouterBgpRedistributeStaticNatCfgAOutputReference | RouterBgpRedistributeStaticNatCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    static_nat: cdktf.numberToTerraform(struct!.staticNat),
  }
}


export function routerBgpRedistributeStaticNatCfgAToHclTerraform(struct?: RouterBgpRedistributeStaticNatCfgAOutputReference | RouterBgpRedistributeStaticNatCfgA): any {
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

export class RouterBgpRedistributeStaticNatCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeStaticNatCfgA | undefined {
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

  public set internalValue(value: RouterBgpRedistributeStaticNatCfgA | undefined) {
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
export interface RouterBgpRedistributeVipOnlyFlaggedCfgA {
  /**
  * Selected Virtual IP (VIP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#only_flagged RouterBgpRedistributeA#only_flagged}
  */
  readonly onlyFlagged?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#route_map RouterBgpRedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeVipOnlyFlaggedCfgAToTerraform(struct?: RouterBgpRedistributeVipOnlyFlaggedCfgAOutputReference | RouterBgpRedistributeVipOnlyFlaggedCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    only_flagged: cdktf.numberToTerraform(struct!.onlyFlagged),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeVipOnlyFlaggedCfgAToHclTerraform(struct?: RouterBgpRedistributeVipOnlyFlaggedCfgAOutputReference | RouterBgpRedistributeVipOnlyFlaggedCfgA): any {
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

export class RouterBgpRedistributeVipOnlyFlaggedCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeVipOnlyFlaggedCfgA | undefined {
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

  public set internalValue(value: RouterBgpRedistributeVipOnlyFlaggedCfgA | undefined) {
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
export interface RouterBgpRedistributeVipOnlyNotFlaggedCfgA {
  /**
  * Only not flagged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#only_not_flagged RouterBgpRedistributeA#only_not_flagged}
  */
  readonly onlyNotFlagged?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#route_map RouterBgpRedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpRedistributeVipOnlyNotFlaggedCfgAToTerraform(struct?: RouterBgpRedistributeVipOnlyNotFlaggedCfgAOutputReference | RouterBgpRedistributeVipOnlyNotFlaggedCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    only_not_flagged: cdktf.numberToTerraform(struct!.onlyNotFlagged),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpRedistributeVipOnlyNotFlaggedCfgAToHclTerraform(struct?: RouterBgpRedistributeVipOnlyNotFlaggedCfgAOutputReference | RouterBgpRedistributeVipOnlyNotFlaggedCfgA): any {
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

export class RouterBgpRedistributeVipOnlyNotFlaggedCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeVipOnlyNotFlaggedCfgA | undefined {
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

  public set internalValue(value: RouterBgpRedistributeVipOnlyNotFlaggedCfgA | undefined) {
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
export interface RouterBgpRedistributeVipA {
  /**
  * only_flagged_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#only_flagged_cfg RouterBgpRedistributeA#only_flagged_cfg}
  */
  readonly onlyFlaggedCfg?: RouterBgpRedistributeVipOnlyFlaggedCfgA;
  /**
  * only_not_flagged_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#only_not_flagged_cfg RouterBgpRedistributeA#only_not_flagged_cfg}
  */
  readonly onlyNotFlaggedCfg?: RouterBgpRedistributeVipOnlyNotFlaggedCfgA;
}

export function routerBgpRedistributeVipAToTerraform(struct?: RouterBgpRedistributeVipAOutputReference | RouterBgpRedistributeVipA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    only_flagged_cfg: routerBgpRedistributeVipOnlyFlaggedCfgAToTerraform(struct!.onlyFlaggedCfg),
    only_not_flagged_cfg: routerBgpRedistributeVipOnlyNotFlaggedCfgAToTerraform(struct!.onlyNotFlaggedCfg),
  }
}


export function routerBgpRedistributeVipAToHclTerraform(struct?: RouterBgpRedistributeVipAOutputReference | RouterBgpRedistributeVipA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    only_flagged_cfg: {
      value: routerBgpRedistributeVipOnlyFlaggedCfgAToHclTerraform(struct!.onlyFlaggedCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeVipOnlyFlaggedCfgAList",
    },
    only_not_flagged_cfg: {
      value: routerBgpRedistributeVipOnlyNotFlaggedCfgAToHclTerraform(struct!.onlyNotFlaggedCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpRedistributeVipOnlyNotFlaggedCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeVipAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpRedistributeVipA | undefined {
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

  public set internalValue(value: RouterBgpRedistributeVipA | undefined) {
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
  private _onlyFlaggedCfg = new RouterBgpRedistributeVipOnlyFlaggedCfgAOutputReference(this, "only_flagged_cfg");
  public get onlyFlaggedCfg() {
    return this._onlyFlaggedCfg;
  }
  public putOnlyFlaggedCfg(value: RouterBgpRedistributeVipOnlyFlaggedCfgA) {
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
  private _onlyNotFlaggedCfg = new RouterBgpRedistributeVipOnlyNotFlaggedCfgAOutputReference(this, "only_not_flagged_cfg");
  public get onlyNotFlaggedCfg() {
    return this._onlyNotFlaggedCfg;
  }
  public putOnlyNotFlaggedCfg(value: RouterBgpRedistributeVipOnlyNotFlaggedCfgA) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute thunder_router_bgp_redistribute}
*/
export class RouterBgpRedistributeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_bgp_redistribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpRedistributeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpRedistributeA to import
  * @param importFromId The id of the existing RouterBgpRedistributeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpRedistributeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_bgp_redistribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_redistribute thunder_router_bgp_redistribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpRedistributeAConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpRedistributeAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_bgp_redistribute',
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
    this._connectedCfg.internalValue = config.connectedCfg;
    this._floatingIpCfg.internalValue = config.floatingIpCfg;
    this._ipNatCfg.internalValue = config.ipNatCfg;
    this._ipNatListCfg.internalValue = config.ipNatListCfg;
    this._isisCfg.internalValue = config.isisCfg;
    this._lw4O6Cfg.internalValue = config.lw4O6Cfg;
    this._natMapCfg.internalValue = config.natMapCfg;
    this._ospfCfg.internalValue = config.ospfCfg;
    this._ripCfg.internalValue = config.ripCfg;
    this._staticCfg.internalValue = config.staticCfg;
    this._staticNatCfg.internalValue = config.staticNatCfg;
    this._vip.internalValue = config.vip;
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

  // connected_cfg - computed: false, optional: true, required: false
  private _connectedCfg = new RouterBgpRedistributeConnectedCfgAOutputReference(this, "connected_cfg");
  public get connectedCfg() {
    return this._connectedCfg;
  }
  public putConnectedCfg(value: RouterBgpRedistributeConnectedCfgA) {
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
  private _floatingIpCfg = new RouterBgpRedistributeFloatingIpCfgAOutputReference(this, "floating_ip_cfg");
  public get floatingIpCfg() {
    return this._floatingIpCfg;
  }
  public putFloatingIpCfg(value: RouterBgpRedistributeFloatingIpCfgA) {
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
  private _ipNatCfg = new RouterBgpRedistributeIpNatCfgAOutputReference(this, "ip_nat_cfg");
  public get ipNatCfg() {
    return this._ipNatCfg;
  }
  public putIpNatCfg(value: RouterBgpRedistributeIpNatCfgA) {
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
  private _ipNatListCfg = new RouterBgpRedistributeIpNatListCfgAOutputReference(this, "ip_nat_list_cfg");
  public get ipNatListCfg() {
    return this._ipNatListCfg;
  }
  public putIpNatListCfg(value: RouterBgpRedistributeIpNatListCfgA) {
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
  private _isisCfg = new RouterBgpRedistributeIsisCfgAOutputReference(this, "isis_cfg");
  public get isisCfg() {
    return this._isisCfg;
  }
  public putIsisCfg(value: RouterBgpRedistributeIsisCfgA) {
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
  private _lw4O6Cfg = new RouterBgpRedistributeLw4O6CfgAOutputReference(this, "lw4o6_cfg");
  public get lw4O6Cfg() {
    return this._lw4O6Cfg;
  }
  public putLw4O6Cfg(value: RouterBgpRedistributeLw4O6CfgA) {
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
  private _natMapCfg = new RouterBgpRedistributeNatMapCfgAOutputReference(this, "nat_map_cfg");
  public get natMapCfg() {
    return this._natMapCfg;
  }
  public putNatMapCfg(value: RouterBgpRedistributeNatMapCfgA) {
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
  private _ospfCfg = new RouterBgpRedistributeOspfCfgAOutputReference(this, "ospf_cfg");
  public get ospfCfg() {
    return this._ospfCfg;
  }
  public putOspfCfg(value: RouterBgpRedistributeOspfCfgA) {
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
  private _ripCfg = new RouterBgpRedistributeRipCfgAOutputReference(this, "rip_cfg");
  public get ripCfg() {
    return this._ripCfg;
  }
  public putRipCfg(value: RouterBgpRedistributeRipCfgA) {
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
  private _staticCfg = new RouterBgpRedistributeStaticCfgAOutputReference(this, "static_cfg");
  public get staticCfg() {
    return this._staticCfg;
  }
  public putStaticCfg(value: RouterBgpRedistributeStaticCfgA) {
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
  private _staticNatCfg = new RouterBgpRedistributeStaticNatCfgAOutputReference(this, "static_nat_cfg");
  public get staticNatCfg() {
    return this._staticNatCfg;
  }
  public putStaticNatCfg(value: RouterBgpRedistributeStaticNatCfgA) {
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
  private _vip = new RouterBgpRedistributeVipAOutputReference(this, "vip");
  public get vip() {
    return this._vip;
  }
  public putVip(value: RouterBgpRedistributeVipA) {
    this._vip.internalValue = value;
  }
  public resetVip() {
    this._vip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_number: cdktf.stringToTerraform(this._asNumber),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      connected_cfg: routerBgpRedistributeConnectedCfgAToTerraform(this._connectedCfg.internalValue),
      floating_ip_cfg: routerBgpRedistributeFloatingIpCfgAToTerraform(this._floatingIpCfg.internalValue),
      ip_nat_cfg: routerBgpRedistributeIpNatCfgAToTerraform(this._ipNatCfg.internalValue),
      ip_nat_list_cfg: routerBgpRedistributeIpNatListCfgAToTerraform(this._ipNatListCfg.internalValue),
      isis_cfg: routerBgpRedistributeIsisCfgAToTerraform(this._isisCfg.internalValue),
      lw4o6_cfg: routerBgpRedistributeLw4O6CfgAToTerraform(this._lw4O6Cfg.internalValue),
      nat_map_cfg: routerBgpRedistributeNatMapCfgAToTerraform(this._natMapCfg.internalValue),
      ospf_cfg: routerBgpRedistributeOspfCfgAToTerraform(this._ospfCfg.internalValue),
      rip_cfg: routerBgpRedistributeRipCfgAToTerraform(this._ripCfg.internalValue),
      static_cfg: routerBgpRedistributeStaticCfgAToTerraform(this._staticCfg.internalValue),
      static_nat_cfg: routerBgpRedistributeStaticNatCfgAToTerraform(this._staticNatCfg.internalValue),
      vip: routerBgpRedistributeVipAToTerraform(this._vip.internalValue),
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
      connected_cfg: {
        value: routerBgpRedistributeConnectedCfgAToHclTerraform(this._connectedCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpRedistributeConnectedCfgAList",
      },
      floating_ip_cfg: {
        value: routerBgpRedistributeFloatingIpCfgAToHclTerraform(this._floatingIpCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpRedistributeFloatingIpCfgAList",
      },
      ip_nat_cfg: {
        value: routerBgpRedistributeIpNatCfgAToHclTerraform(this._ipNatCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpRedistributeIpNatCfgAList",
      },
      ip_nat_list_cfg: {
        value: routerBgpRedistributeIpNatListCfgAToHclTerraform(this._ipNatListCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpRedistributeIpNatListCfgAList",
      },
      isis_cfg: {
        value: routerBgpRedistributeIsisCfgAToHclTerraform(this._isisCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpRedistributeIsisCfgAList",
      },
      lw4o6_cfg: {
        value: routerBgpRedistributeLw4O6CfgAToHclTerraform(this._lw4O6Cfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpRedistributeLw4O6CfgAList",
      },
      nat_map_cfg: {
        value: routerBgpRedistributeNatMapCfgAToHclTerraform(this._natMapCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpRedistributeNatMapCfgAList",
      },
      ospf_cfg: {
        value: routerBgpRedistributeOspfCfgAToHclTerraform(this._ospfCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpRedistributeOspfCfgAList",
      },
      rip_cfg: {
        value: routerBgpRedistributeRipCfgAToHclTerraform(this._ripCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpRedistributeRipCfgAList",
      },
      static_cfg: {
        value: routerBgpRedistributeStaticCfgAToHclTerraform(this._staticCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpRedistributeStaticCfgAList",
      },
      static_nat_cfg: {
        value: routerBgpRedistributeStaticNatCfgAToHclTerraform(this._staticNatCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpRedistributeStaticNatCfgAList",
      },
      vip: {
        value: routerBgpRedistributeVipAToHclTerraform(this._vip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpRedistributeVipAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
