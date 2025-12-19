// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpAddressFamilyIpv6RedistributeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * AsNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#as_number RouterBgpAddressFamilyIpv6RedistributeA#as_number}
  */
  readonly asNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#id RouterBgpAddressFamilyIpv6RedistributeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#uuid RouterBgpAddressFamilyIpv6RedistributeA#uuid}
  */
  readonly uuid?: string;
  /**
  * connected_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#connected_cfg RouterBgpAddressFamilyIpv6RedistributeA#connected_cfg}
  */
  readonly connectedCfg?: RouterBgpAddressFamilyIpv6RedistributeConnectedCfgA;
  /**
  * floating_ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#floating_ip_cfg RouterBgpAddressFamilyIpv6RedistributeA#floating_ip_cfg}
  */
  readonly floatingIpCfg?: RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgA;
  /**
  * ip_nat_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#ip_nat_cfg RouterBgpAddressFamilyIpv6RedistributeA#ip_nat_cfg}
  */
  readonly ipNatCfg?: RouterBgpAddressFamilyIpv6RedistributeIpNatCfgA;
  /**
  * ip_nat_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#ip_nat_list_cfg RouterBgpAddressFamilyIpv6RedistributeA#ip_nat_list_cfg}
  */
  readonly ipNatListCfg?: RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgA;
  /**
  * isis_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#isis_cfg RouterBgpAddressFamilyIpv6RedistributeA#isis_cfg}
  */
  readonly isisCfg?: RouterBgpAddressFamilyIpv6RedistributeIsisCfgA;
  /**
  * lw4o6_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#lw4o6_cfg RouterBgpAddressFamilyIpv6RedistributeA#lw4o6_cfg}
  */
  readonly lw4O6Cfg?: RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgA;
  /**
  * nat64_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#nat64_cfg RouterBgpAddressFamilyIpv6RedistributeA#nat64_cfg}
  */
  readonly nat64Cfg?: RouterBgpAddressFamilyIpv6RedistributeNat64CfgA;
  /**
  * nat_map_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#nat_map_cfg RouterBgpAddressFamilyIpv6RedistributeA#nat_map_cfg}
  */
  readonly natMapCfg?: RouterBgpAddressFamilyIpv6RedistributeNatMapCfgA;
  /**
  * ospf_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#ospf_cfg RouterBgpAddressFamilyIpv6RedistributeA#ospf_cfg}
  */
  readonly ospfCfg?: RouterBgpAddressFamilyIpv6RedistributeOspfCfgA;
  /**
  * public_ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#public_ip_cfg RouterBgpAddressFamilyIpv6RedistributeA#public_ip_cfg}
  */
  readonly publicIpCfg?: RouterBgpAddressFamilyIpv6RedistributePublicIpCfgA;
  /**
  * rip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#rip_cfg RouterBgpAddressFamilyIpv6RedistributeA#rip_cfg}
  */
  readonly ripCfg?: RouterBgpAddressFamilyIpv6RedistributeRipCfgA;
  /**
  * static_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#static_cfg RouterBgpAddressFamilyIpv6RedistributeA#static_cfg}
  */
  readonly staticCfg?: RouterBgpAddressFamilyIpv6RedistributeStaticCfgA;
  /**
  * static_nat_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#static_nat_cfg RouterBgpAddressFamilyIpv6RedistributeA#static_nat_cfg}
  */
  readonly staticNatCfg?: RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgA;
  /**
  * vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#vip RouterBgpAddressFamilyIpv6RedistributeA#vip}
  */
  readonly vip?: RouterBgpAddressFamilyIpv6RedistributeVipA;
}
export interface RouterBgpAddressFamilyIpv6RedistributeConnectedCfgA {
  /**
  * Connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#connected RouterBgpAddressFamilyIpv6RedistributeA#connected}
  */
  readonly connected?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#route_map RouterBgpAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeConnectedCfgAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeConnectedCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeConnectedCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connected: cdktf.numberToTerraform(struct!.connected),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeConnectedCfgAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeConnectedCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeConnectedCfgA): any {
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

export class RouterBgpAddressFamilyIpv6RedistributeConnectedCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeConnectedCfgA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeConnectedCfgA | undefined) {
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
export interface RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgA {
  /**
  * Floating IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#floating_ip RouterBgpAddressFamilyIpv6RedistributeA#floating_ip}
  */
  readonly floatingIp?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#route_map RouterBgpAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeFloatingIpCfgAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: cdktf.numberToTerraform(struct!.floatingIp),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeFloatingIpCfgAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgA): any {
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

export class RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgA | undefined) {
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
export interface RouterBgpAddressFamilyIpv6RedistributeIpNatCfgA {
  /**
  * IP NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#ip_nat RouterBgpAddressFamilyIpv6RedistributeA#ip_nat}
  */
  readonly ipNat?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#route_map RouterBgpAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeIpNatCfgAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeIpNatCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeIpNatCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_nat: cdktf.numberToTerraform(struct!.ipNat),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeIpNatCfgAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeIpNatCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeIpNatCfgA): any {
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

export class RouterBgpAddressFamilyIpv6RedistributeIpNatCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeIpNatCfgA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeIpNatCfgA | undefined) {
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
export interface RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgA {
  /**
  * IP NAT list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#ip_nat_list RouterBgpAddressFamilyIpv6RedistributeA#ip_nat_list}
  */
  readonly ipNatList?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#route_map RouterBgpAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeIpNatListCfgAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_nat_list: cdktf.numberToTerraform(struct!.ipNatList),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeIpNatListCfgAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgA): any {
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

export class RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgA | undefined) {
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
export interface RouterBgpAddressFamilyIpv6RedistributeIsisCfgA {
  /**
  * ISO IS-IS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#isis RouterBgpAddressFamilyIpv6RedistributeA#isis}
  */
  readonly isis?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#route_map RouterBgpAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeIsisCfgAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeIsisCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeIsisCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isis: cdktf.numberToTerraform(struct!.isis),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeIsisCfgAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeIsisCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeIsisCfgA): any {
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

export class RouterBgpAddressFamilyIpv6RedistributeIsisCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeIsisCfgA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeIsisCfgA | undefined) {
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
export interface RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgA {
  /**
  * LW4O6 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#lw4o6 RouterBgpAddressFamilyIpv6RedistributeA#lw4o6}
  */
  readonly lw4O6?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#route_map RouterBgpAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeLw4O6CfgAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lw4o6: cdktf.numberToTerraform(struct!.lw4O6),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeLw4O6CfgAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgA): any {
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

export class RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgA | undefined) {
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
export interface RouterBgpAddressFamilyIpv6RedistributeNat64CfgA {
  /**
  * NAT64 Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#nat64 RouterBgpAddressFamilyIpv6RedistributeA#nat64}
  */
  readonly nat64?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#route_map RouterBgpAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeNat64CfgAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeNat64CfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeNat64CfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat64: cdktf.numberToTerraform(struct!.nat64),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeNat64CfgAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeNat64CfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeNat64CfgA): any {
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

export class RouterBgpAddressFamilyIpv6RedistributeNat64CfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeNat64CfgA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeNat64CfgA | undefined) {
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
export interface RouterBgpAddressFamilyIpv6RedistributeNatMapCfgA {
  /**
  * NAT MAP Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#nat_map RouterBgpAddressFamilyIpv6RedistributeA#nat_map}
  */
  readonly natMap?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#route_map RouterBgpAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeNatMapCfgAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeNatMapCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeNatMapCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_map: cdktf.numberToTerraform(struct!.natMap),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeNatMapCfgAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeNatMapCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeNatMapCfgA): any {
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

export class RouterBgpAddressFamilyIpv6RedistributeNatMapCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeNatMapCfgA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeNatMapCfgA | undefined) {
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
export interface RouterBgpAddressFamilyIpv6RedistributeOspfCfgA {
  /**
  * Open Shortest Path First (OSPF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#ospf RouterBgpAddressFamilyIpv6RedistributeA#ospf}
  */
  readonly ospf?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#route_map RouterBgpAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeOspfCfgAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeOspfCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeOspfCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ospf: cdktf.numberToTerraform(struct!.ospf),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeOspfCfgAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeOspfCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeOspfCfgA): any {
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

export class RouterBgpAddressFamilyIpv6RedistributeOspfCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeOspfCfgA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeOspfCfgA | undefined) {
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
export interface RouterBgpAddressFamilyIpv6RedistributePublicIpCfgA {
  /**
  * Public IPv6/IPv4 Prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#public_ip RouterBgpAddressFamilyIpv6RedistributeA#public_ip}
  */
  readonly publicIp?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#route_map RouterBgpAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributePublicIpCfgAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributePublicIpCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributePublicIpCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip: cdktf.numberToTerraform(struct!.publicIp),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributePublicIpCfgAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributePublicIpCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributePublicIpCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ip: {
      value: cdktf.numberToHclTerraform(struct!.publicIp),
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

export class RouterBgpAddressFamilyIpv6RedistributePublicIpCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributePublicIpCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributePublicIpCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIp = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIp = value.publicIp;
      this._routeMap = value.routeMap;
    }
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: number; 
  public get publicIp() {
    return this.getNumberAttribute('public_ip');
  }
  public set publicIp(value: number) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
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
export interface RouterBgpAddressFamilyIpv6RedistributeRipCfgA {
  /**
  * Routing Information Protocol (RIP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#rip RouterBgpAddressFamilyIpv6RedistributeA#rip}
  */
  readonly rip?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#route_map RouterBgpAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeRipCfgAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeRipCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeRipCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rip: cdktf.numberToTerraform(struct!.rip),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeRipCfgAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeRipCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeRipCfgA): any {
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

export class RouterBgpAddressFamilyIpv6RedistributeRipCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeRipCfgA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeRipCfgA | undefined) {
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
export interface RouterBgpAddressFamilyIpv6RedistributeStaticCfgA {
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#route_map RouterBgpAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
  /**
  * Static routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#static RouterBgpAddressFamilyIpv6RedistributeA#static}
  */
  readonly static?: number;
}

export function routerBgpAddressFamilyIpv6RedistributeStaticCfgAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeStaticCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeStaticCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    static: cdktf.numberToTerraform(struct!.static),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeStaticCfgAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeStaticCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeStaticCfgA): any {
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

export class RouterBgpAddressFamilyIpv6RedistributeStaticCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeStaticCfgA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeStaticCfgA | undefined) {
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
export interface RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgA {
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#route_map RouterBgpAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
  /**
  * Static NAT Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#static_nat RouterBgpAddressFamilyIpv6RedistributeA#static_nat}
  */
  readonly staticNat?: number;
}

export function routerBgpAddressFamilyIpv6RedistributeStaticNatCfgAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    static_nat: cdktf.numberToTerraform(struct!.staticNat),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeStaticNatCfgAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgA): any {
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

export class RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgA | undefined) {
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
export interface RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgA {
  /**
  * Selected Virtual IP (VIP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#only_flagged RouterBgpAddressFamilyIpv6RedistributeA#only_flagged}
  */
  readonly onlyFlagged?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#route_map RouterBgpAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    only_flagged: cdktf.numberToTerraform(struct!.onlyFlagged),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgA): any {
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

export class RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgA | undefined) {
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
export interface RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgA {
  /**
  * Only not flagged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#only_not_flagged RouterBgpAddressFamilyIpv6RedistributeA#only_not_flagged}
  */
  readonly onlyNotFlagged?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#route_map RouterBgpAddressFamilyIpv6RedistributeA#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    only_not_flagged: cdktf.numberToTerraform(struct!.onlyNotFlagged),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgAOutputReference | RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgA): any {
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

export class RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgA | undefined) {
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
export interface RouterBgpAddressFamilyIpv6RedistributeVipA {
  /**
  * only_flagged_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#only_flagged_cfg RouterBgpAddressFamilyIpv6RedistributeA#only_flagged_cfg}
  */
  readonly onlyFlaggedCfg?: RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgA;
  /**
  * only_not_flagged_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#only_not_flagged_cfg RouterBgpAddressFamilyIpv6RedistributeA#only_not_flagged_cfg}
  */
  readonly onlyNotFlaggedCfg?: RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgA;
}

export function routerBgpAddressFamilyIpv6RedistributeVipAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeVipAOutputReference | RouterBgpAddressFamilyIpv6RedistributeVipA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    only_flagged_cfg: routerBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgAToTerraform(struct!.onlyFlaggedCfg),
    only_not_flagged_cfg: routerBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgAToTerraform(struct!.onlyNotFlaggedCfg),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeVipAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeVipAOutputReference | RouterBgpAddressFamilyIpv6RedistributeVipA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    only_flagged_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgAToHclTerraform(struct!.onlyFlaggedCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgAList",
    },
    only_not_flagged_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgAToHclTerraform(struct!.onlyNotFlaggedCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeVipAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeVipA | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeVipA | undefined) {
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
  private _onlyFlaggedCfg = new RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgAOutputReference(this, "only_flagged_cfg");
  public get onlyFlaggedCfg() {
    return this._onlyFlaggedCfg;
  }
  public putOnlyFlaggedCfg(value: RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgA) {
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
  private _onlyNotFlaggedCfg = new RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgAOutputReference(this, "only_not_flagged_cfg");
  public get onlyNotFlaggedCfg() {
    return this._onlyNotFlaggedCfg;
  }
  public putOnlyNotFlaggedCfg(value: RouterBgpAddressFamilyIpv6RedistributeVipOnlyNotFlaggedCfgA) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute thunder_router_bgp_address_family_ipv6_redistribute}
*/
export class RouterBgpAddressFamilyIpv6RedistributeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_bgp_address_family_ipv6_redistribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpAddressFamilyIpv6RedistributeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpAddressFamilyIpv6RedistributeA to import
  * @param importFromId The id of the existing RouterBgpAddressFamilyIpv6RedistributeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpAddressFamilyIpv6RedistributeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_bgp_address_family_ipv6_redistribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/router_bgp_address_family_ipv6_redistribute thunder_router_bgp_address_family_ipv6_redistribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpAddressFamilyIpv6RedistributeAConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpAddressFamilyIpv6RedistributeAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_bgp_address_family_ipv6_redistribute',
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
    this._asNumber = config.asNumber;
    this._id = config.id;
    this._uuid = config.uuid;
    this._connectedCfg.internalValue = config.connectedCfg;
    this._floatingIpCfg.internalValue = config.floatingIpCfg;
    this._ipNatCfg.internalValue = config.ipNatCfg;
    this._ipNatListCfg.internalValue = config.ipNatListCfg;
    this._isisCfg.internalValue = config.isisCfg;
    this._lw4O6Cfg.internalValue = config.lw4O6Cfg;
    this._nat64Cfg.internalValue = config.nat64Cfg;
    this._natMapCfg.internalValue = config.natMapCfg;
    this._ospfCfg.internalValue = config.ospfCfg;
    this._publicIpCfg.internalValue = config.publicIpCfg;
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
  private _connectedCfg = new RouterBgpAddressFamilyIpv6RedistributeConnectedCfgAOutputReference(this, "connected_cfg");
  public get connectedCfg() {
    return this._connectedCfg;
  }
  public putConnectedCfg(value: RouterBgpAddressFamilyIpv6RedistributeConnectedCfgA) {
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
  private _floatingIpCfg = new RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgAOutputReference(this, "floating_ip_cfg");
  public get floatingIpCfg() {
    return this._floatingIpCfg;
  }
  public putFloatingIpCfg(value: RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgA) {
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
  private _ipNatCfg = new RouterBgpAddressFamilyIpv6RedistributeIpNatCfgAOutputReference(this, "ip_nat_cfg");
  public get ipNatCfg() {
    return this._ipNatCfg;
  }
  public putIpNatCfg(value: RouterBgpAddressFamilyIpv6RedistributeIpNatCfgA) {
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
  private _ipNatListCfg = new RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgAOutputReference(this, "ip_nat_list_cfg");
  public get ipNatListCfg() {
    return this._ipNatListCfg;
  }
  public putIpNatListCfg(value: RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgA) {
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
  private _isisCfg = new RouterBgpAddressFamilyIpv6RedistributeIsisCfgAOutputReference(this, "isis_cfg");
  public get isisCfg() {
    return this._isisCfg;
  }
  public putIsisCfg(value: RouterBgpAddressFamilyIpv6RedistributeIsisCfgA) {
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
  private _lw4O6Cfg = new RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgAOutputReference(this, "lw4o6_cfg");
  public get lw4O6Cfg() {
    return this._lw4O6Cfg;
  }
  public putLw4O6Cfg(value: RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgA) {
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
  private _nat64Cfg = new RouterBgpAddressFamilyIpv6RedistributeNat64CfgAOutputReference(this, "nat64_cfg");
  public get nat64Cfg() {
    return this._nat64Cfg;
  }
  public putNat64Cfg(value: RouterBgpAddressFamilyIpv6RedistributeNat64CfgA) {
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
  private _natMapCfg = new RouterBgpAddressFamilyIpv6RedistributeNatMapCfgAOutputReference(this, "nat_map_cfg");
  public get natMapCfg() {
    return this._natMapCfg;
  }
  public putNatMapCfg(value: RouterBgpAddressFamilyIpv6RedistributeNatMapCfgA) {
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
  private _ospfCfg = new RouterBgpAddressFamilyIpv6RedistributeOspfCfgAOutputReference(this, "ospf_cfg");
  public get ospfCfg() {
    return this._ospfCfg;
  }
  public putOspfCfg(value: RouterBgpAddressFamilyIpv6RedistributeOspfCfgA) {
    this._ospfCfg.internalValue = value;
  }
  public resetOspfCfg() {
    this._ospfCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfCfgInput() {
    return this._ospfCfg.internalValue;
  }

  // public_ip_cfg - computed: false, optional: true, required: false
  private _publicIpCfg = new RouterBgpAddressFamilyIpv6RedistributePublicIpCfgAOutputReference(this, "public_ip_cfg");
  public get publicIpCfg() {
    return this._publicIpCfg;
  }
  public putPublicIpCfg(value: RouterBgpAddressFamilyIpv6RedistributePublicIpCfgA) {
    this._publicIpCfg.internalValue = value;
  }
  public resetPublicIpCfg() {
    this._publicIpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpCfgInput() {
    return this._publicIpCfg.internalValue;
  }

  // rip_cfg - computed: false, optional: true, required: false
  private _ripCfg = new RouterBgpAddressFamilyIpv6RedistributeRipCfgAOutputReference(this, "rip_cfg");
  public get ripCfg() {
    return this._ripCfg;
  }
  public putRipCfg(value: RouterBgpAddressFamilyIpv6RedistributeRipCfgA) {
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
  private _staticCfg = new RouterBgpAddressFamilyIpv6RedistributeStaticCfgAOutputReference(this, "static_cfg");
  public get staticCfg() {
    return this._staticCfg;
  }
  public putStaticCfg(value: RouterBgpAddressFamilyIpv6RedistributeStaticCfgA) {
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
  private _staticNatCfg = new RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgAOutputReference(this, "static_nat_cfg");
  public get staticNatCfg() {
    return this._staticNatCfg;
  }
  public putStaticNatCfg(value: RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgA) {
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
  private _vip = new RouterBgpAddressFamilyIpv6RedistributeVipAOutputReference(this, "vip");
  public get vip() {
    return this._vip;
  }
  public putVip(value: RouterBgpAddressFamilyIpv6RedistributeVipA) {
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
      connected_cfg: routerBgpAddressFamilyIpv6RedistributeConnectedCfgAToTerraform(this._connectedCfg.internalValue),
      floating_ip_cfg: routerBgpAddressFamilyIpv6RedistributeFloatingIpCfgAToTerraform(this._floatingIpCfg.internalValue),
      ip_nat_cfg: routerBgpAddressFamilyIpv6RedistributeIpNatCfgAToTerraform(this._ipNatCfg.internalValue),
      ip_nat_list_cfg: routerBgpAddressFamilyIpv6RedistributeIpNatListCfgAToTerraform(this._ipNatListCfg.internalValue),
      isis_cfg: routerBgpAddressFamilyIpv6RedistributeIsisCfgAToTerraform(this._isisCfg.internalValue),
      lw4o6_cfg: routerBgpAddressFamilyIpv6RedistributeLw4O6CfgAToTerraform(this._lw4O6Cfg.internalValue),
      nat64_cfg: routerBgpAddressFamilyIpv6RedistributeNat64CfgAToTerraform(this._nat64Cfg.internalValue),
      nat_map_cfg: routerBgpAddressFamilyIpv6RedistributeNatMapCfgAToTerraform(this._natMapCfg.internalValue),
      ospf_cfg: routerBgpAddressFamilyIpv6RedistributeOspfCfgAToTerraform(this._ospfCfg.internalValue),
      public_ip_cfg: routerBgpAddressFamilyIpv6RedistributePublicIpCfgAToTerraform(this._publicIpCfg.internalValue),
      rip_cfg: routerBgpAddressFamilyIpv6RedistributeRipCfgAToTerraform(this._ripCfg.internalValue),
      static_cfg: routerBgpAddressFamilyIpv6RedistributeStaticCfgAToTerraform(this._staticCfg.internalValue),
      static_nat_cfg: routerBgpAddressFamilyIpv6RedistributeStaticNatCfgAToTerraform(this._staticNatCfg.internalValue),
      vip: routerBgpAddressFamilyIpv6RedistributeVipAToTerraform(this._vip.internalValue),
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
        value: routerBgpAddressFamilyIpv6RedistributeConnectedCfgAToHclTerraform(this._connectedCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6RedistributeConnectedCfgAList",
      },
      floating_ip_cfg: {
        value: routerBgpAddressFamilyIpv6RedistributeFloatingIpCfgAToHclTerraform(this._floatingIpCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgAList",
      },
      ip_nat_cfg: {
        value: routerBgpAddressFamilyIpv6RedistributeIpNatCfgAToHclTerraform(this._ipNatCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6RedistributeIpNatCfgAList",
      },
      ip_nat_list_cfg: {
        value: routerBgpAddressFamilyIpv6RedistributeIpNatListCfgAToHclTerraform(this._ipNatListCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgAList",
      },
      isis_cfg: {
        value: routerBgpAddressFamilyIpv6RedistributeIsisCfgAToHclTerraform(this._isisCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6RedistributeIsisCfgAList",
      },
      lw4o6_cfg: {
        value: routerBgpAddressFamilyIpv6RedistributeLw4O6CfgAToHclTerraform(this._lw4O6Cfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgAList",
      },
      nat64_cfg: {
        value: routerBgpAddressFamilyIpv6RedistributeNat64CfgAToHclTerraform(this._nat64Cfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6RedistributeNat64CfgAList",
      },
      nat_map_cfg: {
        value: routerBgpAddressFamilyIpv6RedistributeNatMapCfgAToHclTerraform(this._natMapCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6RedistributeNatMapCfgAList",
      },
      ospf_cfg: {
        value: routerBgpAddressFamilyIpv6RedistributeOspfCfgAToHclTerraform(this._ospfCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6RedistributeOspfCfgAList",
      },
      public_ip_cfg: {
        value: routerBgpAddressFamilyIpv6RedistributePublicIpCfgAToHclTerraform(this._publicIpCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6RedistributePublicIpCfgAList",
      },
      rip_cfg: {
        value: routerBgpAddressFamilyIpv6RedistributeRipCfgAToHclTerraform(this._ripCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6RedistributeRipCfgAList",
      },
      static_cfg: {
        value: routerBgpAddressFamilyIpv6RedistributeStaticCfgAToHclTerraform(this._staticCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6RedistributeStaticCfgAList",
      },
      static_nat_cfg: {
        value: routerBgpAddressFamilyIpv6RedistributeStaticNatCfgAToHclTerraform(this._staticNatCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgAList",
      },
      vip: {
        value: routerBgpAddressFamilyIpv6RedistributeVipAToHclTerraform(this._vip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6RedistributeVipAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
