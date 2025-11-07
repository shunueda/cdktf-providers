// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpRouteMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#description BgpRouteMap#description}
  */
  readonly description?: string;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#device BgpRouteMap#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#folder BgpRouteMap#folder}
  */
  readonly folder?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#name BgpRouteMap#name}
  */
  readonly name: string;
  /**
  * Route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#route_map BgpRouteMap#route_map}
  */
  readonly routeMap?: BgpRouteMapRouteMap[] | cdktf.IResolvable;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#snippet BgpRouteMap#snippet}
  */
  readonly snippet?: string;
}
export interface BgpRouteMapRouteMapMatchIpv4Address {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#access_list BgpRouteMap#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#prefix_list BgpRouteMap#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRouteMapMatchIpv4AddressToTerraform(struct?: BgpRouteMapRouteMapMatchIpv4Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRouteMapMatchIpv4AddressToHclTerraform(struct?: BgpRouteMapRouteMapMatchIpv4Address | cdktf.IResolvable): any {
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

export class BgpRouteMapRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRouteMapMatchIpv4Address | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpRouteMapRouteMapMatchIpv4Address | cdktf.IResolvable | undefined) {
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
export interface BgpRouteMapRouteMapMatchIpv4NextHop {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#access_list BgpRouteMap#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#prefix_list BgpRouteMap#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRouteMapMatchIpv4NextHopToTerraform(struct?: BgpRouteMapRouteMapMatchIpv4NextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRouteMapMatchIpv4NextHopToHclTerraform(struct?: BgpRouteMapRouteMapMatchIpv4NextHop | cdktf.IResolvable): any {
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

export class BgpRouteMapRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRouteMapMatchIpv4NextHop | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpRouteMapRouteMapMatchIpv4NextHop | cdktf.IResolvable | undefined) {
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
export interface BgpRouteMapRouteMapMatchIpv4RouteSource {
  /**
  * Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#access_list BgpRouteMap#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#prefix_list BgpRouteMap#prefix_list}
  */
  readonly prefixList?: string;
}

export function bgpRouteMapRouteMapMatchIpv4RouteSourceToTerraform(struct?: BgpRouteMapRouteMapMatchIpv4RouteSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function bgpRouteMapRouteMapMatchIpv4RouteSourceToHclTerraform(struct?: BgpRouteMapRouteMapMatchIpv4RouteSource | cdktf.IResolvable): any {
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

export class BgpRouteMapRouteMapMatchIpv4RouteSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRouteMapMatchIpv4RouteSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpRouteMapRouteMapMatchIpv4RouteSource | cdktf.IResolvable | undefined) {
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
export interface BgpRouteMapRouteMapMatchIpv4 {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#address BgpRouteMap#address}
  */
  readonly address?: BgpRouteMapRouteMapMatchIpv4Address;
  /**
  * Next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#next_hop BgpRouteMap#next_hop}
  */
  readonly nextHop?: BgpRouteMapRouteMapMatchIpv4NextHop;
  /**
  * Route source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#route_source BgpRouteMap#route_source}
  */
  readonly routeSource?: BgpRouteMapRouteMapMatchIpv4RouteSource;
}

export function bgpRouteMapRouteMapMatchIpv4ToTerraform(struct?: BgpRouteMapRouteMapMatchIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: bgpRouteMapRouteMapMatchIpv4AddressToTerraform(struct!.address),
    next_hop: bgpRouteMapRouteMapMatchIpv4NextHopToTerraform(struct!.nextHop),
    route_source: bgpRouteMapRouteMapMatchIpv4RouteSourceToTerraform(struct!.routeSource),
  }
}


export function bgpRouteMapRouteMapMatchIpv4ToHclTerraform(struct?: BgpRouteMapRouteMapMatchIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: bgpRouteMapRouteMapMatchIpv4AddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRouteMapMatchIpv4Address",
    },
    next_hop: {
      value: bgpRouteMapRouteMapMatchIpv4NextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRouteMapMatchIpv4NextHop",
    },
    route_source: {
      value: bgpRouteMapRouteMapMatchIpv4RouteSourceToHclTerraform(struct!.routeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRouteMapMatchIpv4RouteSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRouteMapMatchIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpRouteMapRouteMapMatchIpv4 | cdktf.IResolvable | undefined) {
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
  private _address = new BgpRouteMapRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: BgpRouteMapRouteMapMatchIpv4Address) {
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
  private _nextHop = new BgpRouteMapRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: BgpRouteMapRouteMapMatchIpv4NextHop) {
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
  private _routeSource = new BgpRouteMapRouteMapMatchIpv4RouteSourceOutputReference(this, "route_source");
  public get routeSource() {
    return this._routeSource;
  }
  public putRouteSource(value: BgpRouteMapRouteMapMatchIpv4RouteSource) {
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
export interface BgpRouteMapRouteMapMatch {
  /**
  * AS path access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#as_path_access_list BgpRouteMap#as_path_access_list}
  */
  readonly asPathAccessList?: string;
  /**
  * Extended community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#extended_community BgpRouteMap#extended_community}
  */
  readonly extendedCommunity?: string;
  /**
  * Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#interface BgpRouteMap#interface}
  */
  readonly interface?: string;
  /**
  * bgp-route-maps ipv4 object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#ipv4 BgpRouteMap#ipv4}
  */
  readonly ipv4?: BgpRouteMapRouteMapMatchIpv4;
  /**
  * Large community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#large_community BgpRouteMap#large_community}
  */
  readonly largeCommunity?: string;
  /**
  * Local preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#local_preference BgpRouteMap#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#metric BgpRouteMap#metric}
  */
  readonly metric?: number;
  /**
  * Origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#origin BgpRouteMap#origin}
  */
  readonly origin?: string;
  /**
  * Peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#peer BgpRouteMap#peer}
  */
  readonly peer?: string;
  /**
  * Regular community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#regular_community BgpRouteMap#regular_community}
  */
  readonly regularCommunity?: string;
  /**
  * Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#tag BgpRouteMap#tag}
  */
  readonly tag?: number;
}

export function bgpRouteMapRouteMapMatchToTerraform(struct?: BgpRouteMapRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_path_access_list: cdktf.stringToTerraform(struct!.asPathAccessList),
    extended_community: cdktf.stringToTerraform(struct!.extendedCommunity),
    interface: cdktf.stringToTerraform(struct!.interface),
    ipv4: bgpRouteMapRouteMapMatchIpv4ToTerraform(struct!.ipv4),
    large_community: cdktf.stringToTerraform(struct!.largeCommunity),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: cdktf.numberToTerraform(struct!.metric),
    origin: cdktf.stringToTerraform(struct!.origin),
    peer: cdktf.stringToTerraform(struct!.peer),
    regular_community: cdktf.stringToTerraform(struct!.regularCommunity),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function bgpRouteMapRouteMapMatchToHclTerraform(struct?: BgpRouteMapRouteMapMatch | cdktf.IResolvable): any {
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
      value: bgpRouteMapRouteMapMatchIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRouteMapMatchIpv4",
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

export class BgpRouteMapRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRouteMapMatch | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpRouteMapRouteMapMatch | cdktf.IResolvable | undefined) {
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
  private _ipv4 = new BgpRouteMapRouteMapMatchIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpRouteMapRouteMapMatchIpv4) {
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
export interface BgpRouteMapRouteMapSetAggregator {
  /**
  * Aggregator AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#as BgpRouteMap#as}
  */
  readonly as?: number;
  /**
  * Router ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#router_id BgpRouteMap#router_id}
  */
  readonly routerId?: string;
}

export function bgpRouteMapRouteMapSetAggregatorToTerraform(struct?: BgpRouteMapRouteMapSetAggregator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as: cdktf.numberToTerraform(struct!.as),
    router_id: cdktf.stringToTerraform(struct!.routerId),
  }
}


export function bgpRouteMapRouteMapSetAggregatorToHclTerraform(struct?: BgpRouteMapRouteMapSetAggregator | cdktf.IResolvable): any {
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

export class BgpRouteMapRouteMapSetAggregatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRouteMapSetAggregator | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpRouteMapRouteMapSetAggregator | cdktf.IResolvable | undefined) {
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
export interface BgpRouteMapRouteMapSetIpv4 {
  /**
  * Next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#next_hop BgpRouteMap#next_hop}
  */
  readonly nextHop?: string;
  /**
  * Source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#source_address BgpRouteMap#source_address}
  */
  readonly sourceAddress?: string;
}

export function bgpRouteMapRouteMapSetIpv4ToTerraform(struct?: BgpRouteMapRouteMapSetIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function bgpRouteMapRouteMapSetIpv4ToHclTerraform(struct?: BgpRouteMapRouteMapSetIpv4 | cdktf.IResolvable): any {
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

export class BgpRouteMapRouteMapSetIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRouteMapSetIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpRouteMapRouteMapSetIpv4 | cdktf.IResolvable | undefined) {
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
export interface BgpRouteMapRouteMapSetMetric {
  /**
  * Metric action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#action BgpRouteMap#action}
  */
  readonly action?: string;
  /**
  * Metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#value BgpRouteMap#value}
  */
  readonly value?: number;
}

export function bgpRouteMapRouteMapSetMetricToTerraform(struct?: BgpRouteMapRouteMapSetMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function bgpRouteMapRouteMapSetMetricToHclTerraform(struct?: BgpRouteMapRouteMapSetMetric | cdktf.IResolvable): any {
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

export class BgpRouteMapRouteMapSetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRouteMapSetMetric | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpRouteMapRouteMapSetMetric | cdktf.IResolvable | undefined) {
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
export interface BgpRouteMapRouteMapSet {
  /**
  * bgp-route-maps aggregator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#aggregator BgpRouteMap#aggregator}
  */
  readonly aggregator?: BgpRouteMapRouteMapSetAggregator;
  /**
  * Aspath exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#aspath_exclude BgpRouteMap#aspath_exclude}
  */
  readonly aspathExclude?: number[];
  /**
  * Aspath prepend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#aspath_prepend BgpRouteMap#aspath_prepend}
  */
  readonly aspathPrepend?: number[];
  /**
  * Enable BGP atomic aggregate?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#atomic_aggregate BgpRouteMap#atomic_aggregate}
  */
  readonly atomicAggregate?: boolean | cdktf.IResolvable;
  /**
  * Ipv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#ipv4 BgpRouteMap#ipv4}
  */
  readonly ipv4?: BgpRouteMapRouteMapSetIpv4;
  /**
  * Large community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#large_community BgpRouteMap#large_community}
  */
  readonly largeCommunity?: string[];
  /**
  * Local preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#local_preference BgpRouteMap#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#metric BgpRouteMap#metric}
  */
  readonly metric?: BgpRouteMapRouteMapSetMetric;
  /**
  * Origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#origin BgpRouteMap#origin}
  */
  readonly origin?: string;
  /**
  * Originator ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#originator_id BgpRouteMap#originator_id}
  */
  readonly originatorId?: string;
  /**
  * Overwrite large community?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#overwrite_large_community BgpRouteMap#overwrite_large_community}
  */
  readonly overwriteLargeCommunity?: boolean | cdktf.IResolvable;
  /**
  * Overwrite regular community?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#overwrite_regular_community BgpRouteMap#overwrite_regular_community}
  */
  readonly overwriteRegularCommunity?: boolean | cdktf.IResolvable;
  /**
  * Regular community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#regular_community BgpRouteMap#regular_community}
  */
  readonly regularCommunity?: string[];
  /**
  * Remove large community name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#remove_large_community BgpRouteMap#remove_large_community}
  */
  readonly removeLargeCommunity?: string;
  /**
  * Remove regular community name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#remove_regular_community BgpRouteMap#remove_regular_community}
  */
  readonly removeRegularCommunity?: string;
  /**
  * Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#tag BgpRouteMap#tag}
  */
  readonly tag?: number;
  /**
  * Weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#weight BgpRouteMap#weight}
  */
  readonly weight?: number;
}

export function bgpRouteMapRouteMapSetToTerraform(struct?: BgpRouteMapRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: bgpRouteMapRouteMapSetAggregatorToTerraform(struct!.aggregator),
    aspath_exclude: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.aspathExclude),
    aspath_prepend: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.aspathPrepend),
    atomic_aggregate: cdktf.booleanToTerraform(struct!.atomicAggregate),
    ipv4: bgpRouteMapRouteMapSetIpv4ToTerraform(struct!.ipv4),
    large_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.largeCommunity),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: bgpRouteMapRouteMapSetMetricToTerraform(struct!.metric),
    origin: cdktf.stringToTerraform(struct!.origin),
    originator_id: cdktf.stringToTerraform(struct!.originatorId),
    overwrite_large_community: cdktf.booleanToTerraform(struct!.overwriteLargeCommunity),
    overwrite_regular_community: cdktf.booleanToTerraform(struct!.overwriteRegularCommunity),
    regular_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regularCommunity),
    remove_large_community: cdktf.stringToTerraform(struct!.removeLargeCommunity),
    remove_regular_community: cdktf.stringToTerraform(struct!.removeRegularCommunity),
    tag: cdktf.numberToTerraform(struct!.tag),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function bgpRouteMapRouteMapSetToHclTerraform(struct?: BgpRouteMapRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregator: {
      value: bgpRouteMapRouteMapSetAggregatorToHclTerraform(struct!.aggregator),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRouteMapSetAggregator",
    },
    aspath_exclude: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.aspathExclude),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
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
      value: bgpRouteMapRouteMapSetIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRouteMapSetIpv4",
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
      value: bgpRouteMapRouteMapSetMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRouteMapSetMetric",
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
    overwrite_large_community: {
      value: cdktf.booleanToHclTerraform(struct!.overwriteLargeCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overwrite_regular_community: {
      value: cdktf.booleanToHclTerraform(struct!.overwriteRegularCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regular_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regularCommunity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remove_large_community: {
      value: cdktf.stringToHclTerraform(struct!.removeLargeCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_regular_community: {
      value: cdktf.stringToHclTerraform(struct!.removeRegularCommunity),
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

export class BgpRouteMapRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpRouteMapRouteMapSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator?.internalValue;
    }
    if (this._aspathExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspathExclude = this._aspathExclude;
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
    if (this._overwriteLargeCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteLargeCommunity = this._overwriteLargeCommunity;
    }
    if (this._overwriteRegularCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteRegularCommunity = this._overwriteRegularCommunity;
    }
    if (this._regularCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularCommunity = this._regularCommunity;
    }
    if (this._removeLargeCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeLargeCommunity = this._removeLargeCommunity;
    }
    if (this._removeRegularCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeRegularCommunity = this._removeRegularCommunity;
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

  public set internalValue(value: BgpRouteMapRouteMapSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregator.internalValue = undefined;
      this._aspathExclude = undefined;
      this._aspathPrepend = undefined;
      this._atomicAggregate = undefined;
      this._ipv4.internalValue = undefined;
      this._largeCommunity = undefined;
      this._localPreference = undefined;
      this._metric.internalValue = undefined;
      this._origin = undefined;
      this._originatorId = undefined;
      this._overwriteLargeCommunity = undefined;
      this._overwriteRegularCommunity = undefined;
      this._regularCommunity = undefined;
      this._removeLargeCommunity = undefined;
      this._removeRegularCommunity = undefined;
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
      this._aspathExclude = value.aspathExclude;
      this._aspathPrepend = value.aspathPrepend;
      this._atomicAggregate = value.atomicAggregate;
      this._ipv4.internalValue = value.ipv4;
      this._largeCommunity = value.largeCommunity;
      this._localPreference = value.localPreference;
      this._metric.internalValue = value.metric;
      this._origin = value.origin;
      this._originatorId = value.originatorId;
      this._overwriteLargeCommunity = value.overwriteLargeCommunity;
      this._overwriteRegularCommunity = value.overwriteRegularCommunity;
      this._regularCommunity = value.regularCommunity;
      this._removeLargeCommunity = value.removeLargeCommunity;
      this._removeRegularCommunity = value.removeRegularCommunity;
      this._tag = value.tag;
      this._weight = value.weight;
    }
  }

  // aggregator - computed: false, optional: true, required: false
  private _aggregator = new BgpRouteMapRouteMapSetAggregatorOutputReference(this, "aggregator");
  public get aggregator() {
    return this._aggregator;
  }
  public putAggregator(value: BgpRouteMapRouteMapSetAggregator) {
    this._aggregator.internalValue = value;
  }
  public resetAggregator() {
    this._aggregator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorInput() {
    return this._aggregator.internalValue;
  }

  // aspath_exclude - computed: false, optional: true, required: false
  private _aspathExclude?: number[]; 
  public get aspathExclude() {
    return this.getNumberListAttribute('aspath_exclude');
  }
  public set aspathExclude(value: number[]) {
    this._aspathExclude = value;
  }
  public resetAspathExclude() {
    this._aspathExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspathExcludeInput() {
    return this._aspathExclude;
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
  private _ipv4 = new BgpRouteMapRouteMapSetIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpRouteMapRouteMapSetIpv4) {
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
  private _metric = new BgpRouteMapRouteMapSetMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: BgpRouteMapRouteMapSetMetric) {
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

  // overwrite_large_community - computed: false, optional: true, required: false
  private _overwriteLargeCommunity?: boolean | cdktf.IResolvable; 
  public get overwriteLargeCommunity() {
    return this.getBooleanAttribute('overwrite_large_community');
  }
  public set overwriteLargeCommunity(value: boolean | cdktf.IResolvable) {
    this._overwriteLargeCommunity = value;
  }
  public resetOverwriteLargeCommunity() {
    this._overwriteLargeCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteLargeCommunityInput() {
    return this._overwriteLargeCommunity;
  }

  // overwrite_regular_community - computed: false, optional: true, required: false
  private _overwriteRegularCommunity?: boolean | cdktf.IResolvable; 
  public get overwriteRegularCommunity() {
    return this.getBooleanAttribute('overwrite_regular_community');
  }
  public set overwriteRegularCommunity(value: boolean | cdktf.IResolvable) {
    this._overwriteRegularCommunity = value;
  }
  public resetOverwriteRegularCommunity() {
    this._overwriteRegularCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteRegularCommunityInput() {
    return this._overwriteRegularCommunity;
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

  // remove_large_community - computed: false, optional: true, required: false
  private _removeLargeCommunity?: string; 
  public get removeLargeCommunity() {
    return this.getStringAttribute('remove_large_community');
  }
  public set removeLargeCommunity(value: string) {
    this._removeLargeCommunity = value;
  }
  public resetRemoveLargeCommunity() {
    this._removeLargeCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeLargeCommunityInput() {
    return this._removeLargeCommunity;
  }

  // remove_regular_community - computed: false, optional: true, required: false
  private _removeRegularCommunity?: string; 
  public get removeRegularCommunity() {
    return this.getStringAttribute('remove_regular_community');
  }
  public set removeRegularCommunity(value: string) {
    this._removeRegularCommunity = value;
  }
  public resetRemoveRegularCommunity() {
    this._removeRegularCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeRegularCommunityInput() {
    return this._removeRegularCommunity;
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
export interface BgpRouteMapRouteMap {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#action BgpRouteMap#action}
  */
  readonly action?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#description BgpRouteMap#description}
  */
  readonly description?: string;
  /**
  * Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#match BgpRouteMap#match}
  */
  readonly match?: BgpRouteMapRouteMapMatch;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#name BgpRouteMap#name}
  */
  readonly name?: number;
  /**
  * Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#set BgpRouteMap#set}
  */
  readonly set?: BgpRouteMapRouteMapSet;
}

export function bgpRouteMapRouteMapToTerraform(struct?: BgpRouteMapRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    match: bgpRouteMapRouteMapMatchToTerraform(struct!.match),
    name: cdktf.numberToTerraform(struct!.name),
    set: bgpRouteMapRouteMapSetToTerraform(struct!.set),
  }
}


export function bgpRouteMapRouteMapToHclTerraform(struct?: BgpRouteMapRouteMap | cdktf.IResolvable): any {
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
      value: bgpRouteMapRouteMapMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRouteMapMatch",
    },
    name: {
      value: cdktf.numberToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set: {
      value: bgpRouteMapRouteMapSetToHclTerraform(struct!.set),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpRouteMapRouteMapSet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRouteMapRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpRouteMapRouteMap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpRouteMapRouteMap | cdktf.IResolvable | undefined) {
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
  private _match = new BgpRouteMapRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: BgpRouteMapRouteMapMatch) {
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
  private _set = new BgpRouteMapRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: BgpRouteMapRouteMapSet) {
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

export class BgpRouteMapRouteMapList extends cdktf.ComplexList {
  public internalValue? : BgpRouteMapRouteMap[] | cdktf.IResolvable

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
  public get(index: number): BgpRouteMapRouteMapOutputReference {
    return new BgpRouteMapRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map scm_bgp_route_map}
*/
export class BgpRouteMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_bgp_route_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpRouteMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpRouteMap to import
  * @param importFromId The id of the existing BgpRouteMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpRouteMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bgp_route_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_route_map scm_bgp_route_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpRouteMapConfig
  */
  public constructor(scope: Construct, id: string, config: BgpRouteMapConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_bgp_route_map',
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
    this._description = config.description;
    this._device = config.device;
    this._folder = config.folder;
    this._name = config.name;
    this._routeMap.internalValue = config.routeMap;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // route_map - computed: false, optional: true, required: false
  private _routeMap = new BgpRouteMapRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
  public putRouteMap(value: BgpRouteMapRouteMap[] | cdktf.IResolvable) {
    this._routeMap.internalValue = value;
  }
  public resetRouteMap() {
    this._routeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap.internalValue;
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
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      route_map: cdktf.listMapper(bgpRouteMapRouteMapToTerraform, false)(this._routeMap.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      route_map: {
        value: cdktf.listMapperHcl(bgpRouteMapRouteMapToHclTerraform, false)(this._routeMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpRouteMapRouteMapList",
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
