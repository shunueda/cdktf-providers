// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#always_compare_med RouterBgp#always_compare_med}
  */
  readonly alwaysCompareMed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#as RouterBgp#as}
  */
  readonly as?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#bestpath_as_path_ignore RouterBgp#bestpath_as_path_ignore}
  */
  readonly bestpathAsPathIgnore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#bestpath_aspath_multipath_relax RouterBgp#bestpath_aspath_multipath_relax}
  */
  readonly bestpathAspathMultipathRelax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#bestpath_cmp_confed_aspath RouterBgp#bestpath_cmp_confed_aspath}
  */
  readonly bestpathCmpConfedAspath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#bestpath_cmp_routerid RouterBgp#bestpath_cmp_routerid}
  */
  readonly bestpathCmpRouterid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#bestpath_med_confed RouterBgp#bestpath_med_confed}
  */
  readonly bestpathMedConfed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#bestpath_med_missing_as_worst RouterBgp#bestpath_med_missing_as_worst}
  */
  readonly bestpathMedMissingAsWorst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#client_to_client_reflection RouterBgp#client_to_client_reflection}
  */
  readonly clientToClientReflection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#cluster_id RouterBgp#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#confederation_identifier RouterBgp#confederation_identifier}
  */
  readonly confederationIdentifier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#dampening RouterBgp#dampening}
  */
  readonly dampening?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#dampening_max_suppress_time RouterBgp#dampening_max_suppress_time}
  */
  readonly dampeningMaxSuppressTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#dampening_reachability_half_life RouterBgp#dampening_reachability_half_life}
  */
  readonly dampeningReachabilityHalfLife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#dampening_reuse RouterBgp#dampening_reuse}
  */
  readonly dampeningReuse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#dampening_suppress RouterBgp#dampening_suppress}
  */
  readonly dampeningSuppress?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#default_local_preference RouterBgp#default_local_preference}
  */
  readonly defaultLocalPreference?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#deterministic_med RouterBgp#deterministic_med}
  */
  readonly deterministicMed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#distance_external RouterBgp#distance_external}
  */
  readonly distanceExternal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#distance_internal RouterBgp#distance_internal}
  */
  readonly distanceInternal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#distance_local RouterBgp#distance_local}
  */
  readonly distanceLocal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#dynamic_sort_subtable RouterBgp#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#ebgp_requires_policy RouterBgp#ebgp_requires_policy}
  */
  readonly ebgpRequiresPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#enforce_first_as RouterBgp#enforce_first_as}
  */
  readonly enforceFirstAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#fast_external_failover RouterBgp#fast_external_failover}
  */
  readonly fastExternalFailover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#graceful_stalepath_time RouterBgp#graceful_stalepath_time}
  */
  readonly gracefulStalepathTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#holdtime_timer RouterBgp#holdtime_timer}
  */
  readonly holdtimeTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#keepalive_timer RouterBgp#keepalive_timer}
  */
  readonly keepaliveTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#log_neighbour_changes RouterBgp#log_neighbour_changes}
  */
  readonly logNeighbourChanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#maximum_paths_ebgp RouterBgp#maximum_paths_ebgp}
  */
  readonly maximumPathsEbgp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#maximum_paths_ibgp RouterBgp#maximum_paths_ibgp}
  */
  readonly maximumPathsIbgp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_reflector_allow_outbound_policy RouterBgp#route_reflector_allow_outbound_policy}
  */
  readonly routeReflectorAllowOutboundPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#router_id RouterBgp#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#scan_time RouterBgp#scan_time}
  */
  readonly scanTime?: number;
  /**
  * admin_distance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#admin_distance RouterBgp#admin_distance}
  */
  readonly adminDistance?: RouterBgpAdminDistance[] | cdktf.IResolvable;
  /**
  * admin_distance6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#admin_distance6 RouterBgp#admin_distance6}
  */
  readonly adminDistance6?: RouterBgpAdminDistance6[] | cdktf.IResolvable;
  /**
  * aggregate_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#aggregate_address RouterBgp#aggregate_address}
  */
  readonly aggregateAddress?: RouterBgpAggregateAddress[] | cdktf.IResolvable;
  /**
  * aggregate_address6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#aggregate_address6 RouterBgp#aggregate_address6}
  */
  readonly aggregateAddress6?: RouterBgpAggregateAddress6[] | cdktf.IResolvable;
  /**
  * confederation_peers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#confederation_peers RouterBgp#confederation_peers}
  */
  readonly confederationPeers?: RouterBgpConfederationPeers[] | cdktf.IResolvable;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#neighbor RouterBgp#neighbor}
  */
  readonly neighbor?: RouterBgpNeighbor[] | cdktf.IResolvable;
  /**
  * neighbor_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#neighbor_group RouterBgp#neighbor_group}
  */
  readonly neighborGroup?: RouterBgpNeighborGroup[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#network RouterBgp#network}
  */
  readonly network?: RouterBgpNetwork[] | cdktf.IResolvable;
  /**
  * network6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#network6 RouterBgp#network6}
  */
  readonly network6?: RouterBgpNetwork6[] | cdktf.IResolvable;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#redistribute RouterBgp#redistribute}
  */
  readonly redistribute?: RouterBgpRedistribute[] | cdktf.IResolvable;
  /**
  * redistribute6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#redistribute6 RouterBgp#redistribute6}
  */
  readonly redistribute6?: RouterBgpRedistribute6[] | cdktf.IResolvable;
}
export interface RouterBgpAdminDistance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#distance RouterBgp#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#neighbour_prefix RouterBgp#neighbour_prefix}
  */
  readonly neighbourPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_list RouterBgp#route_list}
  */
  readonly routeList?: string;
}

export function routerBgpAdminDistanceToTerraform(struct?: RouterBgpAdminDistance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance: cdktf.numberToTerraform(struct!.distance),
    id: cdktf.numberToTerraform(struct!.id),
    neighbour_prefix: cdktf.stringToTerraform(struct!.neighbourPrefix),
    route_list: cdktf.stringToTerraform(struct!.routeList),
  }
}


