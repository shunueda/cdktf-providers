// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpAddressFamilyIpv6AConfig extends cdktf.TerraformMetaArguments {
  /**
  * AsNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#as_number RouterBgpAddressFamilyIpv6A#as_number}
  */
  readonly asNumber: string;
  /**
  * Enable automatic network number summarization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#auto_summary RouterBgpAddressFamilyIpv6A#auto_summary}
  */
  readonly autoSummary?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#id RouterBgpAddressFamilyIpv6A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Supported BGP multipath numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#maximum_paths_value RouterBgpAddressFamilyIpv6A#maximum_paths_value}
  */
  readonly maximumPathsValue?: number;
  /**
  * Distribute an IPv6 default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#originate RouterBgpAddressFamilyIpv6A#originate}
  */
  readonly originate?: number;
  /**
  * Perform IGP synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#synchronization RouterBgpAddressFamilyIpv6A#synchronization}
  */
  readonly synchronization?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#uuid RouterBgpAddressFamilyIpv6A#uuid}
  */
  readonly uuid?: string;
  /**
  * aggregate_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#aggregate_address_list RouterBgpAddressFamilyIpv6A#aggregate_address_list}
  */
  readonly aggregateAddressList?: RouterBgpAddressFamilyIpv6AggregateAddressListStructA[] | cdktf.IResolvable;
  /**
  * bgp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#bgp RouterBgpAddressFamilyIpv6A#bgp}
  */
  readonly bgp?: RouterBgpAddressFamilyIpv6BgpA;
  /**
  * distance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#distance RouterBgpAddressFamilyIpv6A#distance}
  */
  readonly distance?: RouterBgpAddressFamilyIpv6DistanceA;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#neighbor RouterBgpAddressFamilyIpv6A#neighbor}
  */
  readonly neighbor?: RouterBgpAddressFamilyIpv6NeighborA;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#network RouterBgpAddressFamilyIpv6A#network}
  */
  readonly network?: RouterBgpAddressFamilyIpv6NetworkA;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#redistribute RouterBgpAddressFamilyIpv6A#redistribute}
  */
  readonly redistribute?: RouterBgpAddressFamilyIpv6RedistributeA;
}
export interface RouterBgpAddressFamilyIpv6AggregateAddressListStructA {
  /**
  * Configure BGP aggregate entries (Aggregate IPv6 prefix)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#aggregate_address RouterBgpAddressFamilyIpv6A#aggregate_address}
  */
  readonly aggregateAddress?: string;
  /**
  * Generate AS set path information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#as_set RouterBgpAddressFamilyIpv6A#as_set}
  */
  readonly asSet?: number;
  /**
  * Filter more specific routes from updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#summary_only RouterBgpAddressFamilyIpv6A#summary_only}
  */
  readonly summaryOnly?: number;
}

export function routerBgpAddressFamilyIpv6AggregateAddressListStructAToTerraform(struct?: RouterBgpAddressFamilyIpv6AggregateAddressListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_address: cdktf.stringToTerraform(struct!.aggregateAddress),
    as_set: cdktf.numberToTerraform(struct!.asSet),
    summary_only: cdktf.numberToTerraform(struct!.summaryOnly),
  }
}


