// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpRouteMapRedistributionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bgp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#bgp BgpRouteMapRedistribution#bgp}
  */
  readonly bgp?: BgpRouteMapRedistributionBgp;
  /**
  * Connected static
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#connected_static BgpRouteMapRedistribution#connected_static}
  */
  readonly connectedStatic?: BgpRouteMapRedistributionConnectedStatic;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#description BgpRouteMapRedistribution#description}
  */
  readonly description?: string;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#device BgpRouteMapRedistribution#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#folder BgpRouteMapRedistribution#folder}
  */
  readonly folder?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#name BgpRouteMapRedistribution#name}
  */
  readonly name: string;
  /**
  * Ospf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#ospf BgpRouteMapRedistribution#ospf}
  */
  readonly ospf?: BgpRouteMapRedistributionOspf;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#snippet BgpRouteMapRedistribution#snippet}
  */
  readonly snippet?: string;
}
export interface BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4Address {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4AddressToTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4AddressToHclTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4Address | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4Address | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHop {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHopToTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHopToHclTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSource {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSourceToTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSourceToHclTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4 {
  /**
  * bgp-route-map-redistributions ipv4 object address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#address BgpRouteMapRedistribution#address}
  */
  readonly address?: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4Address;
  /**
  * bgp-route-map-redistributions ipv4 object next_hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#next_hop BgpRouteMapRedistribution#next_hop}
  */
  readonly nextHop?: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHop;
  /**
  * bgp-route-map-redistributions ipv4 object route_source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#route_source BgpRouteMapRedistribution#route_source}
  */
  readonly routeSource?: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSource;
}

export function bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4ToTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4AddressToTerraform(struct!.address),
    next_hop: bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHopToTerraform(struct!.nextHop),
    route_source: bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSourceToTerraform(struct!.routeSource),
  }
}


export function bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4ToHclTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4AddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4Address",
    },
    next_hop: {
      value: bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHop",
    },
    route_source: {
      value: bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSourceToHclTerraform(struct!.routeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    if (this._routeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeSource = this._routeSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address.internalValue = undefined;
      this._nextHop.internalValue = undefined;
      this._routeSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address.internalValue = value.address;
      this._nextHop.internalValue = value.nextHop;
      this._routeSource.internalValue = value.routeSource;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address = new BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4Address) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4NextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }

  // route_source - computed: false, optional: true, required: false
  private _routeSource = new BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSourceOutputReference(this, "route_source");
  public get routeSource() {
    return this._routeSource;
  }
  public putRouteSource(value: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4RouteSource) {
    this._routeSource.internalValue = value;
  }
  public resetRouteSource() {
    this._routeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSourceInput() {
    return this._routeSource.internalValue;
  }
}
export interface BgpRouteMapRedistributionBgpOspfRouteMapMatch {
  /**
  * AS path access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#as_path_access_list BgpRouteMapRedistribution#as_path_access_list}
  */
  readonly asPathAccessList?: string;
  /**
  * Extended community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#extended_community BgpRouteMapRedistribution#extended_community}
  */
  readonly extendedCommunity?: string;
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#interface BgpRouteMapRedistribution#interface}
  */
  readonly interface?: string;
  /**
  * bgp-route-map-redistributions ipv4 object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#ipv4 BgpRouteMapRedistribution#ipv4}
  */
  readonly ipv4?: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4;
  /**
  * Large community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#large_community BgpRouteMapRedistribution#large_community}
  */
  readonly largeCommunity?: string;
  /**
  * Local preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#local_preference BgpRouteMapRedistribution#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#metric BgpRouteMapRedistribution#metric}
  */
  readonly metric?: number;
  /**
  * Origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#origin BgpRouteMapRedistribution#origin}
  */
  readonly origin?: string;
  /**
  * Peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#peer BgpRouteMapRedistribution#peer}
  */
  readonly peer?: string;
  /**
  * Regular community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#regular_community BgpRouteMapRedistribution#regular_community}
  */
  readonly regularCommunity?: string;
  /**
  * Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#tag BgpRouteMapRedistribution#tag}
  */
  readonly tag?: number;
}

export function bgpRouteMapRedistributionBgpOspfRouteMapMatchToTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_path_access_list: cdktf.stringToTerraform(struct!.asPathAccessList),
    extended_community: cdktf.stringToTerraform(struct!.extendedCommunity),
    interface: cdktf.stringToTerraform(struct!.interface),
    ipv4: bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4ToTerraform(struct!.ipv4),
    large_community: cdktf.stringToTerraform(struct!.largeCommunity),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: cdktf.numberToTerraform(struct!.metric),
    origin: cdktf.stringToTerraform(struct!.origin),
    peer: cdktf.stringToTerraform(struct!.peer),
    regular_community: cdktf.stringToTerraform(struct!.regularCommunity),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function bgpRouteMapRedistributionBgpOspfRouteMapMatchToHclTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_path_access_list: {
      value: cdktf.stringToHclTerraform(struct!.asPathAccessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extended_community: {
      value: cdktf.stringToHclTerraform(struct!.extendedCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: bgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4",
    },
    large_community: {
      value: cdktf.stringToHclTerraform(struct!.largeCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer: {
      value: cdktf.stringToHclTerraform(struct!.peer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regular_community: {
      value: cdktf.stringToHclTerraform(struct!.regularCommunity),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpOspfRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgpOspfRouteMapMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPathAccessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathAccessList = this._asPathAccessList;
    }
    if (this._extendedCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedCommunity = this._extendedCommunity;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._largeCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeCommunity = this._largeCommunity;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._peer !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer = this._peer;
    }
    if (this._regularCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularCommunity = this._regularCommunity;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpOspfRouteMapMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asPathAccessList = undefined;
      this._extendedCommunity = undefined;
      this._interface = undefined;
      this._ipv4.internalValue = undefined;
      this._largeCommunity = undefined;
      this._localPreference = undefined;
      this._metric = undefined;
      this._origin = undefined;
      this._peer = undefined;
      this._regularCommunity = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asPathAccessList = value.asPathAccessList;
      this._extendedCommunity = value.extendedCommunity;
      this._interface = value.interface;
      this._ipv4.internalValue = value.ipv4;
      this._largeCommunity = value.largeCommunity;
      this._localPreference = value.localPreference;
      this._metric = value.metric;
      this._origin = value.origin;
      this._peer = value.peer;
      this._regularCommunity = value.regularCommunity;
      this._tag = value.tag;
    }
  }

  // as_path_access_list - computed: false, optional: true, required: false
  private _asPathAccessList?: string; 
  public get asPathAccessList() {
    return this.getStringAttribute('as_path_access_list');
  }
  public set asPathAccessList(value: string) {
    this._asPathAccessList = value;
  }
  public resetAsPathAccessList() {
    this._asPathAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathAccessListInput() {
    return this._asPathAccessList;
  }

  // extended_community - computed: false, optional: true, required: false
  private _extendedCommunity?: string; 
  public get extendedCommunity() {
    return this.getStringAttribute('extended_community');
  }
  public set extendedCommunity(value: string) {
    this._extendedCommunity = value;
  }
  public resetExtendedCommunity() {
    this._extendedCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedCommunityInput() {
    return this._extendedCommunity;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpRouteMapRedistributionBgpOspfRouteMapMatchIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // large_community - computed: false, optional: true, required: false
  private _largeCommunity?: string; 
  public get largeCommunity() {
    return this.getStringAttribute('large_community');
  }
  public set largeCommunity(value: string) {
    this._largeCommunity = value;
  }
  public resetLargeCommunity() {
    this._largeCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCommunityInput() {
    return this._largeCommunity;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
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

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // peer - computed: false, optional: true, required: false
  private _peer?: string; 
  public get peer() {
    return this.getStringAttribute('peer');
  }
  public set peer(value: string) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // regular_community - computed: false, optional: true, required: false
  private _regularCommunity?: string; 
  public get regularCommunity() {
    return this.getStringAttribute('regular_community');
  }
  public set regularCommunity(value: string) {
    this._regularCommunity = value;
  }
  public resetRegularCommunity() {
    this._regularCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularCommunityInput() {
    return this._regularCommunity;
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
}
export interface BgpRouteMapRedistributionBgpOspfRouteMapSetMetric {
  /**
  * Metric action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#action BgpRouteMapRedistribution#action}
  */
  readonly action?: string;
  /**
  * Metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#value BgpRouteMapRedistribution#value}
  */
  readonly value?: number;
}

export function bgpRouteMapRedistributionBgpOspfRouteMapSetMetricToTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMapSetMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function bgpRouteMapRedistributionBgpOspfRouteMapSetMetricToHclTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMapSetMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpOspfRouteMapSetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgpOspfRouteMapSetMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpOspfRouteMapSetMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface BgpRouteMapRedistributionBgpOspfRouteMapSet {
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#metric BgpRouteMapRedistribution#metric}
  */
  readonly metric?: BgpRouteMapRedistributionBgpOspfRouteMapSetMetric;
  /**
  * Metric type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#metric_type BgpRouteMapRedistribution#metric_type}
  */
  readonly metricType?: string;
  /**
  * Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#tag BgpRouteMapRedistribution#tag}
  */
  readonly tag?: number;
}

export function bgpRouteMapRedistributionBgpOspfRouteMapSetToTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: bgpRouteMapRedistributionBgpOspfRouteMapSetMetricToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function bgpRouteMapRedistributionBgpOspfRouteMapSetToHclTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: bgpRouteMapRedistributionBgpOspfRouteMapSetMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionBgpOspfRouteMapSetMetric",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpOspfRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgpOspfRouteMapSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpOspfRouteMapSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._metricType = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._metricType = value.metricType;
      this._tag = value.tag;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new BgpRouteMapRedistributionBgpOspfRouteMapSetMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: BgpRouteMapRedistributionBgpOspfRouteMapSetMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
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
}
export interface BgpRouteMapRedistributionBgpOspfRouteMap {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#action BgpRouteMapRedistribution#action}
  */
  readonly action?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#description BgpRouteMapRedistribution#description}
  */
  readonly description?: string;
  /**
  * Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#match BgpRouteMapRedistribution#match}
  */
  readonly match?: BgpRouteMapRedistributionBgpOspfRouteMapMatch;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#name BgpRouteMapRedistribution#name}
  */
  readonly name?: number;
  /**
  * Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#set BgpRouteMapRedistribution#set}
  */
  readonly set?: BgpRouteMapRedistributionBgpOspfRouteMapSet;
}

export function bgpRouteMapRedistributionBgpOspfRouteMapToTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    match: bgpRouteMapRedistributionBgpOspfRouteMapMatchToTerraform(struct!.match),
    name: cdktf.numberToTerraform(struct!.name),
    set: bgpRouteMapRedistributionBgpOspfRouteMapSetToTerraform(struct!.set),
  }
}


export function bgpRouteMapRedistributionBgpOspfRouteMapToHclTerraform(struct?: BgpRouteMapRedistributionBgpOspfRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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
    match: {
      value: bgpRouteMapRedistributionBgpOspfRouteMapMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionBgpOspfRouteMapMatch",
    },
    name: {
      value: cdktf.numberToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set: {
      value: bgpRouteMapRedistributionBgpOspfRouteMapSetToHclTerraform(struct!.set),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionBgpOspfRouteMapSet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpOspfRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpRouteMapRedistributionBgpOspfRouteMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpOspfRouteMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._match.internalValue = value.match;
      this._name = value.name;
      this._set.internalValue = value.set;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // match - computed: false, optional: true, required: false
  private _match = new BgpRouteMapRedistributionBgpOspfRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: BgpRouteMapRedistributionBgpOspfRouteMapMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: number; 
  public get name() {
    return this.getNumberAttribute('name');
  }
  public set name(value: number) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // set - computed: false, optional: true, required: false
  private _set = new BgpRouteMapRedistributionBgpOspfRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: BgpRouteMapRedistributionBgpOspfRouteMapSet) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}

export class BgpRouteMapRedistributionBgpOspfRouteMapList extends cdktf.ComplexList {
  public internalValue? : BgpRouteMapRedistributionBgpOspfRouteMap[] | cdktf.IResolvable

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
  public get(index: number): BgpRouteMapRedistributionBgpOspfRouteMapOutputReference {
    return new BgpRouteMapRedistributionBgpOspfRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpRouteMapRedistributionBgpOspf {
  /**
  * Route maps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#route_map BgpRouteMapRedistribution#route_map}
  */
  readonly routeMap?: BgpRouteMapRedistributionBgpOspfRouteMap[] | cdktf.IResolvable;
}

export function bgpRouteMapRedistributionBgpOspfToTerraform(struct?: BgpRouteMapRedistributionBgpOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.listMapper(bgpRouteMapRedistributionBgpOspfRouteMapToTerraform, false)(struct!.routeMap),
  }
}


export function bgpRouteMapRedistributionBgpOspfToHclTerraform(struct?: BgpRouteMapRedistributionBgpOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.listMapperHcl(bgpRouteMapRedistributionBgpOspfRouteMapToHclTerraform, false)(struct!.routeMap),
      isBlock: true,
      type: "list",
      storageClassType: "BgpRouteMapRedistributionBgpOspfRouteMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgpOspf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpOspf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap.internalValue = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap = new BgpRouteMapRedistributionBgpOspfRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
  public putRouteMap(value: BgpRouteMapRedistributionBgpOspfRouteMap[] | cdktf.IResolvable) {
    this._routeMap.internalValue = value;
  }
  public resetRouteMap() {
    this._routeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap.internalValue;
  }
}
export interface BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4Address {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4AddressToTerraform(struct?: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4AddressToHclTerraform(struct?: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4Address | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4Address | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHop {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHopToTerraform(struct?: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHopToHclTerraform(struct?: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSource {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSourceToTerraform(struct?: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSourceToHclTerraform(struct?: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4 {
  /**
  * bgp-route-map-redistributions ipv4 rib object address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#address BgpRouteMapRedistribution#address}
  */
  readonly address?: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4Address;
  /**
  * bgp-route-map-redistributions ipv4 rib object next_hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#next_hop BgpRouteMapRedistribution#next_hop}
  */
  readonly nextHop?: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHop;
  /**
  * Route source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#route_source BgpRouteMapRedistribution#route_source}
  */
  readonly routeSource?: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSource;
}

export function bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4ToTerraform(struct?: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4AddressToTerraform(struct!.address),
    next_hop: bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHopToTerraform(struct!.nextHop),
    route_source: bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSourceToTerraform(struct!.routeSource),
  }
}


export function bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4ToHclTerraform(struct?: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4AddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4Address",
    },
    next_hop: {
      value: bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHop",
    },
    route_source: {
      value: bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSourceToHclTerraform(struct!.routeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    if (this._routeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeSource = this._routeSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address.internalValue = undefined;
      this._nextHop.internalValue = undefined;
      this._routeSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address.internalValue = value.address;
      this._nextHop.internalValue = value.nextHop;
      this._routeSource.internalValue = value.routeSource;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address = new BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4Address) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4NextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }

  // route_source - computed: false, optional: true, required: false
  private _routeSource = new BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSourceOutputReference(this, "route_source");
  public get routeSource() {
    return this._routeSource;
  }
  public putRouteSource(value: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4RouteSource) {
    this._routeSource.internalValue = value;
  }
  public resetRouteSource() {
    this._routeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSourceInput() {
    return this._routeSource.internalValue;
  }
}
export interface BgpRouteMapRedistributionBgpRibRouteMapMatch {
  /**
  * AS path access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#as_path_access_list BgpRouteMapRedistribution#as_path_access_list}
  */
  readonly asPathAccessList?: string;
  /**
  * Extended community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#extended_community BgpRouteMapRedistribution#extended_community}
  */
  readonly extendedCommunity?: string;
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#interface BgpRouteMapRedistribution#interface}
  */
  readonly interface?: string;
  /**
  * Ipv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#ipv4 BgpRouteMapRedistribution#ipv4}
  */
  readonly ipv4?: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4;
  /**
  * Large community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#large_community BgpRouteMapRedistribution#large_community}
  */
  readonly largeCommunity?: string;
  /**
  * Local preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#local_preference BgpRouteMapRedistribution#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#metric BgpRouteMapRedistribution#metric}
  */
  readonly metric?: number;
  /**
  * Origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#origin BgpRouteMapRedistribution#origin}
  */
  readonly origin?: string;
  /**
  * Peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#peer BgpRouteMapRedistribution#peer}
  */
  readonly peer?: string;
  /**
  * Regular community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#regular_community BgpRouteMapRedistribution#regular_community}
  */
  readonly regularCommunity?: string;
  /**
  * Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#tag BgpRouteMapRedistribution#tag}
  */
  readonly tag?: number;
}

export function bgpRouteMapRedistributionBgpRibRouteMapMatchToTerraform(struct?: BgpRouteMapRedistributionBgpRibRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_path_access_list: cdktf.stringToTerraform(struct!.asPathAccessList),
    extended_community: cdktf.stringToTerraform(struct!.extendedCommunity),
    interface: cdktf.stringToTerraform(struct!.interface),
    ipv4: bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4ToTerraform(struct!.ipv4),
    large_community: cdktf.stringToTerraform(struct!.largeCommunity),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: cdktf.numberToTerraform(struct!.metric),
    origin: cdktf.stringToTerraform(struct!.origin),
    peer: cdktf.stringToTerraform(struct!.peer),
    regular_community: cdktf.stringToTerraform(struct!.regularCommunity),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function bgpRouteMapRedistributionBgpRibRouteMapMatchToHclTerraform(struct?: BgpRouteMapRedistributionBgpRibRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_path_access_list: {
      value: cdktf.stringToHclTerraform(struct!.asPathAccessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extended_community: {
      value: cdktf.stringToHclTerraform(struct!.extendedCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: bgpRouteMapRedistributionBgpRibRouteMapMatchIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4",
    },
    large_community: {
      value: cdktf.stringToHclTerraform(struct!.largeCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer: {
      value: cdktf.stringToHclTerraform(struct!.peer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regular_community: {
      value: cdktf.stringToHclTerraform(struct!.regularCommunity),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpRibRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgpRibRouteMapMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPathAccessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathAccessList = this._asPathAccessList;
    }
    if (this._extendedCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedCommunity = this._extendedCommunity;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._largeCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeCommunity = this._largeCommunity;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._peer !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer = this._peer;
    }
    if (this._regularCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularCommunity = this._regularCommunity;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpRibRouteMapMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asPathAccessList = undefined;
      this._extendedCommunity = undefined;
      this._interface = undefined;
      this._ipv4.internalValue = undefined;
      this._largeCommunity = undefined;
      this._localPreference = undefined;
      this._metric = undefined;
      this._origin = undefined;
      this._peer = undefined;
      this._regularCommunity = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asPathAccessList = value.asPathAccessList;
      this._extendedCommunity = value.extendedCommunity;
      this._interface = value.interface;
      this._ipv4.internalValue = value.ipv4;
      this._largeCommunity = value.largeCommunity;
      this._localPreference = value.localPreference;
      this._metric = value.metric;
      this._origin = value.origin;
      this._peer = value.peer;
      this._regularCommunity = value.regularCommunity;
      this._tag = value.tag;
    }
  }

  // as_path_access_list - computed: false, optional: true, required: false
  private _asPathAccessList?: string; 
  public get asPathAccessList() {
    return this.getStringAttribute('as_path_access_list');
  }
  public set asPathAccessList(value: string) {
    this._asPathAccessList = value;
  }
  public resetAsPathAccessList() {
    this._asPathAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathAccessListInput() {
    return this._asPathAccessList;
  }

  // extended_community - computed: false, optional: true, required: false
  private _extendedCommunity?: string; 
  public get extendedCommunity() {
    return this.getStringAttribute('extended_community');
  }
  public set extendedCommunity(value: string) {
    this._extendedCommunity = value;
  }
  public resetExtendedCommunity() {
    this._extendedCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedCommunityInput() {
    return this._extendedCommunity;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpRouteMapRedistributionBgpRibRouteMapMatchIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // large_community - computed: false, optional: true, required: false
  private _largeCommunity?: string; 
  public get largeCommunity() {
    return this.getStringAttribute('large_community');
  }
  public set largeCommunity(value: string) {
    this._largeCommunity = value;
  }
  public resetLargeCommunity() {
    this._largeCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCommunityInput() {
    return this._largeCommunity;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
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

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // peer - computed: false, optional: true, required: false
  private _peer?: string; 
  public get peer() {
    return this.getStringAttribute('peer');
  }
  public set peer(value: string) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // regular_community - computed: false, optional: true, required: false
  private _regularCommunity?: string; 
  public get regularCommunity() {
    return this.getStringAttribute('regular_community');
  }
  public set regularCommunity(value: string) {
    this._regularCommunity = value;
  }
  public resetRegularCommunity() {
    this._regularCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularCommunityInput() {
    return this._regularCommunity;
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
}
export interface BgpRouteMapRedistributionBgpRibRouteMapSet {
  /**
  * Source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#source_address BgpRouteMapRedistribution#source_address}
  */
  readonly sourceAddress?: string;
}

export function bgpRouteMapRedistributionBgpRibRouteMapSetToTerraform(struct?: BgpRouteMapRedistributionBgpRibRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function bgpRouteMapRedistributionBgpRibRouteMapSetToHclTerraform(struct?: BgpRouteMapRedistributionBgpRibRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpRibRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgpRibRouteMapSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpRibRouteMapSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }
}
export interface BgpRouteMapRedistributionBgpRibRouteMap {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#action BgpRouteMapRedistribution#action}
  */
  readonly action?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#description BgpRouteMapRedistribution#description}
  */
  readonly description?: string;
  /**
  * Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#match BgpRouteMapRedistribution#match}
  */
  readonly match?: BgpRouteMapRedistributionBgpRibRouteMapMatch;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#name BgpRouteMapRedistribution#name}
  */
  readonly name?: number;
  /**
  * Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#set BgpRouteMapRedistribution#set}
  */
  readonly set?: BgpRouteMapRedistributionBgpRibRouteMapSet;
}

export function bgpRouteMapRedistributionBgpRibRouteMapToTerraform(struct?: BgpRouteMapRedistributionBgpRibRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    match: bgpRouteMapRedistributionBgpRibRouteMapMatchToTerraform(struct!.match),
    name: cdktf.numberToTerraform(struct!.name),
    set: bgpRouteMapRedistributionBgpRibRouteMapSetToTerraform(struct!.set),
  }
}


export function bgpRouteMapRedistributionBgpRibRouteMapToHclTerraform(struct?: BgpRouteMapRedistributionBgpRibRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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
    match: {
      value: bgpRouteMapRedistributionBgpRibRouteMapMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionBgpRibRouteMapMatch",
    },
    name: {
      value: cdktf.numberToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set: {
      value: bgpRouteMapRedistributionBgpRibRouteMapSetToHclTerraform(struct!.set),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionBgpRibRouteMapSet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpRibRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpRouteMapRedistributionBgpRibRouteMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpRibRouteMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._match.internalValue = value.match;
      this._name = value.name;
      this._set.internalValue = value.set;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // match - computed: false, optional: true, required: false
  private _match = new BgpRouteMapRedistributionBgpRibRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: BgpRouteMapRedistributionBgpRibRouteMapMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: number; 
  public get name() {
    return this.getNumberAttribute('name');
  }
  public set name(value: number) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // set - computed: false, optional: true, required: false
  private _set = new BgpRouteMapRedistributionBgpRibRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: BgpRouteMapRedistributionBgpRibRouteMapSet) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}

export class BgpRouteMapRedistributionBgpRibRouteMapList extends cdktf.ComplexList {
  public internalValue? : BgpRouteMapRedistributionBgpRibRouteMap[] | cdktf.IResolvable

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
  public get(index: number): BgpRouteMapRedistributionBgpRibRouteMapOutputReference {
    return new BgpRouteMapRedistributionBgpRibRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpRouteMapRedistributionBgpRib {
  /**
  * Route maps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#route_map BgpRouteMapRedistribution#route_map}
  */
  readonly routeMap?: BgpRouteMapRedistributionBgpRibRouteMap[] | cdktf.IResolvable;
}

export function bgpRouteMapRedistributionBgpRibToTerraform(struct?: BgpRouteMapRedistributionBgpRib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.listMapper(bgpRouteMapRedistributionBgpRibRouteMapToTerraform, false)(struct!.routeMap),
  }
}


export function bgpRouteMapRedistributionBgpRibToHclTerraform(struct?: BgpRouteMapRedistributionBgpRib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.listMapperHcl(bgpRouteMapRedistributionBgpRibRouteMapToHclTerraform, false)(struct!.routeMap),
      isBlock: true,
      type: "list",
      storageClassType: "BgpRouteMapRedistributionBgpRibRouteMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpRibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgpRib | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgpRib | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap.internalValue = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap = new BgpRouteMapRedistributionBgpRibRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
  public putRouteMap(value: BgpRouteMapRedistributionBgpRibRouteMap[] | cdktf.IResolvable) {
    this._routeMap.internalValue = value;
  }
  public resetRouteMap() {
    this._routeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap.internalValue;
  }
}
export interface BgpRouteMapRedistributionBgp {
  /**
  * Ospf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#ospf BgpRouteMapRedistribution#ospf}
  */
  readonly ospf?: BgpRouteMapRedistributionBgpOspf;
  /**
  * Rib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#rib BgpRouteMapRedistribution#rib}
  */
  readonly rib?: BgpRouteMapRedistributionBgpRib;
}

export function bgpRouteMapRedistributionBgpToTerraform(struct?: BgpRouteMapRedistributionBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ospf: bgpRouteMapRedistributionBgpOspfToTerraform(struct!.ospf),
    rib: bgpRouteMapRedistributionBgpRibToTerraform(struct!.rib),
  }
}


export function bgpRouteMapRedistributionBgpToHclTerraform(struct?: BgpRouteMapRedistributionBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ospf: {
      value: bgpRouteMapRedistributionBgpOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionBgpOspf",
    },
    rib: {
      value: bgpRouteMapRedistributionBgpRibToHclTerraform(struct!.rib),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionBgpRib",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionBgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._rib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rib = this._rib?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionBgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ospf.internalValue = undefined;
      this._rib.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ospf.internalValue = value.ospf;
      this._rib.internalValue = value.rib;
    }
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new BgpRouteMapRedistributionBgpOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: BgpRouteMapRedistributionBgpOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // rib - computed: false, optional: true, required: false
  private _rib = new BgpRouteMapRedistributionBgpRibOutputReference(this, "rib");
  public get rib() {
    return this._rib;
  }
  public putRib(value: BgpRouteMapRedistributionBgpRib) {
    this._rib.internalValue = value;
  }
  public resetRib() {
    this._rib.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ribInput() {
    return this._rib.internalValue;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4Address {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4AddressToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4AddressToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4Address | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4Address | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHop {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHopToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHopToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4 {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#address BgpRouteMapRedistribution#address}
  */
  readonly address?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4Address;
  /**
  * Next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#next_hop BgpRouteMapRedistribution#next_hop}
  */
  readonly nextHop?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHop;
}

export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4ToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4AddressToTerraform(struct!.address),
    next_hop: bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHopToTerraform(struct!.nextHop),
  }
}


export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4ToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4AddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4Address",
    },
    next_hop: {
      value: bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHop",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address.internalValue = undefined;
      this._nextHop.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address.internalValue = value.address;
      this._nextHop.internalValue = value.nextHop;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address = new BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4Address) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4NextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatch {
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#interface BgpRouteMapRedistribution#interface}
  */
  readonly interface?: string;
  /**
  * bgp-route-map-redistributions connected-static ipv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#ipv4 BgpRouteMapRedistribution#ipv4}
  */
  readonly ipv4?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#metric BgpRouteMapRedistribution#metric}
  */
  readonly metric?: number;
}

export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    ipv4: bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4ToTerraform(struct!.ipv4),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._ipv4.internalValue = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._ipv4.internalValue = value.ipv4;
      this._metric = value.metric;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
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
}
export interface BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregator {
  /**
  * Aggregator AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#as BgpRouteMapRedistribution#as}
  */
  readonly as?: number;
  /**
  * Router ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#router_id BgpRouteMapRedistribution#router_id}
  */
  readonly routerId?: string;
}

export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregatorToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as: cdktf.numberToTerraform(struct!.as),
    router_id: cdktf.stringToTerraform(struct!.routerId),
  }
}


export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregatorToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as: {
      value: cdktf.numberToHclTerraform(struct!.as),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._as !== undefined) {
      hasAnyValues = true;
      internalValueResult.as = this._as;
    }
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._as = undefined;
      this._routerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._as = value.as;
      this._routerId = value.routerId;
    }
  }

  // as - computed: false, optional: true, required: false
  private _as?: number; 
  public get as() {
    return this.getNumberAttribute('as');
  }
  public set as(value: number) {
    this._as = value;
  }
  public resetAs() {
    this._as = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asInput() {
    return this._as;
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
}
export interface BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4 {
  /**
  * Next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#next_hop BgpRouteMapRedistribution#next_hop}
  */
  readonly nextHop?: string;
  /**
  * Source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#source_address BgpRouteMapRedistribution#source_address}
  */
  readonly sourceAddress?: string;
}

export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4ToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4ToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nextHop = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nextHop = value.nextHop;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetric {
  /**
  * Metric action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#action BgpRouteMapRedistribution#action}
  */
  readonly action?: string;
  /**
  * Metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#value BgpRouteMapRedistribution#value}
  */
  readonly value?: number;
}

export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetricToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetricToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticBgpRouteMapSet {
  /**
  * bgp-route-map-redistributions connected_static aggregator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#aggregator BgpRouteMapRedistribution#aggregator}
  */
  readonly aggregator?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregator;
  /**
  * AS numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#aspath_prepend BgpRouteMapRedistribution#aspath_prepend}
  */
  readonly aspathPrepend?: number[];
  /**
  * Enable BGP atomic aggregate?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#atomic_aggregate BgpRouteMapRedistribution#atomic_aggregate}
  */
  readonly atomicAggregate?: boolean | cdktf.IResolvable;
  /**
  * Ipv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#ipv4 BgpRouteMapRedistribution#ipv4}
  */
  readonly ipv4?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4;
  /**
  * Large communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#large_community BgpRouteMapRedistribution#large_community}
  */
  readonly largeCommunity?: string[];
  /**
  * Local preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#local_preference BgpRouteMapRedistribution#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#metric BgpRouteMapRedistribution#metric}
  */
  readonly metric?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetric;
  /**
  * Origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#origin BgpRouteMapRedistribution#origin}
  */
  readonly origin?: string;
  /**
  * Originator ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#originator_id BgpRouteMapRedistribution#originator_id}
  */
  readonly originatorId?: string;
  /**
  * Regular communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#regular_community BgpRouteMapRedistribution#regular_community}
  */
  readonly regularCommunity?: string[];
  /**
  * Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#tag BgpRouteMapRedistribution#tag}
  */
  readonly tag?: number;
  /**
  * Weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#weight BgpRouteMapRedistribution#weight}
  */
  readonly weight?: number;
}

export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregatorToTerraform(struct!.aggregator),
    aspath_prepend: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.aspathPrepend),
    atomic_aggregate: cdktf.booleanToTerraform(struct!.atomicAggregate),
    ipv4: bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4ToTerraform(struct!.ipv4),
    large_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.largeCommunity),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetricToTerraform(struct!.metric),
    origin: cdktf.stringToTerraform(struct!.origin),
    originator_id: cdktf.stringToTerraform(struct!.originatorId),
    regular_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regularCommunity),
    tag: cdktf.numberToTerraform(struct!.tag),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregator: {
      value: bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregatorToHclTerraform(struct!.aggregator),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregator",
    },
    aspath_prepend: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.aspathPrepend),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    atomic_aggregate: {
      value: cdktf.booleanToHclTerraform(struct!.atomicAggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv4: {
      value: bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4",
    },
    large_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.largeCommunity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetric",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    originator_id: {
      value: cdktf.stringToHclTerraform(struct!.originatorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regular_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regularCommunity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticBgpRouteMapSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator?.internalValue;
    }
    if (this._aspathPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspathPrepend = this._aspathPrepend;
    }
    if (this._atomicAggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.atomicAggregate = this._atomicAggregate;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._largeCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeCommunity = this._largeCommunity;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._originatorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originatorId = this._originatorId;
    }
    if (this._regularCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularCommunity = this._regularCommunity;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregator.internalValue = undefined;
      this._aspathPrepend = undefined;
      this._atomicAggregate = undefined;
      this._ipv4.internalValue = undefined;
      this._largeCommunity = undefined;
      this._localPreference = undefined;
      this._metric.internalValue = undefined;
      this._origin = undefined;
      this._originatorId = undefined;
      this._regularCommunity = undefined;
      this._tag = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregator.internalValue = value.aggregator;
      this._aspathPrepend = value.aspathPrepend;
      this._atomicAggregate = value.atomicAggregate;
      this._ipv4.internalValue = value.ipv4;
      this._largeCommunity = value.largeCommunity;
      this._localPreference = value.localPreference;
      this._metric.internalValue = value.metric;
      this._origin = value.origin;
      this._originatorId = value.originatorId;
      this._regularCommunity = value.regularCommunity;
      this._tag = value.tag;
      this._weight = value.weight;
    }
  }

  // aggregator - computed: false, optional: true, required: false
  private _aggregator = new BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregatorOutputReference(this, "aggregator");
  public get aggregator() {
    return this._aggregator;
  }
  public putAggregator(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetAggregator) {
    this._aggregator.internalValue = value;
  }
  public resetAggregator() {
    this._aggregator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorInput() {
    return this._aggregator.internalValue;
  }

  // aspath_prepend - computed: false, optional: true, required: false
  private _aspathPrepend?: number[]; 
  public get aspathPrepend() {
    return this.getNumberListAttribute('aspath_prepend');
  }
  public set aspathPrepend(value: number[]) {
    this._aspathPrepend = value;
  }
  public resetAspathPrepend() {
    this._aspathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspathPrependInput() {
    return this._aspathPrepend;
  }

  // atomic_aggregate - computed: false, optional: true, required: false
  private _atomicAggregate?: boolean | cdktf.IResolvable; 
  public get atomicAggregate() {
    return this.getBooleanAttribute('atomic_aggregate');
  }
  public set atomicAggregate(value: boolean | cdktf.IResolvable) {
    this._atomicAggregate = value;
  }
  public resetAtomicAggregate() {
    this._atomicAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atomicAggregateInput() {
    return this._atomicAggregate;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // large_community - computed: false, optional: true, required: false
  private _largeCommunity?: string[]; 
  public get largeCommunity() {
    return this.getListAttribute('large_community');
  }
  public set largeCommunity(value: string[]) {
    this._largeCommunity = value;
  }
  public resetLargeCommunity() {
    this._largeCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCommunityInput() {
    return this._largeCommunity;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // originator_id - computed: false, optional: true, required: false
  private _originatorId?: string; 
  public get originatorId() {
    return this.getStringAttribute('originator_id');
  }
  public set originatorId(value: string) {
    this._originatorId = value;
  }
  public resetOriginatorId() {
    this._originatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originatorIdInput() {
    return this._originatorId;
  }

  // regular_community - computed: false, optional: true, required: false
  private _regularCommunity?: string[]; 
  public get regularCommunity() {
    return this.getListAttribute('regular_community');
  }
  public set regularCommunity(value: string[]) {
    this._regularCommunity = value;
  }
  public resetRegularCommunity() {
    this._regularCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularCommunityInput() {
    return this._regularCommunity;
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
}
export interface BgpRouteMapRedistributionConnectedStaticBgpRouteMap {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#action BgpRouteMapRedistribution#action}
  */
  readonly action?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#description BgpRouteMapRedistribution#description}
  */
  readonly description?: string;
  /**
  * Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#match BgpRouteMapRedistribution#match}
  */
  readonly match?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatch;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#name BgpRouteMapRedistribution#name}
  */
  readonly name?: number;
  /**
  * Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#set BgpRouteMapRedistribution#set}
  */
  readonly set?: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSet;
}

export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    match: bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchToTerraform(struct!.match),
    name: cdktf.numberToTerraform(struct!.name),
    set: bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetToTerraform(struct!.set),
  }
}


export function bgpRouteMapRedistributionConnectedStaticBgpRouteMapToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgpRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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
    match: {
      value: bgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatch",
    },
    name: {
      value: cdktf.numberToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set: {
      value: bgpRouteMapRedistributionConnectedStaticBgpRouteMapSetToHclTerraform(struct!.set),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticBgpRouteMapSet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticBgpRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticBgpRouteMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._match.internalValue = value.match;
      this._name = value.name;
      this._set.internalValue = value.set;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // match - computed: false, optional: true, required: false
  private _match = new BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: number; 
  public get name() {
    return this.getNumberAttribute('name');
  }
  public set name(value: number) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // set - computed: false, optional: true, required: false
  private _set = new BgpRouteMapRedistributionConnectedStaticBgpRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMapSet) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}

export class BgpRouteMapRedistributionConnectedStaticBgpRouteMapList extends cdktf.ComplexList {
  public internalValue? : BgpRouteMapRedistributionConnectedStaticBgpRouteMap[] | cdktf.IResolvable

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
  public get(index: number): BgpRouteMapRedistributionConnectedStaticBgpRouteMapOutputReference {
    return new BgpRouteMapRedistributionConnectedStaticBgpRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpRouteMapRedistributionConnectedStaticBgp {
  /**
  * Route maps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#route_map BgpRouteMapRedistribution#route_map}
  */
  readonly routeMap?: BgpRouteMapRedistributionConnectedStaticBgpRouteMap[] | cdktf.IResolvable;
}

export function bgpRouteMapRedistributionConnectedStaticBgpToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.listMapper(bgpRouteMapRedistributionConnectedStaticBgpRouteMapToTerraform, false)(struct!.routeMap),
  }
}


export function bgpRouteMapRedistributionConnectedStaticBgpToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.listMapperHcl(bgpRouteMapRedistributionConnectedStaticBgpRouteMapToHclTerraform, false)(struct!.routeMap),
      isBlock: true,
      type: "list",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticBgpRouteMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticBgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticBgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap.internalValue = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap = new BgpRouteMapRedistributionConnectedStaticBgpRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
  public putRouteMap(value: BgpRouteMapRedistributionConnectedStaticBgpRouteMap[] | cdktf.IResolvable) {
    this._routeMap.internalValue = value;
  }
  public resetRouteMap() {
    this._routeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap.internalValue;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4Address {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4AddressToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4AddressToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4Address | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4Address | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHop {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHopToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHopToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4 {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#address BgpRouteMapRedistribution#address}
  */
  readonly address?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4Address;
  /**
  * Next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#next_hop BgpRouteMapRedistribution#next_hop}
  */
  readonly nextHop?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHop;
}

export function bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4ToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4AddressToTerraform(struct!.address),
    next_hop: bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHopToTerraform(struct!.nextHop),
  }
}


export function bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4ToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4AddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4Address",
    },
    next_hop: {
      value: bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHop",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address.internalValue = undefined;
      this._nextHop.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address.internalValue = value.address;
      this._nextHop.internalValue = value.nextHop;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address = new BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4Address) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4NextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatch {
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#interface BgpRouteMapRedistribution#interface}
  */
  readonly interface?: string;
  /**
  * bgp-route-map-redistributions connected-static match ipv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#ipv4 BgpRouteMapRedistribution#ipv4}
  */
  readonly ipv4?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#metric BgpRouteMapRedistribution#metric}
  */
  readonly metric?: number;
}

export function bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    ipv4: bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4ToTerraform(struct!.ipv4),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._ipv4.internalValue = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._ipv4.internalValue = value.ipv4;
      this._metric = value.metric;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
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
}
export interface BgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetric {
  /**
  * Metric action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#action BgpRouteMapRedistribution#action}
  */
  readonly action?: string;
  /**
  * Metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#value BgpRouteMapRedistribution#value}
  */
  readonly value?: number;
}

export function bgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetricToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function bgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetricToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticOspfRouteMapSet {
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#metric BgpRouteMapRedistribution#metric}
  */
  readonly metric?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetric;
  /**
  * Metric type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#metric_type BgpRouteMapRedistribution#metric_type}
  */
  readonly metricType?: string;
  /**
  * Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#tag BgpRouteMapRedistribution#tag}
  */
  readonly tag?: number;
}

export function bgpRouteMapRedistributionConnectedStaticOspfRouteMapSetToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: bgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetricToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function bgpRouteMapRedistributionConnectedStaticOspfRouteMapSetToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: bgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetric",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticOspfRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticOspfRouteMapSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticOspfRouteMapSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._metricType = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._metricType = value.metricType;
      this._tag = value.tag;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new BgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: BgpRouteMapRedistributionConnectedStaticOspfRouteMapSetMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
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
}
export interface BgpRouteMapRedistributionConnectedStaticOspfRouteMap {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#action BgpRouteMapRedistribution#action}
  */
  readonly action?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#description BgpRouteMapRedistribution#description}
  */
  readonly description?: string;
  /**
  * Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#match BgpRouteMapRedistribution#match}
  */
  readonly match?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatch;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#name BgpRouteMapRedistribution#name}
  */
  readonly name?: number;
  /**
  * Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#set BgpRouteMapRedistribution#set}
  */
  readonly set?: BgpRouteMapRedistributionConnectedStaticOspfRouteMapSet;
}

export function bgpRouteMapRedistributionConnectedStaticOspfRouteMapToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspfRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    match: bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchToTerraform(struct!.match),
    name: cdktf.numberToTerraform(struct!.name),
    set: bgpRouteMapRedistributionConnectedStaticOspfRouteMapSetToTerraform(struct!.set),
  }
}


export function bgpRouteMapRedistributionConnectedStaticOspfRouteMapToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspfRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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
    match: {
      value: bgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatch",
    },
    name: {
      value: cdktf.numberToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set: {
      value: bgpRouteMapRedistributionConnectedStaticOspfRouteMapSetToHclTerraform(struct!.set),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticOspfRouteMapSet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticOspfRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticOspfRouteMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticOspfRouteMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._match.internalValue = value.match;
      this._name = value.name;
      this._set.internalValue = value.set;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // match - computed: false, optional: true, required: false
  private _match = new BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: BgpRouteMapRedistributionConnectedStaticOspfRouteMapMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: number; 
  public get name() {
    return this.getNumberAttribute('name');
  }
  public set name(value: number) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // set - computed: false, optional: true, required: false
  private _set = new BgpRouteMapRedistributionConnectedStaticOspfRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: BgpRouteMapRedistributionConnectedStaticOspfRouteMapSet) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}

export class BgpRouteMapRedistributionConnectedStaticOspfRouteMapList extends cdktf.ComplexList {
  public internalValue? : BgpRouteMapRedistributionConnectedStaticOspfRouteMap[] | cdktf.IResolvable

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
  public get(index: number): BgpRouteMapRedistributionConnectedStaticOspfRouteMapOutputReference {
    return new BgpRouteMapRedistributionConnectedStaticOspfRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpRouteMapRedistributionConnectedStaticOspf {
  /**
  * Route maps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#route_map BgpRouteMapRedistribution#route_map}
  */
  readonly routeMap?: BgpRouteMapRedistributionConnectedStaticOspfRouteMap[] | cdktf.IResolvable;
}

export function bgpRouteMapRedistributionConnectedStaticOspfToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.listMapper(bgpRouteMapRedistributionConnectedStaticOspfRouteMapToTerraform, false)(struct!.routeMap),
  }
}


export function bgpRouteMapRedistributionConnectedStaticOspfToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.listMapperHcl(bgpRouteMapRedistributionConnectedStaticOspfRouteMapToHclTerraform, false)(struct!.routeMap),
      isBlock: true,
      type: "list",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticOspfRouteMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticOspf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticOspf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap.internalValue = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap = new BgpRouteMapRedistributionConnectedStaticOspfRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
  public putRouteMap(value: BgpRouteMapRedistributionConnectedStaticOspfRouteMap[] | cdktf.IResolvable) {
    this._routeMap.internalValue = value;
  }
  public resetRouteMap() {
    this._routeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap.internalValue;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4Address {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4AddressToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4AddressToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4Address | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4Address | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHop {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHopToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHopToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4 {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#address BgpRouteMapRedistribution#address}
  */
  readonly address?: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4Address;
  /**
  * Next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#next_hop BgpRouteMapRedistribution#next_hop}
  */
  readonly nextHop?: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHop;
}

export function bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4ToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4AddressToTerraform(struct!.address),
    next_hop: bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHopToTerraform(struct!.nextHop),
  }
}


export function bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4ToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4AddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4Address",
    },
    next_hop: {
      value: bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHop",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address.internalValue = undefined;
      this._nextHop.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address.internalValue = value.address;
      this._nextHop.internalValue = value.nextHop;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address = new BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4Address) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4NextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticRibRouteMapMatch {
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#interface BgpRouteMapRedistribution#interface}
  */
  readonly interface?: string;
  /**
  * Ipv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#ipv4 BgpRouteMapRedistribution#ipv4}
  */
  readonly ipv4?: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#metric BgpRouteMapRedistribution#metric}
  */
  readonly metric?: number;
}

export function bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    ipv4: bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4ToTerraform(struct!.ipv4),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4: {
      value: bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticRibRouteMapMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._ipv4.internalValue = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._ipv4.internalValue = value.ipv4;
      this._metric = value.metric;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
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
}
export interface BgpRouteMapRedistributionConnectedStaticRibRouteMapSet {
  /**
  * Source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#source_address BgpRouteMapRedistribution#source_address}
  */
  readonly sourceAddress?: string;
}

export function bgpRouteMapRedistributionConnectedStaticRibRouteMapSetToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticRibRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function bgpRouteMapRedistributionConnectedStaticRibRouteMapSetToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticRibRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticRibRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticRibRouteMapSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticRibRouteMapSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }
}
export interface BgpRouteMapRedistributionConnectedStaticRibRouteMap {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#action BgpRouteMapRedistribution#action}
  */
  readonly action?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#description BgpRouteMapRedistribution#description}
  */
  readonly description?: string;
  /**
  * Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#match BgpRouteMapRedistribution#match}
  */
  readonly match?: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatch;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#name BgpRouteMapRedistribution#name}
  */
  readonly name?: number;
  /**
  * Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#set BgpRouteMapRedistribution#set}
  */
  readonly set?: BgpRouteMapRedistributionConnectedStaticRibRouteMapSet;
}

export function bgpRouteMapRedistributionConnectedStaticRibRouteMapToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticRibRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    match: bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchToTerraform(struct!.match),
    name: cdktf.numberToTerraform(struct!.name),
    set: bgpRouteMapRedistributionConnectedStaticRibRouteMapSetToTerraform(struct!.set),
  }
}


export function bgpRouteMapRedistributionConnectedStaticRibRouteMapToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticRibRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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
    match: {
      value: bgpRouteMapRedistributionConnectedStaticRibRouteMapMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticRibRouteMapMatch",
    },
    name: {
      value: cdktf.numberToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set: {
      value: bgpRouteMapRedistributionConnectedStaticRibRouteMapSetToHclTerraform(struct!.set),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticRibRouteMapSet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticRibRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticRibRouteMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticRibRouteMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._match.internalValue = value.match;
      this._name = value.name;
      this._set.internalValue = value.set;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // match - computed: false, optional: true, required: false
  private _match = new BgpRouteMapRedistributionConnectedStaticRibRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: BgpRouteMapRedistributionConnectedStaticRibRouteMapMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: number; 
  public get name() {
    return this.getNumberAttribute('name');
  }
  public set name(value: number) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // set - computed: false, optional: true, required: false
  private _set = new BgpRouteMapRedistributionConnectedStaticRibRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: BgpRouteMapRedistributionConnectedStaticRibRouteMapSet) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}

export class BgpRouteMapRedistributionConnectedStaticRibRouteMapList extends cdktf.ComplexList {
  public internalValue? : BgpRouteMapRedistributionConnectedStaticRibRouteMap[] | cdktf.IResolvable

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
  public get(index: number): BgpRouteMapRedistributionConnectedStaticRibRouteMapOutputReference {
    return new BgpRouteMapRedistributionConnectedStaticRibRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpRouteMapRedistributionConnectedStaticRib {
  /**
  * Route maps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#route_map BgpRouteMapRedistribution#route_map}
  */
  readonly routeMap?: BgpRouteMapRedistributionConnectedStaticRibRouteMap[] | cdktf.IResolvable;
}

export function bgpRouteMapRedistributionConnectedStaticRibToTerraform(struct?: BgpRouteMapRedistributionConnectedStaticRib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.listMapper(bgpRouteMapRedistributionConnectedStaticRibRouteMapToTerraform, false)(struct!.routeMap),
  }
}


export function bgpRouteMapRedistributionConnectedStaticRibToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStaticRib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.listMapperHcl(bgpRouteMapRedistributionConnectedStaticRibRouteMapToHclTerraform, false)(struct!.routeMap),
      isBlock: true,
      type: "list",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticRibRouteMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticRibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStaticRib | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStaticRib | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap.internalValue = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap = new BgpRouteMapRedistributionConnectedStaticRibRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
  public putRouteMap(value: BgpRouteMapRedistributionConnectedStaticRibRouteMap[] | cdktf.IResolvable) {
    this._routeMap.internalValue = value;
  }
  public resetRouteMap() {
    this._routeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap.internalValue;
  }
}
export interface BgpRouteMapRedistributionConnectedStatic {
  /**
  * Bgp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#bgp BgpRouteMapRedistribution#bgp}
  */
  readonly bgp?: BgpRouteMapRedistributionConnectedStaticBgp;
  /**
  * Ospf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#ospf BgpRouteMapRedistribution#ospf}
  */
  readonly ospf?: BgpRouteMapRedistributionConnectedStaticOspf;
  /**
  * Rib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#rib BgpRouteMapRedistribution#rib}
  */
  readonly rib?: BgpRouteMapRedistributionConnectedStaticRib;
}

export function bgpRouteMapRedistributionConnectedStaticToTerraform(struct?: BgpRouteMapRedistributionConnectedStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: bgpRouteMapRedistributionConnectedStaticBgpToTerraform(struct!.bgp),
    ospf: bgpRouteMapRedistributionConnectedStaticOspfToTerraform(struct!.ospf),
    rib: bgpRouteMapRedistributionConnectedStaticRibToTerraform(struct!.rib),
  }
}


export function bgpRouteMapRedistributionConnectedStaticToHclTerraform(struct?: BgpRouteMapRedistributionConnectedStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: bgpRouteMapRedistributionConnectedStaticBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticBgp",
    },
    ospf: {
      value: bgpRouteMapRedistributionConnectedStaticOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticOspf",
    },
    rib: {
      value: bgpRouteMapRedistributionConnectedStaticRibToHclTerraform(struct!.rib),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionConnectedStaticRib",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionConnectedStaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionConnectedStatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._rib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rib = this._rib?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionConnectedStatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgp.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._rib.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgp.internalValue = value.bgp;
      this._ospf.internalValue = value.ospf;
      this._rib.internalValue = value.rib;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new BgpRouteMapRedistributionConnectedStaticBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: BgpRouteMapRedistributionConnectedStaticBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new BgpRouteMapRedistributionConnectedStaticOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: BgpRouteMapRedistributionConnectedStaticOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // rib - computed: false, optional: true, required: false
  private _rib = new BgpRouteMapRedistributionConnectedStaticRibOutputReference(this, "rib");
  public get rib() {
    return this._rib;
  }
  public putRib(value: BgpRouteMapRedistributionConnectedStaticRib) {
    this._rib.internalValue = value;
  }
  public resetRib() {
    this._rib.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ribInput() {
    return this._rib.internalValue;
  }
}
export interface BgpRouteMapRedistributionOspfBgpRouteMapMatchAddress {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionOspfBgpRouteMapMatchAddressToTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMapMatchAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionOspfBgpRouteMapMatchAddressToHclTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMapMatchAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfBgpRouteMapMatchAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionOspfBgpRouteMapMatchAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspfBgpRouteMapMatchAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionOspfBgpRouteMapMatchNextHop {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionOspfBgpRouteMapMatchNextHopToTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMapMatchNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionOspfBgpRouteMapMatchNextHopToHclTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMapMatchNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfBgpRouteMapMatchNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionOspfBgpRouteMapMatchNextHop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspfBgpRouteMapMatchNextHop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionOspfBgpRouteMapMatch {
  /**
  * bgp-route-map-redistributions ospf address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#address BgpRouteMapRedistribution#address}
  */
  readonly address?: BgpRouteMapRedistributionOspfBgpRouteMapMatchAddress;
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#interface BgpRouteMapRedistribution#interface}
  */
  readonly interface?: string;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#metric BgpRouteMapRedistribution#metric}
  */
  readonly metric?: number;
  /**
  * bgp-route-map-redistributions ospf next_hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#next_hop BgpRouteMapRedistribution#next_hop}
  */
  readonly nextHop?: BgpRouteMapRedistributionOspfBgpRouteMapMatchNextHop;
  /**
  * Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#tag BgpRouteMapRedistribution#tag}
  */
  readonly tag?: number;
}

export function bgpRouteMapRedistributionOspfBgpRouteMapMatchToTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: bgpRouteMapRedistributionOspfBgpRouteMapMatchAddressToTerraform(struct!.address),
    interface: cdktf.stringToTerraform(struct!.interface),
    metric: cdktf.numberToTerraform(struct!.metric),
    next_hop: bgpRouteMapRedistributionOspfBgpRouteMapMatchNextHopToTerraform(struct!.nextHop),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function bgpRouteMapRedistributionOspfBgpRouteMapMatchToHclTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: bgpRouteMapRedistributionOspfBgpRouteMapMatchAddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionOspfBgpRouteMapMatchAddress",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_hop: {
      value: bgpRouteMapRedistributionOspfBgpRouteMapMatchNextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionOspfBgpRouteMapMatchNextHop",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfBgpRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionOspfBgpRouteMapMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspfBgpRouteMapMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address.internalValue = undefined;
      this._interface = undefined;
      this._metric = undefined;
      this._nextHop.internalValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address.internalValue = value.address;
      this._interface = value.interface;
      this._metric = value.metric;
      this._nextHop.internalValue = value.nextHop;
      this._tag = value.tag;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address = new BgpRouteMapRedistributionOspfBgpRouteMapMatchAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: BgpRouteMapRedistributionOspfBgpRouteMapMatchAddress) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new BgpRouteMapRedistributionOspfBgpRouteMapMatchNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: BgpRouteMapRedistributionOspfBgpRouteMapMatchNextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
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
}
export interface BgpRouteMapRedistributionOspfBgpRouteMapSetAggregator {
  /**
  * Aggregator AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#as BgpRouteMapRedistribution#as}
  */
  readonly as?: number;
  /**
  * Router ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#router_id BgpRouteMapRedistribution#router_id}
  */
  readonly routerId?: string;
}

export function bgpRouteMapRedistributionOspfBgpRouteMapSetAggregatorToTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMapSetAggregator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as: cdktf.numberToTerraform(struct!.as),
    router_id: cdktf.stringToTerraform(struct!.routerId),
  }
}


export function bgpRouteMapRedistributionOspfBgpRouteMapSetAggregatorToHclTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMapSetAggregator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as: {
      value: cdktf.numberToHclTerraform(struct!.as),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfBgpRouteMapSetAggregatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionOspfBgpRouteMapSetAggregator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._as !== undefined) {
      hasAnyValues = true;
      internalValueResult.as = this._as;
    }
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspfBgpRouteMapSetAggregator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._as = undefined;
      this._routerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._as = value.as;
      this._routerId = value.routerId;
    }
  }

  // as - computed: false, optional: true, required: false
  private _as?: number; 
  public get as() {
    return this.getNumberAttribute('as');
  }
  public set as(value: number) {
    this._as = value;
  }
  public resetAs() {
    this._as = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asInput() {
    return this._as;
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
}
export interface BgpRouteMapRedistributionOspfBgpRouteMapSetIpv4 {
  /**
  * Next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#next_hop BgpRouteMapRedistribution#next_hop}
  */
  readonly nextHop?: string;
  /**
  * Source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#source_address BgpRouteMapRedistribution#source_address}
  */
  readonly sourceAddress?: string;
}

export function bgpRouteMapRedistributionOspfBgpRouteMapSetIpv4ToTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMapSetIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function bgpRouteMapRedistributionOspfBgpRouteMapSetIpv4ToHclTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMapSetIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfBgpRouteMapSetIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionOspfBgpRouteMapSetIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspfBgpRouteMapSetIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nextHop = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nextHop = value.nextHop;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }
}
export interface BgpRouteMapRedistributionOspfBgpRouteMapSetMetric {
  /**
  * Metric action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#action BgpRouteMapRedistribution#action}
  */
  readonly action?: string;
  /**
  * Metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#value BgpRouteMapRedistribution#value}
  */
  readonly value?: number;
}

export function bgpRouteMapRedistributionOspfBgpRouteMapSetMetricToTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMapSetMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function bgpRouteMapRedistributionOspfBgpRouteMapSetMetricToHclTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMapSetMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfBgpRouteMapSetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionOspfBgpRouteMapSetMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspfBgpRouteMapSetMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface BgpRouteMapRedistributionOspfBgpRouteMapSet {
  /**
  * bgp-route-map-redistributions set aggregator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#aggregator BgpRouteMapRedistribution#aggregator}
  */
  readonly aggregator?: BgpRouteMapRedistributionOspfBgpRouteMapSetAggregator;
  /**
  * AS numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#aspath_prepend BgpRouteMapRedistribution#aspath_prepend}
  */
  readonly aspathPrepend?: number[];
  /**
  * Enable BGP atomic aggregate?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#atomic_aggregate BgpRouteMapRedistribution#atomic_aggregate}
  */
  readonly atomicAggregate?: boolean | cdktf.IResolvable;
  /**
  * Ipv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#ipv4 BgpRouteMapRedistribution#ipv4}
  */
  readonly ipv4?: BgpRouteMapRedistributionOspfBgpRouteMapSetIpv4;
  /**
  * Large communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#large_community BgpRouteMapRedistribution#large_community}
  */
  readonly largeCommunity?: string[];
  /**
  * Local preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#local_preference BgpRouteMapRedistribution#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#metric BgpRouteMapRedistribution#metric}
  */
  readonly metric?: BgpRouteMapRedistributionOspfBgpRouteMapSetMetric;
  /**
  * Origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#origin BgpRouteMapRedistribution#origin}
  */
  readonly origin?: string;
  /**
  * Originator ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#originator_id BgpRouteMapRedistribution#originator_id}
  */
  readonly originatorId?: string;
  /**
  * Regular communities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#regular_community BgpRouteMapRedistribution#regular_community}
  */
  readonly regularCommunity?: string[];
  /**
  * Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#tag BgpRouteMapRedistribution#tag}
  */
  readonly tag?: number;
  /**
  * Weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#weight BgpRouteMapRedistribution#weight}
  */
  readonly weight?: number;
}

export function bgpRouteMapRedistributionOspfBgpRouteMapSetToTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: bgpRouteMapRedistributionOspfBgpRouteMapSetAggregatorToTerraform(struct!.aggregator),
    aspath_prepend: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.aspathPrepend),
    atomic_aggregate: cdktf.booleanToTerraform(struct!.atomicAggregate),
    ipv4: bgpRouteMapRedistributionOspfBgpRouteMapSetIpv4ToTerraform(struct!.ipv4),
    large_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.largeCommunity),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: bgpRouteMapRedistributionOspfBgpRouteMapSetMetricToTerraform(struct!.metric),
    origin: cdktf.stringToTerraform(struct!.origin),
    originator_id: cdktf.stringToTerraform(struct!.originatorId),
    regular_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regularCommunity),
    tag: cdktf.numberToTerraform(struct!.tag),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function bgpRouteMapRedistributionOspfBgpRouteMapSetToHclTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregator: {
      value: bgpRouteMapRedistributionOspfBgpRouteMapSetAggregatorToHclTerraform(struct!.aggregator),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionOspfBgpRouteMapSetAggregator",
    },
    aspath_prepend: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.aspathPrepend),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    atomic_aggregate: {
      value: cdktf.booleanToHclTerraform(struct!.atomicAggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv4: {
      value: bgpRouteMapRedistributionOspfBgpRouteMapSetIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionOspfBgpRouteMapSetIpv4",
    },
    large_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.largeCommunity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: bgpRouteMapRedistributionOspfBgpRouteMapSetMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionOspfBgpRouteMapSetMetric",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    originator_id: {
      value: cdktf.stringToHclTerraform(struct!.originatorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regular_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regularCommunity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfBgpRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionOspfBgpRouteMapSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator?.internalValue;
    }
    if (this._aspathPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspathPrepend = this._aspathPrepend;
    }
    if (this._atomicAggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.atomicAggregate = this._atomicAggregate;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._largeCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeCommunity = this._largeCommunity;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._originatorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originatorId = this._originatorId;
    }
    if (this._regularCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularCommunity = this._regularCommunity;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspfBgpRouteMapSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregator.internalValue = undefined;
      this._aspathPrepend = undefined;
      this._atomicAggregate = undefined;
      this._ipv4.internalValue = undefined;
      this._largeCommunity = undefined;
      this._localPreference = undefined;
      this._metric.internalValue = undefined;
      this._origin = undefined;
      this._originatorId = undefined;
      this._regularCommunity = undefined;
      this._tag = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregator.internalValue = value.aggregator;
      this._aspathPrepend = value.aspathPrepend;
      this._atomicAggregate = value.atomicAggregate;
      this._ipv4.internalValue = value.ipv4;
      this._largeCommunity = value.largeCommunity;
      this._localPreference = value.localPreference;
      this._metric.internalValue = value.metric;
      this._origin = value.origin;
      this._originatorId = value.originatorId;
      this._regularCommunity = value.regularCommunity;
      this._tag = value.tag;
      this._weight = value.weight;
    }
  }

  // aggregator - computed: false, optional: true, required: false
  private _aggregator = new BgpRouteMapRedistributionOspfBgpRouteMapSetAggregatorOutputReference(this, "aggregator");
  public get aggregator() {
    return this._aggregator;
  }
  public putAggregator(value: BgpRouteMapRedistributionOspfBgpRouteMapSetAggregator) {
    this._aggregator.internalValue = value;
  }
  public resetAggregator() {
    this._aggregator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorInput() {
    return this._aggregator.internalValue;
  }

  // aspath_prepend - computed: false, optional: true, required: false
  private _aspathPrepend?: number[]; 
  public get aspathPrepend() {
    return this.getNumberListAttribute('aspath_prepend');
  }
  public set aspathPrepend(value: number[]) {
    this._aspathPrepend = value;
  }
  public resetAspathPrepend() {
    this._aspathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspathPrependInput() {
    return this._aspathPrepend;
  }

  // atomic_aggregate - computed: false, optional: true, required: false
  private _atomicAggregate?: boolean | cdktf.IResolvable; 
  public get atomicAggregate() {
    return this.getBooleanAttribute('atomic_aggregate');
  }
  public set atomicAggregate(value: boolean | cdktf.IResolvable) {
    this._atomicAggregate = value;
  }
  public resetAtomicAggregate() {
    this._atomicAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atomicAggregateInput() {
    return this._atomicAggregate;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new BgpRouteMapRedistributionOspfBgpRouteMapSetIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpRouteMapRedistributionOspfBgpRouteMapSetIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // large_community - computed: false, optional: true, required: false
  private _largeCommunity?: string[]; 
  public get largeCommunity() {
    return this.getListAttribute('large_community');
  }
  public set largeCommunity(value: string[]) {
    this._largeCommunity = value;
  }
  public resetLargeCommunity() {
    this._largeCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCommunityInput() {
    return this._largeCommunity;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new BgpRouteMapRedistributionOspfBgpRouteMapSetMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: BgpRouteMapRedistributionOspfBgpRouteMapSetMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // originator_id - computed: false, optional: true, required: false
  private _originatorId?: string; 
  public get originatorId() {
    return this.getStringAttribute('originator_id');
  }
  public set originatorId(value: string) {
    this._originatorId = value;
  }
  public resetOriginatorId() {
    this._originatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originatorIdInput() {
    return this._originatorId;
  }

  // regular_community - computed: false, optional: true, required: false
  private _regularCommunity?: string[]; 
  public get regularCommunity() {
    return this.getListAttribute('regular_community');
  }
  public set regularCommunity(value: string[]) {
    this._regularCommunity = value;
  }
  public resetRegularCommunity() {
    this._regularCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularCommunityInput() {
    return this._regularCommunity;
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
}
export interface BgpRouteMapRedistributionOspfBgpRouteMap {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#action BgpRouteMapRedistribution#action}
  */
  readonly action?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#description BgpRouteMapRedistribution#description}
  */
  readonly description?: string;
  /**
  * Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#match BgpRouteMapRedistribution#match}
  */
  readonly match?: BgpRouteMapRedistributionOspfBgpRouteMapMatch;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#name BgpRouteMapRedistribution#name}
  */
  readonly name?: number;
  /**
  * Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#set BgpRouteMapRedistribution#set}
  */
  readonly set?: BgpRouteMapRedistributionOspfBgpRouteMapSet;
}

export function bgpRouteMapRedistributionOspfBgpRouteMapToTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    match: bgpRouteMapRedistributionOspfBgpRouteMapMatchToTerraform(struct!.match),
    name: cdktf.numberToTerraform(struct!.name),
    set: bgpRouteMapRedistributionOspfBgpRouteMapSetToTerraform(struct!.set),
  }
}


export function bgpRouteMapRedistributionOspfBgpRouteMapToHclTerraform(struct?: BgpRouteMapRedistributionOspfBgpRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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
    match: {
      value: bgpRouteMapRedistributionOspfBgpRouteMapMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionOspfBgpRouteMapMatch",
    },
    name: {
      value: cdktf.numberToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set: {
      value: bgpRouteMapRedistributionOspfBgpRouteMapSetToHclTerraform(struct!.set),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionOspfBgpRouteMapSet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfBgpRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpRouteMapRedistributionOspfBgpRouteMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspfBgpRouteMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._match.internalValue = value.match;
      this._name = value.name;
      this._set.internalValue = value.set;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // match - computed: false, optional: true, required: false
  private _match = new BgpRouteMapRedistributionOspfBgpRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: BgpRouteMapRedistributionOspfBgpRouteMapMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: number; 
  public get name() {
    return this.getNumberAttribute('name');
  }
  public set name(value: number) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // set - computed: false, optional: true, required: false
  private _set = new BgpRouteMapRedistributionOspfBgpRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: BgpRouteMapRedistributionOspfBgpRouteMapSet) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}

export class BgpRouteMapRedistributionOspfBgpRouteMapList extends cdktf.ComplexList {
  public internalValue? : BgpRouteMapRedistributionOspfBgpRouteMap[] | cdktf.IResolvable

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
  public get(index: number): BgpRouteMapRedistributionOspfBgpRouteMapOutputReference {
    return new BgpRouteMapRedistributionOspfBgpRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpRouteMapRedistributionOspfBgp {
  /**
  * Route maps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#route_map BgpRouteMapRedistribution#route_map}
  */
  readonly routeMap?: BgpRouteMapRedistributionOspfBgpRouteMap[] | cdktf.IResolvable;
}

export function bgpRouteMapRedistributionOspfBgpToTerraform(struct?: BgpRouteMapRedistributionOspfBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.listMapper(bgpRouteMapRedistributionOspfBgpRouteMapToTerraform, false)(struct!.routeMap),
  }
}


export function bgpRouteMapRedistributionOspfBgpToHclTerraform(struct?: BgpRouteMapRedistributionOspfBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.listMapperHcl(bgpRouteMapRedistributionOspfBgpRouteMapToHclTerraform, false)(struct!.routeMap),
      isBlock: true,
      type: "list",
      storageClassType: "BgpRouteMapRedistributionOspfBgpRouteMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionOspfBgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspfBgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap.internalValue = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap = new BgpRouteMapRedistributionOspfBgpRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
  public putRouteMap(value: BgpRouteMapRedistributionOspfBgpRouteMap[] | cdktf.IResolvable) {
    this._routeMap.internalValue = value;
  }
  public resetRouteMap() {
    this._routeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap.internalValue;
  }
}
export interface BgpRouteMapRedistributionOspfRibRouteMapMatchAddress {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionOspfRibRouteMapMatchAddressToTerraform(struct?: BgpRouteMapRedistributionOspfRibRouteMapMatchAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionOspfRibRouteMapMatchAddressToHclTerraform(struct?: BgpRouteMapRedistributionOspfRibRouteMapMatchAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfRibRouteMapMatchAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionOspfRibRouteMapMatchAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspfRibRouteMapMatchAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionOspfRibRouteMapMatchNextHop {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#access_list BgpRouteMapRedistribution#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#prefix_list BgpRouteMapRedistribution#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRedistributionOspfRibRouteMapMatchNextHopToTerraform(struct?: BgpRouteMapRedistributionOspfRibRouteMapMatchNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRedistributionOspfRibRouteMapMatchNextHopToHclTerraform(struct?: BgpRouteMapRedistributionOspfRibRouteMapMatchNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfRibRouteMapMatchNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionOspfRibRouteMapMatchNextHop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspfRibRouteMapMatchNextHop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface BgpRouteMapRedistributionOspfRibRouteMapMatch {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#address BgpRouteMapRedistribution#address}
  */
  readonly address?: BgpRouteMapRedistributionOspfRibRouteMapMatchAddress;
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#interface BgpRouteMapRedistribution#interface}
  */
  readonly interface?: string;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#metric BgpRouteMapRedistribution#metric}
  */
  readonly metric?: number;
  /**
  * Next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#next_hop BgpRouteMapRedistribution#next_hop}
  */
  readonly nextHop?: BgpRouteMapRedistributionOspfRibRouteMapMatchNextHop;
  /**
  * Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#tag BgpRouteMapRedistribution#tag}
  */
  readonly tag?: number;
}

export function bgpRouteMapRedistributionOspfRibRouteMapMatchToTerraform(struct?: BgpRouteMapRedistributionOspfRibRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: bgpRouteMapRedistributionOspfRibRouteMapMatchAddressToTerraform(struct!.address),
    interface: cdktf.stringToTerraform(struct!.interface),
    metric: cdktf.numberToTerraform(struct!.metric),
    next_hop: bgpRouteMapRedistributionOspfRibRouteMapMatchNextHopToTerraform(struct!.nextHop),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function bgpRouteMapRedistributionOspfRibRouteMapMatchToHclTerraform(struct?: BgpRouteMapRedistributionOspfRibRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: bgpRouteMapRedistributionOspfRibRouteMapMatchAddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionOspfRibRouteMapMatchAddress",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_hop: {
      value: bgpRouteMapRedistributionOspfRibRouteMapMatchNextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionOspfRibRouteMapMatchNextHop",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfRibRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionOspfRibRouteMapMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspfRibRouteMapMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address.internalValue = undefined;
      this._interface = undefined;
      this._metric = undefined;
      this._nextHop.internalValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address.internalValue = value.address;
      this._interface = value.interface;
      this._metric = value.metric;
      this._nextHop.internalValue = value.nextHop;
      this._tag = value.tag;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address = new BgpRouteMapRedistributionOspfRibRouteMapMatchAddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: BgpRouteMapRedistributionOspfRibRouteMapMatchAddress) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new BgpRouteMapRedistributionOspfRibRouteMapMatchNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: BgpRouteMapRedistributionOspfRibRouteMapMatchNextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
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
}
export interface BgpRouteMapRedistributionOspfRibRouteMapSet {
  /**
  * Source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#source_address BgpRouteMapRedistribution#source_address}
  */
  readonly sourceAddress?: string;
}

export function bgpRouteMapRedistributionOspfRibRouteMapSetToTerraform(struct?: BgpRouteMapRedistributionOspfRibRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function bgpRouteMapRedistributionOspfRibRouteMapSetToHclTerraform(struct?: BgpRouteMapRedistributionOspfRibRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfRibRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionOspfRibRouteMapSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspfRibRouteMapSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }
}
export interface BgpRouteMapRedistributionOspfRibRouteMap {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#action BgpRouteMapRedistribution#action}
  */
  readonly action?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#description BgpRouteMapRedistribution#description}
  */
  readonly description?: string;
  /**
  * Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#match BgpRouteMapRedistribution#match}
  */
  readonly match?: BgpRouteMapRedistributionOspfRibRouteMapMatch;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#name BgpRouteMapRedistribution#name}
  */
  readonly name?: number;
  /**
  * Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#set BgpRouteMapRedistribution#set}
  */
  readonly set?: BgpRouteMapRedistributionOspfRibRouteMapSet;
}

export function bgpRouteMapRedistributionOspfRibRouteMapToTerraform(struct?: BgpRouteMapRedistributionOspfRibRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    match: bgpRouteMapRedistributionOspfRibRouteMapMatchToTerraform(struct!.match),
    name: cdktf.numberToTerraform(struct!.name),
    set: bgpRouteMapRedistributionOspfRibRouteMapSetToTerraform(struct!.set),
  }
}


export function bgpRouteMapRedistributionOspfRibRouteMapToHclTerraform(struct?: BgpRouteMapRedistributionOspfRibRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
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
    match: {
      value: bgpRouteMapRedistributionOspfRibRouteMapMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionOspfRibRouteMapMatch",
    },
    name: {
      value: cdktf.numberToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set: {
      value: bgpRouteMapRedistributionOspfRibRouteMapSetToHclTerraform(struct!.set),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionOspfRibRouteMapSet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfRibRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpRouteMapRedistributionOspfRibRouteMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspfRibRouteMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._match.internalValue = value.match;
      this._name = value.name;
      this._set.internalValue = value.set;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // match - computed: false, optional: true, required: false
  private _match = new BgpRouteMapRedistributionOspfRibRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: BgpRouteMapRedistributionOspfRibRouteMapMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: number; 
  public get name() {
    return this.getNumberAttribute('name');
  }
  public set name(value: number) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // set - computed: false, optional: true, required: false
  private _set = new BgpRouteMapRedistributionOspfRibRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: BgpRouteMapRedistributionOspfRibRouteMapSet) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}

export class BgpRouteMapRedistributionOspfRibRouteMapList extends cdktf.ComplexList {
  public internalValue? : BgpRouteMapRedistributionOspfRibRouteMap[] | cdktf.IResolvable

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
  public get(index: number): BgpRouteMapRedistributionOspfRibRouteMapOutputReference {
    return new BgpRouteMapRedistributionOspfRibRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpRouteMapRedistributionOspfRib {
  /**
  * Route maps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#route_map BgpRouteMapRedistribution#route_map}
  */
  readonly routeMap?: BgpRouteMapRedistributionOspfRibRouteMap[] | cdktf.IResolvable;
}

export function bgpRouteMapRedistributionOspfRibToTerraform(struct?: BgpRouteMapRedistributionOspfRib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.listMapper(bgpRouteMapRedistributionOspfRibRouteMapToTerraform, false)(struct!.routeMap),
  }
}


export function bgpRouteMapRedistributionOspfRibToHclTerraform(struct?: BgpRouteMapRedistributionOspfRib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.listMapperHcl(bgpRouteMapRedistributionOspfRibRouteMapToHclTerraform, false)(struct!.routeMap),
      isBlock: true,
      type: "list",
      storageClassType: "BgpRouteMapRedistributionOspfRibRouteMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfRibOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionOspfRib | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspfRib | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap.internalValue = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap = new BgpRouteMapRedistributionOspfRibRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
  public putRouteMap(value: BgpRouteMapRedistributionOspfRibRouteMap[] | cdktf.IResolvable) {
    this._routeMap.internalValue = value;
  }
  public resetRouteMap() {
    this._routeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap.internalValue;
  }
}
export interface BgpRouteMapRedistributionOspf {
  /**
  * Bgp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#bgp BgpRouteMapRedistribution#bgp}
  */
  readonly bgp?: BgpRouteMapRedistributionOspfBgp;
  /**
  * Rib
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#rib BgpRouteMapRedistribution#rib}
  */
  readonly rib?: BgpRouteMapRedistributionOspfRib;
}

export function bgpRouteMapRedistributionOspfToTerraform(struct?: BgpRouteMapRedistributionOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: bgpRouteMapRedistributionOspfBgpToTerraform(struct!.bgp),
    rib: bgpRouteMapRedistributionOspfRibToTerraform(struct!.rib),
  }
}


export function bgpRouteMapRedistributionOspfToHclTerraform(struct?: BgpRouteMapRedistributionOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: bgpRouteMapRedistributionOspfBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionOspfBgp",
    },
    rib: {
      value: bgpRouteMapRedistributionOspfRibToHclTerraform(struct!.rib),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRedistributionOspfRib",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRedistributionOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRedistributionOspf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    if (this._rib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rib = this._rib?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRouteMapRedistributionOspf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgp.internalValue = undefined;
      this._rib.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgp.internalValue = value.bgp;
      this._rib.internalValue = value.rib;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new BgpRouteMapRedistributionOspfBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: BgpRouteMapRedistributionOspfBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // rib - computed: false, optional: true, required: false
  private _rib = new BgpRouteMapRedistributionOspfRibOutputReference(this, "rib");
  public get rib() {
    return this._rib;
  }
  public putRib(value: BgpRouteMapRedistributionOspfRib) {
    this._rib.internalValue = value;
  }
  public resetRib() {
    this._rib.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ribInput() {
    return this._rib.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution scm_bgp_route_map_redistribution}
*/
export class BgpRouteMapRedistribution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_bgp_route_map_redistribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpRouteMapRedistribution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpRouteMapRedistribution to import
  * @param importFromId The id of the existing BgpRouteMapRedistribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpRouteMapRedistribution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bgp_route_map_redistribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map_redistribution scm_bgp_route_map_redistribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpRouteMapRedistributionConfig
  */
  public constructor(scope: Construct, id: string, config: BgpRouteMapRedistributionConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_bgp_route_map_redistribution',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bgp.internalValue = config.bgp;
    this._connectedStatic.internalValue = config.connectedStatic;
    this._description = config.description;
    this._device = config.device;
    this._folder = config.folder;
    this._name = config.name;
    this._ospf.internalValue = config.ospf;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp - computed: false, optional: true, required: false
  private _bgp = new BgpRouteMapRedistributionBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: BgpRouteMapRedistributionBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // connected_static - computed: false, optional: true, required: false
  private _connectedStatic = new BgpRouteMapRedistributionConnectedStaticOutputReference(this, "connected_static");
  public get connectedStatic() {
    return this._connectedStatic;
  }
  public putConnectedStatic(value: BgpRouteMapRedistributionConnectedStatic) {
    this._connectedStatic.internalValue = value;
  }
  public resetConnectedStatic() {
    this._connectedStatic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedStaticInput() {
    return this._connectedStatic.internalValue;
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new BgpRouteMapRedistributionOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: BgpRouteMapRedistributionOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bgp: bgpRouteMapRedistributionBgpToTerraform(this._bgp.internalValue),
      connected_static: bgpRouteMapRedistributionConnectedStaticToTerraform(this._connectedStatic.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      ospf: bgpRouteMapRedistributionOspfToTerraform(this._ospf.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp: {
        value: bgpRouteMapRedistributionBgpToHclTerraform(this._bgp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpRouteMapRedistributionBgp",
      },
      connected_static: {
        value: bgpRouteMapRedistributionConnectedStaticToHclTerraform(this._connectedStatic.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpRouteMapRedistributionConnectedStatic",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf: {
        value: bgpRouteMapRedistributionOspfToHclTerraform(this._ospf.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpRouteMapRedistributionOspf",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