export function routerBgpAdminDistanceToHclTerraform(struct?: RouterBgpAdminDistance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbour_prefix: {
      value: cdktf.stringToHclTerraform(struct!.neighbourPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_list: {
      value: cdktf.stringToHclTerraform(struct!.routeList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAdminDistanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAdminDistance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._neighbourPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbourPrefix = this._neighbourPrefix;
    }
    if (this._routeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeList = this._routeList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAdminDistance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distance = undefined;
      this._id = undefined;
      this._neighbourPrefix = undefined;
      this._routeList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distance = value.distance;
      this._id = value.id;
      this._neighbourPrefix = value.neighbourPrefix;
      this._routeList = value.routeList;
    }
  }

  // distance - computed: true, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // neighbour_prefix - computed: true, optional: true, required: false
  private _neighbourPrefix?: string; 
  public get neighbourPrefix() {
    return this.getStringAttribute('neighbour_prefix');
  }
  public set neighbourPrefix(value: string) {
    this._neighbourPrefix = value;
  }
  public resetNeighbourPrefix() {
    this._neighbourPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighbourPrefixInput() {
    return this._neighbourPrefix;
  }

  // route_list - computed: true, optional: true, required: false
  private _routeList?: string; 
  public get routeList() {
    return this.getStringAttribute('route_list');
  }
  public set routeList(value: string) {
    this._routeList = value;
  }
  public resetRouteList() {
    this._routeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeListInput() {
    return this._routeList;
  }
}

export class RouterBgpAdminDistanceList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAdminDistance[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAdminDistanceOutputReference {
    return new RouterBgpAdminDistanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAdminDistance6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#distance RouterBgp#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#neighbour_prefix6 RouterBgp#neighbour_prefix6}
  */
  readonly neighbourPrefix6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route6_list RouterBgp#route6_list}
  */
  readonly route6List?: string;
}

export function routerBgpAdminDistance6ToTerraform(struct?: RouterBgpAdminDistance6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance: cdktf.numberToTerraform(struct!.distance),
    id: cdktf.numberToTerraform(struct!.id),
    neighbour_prefix6: cdktf.stringToTerraform(struct!.neighbourPrefix6),
    route6_list: cdktf.stringToTerraform(struct!.route6List),
  }
}


export function routerBgpAdminDistance6ToHclTerraform(struct?: RouterBgpAdminDistance6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbour_prefix6: {
      value: cdktf.stringToHclTerraform(struct!.neighbourPrefix6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route6_list: {
      value: cdktf.stringToHclTerraform(struct!.route6List),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAdminDistance6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAdminDistance6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._neighbourPrefix6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbourPrefix6 = this._neighbourPrefix6;
    }
    if (this._route6List !== undefined) {
      hasAnyValues = true;
      internalValueResult.route6List = this._route6List;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAdminDistance6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distance = undefined;
      this._id = undefined;
      this._neighbourPrefix6 = undefined;
      this._route6List = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distance = value.distance;
      this._id = value.id;
      this._neighbourPrefix6 = value.neighbourPrefix6;
      this._route6List = value.route6List;
    }
  }

  // distance - computed: true, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // neighbour_prefix6 - computed: true, optional: true, required: false
  private _neighbourPrefix6?: string; 
  public get neighbourPrefix6() {
    return this.getStringAttribute('neighbour_prefix6');
  }
  public set neighbourPrefix6(value: string) {
    this._neighbourPrefix6 = value;
  }
  public resetNeighbourPrefix6() {
    this._neighbourPrefix6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighbourPrefix6Input() {
    return this._neighbourPrefix6;
  }

  // route6_list - computed: true, optional: true, required: false
  private _route6List?: string; 
  public get route6List() {
    return this.getStringAttribute('route6_list');
  }
  public set route6List(value: string) {
    this._route6List = value;
  }
  public resetRoute6List() {
    this._route6List = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get route6ListInput() {
    return this._route6List;
  }
}

export class RouterBgpAdminDistance6List extends cdktf.ComplexList {
  public internalValue? : RouterBgpAdminDistance6[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAdminDistance6OutputReference {
    return new RouterBgpAdminDistance6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAggregateAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#as_set RouterBgp#as_set}
  */
  readonly asSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#prefix RouterBgp#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#summary_only RouterBgp#summary_only}
  */
  readonly summaryOnly?: string;
}

export function routerBgpAggregateAddressToTerraform(struct?: RouterBgpAggregateAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_set: cdktf.stringToTerraform(struct!.asSet),
    id: cdktf.numberToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    summary_only: cdktf.stringToTerraform(struct!.summaryOnly),
  }
}


export function routerBgpAggregateAddressToHclTerraform(struct?: RouterBgpAggregateAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_set: {
      value: cdktf.stringToHclTerraform(struct!.asSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary_only: {
      value: cdktf.stringToHclTerraform(struct!.summaryOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAggregateAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAggregateAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSet = this._asSet;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._summaryOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnly = this._summaryOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAggregateAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asSet = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._summaryOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asSet = value.asSet;
      this._id = value.id;
      this._prefix = value.prefix;
      this._summaryOnly = value.summaryOnly;
    }
  }

  // as_set - computed: true, optional: true, required: false
  private _asSet?: string; 
  public get asSet() {
    return this.getStringAttribute('as_set');
  }
  public set asSet(value: string) {
    this._asSet = value;
  }
  public resetAsSet() {
    this._asSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asSetInput() {
    return this._asSet;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // summary_only - computed: true, optional: true, required: false
  private _summaryOnly?: string; 
  public get summaryOnly() {
    return this.getStringAttribute('summary_only');
  }
  public set summaryOnly(value: string) {
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

export class RouterBgpAggregateAddressList extends cdktf.ComplexList {
  public internalValue? : RouterBgpAggregateAddress[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAggregateAddressOutputReference {
    return new RouterBgpAggregateAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpAggregateAddress6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#prefix6 RouterBgp#prefix6}
  */
  readonly prefix6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#summary_only RouterBgp#summary_only}
  */
  readonly summaryOnly?: string;
}

export function routerBgpAggregateAddress6ToTerraform(struct?: RouterBgpAggregateAddress6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    prefix6: cdktf.stringToTerraform(struct!.prefix6),
    summary_only: cdktf.stringToTerraform(struct!.summaryOnly),
  }
}


export function routerBgpAggregateAddress6ToHclTerraform(struct?: RouterBgpAggregateAddress6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix6: {
      value: cdktf.stringToHclTerraform(struct!.prefix6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary_only: {
      value: cdktf.stringToHclTerraform(struct!.summaryOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpAggregateAddress6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpAggregateAddress6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix6 = this._prefix6;
    }
    if (this._summaryOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnly = this._summaryOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpAggregateAddress6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._prefix6 = undefined;
      this._summaryOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._prefix6 = value.prefix6;
      this._summaryOnly = value.summaryOnly;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // prefix6 - computed: true, optional: true, required: false
  private _prefix6?: string; 
  public get prefix6() {
    return this.getStringAttribute('prefix6');
  }
  public set prefix6(value: string) {
    this._prefix6 = value;
  }
  public resetPrefix6() {
    this._prefix6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefix6Input() {
    return this._prefix6;
  }

  // summary_only - computed: true, optional: true, required: false
  private _summaryOnly?: string; 
  public get summaryOnly() {
    return this.getStringAttribute('summary_only');
  }
  public set summaryOnly(value: string) {
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

export class RouterBgpAggregateAddress6List extends cdktf.ComplexList {
  public internalValue? : RouterBgpAggregateAddress6[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpAggregateAddress6OutputReference {
    return new RouterBgpAggregateAddress6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpConfederationPeers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#peer RouterBgp#peer}
  */
  readonly peer?: string;
}

export function routerBgpConfederationPeersToTerraform(struct?: RouterBgpConfederationPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer: cdktf.stringToTerraform(struct!.peer),
  }
}


export function routerBgpConfederationPeersToHclTerraform(struct?: RouterBgpConfederationPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer: {
      value: cdktf.stringToHclTerraform(struct!.peer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpConfederationPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpConfederationPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peer !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer = this._peer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpConfederationPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peer = value.peer;
    }
  }

  // peer - computed: true, optional: true, required: false
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
}

export class RouterBgpConfederationPeersList extends cdktf.ComplexList {
  public internalValue? : RouterBgpConfederationPeers[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpConfederationPeersOutputReference {
    return new RouterBgpConfederationPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighbor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#activate RouterBgp#activate}
  */
  readonly activate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#activate6 RouterBgp#activate6}
  */
  readonly activate6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#activate_evpn RouterBgp#activate_evpn}
  */
  readonly activateEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#advertisement_interval RouterBgp#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#allowas_in RouterBgp#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#allowas_in6 RouterBgp#allowas_in6}
  */
  readonly allowasIn6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#allowas_in_enable RouterBgp#allowas_in_enable}
  */
  readonly allowasInEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#allowas_in_enable6 RouterBgp#allowas_in_enable6}
  */
  readonly allowasInEnable6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#allowas_in_enable_evpn RouterBgp#allowas_in_enable_evpn}
  */
  readonly allowasInEnableEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#as_override RouterBgp#as_override}
  */
  readonly asOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#as_override6 RouterBgp#as_override6}
  */
  readonly asOverride6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#attribute_unchanged RouterBgp#attribute_unchanged}
  */
  readonly attributeUnchanged?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#attribute_unchanged6 RouterBgp#attribute_unchanged6}
  */
  readonly attributeUnchanged6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#attribute_unchanged_evpn RouterBgp#attribute_unchanged_evpn}
  */
  readonly attributeUnchangedEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#bfd RouterBgp#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#bfd_session_mode RouterBgp#bfd_session_mode}
  */
  readonly bfdSessionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#capability_default_originate RouterBgp#capability_default_originate}
  */
  readonly capabilityDefaultOriginate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#capability_default_originate6 RouterBgp#capability_default_originate6}
  */
  readonly capabilityDefaultOriginate6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#capability_dynamic RouterBgp#capability_dynamic}
  */
  readonly capabilityDynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#capability_extended_nexthop RouterBgp#capability_extended_nexthop}
  */
  readonly capabilityExtendedNexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#capability_orf RouterBgp#capability_orf}
  */
  readonly capabilityOrf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#capability_orf6 RouterBgp#capability_orf6}
  */
  readonly capabilityOrf6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#connect_timer RouterBgp#connect_timer}
  */
  readonly connectTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#default_originate_routemap RouterBgp#default_originate_routemap}
  */
  readonly defaultOriginateRoutemap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#default_originate_routemap6 RouterBgp#default_originate_routemap6}
  */
  readonly defaultOriginateRoutemap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#description RouterBgp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#distribute_list_in RouterBgp#distribute_list_in}
  */
  readonly distributeListIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#distribute_list_in6 RouterBgp#distribute_list_in6}
  */
  readonly distributeListIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#distribute_list_out RouterBgp#distribute_list_out}
  */
  readonly distributeListOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#distribute_list_out6 RouterBgp#distribute_list_out6}
  */
  readonly distributeListOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#dont_capability_negotiate RouterBgp#dont_capability_negotiate}
  */
  readonly dontCapabilityNegotiate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#ebgp_enforce_multihop RouterBgp#ebgp_enforce_multihop}
  */
  readonly ebgpEnforceMultihop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#ebgp_multihop_ttl RouterBgp#ebgp_multihop_ttl}
  */
  readonly ebgpMultihopTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#ebgp_ttl_security_hops RouterBgp#ebgp_ttl_security_hops}
  */
  readonly ebgpTtlSecurityHops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#enforce_first_as RouterBgp#enforce_first_as}
  */
  readonly enforceFirstAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#filter_list_in RouterBgp#filter_list_in}
  */
  readonly filterListIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#filter_list_in6 RouterBgp#filter_list_in6}
  */
  readonly filterListIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#filter_list_out RouterBgp#filter_list_out}
  */
  readonly filterListOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#filter_list_out6 RouterBgp#filter_list_out6}
  */
  readonly filterListOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#holdtime_timer RouterBgp#holdtime_timer}
  */
  readonly holdtimeTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#interface RouterBgp#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#ip RouterBgp#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#keep_alive_timer RouterBgp#keep_alive_timer}
  */
  readonly keepAliveTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#maximum_prefix RouterBgp#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#maximum_prefix6 RouterBgp#maximum_prefix6}
  */
  readonly maximumPrefix6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#maximum_prefix_threshold RouterBgp#maximum_prefix_threshold}
  */
  readonly maximumPrefixThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#maximum_prefix_threshold6 RouterBgp#maximum_prefix_threshold6}
  */
  readonly maximumPrefixThreshold6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#maximum_prefix_warning_only RouterBgp#maximum_prefix_warning_only}
  */
  readonly maximumPrefixWarningOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#maximum_prefix_warning_only6 RouterBgp#maximum_prefix_warning_only6}
  */
  readonly maximumPrefixWarningOnly6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#next_hop_self RouterBgp#next_hop_self}
  */
  readonly nextHopSelf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#next_hop_self6 RouterBgp#next_hop_self6}
  */
  readonly nextHopSelf6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#override_capability RouterBgp#override_capability}
  */
  readonly overrideCapability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#passive RouterBgp#passive}
  */
  readonly passive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#password RouterBgp#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#prefix_list_in RouterBgp#prefix_list_in}
  */
  readonly prefixListIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#prefix_list_in6 RouterBgp#prefix_list_in6}
  */
  readonly prefixListIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#prefix_list_out RouterBgp#prefix_list_out}
  */
  readonly prefixListOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#prefix_list_out6 RouterBgp#prefix_list_out6}
  */
  readonly prefixListOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#remote_as RouterBgp#remote_as}
  */
  readonly remoteAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#remove_private_as RouterBgp#remove_private_as}
  */
  readonly removePrivateAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#remove_private_as6 RouterBgp#remove_private_as6}
  */
  readonly removePrivateAs6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map_in RouterBgp#route_map_in}
  */
  readonly routeMapIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map_in6 RouterBgp#route_map_in6}
  */
  readonly routeMapIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map_in_evpn RouterBgp#route_map_in_evpn}
  */
  readonly routeMapInEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map_out RouterBgp#route_map_out}
  */
  readonly routeMapOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map_out6 RouterBgp#route_map_out6}
  */
  readonly routeMapOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map_out_evpn RouterBgp#route_map_out_evpn}
  */
  readonly routeMapOutEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_reflector_client RouterBgp#route_reflector_client}
  */
  readonly routeReflectorClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_reflector_client6 RouterBgp#route_reflector_client6}
  */
  readonly routeReflectorClient6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_reflector_client_evpn RouterBgp#route_reflector_client_evpn}
  */
  readonly routeReflectorClientEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_server_client RouterBgp#route_server_client}
  */
  readonly routeServerClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_server_client6 RouterBgp#route_server_client6}
  */
  readonly routeServerClient6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#send_community RouterBgp#send_community}
  */
  readonly sendCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#send_community6 RouterBgp#send_community6}
  */
  readonly sendCommunity6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#shutdown RouterBgp#shutdown}
  */
  readonly shutdown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#soft_reconfiguration RouterBgp#soft_reconfiguration}
  */
  readonly softReconfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#soft_reconfiguration6 RouterBgp#soft_reconfiguration6}
  */
  readonly softReconfiguration6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#soft_reconfiguration_evpn RouterBgp#soft_reconfiguration_evpn}
  */
  readonly softReconfigurationEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#strict_capability_match RouterBgp#strict_capability_match}
  */
  readonly strictCapabilityMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#unsuppress_map RouterBgp#unsuppress_map}
  */
  readonly unsuppressMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#unsuppress_map6 RouterBgp#unsuppress_map6}
  */
  readonly unsuppressMap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#update_source RouterBgp#update_source}
  */
  readonly updateSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#weight RouterBgp#weight}
  */
  readonly weight?: number;
}

export function routerBgpNeighborToTerraform(struct?: RouterBgpNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.stringToTerraform(struct!.activate),
    activate6: cdktf.stringToTerraform(struct!.activate6),
    activate_evpn: cdktf.stringToTerraform(struct!.activateEvpn),
    advertisement_interval: cdktf.numberToTerraform(struct!.advertisementInterval),
    allowas_in: cdktf.numberToTerraform(struct!.allowasIn),
    allowas_in6: cdktf.numberToTerraform(struct!.allowasIn6),
    allowas_in_enable: cdktf.stringToTerraform(struct!.allowasInEnable),
    allowas_in_enable6: cdktf.stringToTerraform(struct!.allowasInEnable6),
    allowas_in_enable_evpn: cdktf.stringToTerraform(struct!.allowasInEnableEvpn),
    as_override: cdktf.stringToTerraform(struct!.asOverride),
    as_override6: cdktf.stringToTerraform(struct!.asOverride6),
    attribute_unchanged: cdktf.stringToTerraform(struct!.attributeUnchanged),
    attribute_unchanged6: cdktf.stringToTerraform(struct!.attributeUnchanged6),
    attribute_unchanged_evpn: cdktf.stringToTerraform(struct!.attributeUnchangedEvpn),
    bfd: cdktf.stringToTerraform(struct!.bfd),
    bfd_session_mode: cdktf.stringToTerraform(struct!.bfdSessionMode),
    capability_default_originate: cdktf.stringToTerraform(struct!.capabilityDefaultOriginate),
    capability_default_originate6: cdktf.stringToTerraform(struct!.capabilityDefaultOriginate6),
    capability_dynamic: cdktf.stringToTerraform(struct!.capabilityDynamic),
    capability_extended_nexthop: cdktf.stringToTerraform(struct!.capabilityExtendedNexthop),
    capability_orf: cdktf.stringToTerraform(struct!.capabilityOrf),
    capability_orf6: cdktf.stringToTerraform(struct!.capabilityOrf6),
    connect_timer: cdktf.numberToTerraform(struct!.connectTimer),
    default_originate_routemap: cdktf.stringToTerraform(struct!.defaultOriginateRoutemap),
    default_originate_routemap6: cdktf.stringToTerraform(struct!.defaultOriginateRoutemap6),
    description: cdktf.stringToTerraform(struct!.description),
    distribute_list_in: cdktf.stringToTerraform(struct!.distributeListIn),
    distribute_list_in6: cdktf.stringToTerraform(struct!.distributeListIn6),
    distribute_list_out: cdktf.stringToTerraform(struct!.distributeListOut),
    distribute_list_out6: cdktf.stringToTerraform(struct!.distributeListOut6),
    dont_capability_negotiate: cdktf.stringToTerraform(struct!.dontCapabilityNegotiate),
    ebgp_enforce_multihop: cdktf.stringToTerraform(struct!.ebgpEnforceMultihop),
    ebgp_multihop_ttl: cdktf.numberToTerraform(struct!.ebgpMultihopTtl),
    ebgp_ttl_security_hops: cdktf.numberToTerraform(struct!.ebgpTtlSecurityHops),
    enforce_first_as: cdktf.stringToTerraform(struct!.enforceFirstAs),
    filter_list_in: cdktf.stringToTerraform(struct!.filterListIn),
    filter_list_in6: cdktf.stringToTerraform(struct!.filterListIn6),
    filter_list_out: cdktf.stringToTerraform(struct!.filterListOut),
    filter_list_out6: cdktf.stringToTerraform(struct!.filterListOut6),
    holdtime_timer: cdktf.numberToTerraform(struct!.holdtimeTimer),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
    keep_alive_timer: cdktf.numberToTerraform(struct!.keepAliveTimer),
    maximum_prefix: cdktf.numberToTerraform(struct!.maximumPrefix),
    maximum_prefix6: cdktf.numberToTerraform(struct!.maximumPrefix6),
    maximum_prefix_threshold: cdktf.numberToTerraform(struct!.maximumPrefixThreshold),
    maximum_prefix_threshold6: cdktf.numberToTerraform(struct!.maximumPrefixThreshold6),
    maximum_prefix_warning_only: cdktf.stringToTerraform(struct!.maximumPrefixWarningOnly),
    maximum_prefix_warning_only6: cdktf.stringToTerraform(struct!.maximumPrefixWarningOnly6),
    next_hop_self: cdktf.stringToTerraform(struct!.nextHopSelf),
    next_hop_self6: cdktf.stringToTerraform(struct!.nextHopSelf6),
    override_capability: cdktf.stringToTerraform(struct!.overrideCapability),
    passive: cdktf.stringToTerraform(struct!.passive),
    password: cdktf.stringToTerraform(struct!.password),
    prefix_list_in: cdktf.stringToTerraform(struct!.prefixListIn),
    prefix_list_in6: cdktf.stringToTerraform(struct!.prefixListIn6),
    prefix_list_out: cdktf.stringToTerraform(struct!.prefixListOut),
    prefix_list_out6: cdktf.stringToTerraform(struct!.prefixListOut6),
    remote_as: cdktf.numberToTerraform(struct!.remoteAs),
    remove_private_as: cdktf.stringToTerraform(struct!.removePrivateAs),
    remove_private_as6: cdktf.stringToTerraform(struct!.removePrivateAs6),
    route_map_in: cdktf.stringToTerraform(struct!.routeMapIn),
    route_map_in6: cdktf.stringToTerraform(struct!.routeMapIn6),
    route_map_in_evpn: cdktf.stringToTerraform(struct!.routeMapInEvpn),
    route_map_out: cdktf.stringToTerraform(struct!.routeMapOut),
    route_map_out6: cdktf.stringToTerraform(struct!.routeMapOut6),
    route_map_out_evpn: cdktf.stringToTerraform(struct!.routeMapOutEvpn),
    route_reflector_client: cdktf.stringToTerraform(struct!.routeReflectorClient),
    route_reflector_client6: cdktf.stringToTerraform(struct!.routeReflectorClient6),
    route_reflector_client_evpn: cdktf.stringToTerraform(struct!.routeReflectorClientEvpn),
    route_server_client: cdktf.stringToTerraform(struct!.routeServerClient),
    route_server_client6: cdktf.stringToTerraform(struct!.routeServerClient6),
    send_community: cdktf.stringToTerraform(struct!.sendCommunity),
    send_community6: cdktf.stringToTerraform(struct!.sendCommunity6),
    shutdown: cdktf.stringToTerraform(struct!.shutdown),
    soft_reconfiguration: cdktf.stringToTerraform(struct!.softReconfiguration),
    soft_reconfiguration6: cdktf.stringToTerraform(struct!.softReconfiguration6),
    soft_reconfiguration_evpn: cdktf.stringToTerraform(struct!.softReconfigurationEvpn),
    strict_capability_match: cdktf.stringToTerraform(struct!.strictCapabilityMatch),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
    unsuppress_map6: cdktf.stringToTerraform(struct!.unsuppressMap6),
    update_source: cdktf.stringToTerraform(struct!.updateSource),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function routerBgpNeighborToHclTerraform(struct?: RouterBgpNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate: {
      value: cdktf.stringToHclTerraform(struct!.activate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    activate6: {
      value: cdktf.stringToHclTerraform(struct!.activate6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    activate_evpn: {
      value: cdktf.stringToHclTerraform(struct!.activateEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advertisement_interval: {
      value: cdktf.numberToHclTerraform(struct!.advertisementInterval),
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
    allowas_in6: {
      value: cdktf.numberToHclTerraform(struct!.allowasIn6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_enable: {
      value: cdktf.stringToHclTerraform(struct!.allowasInEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowas_in_enable6: {
      value: cdktf.stringToHclTerraform(struct!.allowasInEnable6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowas_in_enable_evpn: {
      value: cdktf.stringToHclTerraform(struct!.allowasInEnableEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_override: {
      value: cdktf.stringToHclTerraform(struct!.asOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_override6: {
      value: cdktf.stringToHclTerraform(struct!.asOverride6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_unchanged: {
      value: cdktf.stringToHclTerraform(struct!.attributeUnchanged),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_unchanged6: {
      value: cdktf.stringToHclTerraform(struct!.attributeUnchanged6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_unchanged_evpn: {
      value: cdktf.stringToHclTerraform(struct!.attributeUnchangedEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd: {
      value: cdktf.stringToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd_session_mode: {
      value: cdktf.stringToHclTerraform(struct!.bfdSessionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_default_originate: {
      value: cdktf.stringToHclTerraform(struct!.capabilityDefaultOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_default_originate6: {
      value: cdktf.stringToHclTerraform(struct!.capabilityDefaultOriginate6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_dynamic: {
      value: cdktf.stringToHclTerraform(struct!.capabilityDynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_extended_nexthop: {
      value: cdktf.stringToHclTerraform(struct!.capabilityExtendedNexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_orf: {
      value: cdktf.stringToHclTerraform(struct!.capabilityOrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_orf6: {
      value: cdktf.stringToHclTerraform(struct!.capabilityOrf6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_timer: {
      value: cdktf.numberToHclTerraform(struct!.connectTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_originate_routemap: {
      value: cdktf.stringToHclTerraform(struct!.defaultOriginateRoutemap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_originate_routemap6: {
      value: cdktf.stringToHclTerraform(struct!.defaultOriginateRoutemap6),
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
    distribute_list_in: {
      value: cdktf.stringToHclTerraform(struct!.distributeListIn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribute_list_in6: {
      value: cdktf.stringToHclTerraform(struct!.distributeListIn6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribute_list_out: {
      value: cdktf.stringToHclTerraform(struct!.distributeListOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribute_list_out6: {
      value: cdktf.stringToHclTerraform(struct!.distributeListOut6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dont_capability_negotiate: {
      value: cdktf.stringToHclTerraform(struct!.dontCapabilityNegotiate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebgp_enforce_multihop: {
      value: cdktf.stringToHclTerraform(struct!.ebgpEnforceMultihop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebgp_multihop_ttl: {
      value: cdktf.numberToHclTerraform(struct!.ebgpMultihopTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_ttl_security_hops: {
      value: cdktf.numberToHclTerraform(struct!.ebgpTtlSecurityHops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforce_first_as: {
      value: cdktf.stringToHclTerraform(struct!.enforceFirstAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_list_in: {
      value: cdktf.stringToHclTerraform(struct!.filterListIn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_list_in6: {
      value: cdktf.stringToHclTerraform(struct!.filterListIn6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_list_out: {
      value: cdktf.stringToHclTerraform(struct!.filterListOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_list_out6: {
      value: cdktf.stringToHclTerraform(struct!.filterListOut6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    holdtime_timer: {
      value: cdktf.numberToHclTerraform(struct!.holdtimeTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_alive_timer: {
      value: cdktf.numberToHclTerraform(struct!.keepAliveTimer),
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
    maximum_prefix6: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefix6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_threshold6: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThreshold6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_warning_only: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixWarningOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_prefix_warning_only6: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixWarningOnly6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self6: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelf6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_capability: {
      value: cdktf.stringToHclTerraform(struct!.overrideCapability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passive: {
      value: cdktf.stringToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_in: {
      value: cdktf.stringToHclTerraform(struct!.prefixListIn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_in6: {
      value: cdktf.stringToHclTerraform(struct!.prefixListIn6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_out: {
      value: cdktf.stringToHclTerraform(struct!.prefixListOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_out6: {
      value: cdktf.stringToHclTerraform(struct!.prefixListOut6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_as: {
      value: cdktf.numberToHclTerraform(struct!.remoteAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_private_as: {
      value: cdktf.stringToHclTerraform(struct!.removePrivateAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as6: {
      value: cdktf.stringToHclTerraform(struct!.removePrivateAs6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_in: {
      value: cdktf.stringToHclTerraform(struct!.routeMapIn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_in6: {
      value: cdktf.stringToHclTerraform(struct!.routeMapIn6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_in_evpn: {
      value: cdktf.stringToHclTerraform(struct!.routeMapInEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_out: {
      value: cdktf.stringToHclTerraform(struct!.routeMapOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_out6: {
      value: cdktf.stringToHclTerraform(struct!.routeMapOut6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_out_evpn: {
      value: cdktf.stringToHclTerraform(struct!.routeMapOutEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_reflector_client: {
      value: cdktf.stringToHclTerraform(struct!.routeReflectorClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_reflector_client6: {
      value: cdktf.stringToHclTerraform(struct!.routeReflectorClient6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_reflector_client_evpn: {
      value: cdktf.stringToHclTerraform(struct!.routeReflectorClientEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_server_client: {
      value: cdktf.stringToHclTerraform(struct!.routeServerClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_server_client6: {
      value: cdktf.stringToHclTerraform(struct!.routeServerClient6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community6: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunity6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shutdown: {
      value: cdktf.stringToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_reconfiguration: {
      value: cdktf.stringToHclTerraform(struct!.softReconfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_reconfiguration6: {
      value: cdktf.stringToHclTerraform(struct!.softReconfiguration6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_reconfiguration_evpn: {
      value: cdktf.stringToHclTerraform(struct!.softReconfigurationEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict_capability_match: {
      value: cdktf.stringToHclTerraform(struct!.strictCapabilityMatch),
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
    unsuppress_map6: {
      value: cdktf.stringToHclTerraform(struct!.unsuppressMap6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_source: {
      value: cdktf.stringToHclTerraform(struct!.updateSource),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._activate6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate6 = this._activate6;
    }
    if (this._activateEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateEvpn = this._activateEvpn;
    }
    if (this._advertisementInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisementInterval = this._advertisementInterval;
    }
    if (this._allowasIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn = this._allowasIn;
    }
    if (this._allowasIn6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn6 = this._allowasIn6;
    }
    if (this._allowasInEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInEnable = this._allowasInEnable;
    }
    if (this._allowasInEnable6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInEnable6 = this._allowasInEnable6;
    }
    if (this._allowasInEnableEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInEnableEvpn = this._allowasInEnableEvpn;
    }
    if (this._asOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverride = this._asOverride;
    }
    if (this._asOverride6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverride6 = this._asOverride6;
    }
    if (this._attributeUnchanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeUnchanged = this._attributeUnchanged;
    }
    if (this._attributeUnchanged6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeUnchanged6 = this._attributeUnchanged6;
    }
    if (this._attributeUnchangedEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeUnchangedEvpn = this._attributeUnchangedEvpn;
    }
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._bfdSessionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdSessionMode = this._bfdSessionMode;
    }
    if (this._capabilityDefaultOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityDefaultOriginate = this._capabilityDefaultOriginate;
    }
    if (this._capabilityDefaultOriginate6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityDefaultOriginate6 = this._capabilityDefaultOriginate6;
    }
    if (this._capabilityDynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityDynamic = this._capabilityDynamic;
    }
    if (this._capabilityExtendedNexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityExtendedNexthop = this._capabilityExtendedNexthop;
    }
    if (this._capabilityOrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityOrf = this._capabilityOrf;
    }
    if (this._capabilityOrf6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityOrf6 = this._capabilityOrf6;
    }
    if (this._connectTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimer = this._connectTimer;
    }
    if (this._defaultOriginateRoutemap !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginateRoutemap = this._defaultOriginateRoutemap;
    }
    if (this._defaultOriginateRoutemap6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginateRoutemap6 = this._defaultOriginateRoutemap6;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._distributeListIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListIn = this._distributeListIn;
    }
    if (this._distributeListIn6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListIn6 = this._distributeListIn6;
    }
    if (this._distributeListOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListOut = this._distributeListOut;
    }
    if (this._distributeListOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListOut6 = this._distributeListOut6;
    }
    if (this._dontCapabilityNegotiate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dontCapabilityNegotiate = this._dontCapabilityNegotiate;
    }
    if (this._ebgpEnforceMultihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpEnforceMultihop = this._ebgpEnforceMultihop;
    }
    if (this._ebgpMultihopTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihopTtl = this._ebgpMultihopTtl;
    }
    if (this._ebgpTtlSecurityHops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpTtlSecurityHops = this._ebgpTtlSecurityHops;
    }
    if (this._enforceFirstAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceFirstAs = this._enforceFirstAs;
    }
    if (this._filterListIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListIn = this._filterListIn;
    }
    if (this._filterListIn6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListIn6 = this._filterListIn6;
    }
    if (this._filterListOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListOut = this._filterListOut;
    }
    if (this._filterListOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListOut6 = this._filterListOut6;
    }
    if (this._holdtimeTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdtimeTimer = this._holdtimeTimer;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._keepAliveTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveTimer = this._keepAliveTimer;
    }
    if (this._maximumPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix;
    }
    if (this._maximumPrefix6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix6 = this._maximumPrefix6;
    }
    if (this._maximumPrefixThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThreshold = this._maximumPrefixThreshold;
    }
    if (this._maximumPrefixThreshold6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThreshold6 = this._maximumPrefixThreshold6;
    }
    if (this._maximumPrefixWarningOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixWarningOnly = this._maximumPrefixWarningOnly;
    }
    if (this._maximumPrefixWarningOnly6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixWarningOnly6 = this._maximumPrefixWarningOnly6;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._nextHopSelf6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf6 = this._nextHopSelf6;
    }
    if (this._overrideCapability !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideCapability = this._overrideCapability;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._prefixListIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListIn = this._prefixListIn;
    }
    if (this._prefixListIn6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListIn6 = this._prefixListIn6;
    }
    if (this._prefixListOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListOut = this._prefixListOut;
    }
    if (this._prefixListOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListOut6 = this._prefixListOut6;
    }
    if (this._remoteAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAs = this._remoteAs;
    }
    if (this._removePrivateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs;
    }
    if (this._removePrivateAs6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs6 = this._removePrivateAs6;
    }
    if (this._routeMapIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapIn = this._routeMapIn;
    }
    if (this._routeMapIn6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapIn6 = this._routeMapIn6;
    }
    if (this._routeMapInEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapInEvpn = this._routeMapInEvpn;
    }
    if (this._routeMapOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOut = this._routeMapOut;
    }
    if (this._routeMapOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOut6 = this._routeMapOut6;
    }
    if (this._routeMapOutEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutEvpn = this._routeMapOutEvpn;
    }
    if (this._routeReflectorClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeReflectorClient = this._routeReflectorClient;
    }
    if (this._routeReflectorClient6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeReflectorClient6 = this._routeReflectorClient6;
    }
    if (this._routeReflectorClientEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeReflectorClientEvpn = this._routeReflectorClientEvpn;
    }
    if (this._routeServerClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerClient = this._routeServerClient;
    }
    if (this._routeServerClient6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerClient6 = this._routeServerClient6;
    }
    if (this._sendCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity = this._sendCommunity;
    }
    if (this._sendCommunity6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity6 = this._sendCommunity6;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._softReconfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.softReconfiguration = this._softReconfiguration;
    }
    if (this._softReconfiguration6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.softReconfiguration6 = this._softReconfiguration6;
    }
    if (this._softReconfigurationEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.softReconfigurationEvpn = this._softReconfigurationEvpn;
    }
    if (this._strictCapabilityMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictCapabilityMatch = this._strictCapabilityMatch;
    }
    if (this._unsuppressMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppressMap = this._unsuppressMap;
    }
    if (this._unsuppressMap6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppressMap6 = this._unsuppressMap6;
    }
    if (this._updateSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSource = this._updateSource;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._activate6 = undefined;
      this._activateEvpn = undefined;
      this._advertisementInterval = undefined;
      this._allowasIn = undefined;
      this._allowasIn6 = undefined;
      this._allowasInEnable = undefined;
      this._allowasInEnable6 = undefined;
      this._allowasInEnableEvpn = undefined;
      this._asOverride = undefined;
      this._asOverride6 = undefined;
      this._attributeUnchanged = undefined;
      this._attributeUnchanged6 = undefined;
      this._attributeUnchangedEvpn = undefined;
      this._bfd = undefined;
      this._bfdSessionMode = undefined;
      this._capabilityDefaultOriginate = undefined;
      this._capabilityDefaultOriginate6 = undefined;
      this._capabilityDynamic = undefined;
      this._capabilityExtendedNexthop = undefined;
      this._capabilityOrf = undefined;
      this._capabilityOrf6 = undefined;
      this._connectTimer = undefined;
      this._defaultOriginateRoutemap = undefined;
      this._defaultOriginateRoutemap6 = undefined;
      this._description = undefined;
      this._distributeListIn = undefined;
      this._distributeListIn6 = undefined;
      this._distributeListOut = undefined;
      this._distributeListOut6 = undefined;
      this._dontCapabilityNegotiate = undefined;
      this._ebgpEnforceMultihop = undefined;
      this._ebgpMultihopTtl = undefined;
      this._ebgpTtlSecurityHops = undefined;
      this._enforceFirstAs = undefined;
      this._filterListIn = undefined;
      this._filterListIn6 = undefined;
      this._filterListOut = undefined;
      this._filterListOut6 = undefined;
      this._holdtimeTimer = undefined;
      this._interface = undefined;
      this._ip = undefined;
      this._keepAliveTimer = undefined;
      this._maximumPrefix = undefined;
      this._maximumPrefix6 = undefined;
      this._maximumPrefixThreshold = undefined;
      this._maximumPrefixThreshold6 = undefined;
      this._maximumPrefixWarningOnly = undefined;
      this._maximumPrefixWarningOnly6 = undefined;
      this._nextHopSelf = undefined;
      this._nextHopSelf6 = undefined;
      this._overrideCapability = undefined;
      this._passive = undefined;
      this._password = undefined;
      this._prefixListIn = undefined;
      this._prefixListIn6 = undefined;
      this._prefixListOut = undefined;
      this._prefixListOut6 = undefined;
      this._remoteAs = undefined;
      this._removePrivateAs = undefined;
      this._removePrivateAs6 = undefined;
      this._routeMapIn = undefined;
      this._routeMapIn6 = undefined;
      this._routeMapInEvpn = undefined;
      this._routeMapOut = undefined;
      this._routeMapOut6 = undefined;
      this._routeMapOutEvpn = undefined;
      this._routeReflectorClient = undefined;
      this._routeReflectorClient6 = undefined;
      this._routeReflectorClientEvpn = undefined;
      this._routeServerClient = undefined;
      this._routeServerClient6 = undefined;
      this._sendCommunity = undefined;
      this._sendCommunity6 = undefined;
      this._shutdown = undefined;
      this._softReconfiguration = undefined;
      this._softReconfiguration6 = undefined;
      this._softReconfigurationEvpn = undefined;
      this._strictCapabilityMatch = undefined;
      this._unsuppressMap = undefined;
      this._unsuppressMap6 = undefined;
      this._updateSource = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activate = value.activate;
      this._activate6 = value.activate6;
      this._activateEvpn = value.activateEvpn;
      this._advertisementInterval = value.advertisementInterval;
      this._allowasIn = value.allowasIn;
      this._allowasIn6 = value.allowasIn6;
      this._allowasInEnable = value.allowasInEnable;
      this._allowasInEnable6 = value.allowasInEnable6;
      this._allowasInEnableEvpn = value.allowasInEnableEvpn;
      this._asOverride = value.asOverride;
      this._asOverride6 = value.asOverride6;
      this._attributeUnchanged = value.attributeUnchanged;
      this._attributeUnchanged6 = value.attributeUnchanged6;
      this._attributeUnchangedEvpn = value.attributeUnchangedEvpn;
      this._bfd = value.bfd;
      this._bfdSessionMode = value.bfdSessionMode;
      this._capabilityDefaultOriginate = value.capabilityDefaultOriginate;
      this._capabilityDefaultOriginate6 = value.capabilityDefaultOriginate6;
      this._capabilityDynamic = value.capabilityDynamic;
      this._capabilityExtendedNexthop = value.capabilityExtendedNexthop;
      this._capabilityOrf = value.capabilityOrf;
      this._capabilityOrf6 = value.capabilityOrf6;
      this._connectTimer = value.connectTimer;
      this._defaultOriginateRoutemap = value.defaultOriginateRoutemap;
      this._defaultOriginateRoutemap6 = value.defaultOriginateRoutemap6;
      this._description = value.description;
      this._distributeListIn = value.distributeListIn;
      this._distributeListIn6 = value.distributeListIn6;
      this._distributeListOut = value.distributeListOut;
      this._distributeListOut6 = value.distributeListOut6;
      this._dontCapabilityNegotiate = value.dontCapabilityNegotiate;
      this._ebgpEnforceMultihop = value.ebgpEnforceMultihop;
      this._ebgpMultihopTtl = value.ebgpMultihopTtl;
      this._ebgpTtlSecurityHops = value.ebgpTtlSecurityHops;
      this._enforceFirstAs = value.enforceFirstAs;
      this._filterListIn = value.filterListIn;
      this._filterListIn6 = value.filterListIn6;
      this._filterListOut = value.filterListOut;
      this._filterListOut6 = value.filterListOut6;
      this._holdtimeTimer = value.holdtimeTimer;
      this._interface = value.interface;
      this._ip = value.ip;
      this._keepAliveTimer = value.keepAliveTimer;
      this._maximumPrefix = value.maximumPrefix;
      this._maximumPrefix6 = value.maximumPrefix6;
      this._maximumPrefixThreshold = value.maximumPrefixThreshold;
      this._maximumPrefixThreshold6 = value.maximumPrefixThreshold6;
      this._maximumPrefixWarningOnly = value.maximumPrefixWarningOnly;
      this._maximumPrefixWarningOnly6 = value.maximumPrefixWarningOnly6;
      this._nextHopSelf = value.nextHopSelf;
      this._nextHopSelf6 = value.nextHopSelf6;
      this._overrideCapability = value.overrideCapability;
      this._passive = value.passive;
      this._password = value.password;
      this._prefixListIn = value.prefixListIn;
      this._prefixListIn6 = value.prefixListIn6;
      this._prefixListOut = value.prefixListOut;
      this._prefixListOut6 = value.prefixListOut6;
      this._remoteAs = value.remoteAs;
      this._removePrivateAs = value.removePrivateAs;
      this._removePrivateAs6 = value.removePrivateAs6;
      this._routeMapIn = value.routeMapIn;
      this._routeMapIn6 = value.routeMapIn6;
      this._routeMapInEvpn = value.routeMapInEvpn;
      this._routeMapOut = value.routeMapOut;
      this._routeMapOut6 = value.routeMapOut6;
      this._routeMapOutEvpn = value.routeMapOutEvpn;
      this._routeReflectorClient = value.routeReflectorClient;
      this._routeReflectorClient6 = value.routeReflectorClient6;
      this._routeReflectorClientEvpn = value.routeReflectorClientEvpn;
      this._routeServerClient = value.routeServerClient;
      this._routeServerClient6 = value.routeServerClient6;
      this._sendCommunity = value.sendCommunity;
      this._sendCommunity6 = value.sendCommunity6;
      this._shutdown = value.shutdown;
      this._softReconfiguration = value.softReconfiguration;
      this._softReconfiguration6 = value.softReconfiguration6;
      this._softReconfigurationEvpn = value.softReconfigurationEvpn;
      this._strictCapabilityMatch = value.strictCapabilityMatch;
      this._unsuppressMap = value.unsuppressMap;
      this._unsuppressMap6 = value.unsuppressMap6;
      this._updateSource = value.updateSource;
      this._weight = value.weight;
    }
  }

  // activate - computed: true, optional: true, required: false
  private _activate?: string; 
  public get activate() {
    return this.getStringAttribute('activate');
  }
  public set activate(value: string) {
    this._activate = value;
  }
  public resetActivate() {
    this._activate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInput() {
    return this._activate;
  }

  // activate6 - computed: true, optional: true, required: false
  private _activate6?: string; 
  public get activate6() {
    return this.getStringAttribute('activate6');
  }
  public set activate6(value: string) {
    this._activate6 = value;
  }
  public resetActivate6() {
    this._activate6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activate6Input() {
    return this._activate6;
  }

  // activate_evpn - computed: true, optional: true, required: false
  private _activateEvpn?: string; 
  public get activateEvpn() {
    return this.getStringAttribute('activate_evpn');
  }
  public set activateEvpn(value: string) {
    this._activateEvpn = value;
  }
  public resetActivateEvpn() {
    this._activateEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateEvpnInput() {
    return this._activateEvpn;
  }

  // advertisement_interval - computed: true, optional: true, required: false
  private _advertisementInterval?: number; 
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
  }
  public set advertisementInterval(value: number) {
    this._advertisementInterval = value;
  }
  public resetAdvertisementInterval() {
    this._advertisementInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementIntervalInput() {
    return this._advertisementInterval;
  }

  // allowas_in - computed: true, optional: true, required: false
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

  // allowas_in6 - computed: true, optional: true, required: false
  private _allowasIn6?: number; 
  public get allowasIn6() {
    return this.getNumberAttribute('allowas_in6');
  }
  public set allowasIn6(value: number) {
    this._allowasIn6 = value;
  }
  public resetAllowasIn6() {
    this._allowasIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasIn6Input() {
    return this._allowasIn6;
  }

  // allowas_in_enable - computed: true, optional: true, required: false
  private _allowasInEnable?: string; 
  public get allowasInEnable() {
    return this.getStringAttribute('allowas_in_enable');
  }
  public set allowasInEnable(value: string) {
    this._allowasInEnable = value;
  }
  public resetAllowasInEnable() {
    this._allowasInEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnableInput() {
    return this._allowasInEnable;
  }

  // allowas_in_enable6 - computed: true, optional: true, required: false
  private _allowasInEnable6?: string; 
  public get allowasInEnable6() {
    return this.getStringAttribute('allowas_in_enable6');
  }
  public set allowasInEnable6(value: string) {
    this._allowasInEnable6 = value;
  }
  public resetAllowasInEnable6() {
    this._allowasInEnable6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnable6Input() {
    return this._allowasInEnable6;
  }

  // allowas_in_enable_evpn - computed: true, optional: true, required: false
  private _allowasInEnableEvpn?: string; 
  public get allowasInEnableEvpn() {
    return this.getStringAttribute('allowas_in_enable_evpn');
  }
  public set allowasInEnableEvpn(value: string) {
    this._allowasInEnableEvpn = value;
  }
  public resetAllowasInEnableEvpn() {
    this._allowasInEnableEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnableEvpnInput() {
    return this._allowasInEnableEvpn;
  }

  // as_override - computed: true, optional: true, required: false
  private _asOverride?: string; 
  public get asOverride() {
    return this.getStringAttribute('as_override');
  }
  public set asOverride(value: string) {
    this._asOverride = value;
  }
  public resetAsOverride() {
    this._asOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideInput() {
    return this._asOverride;
  }

  // as_override6 - computed: true, optional: true, required: false
  private _asOverride6?: string; 
  public get asOverride6() {
    return this.getStringAttribute('as_override6');
  }
  public set asOverride6(value: string) {
    this._asOverride6 = value;
  }
  public resetAsOverride6() {
    this._asOverride6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverride6Input() {
    return this._asOverride6;
  }

  // attribute_unchanged - computed: true, optional: true, required: false
  private _attributeUnchanged?: string; 
  public get attributeUnchanged() {
    return this.getStringAttribute('attribute_unchanged');
  }
  public set attributeUnchanged(value: string) {
    this._attributeUnchanged = value;
  }
  public resetAttributeUnchanged() {
    this._attributeUnchanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchangedInput() {
    return this._attributeUnchanged;
  }

  // attribute_unchanged6 - computed: true, optional: true, required: false
  private _attributeUnchanged6?: string; 
  public get attributeUnchanged6() {
    return this.getStringAttribute('attribute_unchanged6');
  }
  public set attributeUnchanged6(value: string) {
    this._attributeUnchanged6 = value;
  }
  public resetAttributeUnchanged6() {
    this._attributeUnchanged6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchanged6Input() {
    return this._attributeUnchanged6;
  }

  // attribute_unchanged_evpn - computed: true, optional: true, required: false
  private _attributeUnchangedEvpn?: string; 
  public get attributeUnchangedEvpn() {
    return this.getStringAttribute('attribute_unchanged_evpn');
  }
  public set attributeUnchangedEvpn(value: string) {
    this._attributeUnchangedEvpn = value;
  }
  public resetAttributeUnchangedEvpn() {
    this._attributeUnchangedEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchangedEvpnInput() {
    return this._attributeUnchangedEvpn;
  }

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // bfd_session_mode - computed: true, optional: true, required: false
  private _bfdSessionMode?: string; 
  public get bfdSessionMode() {
    return this.getStringAttribute('bfd_session_mode');
  }
  public set bfdSessionMode(value: string) {
    this._bfdSessionMode = value;
  }
  public resetBfdSessionMode() {
    this._bfdSessionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdSessionModeInput() {
    return this._bfdSessionMode;
  }

  // capability_default_originate - computed: true, optional: true, required: false
  private _capabilityDefaultOriginate?: string; 
  public get capabilityDefaultOriginate() {
    return this.getStringAttribute('capability_default_originate');
  }
  public set capabilityDefaultOriginate(value: string) {
    this._capabilityDefaultOriginate = value;
  }
  public resetCapabilityDefaultOriginate() {
    this._capabilityDefaultOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityDefaultOriginateInput() {
    return this._capabilityDefaultOriginate;
  }

  // capability_default_originate6 - computed: true, optional: true, required: false
  private _capabilityDefaultOriginate6?: string; 
  public get capabilityDefaultOriginate6() {
    return this.getStringAttribute('capability_default_originate6');
  }
  public set capabilityDefaultOriginate6(value: string) {
    this._capabilityDefaultOriginate6 = value;
  }
  public resetCapabilityDefaultOriginate6() {
    this._capabilityDefaultOriginate6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityDefaultOriginate6Input() {
    return this._capabilityDefaultOriginate6;
  }

  // capability_dynamic - computed: true, optional: true, required: false
  private _capabilityDynamic?: string; 
  public get capabilityDynamic() {
    return this.getStringAttribute('capability_dynamic');
  }
  public set capabilityDynamic(value: string) {
    this._capabilityDynamic = value;
  }
  public resetCapabilityDynamic() {
    this._capabilityDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityDynamicInput() {
    return this._capabilityDynamic;
  }

  // capability_extended_nexthop - computed: true, optional: true, required: false
  private _capabilityExtendedNexthop?: string; 
  public get capabilityExtendedNexthop() {
    return this.getStringAttribute('capability_extended_nexthop');
  }
  public set capabilityExtendedNexthop(value: string) {
    this._capabilityExtendedNexthop = value;
  }
  public resetCapabilityExtendedNexthop() {
    this._capabilityExtendedNexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityExtendedNexthopInput() {
    return this._capabilityExtendedNexthop;
  }

  // capability_orf - computed: true, optional: true, required: false
  private _capabilityOrf?: string; 
  public get capabilityOrf() {
    return this.getStringAttribute('capability_orf');
  }
  public set capabilityOrf(value: string) {
    this._capabilityOrf = value;
  }
  public resetCapabilityOrf() {
    this._capabilityOrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityOrfInput() {
    return this._capabilityOrf;
  }

  // capability_orf6 - computed: true, optional: true, required: false
  private _capabilityOrf6?: string; 
  public get capabilityOrf6() {
    return this.getStringAttribute('capability_orf6');
  }
  public set capabilityOrf6(value: string) {
    this._capabilityOrf6 = value;
  }
  public resetCapabilityOrf6() {
    this._capabilityOrf6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityOrf6Input() {
    return this._capabilityOrf6;
  }

  // connect_timer - computed: true, optional: true, required: false
  private _connectTimer?: number; 
  public get connectTimer() {
    return this.getNumberAttribute('connect_timer');
  }
  public set connectTimer(value: number) {
    this._connectTimer = value;
  }
  public resetConnectTimer() {
    this._connectTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimerInput() {
    return this._connectTimer;
  }

  // default_originate_routemap - computed: true, optional: true, required: false
  private _defaultOriginateRoutemap?: string; 
  public get defaultOriginateRoutemap() {
    return this.getStringAttribute('default_originate_routemap');
  }
  public set defaultOriginateRoutemap(value: string) {
    this._defaultOriginateRoutemap = value;
  }
  public resetDefaultOriginateRoutemap() {
    this._defaultOriginateRoutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateRoutemapInput() {
    return this._defaultOriginateRoutemap;
  }

  // default_originate_routemap6 - computed: true, optional: true, required: false
  private _defaultOriginateRoutemap6?: string; 
  public get defaultOriginateRoutemap6() {
    return this.getStringAttribute('default_originate_routemap6');
  }
  public set defaultOriginateRoutemap6(value: string) {
    this._defaultOriginateRoutemap6 = value;
  }
  public resetDefaultOriginateRoutemap6() {
    this._defaultOriginateRoutemap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateRoutemap6Input() {
    return this._defaultOriginateRoutemap6;
  }

  // description - computed: true, optional: true, required: false
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

  // distribute_list_in - computed: true, optional: true, required: false
  private _distributeListIn?: string; 
  public get distributeListIn() {
    return this.getStringAttribute('distribute_list_in');
  }
  public set distributeListIn(value: string) {
    this._distributeListIn = value;
  }
  public resetDistributeListIn() {
    this._distributeListIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInInput() {
    return this._distributeListIn;
  }

  // distribute_list_in6 - computed: true, optional: true, required: false
  private _distributeListIn6?: string; 
  public get distributeListIn6() {
    return this.getStringAttribute('distribute_list_in6');
  }
  public set distributeListIn6(value: string) {
    this._distributeListIn6 = value;
  }
  public resetDistributeListIn6() {
    this._distributeListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListIn6Input() {
    return this._distributeListIn6;
  }

  // distribute_list_out - computed: true, optional: true, required: false
  private _distributeListOut?: string; 
  public get distributeListOut() {
    return this.getStringAttribute('distribute_list_out');
  }
  public set distributeListOut(value: string) {
    this._distributeListOut = value;
  }
  public resetDistributeListOut() {
    this._distributeListOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOutInput() {
    return this._distributeListOut;
  }

  // distribute_list_out6 - computed: true, optional: true, required: false
  private _distributeListOut6?: string; 
  public get distributeListOut6() {
    return this.getStringAttribute('distribute_list_out6');
  }
  public set distributeListOut6(value: string) {
    this._distributeListOut6 = value;
  }
  public resetDistributeListOut6() {
    this._distributeListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOut6Input() {
    return this._distributeListOut6;
  }

  // dont_capability_negotiate - computed: true, optional: true, required: false
  private _dontCapabilityNegotiate?: string; 
  public get dontCapabilityNegotiate() {
    return this.getStringAttribute('dont_capability_negotiate');
  }
  public set dontCapabilityNegotiate(value: string) {
    this._dontCapabilityNegotiate = value;
  }
  public resetDontCapabilityNegotiate() {
    this._dontCapabilityNegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontCapabilityNegotiateInput() {
    return this._dontCapabilityNegotiate;
  }

  // ebgp_enforce_multihop - computed: true, optional: true, required: false
  private _ebgpEnforceMultihop?: string; 
  public get ebgpEnforceMultihop() {
    return this.getStringAttribute('ebgp_enforce_multihop');
  }
  public set ebgpEnforceMultihop(value: string) {
    this._ebgpEnforceMultihop = value;
  }
  public resetEbgpEnforceMultihop() {
    this._ebgpEnforceMultihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpEnforceMultihopInput() {
    return this._ebgpEnforceMultihop;
  }

  // ebgp_multihop_ttl - computed: true, optional: true, required: false
  private _ebgpMultihopTtl?: number; 
  public get ebgpMultihopTtl() {
    return this.getNumberAttribute('ebgp_multihop_ttl');
  }
  public set ebgpMultihopTtl(value: number) {
    this._ebgpMultihopTtl = value;
  }
  public resetEbgpMultihopTtl() {
    this._ebgpMultihopTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopTtlInput() {
    return this._ebgpMultihopTtl;
  }

  // ebgp_ttl_security_hops - computed: true, optional: true, required: false
  private _ebgpTtlSecurityHops?: number; 
  public get ebgpTtlSecurityHops() {
    return this.getNumberAttribute('ebgp_ttl_security_hops');
  }
  public set ebgpTtlSecurityHops(value: number) {
    this._ebgpTtlSecurityHops = value;
  }
  public resetEbgpTtlSecurityHops() {
    this._ebgpTtlSecurityHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpTtlSecurityHopsInput() {
    return this._ebgpTtlSecurityHops;
  }

  // enforce_first_as - computed: true, optional: true, required: false
  private _enforceFirstAs?: string; 
  public get enforceFirstAs() {
    return this.getStringAttribute('enforce_first_as');
  }
  public set enforceFirstAs(value: string) {
    this._enforceFirstAs = value;
  }
  public resetEnforceFirstAs() {
    this._enforceFirstAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceFirstAsInput() {
    return this._enforceFirstAs;
  }

  // filter_list_in - computed: true, optional: true, required: false
  private _filterListIn?: string; 
  public get filterListIn() {
    return this.getStringAttribute('filter_list_in');
  }
  public set filterListIn(value: string) {
    this._filterListIn = value;
  }
  public resetFilterListIn() {
    this._filterListIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInInput() {
    return this._filterListIn;
  }

  // filter_list_in6 - computed: true, optional: true, required: false
  private _filterListIn6?: string; 
  public get filterListIn6() {
    return this.getStringAttribute('filter_list_in6');
  }
  public set filterListIn6(value: string) {
    this._filterListIn6 = value;
  }
  public resetFilterListIn6() {
    this._filterListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListIn6Input() {
    return this._filterListIn6;
  }

  // filter_list_out - computed: true, optional: true, required: false
  private _filterListOut?: string; 
  public get filterListOut() {
    return this.getStringAttribute('filter_list_out');
  }
  public set filterListOut(value: string) {
    this._filterListOut = value;
  }
  public resetFilterListOut() {
    this._filterListOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOutInput() {
    return this._filterListOut;
  }

  // filter_list_out6 - computed: true, optional: true, required: false
  private _filterListOut6?: string; 
  public get filterListOut6() {
    return this.getStringAttribute('filter_list_out6');
  }
  public set filterListOut6(value: string) {
    this._filterListOut6 = value;
  }
  public resetFilterListOut6() {
    this._filterListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOut6Input() {
    return this._filterListOut6;
  }

  // holdtime_timer - computed: true, optional: true, required: false
  private _holdtimeTimer?: number; 
  public get holdtimeTimer() {
    return this.getNumberAttribute('holdtime_timer');
  }
  public set holdtimeTimer(value: number) {
    this._holdtimeTimer = value;
  }
  public resetHoldtimeTimer() {
    this._holdtimeTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeTimerInput() {
    return this._holdtimeTimer;
  }

  // interface - computed: true, optional: true, required: false
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // keep_alive_timer - computed: true, optional: true, required: false
  private _keepAliveTimer?: number; 
  public get keepAliveTimer() {
    return this.getNumberAttribute('keep_alive_timer');
  }
  public set keepAliveTimer(value: number) {
    this._keepAliveTimer = value;
  }
  public resetKeepAliveTimer() {
    this._keepAliveTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimerInput() {
    return this._keepAliveTimer;
  }

  // maximum_prefix - computed: true, optional: true, required: false
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

  // maximum_prefix6 - computed: true, optional: true, required: false
  private _maximumPrefix6?: number; 
  public get maximumPrefix6() {
    return this.getNumberAttribute('maximum_prefix6');
  }
  public set maximumPrefix6(value: number) {
    this._maximumPrefix6 = value;
  }
  public resetMaximumPrefix6() {
    this._maximumPrefix6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefix6Input() {
    return this._maximumPrefix6;
  }

  // maximum_prefix_threshold - computed: true, optional: true, required: false
  private _maximumPrefixThreshold?: number; 
  public get maximumPrefixThreshold() {
    return this.getNumberAttribute('maximum_prefix_threshold');
  }
  public set maximumPrefixThreshold(value: number) {
    this._maximumPrefixThreshold = value;
  }
  public resetMaximumPrefixThreshold() {
    this._maximumPrefixThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresholdInput() {
    return this._maximumPrefixThreshold;
  }

  // maximum_prefix_threshold6 - computed: true, optional: true, required: false
  private _maximumPrefixThreshold6?: number; 
  public get maximumPrefixThreshold6() {
    return this.getNumberAttribute('maximum_prefix_threshold6');
  }
  public set maximumPrefixThreshold6(value: number) {
    this._maximumPrefixThreshold6 = value;
  }
  public resetMaximumPrefixThreshold6() {
    this._maximumPrefixThreshold6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThreshold6Input() {
    return this._maximumPrefixThreshold6;
  }

  // maximum_prefix_warning_only - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnly?: string; 
  public get maximumPrefixWarningOnly() {
    return this.getStringAttribute('maximum_prefix_warning_only');
  }
  public set maximumPrefixWarningOnly(value: string) {
    this._maximumPrefixWarningOnly = value;
  }
  public resetMaximumPrefixWarningOnly() {
    this._maximumPrefixWarningOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnlyInput() {
    return this._maximumPrefixWarningOnly;
  }

  // maximum_prefix_warning_only6 - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnly6?: string; 
  public get maximumPrefixWarningOnly6() {
    return this.getStringAttribute('maximum_prefix_warning_only6');
  }
  public set maximumPrefixWarningOnly6(value: string) {
    this._maximumPrefixWarningOnly6 = value;
  }
  public resetMaximumPrefixWarningOnly6() {
    this._maximumPrefixWarningOnly6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnly6Input() {
    return this._maximumPrefixWarningOnly6;
  }

  // next_hop_self - computed: true, optional: true, required: false
  private _nextHopSelf?: string; 
  public get nextHopSelf() {
    return this.getStringAttribute('next_hop_self');
  }
  public set nextHopSelf(value: string) {
    this._nextHopSelf = value;
  }
  public resetNextHopSelf() {
    this._nextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInput() {
    return this._nextHopSelf;
  }

  // next_hop_self6 - computed: true, optional: true, required: false
  private _nextHopSelf6?: string; 
  public get nextHopSelf6() {
    return this.getStringAttribute('next_hop_self6');
  }
  public set nextHopSelf6(value: string) {
    this._nextHopSelf6 = value;
  }
  public resetNextHopSelf6() {
    this._nextHopSelf6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelf6Input() {
    return this._nextHopSelf6;
  }

  // override_capability - computed: true, optional: true, required: false
  private _overrideCapability?: string; 
  public get overrideCapability() {
    return this.getStringAttribute('override_capability');
  }
  public set overrideCapability(value: string) {
    this._overrideCapability = value;
  }
  public resetOverrideCapability() {
    this._overrideCapability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideCapabilityInput() {
    return this._overrideCapability;
  }

  // passive - computed: true, optional: true, required: false
  private _passive?: string; 
  public get passive() {
    return this.getStringAttribute('passive');
  }
  public set passive(value: string) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // prefix_list_in - computed: true, optional: true, required: false
  private _prefixListIn?: string; 
  public get prefixListIn() {
    return this.getStringAttribute('prefix_list_in');
  }
  public set prefixListIn(value: string) {
    this._prefixListIn = value;
  }
  public resetPrefixListIn() {
    this._prefixListIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInInput() {
    return this._prefixListIn;
  }

  // prefix_list_in6 - computed: true, optional: true, required: false
  private _prefixListIn6?: string; 
  public get prefixListIn6() {
    return this.getStringAttribute('prefix_list_in6');
  }
  public set prefixListIn6(value: string) {
    this._prefixListIn6 = value;
  }
  public resetPrefixListIn6() {
    this._prefixListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIn6Input() {
    return this._prefixListIn6;
  }

  // prefix_list_out - computed: true, optional: true, required: false
  private _prefixListOut?: string; 
  public get prefixListOut() {
    return this.getStringAttribute('prefix_list_out');
  }
  public set prefixListOut(value: string) {
    this._prefixListOut = value;
  }
  public resetPrefixListOut() {
    this._prefixListOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOutInput() {
    return this._prefixListOut;
  }

  // prefix_list_out6 - computed: true, optional: true, required: false
  private _prefixListOut6?: string; 
  public get prefixListOut6() {
    return this.getStringAttribute('prefix_list_out6');
  }
  public set prefixListOut6(value: string) {
    this._prefixListOut6 = value;
  }
  public resetPrefixListOut6() {
    this._prefixListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOut6Input() {
    return this._prefixListOut6;
  }

  // remote_as - computed: true, optional: true, required: false
  private _remoteAs?: number; 
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }
  public set remoteAs(value: number) {
    this._remoteAs = value;
  }
  public resetRemoteAs() {
    this._remoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
  }

  // remove_private_as - computed: true, optional: true, required: false
  private _removePrivateAs?: string; 
  public get removePrivateAs() {
    return this.getStringAttribute('remove_private_as');
  }
  public set removePrivateAs(value: string) {
    this._removePrivateAs = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs;
  }

  // remove_private_as6 - computed: true, optional: true, required: false
  private _removePrivateAs6?: string; 
  public get removePrivateAs6() {
    return this.getStringAttribute('remove_private_as6');
  }
  public set removePrivateAs6(value: string) {
    this._removePrivateAs6 = value;
  }
  public resetRemovePrivateAs6() {
    this._removePrivateAs6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAs6Input() {
    return this._removePrivateAs6;
  }

  // route_map_in - computed: true, optional: true, required: false
  private _routeMapIn?: string; 
  public get routeMapIn() {
    return this.getStringAttribute('route_map_in');
  }
  public set routeMapIn(value: string) {
    this._routeMapIn = value;
  }
  public resetRouteMapIn() {
    this._routeMapIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInInput() {
    return this._routeMapIn;
  }

  // route_map_in6 - computed: true, optional: true, required: false
  private _routeMapIn6?: string; 
  public get routeMapIn6() {
    return this.getStringAttribute('route_map_in6');
  }
  public set routeMapIn6(value: string) {
    this._routeMapIn6 = value;
  }
  public resetRouteMapIn6() {
    this._routeMapIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapIn6Input() {
    return this._routeMapIn6;
  }

  // route_map_in_evpn - computed: true, optional: true, required: false
  private _routeMapInEvpn?: string; 
  public get routeMapInEvpn() {
    return this.getStringAttribute('route_map_in_evpn');
  }
  public set routeMapInEvpn(value: string) {
    this._routeMapInEvpn = value;
  }
  public resetRouteMapInEvpn() {
    this._routeMapInEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInEvpnInput() {
    return this._routeMapInEvpn;
  }

  // route_map_out - computed: true, optional: true, required: false
  private _routeMapOut?: string; 
  public get routeMapOut() {
    return this.getStringAttribute('route_map_out');
  }
  public set routeMapOut(value: string) {
    this._routeMapOut = value;
  }
  public resetRouteMapOut() {
    this._routeMapOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutInput() {
    return this._routeMapOut;
  }

  // route_map_out6 - computed: true, optional: true, required: false
  private _routeMapOut6?: string; 
  public get routeMapOut6() {
    return this.getStringAttribute('route_map_out6');
  }
  public set routeMapOut6(value: string) {
    this._routeMapOut6 = value;
  }
  public resetRouteMapOut6() {
    this._routeMapOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOut6Input() {
    return this._routeMapOut6;
  }

  // route_map_out_evpn - computed: true, optional: true, required: false
  private _routeMapOutEvpn?: string; 
  public get routeMapOutEvpn() {
    return this.getStringAttribute('route_map_out_evpn');
  }
  public set routeMapOutEvpn(value: string) {
    this._routeMapOutEvpn = value;
  }
  public resetRouteMapOutEvpn() {
    this._routeMapOutEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutEvpnInput() {
    return this._routeMapOutEvpn;
  }

  // route_reflector_client - computed: true, optional: true, required: false
  private _routeReflectorClient?: string; 
  public get routeReflectorClient() {
    return this.getStringAttribute('route_reflector_client');
  }
  public set routeReflectorClient(value: string) {
    this._routeReflectorClient = value;
  }
  public resetRouteReflectorClient() {
    this._routeReflectorClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientInput() {
    return this._routeReflectorClient;
  }

  // route_reflector_client6 - computed: true, optional: true, required: false
  private _routeReflectorClient6?: string; 
  public get routeReflectorClient6() {
    return this.getStringAttribute('route_reflector_client6');
  }
  public set routeReflectorClient6(value: string) {
    this._routeReflectorClient6 = value;
  }
  public resetRouteReflectorClient6() {
    this._routeReflectorClient6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClient6Input() {
    return this._routeReflectorClient6;
  }

  // route_reflector_client_evpn - computed: true, optional: true, required: false
  private _routeReflectorClientEvpn?: string; 
  public get routeReflectorClientEvpn() {
    return this.getStringAttribute('route_reflector_client_evpn');
  }
  public set routeReflectorClientEvpn(value: string) {
    this._routeReflectorClientEvpn = value;
  }
  public resetRouteReflectorClientEvpn() {
    this._routeReflectorClientEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientEvpnInput() {
    return this._routeReflectorClientEvpn;
  }

  // route_server_client - computed: true, optional: true, required: false
  private _routeServerClient?: string; 
  public get routeServerClient() {
    return this.getStringAttribute('route_server_client');
  }
  public set routeServerClient(value: string) {
    this._routeServerClient = value;
  }
  public resetRouteServerClient() {
    this._routeServerClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClientInput() {
    return this._routeServerClient;
  }

  // route_server_client6 - computed: true, optional: true, required: false
  private _routeServerClient6?: string; 
  public get routeServerClient6() {
    return this.getStringAttribute('route_server_client6');
  }
  public set routeServerClient6(value: string) {
    this._routeServerClient6 = value;
  }
  public resetRouteServerClient6() {
    this._routeServerClient6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClient6Input() {
    return this._routeServerClient6;
  }

  // send_community - computed: true, optional: true, required: false
  private _sendCommunity?: string; 
  public get sendCommunity() {
    return this.getStringAttribute('send_community');
  }
  public set sendCommunity(value: string) {
    this._sendCommunity = value;
  }
  public resetSendCommunity() {
    this._sendCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity;
  }

  // send_community6 - computed: true, optional: true, required: false
  private _sendCommunity6?: string; 
  public get sendCommunity6() {
    return this.getStringAttribute('send_community6');
  }
  public set sendCommunity6(value: string) {
    this._sendCommunity6 = value;
  }
  public resetSendCommunity6() {
    this._sendCommunity6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunity6Input() {
    return this._sendCommunity6;
  }

  // shutdown - computed: true, optional: true, required: false
  private _shutdown?: string; 
  public get shutdown() {
    return this.getStringAttribute('shutdown');
  }
  public set shutdown(value: string) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // soft_reconfiguration - computed: true, optional: true, required: false
  private _softReconfiguration?: string; 
  public get softReconfiguration() {
    return this.getStringAttribute('soft_reconfiguration');
  }
  public set softReconfiguration(value: string) {
    this._softReconfiguration = value;
  }
  public resetSoftReconfiguration() {
    this._softReconfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationInput() {
    return this._softReconfiguration;
  }

  // soft_reconfiguration6 - computed: true, optional: true, required: false
  private _softReconfiguration6?: string; 
  public get softReconfiguration6() {
    return this.getStringAttribute('soft_reconfiguration6');
  }
  public set softReconfiguration6(value: string) {
    this._softReconfiguration6 = value;
  }
  public resetSoftReconfiguration6() {
    this._softReconfiguration6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfiguration6Input() {
    return this._softReconfiguration6;
  }

  // soft_reconfiguration_evpn - computed: true, optional: true, required: false
  private _softReconfigurationEvpn?: string; 
  public get softReconfigurationEvpn() {
    return this.getStringAttribute('soft_reconfiguration_evpn');
  }
  public set softReconfigurationEvpn(value: string) {
    this._softReconfigurationEvpn = value;
  }
  public resetSoftReconfigurationEvpn() {
    this._softReconfigurationEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationEvpnInput() {
    return this._softReconfigurationEvpn;
  }

  // strict_capability_match - computed: true, optional: true, required: false
  private _strictCapabilityMatch?: string; 
  public get strictCapabilityMatch() {
    return this.getStringAttribute('strict_capability_match');
  }
  public set strictCapabilityMatch(value: string) {
    this._strictCapabilityMatch = value;
  }
  public resetStrictCapabilityMatch() {
    this._strictCapabilityMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictCapabilityMatchInput() {
    return this._strictCapabilityMatch;
  }

  // unsuppress_map - computed: true, optional: true, required: false
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

  // unsuppress_map6 - computed: true, optional: true, required: false
  private _unsuppressMap6?: string; 
  public get unsuppressMap6() {
    return this.getStringAttribute('unsuppress_map6');
  }
  public set unsuppressMap6(value: string) {
    this._unsuppressMap6 = value;
  }
  public resetUnsuppressMap6() {
    this._unsuppressMap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsuppressMap6Input() {
    return this._unsuppressMap6;
  }

  // update_source - computed: true, optional: true, required: false
  private _updateSource?: string; 
  public get updateSource() {
    return this.getStringAttribute('update_source');
  }
  public set updateSource(value: string) {
    this._updateSource = value;
  }
  public resetUpdateSource() {
    this._updateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceInput() {
    return this._updateSource;
  }

  // weight - computed: true, optional: true, required: false
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

export class RouterBgpNeighborList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighbor[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborOutputReference {
    return new RouterBgpNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborGroupInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#interface_name RouterBgp#interface_name}
  */
  readonly interfaceName?: string;
}

export function routerBgpNeighborGroupInterfaceToTerraform(struct?: RouterBgpNeighborGroupInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function routerBgpNeighborGroupInterfaceToHclTerraform(struct?: RouterBgpNeighborGroupInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborGroupInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborGroupInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborGroupInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
    }
  }

  // interface_name - computed: true, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }
}

export class RouterBgpNeighborGroupInterfaceList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborGroupInterface[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborGroupInterfaceOutputReference {
    return new RouterBgpNeighborGroupInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#activate RouterBgp#activate}
  */
  readonly activate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#activate6 RouterBgp#activate6}
  */
  readonly activate6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#activate_evpn RouterBgp#activate_evpn}
  */
  readonly activateEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#advertisement_interval RouterBgp#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#allowas_in RouterBgp#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#allowas_in6 RouterBgp#allowas_in6}
  */
  readonly allowasIn6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#allowas_in_enable RouterBgp#allowas_in_enable}
  */
  readonly allowasInEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#allowas_in_enable6 RouterBgp#allowas_in_enable6}
  */
  readonly allowasInEnable6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#allowas_in_enable_evpn RouterBgp#allowas_in_enable_evpn}
  */
  readonly allowasInEnableEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#as_override RouterBgp#as_override}
  */
  readonly asOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#as_override6 RouterBgp#as_override6}
  */
  readonly asOverride6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#attribute_unchanged RouterBgp#attribute_unchanged}
  */
  readonly attributeUnchanged?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#attribute_unchanged6 RouterBgp#attribute_unchanged6}
  */
  readonly attributeUnchanged6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#attribute_unchanged_evpn RouterBgp#attribute_unchanged_evpn}
  */
  readonly attributeUnchangedEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#bfd RouterBgp#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#capability_default_originate RouterBgp#capability_default_originate}
  */
  readonly capabilityDefaultOriginate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#capability_default_originate6 RouterBgp#capability_default_originate6}
  */
  readonly capabilityDefaultOriginate6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#capability_dynamic RouterBgp#capability_dynamic}
  */
  readonly capabilityDynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#capability_extended_nexthop RouterBgp#capability_extended_nexthop}
  */
  readonly capabilityExtendedNexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#capability_orf RouterBgp#capability_orf}
  */
  readonly capabilityOrf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#capability_orf6 RouterBgp#capability_orf6}
  */
  readonly capabilityOrf6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#connect_timer RouterBgp#connect_timer}
  */
  readonly connectTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#default_originate_routemap RouterBgp#default_originate_routemap}
  */
  readonly defaultOriginateRoutemap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#default_originate_routemap6 RouterBgp#default_originate_routemap6}
  */
  readonly defaultOriginateRoutemap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#description RouterBgp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#distribute_list_in RouterBgp#distribute_list_in}
  */
  readonly distributeListIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#distribute_list_in6 RouterBgp#distribute_list_in6}
  */
  readonly distributeListIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#distribute_list_out RouterBgp#distribute_list_out}
  */
  readonly distributeListOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#distribute_list_out6 RouterBgp#distribute_list_out6}
  */
  readonly distributeListOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#dont_capability_negotiate RouterBgp#dont_capability_negotiate}
  */
  readonly dontCapabilityNegotiate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#ebgp_enforce_multihop RouterBgp#ebgp_enforce_multihop}
  */
  readonly ebgpEnforceMultihop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#ebgp_multihop_ttl RouterBgp#ebgp_multihop_ttl}
  */
  readonly ebgpMultihopTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#ebgp_ttl_security_hops RouterBgp#ebgp_ttl_security_hops}
  */
  readonly ebgpTtlSecurityHops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#enforce_first_as RouterBgp#enforce_first_as}
  */
  readonly enforceFirstAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#filter_list_in RouterBgp#filter_list_in}
  */
  readonly filterListIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#filter_list_in6 RouterBgp#filter_list_in6}
  */
  readonly filterListIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#filter_list_out RouterBgp#filter_list_out}
  */
  readonly filterListOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#filter_list_out6 RouterBgp#filter_list_out6}
  */
  readonly filterListOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#holdtime_timer RouterBgp#holdtime_timer}
  */
  readonly holdtimeTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#keep_alive_timer RouterBgp#keep_alive_timer}
  */
  readonly keepAliveTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#maximum_prefix RouterBgp#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#maximum_prefix6 RouterBgp#maximum_prefix6}
  */
  readonly maximumPrefix6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#maximum_prefix_threshold RouterBgp#maximum_prefix_threshold}
  */
  readonly maximumPrefixThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#maximum_prefix_threshold6 RouterBgp#maximum_prefix_threshold6}
  */
  readonly maximumPrefixThreshold6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#maximum_prefix_warning_only RouterBgp#maximum_prefix_warning_only}
  */
  readonly maximumPrefixWarningOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#maximum_prefix_warning_only6 RouterBgp#maximum_prefix_warning_only6}
  */
  readonly maximumPrefixWarningOnly6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#name RouterBgp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#next_hop_self RouterBgp#next_hop_self}
  */
  readonly nextHopSelf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#next_hop_self6 RouterBgp#next_hop_self6}
  */
  readonly nextHopSelf6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#override_capability RouterBgp#override_capability}
  */
  readonly overrideCapability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#passive RouterBgp#passive}
  */
  readonly passive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#password RouterBgp#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#prefix_list_in RouterBgp#prefix_list_in}
  */
  readonly prefixListIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#prefix_list_in6 RouterBgp#prefix_list_in6}
  */
  readonly prefixListIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#prefix_list_out RouterBgp#prefix_list_out}
  */
  readonly prefixListOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#prefix_list_out6 RouterBgp#prefix_list_out6}
  */
  readonly prefixListOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#remote_as RouterBgp#remote_as}
  */
  readonly remoteAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#remove_private_as RouterBgp#remove_private_as}
  */
  readonly removePrivateAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#remove_private_as6 RouterBgp#remove_private_as6}
  */
  readonly removePrivateAs6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map_in RouterBgp#route_map_in}
  */
  readonly routeMapIn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map_in6 RouterBgp#route_map_in6}
  */
  readonly routeMapIn6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map_in_evpn RouterBgp#route_map_in_evpn}
  */
  readonly routeMapInEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map_out RouterBgp#route_map_out}
  */
  readonly routeMapOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map_out6 RouterBgp#route_map_out6}
  */
  readonly routeMapOut6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map_out_evpn RouterBgp#route_map_out_evpn}
  */
  readonly routeMapOutEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_reflector_client RouterBgp#route_reflector_client}
  */
  readonly routeReflectorClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_reflector_client6 RouterBgp#route_reflector_client6}
  */
  readonly routeReflectorClient6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_reflector_client_evpn RouterBgp#route_reflector_client_evpn}
  */
  readonly routeReflectorClientEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_server_client RouterBgp#route_server_client}
  */
  readonly routeServerClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_server_client6 RouterBgp#route_server_client6}
  */
  readonly routeServerClient6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#send_community RouterBgp#send_community}
  */
  readonly sendCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#send_community6 RouterBgp#send_community6}
  */
  readonly sendCommunity6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#shutdown RouterBgp#shutdown}
  */
  readonly shutdown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#soft_reconfiguration RouterBgp#soft_reconfiguration}
  */
  readonly softReconfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#soft_reconfiguration6 RouterBgp#soft_reconfiguration6}
  */
  readonly softReconfiguration6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#soft_reconfiguration_evpn RouterBgp#soft_reconfiguration_evpn}
  */
  readonly softReconfigurationEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#strict_capability_match RouterBgp#strict_capability_match}
  */
  readonly strictCapabilityMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#unsuppress_map RouterBgp#unsuppress_map}
  */
  readonly unsuppressMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#unsuppress_map6 RouterBgp#unsuppress_map6}
  */
  readonly unsuppressMap6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#update_source RouterBgp#update_source}
  */
  readonly updateSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#weight RouterBgp#weight}
  */
  readonly weight?: number;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#interface RouterBgp#interface}
  */
  readonly interface?: RouterBgpNeighborGroupInterface[] | cdktf.IResolvable;
}

export function routerBgpNeighborGroupToTerraform(struct?: RouterBgpNeighborGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.stringToTerraform(struct!.activate),
    activate6: cdktf.stringToTerraform(struct!.activate6),
    activate_evpn: cdktf.stringToTerraform(struct!.activateEvpn),
    advertisement_interval: cdktf.numberToTerraform(struct!.advertisementInterval),
    allowas_in: cdktf.numberToTerraform(struct!.allowasIn),
    allowas_in6: cdktf.numberToTerraform(struct!.allowasIn6),
    allowas_in_enable: cdktf.stringToTerraform(struct!.allowasInEnable),
    allowas_in_enable6: cdktf.stringToTerraform(struct!.allowasInEnable6),
    allowas_in_enable_evpn: cdktf.stringToTerraform(struct!.allowasInEnableEvpn),
    as_override: cdktf.stringToTerraform(struct!.asOverride),
    as_override6: cdktf.stringToTerraform(struct!.asOverride6),
    attribute_unchanged: cdktf.stringToTerraform(struct!.attributeUnchanged),
    attribute_unchanged6: cdktf.stringToTerraform(struct!.attributeUnchanged6),
    attribute_unchanged_evpn: cdktf.stringToTerraform(struct!.attributeUnchangedEvpn),
    bfd: cdktf.stringToTerraform(struct!.bfd),
    capability_default_originate: cdktf.stringToTerraform(struct!.capabilityDefaultOriginate),
    capability_default_originate6: cdktf.stringToTerraform(struct!.capabilityDefaultOriginate6),
    capability_dynamic: cdktf.stringToTerraform(struct!.capabilityDynamic),
    capability_extended_nexthop: cdktf.stringToTerraform(struct!.capabilityExtendedNexthop),
    capability_orf: cdktf.stringToTerraform(struct!.capabilityOrf),
    capability_orf6: cdktf.stringToTerraform(struct!.capabilityOrf6),
    connect_timer: cdktf.numberToTerraform(struct!.connectTimer),
    default_originate_routemap: cdktf.stringToTerraform(struct!.defaultOriginateRoutemap),
    default_originate_routemap6: cdktf.stringToTerraform(struct!.defaultOriginateRoutemap6),
    description: cdktf.stringToTerraform(struct!.description),
    distribute_list_in: cdktf.stringToTerraform(struct!.distributeListIn),
    distribute_list_in6: cdktf.stringToTerraform(struct!.distributeListIn6),
    distribute_list_out: cdktf.stringToTerraform(struct!.distributeListOut),
    distribute_list_out6: cdktf.stringToTerraform(struct!.distributeListOut6),
    dont_capability_negotiate: cdktf.stringToTerraform(struct!.dontCapabilityNegotiate),
    ebgp_enforce_multihop: cdktf.stringToTerraform(struct!.ebgpEnforceMultihop),
    ebgp_multihop_ttl: cdktf.numberToTerraform(struct!.ebgpMultihopTtl),
    ebgp_ttl_security_hops: cdktf.numberToTerraform(struct!.ebgpTtlSecurityHops),
    enforce_first_as: cdktf.stringToTerraform(struct!.enforceFirstAs),
    filter_list_in: cdktf.stringToTerraform(struct!.filterListIn),
    filter_list_in6: cdktf.stringToTerraform(struct!.filterListIn6),
    filter_list_out: cdktf.stringToTerraform(struct!.filterListOut),
    filter_list_out6: cdktf.stringToTerraform(struct!.filterListOut6),
    holdtime_timer: cdktf.numberToTerraform(struct!.holdtimeTimer),
    keep_alive_timer: cdktf.numberToTerraform(struct!.keepAliveTimer),
    maximum_prefix: cdktf.numberToTerraform(struct!.maximumPrefix),
    maximum_prefix6: cdktf.numberToTerraform(struct!.maximumPrefix6),
    maximum_prefix_threshold: cdktf.numberToTerraform(struct!.maximumPrefixThreshold),
    maximum_prefix_threshold6: cdktf.numberToTerraform(struct!.maximumPrefixThreshold6),
    maximum_prefix_warning_only: cdktf.stringToTerraform(struct!.maximumPrefixWarningOnly),
    maximum_prefix_warning_only6: cdktf.stringToTerraform(struct!.maximumPrefixWarningOnly6),
    name: cdktf.stringToTerraform(struct!.name),
    next_hop_self: cdktf.stringToTerraform(struct!.nextHopSelf),
    next_hop_self6: cdktf.stringToTerraform(struct!.nextHopSelf6),
    override_capability: cdktf.stringToTerraform(struct!.overrideCapability),
    passive: cdktf.stringToTerraform(struct!.passive),
    password: cdktf.stringToTerraform(struct!.password),
    prefix_list_in: cdktf.stringToTerraform(struct!.prefixListIn),
    prefix_list_in6: cdktf.stringToTerraform(struct!.prefixListIn6),
    prefix_list_out: cdktf.stringToTerraform(struct!.prefixListOut),
    prefix_list_out6: cdktf.stringToTerraform(struct!.prefixListOut6),
    remote_as: cdktf.stringToTerraform(struct!.remoteAs),
    remove_private_as: cdktf.stringToTerraform(struct!.removePrivateAs),
    remove_private_as6: cdktf.stringToTerraform(struct!.removePrivateAs6),
    route_map_in: cdktf.stringToTerraform(struct!.routeMapIn),
    route_map_in6: cdktf.stringToTerraform(struct!.routeMapIn6),
    route_map_in_evpn: cdktf.stringToTerraform(struct!.routeMapInEvpn),
    route_map_out: cdktf.stringToTerraform(struct!.routeMapOut),
    route_map_out6: cdktf.stringToTerraform(struct!.routeMapOut6),
    route_map_out_evpn: cdktf.stringToTerraform(struct!.routeMapOutEvpn),
    route_reflector_client: cdktf.stringToTerraform(struct!.routeReflectorClient),
    route_reflector_client6: cdktf.stringToTerraform(struct!.routeReflectorClient6),
    route_reflector_client_evpn: cdktf.stringToTerraform(struct!.routeReflectorClientEvpn),
    route_server_client: cdktf.stringToTerraform(struct!.routeServerClient),
    route_server_client6: cdktf.stringToTerraform(struct!.routeServerClient6),
    send_community: cdktf.stringToTerraform(struct!.sendCommunity),
    send_community6: cdktf.stringToTerraform(struct!.sendCommunity6),
    shutdown: cdktf.stringToTerraform(struct!.shutdown),
    soft_reconfiguration: cdktf.stringToTerraform(struct!.softReconfiguration),
    soft_reconfiguration6: cdktf.stringToTerraform(struct!.softReconfiguration6),
    soft_reconfiguration_evpn: cdktf.stringToTerraform(struct!.softReconfigurationEvpn),
    strict_capability_match: cdktf.stringToTerraform(struct!.strictCapabilityMatch),
    unsuppress_map: cdktf.stringToTerraform(struct!.unsuppressMap),
    unsuppress_map6: cdktf.stringToTerraform(struct!.unsuppressMap6),
    update_source: cdktf.stringToTerraform(struct!.updateSource),
    weight: cdktf.numberToTerraform(struct!.weight),
    interface: cdktf.listMapper(routerBgpNeighborGroupInterfaceToTerraform, true)(struct!.interface),
  }
}


export function routerBgpNeighborGroupToHclTerraform(struct?: RouterBgpNeighborGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate: {
      value: cdktf.stringToHclTerraform(struct!.activate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    activate6: {
      value: cdktf.stringToHclTerraform(struct!.activate6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    activate_evpn: {
      value: cdktf.stringToHclTerraform(struct!.activateEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advertisement_interval: {
      value: cdktf.numberToHclTerraform(struct!.advertisementInterval),
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
    allowas_in6: {
      value: cdktf.numberToHclTerraform(struct!.allowasIn6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_enable: {
      value: cdktf.stringToHclTerraform(struct!.allowasInEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowas_in_enable6: {
      value: cdktf.stringToHclTerraform(struct!.allowasInEnable6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowas_in_enable_evpn: {
      value: cdktf.stringToHclTerraform(struct!.allowasInEnableEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_override: {
      value: cdktf.stringToHclTerraform(struct!.asOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_override6: {
      value: cdktf.stringToHclTerraform(struct!.asOverride6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_unchanged: {
      value: cdktf.stringToHclTerraform(struct!.attributeUnchanged),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_unchanged6: {
      value: cdktf.stringToHclTerraform(struct!.attributeUnchanged6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_unchanged_evpn: {
      value: cdktf.stringToHclTerraform(struct!.attributeUnchangedEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd: {
      value: cdktf.stringToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_default_originate: {
      value: cdktf.stringToHclTerraform(struct!.capabilityDefaultOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_default_originate6: {
      value: cdktf.stringToHclTerraform(struct!.capabilityDefaultOriginate6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_dynamic: {
      value: cdktf.stringToHclTerraform(struct!.capabilityDynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_extended_nexthop: {
      value: cdktf.stringToHclTerraform(struct!.capabilityExtendedNexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_orf: {
      value: cdktf.stringToHclTerraform(struct!.capabilityOrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_orf6: {
      value: cdktf.stringToHclTerraform(struct!.capabilityOrf6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_timer: {
      value: cdktf.numberToHclTerraform(struct!.connectTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_originate_routemap: {
      value: cdktf.stringToHclTerraform(struct!.defaultOriginateRoutemap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_originate_routemap6: {
      value: cdktf.stringToHclTerraform(struct!.defaultOriginateRoutemap6),
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
    distribute_list_in: {
      value: cdktf.stringToHclTerraform(struct!.distributeListIn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribute_list_in6: {
      value: cdktf.stringToHclTerraform(struct!.distributeListIn6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribute_list_out: {
      value: cdktf.stringToHclTerraform(struct!.distributeListOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribute_list_out6: {
      value: cdktf.stringToHclTerraform(struct!.distributeListOut6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dont_capability_negotiate: {
      value: cdktf.stringToHclTerraform(struct!.dontCapabilityNegotiate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebgp_enforce_multihop: {
      value: cdktf.stringToHclTerraform(struct!.ebgpEnforceMultihop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ebgp_multihop_ttl: {
      value: cdktf.numberToHclTerraform(struct!.ebgpMultihopTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp_ttl_security_hops: {
      value: cdktf.numberToHclTerraform(struct!.ebgpTtlSecurityHops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enforce_first_as: {
      value: cdktf.stringToHclTerraform(struct!.enforceFirstAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_list_in: {
      value: cdktf.stringToHclTerraform(struct!.filterListIn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_list_in6: {
      value: cdktf.stringToHclTerraform(struct!.filterListIn6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_list_out: {
      value: cdktf.stringToHclTerraform(struct!.filterListOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_list_out6: {
      value: cdktf.stringToHclTerraform(struct!.filterListOut6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    holdtime_timer: {
      value: cdktf.numberToHclTerraform(struct!.holdtimeTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_alive_timer: {
      value: cdktf.numberToHclTerraform(struct!.keepAliveTimer),
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
    maximum_prefix6: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefix6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_threshold6: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThreshold6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_warning_only: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixWarningOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_prefix_warning_only6: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixWarningOnly6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self6: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelf6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_capability: {
      value: cdktf.stringToHclTerraform(struct!.overrideCapability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passive: {
      value: cdktf.stringToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_in: {
      value: cdktf.stringToHclTerraform(struct!.prefixListIn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_in6: {
      value: cdktf.stringToHclTerraform(struct!.prefixListIn6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_out: {
      value: cdktf.stringToHclTerraform(struct!.prefixListOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_out6: {
      value: cdktf.stringToHclTerraform(struct!.prefixListOut6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_as: {
      value: cdktf.stringToHclTerraform(struct!.remoteAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as: {
      value: cdktf.stringToHclTerraform(struct!.removePrivateAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as6: {
      value: cdktf.stringToHclTerraform(struct!.removePrivateAs6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_in: {
      value: cdktf.stringToHclTerraform(struct!.routeMapIn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_in6: {
      value: cdktf.stringToHclTerraform(struct!.routeMapIn6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_in_evpn: {
      value: cdktf.stringToHclTerraform(struct!.routeMapInEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_out: {
      value: cdktf.stringToHclTerraform(struct!.routeMapOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_out6: {
      value: cdktf.stringToHclTerraform(struct!.routeMapOut6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_out_evpn: {
      value: cdktf.stringToHclTerraform(struct!.routeMapOutEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_reflector_client: {
      value: cdktf.stringToHclTerraform(struct!.routeReflectorClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_reflector_client6: {
      value: cdktf.stringToHclTerraform(struct!.routeReflectorClient6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_reflector_client_evpn: {
      value: cdktf.stringToHclTerraform(struct!.routeReflectorClientEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_server_client: {
      value: cdktf.stringToHclTerraform(struct!.routeServerClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_server_client6: {
      value: cdktf.stringToHclTerraform(struct!.routeServerClient6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community6: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunity6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shutdown: {
      value: cdktf.stringToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_reconfiguration: {
      value: cdktf.stringToHclTerraform(struct!.softReconfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_reconfiguration6: {
      value: cdktf.stringToHclTerraform(struct!.softReconfiguration6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_reconfiguration_evpn: {
      value: cdktf.stringToHclTerraform(struct!.softReconfigurationEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict_capability_match: {
      value: cdktf.stringToHclTerraform(struct!.strictCapabilityMatch),
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
    unsuppress_map6: {
      value: cdktf.stringToHclTerraform(struct!.unsuppressMap6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_source: {
      value: cdktf.stringToHclTerraform(struct!.updateSource),
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
    interface: {
      value: cdktf.listMapperHcl(routerBgpNeighborGroupInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborGroupInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._activate6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate6 = this._activate6;
    }
    if (this._activateEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateEvpn = this._activateEvpn;
    }
    if (this._advertisementInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisementInterval = this._advertisementInterval;
    }
    if (this._allowasIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn = this._allowasIn;
    }
    if (this._allowasIn6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn6 = this._allowasIn6;
    }
    if (this._allowasInEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInEnable = this._allowasInEnable;
    }
    if (this._allowasInEnable6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInEnable6 = this._allowasInEnable6;
    }
    if (this._allowasInEnableEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInEnableEvpn = this._allowasInEnableEvpn;
    }
    if (this._asOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverride = this._asOverride;
    }
    if (this._asOverride6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverride6 = this._asOverride6;
    }
    if (this._attributeUnchanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeUnchanged = this._attributeUnchanged;
    }
    if (this._attributeUnchanged6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeUnchanged6 = this._attributeUnchanged6;
    }
    if (this._attributeUnchangedEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeUnchangedEvpn = this._attributeUnchangedEvpn;
    }
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._capabilityDefaultOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityDefaultOriginate = this._capabilityDefaultOriginate;
    }
    if (this._capabilityDefaultOriginate6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityDefaultOriginate6 = this._capabilityDefaultOriginate6;
    }
    if (this._capabilityDynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityDynamic = this._capabilityDynamic;
    }
    if (this._capabilityExtendedNexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityExtendedNexthop = this._capabilityExtendedNexthop;
    }
    if (this._capabilityOrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityOrf = this._capabilityOrf;
    }
    if (this._capabilityOrf6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityOrf6 = this._capabilityOrf6;
    }
    if (this._connectTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimer = this._connectTimer;
    }
    if (this._defaultOriginateRoutemap !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginateRoutemap = this._defaultOriginateRoutemap;
    }
    if (this._defaultOriginateRoutemap6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginateRoutemap6 = this._defaultOriginateRoutemap6;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._distributeListIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListIn = this._distributeListIn;
    }
    if (this._distributeListIn6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListIn6 = this._distributeListIn6;
    }
    if (this._distributeListOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListOut = this._distributeListOut;
    }
    if (this._distributeListOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListOut6 = this._distributeListOut6;
    }
    if (this._dontCapabilityNegotiate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dontCapabilityNegotiate = this._dontCapabilityNegotiate;
    }
    if (this._ebgpEnforceMultihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpEnforceMultihop = this._ebgpEnforceMultihop;
    }
    if (this._ebgpMultihopTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpMultihopTtl = this._ebgpMultihopTtl;
    }
    if (this._ebgpTtlSecurityHops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgpTtlSecurityHops = this._ebgpTtlSecurityHops;
    }
    if (this._enforceFirstAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceFirstAs = this._enforceFirstAs;
    }
    if (this._filterListIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListIn = this._filterListIn;
    }
    if (this._filterListIn6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListIn6 = this._filterListIn6;
    }
    if (this._filterListOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListOut = this._filterListOut;
    }
    if (this._filterListOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListOut6 = this._filterListOut6;
    }
    if (this._holdtimeTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdtimeTimer = this._holdtimeTimer;
    }
    if (this._keepAliveTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveTimer = this._keepAliveTimer;
    }
    if (this._maximumPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix;
    }
    if (this._maximumPrefix6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix6 = this._maximumPrefix6;
    }
    if (this._maximumPrefixThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThreshold = this._maximumPrefixThreshold;
    }
    if (this._maximumPrefixThreshold6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThreshold6 = this._maximumPrefixThreshold6;
    }
    if (this._maximumPrefixWarningOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixWarningOnly = this._maximumPrefixWarningOnly;
    }
    if (this._maximumPrefixWarningOnly6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixWarningOnly6 = this._maximumPrefixWarningOnly6;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._nextHopSelf6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf6 = this._nextHopSelf6;
    }
    if (this._overrideCapability !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideCapability = this._overrideCapability;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._prefixListIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListIn = this._prefixListIn;
    }
    if (this._prefixListIn6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListIn6 = this._prefixListIn6;
    }
    if (this._prefixListOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListOut = this._prefixListOut;
    }
    if (this._prefixListOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListOut6 = this._prefixListOut6;
    }
    if (this._remoteAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAs = this._remoteAs;
    }
    if (this._removePrivateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs;
    }
    if (this._removePrivateAs6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs6 = this._removePrivateAs6;
    }
    if (this._routeMapIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapIn = this._routeMapIn;
    }
    if (this._routeMapIn6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapIn6 = this._routeMapIn6;
    }
    if (this._routeMapInEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapInEvpn = this._routeMapInEvpn;
    }
    if (this._routeMapOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOut = this._routeMapOut;
    }
    if (this._routeMapOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOut6 = this._routeMapOut6;
    }
    if (this._routeMapOutEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutEvpn = this._routeMapOutEvpn;
    }
    if (this._routeReflectorClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeReflectorClient = this._routeReflectorClient;
    }
    if (this._routeReflectorClient6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeReflectorClient6 = this._routeReflectorClient6;
    }
    if (this._routeReflectorClientEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeReflectorClientEvpn = this._routeReflectorClientEvpn;
    }
    if (this._routeServerClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerClient = this._routeServerClient;
    }
    if (this._routeServerClient6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerClient6 = this._routeServerClient6;
    }
    if (this._sendCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity = this._sendCommunity;
    }
    if (this._sendCommunity6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity6 = this._sendCommunity6;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._softReconfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.softReconfiguration = this._softReconfiguration;
    }
    if (this._softReconfiguration6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.softReconfiguration6 = this._softReconfiguration6;
    }
    if (this._softReconfigurationEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.softReconfigurationEvpn = this._softReconfigurationEvpn;
    }
    if (this._strictCapabilityMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictCapabilityMatch = this._strictCapabilityMatch;
    }
    if (this._unsuppressMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppressMap = this._unsuppressMap;
    }
    if (this._unsuppressMap6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsuppressMap6 = this._unsuppressMap6;
    }
    if (this._updateSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSource = this._updateSource;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._activate6 = undefined;
      this._activateEvpn = undefined;
      this._advertisementInterval = undefined;
      this._allowasIn = undefined;
      this._allowasIn6 = undefined;
      this._allowasInEnable = undefined;
      this._allowasInEnable6 = undefined;
      this._allowasInEnableEvpn = undefined;
      this._asOverride = undefined;
      this._asOverride6 = undefined;
      this._attributeUnchanged = undefined;
      this._attributeUnchanged6 = undefined;
      this._attributeUnchangedEvpn = undefined;
      this._bfd = undefined;
      this._capabilityDefaultOriginate = undefined;
      this._capabilityDefaultOriginate6 = undefined;
      this._capabilityDynamic = undefined;
      this._capabilityExtendedNexthop = undefined;
      this._capabilityOrf = undefined;
      this._capabilityOrf6 = undefined;
      this._connectTimer = undefined;
      this._defaultOriginateRoutemap = undefined;
      this._defaultOriginateRoutemap6 = undefined;
      this._description = undefined;
      this._distributeListIn = undefined;
      this._distributeListIn6 = undefined;
      this._distributeListOut = undefined;
      this._distributeListOut6 = undefined;
      this._dontCapabilityNegotiate = undefined;
      this._ebgpEnforceMultihop = undefined;
      this._ebgpMultihopTtl = undefined;
      this._ebgpTtlSecurityHops = undefined;
      this._enforceFirstAs = undefined;
      this._filterListIn = undefined;
      this._filterListIn6 = undefined;
      this._filterListOut = undefined;
      this._filterListOut6 = undefined;
      this._holdtimeTimer = undefined;
      this._keepAliveTimer = undefined;
      this._maximumPrefix = undefined;
      this._maximumPrefix6 = undefined;
      this._maximumPrefixThreshold = undefined;
      this._maximumPrefixThreshold6 = undefined;
      this._maximumPrefixWarningOnly = undefined;
      this._maximumPrefixWarningOnly6 = undefined;
      this._name = undefined;
      this._nextHopSelf = undefined;
      this._nextHopSelf6 = undefined;
      this._overrideCapability = undefined;
      this._passive = undefined;
      this._password = undefined;
      this._prefixListIn = undefined;
      this._prefixListIn6 = undefined;
      this._prefixListOut = undefined;
      this._prefixListOut6 = undefined;
      this._remoteAs = undefined;
      this._removePrivateAs = undefined;
      this._removePrivateAs6 = undefined;
      this._routeMapIn = undefined;
      this._routeMapIn6 = undefined;
      this._routeMapInEvpn = undefined;
      this._routeMapOut = undefined;
      this._routeMapOut6 = undefined;
      this._routeMapOutEvpn = undefined;
      this._routeReflectorClient = undefined;
      this._routeReflectorClient6 = undefined;
      this._routeReflectorClientEvpn = undefined;
      this._routeServerClient = undefined;
      this._routeServerClient6 = undefined;
      this._sendCommunity = undefined;
      this._sendCommunity6 = undefined;
      this._shutdown = undefined;
      this._softReconfiguration = undefined;
      this._softReconfiguration6 = undefined;
      this._softReconfigurationEvpn = undefined;
      this._strictCapabilityMatch = undefined;
      this._unsuppressMap = undefined;
      this._unsuppressMap6 = undefined;
      this._updateSource = undefined;
      this._weight = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activate = value.activate;
      this._activate6 = value.activate6;
      this._activateEvpn = value.activateEvpn;
      this._advertisementInterval = value.advertisementInterval;
      this._allowasIn = value.allowasIn;
      this._allowasIn6 = value.allowasIn6;
      this._allowasInEnable = value.allowasInEnable;
      this._allowasInEnable6 = value.allowasInEnable6;
      this._allowasInEnableEvpn = value.allowasInEnableEvpn;
      this._asOverride = value.asOverride;
      this._asOverride6 = value.asOverride6;
      this._attributeUnchanged = value.attributeUnchanged;
      this._attributeUnchanged6 = value.attributeUnchanged6;
      this._attributeUnchangedEvpn = value.attributeUnchangedEvpn;
      this._bfd = value.bfd;
      this._capabilityDefaultOriginate = value.capabilityDefaultOriginate;
      this._capabilityDefaultOriginate6 = value.capabilityDefaultOriginate6;
      this._capabilityDynamic = value.capabilityDynamic;
      this._capabilityExtendedNexthop = value.capabilityExtendedNexthop;
      this._capabilityOrf = value.capabilityOrf;
      this._capabilityOrf6 = value.capabilityOrf6;
      this._connectTimer = value.connectTimer;
      this._defaultOriginateRoutemap = value.defaultOriginateRoutemap;
      this._defaultOriginateRoutemap6 = value.defaultOriginateRoutemap6;
      this._description = value.description;
      this._distributeListIn = value.distributeListIn;
      this._distributeListIn6 = value.distributeListIn6;
      this._distributeListOut = value.distributeListOut;
      this._distributeListOut6 = value.distributeListOut6;
      this._dontCapabilityNegotiate = value.dontCapabilityNegotiate;
      this._ebgpEnforceMultihop = value.ebgpEnforceMultihop;
      this._ebgpMultihopTtl = value.ebgpMultihopTtl;
      this._ebgpTtlSecurityHops = value.ebgpTtlSecurityHops;
      this._enforceFirstAs = value.enforceFirstAs;
      this._filterListIn = value.filterListIn;
      this._filterListIn6 = value.filterListIn6;
      this._filterListOut = value.filterListOut;
      this._filterListOut6 = value.filterListOut6;
      this._holdtimeTimer = value.holdtimeTimer;
      this._keepAliveTimer = value.keepAliveTimer;
      this._maximumPrefix = value.maximumPrefix;
      this._maximumPrefix6 = value.maximumPrefix6;
      this._maximumPrefixThreshold = value.maximumPrefixThreshold;
      this._maximumPrefixThreshold6 = value.maximumPrefixThreshold6;
      this._maximumPrefixWarningOnly = value.maximumPrefixWarningOnly;
      this._maximumPrefixWarningOnly6 = value.maximumPrefixWarningOnly6;
      this._name = value.name;
      this._nextHopSelf = value.nextHopSelf;
      this._nextHopSelf6 = value.nextHopSelf6;
      this._overrideCapability = value.overrideCapability;
      this._passive = value.passive;
      this._password = value.password;
      this._prefixListIn = value.prefixListIn;
      this._prefixListIn6 = value.prefixListIn6;
      this._prefixListOut = value.prefixListOut;
      this._prefixListOut6 = value.prefixListOut6;
      this._remoteAs = value.remoteAs;
      this._removePrivateAs = value.removePrivateAs;
      this._removePrivateAs6 = value.removePrivateAs6;
      this._routeMapIn = value.routeMapIn;
      this._routeMapIn6 = value.routeMapIn6;
      this._routeMapInEvpn = value.routeMapInEvpn;
      this._routeMapOut = value.routeMapOut;
      this._routeMapOut6 = value.routeMapOut6;
      this._routeMapOutEvpn = value.routeMapOutEvpn;
      this._routeReflectorClient = value.routeReflectorClient;
      this._routeReflectorClient6 = value.routeReflectorClient6;
      this._routeReflectorClientEvpn = value.routeReflectorClientEvpn;
      this._routeServerClient = value.routeServerClient;
      this._routeServerClient6 = value.routeServerClient6;
      this._sendCommunity = value.sendCommunity;
      this._sendCommunity6 = value.sendCommunity6;
      this._shutdown = value.shutdown;
      this._softReconfiguration = value.softReconfiguration;
      this._softReconfiguration6 = value.softReconfiguration6;
      this._softReconfigurationEvpn = value.softReconfigurationEvpn;
      this._strictCapabilityMatch = value.strictCapabilityMatch;
      this._unsuppressMap = value.unsuppressMap;
      this._unsuppressMap6 = value.unsuppressMap6;
      this._updateSource = value.updateSource;
      this._weight = value.weight;
      this._interface.internalValue = value.interface;
    }
  }

  // activate - computed: true, optional: true, required: false
  private _activate?: string; 
  public get activate() {
    return this.getStringAttribute('activate');
  }
  public set activate(value: string) {
    this._activate = value;
  }
  public resetActivate() {
    this._activate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInput() {
    return this._activate;
  }

  // activate6 - computed: true, optional: true, required: false
  private _activate6?: string; 
  public get activate6() {
    return this.getStringAttribute('activate6');
  }
  public set activate6(value: string) {
    this._activate6 = value;
  }
  public resetActivate6() {
    this._activate6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activate6Input() {
    return this._activate6;
  }

  // activate_evpn - computed: true, optional: true, required: false
  private _activateEvpn?: string; 
  public get activateEvpn() {
    return this.getStringAttribute('activate_evpn');
  }
  public set activateEvpn(value: string) {
    this._activateEvpn = value;
  }
  public resetActivateEvpn() {
    this._activateEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateEvpnInput() {
    return this._activateEvpn;
  }

  // advertisement_interval - computed: true, optional: true, required: false
  private _advertisementInterval?: number; 
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
  }
  public set advertisementInterval(value: number) {
    this._advertisementInterval = value;
  }
  public resetAdvertisementInterval() {
    this._advertisementInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementIntervalInput() {
    return this._advertisementInterval;
  }

  // allowas_in - computed: true, optional: true, required: false
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

  // allowas_in6 - computed: true, optional: true, required: false
  private _allowasIn6?: number; 
  public get allowasIn6() {
    return this.getNumberAttribute('allowas_in6');
  }
  public set allowasIn6(value: number) {
    this._allowasIn6 = value;
  }
  public resetAllowasIn6() {
    this._allowasIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasIn6Input() {
    return this._allowasIn6;
  }

  // allowas_in_enable - computed: true, optional: true, required: false
  private _allowasInEnable?: string; 
  public get allowasInEnable() {
    return this.getStringAttribute('allowas_in_enable');
  }
  public set allowasInEnable(value: string) {
    this._allowasInEnable = value;
  }
  public resetAllowasInEnable() {
    this._allowasInEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnableInput() {
    return this._allowasInEnable;
  }

  // allowas_in_enable6 - computed: true, optional: true, required: false
  private _allowasInEnable6?: string; 
  public get allowasInEnable6() {
    return this.getStringAttribute('allowas_in_enable6');
  }
  public set allowasInEnable6(value: string) {
    this._allowasInEnable6 = value;
  }
  public resetAllowasInEnable6() {
    this._allowasInEnable6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnable6Input() {
    return this._allowasInEnable6;
  }

  // allowas_in_enable_evpn - computed: true, optional: true, required: false
  private _allowasInEnableEvpn?: string; 
  public get allowasInEnableEvpn() {
    return this.getStringAttribute('allowas_in_enable_evpn');
  }
  public set allowasInEnableEvpn(value: string) {
    this._allowasInEnableEvpn = value;
  }
  public resetAllowasInEnableEvpn() {
    this._allowasInEnableEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnableEvpnInput() {
    return this._allowasInEnableEvpn;
  }

  // as_override - computed: true, optional: true, required: false
  private _asOverride?: string; 
  public get asOverride() {
    return this.getStringAttribute('as_override');
  }
  public set asOverride(value: string) {
    this._asOverride = value;
  }
  public resetAsOverride() {
    this._asOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideInput() {
    return this._asOverride;
  }

  // as_override6 - computed: true, optional: true, required: false
  private _asOverride6?: string; 
  public get asOverride6() {
    return this.getStringAttribute('as_override6');
  }
  public set asOverride6(value: string) {
    this._asOverride6 = value;
  }
  public resetAsOverride6() {
    this._asOverride6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverride6Input() {
    return this._asOverride6;
  }

  // attribute_unchanged - computed: true, optional: true, required: false
  private _attributeUnchanged?: string; 
  public get attributeUnchanged() {
    return this.getStringAttribute('attribute_unchanged');
  }
  public set attributeUnchanged(value: string) {
    this._attributeUnchanged = value;
  }
  public resetAttributeUnchanged() {
    this._attributeUnchanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchangedInput() {
    return this._attributeUnchanged;
  }

  // attribute_unchanged6 - computed: true, optional: true, required: false
  private _attributeUnchanged6?: string; 
  public get attributeUnchanged6() {
    return this.getStringAttribute('attribute_unchanged6');
  }
  public set attributeUnchanged6(value: string) {
    this._attributeUnchanged6 = value;
  }
  public resetAttributeUnchanged6() {
    this._attributeUnchanged6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchanged6Input() {
    return this._attributeUnchanged6;
  }

  // attribute_unchanged_evpn - computed: true, optional: true, required: false
  private _attributeUnchangedEvpn?: string; 
  public get attributeUnchangedEvpn() {
    return this.getStringAttribute('attribute_unchanged_evpn');
  }
  public set attributeUnchangedEvpn(value: string) {
    this._attributeUnchangedEvpn = value;
  }
  public resetAttributeUnchangedEvpn() {
    this._attributeUnchangedEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchangedEvpnInput() {
    return this._attributeUnchangedEvpn;
  }

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // capability_default_originate - computed: true, optional: true, required: false
  private _capabilityDefaultOriginate?: string; 
  public get capabilityDefaultOriginate() {
    return this.getStringAttribute('capability_default_originate');
  }
  public set capabilityDefaultOriginate(value: string) {
    this._capabilityDefaultOriginate = value;
  }
  public resetCapabilityDefaultOriginate() {
    this._capabilityDefaultOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityDefaultOriginateInput() {
    return this._capabilityDefaultOriginate;
  }

  // capability_default_originate6 - computed: true, optional: true, required: false
  private _capabilityDefaultOriginate6?: string; 
  public get capabilityDefaultOriginate6() {
    return this.getStringAttribute('capability_default_originate6');
  }
  public set capabilityDefaultOriginate6(value: string) {
    this._capabilityDefaultOriginate6 = value;
  }
  public resetCapabilityDefaultOriginate6() {
    this._capabilityDefaultOriginate6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityDefaultOriginate6Input() {
    return this._capabilityDefaultOriginate6;
  }

  // capability_dynamic - computed: true, optional: true, required: false
  private _capabilityDynamic?: string; 
  public get capabilityDynamic() {
    return this.getStringAttribute('capability_dynamic');
  }
  public set capabilityDynamic(value: string) {
    this._capabilityDynamic = value;
  }
  public resetCapabilityDynamic() {
    this._capabilityDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityDynamicInput() {
    return this._capabilityDynamic;
  }

  // capability_extended_nexthop - computed: true, optional: true, required: false
  private _capabilityExtendedNexthop?: string; 
  public get capabilityExtendedNexthop() {
    return this.getStringAttribute('capability_extended_nexthop');
  }
  public set capabilityExtendedNexthop(value: string) {
    this._capabilityExtendedNexthop = value;
  }
  public resetCapabilityExtendedNexthop() {
    this._capabilityExtendedNexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityExtendedNexthopInput() {
    return this._capabilityExtendedNexthop;
  }

  // capability_orf - computed: true, optional: true, required: false
  private _capabilityOrf?: string; 
  public get capabilityOrf() {
    return this.getStringAttribute('capability_orf');
  }
  public set capabilityOrf(value: string) {
    this._capabilityOrf = value;
  }
  public resetCapabilityOrf() {
    this._capabilityOrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityOrfInput() {
    return this._capabilityOrf;
  }

  // capability_orf6 - computed: true, optional: true, required: false
  private _capabilityOrf6?: string; 
  public get capabilityOrf6() {
    return this.getStringAttribute('capability_orf6');
  }
  public set capabilityOrf6(value: string) {
    this._capabilityOrf6 = value;
  }
  public resetCapabilityOrf6() {
    this._capabilityOrf6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityOrf6Input() {
    return this._capabilityOrf6;
  }

  // connect_timer - computed: true, optional: true, required: false
  private _connectTimer?: number; 
  public get connectTimer() {
    return this.getNumberAttribute('connect_timer');
  }
  public set connectTimer(value: number) {
    this._connectTimer = value;
  }
  public resetConnectTimer() {
    this._connectTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimerInput() {
    return this._connectTimer;
  }

  // default_originate_routemap - computed: true, optional: true, required: false
  private _defaultOriginateRoutemap?: string; 
  public get defaultOriginateRoutemap() {
    return this.getStringAttribute('default_originate_routemap');
  }
  public set defaultOriginateRoutemap(value: string) {
    this._defaultOriginateRoutemap = value;
  }
  public resetDefaultOriginateRoutemap() {
    this._defaultOriginateRoutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateRoutemapInput() {
    return this._defaultOriginateRoutemap;
  }

  // default_originate_routemap6 - computed: true, optional: true, required: false
  private _defaultOriginateRoutemap6?: string; 
  public get defaultOriginateRoutemap6() {
    return this.getStringAttribute('default_originate_routemap6');
  }
  public set defaultOriginateRoutemap6(value: string) {
    this._defaultOriginateRoutemap6 = value;
  }
  public resetDefaultOriginateRoutemap6() {
    this._defaultOriginateRoutemap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateRoutemap6Input() {
    return this._defaultOriginateRoutemap6;
  }

  // description - computed: true, optional: true, required: false
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

  // distribute_list_in - computed: true, optional: true, required: false
  private _distributeListIn?: string; 
  public get distributeListIn() {
    return this.getStringAttribute('distribute_list_in');
  }
  public set distributeListIn(value: string) {
    this._distributeListIn = value;
  }
  public resetDistributeListIn() {
    this._distributeListIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInInput() {
    return this._distributeListIn;
  }

  // distribute_list_in6 - computed: true, optional: true, required: false
  private _distributeListIn6?: string; 
  public get distributeListIn6() {
    return this.getStringAttribute('distribute_list_in6');
  }
  public set distributeListIn6(value: string) {
    this._distributeListIn6 = value;
  }
  public resetDistributeListIn6() {
    this._distributeListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListIn6Input() {
    return this._distributeListIn6;
  }

  // distribute_list_out - computed: true, optional: true, required: false
  private _distributeListOut?: string; 
  public get distributeListOut() {
    return this.getStringAttribute('distribute_list_out');
  }
  public set distributeListOut(value: string) {
    this._distributeListOut = value;
  }
  public resetDistributeListOut() {
    this._distributeListOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOutInput() {
    return this._distributeListOut;
  }

  // distribute_list_out6 - computed: true, optional: true, required: false
  private _distributeListOut6?: string; 
  public get distributeListOut6() {
    return this.getStringAttribute('distribute_list_out6');
  }
  public set distributeListOut6(value: string) {
    this._distributeListOut6 = value;
  }
  public resetDistributeListOut6() {
    this._distributeListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOut6Input() {
    return this._distributeListOut6;
  }

  // dont_capability_negotiate - computed: true, optional: true, required: false
  private _dontCapabilityNegotiate?: string; 
  public get dontCapabilityNegotiate() {
    return this.getStringAttribute('dont_capability_negotiate');
  }
  public set dontCapabilityNegotiate(value: string) {
    this._dontCapabilityNegotiate = value;
  }
  public resetDontCapabilityNegotiate() {
    this._dontCapabilityNegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dontCapabilityNegotiateInput() {
    return this._dontCapabilityNegotiate;
  }

  // ebgp_enforce_multihop - computed: true, optional: true, required: false
  private _ebgpEnforceMultihop?: string; 
  public get ebgpEnforceMultihop() {
    return this.getStringAttribute('ebgp_enforce_multihop');
  }
  public set ebgpEnforceMultihop(value: string) {
    this._ebgpEnforceMultihop = value;
  }
  public resetEbgpEnforceMultihop() {
    this._ebgpEnforceMultihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpEnforceMultihopInput() {
    return this._ebgpEnforceMultihop;
  }

  // ebgp_multihop_ttl - computed: true, optional: true, required: false
  private _ebgpMultihopTtl?: number; 
  public get ebgpMultihopTtl() {
    return this.getNumberAttribute('ebgp_multihop_ttl');
  }
  public set ebgpMultihopTtl(value: number) {
    this._ebgpMultihopTtl = value;
  }
  public resetEbgpMultihopTtl() {
    this._ebgpMultihopTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopTtlInput() {
    return this._ebgpMultihopTtl;
  }

  // ebgp_ttl_security_hops - computed: true, optional: true, required: false
  private _ebgpTtlSecurityHops?: number; 
  public get ebgpTtlSecurityHops() {
    return this.getNumberAttribute('ebgp_ttl_security_hops');
  }
  public set ebgpTtlSecurityHops(value: number) {
    this._ebgpTtlSecurityHops = value;
  }
  public resetEbgpTtlSecurityHops() {
    this._ebgpTtlSecurityHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpTtlSecurityHopsInput() {
    return this._ebgpTtlSecurityHops;
  }

  // enforce_first_as - computed: true, optional: true, required: false
  private _enforceFirstAs?: string; 
  public get enforceFirstAs() {
    return this.getStringAttribute('enforce_first_as');
  }
  public set enforceFirstAs(value: string) {
    this._enforceFirstAs = value;
  }
  public resetEnforceFirstAs() {
    this._enforceFirstAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceFirstAsInput() {
    return this._enforceFirstAs;
  }

  // filter_list_in - computed: true, optional: true, required: false
  private _filterListIn?: string; 
  public get filterListIn() {
    return this.getStringAttribute('filter_list_in');
  }
  public set filterListIn(value: string) {
    this._filterListIn = value;
  }
  public resetFilterListIn() {
    this._filterListIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInInput() {
    return this._filterListIn;
  }

  // filter_list_in6 - computed: true, optional: true, required: false
  private _filterListIn6?: string; 
  public get filterListIn6() {
    return this.getStringAttribute('filter_list_in6');
  }
  public set filterListIn6(value: string) {
    this._filterListIn6 = value;
  }
  public resetFilterListIn6() {
    this._filterListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListIn6Input() {
    return this._filterListIn6;
  }

  // filter_list_out - computed: true, optional: true, required: false
  private _filterListOut?: string; 
  public get filterListOut() {
    return this.getStringAttribute('filter_list_out');
  }
  public set filterListOut(value: string) {
    this._filterListOut = value;
  }
  public resetFilterListOut() {
    this._filterListOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOutInput() {
    return this._filterListOut;
  }

  // filter_list_out6 - computed: true, optional: true, required: false
  private _filterListOut6?: string; 
  public get filterListOut6() {
    return this.getStringAttribute('filter_list_out6');
  }
  public set filterListOut6(value: string) {
    this._filterListOut6 = value;
  }
  public resetFilterListOut6() {
    this._filterListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOut6Input() {
    return this._filterListOut6;
  }

  // holdtime_timer - computed: true, optional: true, required: false
  private _holdtimeTimer?: number; 
  public get holdtimeTimer() {
    return this.getNumberAttribute('holdtime_timer');
  }
  public set holdtimeTimer(value: number) {
    this._holdtimeTimer = value;
  }
  public resetHoldtimeTimer() {
    this._holdtimeTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeTimerInput() {
    return this._holdtimeTimer;
  }

  // keep_alive_timer - computed: true, optional: true, required: false
  private _keepAliveTimer?: number; 
  public get keepAliveTimer() {
    return this.getNumberAttribute('keep_alive_timer');
  }
  public set keepAliveTimer(value: number) {
    this._keepAliveTimer = value;
  }
  public resetKeepAliveTimer() {
    this._keepAliveTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimerInput() {
    return this._keepAliveTimer;
  }

  // maximum_prefix - computed: true, optional: true, required: false
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

  // maximum_prefix6 - computed: true, optional: true, required: false
  private _maximumPrefix6?: number; 
  public get maximumPrefix6() {
    return this.getNumberAttribute('maximum_prefix6');
  }
  public set maximumPrefix6(value: number) {
    this._maximumPrefix6 = value;
  }
  public resetMaximumPrefix6() {
    this._maximumPrefix6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefix6Input() {
    return this._maximumPrefix6;
  }

  // maximum_prefix_threshold - computed: true, optional: true, required: false
  private _maximumPrefixThreshold?: number; 
  public get maximumPrefixThreshold() {
    return this.getNumberAttribute('maximum_prefix_threshold');
  }
  public set maximumPrefixThreshold(value: number) {
    this._maximumPrefixThreshold = value;
  }
  public resetMaximumPrefixThreshold() {
    this._maximumPrefixThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresholdInput() {
    return this._maximumPrefixThreshold;
  }

  // maximum_prefix_threshold6 - computed: true, optional: true, required: false
  private _maximumPrefixThreshold6?: number; 
  public get maximumPrefixThreshold6() {
    return this.getNumberAttribute('maximum_prefix_threshold6');
  }
  public set maximumPrefixThreshold6(value: number) {
    this._maximumPrefixThreshold6 = value;
  }
  public resetMaximumPrefixThreshold6() {
    this._maximumPrefixThreshold6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThreshold6Input() {
    return this._maximumPrefixThreshold6;
  }

  // maximum_prefix_warning_only - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnly?: string; 
  public get maximumPrefixWarningOnly() {
    return this.getStringAttribute('maximum_prefix_warning_only');
  }
  public set maximumPrefixWarningOnly(value: string) {
    this._maximumPrefixWarningOnly = value;
  }
  public resetMaximumPrefixWarningOnly() {
    this._maximumPrefixWarningOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnlyInput() {
    return this._maximumPrefixWarningOnly;
  }

  // maximum_prefix_warning_only6 - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnly6?: string; 
  public get maximumPrefixWarningOnly6() {
    return this.getStringAttribute('maximum_prefix_warning_only6');
  }
  public set maximumPrefixWarningOnly6(value: string) {
    this._maximumPrefixWarningOnly6 = value;
  }
  public resetMaximumPrefixWarningOnly6() {
    this._maximumPrefixWarningOnly6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnly6Input() {
    return this._maximumPrefixWarningOnly6;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // next_hop_self - computed: true, optional: true, required: false
  private _nextHopSelf?: string; 
  public get nextHopSelf() {
    return this.getStringAttribute('next_hop_self');
  }
  public set nextHopSelf(value: string) {
    this._nextHopSelf = value;
  }
  public resetNextHopSelf() {
    this._nextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInput() {
    return this._nextHopSelf;
  }

  // next_hop_self6 - computed: true, optional: true, required: false
  private _nextHopSelf6?: string; 
  public get nextHopSelf6() {
    return this.getStringAttribute('next_hop_self6');
  }
  public set nextHopSelf6(value: string) {
    this._nextHopSelf6 = value;
  }
  public resetNextHopSelf6() {
    this._nextHopSelf6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelf6Input() {
    return this._nextHopSelf6;
  }

  // override_capability - computed: true, optional: true, required: false
  private _overrideCapability?: string; 
  public get overrideCapability() {
    return this.getStringAttribute('override_capability');
  }
  public set overrideCapability(value: string) {
    this._overrideCapability = value;
  }
  public resetOverrideCapability() {
    this._overrideCapability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideCapabilityInput() {
    return this._overrideCapability;
  }

  // passive - computed: true, optional: true, required: false
  private _passive?: string; 
  public get passive() {
    return this.getStringAttribute('passive');
  }
  public set passive(value: string) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // prefix_list_in - computed: true, optional: true, required: false
  private _prefixListIn?: string; 
  public get prefixListIn() {
    return this.getStringAttribute('prefix_list_in');
  }
  public set prefixListIn(value: string) {
    this._prefixListIn = value;
  }
  public resetPrefixListIn() {
    this._prefixListIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInInput() {
    return this._prefixListIn;
  }

  // prefix_list_in6 - computed: true, optional: true, required: false
  private _prefixListIn6?: string; 
  public get prefixListIn6() {
    return this.getStringAttribute('prefix_list_in6');
  }
  public set prefixListIn6(value: string) {
    this._prefixListIn6 = value;
  }
  public resetPrefixListIn6() {
    this._prefixListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIn6Input() {
    return this._prefixListIn6;
  }

  // prefix_list_out - computed: true, optional: true, required: false
  private _prefixListOut?: string; 
  public get prefixListOut() {
    return this.getStringAttribute('prefix_list_out');
  }
  public set prefixListOut(value: string) {
    this._prefixListOut = value;
  }
  public resetPrefixListOut() {
    this._prefixListOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOutInput() {
    return this._prefixListOut;
  }

  // prefix_list_out6 - computed: true, optional: true, required: false
  private _prefixListOut6?: string; 
  public get prefixListOut6() {
    return this.getStringAttribute('prefix_list_out6');
  }
  public set prefixListOut6(value: string) {
    this._prefixListOut6 = value;
  }
  public resetPrefixListOut6() {
    this._prefixListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOut6Input() {
    return this._prefixListOut6;
  }

  // remote_as - computed: true, optional: true, required: false
  private _remoteAs?: string; 
  public get remoteAs() {
    return this.getStringAttribute('remote_as');
  }
  public set remoteAs(value: string) {
    this._remoteAs = value;
  }
  public resetRemoteAs() {
    this._remoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
  }

  // remove_private_as - computed: true, optional: true, required: false
  private _removePrivateAs?: string; 
  public get removePrivateAs() {
    return this.getStringAttribute('remove_private_as');
  }
  public set removePrivateAs(value: string) {
    this._removePrivateAs = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs;
  }

  // remove_private_as6 - computed: true, optional: true, required: false
  private _removePrivateAs6?: string; 
  public get removePrivateAs6() {
    return this.getStringAttribute('remove_private_as6');
  }
  public set removePrivateAs6(value: string) {
    this._removePrivateAs6 = value;
  }
  public resetRemovePrivateAs6() {
    this._removePrivateAs6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAs6Input() {
    return this._removePrivateAs6;
  }

  // route_map_in - computed: true, optional: true, required: false
  private _routeMapIn?: string; 
  public get routeMapIn() {
    return this.getStringAttribute('route_map_in');
  }
  public set routeMapIn(value: string) {
    this._routeMapIn = value;
  }
  public resetRouteMapIn() {
    this._routeMapIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInInput() {
    return this._routeMapIn;
  }

  // route_map_in6 - computed: true, optional: true, required: false
  private _routeMapIn6?: string; 
  public get routeMapIn6() {
    return this.getStringAttribute('route_map_in6');
  }
  public set routeMapIn6(value: string) {
    this._routeMapIn6 = value;
  }
  public resetRouteMapIn6() {
    this._routeMapIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapIn6Input() {
    return this._routeMapIn6;
  }

  // route_map_in_evpn - computed: true, optional: true, required: false
  private _routeMapInEvpn?: string; 
  public get routeMapInEvpn() {
    return this.getStringAttribute('route_map_in_evpn');
  }
  public set routeMapInEvpn(value: string) {
    this._routeMapInEvpn = value;
  }
  public resetRouteMapInEvpn() {
    this._routeMapInEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInEvpnInput() {
    return this._routeMapInEvpn;
  }

  // route_map_out - computed: true, optional: true, required: false
  private _routeMapOut?: string; 
  public get routeMapOut() {
    return this.getStringAttribute('route_map_out');
  }
  public set routeMapOut(value: string) {
    this._routeMapOut = value;
  }
  public resetRouteMapOut() {
    this._routeMapOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutInput() {
    return this._routeMapOut;
  }

  // route_map_out6 - computed: true, optional: true, required: false
  private _routeMapOut6?: string; 
  public get routeMapOut6() {
    return this.getStringAttribute('route_map_out6');
  }
  public set routeMapOut6(value: string) {
    this._routeMapOut6 = value;
  }
  public resetRouteMapOut6() {
    this._routeMapOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOut6Input() {
    return this._routeMapOut6;
  }

  // route_map_out_evpn - computed: true, optional: true, required: false
  private _routeMapOutEvpn?: string; 
  public get routeMapOutEvpn() {
    return this.getStringAttribute('route_map_out_evpn');
  }
  public set routeMapOutEvpn(value: string) {
    this._routeMapOutEvpn = value;
  }
  public resetRouteMapOutEvpn() {
    this._routeMapOutEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutEvpnInput() {
    return this._routeMapOutEvpn;
  }

  // route_reflector_client - computed: true, optional: true, required: false
  private _routeReflectorClient?: string; 
  public get routeReflectorClient() {
    return this.getStringAttribute('route_reflector_client');
  }
  public set routeReflectorClient(value: string) {
    this._routeReflectorClient = value;
  }
  public resetRouteReflectorClient() {
    this._routeReflectorClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientInput() {
    return this._routeReflectorClient;
  }

  // route_reflector_client6 - computed: true, optional: true, required: false
  private _routeReflectorClient6?: string; 
  public get routeReflectorClient6() {
    return this.getStringAttribute('route_reflector_client6');
  }
  public set routeReflectorClient6(value: string) {
    this._routeReflectorClient6 = value;
  }
  public resetRouteReflectorClient6() {
    this._routeReflectorClient6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClient6Input() {
    return this._routeReflectorClient6;
  }

  // route_reflector_client_evpn - computed: true, optional: true, required: false
  private _routeReflectorClientEvpn?: string; 
  public get routeReflectorClientEvpn() {
    return this.getStringAttribute('route_reflector_client_evpn');
  }
  public set routeReflectorClientEvpn(value: string) {
    this._routeReflectorClientEvpn = value;
  }
  public resetRouteReflectorClientEvpn() {
    this._routeReflectorClientEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientEvpnInput() {
    return this._routeReflectorClientEvpn;
  }

  // route_server_client - computed: true, optional: true, required: false
  private _routeServerClient?: string; 
  public get routeServerClient() {
    return this.getStringAttribute('route_server_client');
  }
  public set routeServerClient(value: string) {
    this._routeServerClient = value;
  }
  public resetRouteServerClient() {
    this._routeServerClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClientInput() {
    return this._routeServerClient;
  }

  // route_server_client6 - computed: true, optional: true, required: false
  private _routeServerClient6?: string; 
  public get routeServerClient6() {
    return this.getStringAttribute('route_server_client6');
  }
  public set routeServerClient6(value: string) {
    this._routeServerClient6 = value;
  }
  public resetRouteServerClient6() {
    this._routeServerClient6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClient6Input() {
    return this._routeServerClient6;
  }

  // send_community - computed: true, optional: true, required: false
  private _sendCommunity?: string; 
  public get sendCommunity() {
    return this.getStringAttribute('send_community');
  }
  public set sendCommunity(value: string) {
    this._sendCommunity = value;
  }
  public resetSendCommunity() {
    this._sendCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity;
  }

  // send_community6 - computed: true, optional: true, required: false
  private _sendCommunity6?: string; 
  public get sendCommunity6() {
    return this.getStringAttribute('send_community6');
  }
  public set sendCommunity6(value: string) {
    this._sendCommunity6 = value;
  }
  public resetSendCommunity6() {
    this._sendCommunity6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunity6Input() {
    return this._sendCommunity6;
  }

  // shutdown - computed: true, optional: true, required: false
  private _shutdown?: string; 
  public get shutdown() {
    return this.getStringAttribute('shutdown');
  }
  public set shutdown(value: string) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // soft_reconfiguration - computed: true, optional: true, required: false
  private _softReconfiguration?: string; 
  public get softReconfiguration() {
    return this.getStringAttribute('soft_reconfiguration');
  }
  public set softReconfiguration(value: string) {
    this._softReconfiguration = value;
  }
  public resetSoftReconfiguration() {
    this._softReconfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationInput() {
    return this._softReconfiguration;
  }

  // soft_reconfiguration6 - computed: true, optional: true, required: false
  private _softReconfiguration6?: string; 
  public get softReconfiguration6() {
    return this.getStringAttribute('soft_reconfiguration6');
  }
  public set softReconfiguration6(value: string) {
    this._softReconfiguration6 = value;
  }
  public resetSoftReconfiguration6() {
    this._softReconfiguration6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfiguration6Input() {
    return this._softReconfiguration6;
  }

  // soft_reconfiguration_evpn - computed: true, optional: true, required: false
  private _softReconfigurationEvpn?: string; 
  public get softReconfigurationEvpn() {
    return this.getStringAttribute('soft_reconfiguration_evpn');
  }
  public set softReconfigurationEvpn(value: string) {
    this._softReconfigurationEvpn = value;
  }
  public resetSoftReconfigurationEvpn() {
    this._softReconfigurationEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationEvpnInput() {
    return this._softReconfigurationEvpn;
  }

  // strict_capability_match - computed: true, optional: true, required: false
  private _strictCapabilityMatch?: string; 
  public get strictCapabilityMatch() {
    return this.getStringAttribute('strict_capability_match');
  }
  public set strictCapabilityMatch(value: string) {
    this._strictCapabilityMatch = value;
  }
  public resetStrictCapabilityMatch() {
    this._strictCapabilityMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictCapabilityMatchInput() {
    return this._strictCapabilityMatch;
  }

  // unsuppress_map - computed: true, optional: true, required: false
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

  // unsuppress_map6 - computed: true, optional: true, required: false
  private _unsuppressMap6?: string; 
  public get unsuppressMap6() {
    return this.getStringAttribute('unsuppress_map6');
  }
  public set unsuppressMap6(value: string) {
    this._unsuppressMap6 = value;
  }
  public resetUnsuppressMap6() {
    this._unsuppressMap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsuppressMap6Input() {
    return this._unsuppressMap6;
  }

  // update_source - computed: true, optional: true, required: false
  private _updateSource?: string; 
  public get updateSource() {
    return this.getStringAttribute('update_source');
  }
  public set updateSource(value: string) {
    this._updateSource = value;
  }
  public resetUpdateSource() {
    this._updateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceInput() {
    return this._updateSource;
  }

  // weight - computed: true, optional: true, required: false
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

  // interface - computed: false, optional: true, required: false
  private _interface = new RouterBgpNeighborGroupInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: RouterBgpNeighborGroupInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class RouterBgpNeighborGroupList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborGroup[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborGroupOutputReference {
    return new RouterBgpNeighborGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#backdoor RouterBgp#backdoor}
  */
  readonly backdoor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#prefix RouterBgp#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpNetworkToTerraform(struct?: RouterBgpNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backdoor: cdktf.stringToTerraform(struct!.backdoor),
    id: cdktf.numberToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpNetworkToHclTerraform(struct?: RouterBgpNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backdoor: {
      value: cdktf.stringToHclTerraform(struct!.backdoor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backdoor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backdoor = this._backdoor;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backdoor = undefined;
      this._id = undefined;
      this._prefix = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backdoor = value.backdoor;
      this._id = value.id;
      this._prefix = value.prefix;
      this._routeMap = value.routeMap;
    }
  }

  // backdoor - computed: true, optional: true, required: false
  private _backdoor?: string; 
  public get backdoor() {
    return this.getStringAttribute('backdoor');
  }
  public set backdoor(value: string) {
    this._backdoor = value;
  }
  public resetBackdoor() {
    this._backdoor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backdoorInput() {
    return this._backdoor;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // route_map - computed: true, optional: true, required: false
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

export class RouterBgpNetworkList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNetwork[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNetworkOutputReference {
    return new RouterBgpNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNetwork6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#prefix6 RouterBgp#prefix6}
  */
  readonly prefix6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
}

export function routerBgpNetwork6ToTerraform(struct?: RouterBgpNetwork6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    prefix6: cdktf.stringToTerraform(struct!.prefix6),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function routerBgpNetwork6ToHclTerraform(struct?: RouterBgpNetwork6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix6: {
      value: cdktf.stringToHclTerraform(struct!.prefix6),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNetwork6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNetwork6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix6 = this._prefix6;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNetwork6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._prefix6 = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._prefix6 = value.prefix6;
      this._routeMap = value.routeMap;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // prefix6 - computed: true, optional: true, required: false
  private _prefix6?: string; 
  public get prefix6() {
    return this.getStringAttribute('prefix6');
  }
  public set prefix6(value: string) {
    this._prefix6 = value;
  }
  public resetPrefix6() {
    this._prefix6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefix6Input() {
    return this._prefix6;
  }

  // route_map - computed: true, optional: true, required: false
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

export class RouterBgpNetwork6List extends cdktf.ComplexList {
  public internalValue? : RouterBgpNetwork6[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNetwork6OutputReference {
    return new RouterBgpNetwork6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpRedistribute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#name RouterBgp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#status RouterBgp#status}
  */
  readonly status?: string;
}

export function routerBgpRedistributeToTerraform(struct?: RouterBgpRedistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function routerBgpRedistributeToHclTerraform(struct?: RouterBgpRedistribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpRedistribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._routeMap = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._routeMap = value.routeMap;
      this._status = value.status;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // route_map - computed: true, optional: true, required: false
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class RouterBgpRedistributeList extends cdktf.ComplexList {
  public internalValue? : RouterBgpRedistribute[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpRedistributeOutputReference {
    return new RouterBgpRedistributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpRedistribute6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#name RouterBgp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#status RouterBgp#status}
  */
  readonly status?: string;
}

export function routerBgpRedistribute6ToTerraform(struct?: RouterBgpRedistribute6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function routerBgpRedistribute6ToHclTerraform(struct?: RouterBgpRedistribute6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpRedistribute6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpRedistribute6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpRedistribute6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._routeMap = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._routeMap = value.routeMap;
      this._status = value.status;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // route_map - computed: true, optional: true, required: false
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class RouterBgpRedistribute6List extends cdktf.ComplexList {
  public internalValue? : RouterBgpRedistribute6[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpRedistribute6OutputReference {
    return new RouterBgpRedistribute6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp fortiswitch_router_bgp}
*/
export class RouterBgp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_router_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgp to import
  * @param importFromId The id of the existing RouterBgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_router_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_bgp fortiswitch_router_bgp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterBgpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_router_bgp',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alwaysCompareMed = config.alwaysCompareMed;
    this._as = config.as;
    this._bestpathAsPathIgnore = config.bestpathAsPathIgnore;
    this._bestpathAspathMultipathRelax = config.bestpathAspathMultipathRelax;
    this._bestpathCmpConfedAspath = config.bestpathCmpConfedAspath;
    this._bestpathCmpRouterid = config.bestpathCmpRouterid;
    this._bestpathMedConfed = config.bestpathMedConfed;
    this._bestpathMedMissingAsWorst = config.bestpathMedMissingAsWorst;
    this._clientToClientReflection = config.clientToClientReflection;
    this._clusterId = config.clusterId;
    this._confederationIdentifier = config.confederationIdentifier;
    this._dampening = config.dampening;
    this._dampeningMaxSuppressTime = config.dampeningMaxSuppressTime;
    this._dampeningReachabilityHalfLife = config.dampeningReachabilityHalfLife;
    this._dampeningReuse = config.dampeningReuse;
    this._dampeningSuppress = config.dampeningSuppress;
    this._defaultLocalPreference = config.defaultLocalPreference;
    this._deterministicMed = config.deterministicMed;
    this._distanceExternal = config.distanceExternal;
    this._distanceInternal = config.distanceInternal;
    this._distanceLocal = config.distanceLocal;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._ebgpRequiresPolicy = config.ebgpRequiresPolicy;
    this._enforceFirstAs = config.enforceFirstAs;
    this._fastExternalFailover = config.fastExternalFailover;
    this._gracefulStalepathTime = config.gracefulStalepathTime;
    this._holdtimeTimer = config.holdtimeTimer;
    this._id = config.id;
    this._keepaliveTimer = config.keepaliveTimer;
    this._logNeighbourChanges = config.logNeighbourChanges;
    this._maximumPathsEbgp = config.maximumPathsEbgp;
    this._maximumPathsIbgp = config.maximumPathsIbgp;
    this._routeReflectorAllowOutboundPolicy = config.routeReflectorAllowOutboundPolicy;
    this._routerId = config.routerId;
    this._scanTime = config.scanTime;
    this._adminDistance.internalValue = config.adminDistance;
    this._adminDistance6.internalValue = config.adminDistance6;
    this._aggregateAddress.internalValue = config.aggregateAddress;
    this._aggregateAddress6.internalValue = config.aggregateAddress6;
    this._confederationPeers.internalValue = config.confederationPeers;
    this._neighbor.internalValue = config.neighbor;
    this._neighborGroup.internalValue = config.neighborGroup;
    this._network.internalValue = config.network;
    this._network6.internalValue = config.network6;
    this._redistribute.internalValue = config.redistribute;
    this._redistribute6.internalValue = config.redistribute6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_compare_med - computed: true, optional: true, required: false
  private _alwaysCompareMed?: string; 
  public get alwaysCompareMed() {
    return this.getStringAttribute('always_compare_med');
  }
  public set alwaysCompareMed(value: string) {
    this._alwaysCompareMed = value;
  }
  public resetAlwaysCompareMed() {
    this._alwaysCompareMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysCompareMedInput() {
    return this._alwaysCompareMed;
  }

  // as - computed: true, optional: true, required: false
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

  // bestpath_as_path_ignore - computed: true, optional: true, required: false
  private _bestpathAsPathIgnore?: string; 
  public get bestpathAsPathIgnore() {
    return this.getStringAttribute('bestpath_as_path_ignore');
  }
  public set bestpathAsPathIgnore(value: string) {
    this._bestpathAsPathIgnore = value;
  }
  public resetBestpathAsPathIgnore() {
    this._bestpathAsPathIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestpathAsPathIgnoreInput() {
    return this._bestpathAsPathIgnore;
  }

  // bestpath_aspath_multipath_relax - computed: true, optional: true, required: false
  private _bestpathAspathMultipathRelax?: string; 
  public get bestpathAspathMultipathRelax() {
    return this.getStringAttribute('bestpath_aspath_multipath_relax');
  }
  public set bestpathAspathMultipathRelax(value: string) {
    this._bestpathAspathMultipathRelax = value;
  }
  public resetBestpathAspathMultipathRelax() {
    this._bestpathAspathMultipathRelax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestpathAspathMultipathRelaxInput() {
    return this._bestpathAspathMultipathRelax;
  }

  // bestpath_cmp_confed_aspath - computed: true, optional: true, required: false
  private _bestpathCmpConfedAspath?: string; 
  public get bestpathCmpConfedAspath() {
    return this.getStringAttribute('bestpath_cmp_confed_aspath');
  }
  public set bestpathCmpConfedAspath(value: string) {
    this._bestpathCmpConfedAspath = value;
  }
  public resetBestpathCmpConfedAspath() {
    this._bestpathCmpConfedAspath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestpathCmpConfedAspathInput() {
    return this._bestpathCmpConfedAspath;
  }

  // bestpath_cmp_routerid - computed: true, optional: true, required: false
  private _bestpathCmpRouterid?: string; 
  public get bestpathCmpRouterid() {
    return this.getStringAttribute('bestpath_cmp_routerid');
  }
  public set bestpathCmpRouterid(value: string) {
    this._bestpathCmpRouterid = value;
  }
  public resetBestpathCmpRouterid() {
    this._bestpathCmpRouterid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestpathCmpRouteridInput() {
    return this._bestpathCmpRouterid;
  }

  // bestpath_med_confed - computed: true, optional: true, required: false
  private _bestpathMedConfed?: string; 
  public get bestpathMedConfed() {
    return this.getStringAttribute('bestpath_med_confed');
  }
  public set bestpathMedConfed(value: string) {
    this._bestpathMedConfed = value;
  }
  public resetBestpathMedConfed() {
    this._bestpathMedConfed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestpathMedConfedInput() {
    return this._bestpathMedConfed;
  }

  // bestpath_med_missing_as_worst - computed: true, optional: true, required: false
  private _bestpathMedMissingAsWorst?: string; 
  public get bestpathMedMissingAsWorst() {
    return this.getStringAttribute('bestpath_med_missing_as_worst');
  }
  public set bestpathMedMissingAsWorst(value: string) {
    this._bestpathMedMissingAsWorst = value;
  }
  public resetBestpathMedMissingAsWorst() {
    this._bestpathMedMissingAsWorst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestpathMedMissingAsWorstInput() {
    return this._bestpathMedMissingAsWorst;
  }

  // client_to_client_reflection - computed: true, optional: true, required: false
  private _clientToClientReflection?: string; 
  public get clientToClientReflection() {
    return this.getStringAttribute('client_to_client_reflection');
  }
  public set clientToClientReflection(value: string) {
    this._clientToClientReflection = value;
  }
  public resetClientToClientReflection() {
    this._clientToClientReflection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientToClientReflectionInput() {
    return this._clientToClientReflection;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // confederation_identifier - computed: true, optional: true, required: false
  private _confederationIdentifier?: number; 
  public get confederationIdentifier() {
    return this.getNumberAttribute('confederation_identifier');
  }
  public set confederationIdentifier(value: number) {
    this._confederationIdentifier = value;
  }
  public resetConfederationIdentifier() {
    this._confederationIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confederationIdentifierInput() {
    return this._confederationIdentifier;
  }

  // dampening - computed: true, optional: true, required: false
  private _dampening?: string; 
  public get dampening() {
    return this.getStringAttribute('dampening');
  }
  public set dampening(value: string) {
    this._dampening = value;
  }
  public resetDampening() {
    this._dampening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningInput() {
    return this._dampening;
  }

  // dampening_max_suppress_time - computed: true, optional: true, required: false
  private _dampeningMaxSuppressTime?: number; 
  public get dampeningMaxSuppressTime() {
    return this.getNumberAttribute('dampening_max_suppress_time');
  }
  public set dampeningMaxSuppressTime(value: number) {
    this._dampeningMaxSuppressTime = value;
  }
  public resetDampeningMaxSuppressTime() {
    this._dampeningMaxSuppressTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningMaxSuppressTimeInput() {
    return this._dampeningMaxSuppressTime;
  }

  // dampening_reachability_half_life - computed: true, optional: true, required: false
  private _dampeningReachabilityHalfLife?: number; 
  public get dampeningReachabilityHalfLife() {
    return this.getNumberAttribute('dampening_reachability_half_life');
  }
  public set dampeningReachabilityHalfLife(value: number) {
    this._dampeningReachabilityHalfLife = value;
  }
  public resetDampeningReachabilityHalfLife() {
    this._dampeningReachabilityHalfLife = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningReachabilityHalfLifeInput() {
    return this._dampeningReachabilityHalfLife;
  }

  // dampening_reuse - computed: true, optional: true, required: false
  private _dampeningReuse?: number; 
  public get dampeningReuse() {
    return this.getNumberAttribute('dampening_reuse');
  }
  public set dampeningReuse(value: number) {
    this._dampeningReuse = value;
  }
  public resetDampeningReuse() {
    this._dampeningReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningReuseInput() {
    return this._dampeningReuse;
  }

  // dampening_suppress - computed: true, optional: true, required: false
  private _dampeningSuppress?: number; 
  public get dampeningSuppress() {
    return this.getNumberAttribute('dampening_suppress');
  }
  public set dampeningSuppress(value: number) {
    this._dampeningSuppress = value;
  }
  public resetDampeningSuppress() {
    this._dampeningSuppress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningSuppressInput() {
    return this._dampeningSuppress;
  }

  // default_local_preference - computed: true, optional: true, required: false
  private _defaultLocalPreference?: number; 
  public get defaultLocalPreference() {
    return this.getNumberAttribute('default_local_preference');
  }
  public set defaultLocalPreference(value: number) {
    this._defaultLocalPreference = value;
  }
  public resetDefaultLocalPreference() {
    this._defaultLocalPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLocalPreferenceInput() {
    return this._defaultLocalPreference;
  }

  // deterministic_med - computed: true, optional: true, required: false
  private _deterministicMed?: string; 
  public get deterministicMed() {
    return this.getStringAttribute('deterministic_med');
  }
  public set deterministicMed(value: string) {
    this._deterministicMed = value;
  }
  public resetDeterministicMed() {
    this._deterministicMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deterministicMedInput() {
    return this._deterministicMed;
  }

  // distance_external - computed: true, optional: true, required: false
  private _distanceExternal?: number; 
  public get distanceExternal() {
    return this.getNumberAttribute('distance_external');
  }
  public set distanceExternal(value: number) {
    this._distanceExternal = value;
  }
  public resetDistanceExternal() {
    this._distanceExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceExternalInput() {
    return this._distanceExternal;
  }

  // distance_internal - computed: true, optional: true, required: false
  private _distanceInternal?: number; 
  public get distanceInternal() {
    return this.getNumberAttribute('distance_internal');
  }
  public set distanceInternal(value: number) {
    this._distanceInternal = value;
  }
  public resetDistanceInternal() {
    this._distanceInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInternalInput() {
    return this._distanceInternal;
  }

  // distance_local - computed: true, optional: true, required: false
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

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // ebgp_requires_policy - computed: true, optional: true, required: false
  private _ebgpRequiresPolicy?: string; 
  public get ebgpRequiresPolicy() {
    return this.getStringAttribute('ebgp_requires_policy');
  }
  public set ebgpRequiresPolicy(value: string) {
    this._ebgpRequiresPolicy = value;
  }
  public resetEbgpRequiresPolicy() {
    this._ebgpRequiresPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpRequiresPolicyInput() {
    return this._ebgpRequiresPolicy;
  }

  // enforce_first_as - computed: true, optional: true, required: false
  private _enforceFirstAs?: string; 
  public get enforceFirstAs() {
    return this.getStringAttribute('enforce_first_as');
  }
  public set enforceFirstAs(value: string) {
    this._enforceFirstAs = value;
  }
  public resetEnforceFirstAs() {
    this._enforceFirstAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceFirstAsInput() {
    return this._enforceFirstAs;
  }

  // fast_external_failover - computed: true, optional: true, required: false
  private _fastExternalFailover?: string; 
  public get fastExternalFailover() {
    return this.getStringAttribute('fast_external_failover');
  }
  public set fastExternalFailover(value: string) {
    this._fastExternalFailover = value;
  }
  public resetFastExternalFailover() {
    this._fastExternalFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastExternalFailoverInput() {
    return this._fastExternalFailover;
  }

  // graceful_stalepath_time - computed: true, optional: true, required: false
  private _gracefulStalepathTime?: number; 
  public get gracefulStalepathTime() {
    return this.getNumberAttribute('graceful_stalepath_time');
  }
  public set gracefulStalepathTime(value: number) {
    this._gracefulStalepathTime = value;
  }
  public resetGracefulStalepathTime() {
    this._gracefulStalepathTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulStalepathTimeInput() {
    return this._gracefulStalepathTime;
  }

  // holdtime_timer - computed: true, optional: true, required: false
  private _holdtimeTimer?: number; 
  public get holdtimeTimer() {
    return this.getNumberAttribute('holdtime_timer');
  }
  public set holdtimeTimer(value: number) {
    this._holdtimeTimer = value;
  }
  public resetHoldtimeTimer() {
    this._holdtimeTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimeTimerInput() {
    return this._holdtimeTimer;
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

  // keepalive_timer - computed: true, optional: true, required: false
  private _keepaliveTimer?: number; 
  public get keepaliveTimer() {
    return this.getNumberAttribute('keepalive_timer');
  }
  public set keepaliveTimer(value: number) {
    this._keepaliveTimer = value;
  }
  public resetKeepaliveTimer() {
    this._keepaliveTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimerInput() {
    return this._keepaliveTimer;
  }

  // log_neighbour_changes - computed: true, optional: true, required: false
  private _logNeighbourChanges?: string; 
  public get logNeighbourChanges() {
    return this.getStringAttribute('log_neighbour_changes');
  }
  public set logNeighbourChanges(value: string) {
    this._logNeighbourChanges = value;
  }
  public resetLogNeighbourChanges() {
    this._logNeighbourChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNeighbourChangesInput() {
    return this._logNeighbourChanges;
  }

  // maximum_paths_ebgp - computed: true, optional: true, required: false
  private _maximumPathsEbgp?: number; 
  public get maximumPathsEbgp() {
    return this.getNumberAttribute('maximum_paths_ebgp');
  }
  public set maximumPathsEbgp(value: number) {
    this._maximumPathsEbgp = value;
  }
  public resetMaximumPathsEbgp() {
    this._maximumPathsEbgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsEbgpInput() {
    return this._maximumPathsEbgp;
  }

  // maximum_paths_ibgp - computed: true, optional: true, required: false
  private _maximumPathsIbgp?: number; 
  public get maximumPathsIbgp() {
    return this.getNumberAttribute('maximum_paths_ibgp');
  }
  public set maximumPathsIbgp(value: number) {
    this._maximumPathsIbgp = value;
  }
  public resetMaximumPathsIbgp() {
    this._maximumPathsIbgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPathsIbgpInput() {
    return this._maximumPathsIbgp;
  }

  // route_reflector_allow_outbound_policy - computed: true, optional: true, required: false
  private _routeReflectorAllowOutboundPolicy?: string; 
  public get routeReflectorAllowOutboundPolicy() {
    return this.getStringAttribute('route_reflector_allow_outbound_policy');
  }
  public set routeReflectorAllowOutboundPolicy(value: string) {
    this._routeReflectorAllowOutboundPolicy = value;
  }
  public resetRouteReflectorAllowOutboundPolicy() {
    this._routeReflectorAllowOutboundPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorAllowOutboundPolicyInput() {
    return this._routeReflectorAllowOutboundPolicy;
  }

  // router_id - computed: true, optional: true, required: false
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

  // scan_time - computed: true, optional: true, required: false
  private _scanTime?: number; 
  public get scanTime() {
    return this.getNumberAttribute('scan_time');
  }
  public set scanTime(value: number) {
    this._scanTime = value;
  }
  public resetScanTime() {
    this._scanTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanTimeInput() {
    return this._scanTime;
  }

  // admin_distance - computed: false, optional: true, required: false
  private _adminDistance = new RouterBgpAdminDistanceList(this, "admin_distance", false);
  public get adminDistance() {
    return this._adminDistance;
  }
  public putAdminDistance(value: RouterBgpAdminDistance[] | cdktf.IResolvable) {
    this._adminDistance.internalValue = value;
  }
  public resetAdminDistance() {
    this._adminDistance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminDistanceInput() {
    return this._adminDistance.internalValue;
  }

  // admin_distance6 - computed: false, optional: true, required: false
  private _adminDistance6 = new RouterBgpAdminDistance6List(this, "admin_distance6", false);
  public get adminDistance6() {
    return this._adminDistance6;
  }
  public putAdminDistance6(value: RouterBgpAdminDistance6[] | cdktf.IResolvable) {
    this._adminDistance6.internalValue = value;
  }
  public resetAdminDistance6() {
    this._adminDistance6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminDistance6Input() {
    return this._adminDistance6.internalValue;
  }

  // aggregate_address - computed: false, optional: true, required: false
  private _aggregateAddress = new RouterBgpAggregateAddressList(this, "aggregate_address", false);
  public get aggregateAddress() {
    return this._aggregateAddress;
  }
  public putAggregateAddress(value: RouterBgpAggregateAddress[] | cdktf.IResolvable) {
    this._aggregateAddress.internalValue = value;
  }
  public resetAggregateAddress() {
    this._aggregateAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateAddressInput() {
    return this._aggregateAddress.internalValue;
  }

  // aggregate_address6 - computed: false, optional: true, required: false
  private _aggregateAddress6 = new RouterBgpAggregateAddress6List(this, "aggregate_address6", false);
  public get aggregateAddress6() {
    return this._aggregateAddress6;
  }
  public putAggregateAddress6(value: RouterBgpAggregateAddress6[] | cdktf.IResolvable) {
    this._aggregateAddress6.internalValue = value;
  }
  public resetAggregateAddress6() {
    this._aggregateAddress6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateAddress6Input() {
    return this._aggregateAddress6.internalValue;
  }

  // confederation_peers - computed: false, optional: true, required: false
  private _confederationPeers = new RouterBgpConfederationPeersList(this, "confederation_peers", false);
  public get confederationPeers() {
    return this._confederationPeers;
  }
  public putConfederationPeers(value: RouterBgpConfederationPeers[] | cdktf.IResolvable) {
    this._confederationPeers.internalValue = value;
  }
  public resetConfederationPeers() {
    this._confederationPeers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confederationPeersInput() {
    return this._confederationPeers.internalValue;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new RouterBgpNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: RouterBgpNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // neighbor_group - computed: false, optional: true, required: false
  private _neighborGroup = new RouterBgpNeighborGroupList(this, "neighbor_group", false);
  public get neighborGroup() {
    return this._neighborGroup;
  }
  public putNeighborGroup(value: RouterBgpNeighborGroup[] | cdktf.IResolvable) {
    this._neighborGroup.internalValue = value;
  }
  public resetNeighborGroup() {
    this._neighborGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborGroupInput() {
    return this._neighborGroup.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new RouterBgpNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: RouterBgpNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // network6 - computed: false, optional: true, required: false
  private _network6 = new RouterBgpNetwork6List(this, "network6", false);
  public get network6() {
    return this._network6;
  }
  public putNetwork6(value: RouterBgpNetwork6[] | cdktf.IResolvable) {
    this._network6.internalValue = value;
  }
  public resetNetwork6() {
    this._network6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get network6Input() {
    return this._network6.internalValue;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute = new RouterBgpRedistributeList(this, "redistribute", false);
  public get redistribute() {
    return this._redistribute;
  }
  public putRedistribute(value: RouterBgpRedistribute[] | cdktf.IResolvable) {
    this._redistribute.internalValue = value;
  }
  public resetRedistribute() {
    this._redistribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute.internalValue;
  }

  // redistribute6 - computed: false, optional: true, required: false
  private _redistribute6 = new RouterBgpRedistribute6List(this, "redistribute6", false);
  public get redistribute6() {
    return this._redistribute6;
  }
  public putRedistribute6(value: RouterBgpRedistribute6[] | cdktf.IResolvable) {
    this._redistribute6.internalValue = value;
  }
  public resetRedistribute6() {
    this._redistribute6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistribute6Input() {
    return this._redistribute6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_compare_med: cdktf.stringToTerraform(this._alwaysCompareMed),
      as: cdktf.numberToTerraform(this._as),
      bestpath_as_path_ignore: cdktf.stringToTerraform(this._bestpathAsPathIgnore),
      bestpath_aspath_multipath_relax: cdktf.stringToTerraform(this._bestpathAspathMultipathRelax),
      bestpath_cmp_confed_aspath: cdktf.stringToTerraform(this._bestpathCmpConfedAspath),
      bestpath_cmp_routerid: cdktf.stringToTerraform(this._bestpathCmpRouterid),
      bestpath_med_confed: cdktf.stringToTerraform(this._bestpathMedConfed),
      bestpath_med_missing_as_worst: cdktf.stringToTerraform(this._bestpathMedMissingAsWorst),
      client_to_client_reflection: cdktf.stringToTerraform(this._clientToClientReflection),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      confederation_identifier: cdktf.numberToTerraform(this._confederationIdentifier),
      dampening: cdktf.stringToTerraform(this._dampening),
      dampening_max_suppress_time: cdktf.numberToTerraform(this._dampeningMaxSuppressTime),
      dampening_reachability_half_life: cdktf.numberToTerraform(this._dampeningReachabilityHalfLife),
      dampening_reuse: cdktf.numberToTerraform(this._dampeningReuse),
      dampening_suppress: cdktf.numberToTerraform(this._dampeningSuppress),
      default_local_preference: cdktf.numberToTerraform(this._defaultLocalPreference),
      deterministic_med: cdktf.stringToTerraform(this._deterministicMed),
      distance_external: cdktf.numberToTerraform(this._distanceExternal),
      distance_internal: cdktf.numberToTerraform(this._distanceInternal),
      distance_local: cdktf.numberToTerraform(this._distanceLocal),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      ebgp_requires_policy: cdktf.stringToTerraform(this._ebgpRequiresPolicy),
      enforce_first_as: cdktf.stringToTerraform(this._enforceFirstAs),
      fast_external_failover: cdktf.stringToTerraform(this._fastExternalFailover),
      graceful_stalepath_time: cdktf.numberToTerraform(this._gracefulStalepathTime),
      holdtime_timer: cdktf.numberToTerraform(this._holdtimeTimer),
      id: cdktf.stringToTerraform(this._id),
      keepalive_timer: cdktf.numberToTerraform(this._keepaliveTimer),
      log_neighbour_changes: cdktf.stringToTerraform(this._logNeighbourChanges),
      maximum_paths_ebgp: cdktf.numberToTerraform(this._maximumPathsEbgp),
      maximum_paths_ibgp: cdktf.numberToTerraform(this._maximumPathsIbgp),
      route_reflector_allow_outbound_policy: cdktf.stringToTerraform(this._routeReflectorAllowOutboundPolicy),
      router_id: cdktf.stringToTerraform(this._routerId),
      scan_time: cdktf.numberToTerraform(this._scanTime),
      admin_distance: cdktf.listMapper(routerBgpAdminDistanceToTerraform, true)(this._adminDistance.internalValue),
      admin_distance6: cdktf.listMapper(routerBgpAdminDistance6ToTerraform, true)(this._adminDistance6.internalValue),
      aggregate_address: cdktf.listMapper(routerBgpAggregateAddressToTerraform, true)(this._aggregateAddress.internalValue),
      aggregate_address6: cdktf.listMapper(routerBgpAggregateAddress6ToTerraform, true)(this._aggregateAddress6.internalValue),
      confederation_peers: cdktf.listMapper(routerBgpConfederationPeersToTerraform, true)(this._confederationPeers.internalValue),
      neighbor: cdktf.listMapper(routerBgpNeighborToTerraform, true)(this._neighbor.internalValue),
      neighbor_group: cdktf.listMapper(routerBgpNeighborGroupToTerraform, true)(this._neighborGroup.internalValue),
      network: cdktf.listMapper(routerBgpNetworkToTerraform, true)(this._network.internalValue),
      network6: cdktf.listMapper(routerBgpNetwork6ToTerraform, true)(this._network6.internalValue),
      redistribute: cdktf.listMapper(routerBgpRedistributeToTerraform, true)(this._redistribute.internalValue),
      redistribute6: cdktf.listMapper(routerBgpRedistribute6ToTerraform, true)(this._redistribute6.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_compare_med: {
        value: cdktf.stringToHclTerraform(this._alwaysCompareMed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as: {
        value: cdktf.numberToHclTerraform(this._as),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bestpath_as_path_ignore: {
        value: cdktf.stringToHclTerraform(this._bestpathAsPathIgnore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bestpath_aspath_multipath_relax: {
        value: cdktf.stringToHclTerraform(this._bestpathAspathMultipathRelax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bestpath_cmp_confed_aspath: {
        value: cdktf.stringToHclTerraform(this._bestpathCmpConfedAspath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bestpath_cmp_routerid: {
        value: cdktf.stringToHclTerraform(this._bestpathCmpRouterid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bestpath_med_confed: {
        value: cdktf.stringToHclTerraform(this._bestpathMedConfed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bestpath_med_missing_as_worst: {
        value: cdktf.stringToHclTerraform(this._bestpathMedMissingAsWorst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_to_client_reflection: {
        value: cdktf.stringToHclTerraform(this._clientToClientReflection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confederation_identifier: {
        value: cdktf.numberToHclTerraform(this._confederationIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dampening: {
        value: cdktf.stringToHclTerraform(this._dampening),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dampening_max_suppress_time: {
        value: cdktf.numberToHclTerraform(this._dampeningMaxSuppressTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dampening_reachability_half_life: {
        value: cdktf.numberToHclTerraform(this._dampeningReachabilityHalfLife),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dampening_reuse: {
        value: cdktf.numberToHclTerraform(this._dampeningReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dampening_suppress: {
        value: cdktf.numberToHclTerraform(this._dampeningSuppress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_local_preference: {
        value: cdktf.numberToHclTerraform(this._defaultLocalPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deterministic_med: {
        value: cdktf.stringToHclTerraform(this._deterministicMed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance_external: {
        value: cdktf.numberToHclTerraform(this._distanceExternal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance_internal: {
        value: cdktf.numberToHclTerraform(this._distanceInternal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distance_local: {
        value: cdktf.numberToHclTerraform(this._distanceLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ebgp_requires_policy: {
        value: cdktf.stringToHclTerraform(this._ebgpRequiresPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_first_as: {
        value: cdktf.stringToHclTerraform(this._enforceFirstAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_external_failover: {
        value: cdktf.stringToHclTerraform(this._fastExternalFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_stalepath_time: {
        value: cdktf.numberToHclTerraform(this._gracefulStalepathTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      holdtime_timer: {
        value: cdktf.numberToHclTerraform(this._holdtimeTimer),
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
      keepalive_timer: {
        value: cdktf.numberToHclTerraform(this._keepaliveTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_neighbour_changes: {
        value: cdktf.stringToHclTerraform(this._logNeighbourChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_paths_ebgp: {
        value: cdktf.numberToHclTerraform(this._maximumPathsEbgp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_paths_ibgp: {
        value: cdktf.numberToHclTerraform(this._maximumPathsIbgp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_reflector_allow_outbound_policy: {
        value: cdktf.stringToHclTerraform(this._routeReflectorAllowOutboundPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_time: {
        value: cdktf.numberToHclTerraform(this._scanTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_distance: {
        value: cdktf.listMapperHcl(routerBgpAdminDistanceToHclTerraform, true)(this._adminDistance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAdminDistanceList",
      },
      admin_distance6: {
        value: cdktf.listMapperHcl(routerBgpAdminDistance6ToHclTerraform, true)(this._adminDistance6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAdminDistance6List",
      },
      aggregate_address: {
        value: cdktf.listMapperHcl(routerBgpAggregateAddressToHclTerraform, true)(this._aggregateAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAggregateAddressList",
      },
      aggregate_address6: {
        value: cdktf.listMapperHcl(routerBgpAggregateAddress6ToHclTerraform, true)(this._aggregateAddress6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAggregateAddress6List",
      },
      confederation_peers: {
        value: cdktf.listMapperHcl(routerBgpConfederationPeersToHclTerraform, true)(this._confederationPeers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpConfederationPeersList",
      },
      neighbor: {
        value: cdktf.listMapperHcl(routerBgpNeighborToHclTerraform, true)(this._neighbor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpNeighborList",
      },
      neighbor_group: {
        value: cdktf.listMapperHcl(routerBgpNeighborGroupToHclTerraform, true)(this._neighborGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpNeighborGroupList",
      },
      network: {
        value: cdktf.listMapperHcl(routerBgpNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpNetworkList",
      },
      network6: {
        value: cdktf.listMapperHcl(routerBgpNetwork6ToHclTerraform, true)(this._network6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpNetwork6List",
      },
      redistribute: {
        value: cdktf.listMapperHcl(routerBgpRedistributeToHclTerraform, true)(this._redistribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpRedistributeList",
      },
      redistribute6: {
        value: cdktf.listMapperHcl(routerBgpRedistribute6ToHclTerraform, true)(this._redistribute6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpRedistribute6List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