export function routerBgpAddressFamilyIpv6AggregateAddressListStructAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6AggregateAddressListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_address: {
      value: cdktf.stringToHclTerraform(struct!.aggregateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_set: {
      value: cdktf.numberToHclTerraform(struct!.asSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    summary_only: {
      value: cdktf.numberToHclTerraform(struct!.summaryOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6AggregateAddressListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6AggregateAddressListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateAddress = this._aggregateAddress;
    }
    if (this._asSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSet = this._asSet;
    }
    if (this._summaryOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnly = this._summaryOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6AggregateAddressListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateAddress = undefined;
      this._asSet = undefined;
      this._summaryOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateAddress = value.aggregateAddress;
      this._asSet = value.asSet;
      this._summaryOnly = value.summaryOnly;
    }
  }

  // aggregate_address - computed: false, optional: true, required: false
  private _aggregateAddress?: string; 
  public get aggregateAddress() {
    return this.getStringAttribute('aggregate_address');
  }
  public set aggregateAddress(value: string) {
    this._aggregateAddress = value;
  }
  public resetAggregateAddress() {
    this._aggregateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateAddressInput() {
    return this._aggregateAddress;
  }

  // as_set - computed: false, optional: true, required: false
  private _asSet?: number; 
  public get asSet() {
    return this.getNumberAttribute('as_set');
  }
  public set asSet(value: number) {
    this._asSet = value;
  }
  public resetAsSet() {
    this._asSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asSetInput() {
    return this._asSet;
  }

  // summary_only - computed: false, optional: true, required: false
  private _summaryOnly?: number; 
  public get summaryOnly() {
    return this.getNumberAttribute('summary_only');
  }
  public set summaryOnly(value: number) {
    this._summaryOnly = value;
  }
  public resetSummaryOnly() {
    this._summaryOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryOnlyInput() {
    return this._summaryOnly;
  }
}

export class RouterBgpAddressFamilyIpv6AggregateAddressListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6AggregateAddressListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6AggregateAddressListStructAOutputReference {
    return new RouterBgpAddressFamilyIpv6AggregateAddressListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6BgpA {
  /**
  * Enable route-flap dampening
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#dampening RouterBgpAddressFamilyIpv6A#dampening}
  */
  readonly dampening?: number;
  /**
  * Reachability Half-life time for the penalty(minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#dampening_half RouterBgpAddressFamilyIpv6A#dampening_half}
  */
  readonly dampeningHalf?: number;
  /**
  * Maximum duration to suppress a stable route(minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#dampening_max_supress RouterBgpAddressFamilyIpv6A#dampening_max_supress}
  */
  readonly dampeningMaxSupress?: number;
  /**
  * Value to start reusing a route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#dampening_start_reuse RouterBgpAddressFamilyIpv6A#dampening_start_reuse}
  */
  readonly dampeningStartReuse?: number;
  /**
  * Value to start suppressing a route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#dampening_start_supress RouterBgpAddressFamilyIpv6A#dampening_start_supress}
  */
  readonly dampeningStartSupress?: number;
  /**
  * Un-reachability Half-life time for the penalty(minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#dampening_unreachability RouterBgpAddressFamilyIpv6A#dampening_unreachability}
  */
  readonly dampeningUnreachability?: number;
  /**
  * Route-map to specify criteria for dampening (Route-map name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpAddressFamilyIpv6BgpAToTerraform(struct?: RouterBgpAddressFamilyIpv6BgpAOutputReference | RouterBgpAddressFamilyIpv6BgpA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dampening: cdktf.numberToTerraform(struct!.dampening),
    dampening_half: cdktf.numberToTerraform(struct!.dampeningHalf),
    dampening_max_supress: cdktf.numberToTerraform(struct!.dampeningMaxSupress),
    dampening_start_reuse: cdktf.numberToTerraform(struct!.dampeningStartReuse),
    dampening_start_supress: cdktf.numberToTerraform(struct!.dampeningStartSupress),
    dampening_unreachability: cdktf.numberToTerraform(struct!.dampeningUnreachability),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpAddressFamilyIpv6BgpAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6BgpAOutputReference | RouterBgpAddressFamilyIpv6BgpA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dampening: {
      value: cdktf.numberToHclTerraform(struct!.dampening),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_half: {
      value: cdktf.numberToHclTerraform(struct!.dampeningHalf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_max_supress: {
      value: cdktf.numberToHclTerraform(struct!.dampeningMaxSupress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_start_reuse: {
      value: cdktf.numberToHclTerraform(struct!.dampeningStartReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_start_supress: {
      value: cdktf.numberToHclTerraform(struct!.dampeningStartSupress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dampening_unreachability: {
      value: cdktf.numberToHclTerraform(struct!.dampeningUnreachability),
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

export class RouterBgpAddressFamilyIpv6BgpAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6BgpA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dampening !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampening = this._dampening;
    }
    if (this._dampeningHalf !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningHalf = this._dampeningHalf;
    }
    if (this._dampeningMaxSupress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningMaxSupress = this._dampeningMaxSupress;
    }
    if (this._dampeningStartReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningStartReuse = this._dampeningStartReuse;
    }
    if (this._dampeningStartSupress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningStartSupress = this._dampeningStartSupress;
    }
    if (this._dampeningUnreachability !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampeningUnreachability = this._dampeningUnreachability;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6BgpA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dampening = undefined;
      this._dampeningHalf = undefined;
      this._dampeningMaxSupress = undefined;
      this._dampeningStartReuse = undefined;
      this._dampeningStartSupress = undefined;
      this._dampeningUnreachability = undefined;
      this._routeMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dampening = value.dampening;
      this._dampeningHalf = value.dampeningHalf;
      this._dampeningMaxSupress = value.dampeningMaxSupress;
      this._dampeningStartReuse = value.dampeningStartReuse;
      this._dampeningStartSupress = value.dampeningStartSupress;
      this._dampeningUnreachability = value.dampeningUnreachability;
      this._routeMap = value.routeMap;
    }
  }

  // dampening - computed: false, optional: true, required: false
  private _dampening?: number; 
  public get dampening() {
    return this.getNumberAttribute('dampening');
  }
  public set dampening(value: number) {
    this._dampening = value;
  }
  public resetDampening() {
    this._dampening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningInput() {
    return this._dampening;
  }

  // dampening_half - computed: false, optional: true, required: false
  private _dampeningHalf?: number; 
  public get dampeningHalf() {
    return this.getNumberAttribute('dampening_half');
  }
  public set dampeningHalf(value: number) {
    this._dampeningHalf = value;
  }
  public resetDampeningHalf() {
    this._dampeningHalf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningHalfInput() {
    return this._dampeningHalf;
  }

  // dampening_max_supress - computed: false, optional: true, required: false
  private _dampeningMaxSupress?: number; 
  public get dampeningMaxSupress() {
    return this.getNumberAttribute('dampening_max_supress');
  }
  public set dampeningMaxSupress(value: number) {
    this._dampeningMaxSupress = value;
  }
  public resetDampeningMaxSupress() {
    this._dampeningMaxSupress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningMaxSupressInput() {
    return this._dampeningMaxSupress;
  }

  // dampening_start_reuse - computed: false, optional: true, required: false
  private _dampeningStartReuse?: number; 
  public get dampeningStartReuse() {
    return this.getNumberAttribute('dampening_start_reuse');
  }
  public set dampeningStartReuse(value: number) {
    this._dampeningStartReuse = value;
  }
  public resetDampeningStartReuse() {
    this._dampeningStartReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningStartReuseInput() {
    return this._dampeningStartReuse;
  }

  // dampening_start_supress - computed: false, optional: true, required: false
  private _dampeningStartSupress?: number; 
  public get dampeningStartSupress() {
    return this.getNumberAttribute('dampening_start_supress');
  }
  public set dampeningStartSupress(value: number) {
    this._dampeningStartSupress = value;
  }
  public resetDampeningStartSupress() {
    this._dampeningStartSupress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningStartSupressInput() {
    return this._dampeningStartSupress;
  }

  // dampening_unreachability - computed: false, optional: true, required: false
  private _dampeningUnreachability?: number; 
  public get dampeningUnreachability() {
    return this.getNumberAttribute('dampening_unreachability');
  }
  public set dampeningUnreachability(value: number) {
    this._dampeningUnreachability = value;
  }
  public resetDampeningUnreachability() {
    this._dampeningUnreachability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningUnreachabilityInput() {
    return this._dampeningUnreachability;
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
export interface RouterBgpAddressFamilyIpv6DistanceA {
  /**
  * Distance for routes external to the AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#distance_ext RouterBgpAddressFamilyIpv6A#distance_ext}
  */
  readonly distanceExt?: number;
  /**
  * Distance for routes internal to the AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#distance_int RouterBgpAddressFamilyIpv6A#distance_int}
  */
  readonly distanceInt?: number;
  /**
  * Distance for local routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#distance_local RouterBgpAddressFamilyIpv6A#distance_local}
  */
  readonly distanceLocal?: number;
}

export function routerBgpAddressFamilyIpv6DistanceAToTerraform(struct?: RouterBgpAddressFamilyIpv6DistanceAOutputReference | RouterBgpAddressFamilyIpv6DistanceA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance_ext: cdktf.numberToTerraform(struct!.distanceExt),
    distance_int: cdktf.numberToTerraform(struct!.distanceInt),
    distance_local: cdktf.numberToTerraform(struct!.distanceLocal),
  }
}


export function routerBgpAddressFamilyIpv6DistanceAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6DistanceAOutputReference | RouterBgpAddressFamilyIpv6DistanceA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distance_ext: {
      value: cdktf.numberToHclTerraform(struct!.distanceExt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_int: {
      value: cdktf.numberToHclTerraform(struct!.distanceInt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance_local: {
      value: cdktf.numberToHclTerraform(struct!.distanceLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6DistanceAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6DistanceA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distanceExt !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceExt = this._distanceExt;
    }
    if (this._distanceInt !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceInt = this._distanceInt;
    }
    if (this._distanceLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceLocal = this._distanceLocal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6DistanceA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distanceExt = undefined;
      this._distanceInt = undefined;
      this._distanceLocal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distanceExt = value.distanceExt;
      this._distanceInt = value.distanceInt;
      this._distanceLocal = value.distanceLocal;
    }
  }

  // distance_ext - computed: false, optional: true, required: false
  private _distanceExt?: number; 
  public get distanceExt() {
    return this.getNumberAttribute('distance_ext');
  }
  public set distanceExt(value: number) {
    this._distanceExt = value;
  }
  public resetDistanceExt() {
    this._distanceExt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceExtInput() {
    return this._distanceExt;
  }

  // distance_int - computed: false, optional: true, required: false
  private _distanceInt?: number; 
  public get distanceInt() {
    return this.getNumberAttribute('distance_int');
  }
  public set distanceInt(value: number) {
    this._distanceInt = value;
  }
  public resetDistanceInt() {
    this._distanceInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceIntInput() {
    return this._distanceInt;
  }

  // distance_local - computed: false, optional: true, required: false
  private _distanceLocal?: number; 
  public get distanceLocal() {
    return this.getNumberAttribute('distance_local');
  }
  public set distanceLocal(value: number) {
    this._distanceLocal = value;
  }
  public resetDistanceLocal() {
    this._distanceLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceLocalInput() {
    return this._distanceLocal;
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructA {
  /**
  * Ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#ethernet RouterBgpAddressFamilyIpv6A#ethernet}
  */
  readonly ethernet: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#peer_group_name RouterBgpAddressFamilyIpv6A#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#uuid RouterBgpAddressFamilyIpv6A#uuid}
  */
  readonly uuid?: string;
}

export function routerBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
    peer_group_name: cdktf.stringToTerraform(struct!.peerGroupName),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructA | cdktf.IResolvable): any {
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
    peer_group_name: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    if (this._peerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupName = this._peerGroupName;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
      this._peerGroupName = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
      this._peerGroupName = value.peerGroupName;
      this._uuid = value.uuid;
    }
  }

  // ethernet - computed: false, optional: false, required: true
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // peer_group_name - computed: false, optional: true, required: false
  private _peerGroupName?: string; 
  public get peerGroupName() {
    return this.getStringAttribute('peer_group_name');
  }
  public set peerGroupName(value: string) {
    this._peerGroupName = value;
  }
  public resetPeerGroupName() {
    this._peerGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupNameInput() {
    return this._peerGroupName;
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
}

export class RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructAOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsA {
  /**
  * Filter updates to/from this neighbor (IP standard/extended/named access list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#distribute_list RouterBgpAddressFamilyIpv6A#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#distribute_list_direction RouterBgpAddressFamilyIpv6A#distribute_list_direction}
  */
  readonly distributeListDirection?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    distribute_list_direction: cdktf.stringToTerraform(struct!.distributeListDirection),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribute_list: {
      value: cdktf.stringToHclTerraform(struct!.distributeList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribute_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.distributeListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeList = this._distributeList;
    }
    if (this._distributeListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListDirection = this._distributeListDirection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distributeList = undefined;
      this._distributeListDirection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distributeList = value.distributeList;
      this._distributeListDirection = value.distributeListDirection;
    }
  }

  // distribute_list - computed: false, optional: true, required: false
  private _distributeList?: string; 
  public get distributeList() {
    return this.getStringAttribute('distribute_list');
  }
  public set distributeList(value: string) {
    this._distributeList = value;
  }
  public resetDistributeList() {
    this._distributeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInput() {
    return this._distributeList;
  }

  // distribute_list_direction - computed: false, optional: true, required: false
  private _distributeListDirection?: string; 
  public get distributeListDirection() {
    return this.getStringAttribute('distribute_list_direction');
  }
  public set distributeListDirection(value: string) {
    this._distributeListDirection = value;
  }
  public resetDistributeListDirection() {
    this._distributeListDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListDirectionInput() {
    return this._distributeListDirection;
  }
}

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsAOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsA {
  /**
  * Establish BGP filters (AS path access-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#filter_list RouterBgpAddressFamilyIpv6A#filter_list}
  */
  readonly filterList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#filter_list_direction RouterBgpAddressFamilyIpv6A#filter_list_direction}
  */
  readonly filterListDirection?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_list: cdktf.stringToTerraform(struct!.filterList),
    filter_list_direction: cdktf.stringToTerraform(struct!.filterListDirection),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_list: {
      value: cdktf.stringToHclTerraform(struct!.filterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.filterListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterList = this._filterList;
    }
    if (this._filterListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListDirection = this._filterListDirection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterList = undefined;
      this._filterListDirection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterList = value.filterList;
      this._filterListDirection = value.filterListDirection;
    }
  }

  // filter_list - computed: false, optional: true, required: false
  private _filterList?: string; 
  public get filterList() {
    return this.getStringAttribute('filter_list');
  }
  public set filterList(value: string) {
    this._filterList = value;
  }
  public resetFilterList() {
    this._filterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList;
  }

  // filter_list_direction - computed: false, optional: true, required: false
  private _filterListDirection?: string; 
  public get filterListDirection() {
    return this.getStringAttribute('filter_list_direction');
  }
  public set filterListDirection(value: string) {
    this._filterListDirection = value;
  }
  public resetFilterListDirection() {
    this._filterListDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListDirectionInput() {
    return this._filterListDirection;
  }
}

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsAOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsA {
  /**
  * Filter updates to/from this neighbor (Name of a prefix list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#nbr_prefix_list RouterBgpAddressFamilyIpv6A#nbr_prefix_list}
  */
  readonly nbrPrefixList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#nbr_prefix_list_direction RouterBgpAddressFamilyIpv6A#nbr_prefix_list_direction}
  */
  readonly nbrPrefixListDirection?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_prefix_list: cdktf.stringToTerraform(struct!.nbrPrefixList),
    nbr_prefix_list_direction: cdktf.stringToTerraform(struct!.nbrPrefixListDirection),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nbr_prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.nbrPrefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nbr_prefix_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.nbrPrefixListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nbrPrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbrPrefixList = this._nbrPrefixList;
    }
    if (this._nbrPrefixListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbrPrefixListDirection = this._nbrPrefixListDirection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nbrPrefixList = undefined;
      this._nbrPrefixListDirection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nbrPrefixList = value.nbrPrefixList;
      this._nbrPrefixListDirection = value.nbrPrefixListDirection;
    }
  }

  // nbr_prefix_list - computed: false, optional: true, required: false
  private _nbrPrefixList?: string; 
  public get nbrPrefixList() {
    return this.getStringAttribute('nbr_prefix_list');
  }
  public set nbrPrefixList(value: string) {
    this._nbrPrefixList = value;
  }
  public resetNbrPrefixList() {
    this._nbrPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbrPrefixListInput() {
    return this._nbrPrefixList;
  }

  // nbr_prefix_list_direction - computed: false, optional: true, required: false
  private _nbrPrefixListDirection?: string; 
  public get nbrPrefixListDirection() {
    return this.getStringAttribute('nbr_prefix_list_direction');
  }
  public set nbrPrefixListDirection(value: string) {
    this._nbrPrefixListDirection = value;
  }
  public resetNbrPrefixListDirection() {
    this._nbrPrefixListDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbrPrefixListDirectionInput() {
    return this._nbrPrefixListDirection;
  }
}

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsAOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsA {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#nbr_rmap_direction RouterBgpAddressFamilyIpv6A#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#nbr_route_map RouterBgpAddressFamilyIpv6A#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsA | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsA | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsAOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructA {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#activate RouterBgpAddressFamilyIpv6A#activate}
  */
  readonly activate?: number;
  /**
  * Accept as-path with my AS present in it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#allowas_in RouterBgpAddressFamilyIpv6A#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#allowas_in_count RouterBgpAddressFamilyIpv6A#allowas_in_count}
  */
  readonly allowasInCount?: number;
  /**
  * Originate default route to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#default_originate RouterBgpAddressFamilyIpv6A#default_originate}
  */
  readonly defaultOriginate?: number;
  /**
  * enable graceful-restart helper for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#graceful_restart RouterBgpAddressFamilyIpv6A#graceful_restart}
  */
  readonly gracefulRestart?: number;
  /**
  * Allow inbound soft reconfiguration for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#inbound RouterBgpAddressFamilyIpv6A#inbound}
  */
  readonly inbound?: number;
  /**
  * Maximum number of prefix accept from this peer (maximum no. of prefix limit (various depends on model))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#maximum_prefix RouterBgpAddressFamilyIpv6A#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * threshold-value, 1 to 100 percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#maximum_prefix_thres RouterBgpAddressFamilyIpv6A#maximum_prefix_thres}
  */
  readonly maximumPrefixThres?: number;
  /**
  * Neighbor address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#neighbor_ipv4 RouterBgpAddressFamilyIpv6A#neighbor_ipv4}
  */
  readonly neighborIpv4: string;
  /**
  * Disable the next hop calculation for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#next_hop_self RouterBgpAddressFamilyIpv6A#next_hop_self}
  */
  readonly nextHopSelf?: number;
  /**
  * Configure peer-group (peer-group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#peer_group_name RouterBgpAddressFamilyIpv6A#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * 'both': both; 'receive': receive; 'send': send;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#prefix_list_direction RouterBgpAddressFamilyIpv6A#prefix_list_direction}
  */
  readonly prefixListDirection?: string;
  /**
  * Remove private AS number from outbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#remove_private_as RouterBgpAddressFamilyIpv6A#remove_private_as}
  */
  readonly removePrivateAs?: number;
  /**
  * restart value, 1 to 1440 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#restart_min RouterBgpAddressFamilyIpv6A#restart_min}
  */
  readonly restartMin?: number;
  /**
  * Route-map to specify criteria to originate default (route-map name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
  */
  readonly routeMap?: string;
  /**
  * 'all': Send Standard, Extended, and Large Community attributes; 'both': Send Standard and Extended Community attributes; 'none': Disable Sending Community attributes; 'standard': Send Standard Community attributes; 'extended': Send Extended Community attributes; 'large': Send Large Community attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#send_community_val RouterBgpAddressFamilyIpv6A#send_community_val}
  */
  readonly sendCommunityVal?: string;
  /**
  * Route-map to selectively unsuppress suppressed routes (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#unsuppress_map RouterBgpAddressFamilyIpv6A#unsuppress_map}
  */
  readonly unsuppressMap?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#uuid RouterBgpAddressFamilyIpv6A#uuid}
  */
  readonly uuid?: string;
  /**
  * Set default weight for routes from this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#weight RouterBgpAddressFamilyIpv6A#weight}
  */
  readonly weight?: number;
  /**
  * distribute_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#distribute_lists RouterBgpAddressFamilyIpv6A#distribute_lists}
  */
  readonly distributeLists?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsA[] | cdktf.IResolvable;
  /**
  * neighbor_filter_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#neighbor_filter_lists RouterBgpAddressFamilyIpv6A#neighbor_filter_lists}
  */
  readonly neighborFilterLists?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsA[] | cdktf.IResolvable;
  /**
  * neighbor_prefix_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#neighbor_prefix_lists RouterBgpAddressFamilyIpv6A#neighbor_prefix_lists}
  */
  readonly neighborPrefixLists?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsA[] | cdktf.IResolvable;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#neighbor_route_map_lists RouterBgpAddressFamilyIpv6A#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsA[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListStructAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.numberToTerraform(struct!.activate),
    allowas_in: cdktf.numberToTerraform(struct!.allowasIn),
    allowas_in_count: cdktf.numberToTerraform(struct!.allowasInCount),
    default_originate: cdktf.numberToTerraform(struct!.defaultOriginate),
    graceful_restart: cdktf.numberToTerraform(struct!.gracefulRestart),
    inbound: cdktf.numberToTerraform(struct!.inbound),
    maximum_prefix: cdktf.numberToTerraform(struct!.maximumPrefix),
    maximum_prefix_thres: cdktf.numberToTerraform(struct!.maximumPrefixThres),
    neighbor_ipv4: cdktf.stringToTerraform(struct!.neighborIpv4),
    next_hop_self: cdktf.numberToTerraform(struct!.nextHopSelf),
    peer_group_name: cdktf.stringToTerraform(struct!.peerGroupName),
    prefix_list_direction: cdktf.stringToTerraform(struct!.prefixListDirection),
    remove_private_as: cdktf.numberToTerraform(struct!.removePrivateAs),
    restart_min: cdktf.numberToTerraform(struct!.restartMin),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    send_community_val: cdktf.stringToTerraform(struct!.sendCommunityVal),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
    distribute_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsAToTerraform, true)(struct!.distributeLists),
    neighbor_filter_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsAToTerraform, true)(struct!.neighborFilterLists),
    neighbor_prefix_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsAToTerraform, true)(struct!.neighborPrefixLists),
    neighbor_route_map_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsAToTerraform, true)(struct!.neighborRouteMapLists),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv4NeighborListStructAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructA | cdktf.IResolvable): any {
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
    allowas_in: {
      value: cdktf.numberToHclTerraform(struct!.allowasIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_count: {
      value: cdktf.numberToHclTerraform(struct!.allowasInCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_originate: {
      value: cdktf.numberToHclTerraform(struct!.defaultOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graceful_restart: {
      value: cdktf.numberToHclTerraform(struct!.gracefulRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound: {
      value: cdktf.numberToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_thres: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThres),
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
    next_hop_self: {
      value: cdktf.numberToHclTerraform(struct!.nextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_group_name: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.prefixListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as: {
      value: cdktf.numberToHclTerraform(struct!.removePrivateAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restart_min: {
      value: cdktf.numberToHclTerraform(struct!.restartMin),
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
    send_community_val: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsuppress_map: {
      value: cdktf.stringToHclTerraform(struct!.unsuppressMap),
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
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distribute_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsAToHclTerraform, true)(struct!.distributeLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsAList",
    },
    neighbor_filter_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsAToHclTerraform, true)(struct!.neighborFilterLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsAList",
    },
    neighbor_prefix_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsAToHclTerraform, true)(struct!.neighborPrefixLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsAList",
    },
    neighbor_route_map_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsAToHclTerraform, true)(struct!.neighborRouteMapLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._allowasIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn = this._allowasIn;
    }
    if (this._allowasInCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInCount = this._allowasInCount;
    }
    if (this._defaultOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginate = this._defaultOriginate;
    }
    if (this._gracefulRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestart = this._gracefulRestart;
    }
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._maximumPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix;
    }
    if (this._maximumPrefixThres !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThres = this._maximumPrefixThres;
    }
    if (this._neighborIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborIpv4 = this._neighborIpv4;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._peerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupName = this._peerGroupName;
    }
    if (this._prefixListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListDirection = this._prefixListDirection;
    }
    if (this._removePrivateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs;
    }
    if (this._restartMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartMin = this._restartMin;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._sendCommunityVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVal = this._sendCommunityVal;
    }
    if (this._unsuppressMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppressMap = this._unsuppressMap;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._distributeLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeLists = this._distributeLists?.internalValue;
    }
    if (this._neighborFilterLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborFilterLists = this._neighborFilterLists?.internalValue;
    }
    if (this._neighborPrefixLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPrefixLists = this._neighborPrefixLists?.internalValue;
    }
    if (this._neighborRouteMapLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborRouteMapLists = this._neighborRouteMapLists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._allowasIn = undefined;
      this._allowasInCount = undefined;
      this._defaultOriginate = undefined;
      this._gracefulRestart = undefined;
      this._inbound = undefined;
      this._maximumPrefix = undefined;
      this._maximumPrefixThres = undefined;
      this._neighborIpv4 = undefined;
      this._nextHopSelf = undefined;
      this._peerGroupName = undefined;
      this._prefixListDirection = undefined;
      this._removePrivateAs = undefined;
      this._restartMin = undefined;
      this._routeMap = undefined;
      this._sendCommunityVal = undefined;
      this._unsuppressMap = undefined;
      this._uuid = undefined;
      this._weight = undefined;
      this._distributeLists.internalValue = undefined;
      this._neighborFilterLists.internalValue = undefined;
      this._neighborPrefixLists.internalValue = undefined;
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
      this._allowasIn = value.allowasIn;
      this._allowasInCount = value.allowasInCount;
      this._defaultOriginate = value.defaultOriginate;
      this._gracefulRestart = value.gracefulRestart;
      this._inbound = value.inbound;
      this._maximumPrefix = value.maximumPrefix;
      this._maximumPrefixThres = value.maximumPrefixThres;
      this._neighborIpv4 = value.neighborIpv4;
      this._nextHopSelf = value.nextHopSelf;
      this._peerGroupName = value.peerGroupName;
      this._prefixListDirection = value.prefixListDirection;
      this._removePrivateAs = value.removePrivateAs;
      this._restartMin = value.restartMin;
      this._routeMap = value.routeMap;
      this._sendCommunityVal = value.sendCommunityVal;
      this._unsuppressMap = value.unsuppressMap;
      this._uuid = value.uuid;
      this._weight = value.weight;
      this._distributeLists.internalValue = value.distributeLists;
      this._neighborFilterLists.internalValue = value.neighborFilterLists;
      this._neighborPrefixLists.internalValue = value.neighborPrefixLists;
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

  // allowas_in - computed: false, optional: true, required: false
  private _allowasIn?: number; 
  public get allowasIn() {
    return this.getNumberAttribute('allowas_in');
  }
  public set allowasIn(value: number) {
    this._allowasIn = value;
  }
  public resetAllowasIn() {
    this._allowasIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInInput() {
    return this._allowasIn;
  }

  // allowas_in_count - computed: false, optional: true, required: false
  private _allowasInCount?: number; 
  public get allowasInCount() {
    return this.getNumberAttribute('allowas_in_count');
  }
  public set allowasInCount(value: number) {
    this._allowasInCount = value;
  }
  public resetAllowasInCount() {
    this._allowasInCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInCountInput() {
    return this._allowasInCount;
  }

  // default_originate - computed: false, optional: true, required: false
  private _defaultOriginate?: number; 
  public get defaultOriginate() {
    return this.getNumberAttribute('default_originate');
  }
  public set defaultOriginate(value: number) {
    this._defaultOriginate = value;
  }
  public resetDefaultOriginate() {
    this._defaultOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateInput() {
    return this._defaultOriginate;
  }

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart?: number; 
  public get gracefulRestart() {
    return this.getNumberAttribute('graceful_restart');
  }
  public set gracefulRestart(value: number) {
    this._gracefulRestart = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart;
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound?: number; 
  public get inbound() {
    return this.getNumberAttribute('inbound');
  }
  public set inbound(value: number) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // maximum_prefix - computed: false, optional: true, required: false
  private _maximumPrefix?: number; 
  public get maximumPrefix() {
    return this.getNumberAttribute('maximum_prefix');
  }
  public set maximumPrefix(value: number) {
    this._maximumPrefix = value;
  }
  public resetMaximumPrefix() {
    this._maximumPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixInput() {
    return this._maximumPrefix;
  }

  // maximum_prefix_thres - computed: false, optional: true, required: false
  private _maximumPrefixThres?: number; 
  public get maximumPrefixThres() {
    return this.getNumberAttribute('maximum_prefix_thres');
  }
  public set maximumPrefixThres(value: number) {
    this._maximumPrefixThres = value;
  }
  public resetMaximumPrefixThres() {
    this._maximumPrefixThres = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresInput() {
    return this._maximumPrefixThres;
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

  // next_hop_self - computed: false, optional: true, required: false
  private _nextHopSelf?: number; 
  public get nextHopSelf() {
    return this.getNumberAttribute('next_hop_self');
  }
  public set nextHopSelf(value: number) {
    this._nextHopSelf = value;
  }
  public resetNextHopSelf() {
    this._nextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInput() {
    return this._nextHopSelf;
  }

  // peer_group_name - computed: false, optional: true, required: false
  private _peerGroupName?: string; 
  public get peerGroupName() {
    return this.getStringAttribute('peer_group_name');
  }
  public set peerGroupName(value: string) {
    this._peerGroupName = value;
  }
  public resetPeerGroupName() {
    this._peerGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupNameInput() {
    return this._peerGroupName;
  }

  // prefix_list_direction - computed: false, optional: true, required: false
  private _prefixListDirection?: string; 
  public get prefixListDirection() {
    return this.getStringAttribute('prefix_list_direction');
  }
  public set prefixListDirection(value: string) {
    this._prefixListDirection = value;
  }
  public resetPrefixListDirection() {
    this._prefixListDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListDirectionInput() {
    return this._prefixListDirection;
  }

  // remove_private_as - computed: false, optional: true, required: false
  private _removePrivateAs?: number; 
  public get removePrivateAs() {
    return this.getNumberAttribute('remove_private_as');
  }
  public set removePrivateAs(value: number) {
    this._removePrivateAs = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs;
  }

  // restart_min - computed: false, optional: true, required: false
  private _restartMin?: number; 
  public get restartMin() {
    return this.getNumberAttribute('restart_min');
  }
  public set restartMin(value: number) {
    this._restartMin = value;
  }
  public resetRestartMin() {
    this._restartMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartMinInput() {
    return this._restartMin;
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

  // unsuppress_map - computed: false, optional: true, required: false
  private _unsuppressMap?: string; 
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }
  public set unsuppressMap(value: string) {
    this._unsuppressMap = value;
  }
  public resetUnsuppressMap() {
    this._unsuppressMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsuppressMapInput() {
    return this._unsuppressMap;
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

  // distribute_lists - computed: false, optional: true, required: false
  private _distributeLists = new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsAList(this, "distribute_lists", false);
  public get distributeLists() {
    return this._distributeLists;
  }
  public putDistributeLists(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListDistributeListsA[] | cdktf.IResolvable) {
    this._distributeLists.internalValue = value;
  }
  public resetDistributeLists() {
    this._distributeLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListsInput() {
    return this._distributeLists.internalValue;
  }

  // neighbor_filter_lists - computed: false, optional: true, required: false
  private _neighborFilterLists = new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsAList(this, "neighbor_filter_lists", false);
  public get neighborFilterLists() {
    return this._neighborFilterLists;
  }
  public putNeighborFilterLists(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborFilterListsA[] | cdktf.IResolvable) {
    this._neighborFilterLists.internalValue = value;
  }
  public resetNeighborFilterLists() {
    this._neighborFilterLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborFilterListsInput() {
    return this._neighborFilterLists.internalValue;
  }

  // neighbor_prefix_lists - computed: false, optional: true, required: false
  private _neighborPrefixLists = new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsAList(this, "neighbor_prefix_lists", false);
  public get neighborPrefixLists() {
    return this._neighborPrefixLists;
  }
  public putNeighborPrefixLists(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborPrefixListsA[] | cdktf.IResolvable) {
    this._neighborPrefixLists.internalValue = value;
  }
  public resetNeighborPrefixLists() {
    this._neighborPrefixLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborPrefixListsInput() {
    return this._neighborPrefixLists.internalValue;
  }

  // neighbor_route_map_lists - computed: false, optional: true, required: false
  private _neighborRouteMapLists = new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsAList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListNeighborRouteMapListsA[] | cdktf.IResolvable) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructAOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsA {
  /**
  * Filter updates to/from this neighbor (IP standard/extended/named access list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#distribute_list RouterBgpAddressFamilyIpv6A#distribute_list}
  */
  readonly distributeList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#distribute_list_direction RouterBgpAddressFamilyIpv6A#distribute_list_direction}
  */
  readonly distributeListDirection?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribute_list: cdktf.stringToTerraform(struct!.distributeList),
    distribute_list_direction: cdktf.stringToTerraform(struct!.distributeListDirection),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribute_list: {
      value: cdktf.stringToHclTerraform(struct!.distributeList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribute_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.distributeListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeList = this._distributeList;
    }
    if (this._distributeListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListDirection = this._distributeListDirection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distributeList = undefined;
      this._distributeListDirection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distributeList = value.distributeList;
      this._distributeListDirection = value.distributeListDirection;
    }
  }

  // distribute_list - computed: false, optional: true, required: false
  private _distributeList?: string; 
  public get distributeList() {
    return this.getStringAttribute('distribute_list');
  }
  public set distributeList(value: string) {
    this._distributeList = value;
  }
  public resetDistributeList() {
    this._distributeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInput() {
    return this._distributeList;
  }

  // distribute_list_direction - computed: false, optional: true, required: false
  private _distributeListDirection?: string; 
  public get distributeListDirection() {
    return this.getStringAttribute('distribute_list_direction');
  }
  public set distributeListDirection(value: string) {
    this._distributeListDirection = value;
  }
  public resetDistributeListDirection() {
    this._distributeListDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListDirectionInput() {
    return this._distributeListDirection;
  }
}

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsAOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsA {
  /**
  * Establish BGP filters (AS path access-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#filter_list RouterBgpAddressFamilyIpv6A#filter_list}
  */
  readonly filterList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#filter_list_direction RouterBgpAddressFamilyIpv6A#filter_list_direction}
  */
  readonly filterListDirection?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_list: cdktf.stringToTerraform(struct!.filterList),
    filter_list_direction: cdktf.stringToTerraform(struct!.filterListDirection),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_list: {
      value: cdktf.stringToHclTerraform(struct!.filterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.filterListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterList = this._filterList;
    }
    if (this._filterListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListDirection = this._filterListDirection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterList = undefined;
      this._filterListDirection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterList = value.filterList;
      this._filterListDirection = value.filterListDirection;
    }
  }

  // filter_list - computed: false, optional: true, required: false
  private _filterList?: string; 
  public get filterList() {
    return this.getStringAttribute('filter_list');
  }
  public set filterList(value: string) {
    this._filterList = value;
  }
  public resetFilterList() {
    this._filterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList;
  }

  // filter_list_direction - computed: false, optional: true, required: false
  private _filterListDirection?: string; 
  public get filterListDirection() {
    return this.getStringAttribute('filter_list_direction');
  }
  public set filterListDirection(value: string) {
    this._filterListDirection = value;
  }
  public resetFilterListDirection() {
    this._filterListDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListDirectionInput() {
    return this._filterListDirection;
  }
}

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsAOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsA {
  /**
  * Filter updates to/from this neighbor (Name of a prefix list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#nbr_prefix_list RouterBgpAddressFamilyIpv6A#nbr_prefix_list}
  */
  readonly nbrPrefixList?: string;
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#nbr_prefix_list_direction RouterBgpAddressFamilyIpv6A#nbr_prefix_list_direction}
  */
  readonly nbrPrefixListDirection?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_prefix_list: cdktf.stringToTerraform(struct!.nbrPrefixList),
    nbr_prefix_list_direction: cdktf.stringToTerraform(struct!.nbrPrefixListDirection),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nbr_prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.nbrPrefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nbr_prefix_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.nbrPrefixListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nbrPrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbrPrefixList = this._nbrPrefixList;
    }
    if (this._nbrPrefixListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbrPrefixListDirection = this._nbrPrefixListDirection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nbrPrefixList = undefined;
      this._nbrPrefixListDirection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nbrPrefixList = value.nbrPrefixList;
      this._nbrPrefixListDirection = value.nbrPrefixListDirection;
    }
  }

  // nbr_prefix_list - computed: false, optional: true, required: false
  private _nbrPrefixList?: string; 
  public get nbrPrefixList() {
    return this.getStringAttribute('nbr_prefix_list');
  }
  public set nbrPrefixList(value: string) {
    this._nbrPrefixList = value;
  }
  public resetNbrPrefixList() {
    this._nbrPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbrPrefixListInput() {
    return this._nbrPrefixList;
  }

  // nbr_prefix_list_direction - computed: false, optional: true, required: false
  private _nbrPrefixListDirection?: string; 
  public get nbrPrefixListDirection() {
    return this.getStringAttribute('nbr_prefix_list_direction');
  }
  public set nbrPrefixListDirection(value: string) {
    this._nbrPrefixListDirection = value;
  }
  public resetNbrPrefixListDirection() {
    this._nbrPrefixListDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbrPrefixListDirectionInput() {
    return this._nbrPrefixListDirection;
  }
}

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsAOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsA {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#nbr_rmap_direction RouterBgpAddressFamilyIpv6A#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#nbr_route_map RouterBgpAddressFamilyIpv6A#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsA | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsA | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsAOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructA {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#activate RouterBgpAddressFamilyIpv6A#activate}
  */
  readonly activate?: number;
  /**
  * Accept as-path with my AS present in it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#allowas_in RouterBgpAddressFamilyIpv6A#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#allowas_in_count RouterBgpAddressFamilyIpv6A#allowas_in_count}
  */
  readonly allowasInCount?: number;
  /**
  * Originate default route to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#default_originate RouterBgpAddressFamilyIpv6A#default_originate}
  */
  readonly defaultOriginate?: number;
  /**
  * enable graceful-restart helper for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#graceful_restart RouterBgpAddressFamilyIpv6A#graceful_restart}
  */
  readonly gracefulRestart?: number;
  /**
  * Allow inbound soft reconfiguration for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#inbound RouterBgpAddressFamilyIpv6A#inbound}
  */
  readonly inbound?: number;
  /**
  * Maximum number of prefix accept from this peer (maximum no. of prefix limit (various depends on model))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#maximum_prefix RouterBgpAddressFamilyIpv6A#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * threshold-value, 1 to 100 percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#maximum_prefix_thres RouterBgpAddressFamilyIpv6A#maximum_prefix_thres}
  */
  readonly maximumPrefixThres?: number;
  /**
  * Neighbor IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#neighbor_ipv6 RouterBgpAddressFamilyIpv6A#neighbor_ipv6}
  */
  readonly neighborIpv6: string;
  /**
  * Disable the next hop calculation for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#next_hop_self RouterBgpAddressFamilyIpv6A#next_hop_self}
  */
  readonly nextHopSelf?: number;
  /**
  * Configure peer-group (peer-group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#peer_group_name RouterBgpAddressFamilyIpv6A#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * 'both': both; 'receive': receive; 'send': send;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#prefix_list_direction RouterBgpAddressFamilyIpv6A#prefix_list_direction}
  */
  readonly prefixListDirection?: string;
  /**
  * Remove private AS number from outbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#remove_private_as RouterBgpAddressFamilyIpv6A#remove_private_as}
  */
  readonly removePrivateAs?: number;
  /**
  * restart value, 1 to 1440 minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#restart_min RouterBgpAddressFamilyIpv6A#restart_min}
  */
  readonly restartMin?: number;
  /**
  * Route-map to specify criteria to originate default (route-map name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
  */
  readonly routeMap?: string;
  /**
  * 'all': Send Standard, Extended, and Large Community attributes; 'both': Send Standard and Extended Community attributes; 'none': Disable Sending Community attributes; 'standard': Send Standard Community attributes; 'extended': Send Extended Community attributes; 'large': Send Large Community attributes;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#send_community_val RouterBgpAddressFamilyIpv6A#send_community_val}
  */
  readonly sendCommunityVal?: string;
  /**
  * Route-map to selectively unsuppress suppressed routes (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#unsuppress_map RouterBgpAddressFamilyIpv6A#unsuppress_map}
  */
  readonly unsuppressMap?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#uuid RouterBgpAddressFamilyIpv6A#uuid}
  */
  readonly uuid?: string;
  /**
  * Set default weight for routes from this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#weight RouterBgpAddressFamilyIpv6A#weight}
  */
  readonly weight?: number;
  /**
  * distribute_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#distribute_lists RouterBgpAddressFamilyIpv6A#distribute_lists}
  */
  readonly distributeLists?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsA[] | cdktf.IResolvable;
  /**
  * neighbor_filter_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#neighbor_filter_lists RouterBgpAddressFamilyIpv6A#neighbor_filter_lists}
  */
  readonly neighborFilterLists?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsA[] | cdktf.IResolvable;
  /**
  * neighbor_prefix_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#neighbor_prefix_lists RouterBgpAddressFamilyIpv6A#neighbor_prefix_lists}
  */
  readonly neighborPrefixLists?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsA[] | cdktf.IResolvable;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#neighbor_route_map_lists RouterBgpAddressFamilyIpv6A#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsA[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListStructAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.numberToTerraform(struct!.activate),
    allowas_in: cdktf.numberToTerraform(struct!.allowasIn),
    allowas_in_count: cdktf.numberToTerraform(struct!.allowasInCount),
    default_originate: cdktf.numberToTerraform(struct!.defaultOriginate),
    graceful_restart: cdktf.numberToTerraform(struct!.gracefulRestart),
    inbound: cdktf.numberToTerraform(struct!.inbound),
    maximum_prefix: cdktf.numberToTerraform(struct!.maximumPrefix),
    maximum_prefix_thres: cdktf.numberToTerraform(struct!.maximumPrefixThres),
    neighbor_ipv6: cdktf.stringToTerraform(struct!.neighborIpv6),
    next_hop_self: cdktf.numberToTerraform(struct!.nextHopSelf),
    peer_group_name: cdktf.stringToTerraform(struct!.peerGroupName),
    prefix_list_direction: cdktf.stringToTerraform(struct!.prefixListDirection),
    remove_private_as: cdktf.numberToTerraform(struct!.removePrivateAs),
    restart_min: cdktf.numberToTerraform(struct!.restartMin),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    send_community_val: cdktf.stringToTerraform(struct!.sendCommunityVal),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
    distribute_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsAToTerraform, true)(struct!.distributeLists),
    neighbor_filter_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsAToTerraform, true)(struct!.neighborFilterLists),
    neighbor_prefix_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsAToTerraform, true)(struct!.neighborPrefixLists),
    neighbor_route_map_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsAToTerraform, true)(struct!.neighborRouteMapLists),
  }
}


export function routerBgpAddressFamilyIpv6NeighborIpv6NeighborListStructAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructA | cdktf.IResolvable): any {
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
    allowas_in: {
      value: cdktf.numberToHclTerraform(struct!.allowasIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_count: {
      value: cdktf.numberToHclTerraform(struct!.allowasInCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_originate: {
      value: cdktf.numberToHclTerraform(struct!.defaultOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graceful_restart: {
      value: cdktf.numberToHclTerraform(struct!.gracefulRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound: {
      value: cdktf.numberToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_thres: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThres),
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
    next_hop_self: {
      value: cdktf.numberToHclTerraform(struct!.nextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_group_name: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_direction: {
      value: cdktf.stringToHclTerraform(struct!.prefixListDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as: {
      value: cdktf.numberToHclTerraform(struct!.removePrivateAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restart_min: {
      value: cdktf.numberToHclTerraform(struct!.restartMin),
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
    send_community_val: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unsuppress_map: {
      value: cdktf.stringToHclTerraform(struct!.unsuppressMap),
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
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distribute_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsAToHclTerraform, true)(struct!.distributeLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsAList",
    },
    neighbor_filter_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsAToHclTerraform, true)(struct!.neighborFilterLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsAList",
    },
    neighbor_prefix_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsAToHclTerraform, true)(struct!.neighborPrefixLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsAList",
    },
    neighbor_route_map_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsAToHclTerraform, true)(struct!.neighborRouteMapLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._allowasIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn = this._allowasIn;
    }
    if (this._allowasInCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInCount = this._allowasInCount;
    }
    if (this._defaultOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginate = this._defaultOriginate;
    }
    if (this._gracefulRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestart = this._gracefulRestart;
    }
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._maximumPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix;
    }
    if (this._maximumPrefixThres !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThres = this._maximumPrefixThres;
    }
    if (this._neighborIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborIpv6 = this._neighborIpv6;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._peerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupName = this._peerGroupName;
    }
    if (this._prefixListDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListDirection = this._prefixListDirection;
    }
    if (this._removePrivateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs;
    }
    if (this._restartMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartMin = this._restartMin;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._sendCommunityVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVal = this._sendCommunityVal;
    }
    if (this._unsuppressMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppressMap = this._unsuppressMap;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._distributeLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeLists = this._distributeLists?.internalValue;
    }
    if (this._neighborFilterLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborFilterLists = this._neighborFilterLists?.internalValue;
    }
    if (this._neighborPrefixLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborPrefixLists = this._neighborPrefixLists?.internalValue;
    }
    if (this._neighborRouteMapLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborRouteMapLists = this._neighborRouteMapLists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._allowasIn = undefined;
      this._allowasInCount = undefined;
      this._defaultOriginate = undefined;
      this._gracefulRestart = undefined;
      this._inbound = undefined;
      this._maximumPrefix = undefined;
      this._maximumPrefixThres = undefined;
      this._neighborIpv6 = undefined;
      this._nextHopSelf = undefined;
      this._peerGroupName = undefined;
      this._prefixListDirection = undefined;
      this._removePrivateAs = undefined;
      this._restartMin = undefined;
      this._routeMap = undefined;
      this._sendCommunityVal = undefined;
      this._unsuppressMap = undefined;
      this._uuid = undefined;
      this._weight = undefined;
      this._distributeLists.internalValue = undefined;
      this._neighborFilterLists.internalValue = undefined;
      this._neighborPrefixLists.internalValue = undefined;
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
      this._allowasIn = value.allowasIn;
      this._allowasInCount = value.allowasInCount;
      this._defaultOriginate = value.defaultOriginate;
      this._gracefulRestart = value.gracefulRestart;
      this._inbound = value.inbound;
      this._maximumPrefix = value.maximumPrefix;
      this._maximumPrefixThres = value.maximumPrefixThres;
      this._neighborIpv6 = value.neighborIpv6;
      this._nextHopSelf = value.nextHopSelf;
      this._peerGroupName = value.peerGroupName;
      this._prefixListDirection = value.prefixListDirection;
      this._removePrivateAs = value.removePrivateAs;
      this._restartMin = value.restartMin;
      this._routeMap = value.routeMap;
      this._sendCommunityVal = value.sendCommunityVal;
      this._unsuppressMap = value.unsuppressMap;
      this._uuid = value.uuid;
      this._weight = value.weight;
      this._distributeLists.internalValue = value.distributeLists;
      this._neighborFilterLists.internalValue = value.neighborFilterLists;
      this._neighborPrefixLists.internalValue = value.neighborPrefixLists;
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

  // allowas_in - computed: false, optional: true, required: false
  private _allowasIn?: number; 
  public get allowasIn() {
    return this.getNumberAttribute('allowas_in');
  }
  public set allowasIn(value: number) {
    this._allowasIn = value;
  }
  public resetAllowasIn() {
    this._allowasIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInInput() {
    return this._allowasIn;
  }

  // allowas_in_count - computed: false, optional: true, required: false
  private _allowasInCount?: number; 
  public get allowasInCount() {
    return this.getNumberAttribute('allowas_in_count');
  }
  public set allowasInCount(value: number) {
    this._allowasInCount = value;
  }
  public resetAllowasInCount() {
    this._allowasInCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInCountInput() {
    return this._allowasInCount;
  }

  // default_originate - computed: false, optional: true, required: false
  private _defaultOriginate?: number; 
  public get defaultOriginate() {
    return this.getNumberAttribute('default_originate');
  }
  public set defaultOriginate(value: number) {
    this._defaultOriginate = value;
  }
  public resetDefaultOriginate() {
    this._defaultOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateInput() {
    return this._defaultOriginate;
  }

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart?: number; 
  public get gracefulRestart() {
    return this.getNumberAttribute('graceful_restart');
  }
  public set gracefulRestart(value: number) {
    this._gracefulRestart = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart;
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound?: number; 
  public get inbound() {
    return this.getNumberAttribute('inbound');
  }
  public set inbound(value: number) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // maximum_prefix - computed: false, optional: true, required: false
  private _maximumPrefix?: number; 
  public get maximumPrefix() {
    return this.getNumberAttribute('maximum_prefix');
  }
  public set maximumPrefix(value: number) {
    this._maximumPrefix = value;
  }
  public resetMaximumPrefix() {
    this._maximumPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixInput() {
    return this._maximumPrefix;
  }

  // maximum_prefix_thres - computed: false, optional: true, required: false
  private _maximumPrefixThres?: number; 
  public get maximumPrefixThres() {
    return this.getNumberAttribute('maximum_prefix_thres');
  }
  public set maximumPrefixThres(value: number) {
    this._maximumPrefixThres = value;
  }
  public resetMaximumPrefixThres() {
    this._maximumPrefixThres = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresInput() {
    return this._maximumPrefixThres;
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

  // next_hop_self - computed: false, optional: true, required: false
  private _nextHopSelf?: number; 
  public get nextHopSelf() {
    return this.getNumberAttribute('next_hop_self');
  }
  public set nextHopSelf(value: number) {
    this._nextHopSelf = value;
  }
  public resetNextHopSelf() {
    this._nextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInput() {
    return this._nextHopSelf;
  }

  // peer_group_name - computed: false, optional: true, required: false
  private _peerGroupName?: string; 
  public get peerGroupName() {
    return this.getStringAttribute('peer_group_name');
  }
  public set peerGroupName(value: string) {
    this._peerGroupName = value;
  }
  public resetPeerGroupName() {
    this._peerGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupNameInput() {
    return this._peerGroupName;
  }

  // prefix_list_direction - computed: false, optional: true, required: false
  private _prefixListDirection?: string; 
  public get prefixListDirection() {
    return this.getStringAttribute('prefix_list_direction');
  }
  public set prefixListDirection(value: string) {
    this._prefixListDirection = value;
  }
  public resetPrefixListDirection() {
    this._prefixListDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListDirectionInput() {
    return this._prefixListDirection;
  }

  // remove_private_as - computed: false, optional: true, required: false
  private _removePrivateAs?: number; 
  public get removePrivateAs() {
    return this.getNumberAttribute('remove_private_as');
  }
  public set removePrivateAs(value: number) {
    this._removePrivateAs = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs;
  }

  // restart_min - computed: false, optional: true, required: false
  private _restartMin?: number; 
  public get restartMin() {
    return this.getNumberAttribute('restart_min');
  }
  public set restartMin(value: number) {
    this._restartMin = value;
  }
  public resetRestartMin() {
    this._restartMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartMinInput() {
    return this._restartMin;
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

  // unsuppress_map - computed: false, optional: true, required: false
  private _unsuppressMap?: string; 
  public get unsuppressMap() {
    return this.getStringAttribute('unsuppress_map');
  }
  public set unsuppressMap(value: string) {
    this._unsuppressMap = value;
  }
  public resetUnsuppressMap() {
    this._unsuppressMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsuppressMapInput() {
    return this._unsuppressMap;
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

  // distribute_lists - computed: false, optional: true, required: false
  private _distributeLists = new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsAList(this, "distribute_lists", false);
  public get distributeLists() {
    return this._distributeLists;
  }
  public putDistributeLists(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListDistributeListsA[] | cdktf.IResolvable) {
    this._distributeLists.internalValue = value;
  }
  public resetDistributeLists() {
    this._distributeLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListsInput() {
    return this._distributeLists.internalValue;
  }

  // neighbor_filter_lists - computed: false, optional: true, required: false
  private _neighborFilterLists = new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsAList(this, "neighbor_filter_lists", false);
  public get neighborFilterLists() {
    return this._neighborFilterLists;
  }
  public putNeighborFilterLists(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborFilterListsA[] | cdktf.IResolvable) {
    this._neighborFilterLists.internalValue = value;
  }
  public resetNeighborFilterLists() {
    this._neighborFilterLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborFilterListsInput() {
    return this._neighborFilterLists.internalValue;
  }

  // neighbor_prefix_lists - computed: false, optional: true, required: false
  private _neighborPrefixLists = new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsAList(this, "neighbor_prefix_lists", false);
  public get neighborPrefixLists() {
    return this._neighborPrefixLists;
  }
  public putNeighborPrefixLists(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborPrefixListsA[] | cdktf.IResolvable) {
    this._neighborPrefixLists.internalValue = value;
  }
  public resetNeighborPrefixLists() {
    this._neighborPrefixLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborPrefixListsInput() {
    return this._neighborPrefixLists.internalValue;
  }

  // neighbor_route_map_lists - computed: false, optional: true, required: false
  private _neighborRouteMapLists = new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsAList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListNeighborRouteMapListsA[] | cdktf.IResolvable) {
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

export class RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructAOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsA {
  /**
  * 'in': in; 'out': out;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#nbr_rmap_direction RouterBgpAddressFamilyIpv6A#nbr_rmap_direction}
  */
  readonly nbrRmapDirection?: string;
  /**
  * Apply route map to neighbor (Name of route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#nbr_route_map RouterBgpAddressFamilyIpv6A#nbr_route_map}
  */
  readonly nbrRouteMap?: string;
}

export function routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nbr_rmap_direction: cdktf.stringToTerraform(struct!.nbrRmapDirection),
    nbr_route_map: cdktf.stringToTerraform(struct!.nbrRouteMap),
  }
}


export function routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsA | cdktf.IResolvable): any {
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

export class RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsA | cdktf.IResolvable | undefined) {
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

export class RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsAOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructA {
  /**
  * Enable the Address Family for this Neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#activate RouterBgpAddressFamilyIpv6A#activate}
  */
  readonly activate?: number;
  /**
  * Accept as-path with my AS present in it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#allowas_in RouterBgpAddressFamilyIpv6A#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#allowas_in_count RouterBgpAddressFamilyIpv6A#allowas_in_count}
  */
  readonly allowasInCount?: number;
  /**
  * Allow inbound soft reconfiguration for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#inbound RouterBgpAddressFamilyIpv6A#inbound}
  */
  readonly inbound?: number;
  /**
  * Maximum number of prefix accept from this peer (maximum no. of prefix limit (various depends on model))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#maximum_prefix RouterBgpAddressFamilyIpv6A#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * threshold-value, 1 to 100 percent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#maximum_prefix_thres RouterBgpAddressFamilyIpv6A#maximum_prefix_thres}
  */
  readonly maximumPrefixThres?: number;
  /**
  * Disable the next hop calculation for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#next_hop_self RouterBgpAddressFamilyIpv6A#next_hop_self}
  */
  readonly nextHopSelf?: number;
  /**
  * Neighbor tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#peer_group RouterBgpAddressFamilyIpv6A#peer_group}
  */
  readonly peerGroup: string;
  /**
  * Remove private AS number from outbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#remove_private_as RouterBgpAddressFamilyIpv6A#remove_private_as}
  */
  readonly removePrivateAs?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#uuid RouterBgpAddressFamilyIpv6A#uuid}
  */
  readonly uuid?: string;
  /**
  * Set default weight for routes from this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#weight RouterBgpAddressFamilyIpv6A#weight}
  */
  readonly weight?: number;
  /**
  * neighbor_route_map_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#neighbor_route_map_lists RouterBgpAddressFamilyIpv6A#neighbor_route_map_lists}
  */
  readonly neighborRouteMapLists?: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsA[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.numberToTerraform(struct!.activate),
    allowas_in: cdktf.numberToTerraform(struct!.allowasIn),
    allowas_in_count: cdktf.numberToTerraform(struct!.allowasInCount),
    inbound: cdktf.numberToTerraform(struct!.inbound),
    maximum_prefix: cdktf.numberToTerraform(struct!.maximumPrefix),
    maximum_prefix_thres: cdktf.numberToTerraform(struct!.maximumPrefixThres),
    next_hop_self: cdktf.numberToTerraform(struct!.nextHopSelf),
    peer_group: cdktf.stringToTerraform(struct!.peerGroup),
    remove_private_as: cdktf.numberToTerraform(struct!.removePrivateAs),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    weight: cdktf.numberToTerraform(struct!.weight),
    neighbor_route_map_lists: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsAToTerraform, true)(struct!.neighborRouteMapLists),
  }
}


export function routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructA | cdktf.IResolvable): any {
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
    allowas_in: {
      value: cdktf.numberToHclTerraform(struct!.allowasIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_count: {
      value: cdktf.numberToHclTerraform(struct!.allowasInCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound: {
      value: cdktf.numberToHclTerraform(struct!.inbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_thres: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThres),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_hop_self: {
      value: cdktf.numberToHclTerraform(struct!.nextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_group: {
      value: cdktf.stringToHclTerraform(struct!.peerGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as: {
      value: cdktf.numberToHclTerraform(struct!.removePrivateAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_route_map_lists: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsAToHclTerraform, true)(struct!.neighborRouteMapLists),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._allowasIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn = this._allowasIn;
    }
    if (this._allowasInCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInCount = this._allowasInCount;
    }
    if (this._inbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbound = this._inbound;
    }
    if (this._maximumPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix;
    }
    if (this._maximumPrefixThres !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThres = this._maximumPrefixThres;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._peerGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroup = this._peerGroup;
    }
    if (this._removePrivateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._neighborRouteMapLists?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborRouteMapLists = this._neighborRouteMapLists?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._allowasIn = undefined;
      this._allowasInCount = undefined;
      this._inbound = undefined;
      this._maximumPrefix = undefined;
      this._maximumPrefixThres = undefined;
      this._nextHopSelf = undefined;
      this._peerGroup = undefined;
      this._removePrivateAs = undefined;
      this._uuid = undefined;
      this._weight = undefined;
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
      this._allowasIn = value.allowasIn;
      this._allowasInCount = value.allowasInCount;
      this._inbound = value.inbound;
      this._maximumPrefix = value.maximumPrefix;
      this._maximumPrefixThres = value.maximumPrefixThres;
      this._nextHopSelf = value.nextHopSelf;
      this._peerGroup = value.peerGroup;
      this._removePrivateAs = value.removePrivateAs;
      this._uuid = value.uuid;
      this._weight = value.weight;
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

  // allowas_in - computed: false, optional: true, required: false
  private _allowasIn?: number; 
  public get allowasIn() {
    return this.getNumberAttribute('allowas_in');
  }
  public set allowasIn(value: number) {
    this._allowasIn = value;
  }
  public resetAllowasIn() {
    this._allowasIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInInput() {
    return this._allowasIn;
  }

  // allowas_in_count - computed: false, optional: true, required: false
  private _allowasInCount?: number; 
  public get allowasInCount() {
    return this.getNumberAttribute('allowas_in_count');
  }
  public set allowasInCount(value: number) {
    this._allowasInCount = value;
  }
  public resetAllowasInCount() {
    this._allowasInCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInCountInput() {
    return this._allowasInCount;
  }

  // inbound - computed: false, optional: true, required: false
  private _inbound?: number; 
  public get inbound() {
    return this.getNumberAttribute('inbound');
  }
  public set inbound(value: number) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // maximum_prefix - computed: false, optional: true, required: false
  private _maximumPrefix?: number; 
  public get maximumPrefix() {
    return this.getNumberAttribute('maximum_prefix');
  }
  public set maximumPrefix(value: number) {
    this._maximumPrefix = value;
  }
  public resetMaximumPrefix() {
    this._maximumPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixInput() {
    return this._maximumPrefix;
  }

  // maximum_prefix_thres - computed: false, optional: true, required: false
  private _maximumPrefixThres?: number; 
  public get maximumPrefixThres() {
    return this.getNumberAttribute('maximum_prefix_thres');
  }
  public set maximumPrefixThres(value: number) {
    this._maximumPrefixThres = value;
  }
  public resetMaximumPrefixThres() {
    this._maximumPrefixThres = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresInput() {
    return this._maximumPrefixThres;
  }

  // next_hop_self - computed: false, optional: true, required: false
  private _nextHopSelf?: number; 
  public get nextHopSelf() {
    return this.getNumberAttribute('next_hop_self');
  }
  public set nextHopSelf(value: number) {
    this._nextHopSelf = value;
  }
  public resetNextHopSelf() {
    this._nextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInput() {
    return this._nextHopSelf;
  }

  // peer_group - computed: false, optional: false, required: true
  private _peerGroup?: string; 
  public get peerGroup() {
    return this.getStringAttribute('peer_group');
  }
  public set peerGroup(value: string) {
    this._peerGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupInput() {
    return this._peerGroup;
  }

  // remove_private_as - computed: false, optional: true, required: false
  private _removePrivateAs?: number; 
  public get removePrivateAs() {
    return this.getNumberAttribute('remove_private_as');
  }
  public set removePrivateAs(value: number) {
    this._removePrivateAs = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs;
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

  // neighbor_route_map_lists - computed: false, optional: true, required: false
  private _neighborRouteMapLists = new RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsAList(this, "neighbor_route_map_lists", false);
  public get neighborRouteMapLists() {
    return this._neighborRouteMapLists;
  }
  public putNeighborRouteMapLists(value: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListNeighborRouteMapListsA[] | cdktf.IResolvable) {
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

export class RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructAOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#peer_group_name RouterBgpAddressFamilyIpv6A#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * Trunk interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#trunk RouterBgpAddressFamilyIpv6A#trunk}
  */
  readonly trunk: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#uuid RouterBgpAddressFamilyIpv6A#uuid}
  */
  readonly uuid?: string;
}

export function routerBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_group_name: cdktf.stringToTerraform(struct!.peerGroupName),
    trunk: cdktf.numberToTerraform(struct!.trunk),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_group_name: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupName),
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupName = this._peerGroupName;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peerGroupName = undefined;
      this._trunk = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peerGroupName = value.peerGroupName;
      this._trunk = value.trunk;
      this._uuid = value.uuid;
    }
  }

  // peer_group_name - computed: false, optional: true, required: false
  private _peerGroupName?: string; 
  public get peerGroupName() {
    return this.getStringAttribute('peer_group_name');
  }
  public set peerGroupName(value: string) {
    this._peerGroupName = value;
  }
  public resetPeerGroupName() {
    this._peerGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupNameInput() {
    return this._peerGroupName;
  }

  // trunk - computed: false, optional: false, required: true
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
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
}

export class RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructAOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#peer_group_name RouterBgpAddressFamilyIpv6A#peer_group_name}
  */
  readonly peerGroupName?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#uuid RouterBgpAddressFamilyIpv6A#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#ve RouterBgpAddressFamilyIpv6A#ve}
  */
  readonly ve: number;
}

export function routerBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_group_name: cdktf.stringToTerraform(struct!.peerGroupName),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function routerBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_group_name: {
      value: cdktf.stringToHclTerraform(struct!.peerGroupName),
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

export class RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupName = this._peerGroupName;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peerGroupName = undefined;
      this._uuid = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peerGroupName = value.peerGroupName;
      this._uuid = value.uuid;
      this._ve = value.ve;
    }
  }

  // peer_group_name - computed: false, optional: true, required: false
  private _peerGroupName?: string; 
  public get peerGroupName() {
    return this.getStringAttribute('peer_group_name');
  }
  public set peerGroupName(value: string) {
    this._peerGroupName = value;
  }
  public resetPeerGroupName() {
    this._peerGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupNameInput() {
    return this._peerGroupName;
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

  // ve - computed: false, optional: false, required: true
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }
}

export class RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructAOutputReference {
    return new RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NeighborA {
  /**
  * ethernet_neighbor_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#ethernet_neighbor_ipv6_list RouterBgpAddressFamilyIpv6A#ethernet_neighbor_ipv6_list}
  */
  readonly ethernetNeighborIpv6List?: RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructA[] | cdktf.IResolvable;
  /**
  * ipv4_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#ipv4_neighbor_list RouterBgpAddressFamilyIpv6A#ipv4_neighbor_list}
  */
  readonly ipv4NeighborList?: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructA[] | cdktf.IResolvable;
  /**
  * ipv6_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#ipv6_neighbor_list RouterBgpAddressFamilyIpv6A#ipv6_neighbor_list}
  */
  readonly ipv6NeighborList?: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructA[] | cdktf.IResolvable;
  /**
  * peer_group_neighbor_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#peer_group_neighbor_list RouterBgpAddressFamilyIpv6A#peer_group_neighbor_list}
  */
  readonly peerGroupNeighborList?: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructA[] | cdktf.IResolvable;
  /**
  * trunk_neighbor_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#trunk_neighbor_ipv6_list RouterBgpAddressFamilyIpv6A#trunk_neighbor_ipv6_list}
  */
  readonly trunkNeighborIpv6List?: RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructA[] | cdktf.IResolvable;
  /**
  * ve_neighbor_ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#ve_neighbor_ipv6_list RouterBgpAddressFamilyIpv6A#ve_neighbor_ipv6_list}
  */
  readonly veNeighborIpv6List?: RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructA[] | cdktf.IResolvable;
}

export function routerBgpAddressFamilyIpv6NeighborAToTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborAOutputReference | RouterBgpAddressFamilyIpv6NeighborA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_neighbor_ipv6_list: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructAToTerraform, true)(struct!.ethernetNeighborIpv6List),
    ipv4_neighbor_list: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListStructAToTerraform, true)(struct!.ipv4NeighborList),
    ipv6_neighbor_list: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListStructAToTerraform, true)(struct!.ipv6NeighborList),
    peer_group_neighbor_list: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructAToTerraform, true)(struct!.peerGroupNeighborList),
    trunk_neighbor_ipv6_list: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructAToTerraform, true)(struct!.trunkNeighborIpv6List),
    ve_neighbor_ipv6_list: cdktf.listMapper(routerBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructAToTerraform, true)(struct!.veNeighborIpv6List),
  }
}


export function routerBgpAddressFamilyIpv6NeighborAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NeighborAOutputReference | RouterBgpAddressFamilyIpv6NeighborA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_neighbor_ipv6_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructAToHclTerraform, true)(struct!.ethernetNeighborIpv6List),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructAList",
    },
    ipv4_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv4NeighborListStructAToHclTerraform, true)(struct!.ipv4NeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructAList",
    },
    ipv6_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborIpv6NeighborListStructAToHclTerraform, true)(struct!.ipv6NeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructAList",
    },
    peer_group_neighbor_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructAToHclTerraform, true)(struct!.peerGroupNeighborList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructAList",
    },
    trunk_neighbor_ipv6_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructAToHclTerraform, true)(struct!.trunkNeighborIpv6List),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructAList",
    },
    ve_neighbor_ipv6_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructAToHclTerraform, true)(struct!.veNeighborIpv6List),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NeighborAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6NeighborA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetNeighborIpv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetNeighborIpv6List = this._ethernetNeighborIpv6List?.internalValue;
    }
    if (this._ipv4NeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NeighborList = this._ipv4NeighborList?.internalValue;
    }
    if (this._ipv6NeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NeighborList = this._ipv6NeighborList?.internalValue;
    }
    if (this._peerGroupNeighborList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroupNeighborList = this._peerGroupNeighborList?.internalValue;
    }
    if (this._trunkNeighborIpv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkNeighborIpv6List = this._trunkNeighborIpv6List?.internalValue;
    }
    if (this._veNeighborIpv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veNeighborIpv6List = this._veNeighborIpv6List?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NeighborA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ethernetNeighborIpv6List.internalValue = undefined;
      this._ipv4NeighborList.internalValue = undefined;
      this._ipv6NeighborList.internalValue = undefined;
      this._peerGroupNeighborList.internalValue = undefined;
      this._trunkNeighborIpv6List.internalValue = undefined;
      this._veNeighborIpv6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ethernetNeighborIpv6List.internalValue = value.ethernetNeighborIpv6List;
      this._ipv4NeighborList.internalValue = value.ipv4NeighborList;
      this._ipv6NeighborList.internalValue = value.ipv6NeighborList;
      this._peerGroupNeighborList.internalValue = value.peerGroupNeighborList;
      this._trunkNeighborIpv6List.internalValue = value.trunkNeighborIpv6List;
      this._veNeighborIpv6List.internalValue = value.veNeighborIpv6List;
    }
  }

  // ethernet_neighbor_ipv6_list - computed: false, optional: true, required: false
  private _ethernetNeighborIpv6List = new RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructAList(this, "ethernet_neighbor_ipv6_list", false);
  public get ethernetNeighborIpv6List() {
    return this._ethernetNeighborIpv6List;
  }
  public putEthernetNeighborIpv6List(value: RouterBgpAddressFamilyIpv6NeighborEthernetNeighborIpv6ListStructA[] | cdktf.IResolvable) {
    this._ethernetNeighborIpv6List.internalValue = value;
  }
  public resetEthernetNeighborIpv6List() {
    this._ethernetNeighborIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetNeighborIpv6ListInput() {
    return this._ethernetNeighborIpv6List.internalValue;
  }

  // ipv4_neighbor_list - computed: false, optional: true, required: false
  private _ipv4NeighborList = new RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructAList(this, "ipv4_neighbor_list", false);
  public get ipv4NeighborList() {
    return this._ipv4NeighborList;
  }
  public putIpv4NeighborList(value: RouterBgpAddressFamilyIpv6NeighborIpv4NeighborListStructA[] | cdktf.IResolvable) {
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
  private _ipv6NeighborList = new RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructAList(this, "ipv6_neighbor_list", false);
  public get ipv6NeighborList() {
    return this._ipv6NeighborList;
  }
  public putIpv6NeighborList(value: RouterBgpAddressFamilyIpv6NeighborIpv6NeighborListStructA[] | cdktf.IResolvable) {
    this._ipv6NeighborList.internalValue = value;
  }
  public resetIpv6NeighborList() {
    this._ipv6NeighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NeighborListInput() {
    return this._ipv6NeighborList.internalValue;
  }

  // peer_group_neighbor_list - computed: false, optional: true, required: false
  private _peerGroupNeighborList = new RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructAList(this, "peer_group_neighbor_list", false);
  public get peerGroupNeighborList() {
    return this._peerGroupNeighborList;
  }
  public putPeerGroupNeighborList(value: RouterBgpAddressFamilyIpv6NeighborPeerGroupNeighborListStructA[] | cdktf.IResolvable) {
    this._peerGroupNeighborList.internalValue = value;
  }
  public resetPeerGroupNeighborList() {
    this._peerGroupNeighborList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupNeighborListInput() {
    return this._peerGroupNeighborList.internalValue;
  }

  // trunk_neighbor_ipv6_list - computed: false, optional: true, required: false
  private _trunkNeighborIpv6List = new RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructAList(this, "trunk_neighbor_ipv6_list", false);
  public get trunkNeighborIpv6List() {
    return this._trunkNeighborIpv6List;
  }
  public putTrunkNeighborIpv6List(value: RouterBgpAddressFamilyIpv6NeighborTrunkNeighborIpv6ListStructA[] | cdktf.IResolvable) {
    this._trunkNeighborIpv6List.internalValue = value;
  }
  public resetTrunkNeighborIpv6List() {
    this._trunkNeighborIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkNeighborIpv6ListInput() {
    return this._trunkNeighborIpv6List.internalValue;
  }

  // ve_neighbor_ipv6_list - computed: false, optional: true, required: false
  private _veNeighborIpv6List = new RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructAList(this, "ve_neighbor_ipv6_list", false);
  public get veNeighborIpv6List() {
    return this._veNeighborIpv6List;
  }
  public putVeNeighborIpv6List(value: RouterBgpAddressFamilyIpv6NeighborVeNeighborIpv6ListStructA[] | cdktf.IResolvable) {
    this._veNeighborIpv6List.internalValue = value;
  }
  public resetVeNeighborIpv6List() {
    this._veNeighborIpv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veNeighborIpv6ListInput() {
    return this._veNeighborIpv6List.internalValue;
  }
}
export interface RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructA {
  /**
  * Specify a BGP backdoor route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#backdoor RouterBgpAddressFamilyIpv6A#backdoor}
  */
  readonly backdoor?: number;
  /**
  * community value in the format 1-4294967295|AA:NN|internet|local-AS|no-advertise|no-export
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#comm_value RouterBgpAddressFamilyIpv6A#comm_value}
  */
  readonly commValue?: string;
  /**
  * Network specific description (Up to 80 characters describing this network)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#description RouterBgpAddressFamilyIpv6A#description}
  */
  readonly description?: string;
  /**
  * Large community value in the format XX:YY:ZZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#lcomm_value RouterBgpAddressFamilyIpv6A#lcomm_value}
  */
  readonly lcommValue?: string;
  /**
  * Specify a network to announce via BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#network_ipv6 RouterBgpAddressFamilyIpv6A#network_ipv6}
  */
  readonly networkIpv6: string;
  /**
  * Route-map to modify the attributes (Name of the route map)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
  */
  readonly routeMap?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#uuid RouterBgpAddressFamilyIpv6A#uuid}
  */
  readonly uuid?: string;
}

export function routerBgpAddressFamilyIpv6NetworkIpv6NetworkListStructAToTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backdoor: cdktf.numberToTerraform(struct!.backdoor),
    comm_value: cdktf.stringToTerraform(struct!.commValue),
    description: cdktf.stringToTerraform(struct!.description),
    lcomm_value: cdktf.stringToTerraform(struct!.lcommValue),
    network_ipv6: cdktf.stringToTerraform(struct!.networkIpv6),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerBgpAddressFamilyIpv6NetworkIpv6NetworkListStructAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backdoor: {
      value: cdktf.numberToHclTerraform(struct!.backdoor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    comm_value: {
      value: cdktf.stringToHclTerraform(struct!.commValue),
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
    lcomm_value: {
      value: cdktf.stringToHclTerraform(struct!.lcommValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.networkIpv6),
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backdoor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backdoor = this._backdoor;
    }
    if (this._commValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commValue = this._commValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._lcommValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lcommValue = this._lcommValue;
    }
    if (this._networkIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkIpv6 = this._networkIpv6;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backdoor = undefined;
      this._commValue = undefined;
      this._description = undefined;
      this._lcommValue = undefined;
      this._networkIpv6 = undefined;
      this._routeMap = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backdoor = value.backdoor;
      this._commValue = value.commValue;
      this._description = value.description;
      this._lcommValue = value.lcommValue;
      this._networkIpv6 = value.networkIpv6;
      this._routeMap = value.routeMap;
      this._uuid = value.uuid;
    }
  }

  // backdoor - computed: false, optional: true, required: false
  private _backdoor?: number; 
  public get backdoor() {
    return this.getNumberAttribute('backdoor');
  }
  public set backdoor(value: number) {
    this._backdoor = value;
  }
  public resetBackdoor() {
    this._backdoor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backdoorInput() {
    return this._backdoor;
  }

  // comm_value - computed: false, optional: true, required: false
  private _commValue?: string; 
  public get commValue() {
    return this.getStringAttribute('comm_value');
  }
  public set commValue(value: string) {
    this._commValue = value;
  }
  public resetCommValue() {
    this._commValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commValueInput() {
    return this._commValue;
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

  // lcomm_value - computed: false, optional: true, required: false
  private _lcommValue?: string; 
  public get lcommValue() {
    return this.getStringAttribute('lcomm_value');
  }
  public set lcommValue(value: string) {
    this._lcommValue = value;
  }
  public resetLcommValue() {
    this._lcommValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcommValueInput() {
    return this._lcommValue;
  }

  // network_ipv6 - computed: false, optional: false, required: true
  private _networkIpv6?: string; 
  public get networkIpv6() {
    return this.getStringAttribute('network_ipv6');
  }
  public set networkIpv6(value: string) {
    this._networkIpv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIpv6Input() {
    return this._networkIpv6;
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
}

export class RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructAOutputReference {
    return new RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAddressFamilyIpv6NetworkMonitorDefaultA {
  /**
  * default route monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#network_monitor_default RouterBgpAddressFamilyIpv6A#network_monitor_default}
  */
  readonly networkMonitorDefault?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#uuid RouterBgpAddressFamilyIpv6A#uuid}
  */
  readonly uuid?: string;
}

export function routerBgpAddressFamilyIpv6NetworkMonitorDefaultAToTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkMonitorDefaultAOutputReference | RouterBgpAddressFamilyIpv6NetworkMonitorDefaultA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_monitor_default: cdktf.numberToTerraform(struct!.networkMonitorDefault),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerBgpAddressFamilyIpv6NetworkMonitorDefaultAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkMonitorDefaultAOutputReference | RouterBgpAddressFamilyIpv6NetworkMonitorDefaultA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_monitor_default: {
      value: cdktf.numberToHclTerraform(struct!.networkMonitorDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NetworkMonitorDefaultAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6NetworkMonitorDefaultA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkMonitorDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMonitorDefault = this._networkMonitorDefault;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NetworkMonitorDefaultA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkMonitorDefault = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkMonitorDefault = value.networkMonitorDefault;
      this._uuid = value.uuid;
    }
  }

  // network_monitor_default - computed: false, optional: true, required: false
  private _networkMonitorDefault?: number; 
  public get networkMonitorDefault() {
    return this.getNumberAttribute('network_monitor_default');
  }
  public set networkMonitorDefault(value: number) {
    this._networkMonitorDefault = value;
  }
  public resetNetworkMonitorDefault() {
    this._networkMonitorDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkMonitorDefaultInput() {
    return this._networkMonitorDefault;
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
}
export interface RouterBgpAddressFamilyIpv6NetworkMonitorA {
  /**
  * default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#default RouterBgpAddressFamilyIpv6A#default}
  */
  readonly default?: RouterBgpAddressFamilyIpv6NetworkMonitorDefaultA;
}

export function routerBgpAddressFamilyIpv6NetworkMonitorAToTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkMonitorAOutputReference | RouterBgpAddressFamilyIpv6NetworkMonitorA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: routerBgpAddressFamilyIpv6NetworkMonitorDefaultAToTerraform(struct!.default),
  }
}


export function routerBgpAddressFamilyIpv6NetworkMonitorAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkMonitorAOutputReference | RouterBgpAddressFamilyIpv6NetworkMonitorA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: routerBgpAddressFamilyIpv6NetworkMonitorDefaultAToHclTerraform(struct!.default),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NetworkMonitorDefaultAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NetworkMonitorAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6NetworkMonitorA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NetworkMonitorA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default.internalValue = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default = new RouterBgpAddressFamilyIpv6NetworkMonitorDefaultAOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: RouterBgpAddressFamilyIpv6NetworkMonitorDefaultA) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }
}
export interface RouterBgpAddressFamilyIpv6NetworkSynchronizationA {
  /**
  * Perform IGP synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#network_synchronization RouterBgpAddressFamilyIpv6A#network_synchronization}
  */
  readonly networkSynchronization?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#uuid RouterBgpAddressFamilyIpv6A#uuid}
  */
  readonly uuid?: string;
}

export function routerBgpAddressFamilyIpv6NetworkSynchronizationAToTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkSynchronizationAOutputReference | RouterBgpAddressFamilyIpv6NetworkSynchronizationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_synchronization: cdktf.numberToTerraform(struct!.networkSynchronization),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function routerBgpAddressFamilyIpv6NetworkSynchronizationAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkSynchronizationAOutputReference | RouterBgpAddressFamilyIpv6NetworkSynchronizationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_synchronization: {
      value: cdktf.numberToHclTerraform(struct!.networkSynchronization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NetworkSynchronizationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6NetworkSynchronizationA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkSynchronization !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkSynchronization = this._networkSynchronization;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NetworkSynchronizationA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkSynchronization = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkSynchronization = value.networkSynchronization;
      this._uuid = value.uuid;
    }
  }

  // network_synchronization - computed: false, optional: true, required: false
  private _networkSynchronization?: number; 
  public get networkSynchronization() {
    return this.getNumberAttribute('network_synchronization');
  }
  public set networkSynchronization(value: number) {
    this._networkSynchronization = value;
  }
  public resetNetworkSynchronization() {
    this._networkSynchronization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSynchronizationInput() {
    return this._networkSynchronization;
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
}
export interface RouterBgpAddressFamilyIpv6NetworkA {
  /**
  * ipv6_network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#ipv6_network_list RouterBgpAddressFamilyIpv6A#ipv6_network_list}
  */
  readonly ipv6NetworkList?: RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructA[] | cdktf.IResolvable;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#monitor RouterBgpAddressFamilyIpv6A#monitor}
  */
  readonly monitor?: RouterBgpAddressFamilyIpv6NetworkMonitorA;
  /**
  * synchronization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#synchronization RouterBgpAddressFamilyIpv6A#synchronization}
  */
  readonly synchronization?: RouterBgpAddressFamilyIpv6NetworkSynchronizationA;
}

export function routerBgpAddressFamilyIpv6NetworkAToTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkAOutputReference | RouterBgpAddressFamilyIpv6NetworkA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_network_list: cdktf.listMapper(routerBgpAddressFamilyIpv6NetworkIpv6NetworkListStructAToTerraform, true)(struct!.ipv6NetworkList),
    monitor: routerBgpAddressFamilyIpv6NetworkMonitorAToTerraform(struct!.monitor),
    synchronization: routerBgpAddressFamilyIpv6NetworkSynchronizationAToTerraform(struct!.synchronization),
  }
}


export function routerBgpAddressFamilyIpv6NetworkAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6NetworkAOutputReference | RouterBgpAddressFamilyIpv6NetworkA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_network_list: {
      value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6NetworkIpv6NetworkListStructAToHclTerraform, true)(struct!.ipv6NetworkList),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructAList",
    },
    monitor: {
      value: routerBgpAddressFamilyIpv6NetworkMonitorAToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NetworkMonitorAList",
    },
    synchronization: {
      value: routerBgpAddressFamilyIpv6NetworkSynchronizationAToHclTerraform(struct!.synchronization),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6NetworkSynchronizationAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6NetworkAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6NetworkA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6NetworkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NetworkList = this._ipv6NetworkList?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._synchronization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronization = this._synchronization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6NetworkA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6NetworkList.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._synchronization.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6NetworkList.internalValue = value.ipv6NetworkList;
      this._monitor.internalValue = value.monitor;
      this._synchronization.internalValue = value.synchronization;
    }
  }

  // ipv6_network_list - computed: false, optional: true, required: false
  private _ipv6NetworkList = new RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructAList(this, "ipv6_network_list", false);
  public get ipv6NetworkList() {
    return this._ipv6NetworkList;
  }
  public putIpv6NetworkList(value: RouterBgpAddressFamilyIpv6NetworkIpv6NetworkListStructA[] | cdktf.IResolvable) {
    this._ipv6NetworkList.internalValue = value;
  }
  public resetIpv6NetworkList() {
    this._ipv6NetworkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetworkListInput() {
    return this._ipv6NetworkList.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new RouterBgpAddressFamilyIpv6NetworkMonitorAOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: RouterBgpAddressFamilyIpv6NetworkMonitorA) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // synchronization - computed: false, optional: true, required: false
  private _synchronization = new RouterBgpAddressFamilyIpv6NetworkSynchronizationAOutputReference(this, "synchronization");
  public get synchronization() {
    return this._synchronization;
  }
  public putSynchronization(value: RouterBgpAddressFamilyIpv6NetworkSynchronizationA) {
    this._synchronization.internalValue = value;
  }
  public resetSynchronization() {
    this._synchronization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizationInput() {
    return this._synchronization.internalValue;
  }
}
export interface RouterBgpAddressFamilyIpv6RedistributeConnectedCfgA {
  /**
  * Connected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#connected RouterBgpAddressFamilyIpv6A#connected}
  */
  readonly connected?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#floating_ip RouterBgpAddressFamilyIpv6A#floating_ip}
  */
  readonly floatingIp?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#ip_nat RouterBgpAddressFamilyIpv6A#ip_nat}
  */
  readonly ipNat?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#ip_nat_list RouterBgpAddressFamilyIpv6A#ip_nat_list}
  */
  readonly ipNatList?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#isis RouterBgpAddressFamilyIpv6A#isis}
  */
  readonly isis?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#lw4o6 RouterBgpAddressFamilyIpv6A#lw4o6}
  */
  readonly lw4O6?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#nat64 RouterBgpAddressFamilyIpv6A#nat64}
  */
  readonly nat64?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#nat_map RouterBgpAddressFamilyIpv6A#nat_map}
  */
  readonly natMap?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#ospf RouterBgpAddressFamilyIpv6A#ospf}
  */
  readonly ospf?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
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
export interface RouterBgpAddressFamilyIpv6RedistributeRipCfgA {
  /**
  * Routing Information Protocol (RIP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#rip RouterBgpAddressFamilyIpv6A#rip}
  */
  readonly rip?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
  */
  readonly routeMap?: string;
  /**
  * Static routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#static RouterBgpAddressFamilyIpv6A#static}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
  */
  readonly routeMap?: string;
  /**
  * Static NAT Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#static_nat RouterBgpAddressFamilyIpv6A#static_nat}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#only_flagged RouterBgpAddressFamilyIpv6A#only_flagged}
  */
  readonly onlyFlagged?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#only_not_flagged RouterBgpAddressFamilyIpv6A#only_not_flagged}
  */
  readonly onlyNotFlagged?: number;
  /**
  * Route map reference (Pointer to route-map entries)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#route_map RouterBgpAddressFamilyIpv6A#route_map}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#only_flagged_cfg RouterBgpAddressFamilyIpv6A#only_flagged_cfg}
  */
  readonly onlyFlaggedCfg?: RouterBgpAddressFamilyIpv6RedistributeVipOnlyFlaggedCfgA;
  /**
  * only_not_flagged_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#only_not_flagged_cfg RouterBgpAddressFamilyIpv6A#only_not_flagged_cfg}
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
export interface RouterBgpAddressFamilyIpv6RedistributeA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#uuid RouterBgpAddressFamilyIpv6A#uuid}
  */
  readonly uuid?: string;
  /**
  * connected_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#connected_cfg RouterBgpAddressFamilyIpv6A#connected_cfg}
  */
  readonly connectedCfg?: RouterBgpAddressFamilyIpv6RedistributeConnectedCfgA;
  /**
  * floating_ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#floating_ip_cfg RouterBgpAddressFamilyIpv6A#floating_ip_cfg}
  */
  readonly floatingIpCfg?: RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgA;
  /**
  * ip_nat_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#ip_nat_cfg RouterBgpAddressFamilyIpv6A#ip_nat_cfg}
  */
  readonly ipNatCfg?: RouterBgpAddressFamilyIpv6RedistributeIpNatCfgA;
  /**
  * ip_nat_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#ip_nat_list_cfg RouterBgpAddressFamilyIpv6A#ip_nat_list_cfg}
  */
  readonly ipNatListCfg?: RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgA;
  /**
  * isis_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#isis_cfg RouterBgpAddressFamilyIpv6A#isis_cfg}
  */
  readonly isisCfg?: RouterBgpAddressFamilyIpv6RedistributeIsisCfgA;
  /**
  * lw4o6_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#lw4o6_cfg RouterBgpAddressFamilyIpv6A#lw4o6_cfg}
  */
  readonly lw4O6Cfg?: RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgA;
  /**
  * nat64_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#nat64_cfg RouterBgpAddressFamilyIpv6A#nat64_cfg}
  */
  readonly nat64Cfg?: RouterBgpAddressFamilyIpv6RedistributeNat64CfgA;
  /**
  * nat_map_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#nat_map_cfg RouterBgpAddressFamilyIpv6A#nat_map_cfg}
  */
  readonly natMapCfg?: RouterBgpAddressFamilyIpv6RedistributeNatMapCfgA;
  /**
  * ospf_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#ospf_cfg RouterBgpAddressFamilyIpv6A#ospf_cfg}
  */
  readonly ospfCfg?: RouterBgpAddressFamilyIpv6RedistributeOspfCfgA;
  /**
  * rip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#rip_cfg RouterBgpAddressFamilyIpv6A#rip_cfg}
  */
  readonly ripCfg?: RouterBgpAddressFamilyIpv6RedistributeRipCfgA;
  /**
  * static_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#static_cfg RouterBgpAddressFamilyIpv6A#static_cfg}
  */
  readonly staticCfg?: RouterBgpAddressFamilyIpv6RedistributeStaticCfgA;
  /**
  * static_nat_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#static_nat_cfg RouterBgpAddressFamilyIpv6A#static_nat_cfg}
  */
  readonly staticNatCfg?: RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgA;
  /**
  * vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#vip RouterBgpAddressFamilyIpv6A#vip}
  */
  readonly vip?: RouterBgpAddressFamilyIpv6RedistributeVipA;
}

export function routerBgpAddressFamilyIpv6RedistributeAToTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeAOutputReference | RouterBgpAddressFamilyIpv6RedistributeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    connected_cfg: routerBgpAddressFamilyIpv6RedistributeConnectedCfgAToTerraform(struct!.connectedCfg),
    floating_ip_cfg: routerBgpAddressFamilyIpv6RedistributeFloatingIpCfgAToTerraform(struct!.floatingIpCfg),
    ip_nat_cfg: routerBgpAddressFamilyIpv6RedistributeIpNatCfgAToTerraform(struct!.ipNatCfg),
    ip_nat_list_cfg: routerBgpAddressFamilyIpv6RedistributeIpNatListCfgAToTerraform(struct!.ipNatListCfg),
    isis_cfg: routerBgpAddressFamilyIpv6RedistributeIsisCfgAToTerraform(struct!.isisCfg),
    lw4o6_cfg: routerBgpAddressFamilyIpv6RedistributeLw4O6CfgAToTerraform(struct!.lw4O6Cfg),
    nat64_cfg: routerBgpAddressFamilyIpv6RedistributeNat64CfgAToTerraform(struct!.nat64Cfg),
    nat_map_cfg: routerBgpAddressFamilyIpv6RedistributeNatMapCfgAToTerraform(struct!.natMapCfg),
    ospf_cfg: routerBgpAddressFamilyIpv6RedistributeOspfCfgAToTerraform(struct!.ospfCfg),
    rip_cfg: routerBgpAddressFamilyIpv6RedistributeRipCfgAToTerraform(struct!.ripCfg),
    static_cfg: routerBgpAddressFamilyIpv6RedistributeStaticCfgAToTerraform(struct!.staticCfg),
    static_nat_cfg: routerBgpAddressFamilyIpv6RedistributeStaticNatCfgAToTerraform(struct!.staticNatCfg),
    vip: routerBgpAddressFamilyIpv6RedistributeVipAToTerraform(struct!.vip),
  }
}


export function routerBgpAddressFamilyIpv6RedistributeAToHclTerraform(struct?: RouterBgpAddressFamilyIpv6RedistributeAOutputReference | RouterBgpAddressFamilyIpv6RedistributeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connected_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeConnectedCfgAToHclTerraform(struct!.connectedCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeConnectedCfgAList",
    },
    floating_ip_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeFloatingIpCfgAToHclTerraform(struct!.floatingIpCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeFloatingIpCfgAList",
    },
    ip_nat_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeIpNatCfgAToHclTerraform(struct!.ipNatCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeIpNatCfgAList",
    },
    ip_nat_list_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeIpNatListCfgAToHclTerraform(struct!.ipNatListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeIpNatListCfgAList",
    },
    isis_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeIsisCfgAToHclTerraform(struct!.isisCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeIsisCfgAList",
    },
    lw4o6_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeLw4O6CfgAToHclTerraform(struct!.lw4O6Cfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeLw4O6CfgAList",
    },
    nat64_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeNat64CfgAToHclTerraform(struct!.nat64Cfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeNat64CfgAList",
    },
    nat_map_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeNatMapCfgAToHclTerraform(struct!.natMapCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeNatMapCfgAList",
    },
    ospf_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeOspfCfgAToHclTerraform(struct!.ospfCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeOspfCfgAList",
    },
    rip_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeRipCfgAToHclTerraform(struct!.ripCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeRipCfgAList",
    },
    static_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeStaticCfgAToHclTerraform(struct!.staticCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeStaticCfgAList",
    },
    static_nat_cfg: {
      value: routerBgpAddressFamilyIpv6RedistributeStaticNatCfgAToHclTerraform(struct!.staticNatCfg),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeStaticNatCfgAList",
    },
    vip: {
      value: routerBgpAddressFamilyIpv6RedistributeVipAToHclTerraform(struct!.vip),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpAddressFamilyIpv6RedistributeVipAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAddressFamilyIpv6RedistributeAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterBgpAddressFamilyIpv6RedistributeA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._connectedCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectedCfg = this._connectedCfg?.internalValue;
    }
    if (this._floatingIpCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpCfg = this._floatingIpCfg?.internalValue;
    }
    if (this._ipNatCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatCfg = this._ipNatCfg?.internalValue;
    }
    if (this._ipNatListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNatListCfg = this._ipNatListCfg?.internalValue;
    }
    if (this._isisCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isisCfg = this._isisCfg?.internalValue;
    }
    if (this._lw4O6Cfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lw4O6Cfg = this._lw4O6Cfg?.internalValue;
    }
    if (this._nat64Cfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64Cfg = this._nat64Cfg?.internalValue;
    }
    if (this._natMapCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.natMapCfg = this._natMapCfg?.internalValue;
    }
    if (this._ospfCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfCfg = this._ospfCfg?.internalValue;
    }
    if (this._ripCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ripCfg = this._ripCfg?.internalValue;
    }
    if (this._staticCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticCfg = this._staticCfg?.internalValue;
    }
    if (this._staticNatCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNatCfg = this._staticNatCfg?.internalValue;
    }
    if (this._vip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAddressFamilyIpv6RedistributeA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._connectedCfg.internalValue = undefined;
      this._floatingIpCfg.internalValue = undefined;
      this._ipNatCfg.internalValue = undefined;
      this._ipNatListCfg.internalValue = undefined;
      this._isisCfg.internalValue = undefined;
      this._lw4O6Cfg.internalValue = undefined;
      this._nat64Cfg.internalValue = undefined;
      this._natMapCfg.internalValue = undefined;
      this._ospfCfg.internalValue = undefined;
      this._ripCfg.internalValue = undefined;
      this._staticCfg.internalValue = undefined;
      this._staticNatCfg.internalValue = undefined;
      this._vip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._connectedCfg.internalValue = value.connectedCfg;
      this._floatingIpCfg.internalValue = value.floatingIpCfg;
      this._ipNatCfg.internalValue = value.ipNatCfg;
      this._ipNatListCfg.internalValue = value.ipNatListCfg;
      this._isisCfg.internalValue = value.isisCfg;
      this._lw4O6Cfg.internalValue = value.lw4O6Cfg;
      this._nat64Cfg.internalValue = value.nat64Cfg;
      this._natMapCfg.internalValue = value.natMapCfg;
      this._ospfCfg.internalValue = value.ospfCfg;
      this._ripCfg.internalValue = value.ripCfg;
      this._staticCfg.internalValue = value.staticCfg;
      this._staticNatCfg.internalValue = value.staticNatCfg;
      this._vip.internalValue = value.vip;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6 thunder_router_bgp_address_family_ipv6}
*/
export class RouterBgpAddressFamilyIpv6A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_router_bgp_address_family_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpAddressFamilyIpv6A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpAddressFamilyIpv6A to import
  * @param importFromId The id of the existing RouterBgpAddressFamilyIpv6A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpAddressFamilyIpv6A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_router_bgp_address_family_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/router_bgp_address_family_ipv6 thunder_router_bgp_address_family_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpAddressFamilyIpv6AConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpAddressFamilyIpv6AConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_router_bgp_address_family_ipv6',
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
    this._asNumber = config.asNumber;
    this._autoSummary = config.autoSummary;
    this._id = config.id;
    this._maximumPathsValue = config.maximumPathsValue;
    this._originate = config.originate;
    this._synchronization = config.synchronization;
    this._uuid = config.uuid;
    this._aggregateAddressList.internalValue = config.aggregateAddressList;
    this._bgp.internalValue = config.bgp;
    this._distance.internalValue = config.distance;
    this._neighbor.internalValue = config.neighbor;
    this._network.internalValue = config.network;
    this._redistribute.internalValue = config.redistribute;
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

  // auto_summary - computed: false, optional: true, required: false
  private _autoSummary?: number; 
  public get autoSummary() {
    return this.getNumberAttribute('auto_summary');
  }
  public set autoSummary(value: number) {
    this._autoSummary = value;
  }
  public resetAutoSummary() {
    this._autoSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSummaryInput() {
    return this._autoSummary;
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

  // maximum_paths_value - computed: false, optional: true, required: false
  private _maximumPathsValue?: number; 
  public get maximumPathsValue() {
    return this.getNumberAttribute('maximum_paths_value');
  }
  public set maximumPathsValue(value: number) {
    this._maximumPathsValue = value;
  }
  public resetMaximumPathsValue() {
    this._maximumPathsValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsValueInput() {
    return this._maximumPathsValue;
  }

  // originate - computed: false, optional: true, required: false
  private _originate?: number; 
  public get originate() {
    return this.getNumberAttribute('originate');
  }
  public set originate(value: number) {
    this._originate = value;
  }
  public resetOriginate() {
    this._originate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originateInput() {
    return this._originate;
  }

  // synchronization - computed: false, optional: true, required: false
  private _synchronization?: number; 
  public get synchronization() {
    return this.getNumberAttribute('synchronization');
  }
  public set synchronization(value: number) {
    this._synchronization = value;
  }
  public resetSynchronization() {
    this._synchronization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizationInput() {
    return this._synchronization;
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

  // aggregate_address_list - computed: false, optional: true, required: false
  private _aggregateAddressList = new RouterBgpAddressFamilyIpv6AggregateAddressListStructAList(this, "aggregate_address_list", false);
  public get aggregateAddressList() {
    return this._aggregateAddressList;
  }
  public putAggregateAddressList(value: RouterBgpAddressFamilyIpv6AggregateAddressListStructA[] | cdktf.IResolvable) {
    this._aggregateAddressList.internalValue = value;
  }
  public resetAggregateAddressList() {
    this._aggregateAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateAddressListInput() {
    return this._aggregateAddressList.internalValue;
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new RouterBgpAddressFamilyIpv6BgpAOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: RouterBgpAddressFamilyIpv6BgpA) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // distance - computed: false, optional: true, required: false
  private _distance = new RouterBgpAddressFamilyIpv6DistanceAOutputReference(this, "distance");
  public get distance() {
    return this._distance;
  }
  public putDistance(value: RouterBgpAddressFamilyIpv6DistanceA) {
    this._distance.internalValue = value;
  }
  public resetDistance() {
    this._distance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance.internalValue;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new RouterBgpAddressFamilyIpv6NeighborAOutputReference(this, "neighbor");
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: RouterBgpAddressFamilyIpv6NeighborA) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new RouterBgpAddressFamilyIpv6NetworkAOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: RouterBgpAddressFamilyIpv6NetworkA) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute = new RouterBgpAddressFamilyIpv6RedistributeAOutputReference(this, "redistribute");
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: RouterBgpAddressFamilyIpv6RedistributeA) {
    this._redistribute.internalValue = value;
  }
  public resetRedistribute() {
    this._redistribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_number: cdktf.stringToTerraform(this._asNumber),
      auto_summary: cdktf.numberToTerraform(this._autoSummary),
      id: cdktf.stringToTerraform(this._id),
      maximum_paths_value: cdktf.numberToTerraform(this._maximumPathsValue),
      originate: cdktf.numberToTerraform(this._originate),
      synchronization: cdktf.numberToTerraform(this._synchronization),
      uuid: cdktf.stringToTerraform(this._uuid),
      aggregate_address_list: cdktf.listMapper(routerBgpAddressFamilyIpv6AggregateAddressListStructAToTerraform, true)(this._aggregateAddressList.internalValue),
      bgp: routerBgpAddressFamilyIpv6BgpAToTerraform(this._bgp.internalValue),
      distance: routerBgpAddressFamilyIpv6DistanceAToTerraform(this._distance.internalValue),
      neighbor: routerBgpAddressFamilyIpv6NeighborAToTerraform(this._neighbor.internalValue),
      network: routerBgpAddressFamilyIpv6NetworkAToTerraform(this._network.internalValue),
      redistribute: routerBgpAddressFamilyIpv6RedistributeAToTerraform(this._redistribute.internalValue),
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
      auto_summary: {
        value: cdktf.numberToHclTerraform(this._autoSummary),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_paths_value: {
        value: cdktf.numberToHclTerraform(this._maximumPathsValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      originate: {
        value: cdktf.numberToHclTerraform(this._originate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      synchronization: {
        value: cdktf.numberToHclTerraform(this._synchronization),
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
      aggregate_address_list: {
        value: cdktf.listMapperHcl(routerBgpAddressFamilyIpv6AggregateAddressListStructAToHclTerraform, true)(this._aggregateAddressList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6AggregateAddressListStructAList",
      },
      bgp: {
        value: routerBgpAddressFamilyIpv6BgpAToHclTerraform(this._bgp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6BgpAList",
      },
      distance: {
        value: routerBgpAddressFamilyIpv6DistanceAToHclTerraform(this._distance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6DistanceAList",
      },
      neighbor: {
        value: routerBgpAddressFamilyIpv6NeighborAToHclTerraform(this._neighbor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6NeighborAList",
      },
      network: {
        value: routerBgpAddressFamilyIpv6NetworkAToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6NetworkAList",
      },
      redistribute: {
        value: routerBgpAddressFamilyIpv6RedistributeAToHclTerraform(this._redistribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAddressFamilyIpv6RedistributeAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
