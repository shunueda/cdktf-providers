// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path RouterBgp#additional_path}
  */
  readonly additionalPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path6 RouterBgp#additional_path6}
  */
  readonly additionalPath6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path_select RouterBgp#additional_path_select}
  */
  readonly additionalPathSelect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path_select6 RouterBgp#additional_path_select6}
  */
  readonly additionalPathSelect6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path_select_vpnv4 RouterBgp#additional_path_select_vpnv4}
  */
  readonly additionalPathSelectVpnv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path_select_vpnv6 RouterBgp#additional_path_select_vpnv6}
  */
  readonly additionalPathSelectVpnv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path_vpnv4 RouterBgp#additional_path_vpnv4}
  */
  readonly additionalPathVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path_vpnv6 RouterBgp#additional_path_vpnv6}
  */
  readonly additionalPathVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#always_compare_med RouterBgp#always_compare_med}
  */
  readonly alwaysCompareMed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#as RouterBgp#as}
  */
  readonly as?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#bestpath_as_path_ignore RouterBgp#bestpath_as_path_ignore}
  */
  readonly bestpathAsPathIgnore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#bestpath_cmp_confed_aspath RouterBgp#bestpath_cmp_confed_aspath}
  */
  readonly bestpathCmpConfedAspath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#bestpath_cmp_routerid RouterBgp#bestpath_cmp_routerid}
  */
  readonly bestpathCmpRouterid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#bestpath_med_confed RouterBgp#bestpath_med_confed}
  */
  readonly bestpathMedConfed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#bestpath_med_missing_as_worst RouterBgp#bestpath_med_missing_as_worst}
  */
  readonly bestpathMedMissingAsWorst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#client_to_client_reflection RouterBgp#client_to_client_reflection}
  */
  readonly clientToClientReflection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#cluster_id RouterBgp#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#confederation_identifier RouterBgp#confederation_identifier}
  */
  readonly confederationIdentifier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#confederation_peers RouterBgp#confederation_peers}
  */
  readonly confederationPeers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#cross_family_conditional_adv RouterBgp#cross_family_conditional_adv}
  */
  readonly crossFamilyConditionalAdv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#dampening RouterBgp#dampening}
  */
  readonly dampening?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#dampening_max_suppress_time RouterBgp#dampening_max_suppress_time}
  */
  readonly dampeningMaxSuppressTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#dampening_reachability_half_life RouterBgp#dampening_reachability_half_life}
  */
  readonly dampeningReachabilityHalfLife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#dampening_reuse RouterBgp#dampening_reuse}
  */
  readonly dampeningReuse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#dampening_route_map RouterBgp#dampening_route_map}
  */
  readonly dampeningRouteMap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#dampening_suppress RouterBgp#dampening_suppress}
  */
  readonly dampeningSuppress?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#dampening_unreachability_half_life RouterBgp#dampening_unreachability_half_life}
  */
  readonly dampeningUnreachabilityHalfLife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#default_local_preference RouterBgp#default_local_preference}
  */
  readonly defaultLocalPreference?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#deterministic_med RouterBgp#deterministic_med}
  */
  readonly deterministicMed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#device_name RouterBgp#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#device_vdom RouterBgp#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distance_external RouterBgp#distance_external}
  */
  readonly distanceExternal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distance_internal RouterBgp#distance_internal}
  */
  readonly distanceInternal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distance_local RouterBgp#distance_local}
  */
  readonly distanceLocal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#dynamic_sort_subtable RouterBgp#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#ebgp_multipath RouterBgp#ebgp_multipath}
  */
  readonly ebgpMultipath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#enforce_first_as RouterBgp#enforce_first_as}
  */
  readonly enforceFirstAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#fast_external_failover RouterBgp#fast_external_failover}
  */
  readonly fastExternalFailover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#graceful_end_on_timer RouterBgp#graceful_end_on_timer}
  */
  readonly gracefulEndOnTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#graceful_restart RouterBgp#graceful_restart}
  */
  readonly gracefulRestart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#graceful_restart_time RouterBgp#graceful_restart_time}
  */
  readonly gracefulRestartTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#graceful_stalepath_time RouterBgp#graceful_stalepath_time}
  */
  readonly gracefulStalepathTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#graceful_update_delay RouterBgp#graceful_update_delay}
  */
  readonly gracefulUpdateDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#holdtime_timer RouterBgp#holdtime_timer}
  */
  readonly holdtimeTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#ibgp_multipath RouterBgp#ibgp_multipath}
  */
  readonly ibgpMultipath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#ignore_optional_capability RouterBgp#ignore_optional_capability}
  */
  readonly ignoreOptionalCapability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#keepalive_timer RouterBgp#keepalive_timer}
  */
  readonly keepaliveTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#log_neighbour_changes RouterBgp#log_neighbour_changes}
  */
  readonly logNeighbourChanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#multipath_recursive_distance RouterBgp#multipath_recursive_distance}
  */
  readonly multipathRecursiveDistance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#network_import_check RouterBgp#network_import_check}
  */
  readonly networkImportCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#recursive_inherit_priority RouterBgp#recursive_inherit_priority}
  */
  readonly recursiveInheritPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#recursive_next_hop RouterBgp#recursive_next_hop}
  */
  readonly recursiveNextHop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#router_id RouterBgp#router_id}
  */
  readonly routerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#scan_time RouterBgp#scan_time}
  */
  readonly scanTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#synchronization RouterBgp#synchronization}
  */
  readonly synchronization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#tag_resolve_mode RouterBgp#tag_resolve_mode}
  */
  readonly tagResolveMode?: string;
  /**
  * admin_distance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#admin_distance RouterBgp#admin_distance}
  */
  readonly adminDistance?: RouterBgpAdminDistance[] | cdktf.IResolvable;
  /**
  * aggregate_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#aggregate_address RouterBgp#aggregate_address}
  */
  readonly aggregateAddress?: RouterBgpAggregateAddress[] | cdktf.IResolvable;
  /**
  * aggregate_address6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#aggregate_address6 RouterBgp#aggregate_address6}
  */
  readonly aggregateAddress6?: RouterBgpAggregateAddress6[] | cdktf.IResolvable;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#neighbor RouterBgp#neighbor}
  */
  readonly neighbor?: RouterBgpNeighbor[] | cdktf.IResolvable;
  /**
  * neighbor_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#neighbor_group RouterBgp#neighbor_group}
  */
  readonly neighborGroup?: RouterBgpNeighborGroup[] | cdktf.IResolvable;
  /**
  * neighbor_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#neighbor_range RouterBgp#neighbor_range}
  */
  readonly neighborRange?: RouterBgpNeighborRange[] | cdktf.IResolvable;
  /**
  * neighbor_range6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#neighbor_range6 RouterBgp#neighbor_range6}
  */
  readonly neighborRange6?: RouterBgpNeighborRange6[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#network RouterBgp#network}
  */
  readonly network?: RouterBgpNetwork[] | cdktf.IResolvable;
  /**
  * network6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#network6 RouterBgp#network6}
  */
  readonly network6?: RouterBgpNetwork6[] | cdktf.IResolvable;
  /**
  * redistribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#redistribute RouterBgp#redistribute}
  */
  readonly redistribute?: RouterBgpRedistribute[] | cdktf.IResolvable;
  /**
  * redistribute6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#redistribute6 RouterBgp#redistribute6}
  */
  readonly redistribute6?: RouterBgpRedistribute6[] | cdktf.IResolvable;
  /**
  * vrf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#vrf RouterBgp#vrf}
  */
  readonly vrf?: RouterBgpVrf[] | cdktf.IResolvable;
  /**
  * vrf6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#vrf6 RouterBgp#vrf6}
  */
  readonly vrf6?: RouterBgpVrf6[] | cdktf.IResolvable;
  /**
  * vrf_leak block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#vrf_leak RouterBgp#vrf_leak}
  */
  readonly vrfLeak?: RouterBgpVrfLeak[] | cdktf.IResolvable;
  /**
  * vrf_leak6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#vrf_leak6 RouterBgp#vrf_leak6}
  */
  readonly vrfLeak6?: RouterBgpVrfLeak6[] | cdktf.IResolvable;
}
export interface RouterBgpAdminDistance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distance RouterBgp#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#neighbour_prefix RouterBgp#neighbour_prefix}
  */
  readonly neighbourPrefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_list RouterBgp#route_list}
  */
  readonly routeList?: string[];
}

export function routerBgpAdminDistanceToTerraform(struct?: RouterBgpAdminDistance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance: cdktf.numberToTerraform(struct!.distance),
    id: cdktf.numberToTerraform(struct!.id),
    neighbour_prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.neighbourPrefix),
    route_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeList),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.neighbourPrefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    route_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

  // distance - computed: false, optional: true, required: false
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
  private _neighbourPrefix?: string[]; 
  public get neighbourPrefix() {
    return this.getListAttribute('neighbour_prefix');
  }
  public set neighbourPrefix(value: string[]) {
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
  private _routeList?: string[]; 
  public get routeList() {
    return cdktf.Fn.tolist(this.getListAttribute('route_list'));
  }
  public set routeList(value: string[]) {
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
export interface RouterBgpAggregateAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#as_set RouterBgp#as_set}
  */
  readonly asSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix RouterBgp#prefix}
  */
  readonly prefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#summary_only RouterBgp#summary_only}
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
    prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefix),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#as_set RouterBgp#as_set}
  */
  readonly asSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix6 RouterBgp#prefix6}
  */
  readonly prefix6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#summary_only RouterBgp#summary_only}
  */
  readonly summaryOnly?: string;
}

export function routerBgpAggregateAddress6ToTerraform(struct?: RouterBgpAggregateAddress6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_set: cdktf.stringToTerraform(struct!.asSet),
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
    if (this._asSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSet = this._asSet;
    }
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
      this._asSet = undefined;
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
      this._asSet = value.asSet;
      this._id = value.id;
      this._prefix6 = value.prefix6;
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
export interface RouterBgpNeighborConditionalAdvertise {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#advertise_routemap RouterBgp#advertise_routemap}
  */
  readonly advertiseRoutemap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#condition_routemap RouterBgp#condition_routemap}
  */
  readonly conditionRoutemap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#condition_type RouterBgp#condition_type}
  */
  readonly conditionType?: string;
}

export function routerBgpNeighborConditionalAdvertiseToTerraform(struct?: RouterBgpNeighborConditionalAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_routemap: cdktf.stringToTerraform(struct!.advertiseRoutemap),
    condition_routemap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.conditionRoutemap),
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}


export function routerBgpNeighborConditionalAdvertiseToHclTerraform(struct?: RouterBgpNeighborConditionalAdvertise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_routemap: {
      value: cdktf.stringToHclTerraform(struct!.advertiseRoutemap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_routemap: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.conditionRoutemap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborConditionalAdvertiseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborConditionalAdvertise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseRoutemap !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseRoutemap = this._advertiseRoutemap;
    }
    if (this._conditionRoutemap !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionRoutemap = this._conditionRoutemap;
    }
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborConditionalAdvertise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseRoutemap = undefined;
      this._conditionRoutemap = undefined;
      this._conditionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseRoutemap = value.advertiseRoutemap;
      this._conditionRoutemap = value.conditionRoutemap;
      this._conditionType = value.conditionType;
    }
  }

  // advertise_routemap - computed: false, optional: true, required: false
  private _advertiseRoutemap?: string; 
  public get advertiseRoutemap() {
    return this.getStringAttribute('advertise_routemap');
  }
  public set advertiseRoutemap(value: string) {
    this._advertiseRoutemap = value;
  }
  public resetAdvertiseRoutemap() {
    this._advertiseRoutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseRoutemapInput() {
    return this._advertiseRoutemap;
  }

  // condition_routemap - computed: true, optional: true, required: false
  private _conditionRoutemap?: string[]; 
  public get conditionRoutemap() {
    return cdktf.Fn.tolist(this.getListAttribute('condition_routemap'));
  }
  public set conditionRoutemap(value: string[]) {
    this._conditionRoutemap = value;
  }
  public resetConditionRoutemap() {
    this._conditionRoutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionRoutemapInput() {
    return this._conditionRoutemap;
  }

  // condition_type - computed: true, optional: true, required: false
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  public resetConditionType() {
    this._conditionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }
}

export class RouterBgpNeighborConditionalAdvertiseList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborConditionalAdvertise[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborConditionalAdvertiseOutputReference {
    return new RouterBgpNeighborConditionalAdvertiseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborConditionalAdvertise6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#advertise_routemap RouterBgp#advertise_routemap}
  */
  readonly advertiseRoutemap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#condition_routemap RouterBgp#condition_routemap}
  */
  readonly conditionRoutemap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#condition_type RouterBgp#condition_type}
  */
  readonly conditionType?: string;
}

export function routerBgpNeighborConditionalAdvertise6ToTerraform(struct?: RouterBgpNeighborConditionalAdvertise6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_routemap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.advertiseRoutemap),
    condition_routemap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.conditionRoutemap),
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}


export function routerBgpNeighborConditionalAdvertise6ToHclTerraform(struct?: RouterBgpNeighborConditionalAdvertise6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_routemap: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.advertiseRoutemap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    condition_routemap: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.conditionRoutemap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborConditionalAdvertise6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborConditionalAdvertise6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseRoutemap !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseRoutemap = this._advertiseRoutemap;
    }
    if (this._conditionRoutemap !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionRoutemap = this._conditionRoutemap;
    }
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborConditionalAdvertise6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseRoutemap = undefined;
      this._conditionRoutemap = undefined;
      this._conditionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseRoutemap = value.advertiseRoutemap;
      this._conditionRoutemap = value.conditionRoutemap;
      this._conditionType = value.conditionType;
    }
  }

  // advertise_routemap - computed: true, optional: true, required: false
  private _advertiseRoutemap?: string[]; 
  public get advertiseRoutemap() {
    return cdktf.Fn.tolist(this.getListAttribute('advertise_routemap'));
  }
  public set advertiseRoutemap(value: string[]) {
    this._advertiseRoutemap = value;
  }
  public resetAdvertiseRoutemap() {
    this._advertiseRoutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseRoutemapInput() {
    return this._advertiseRoutemap;
  }

  // condition_routemap - computed: true, optional: true, required: false
  private _conditionRoutemap?: string[]; 
  public get conditionRoutemap() {
    return cdktf.Fn.tolist(this.getListAttribute('condition_routemap'));
  }
  public set conditionRoutemap(value: string[]) {
    this._conditionRoutemap = value;
  }
  public resetConditionRoutemap() {
    this._conditionRoutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionRoutemapInput() {
    return this._conditionRoutemap;
  }

  // condition_type - computed: true, optional: true, required: false
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  public resetConditionType() {
    this._conditionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }
}

export class RouterBgpNeighborConditionalAdvertise6List extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborConditionalAdvertise6[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborConditionalAdvertise6OutputReference {
    return new RouterBgpNeighborConditionalAdvertise6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighbor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#activate RouterBgp#activate}
  */
  readonly activate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#activate6 RouterBgp#activate6}
  */
  readonly activate6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#activate_evpn RouterBgp#activate_evpn}
  */
  readonly activateEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#activate_vpnv4 RouterBgp#activate_vpnv4}
  */
  readonly activateVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#activate_vpnv6 RouterBgp#activate_vpnv6}
  */
  readonly activateVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path RouterBgp#additional_path}
  */
  readonly additionalPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path6 RouterBgp#additional_path6}
  */
  readonly additionalPath6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path_vpnv4 RouterBgp#additional_path_vpnv4}
  */
  readonly additionalPathVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path_vpnv6 RouterBgp#additional_path_vpnv6}
  */
  readonly additionalPathVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#adv_additional_path RouterBgp#adv_additional_path}
  */
  readonly advAdditionalPath?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#adv_additional_path6 RouterBgp#adv_additional_path6}
  */
  readonly advAdditionalPath6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#adv_additional_path_vpnv4 RouterBgp#adv_additional_path_vpnv4}
  */
  readonly advAdditionalPathVpnv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#adv_additional_path_vpnv6 RouterBgp#adv_additional_path_vpnv6}
  */
  readonly advAdditionalPathVpnv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#advertisement_interval RouterBgp#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in RouterBgp#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in6 RouterBgp#allowas_in6}
  */
  readonly allowasIn6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_enable RouterBgp#allowas_in_enable}
  */
  readonly allowasInEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_enable6 RouterBgp#allowas_in_enable6}
  */
  readonly allowasInEnable6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_enable_evpn RouterBgp#allowas_in_enable_evpn}
  */
  readonly allowasInEnableEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_enable_vpnv4 RouterBgp#allowas_in_enable_vpnv4}
  */
  readonly allowasInEnableVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_enable_vpnv6 RouterBgp#allowas_in_enable_vpnv6}
  */
  readonly allowasInEnableVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_evpn RouterBgp#allowas_in_evpn}
  */
  readonly allowasInEvpn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_vpnv4 RouterBgp#allowas_in_vpnv4}
  */
  readonly allowasInVpnv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_vpnv6 RouterBgp#allowas_in_vpnv6}
  */
  readonly allowasInVpnv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#as_override RouterBgp#as_override}
  */
  readonly asOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#as_override6 RouterBgp#as_override6}
  */
  readonly asOverride6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#attribute_unchanged RouterBgp#attribute_unchanged}
  */
  readonly attributeUnchanged?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#attribute_unchanged6 RouterBgp#attribute_unchanged6}
  */
  readonly attributeUnchanged6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#attribute_unchanged_vpnv4 RouterBgp#attribute_unchanged_vpnv4}
  */
  readonly attributeUnchangedVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#attribute_unchanged_vpnv6 RouterBgp#attribute_unchanged_vpnv6}
  */
  readonly attributeUnchangedVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#auth_options RouterBgp#auth_options}
  */
  readonly authOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#bfd RouterBgp#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_default_originate RouterBgp#capability_default_originate}
  */
  readonly capabilityDefaultOriginate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_default_originate6 RouterBgp#capability_default_originate6}
  */
  readonly capabilityDefaultOriginate6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_dynamic RouterBgp#capability_dynamic}
  */
  readonly capabilityDynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_graceful_restart RouterBgp#capability_graceful_restart}
  */
  readonly capabilityGracefulRestart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_graceful_restart6 RouterBgp#capability_graceful_restart6}
  */
  readonly capabilityGracefulRestart6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_graceful_restart_evpn RouterBgp#capability_graceful_restart_evpn}
  */
  readonly capabilityGracefulRestartEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_graceful_restart_vpnv4 RouterBgp#capability_graceful_restart_vpnv4}
  */
  readonly capabilityGracefulRestartVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_graceful_restart_vpnv6 RouterBgp#capability_graceful_restart_vpnv6}
  */
  readonly capabilityGracefulRestartVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_orf RouterBgp#capability_orf}
  */
  readonly capabilityOrf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_orf6 RouterBgp#capability_orf6}
  */
  readonly capabilityOrf6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_route_refresh RouterBgp#capability_route_refresh}
  */
  readonly capabilityRouteRefresh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#connect_timer RouterBgp#connect_timer}
  */
  readonly connectTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#default_originate_routemap RouterBgp#default_originate_routemap}
  */
  readonly defaultOriginateRoutemap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#default_originate_routemap6 RouterBgp#default_originate_routemap6}
  */
  readonly defaultOriginateRoutemap6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#description RouterBgp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_in RouterBgp#distribute_list_in}
  */
  readonly distributeListIn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_in6 RouterBgp#distribute_list_in6}
  */
  readonly distributeListIn6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_in_vpnv4 RouterBgp#distribute_list_in_vpnv4}
  */
  readonly distributeListInVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_in_vpnv6 RouterBgp#distribute_list_in_vpnv6}
  */
  readonly distributeListInVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_out RouterBgp#distribute_list_out}
  */
  readonly distributeListOut?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_out6 RouterBgp#distribute_list_out6}
  */
  readonly distributeListOut6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_out_vpnv4 RouterBgp#distribute_list_out_vpnv4}
  */
  readonly distributeListOutVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_out_vpnv6 RouterBgp#distribute_list_out_vpnv6}
  */
  readonly distributeListOutVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#dont_capability_negotiate RouterBgp#dont_capability_negotiate}
  */
  readonly dontCapabilityNegotiate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#ebgp_enforce_multihop RouterBgp#ebgp_enforce_multihop}
  */
  readonly ebgpEnforceMultihop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#ebgp_multihop_ttl RouterBgp#ebgp_multihop_ttl}
  */
  readonly ebgpMultihopTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_in RouterBgp#filter_list_in}
  */
  readonly filterListIn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_in6 RouterBgp#filter_list_in6}
  */
  readonly filterListIn6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_in_vpnv4 RouterBgp#filter_list_in_vpnv4}
  */
  readonly filterListInVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_in_vpnv6 RouterBgp#filter_list_in_vpnv6}
  */
  readonly filterListInVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_out RouterBgp#filter_list_out}
  */
  readonly filterListOut?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_out6 RouterBgp#filter_list_out6}
  */
  readonly filterListOut6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_out_vpnv4 RouterBgp#filter_list_out_vpnv4}
  */
  readonly filterListOutVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_out_vpnv6 RouterBgp#filter_list_out_vpnv6}
  */
  readonly filterListOutVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#holdtime_timer RouterBgp#holdtime_timer}
  */
  readonly holdtimeTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#interface RouterBgp#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#ip RouterBgp#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#keep_alive_timer RouterBgp#keep_alive_timer}
  */
  readonly keepAliveTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#link_down_failover RouterBgp#link_down_failover}
  */
  readonly linkDownFailover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#local_as RouterBgp#local_as}
  */
  readonly localAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#local_as_no_prepend RouterBgp#local_as_no_prepend}
  */
  readonly localAsNoPrepend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#local_as_replace_as RouterBgp#local_as_replace_as}
  */
  readonly localAsReplaceAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix RouterBgp#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix6 RouterBgp#maximum_prefix6}
  */
  readonly maximumPrefix6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_evpn RouterBgp#maximum_prefix_evpn}
  */
  readonly maximumPrefixEvpn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_threshold RouterBgp#maximum_prefix_threshold}
  */
  readonly maximumPrefixThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_threshold6 RouterBgp#maximum_prefix_threshold6}
  */
  readonly maximumPrefixThreshold6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_threshold_evpn RouterBgp#maximum_prefix_threshold_evpn}
  */
  readonly maximumPrefixThresholdEvpn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_threshold_vpnv4 RouterBgp#maximum_prefix_threshold_vpnv4}
  */
  readonly maximumPrefixThresholdVpnv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_threshold_vpnv6 RouterBgp#maximum_prefix_threshold_vpnv6}
  */
  readonly maximumPrefixThresholdVpnv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_vpnv4 RouterBgp#maximum_prefix_vpnv4}
  */
  readonly maximumPrefixVpnv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_vpnv6 RouterBgp#maximum_prefix_vpnv6}
  */
  readonly maximumPrefixVpnv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_warning_only RouterBgp#maximum_prefix_warning_only}
  */
  readonly maximumPrefixWarningOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_warning_only6 RouterBgp#maximum_prefix_warning_only6}
  */
  readonly maximumPrefixWarningOnly6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_warning_only_evpn RouterBgp#maximum_prefix_warning_only_evpn}
  */
  readonly maximumPrefixWarningOnlyEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_warning_only_vpnv4 RouterBgp#maximum_prefix_warning_only_vpnv4}
  */
  readonly maximumPrefixWarningOnlyVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_warning_only_vpnv6 RouterBgp#maximum_prefix_warning_only_vpnv6}
  */
  readonly maximumPrefixWarningOnlyVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#next_hop_self RouterBgp#next_hop_self}
  */
  readonly nextHopSelf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#next_hop_self6 RouterBgp#next_hop_self6}
  */
  readonly nextHopSelf6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#next_hop_self_rr RouterBgp#next_hop_self_rr}
  */
  readonly nextHopSelfRr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#next_hop_self_rr6 RouterBgp#next_hop_self_rr6}
  */
  readonly nextHopSelfRr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#next_hop_self_vpnv4 RouterBgp#next_hop_self_vpnv4}
  */
  readonly nextHopSelfVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#next_hop_self_vpnv6 RouterBgp#next_hop_self_vpnv6}
  */
  readonly nextHopSelfVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#override_capability RouterBgp#override_capability}
  */
  readonly overrideCapability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#passive RouterBgp#passive}
  */
  readonly passive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#password RouterBgp#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_in RouterBgp#prefix_list_in}
  */
  readonly prefixListIn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_in6 RouterBgp#prefix_list_in6}
  */
  readonly prefixListIn6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_in_vpnv4 RouterBgp#prefix_list_in_vpnv4}
  */
  readonly prefixListInVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_in_vpnv6 RouterBgp#prefix_list_in_vpnv6}
  */
  readonly prefixListInVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_out RouterBgp#prefix_list_out}
  */
  readonly prefixListOut?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_out6 RouterBgp#prefix_list_out6}
  */
  readonly prefixListOut6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_out_vpnv4 RouterBgp#prefix_list_out_vpnv4}
  */
  readonly prefixListOutVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_out_vpnv6 RouterBgp#prefix_list_out_vpnv6}
  */
  readonly prefixListOutVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#remote_as RouterBgp#remote_as}
  */
  readonly remoteAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#remove_private_as RouterBgp#remove_private_as}
  */
  readonly removePrivateAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#remove_private_as6 RouterBgp#remove_private_as6}
  */
  readonly removePrivateAs6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#remove_private_as_evpn RouterBgp#remove_private_as_evpn}
  */
  readonly removePrivateAsEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#remove_private_as_vpnv4 RouterBgp#remove_private_as_vpnv4}
  */
  readonly removePrivateAsVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#remove_private_as_vpnv6 RouterBgp#remove_private_as_vpnv6}
  */
  readonly removePrivateAsVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#restart_time RouterBgp#restart_time}
  */
  readonly restartTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#retain_stale_time RouterBgp#retain_stale_time}
  */
  readonly retainStaleTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_in RouterBgp#route_map_in}
  */
  readonly routeMapIn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_in6 RouterBgp#route_map_in6}
  */
  readonly routeMapIn6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_in_evpn RouterBgp#route_map_in_evpn}
  */
  readonly routeMapInEvpn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_in_vpnv4 RouterBgp#route_map_in_vpnv4}
  */
  readonly routeMapInVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_in_vpnv6 RouterBgp#route_map_in_vpnv6}
  */
  readonly routeMapInVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out RouterBgp#route_map_out}
  */
  readonly routeMapOut?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out6 RouterBgp#route_map_out6}
  */
  readonly routeMapOut6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out6_preferable RouterBgp#route_map_out6_preferable}
  */
  readonly routeMapOut6Preferable?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out_evpn RouterBgp#route_map_out_evpn}
  */
  readonly routeMapOutEvpn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out_preferable RouterBgp#route_map_out_preferable}
  */
  readonly routeMapOutPreferable?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out_vpnv4 RouterBgp#route_map_out_vpnv4}
  */
  readonly routeMapOutVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out_vpnv4_preferable RouterBgp#route_map_out_vpnv4_preferable}
  */
  readonly routeMapOutVpnv4Preferable?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out_vpnv6 RouterBgp#route_map_out_vpnv6}
  */
  readonly routeMapOutVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out_vpnv6_preferable RouterBgp#route_map_out_vpnv6_preferable}
  */
  readonly routeMapOutVpnv6Preferable?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_reflector_client RouterBgp#route_reflector_client}
  */
  readonly routeReflectorClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_reflector_client6 RouterBgp#route_reflector_client6}
  */
  readonly routeReflectorClient6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_reflector_client_evpn RouterBgp#route_reflector_client_evpn}
  */
  readonly routeReflectorClientEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_reflector_client_vpnv4 RouterBgp#route_reflector_client_vpnv4}
  */
  readonly routeReflectorClientVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_reflector_client_vpnv6 RouterBgp#route_reflector_client_vpnv6}
  */
  readonly routeReflectorClientVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_server_client RouterBgp#route_server_client}
  */
  readonly routeServerClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_server_client6 RouterBgp#route_server_client6}
  */
  readonly routeServerClient6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_server_client_evpn RouterBgp#route_server_client_evpn}
  */
  readonly routeServerClientEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_server_client_vpnv4 RouterBgp#route_server_client_vpnv4}
  */
  readonly routeServerClientVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_server_client_vpnv6 RouterBgp#route_server_client_vpnv6}
  */
  readonly routeServerClientVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#rr_attr_allow_change RouterBgp#rr_attr_allow_change}
  */
  readonly rrAttrAllowChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#rr_attr_allow_change6 RouterBgp#rr_attr_allow_change6}
  */
  readonly rrAttrAllowChange6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#rr_attr_allow_change_evpn RouterBgp#rr_attr_allow_change_evpn}
  */
  readonly rrAttrAllowChangeEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#rr_attr_allow_change_vpnv4 RouterBgp#rr_attr_allow_change_vpnv4}
  */
  readonly rrAttrAllowChangeVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#rr_attr_allow_change_vpnv6 RouterBgp#rr_attr_allow_change_vpnv6}
  */
  readonly rrAttrAllowChangeVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#send_community RouterBgp#send_community}
  */
  readonly sendCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#send_community6 RouterBgp#send_community6}
  */
  readonly sendCommunity6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#send_community_evpn RouterBgp#send_community_evpn}
  */
  readonly sendCommunityEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#send_community_vpnv4 RouterBgp#send_community_vpnv4}
  */
  readonly sendCommunityVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#send_community_vpnv6 RouterBgp#send_community_vpnv6}
  */
  readonly sendCommunityVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#shutdown RouterBgp#shutdown}
  */
  readonly shutdown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#soft_reconfiguration RouterBgp#soft_reconfiguration}
  */
  readonly softReconfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#soft_reconfiguration6 RouterBgp#soft_reconfiguration6}
  */
  readonly softReconfiguration6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#soft_reconfiguration_evpn RouterBgp#soft_reconfiguration_evpn}
  */
  readonly softReconfigurationEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#soft_reconfiguration_vpnv4 RouterBgp#soft_reconfiguration_vpnv4}
  */
  readonly softReconfigurationVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#soft_reconfiguration_vpnv6 RouterBgp#soft_reconfiguration_vpnv6}
  */
  readonly softReconfigurationVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#stale_route RouterBgp#stale_route}
  */
  readonly staleRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#strict_capability_match RouterBgp#strict_capability_match}
  */
  readonly strictCapabilityMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#unsuppress_map RouterBgp#unsuppress_map}
  */
  readonly unsuppressMap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#unsuppress_map6 RouterBgp#unsuppress_map6}
  */
  readonly unsuppressMap6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#update_source RouterBgp#update_source}
  */
  readonly updateSource?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#weight RouterBgp#weight}
  */
  readonly weight?: number;
  /**
  * conditional_advertise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#conditional_advertise RouterBgp#conditional_advertise}
  */
  readonly conditionalAdvertise?: RouterBgpNeighborConditionalAdvertise[] | cdktf.IResolvable;
  /**
  * conditional_advertise6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#conditional_advertise6 RouterBgp#conditional_advertise6}
  */
  readonly conditionalAdvertise6?: RouterBgpNeighborConditionalAdvertise6[] | cdktf.IResolvable;
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
    activate_vpnv4: cdktf.stringToTerraform(struct!.activateVpnv4),
    activate_vpnv6: cdktf.stringToTerraform(struct!.activateVpnv6),
    additional_path: cdktf.stringToTerraform(struct!.additionalPath),
    additional_path6: cdktf.stringToTerraform(struct!.additionalPath6),
    additional_path_vpnv4: cdktf.stringToTerraform(struct!.additionalPathVpnv4),
    additional_path_vpnv6: cdktf.stringToTerraform(struct!.additionalPathVpnv6),
    adv_additional_path: cdktf.numberToTerraform(struct!.advAdditionalPath),
    adv_additional_path6: cdktf.numberToTerraform(struct!.advAdditionalPath6),
    adv_additional_path_vpnv4: cdktf.numberToTerraform(struct!.advAdditionalPathVpnv4),
    adv_additional_path_vpnv6: cdktf.numberToTerraform(struct!.advAdditionalPathVpnv6),
    advertisement_interval: cdktf.numberToTerraform(struct!.advertisementInterval),
    allowas_in: cdktf.numberToTerraform(struct!.allowasIn),
    allowas_in6: cdktf.numberToTerraform(struct!.allowasIn6),
    allowas_in_enable: cdktf.stringToTerraform(struct!.allowasInEnable),
    allowas_in_enable6: cdktf.stringToTerraform(struct!.allowasInEnable6),
    allowas_in_enable_evpn: cdktf.stringToTerraform(struct!.allowasInEnableEvpn),
    allowas_in_enable_vpnv4: cdktf.stringToTerraform(struct!.allowasInEnableVpnv4),
    allowas_in_enable_vpnv6: cdktf.stringToTerraform(struct!.allowasInEnableVpnv6),
    allowas_in_evpn: cdktf.numberToTerraform(struct!.allowasInEvpn),
    allowas_in_vpnv4: cdktf.numberToTerraform(struct!.allowasInVpnv4),
    allowas_in_vpnv6: cdktf.numberToTerraform(struct!.allowasInVpnv6),
    as_override: cdktf.stringToTerraform(struct!.asOverride),
    as_override6: cdktf.stringToTerraform(struct!.asOverride6),
    attribute_unchanged: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeUnchanged),
    attribute_unchanged6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeUnchanged6),
    attribute_unchanged_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeUnchangedVpnv4),
    attribute_unchanged_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeUnchangedVpnv6),
    auth_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authOptions),
    bfd: cdktf.stringToTerraform(struct!.bfd),
    capability_default_originate: cdktf.stringToTerraform(struct!.capabilityDefaultOriginate),
    capability_default_originate6: cdktf.stringToTerraform(struct!.capabilityDefaultOriginate6),
    capability_dynamic: cdktf.stringToTerraform(struct!.capabilityDynamic),
    capability_graceful_restart: cdktf.stringToTerraform(struct!.capabilityGracefulRestart),
    capability_graceful_restart6: cdktf.stringToTerraform(struct!.capabilityGracefulRestart6),
    capability_graceful_restart_evpn: cdktf.stringToTerraform(struct!.capabilityGracefulRestartEvpn),
    capability_graceful_restart_vpnv4: cdktf.stringToTerraform(struct!.capabilityGracefulRestartVpnv4),
    capability_graceful_restart_vpnv6: cdktf.stringToTerraform(struct!.capabilityGracefulRestartVpnv6),
    capability_orf: cdktf.stringToTerraform(struct!.capabilityOrf),
    capability_orf6: cdktf.stringToTerraform(struct!.capabilityOrf6),
    capability_route_refresh: cdktf.stringToTerraform(struct!.capabilityRouteRefresh),
    connect_timer: cdktf.numberToTerraform(struct!.connectTimer),
    default_originate_routemap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultOriginateRoutemap),
    default_originate_routemap6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultOriginateRoutemap6),
    description: cdktf.stringToTerraform(struct!.description),
    distribute_list_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListIn),
    distribute_list_in6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListIn6),
    distribute_list_in_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListInVpnv4),
    distribute_list_in_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListInVpnv6),
    distribute_list_out: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListOut),
    distribute_list_out6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListOut6),
    distribute_list_out_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListOutVpnv4),
    distribute_list_out_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListOutVpnv6),
    dont_capability_negotiate: cdktf.stringToTerraform(struct!.dontCapabilityNegotiate),
    ebgp_enforce_multihop: cdktf.stringToTerraform(struct!.ebgpEnforceMultihop),
    ebgp_multihop_ttl: cdktf.numberToTerraform(struct!.ebgpMultihopTtl),
    filter_list_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListIn),
    filter_list_in6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListIn6),
    filter_list_in_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListInVpnv4),
    filter_list_in_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListInVpnv6),
    filter_list_out: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListOut),
    filter_list_out6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListOut6),
    filter_list_out_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListOutVpnv4),
    filter_list_out_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListOutVpnv6),
    holdtime_timer: cdktf.numberToTerraform(struct!.holdtimeTimer),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
    keep_alive_timer: cdktf.numberToTerraform(struct!.keepAliveTimer),
    link_down_failover: cdktf.stringToTerraform(struct!.linkDownFailover),
    local_as: cdktf.numberToTerraform(struct!.localAs),
    local_as_no_prepend: cdktf.stringToTerraform(struct!.localAsNoPrepend),
    local_as_replace_as: cdktf.stringToTerraform(struct!.localAsReplaceAs),
    maximum_prefix: cdktf.numberToTerraform(struct!.maximumPrefix),
    maximum_prefix6: cdktf.numberToTerraform(struct!.maximumPrefix6),
    maximum_prefix_evpn: cdktf.numberToTerraform(struct!.maximumPrefixEvpn),
    maximum_prefix_threshold: cdktf.numberToTerraform(struct!.maximumPrefixThreshold),
    maximum_prefix_threshold6: cdktf.numberToTerraform(struct!.maximumPrefixThreshold6),
    maximum_prefix_threshold_evpn: cdktf.numberToTerraform(struct!.maximumPrefixThresholdEvpn),
    maximum_prefix_threshold_vpnv4: cdktf.numberToTerraform(struct!.maximumPrefixThresholdVpnv4),
    maximum_prefix_threshold_vpnv6: cdktf.numberToTerraform(struct!.maximumPrefixThresholdVpnv6),
    maximum_prefix_vpnv4: cdktf.numberToTerraform(struct!.maximumPrefixVpnv4),
    maximum_prefix_vpnv6: cdktf.numberToTerraform(struct!.maximumPrefixVpnv6),
    maximum_prefix_warning_only: cdktf.stringToTerraform(struct!.maximumPrefixWarningOnly),
    maximum_prefix_warning_only6: cdktf.stringToTerraform(struct!.maximumPrefixWarningOnly6),
    maximum_prefix_warning_only_evpn: cdktf.stringToTerraform(struct!.maximumPrefixWarningOnlyEvpn),
    maximum_prefix_warning_only_vpnv4: cdktf.stringToTerraform(struct!.maximumPrefixWarningOnlyVpnv4),
    maximum_prefix_warning_only_vpnv6: cdktf.stringToTerraform(struct!.maximumPrefixWarningOnlyVpnv6),
    next_hop_self: cdktf.stringToTerraform(struct!.nextHopSelf),
    next_hop_self6: cdktf.stringToTerraform(struct!.nextHopSelf6),
    next_hop_self_rr: cdktf.stringToTerraform(struct!.nextHopSelfRr),
    next_hop_self_rr6: cdktf.stringToTerraform(struct!.nextHopSelfRr6),
    next_hop_self_vpnv4: cdktf.stringToTerraform(struct!.nextHopSelfVpnv4),
    next_hop_self_vpnv6: cdktf.stringToTerraform(struct!.nextHopSelfVpnv6),
    override_capability: cdktf.stringToTerraform(struct!.overrideCapability),
    passive: cdktf.stringToTerraform(struct!.passive),
    password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password),
    prefix_list_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListIn),
    prefix_list_in6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListIn6),
    prefix_list_in_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListInVpnv4),
    prefix_list_in_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListInVpnv6),
    prefix_list_out: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListOut),
    prefix_list_out6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListOut6),
    prefix_list_out_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListOutVpnv4),
    prefix_list_out_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListOutVpnv6),
    remote_as: cdktf.numberToTerraform(struct!.remoteAs),
    remove_private_as: cdktf.stringToTerraform(struct!.removePrivateAs),
    remove_private_as6: cdktf.stringToTerraform(struct!.removePrivateAs6),
    remove_private_as_evpn: cdktf.stringToTerraform(struct!.removePrivateAsEvpn),
    remove_private_as_vpnv4: cdktf.stringToTerraform(struct!.removePrivateAsVpnv4),
    remove_private_as_vpnv6: cdktf.stringToTerraform(struct!.removePrivateAsVpnv6),
    restart_time: cdktf.numberToTerraform(struct!.restartTime),
    retain_stale_time: cdktf.numberToTerraform(struct!.retainStaleTime),
    route_map_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapIn),
    route_map_in6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapIn6),
    route_map_in_evpn: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapInEvpn),
    route_map_in_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapInVpnv4),
    route_map_in_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapInVpnv6),
    route_map_out: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOut),
    route_map_out6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOut6),
    route_map_out6_preferable: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOut6Preferable),
    route_map_out_evpn: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOutEvpn),
    route_map_out_preferable: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOutPreferable),
    route_map_out_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOutVpnv4),
    route_map_out_vpnv4_preferable: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOutVpnv4Preferable),
    route_map_out_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOutVpnv6),
    route_map_out_vpnv6_preferable: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOutVpnv6Preferable),
    route_reflector_client: cdktf.stringToTerraform(struct!.routeReflectorClient),
    route_reflector_client6: cdktf.stringToTerraform(struct!.routeReflectorClient6),
    route_reflector_client_evpn: cdktf.stringToTerraform(struct!.routeReflectorClientEvpn),
    route_reflector_client_vpnv4: cdktf.stringToTerraform(struct!.routeReflectorClientVpnv4),
    route_reflector_client_vpnv6: cdktf.stringToTerraform(struct!.routeReflectorClientVpnv6),
    route_server_client: cdktf.stringToTerraform(struct!.routeServerClient),
    route_server_client6: cdktf.stringToTerraform(struct!.routeServerClient6),
    route_server_client_evpn: cdktf.stringToTerraform(struct!.routeServerClientEvpn),
    route_server_client_vpnv4: cdktf.stringToTerraform(struct!.routeServerClientVpnv4),
    route_server_client_vpnv6: cdktf.stringToTerraform(struct!.routeServerClientVpnv6),
    rr_attr_allow_change: cdktf.stringToTerraform(struct!.rrAttrAllowChange),
    rr_attr_allow_change6: cdktf.stringToTerraform(struct!.rrAttrAllowChange6),
    rr_attr_allow_change_evpn: cdktf.stringToTerraform(struct!.rrAttrAllowChangeEvpn),
    rr_attr_allow_change_vpnv4: cdktf.stringToTerraform(struct!.rrAttrAllowChangeVpnv4),
    rr_attr_allow_change_vpnv6: cdktf.stringToTerraform(struct!.rrAttrAllowChangeVpnv6),
    send_community: cdktf.stringToTerraform(struct!.sendCommunity),
    send_community6: cdktf.stringToTerraform(struct!.sendCommunity6),
    send_community_evpn: cdktf.stringToTerraform(struct!.sendCommunityEvpn),
    send_community_vpnv4: cdktf.stringToTerraform(struct!.sendCommunityVpnv4),
    send_community_vpnv6: cdktf.stringToTerraform(struct!.sendCommunityVpnv6),
    shutdown: cdktf.stringToTerraform(struct!.shutdown),
    soft_reconfiguration: cdktf.stringToTerraform(struct!.softReconfiguration),
    soft_reconfiguration6: cdktf.stringToTerraform(struct!.softReconfiguration6),
    soft_reconfiguration_evpn: cdktf.stringToTerraform(struct!.softReconfigurationEvpn),
    soft_reconfiguration_vpnv4: cdktf.stringToTerraform(struct!.softReconfigurationVpnv4),
    soft_reconfiguration_vpnv6: cdktf.stringToTerraform(struct!.softReconfigurationVpnv6),
    stale_route: cdktf.stringToTerraform(struct!.staleRoute),
    strict_capability_match: cdktf.stringToTerraform(struct!.strictCapabilityMatch),
    unsuppress_map: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unsuppressMap),
    unsuppress_map6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unsuppressMap6),
    update_source: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.updateSource),
    weight: cdktf.numberToTerraform(struct!.weight),
    conditional_advertise: cdktf.listMapper(routerBgpNeighborConditionalAdvertiseToTerraform, true)(struct!.conditionalAdvertise),
    conditional_advertise6: cdktf.listMapper(routerBgpNeighborConditionalAdvertise6ToTerraform, true)(struct!.conditionalAdvertise6),
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
    activate_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.activateVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    activate_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.activateVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_path: {
      value: cdktf.stringToHclTerraform(struct!.additionalPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_path6: {
      value: cdktf.stringToHclTerraform(struct!.additionalPath6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_path_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.additionalPathVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_path_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.additionalPathVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adv_additional_path: {
      value: cdktf.numberToHclTerraform(struct!.advAdditionalPath),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adv_additional_path6: {
      value: cdktf.numberToHclTerraform(struct!.advAdditionalPath6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adv_additional_path_vpnv4: {
      value: cdktf.numberToHclTerraform(struct!.advAdditionalPathVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adv_additional_path_vpnv6: {
      value: cdktf.numberToHclTerraform(struct!.advAdditionalPathVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    allowas_in_enable_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.allowasInEnableVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowas_in_enable_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.allowasInEnableVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowas_in_evpn: {
      value: cdktf.numberToHclTerraform(struct!.allowasInEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_vpnv4: {
      value: cdktf.numberToHclTerraform(struct!.allowasInVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_vpnv6: {
      value: cdktf.numberToHclTerraform(struct!.allowasInVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeUnchanged),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    attribute_unchanged6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeUnchanged6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    attribute_unchanged_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeUnchangedVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    attribute_unchanged_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeUnchangedVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    auth_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    capability_graceful_restart: {
      value: cdktf.stringToHclTerraform(struct!.capabilityGracefulRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_graceful_restart6: {
      value: cdktf.stringToHclTerraform(struct!.capabilityGracefulRestart6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_graceful_restart_evpn: {
      value: cdktf.stringToHclTerraform(struct!.capabilityGracefulRestartEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_graceful_restart_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.capabilityGracefulRestartVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_graceful_restart_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.capabilityGracefulRestartVpnv6),
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
    capability_route_refresh: {
      value: cdktf.stringToHclTerraform(struct!.capabilityRouteRefresh),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultOriginateRoutemap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_originate_routemap6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultOriginateRoutemap6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribute_list_in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListIn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    distribute_list_in6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListIn6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    distribute_list_in_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListInVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    distribute_list_in_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListInVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    distribute_list_out: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListOut),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    distribute_list_out6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListOut6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    distribute_list_out_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListOutVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    distribute_list_out_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListOutVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    filter_list_in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListIn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_list_in6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListIn6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_list_in_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListInVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_list_in_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListInVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_list_out: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListOut),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_list_out6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListOut6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_list_out_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListOutVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_list_out_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListOutVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    holdtime_timer: {
      value: cdktf.numberToHclTerraform(struct!.holdtimeTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    link_down_failover: {
      value: cdktf.stringToHclTerraform(struct!.linkDownFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_as: {
      value: cdktf.numberToHclTerraform(struct!.localAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_as_no_prepend: {
      value: cdktf.stringToHclTerraform(struct!.localAsNoPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_as_replace_as: {
      value: cdktf.stringToHclTerraform(struct!.localAsReplaceAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    maximum_prefix_evpn: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixEvpn),
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
    maximum_prefix_threshold_evpn: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThresholdEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_threshold_vpnv4: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThresholdVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_threshold_vpnv6: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThresholdVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_vpnv4: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_vpnv6: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixVpnv6),
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
    maximum_prefix_warning_only_evpn: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixWarningOnlyEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_prefix_warning_only_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixWarningOnlyVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_prefix_warning_only_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixWarningOnlyVpnv6),
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
    next_hop_self_rr: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelfRr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self_rr6: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelfRr6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelfVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelfVpnv6),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListIn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_in6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListIn6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_in_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListInVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_in_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListInVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_out: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListOut),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_out6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListOut6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_out_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListOutVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_out_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListOutVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    remove_private_as_evpn: {
      value: cdktf.stringToHclTerraform(struct!.removePrivateAsEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.removePrivateAsVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.removePrivateAsVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restart_time: {
      value: cdktf.numberToHclTerraform(struct!.restartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retain_stale_time: {
      value: cdktf.numberToHclTerraform(struct!.retainStaleTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map_in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapIn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_in6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapIn6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_in_evpn: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapInEvpn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_in_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapInVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_in_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapInVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOut),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOut6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out6_preferable: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOut6Preferable),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out_evpn: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOutEvpn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out_preferable: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOutPreferable),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOutVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out_vpnv4_preferable: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOutVpnv4Preferable),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOutVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out_vpnv6_preferable: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOutVpnv6Preferable),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    route_reflector_client_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.routeReflectorClientVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_reflector_client_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.routeReflectorClientVpnv6),
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
    route_server_client_evpn: {
      value: cdktf.stringToHclTerraform(struct!.routeServerClientEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_server_client_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.routeServerClientVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_server_client_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.routeServerClientVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rr_attr_allow_change: {
      value: cdktf.stringToHclTerraform(struct!.rrAttrAllowChange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rr_attr_allow_change6: {
      value: cdktf.stringToHclTerraform(struct!.rrAttrAllowChange6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rr_attr_allow_change_evpn: {
      value: cdktf.stringToHclTerraform(struct!.rrAttrAllowChangeEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rr_attr_allow_change_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.rrAttrAllowChangeVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rr_attr_allow_change_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.rrAttrAllowChangeVpnv6),
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
    send_community_evpn: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVpnv6),
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
    soft_reconfiguration_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.softReconfigurationVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_reconfiguration_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.softReconfigurationVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stale_route: {
      value: cdktf.stringToHclTerraform(struct!.staleRoute),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unsuppressMap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    unsuppress_map6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unsuppressMap6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    update_source: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.updateSource),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conditional_advertise: {
      value: cdktf.listMapperHcl(routerBgpNeighborConditionalAdvertiseToHclTerraform, true)(struct!.conditionalAdvertise),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborConditionalAdvertiseList",
    },
    conditional_advertise6: {
      value: cdktf.listMapperHcl(routerBgpNeighborConditionalAdvertise6ToHclTerraform, true)(struct!.conditionalAdvertise6),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpNeighborConditionalAdvertise6List",
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
    if (this._activateVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateVpnv4 = this._activateVpnv4;
    }
    if (this._activateVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateVpnv6 = this._activateVpnv6;
    }
    if (this._additionalPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPath = this._additionalPath;
    }
    if (this._additionalPath6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPath6 = this._additionalPath6;
    }
    if (this._additionalPathVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPathVpnv4 = this._additionalPathVpnv4;
    }
    if (this._additionalPathVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPathVpnv6 = this._additionalPathVpnv6;
    }
    if (this._advAdditionalPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.advAdditionalPath = this._advAdditionalPath;
    }
    if (this._advAdditionalPath6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.advAdditionalPath6 = this._advAdditionalPath6;
    }
    if (this._advAdditionalPathVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.advAdditionalPathVpnv4 = this._advAdditionalPathVpnv4;
    }
    if (this._advAdditionalPathVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.advAdditionalPathVpnv6 = this._advAdditionalPathVpnv6;
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
    if (this._allowasInEnableVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInEnableVpnv4 = this._allowasInEnableVpnv4;
    }
    if (this._allowasInEnableVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInEnableVpnv6 = this._allowasInEnableVpnv6;
    }
    if (this._allowasInEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInEvpn = this._allowasInEvpn;
    }
    if (this._allowasInVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInVpnv4 = this._allowasInVpnv4;
    }
    if (this._allowasInVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInVpnv6 = this._allowasInVpnv6;
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
    if (this._attributeUnchangedVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeUnchangedVpnv4 = this._attributeUnchangedVpnv4;
    }
    if (this._attributeUnchangedVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeUnchangedVpnv6 = this._attributeUnchangedVpnv6;
    }
    if (this._authOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.authOptions = this._authOptions;
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
    if (this._capabilityGracefulRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityGracefulRestart = this._capabilityGracefulRestart;
    }
    if (this._capabilityGracefulRestart6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityGracefulRestart6 = this._capabilityGracefulRestart6;
    }
    if (this._capabilityGracefulRestartEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityGracefulRestartEvpn = this._capabilityGracefulRestartEvpn;
    }
    if (this._capabilityGracefulRestartVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityGracefulRestartVpnv4 = this._capabilityGracefulRestartVpnv4;
    }
    if (this._capabilityGracefulRestartVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityGracefulRestartVpnv6 = this._capabilityGracefulRestartVpnv6;
    }
    if (this._capabilityOrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityOrf = this._capabilityOrf;
    }
    if (this._capabilityOrf6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityOrf6 = this._capabilityOrf6;
    }
    if (this._capabilityRouteRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityRouteRefresh = this._capabilityRouteRefresh;
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
    if (this._distributeListInVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListInVpnv4 = this._distributeListInVpnv4;
    }
    if (this._distributeListInVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListInVpnv6 = this._distributeListInVpnv6;
    }
    if (this._distributeListOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListOut = this._distributeListOut;
    }
    if (this._distributeListOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListOut6 = this._distributeListOut6;
    }
    if (this._distributeListOutVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListOutVpnv4 = this._distributeListOutVpnv4;
    }
    if (this._distributeListOutVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListOutVpnv6 = this._distributeListOutVpnv6;
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
    if (this._filterListIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListIn = this._filterListIn;
    }
    if (this._filterListIn6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListIn6 = this._filterListIn6;
    }
    if (this._filterListInVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListInVpnv4 = this._filterListInVpnv4;
    }
    if (this._filterListInVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListInVpnv6 = this._filterListInVpnv6;
    }
    if (this._filterListOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListOut = this._filterListOut;
    }
    if (this._filterListOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListOut6 = this._filterListOut6;
    }
    if (this._filterListOutVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListOutVpnv4 = this._filterListOutVpnv4;
    }
    if (this._filterListOutVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListOutVpnv6 = this._filterListOutVpnv6;
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
    if (this._linkDownFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkDownFailover = this._linkDownFailover;
    }
    if (this._localAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAs = this._localAs;
    }
    if (this._localAsNoPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsNoPrepend = this._localAsNoPrepend;
    }
    if (this._localAsReplaceAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsReplaceAs = this._localAsReplaceAs;
    }
    if (this._maximumPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix;
    }
    if (this._maximumPrefix6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix6 = this._maximumPrefix6;
    }
    if (this._maximumPrefixEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixEvpn = this._maximumPrefixEvpn;
    }
    if (this._maximumPrefixThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThreshold = this._maximumPrefixThreshold;
    }
    if (this._maximumPrefixThreshold6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThreshold6 = this._maximumPrefixThreshold6;
    }
    if (this._maximumPrefixThresholdEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThresholdEvpn = this._maximumPrefixThresholdEvpn;
    }
    if (this._maximumPrefixThresholdVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThresholdVpnv4 = this._maximumPrefixThresholdVpnv4;
    }
    if (this._maximumPrefixThresholdVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThresholdVpnv6 = this._maximumPrefixThresholdVpnv6;
    }
    if (this._maximumPrefixVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixVpnv4 = this._maximumPrefixVpnv4;
    }
    if (this._maximumPrefixVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixVpnv6 = this._maximumPrefixVpnv6;
    }
    if (this._maximumPrefixWarningOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixWarningOnly = this._maximumPrefixWarningOnly;
    }
    if (this._maximumPrefixWarningOnly6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixWarningOnly6 = this._maximumPrefixWarningOnly6;
    }
    if (this._maximumPrefixWarningOnlyEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixWarningOnlyEvpn = this._maximumPrefixWarningOnlyEvpn;
    }
    if (this._maximumPrefixWarningOnlyVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixWarningOnlyVpnv4 = this._maximumPrefixWarningOnlyVpnv4;
    }
    if (this._maximumPrefixWarningOnlyVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixWarningOnlyVpnv6 = this._maximumPrefixWarningOnlyVpnv6;
    }
    if (this._nextHopSelf !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf = this._nextHopSelf;
    }
    if (this._nextHopSelf6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelf6 = this._nextHopSelf6;
    }
    if (this._nextHopSelfRr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelfRr = this._nextHopSelfRr;
    }
    if (this._nextHopSelfRr6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelfRr6 = this._nextHopSelfRr6;
    }
    if (this._nextHopSelfVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelfVpnv4 = this._nextHopSelfVpnv4;
    }
    if (this._nextHopSelfVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelfVpnv6 = this._nextHopSelfVpnv6;
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
    if (this._prefixListInVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListInVpnv4 = this._prefixListInVpnv4;
    }
    if (this._prefixListInVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListInVpnv6 = this._prefixListInVpnv6;
    }
    if (this._prefixListOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListOut = this._prefixListOut;
    }
    if (this._prefixListOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListOut6 = this._prefixListOut6;
    }
    if (this._prefixListOutVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListOutVpnv4 = this._prefixListOutVpnv4;
    }
    if (this._prefixListOutVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListOutVpnv6 = this._prefixListOutVpnv6;
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
    if (this._removePrivateAsEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAsEvpn = this._removePrivateAsEvpn;
    }
    if (this._removePrivateAsVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAsVpnv4 = this._removePrivateAsVpnv4;
    }
    if (this._removePrivateAsVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAsVpnv6 = this._removePrivateAsVpnv6;
    }
    if (this._restartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartTime = this._restartTime;
    }
    if (this._retainStaleTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainStaleTime = this._retainStaleTime;
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
    if (this._routeMapInVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapInVpnv4 = this._routeMapInVpnv4;
    }
    if (this._routeMapInVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapInVpnv6 = this._routeMapInVpnv6;
    }
    if (this._routeMapOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOut = this._routeMapOut;
    }
    if (this._routeMapOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOut6 = this._routeMapOut6;
    }
    if (this._routeMapOut6Preferable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOut6Preferable = this._routeMapOut6Preferable;
    }
    if (this._routeMapOutEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutEvpn = this._routeMapOutEvpn;
    }
    if (this._routeMapOutPreferable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutPreferable = this._routeMapOutPreferable;
    }
    if (this._routeMapOutVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutVpnv4 = this._routeMapOutVpnv4;
    }
    if (this._routeMapOutVpnv4Preferable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutVpnv4Preferable = this._routeMapOutVpnv4Preferable;
    }
    if (this._routeMapOutVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutVpnv6 = this._routeMapOutVpnv6;
    }
    if (this._routeMapOutVpnv6Preferable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutVpnv6Preferable = this._routeMapOutVpnv6Preferable;
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
    if (this._routeReflectorClientVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeReflectorClientVpnv4 = this._routeReflectorClientVpnv4;
    }
    if (this._routeReflectorClientVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeReflectorClientVpnv6 = this._routeReflectorClientVpnv6;
    }
    if (this._routeServerClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerClient = this._routeServerClient;
    }
    if (this._routeServerClient6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerClient6 = this._routeServerClient6;
    }
    if (this._routeServerClientEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerClientEvpn = this._routeServerClientEvpn;
    }
    if (this._routeServerClientVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerClientVpnv4 = this._routeServerClientVpnv4;
    }
    if (this._routeServerClientVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerClientVpnv6 = this._routeServerClientVpnv6;
    }
    if (this._rrAttrAllowChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrAttrAllowChange = this._rrAttrAllowChange;
    }
    if (this._rrAttrAllowChange6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrAttrAllowChange6 = this._rrAttrAllowChange6;
    }
    if (this._rrAttrAllowChangeEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrAttrAllowChangeEvpn = this._rrAttrAllowChangeEvpn;
    }
    if (this._rrAttrAllowChangeVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrAttrAllowChangeVpnv4 = this._rrAttrAllowChangeVpnv4;
    }
    if (this._rrAttrAllowChangeVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrAttrAllowChangeVpnv6 = this._rrAttrAllowChangeVpnv6;
    }
    if (this._sendCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity = this._sendCommunity;
    }
    if (this._sendCommunity6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity6 = this._sendCommunity6;
    }
    if (this._sendCommunityEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityEvpn = this._sendCommunityEvpn;
    }
    if (this._sendCommunityVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVpnv4 = this._sendCommunityVpnv4;
    }
    if (this._sendCommunityVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVpnv6 = this._sendCommunityVpnv6;
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
    if (this._softReconfigurationVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.softReconfigurationVpnv4 = this._softReconfigurationVpnv4;
    }
    if (this._softReconfigurationVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.softReconfigurationVpnv6 = this._softReconfigurationVpnv6;
    }
    if (this._staleRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleRoute = this._staleRoute;
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
    if (this._conditionalAdvertise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalAdvertise = this._conditionalAdvertise?.internalValue;
    }
    if (this._conditionalAdvertise6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalAdvertise6 = this._conditionalAdvertise6?.internalValue;
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
      this._activateVpnv4 = undefined;
      this._activateVpnv6 = undefined;
      this._additionalPath = undefined;
      this._additionalPath6 = undefined;
      this._additionalPathVpnv4 = undefined;
      this._additionalPathVpnv6 = undefined;
      this._advAdditionalPath = undefined;
      this._advAdditionalPath6 = undefined;
      this._advAdditionalPathVpnv4 = undefined;
      this._advAdditionalPathVpnv6 = undefined;
      this._advertisementInterval = undefined;
      this._allowasIn = undefined;
      this._allowasIn6 = undefined;
      this._allowasInEnable = undefined;
      this._allowasInEnable6 = undefined;
      this._allowasInEnableEvpn = undefined;
      this._allowasInEnableVpnv4 = undefined;
      this._allowasInEnableVpnv6 = undefined;
      this._allowasInEvpn = undefined;
      this._allowasInVpnv4 = undefined;
      this._allowasInVpnv6 = undefined;
      this._asOverride = undefined;
      this._asOverride6 = undefined;
      this._attributeUnchanged = undefined;
      this._attributeUnchanged6 = undefined;
      this._attributeUnchangedVpnv4 = undefined;
      this._attributeUnchangedVpnv6 = undefined;
      this._authOptions = undefined;
      this._bfd = undefined;
      this._capabilityDefaultOriginate = undefined;
      this._capabilityDefaultOriginate6 = undefined;
      this._capabilityDynamic = undefined;
      this._capabilityGracefulRestart = undefined;
      this._capabilityGracefulRestart6 = undefined;
      this._capabilityGracefulRestartEvpn = undefined;
      this._capabilityGracefulRestartVpnv4 = undefined;
      this._capabilityGracefulRestartVpnv6 = undefined;
      this._capabilityOrf = undefined;
      this._capabilityOrf6 = undefined;
      this._capabilityRouteRefresh = undefined;
      this._connectTimer = undefined;
      this._defaultOriginateRoutemap = undefined;
      this._defaultOriginateRoutemap6 = undefined;
      this._description = undefined;
      this._distributeListIn = undefined;
      this._distributeListIn6 = undefined;
      this._distributeListInVpnv4 = undefined;
      this._distributeListInVpnv6 = undefined;
      this._distributeListOut = undefined;
      this._distributeListOut6 = undefined;
      this._distributeListOutVpnv4 = undefined;
      this._distributeListOutVpnv6 = undefined;
      this._dontCapabilityNegotiate = undefined;
      this._ebgpEnforceMultihop = undefined;
      this._ebgpMultihopTtl = undefined;
      this._filterListIn = undefined;
      this._filterListIn6 = undefined;
      this._filterListInVpnv4 = undefined;
      this._filterListInVpnv6 = undefined;
      this._filterListOut = undefined;
      this._filterListOut6 = undefined;
      this._filterListOutVpnv4 = undefined;
      this._filterListOutVpnv6 = undefined;
      this._holdtimeTimer = undefined;
      this._interface = undefined;
      this._ip = undefined;
      this._keepAliveTimer = undefined;
      this._linkDownFailover = undefined;
      this._localAs = undefined;
      this._localAsNoPrepend = undefined;
      this._localAsReplaceAs = undefined;
      this._maximumPrefix = undefined;
      this._maximumPrefix6 = undefined;
      this._maximumPrefixEvpn = undefined;
      this._maximumPrefixThreshold = undefined;
      this._maximumPrefixThreshold6 = undefined;
      this._maximumPrefixThresholdEvpn = undefined;
      this._maximumPrefixThresholdVpnv4 = undefined;
      this._maximumPrefixThresholdVpnv6 = undefined;
      this._maximumPrefixVpnv4 = undefined;
      this._maximumPrefixVpnv6 = undefined;
      this._maximumPrefixWarningOnly = undefined;
      this._maximumPrefixWarningOnly6 = undefined;
      this._maximumPrefixWarningOnlyEvpn = undefined;
      this._maximumPrefixWarningOnlyVpnv4 = undefined;
      this._maximumPrefixWarningOnlyVpnv6 = undefined;
      this._nextHopSelf = undefined;
      this._nextHopSelf6 = undefined;
      this._nextHopSelfRr = undefined;
      this._nextHopSelfRr6 = undefined;
      this._nextHopSelfVpnv4 = undefined;
      this._nextHopSelfVpnv6 = undefined;
      this._overrideCapability = undefined;
      this._passive = undefined;
      this._password = undefined;
      this._prefixListIn = undefined;
      this._prefixListIn6 = undefined;
      this._prefixListInVpnv4 = undefined;
      this._prefixListInVpnv6 = undefined;
      this._prefixListOut = undefined;
      this._prefixListOut6 = undefined;
      this._prefixListOutVpnv4 = undefined;
      this._prefixListOutVpnv6 = undefined;
      this._remoteAs = undefined;
      this._removePrivateAs = undefined;
      this._removePrivateAs6 = undefined;
      this._removePrivateAsEvpn = undefined;
      this._removePrivateAsVpnv4 = undefined;
      this._removePrivateAsVpnv6 = undefined;
      this._restartTime = undefined;
      this._retainStaleTime = undefined;
      this._routeMapIn = undefined;
      this._routeMapIn6 = undefined;
      this._routeMapInEvpn = undefined;
      this._routeMapInVpnv4 = undefined;
      this._routeMapInVpnv6 = undefined;
      this._routeMapOut = undefined;
      this._routeMapOut6 = undefined;
      this._routeMapOut6Preferable = undefined;
      this._routeMapOutEvpn = undefined;
      this._routeMapOutPreferable = undefined;
      this._routeMapOutVpnv4 = undefined;
      this._routeMapOutVpnv4Preferable = undefined;
      this._routeMapOutVpnv6 = undefined;
      this._routeMapOutVpnv6Preferable = undefined;
      this._routeReflectorClient = undefined;
      this._routeReflectorClient6 = undefined;
      this._routeReflectorClientEvpn = undefined;
      this._routeReflectorClientVpnv4 = undefined;
      this._routeReflectorClientVpnv6 = undefined;
      this._routeServerClient = undefined;
      this._routeServerClient6 = undefined;
      this._routeServerClientEvpn = undefined;
      this._routeServerClientVpnv4 = undefined;
      this._routeServerClientVpnv6 = undefined;
      this._rrAttrAllowChange = undefined;
      this._rrAttrAllowChange6 = undefined;
      this._rrAttrAllowChangeEvpn = undefined;
      this._rrAttrAllowChangeVpnv4 = undefined;
      this._rrAttrAllowChangeVpnv6 = undefined;
      this._sendCommunity = undefined;
      this._sendCommunity6 = undefined;
      this._sendCommunityEvpn = undefined;
      this._sendCommunityVpnv4 = undefined;
      this._sendCommunityVpnv6 = undefined;
      this._shutdown = undefined;
      this._softReconfiguration = undefined;
      this._softReconfiguration6 = undefined;
      this._softReconfigurationEvpn = undefined;
      this._softReconfigurationVpnv4 = undefined;
      this._softReconfigurationVpnv6 = undefined;
      this._staleRoute = undefined;
      this._strictCapabilityMatch = undefined;
      this._unsuppressMap = undefined;
      this._unsuppressMap6 = undefined;
      this._updateSource = undefined;
      this._weight = undefined;
      this._conditionalAdvertise.internalValue = undefined;
      this._conditionalAdvertise6.internalValue = undefined;
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
      this._activateVpnv4 = value.activateVpnv4;
      this._activateVpnv6 = value.activateVpnv6;
      this._additionalPath = value.additionalPath;
      this._additionalPath6 = value.additionalPath6;
      this._additionalPathVpnv4 = value.additionalPathVpnv4;
      this._additionalPathVpnv6 = value.additionalPathVpnv6;
      this._advAdditionalPath = value.advAdditionalPath;
      this._advAdditionalPath6 = value.advAdditionalPath6;
      this._advAdditionalPathVpnv4 = value.advAdditionalPathVpnv4;
      this._advAdditionalPathVpnv6 = value.advAdditionalPathVpnv6;
      this._advertisementInterval = value.advertisementInterval;
      this._allowasIn = value.allowasIn;
      this._allowasIn6 = value.allowasIn6;
      this._allowasInEnable = value.allowasInEnable;
      this._allowasInEnable6 = value.allowasInEnable6;
      this._allowasInEnableEvpn = value.allowasInEnableEvpn;
      this._allowasInEnableVpnv4 = value.allowasInEnableVpnv4;
      this._allowasInEnableVpnv6 = value.allowasInEnableVpnv6;
      this._allowasInEvpn = value.allowasInEvpn;
      this._allowasInVpnv4 = value.allowasInVpnv4;
      this._allowasInVpnv6 = value.allowasInVpnv6;
      this._asOverride = value.asOverride;
      this._asOverride6 = value.asOverride6;
      this._attributeUnchanged = value.attributeUnchanged;
      this._attributeUnchanged6 = value.attributeUnchanged6;
      this._attributeUnchangedVpnv4 = value.attributeUnchangedVpnv4;
      this._attributeUnchangedVpnv6 = value.attributeUnchangedVpnv6;
      this._authOptions = value.authOptions;
      this._bfd = value.bfd;
      this._capabilityDefaultOriginate = value.capabilityDefaultOriginate;
      this._capabilityDefaultOriginate6 = value.capabilityDefaultOriginate6;
      this._capabilityDynamic = value.capabilityDynamic;
      this._capabilityGracefulRestart = value.capabilityGracefulRestart;
      this._capabilityGracefulRestart6 = value.capabilityGracefulRestart6;
      this._capabilityGracefulRestartEvpn = value.capabilityGracefulRestartEvpn;
      this._capabilityGracefulRestartVpnv4 = value.capabilityGracefulRestartVpnv4;
      this._capabilityGracefulRestartVpnv6 = value.capabilityGracefulRestartVpnv6;
      this._capabilityOrf = value.capabilityOrf;
      this._capabilityOrf6 = value.capabilityOrf6;
      this._capabilityRouteRefresh = value.capabilityRouteRefresh;
      this._connectTimer = value.connectTimer;
      this._defaultOriginateRoutemap = value.defaultOriginateRoutemap;
      this._defaultOriginateRoutemap6 = value.defaultOriginateRoutemap6;
      this._description = value.description;
      this._distributeListIn = value.distributeListIn;
      this._distributeListIn6 = value.distributeListIn6;
      this._distributeListInVpnv4 = value.distributeListInVpnv4;
      this._distributeListInVpnv6 = value.distributeListInVpnv6;
      this._distributeListOut = value.distributeListOut;
      this._distributeListOut6 = value.distributeListOut6;
      this._distributeListOutVpnv4 = value.distributeListOutVpnv4;
      this._distributeListOutVpnv6 = value.distributeListOutVpnv6;
      this._dontCapabilityNegotiate = value.dontCapabilityNegotiate;
      this._ebgpEnforceMultihop = value.ebgpEnforceMultihop;
      this._ebgpMultihopTtl = value.ebgpMultihopTtl;
      this._filterListIn = value.filterListIn;
      this._filterListIn6 = value.filterListIn6;
      this._filterListInVpnv4 = value.filterListInVpnv4;
      this._filterListInVpnv6 = value.filterListInVpnv6;
      this._filterListOut = value.filterListOut;
      this._filterListOut6 = value.filterListOut6;
      this._filterListOutVpnv4 = value.filterListOutVpnv4;
      this._filterListOutVpnv6 = value.filterListOutVpnv6;
      this._holdtimeTimer = value.holdtimeTimer;
      this._interface = value.interface;
      this._ip = value.ip;
      this._keepAliveTimer = value.keepAliveTimer;
      this._linkDownFailover = value.linkDownFailover;
      this._localAs = value.localAs;
      this._localAsNoPrepend = value.localAsNoPrepend;
      this._localAsReplaceAs = value.localAsReplaceAs;
      this._maximumPrefix = value.maximumPrefix;
      this._maximumPrefix6 = value.maximumPrefix6;
      this._maximumPrefixEvpn = value.maximumPrefixEvpn;
      this._maximumPrefixThreshold = value.maximumPrefixThreshold;
      this._maximumPrefixThreshold6 = value.maximumPrefixThreshold6;
      this._maximumPrefixThresholdEvpn = value.maximumPrefixThresholdEvpn;
      this._maximumPrefixThresholdVpnv4 = value.maximumPrefixThresholdVpnv4;
      this._maximumPrefixThresholdVpnv6 = value.maximumPrefixThresholdVpnv6;
      this._maximumPrefixVpnv4 = value.maximumPrefixVpnv4;
      this._maximumPrefixVpnv6 = value.maximumPrefixVpnv6;
      this._maximumPrefixWarningOnly = value.maximumPrefixWarningOnly;
      this._maximumPrefixWarningOnly6 = value.maximumPrefixWarningOnly6;
      this._maximumPrefixWarningOnlyEvpn = value.maximumPrefixWarningOnlyEvpn;
      this._maximumPrefixWarningOnlyVpnv4 = value.maximumPrefixWarningOnlyVpnv4;
      this._maximumPrefixWarningOnlyVpnv6 = value.maximumPrefixWarningOnlyVpnv6;
      this._nextHopSelf = value.nextHopSelf;
      this._nextHopSelf6 = value.nextHopSelf6;
      this._nextHopSelfRr = value.nextHopSelfRr;
      this._nextHopSelfRr6 = value.nextHopSelfRr6;
      this._nextHopSelfVpnv4 = value.nextHopSelfVpnv4;
      this._nextHopSelfVpnv6 = value.nextHopSelfVpnv6;
      this._overrideCapability = value.overrideCapability;
      this._passive = value.passive;
      this._password = value.password;
      this._prefixListIn = value.prefixListIn;
      this._prefixListIn6 = value.prefixListIn6;
      this._prefixListInVpnv4 = value.prefixListInVpnv4;
      this._prefixListInVpnv6 = value.prefixListInVpnv6;
      this._prefixListOut = value.prefixListOut;
      this._prefixListOut6 = value.prefixListOut6;
      this._prefixListOutVpnv4 = value.prefixListOutVpnv4;
      this._prefixListOutVpnv6 = value.prefixListOutVpnv6;
      this._remoteAs = value.remoteAs;
      this._removePrivateAs = value.removePrivateAs;
      this._removePrivateAs6 = value.removePrivateAs6;
      this._removePrivateAsEvpn = value.removePrivateAsEvpn;
      this._removePrivateAsVpnv4 = value.removePrivateAsVpnv4;
      this._removePrivateAsVpnv6 = value.removePrivateAsVpnv6;
      this._restartTime = value.restartTime;
      this._retainStaleTime = value.retainStaleTime;
      this._routeMapIn = value.routeMapIn;
      this._routeMapIn6 = value.routeMapIn6;
      this._routeMapInEvpn = value.routeMapInEvpn;
      this._routeMapInVpnv4 = value.routeMapInVpnv4;
      this._routeMapInVpnv6 = value.routeMapInVpnv6;
      this._routeMapOut = value.routeMapOut;
      this._routeMapOut6 = value.routeMapOut6;
      this._routeMapOut6Preferable = value.routeMapOut6Preferable;
      this._routeMapOutEvpn = value.routeMapOutEvpn;
      this._routeMapOutPreferable = value.routeMapOutPreferable;
      this._routeMapOutVpnv4 = value.routeMapOutVpnv4;
      this._routeMapOutVpnv4Preferable = value.routeMapOutVpnv4Preferable;
      this._routeMapOutVpnv6 = value.routeMapOutVpnv6;
      this._routeMapOutVpnv6Preferable = value.routeMapOutVpnv6Preferable;
      this._routeReflectorClient = value.routeReflectorClient;
      this._routeReflectorClient6 = value.routeReflectorClient6;
      this._routeReflectorClientEvpn = value.routeReflectorClientEvpn;
      this._routeReflectorClientVpnv4 = value.routeReflectorClientVpnv4;
      this._routeReflectorClientVpnv6 = value.routeReflectorClientVpnv6;
      this._routeServerClient = value.routeServerClient;
      this._routeServerClient6 = value.routeServerClient6;
      this._routeServerClientEvpn = value.routeServerClientEvpn;
      this._routeServerClientVpnv4 = value.routeServerClientVpnv4;
      this._routeServerClientVpnv6 = value.routeServerClientVpnv6;
      this._rrAttrAllowChange = value.rrAttrAllowChange;
      this._rrAttrAllowChange6 = value.rrAttrAllowChange6;
      this._rrAttrAllowChangeEvpn = value.rrAttrAllowChangeEvpn;
      this._rrAttrAllowChangeVpnv4 = value.rrAttrAllowChangeVpnv4;
      this._rrAttrAllowChangeVpnv6 = value.rrAttrAllowChangeVpnv6;
      this._sendCommunity = value.sendCommunity;
      this._sendCommunity6 = value.sendCommunity6;
      this._sendCommunityEvpn = value.sendCommunityEvpn;
      this._sendCommunityVpnv4 = value.sendCommunityVpnv4;
      this._sendCommunityVpnv6 = value.sendCommunityVpnv6;
      this._shutdown = value.shutdown;
      this._softReconfiguration = value.softReconfiguration;
      this._softReconfiguration6 = value.softReconfiguration6;
      this._softReconfigurationEvpn = value.softReconfigurationEvpn;
      this._softReconfigurationVpnv4 = value.softReconfigurationVpnv4;
      this._softReconfigurationVpnv6 = value.softReconfigurationVpnv6;
      this._staleRoute = value.staleRoute;
      this._strictCapabilityMatch = value.strictCapabilityMatch;
      this._unsuppressMap = value.unsuppressMap;
      this._unsuppressMap6 = value.unsuppressMap6;
      this._updateSource = value.updateSource;
      this._weight = value.weight;
      this._conditionalAdvertise.internalValue = value.conditionalAdvertise;
      this._conditionalAdvertise6.internalValue = value.conditionalAdvertise6;
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

  // activate_vpnv4 - computed: true, optional: true, required: false
  private _activateVpnv4?: string; 
  public get activateVpnv4() {
    return this.getStringAttribute('activate_vpnv4');
  }
  public set activateVpnv4(value: string) {
    this._activateVpnv4 = value;
  }
  public resetActivateVpnv4() {
    this._activateVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateVpnv4Input() {
    return this._activateVpnv4;
  }

  // activate_vpnv6 - computed: true, optional: true, required: false
  private _activateVpnv6?: string; 
  public get activateVpnv6() {
    return this.getStringAttribute('activate_vpnv6');
  }
  public set activateVpnv6(value: string) {
    this._activateVpnv6 = value;
  }
  public resetActivateVpnv6() {
    this._activateVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateVpnv6Input() {
    return this._activateVpnv6;
  }

  // additional_path - computed: true, optional: true, required: false
  private _additionalPath?: string; 
  public get additionalPath() {
    return this.getStringAttribute('additional_path');
  }
  public set additionalPath(value: string) {
    this._additionalPath = value;
  }
  public resetAdditionalPath() {
    this._additionalPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathInput() {
    return this._additionalPath;
  }

  // additional_path6 - computed: true, optional: true, required: false
  private _additionalPath6?: string; 
  public get additionalPath6() {
    return this.getStringAttribute('additional_path6');
  }
  public set additionalPath6(value: string) {
    this._additionalPath6 = value;
  }
  public resetAdditionalPath6() {
    this._additionalPath6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPath6Input() {
    return this._additionalPath6;
  }

  // additional_path_vpnv4 - computed: true, optional: true, required: false
  private _additionalPathVpnv4?: string; 
  public get additionalPathVpnv4() {
    return this.getStringAttribute('additional_path_vpnv4');
  }
  public set additionalPathVpnv4(value: string) {
    this._additionalPathVpnv4 = value;
  }
  public resetAdditionalPathVpnv4() {
    this._additionalPathVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathVpnv4Input() {
    return this._additionalPathVpnv4;
  }

  // additional_path_vpnv6 - computed: true, optional: true, required: false
  private _additionalPathVpnv6?: string; 
  public get additionalPathVpnv6() {
    return this.getStringAttribute('additional_path_vpnv6');
  }
  public set additionalPathVpnv6(value: string) {
    this._additionalPathVpnv6 = value;
  }
  public resetAdditionalPathVpnv6() {
    this._additionalPathVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathVpnv6Input() {
    return this._additionalPathVpnv6;
  }

  // adv_additional_path - computed: true, optional: true, required: false
  private _advAdditionalPath?: number; 
  public get advAdditionalPath() {
    return this.getNumberAttribute('adv_additional_path');
  }
  public set advAdditionalPath(value: number) {
    this._advAdditionalPath = value;
  }
  public resetAdvAdditionalPath() {
    this._advAdditionalPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advAdditionalPathInput() {
    return this._advAdditionalPath;
  }

  // adv_additional_path6 - computed: true, optional: true, required: false
  private _advAdditionalPath6?: number; 
  public get advAdditionalPath6() {
    return this.getNumberAttribute('adv_additional_path6');
  }
  public set advAdditionalPath6(value: number) {
    this._advAdditionalPath6 = value;
  }
  public resetAdvAdditionalPath6() {
    this._advAdditionalPath6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advAdditionalPath6Input() {
    return this._advAdditionalPath6;
  }

  // adv_additional_path_vpnv4 - computed: true, optional: true, required: false
  private _advAdditionalPathVpnv4?: number; 
  public get advAdditionalPathVpnv4() {
    return this.getNumberAttribute('adv_additional_path_vpnv4');
  }
  public set advAdditionalPathVpnv4(value: number) {
    this._advAdditionalPathVpnv4 = value;
  }
  public resetAdvAdditionalPathVpnv4() {
    this._advAdditionalPathVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advAdditionalPathVpnv4Input() {
    return this._advAdditionalPathVpnv4;
  }

  // adv_additional_path_vpnv6 - computed: false, optional: true, required: false
  private _advAdditionalPathVpnv6?: number; 
  public get advAdditionalPathVpnv6() {
    return this.getNumberAttribute('adv_additional_path_vpnv6');
  }
  public set advAdditionalPathVpnv6(value: number) {
    this._advAdditionalPathVpnv6 = value;
  }
  public resetAdvAdditionalPathVpnv6() {
    this._advAdditionalPathVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advAdditionalPathVpnv6Input() {
    return this._advAdditionalPathVpnv6;
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

  // allowas_in6 - computed: false, optional: true, required: false
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

  // allowas_in_enable_vpnv4 - computed: true, optional: true, required: false
  private _allowasInEnableVpnv4?: string; 
  public get allowasInEnableVpnv4() {
    return this.getStringAttribute('allowas_in_enable_vpnv4');
  }
  public set allowasInEnableVpnv4(value: string) {
    this._allowasInEnableVpnv4 = value;
  }
  public resetAllowasInEnableVpnv4() {
    this._allowasInEnableVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnableVpnv4Input() {
    return this._allowasInEnableVpnv4;
  }

  // allowas_in_enable_vpnv6 - computed: true, optional: true, required: false
  private _allowasInEnableVpnv6?: string; 
  public get allowasInEnableVpnv6() {
    return this.getStringAttribute('allowas_in_enable_vpnv6');
  }
  public set allowasInEnableVpnv6(value: string) {
    this._allowasInEnableVpnv6 = value;
  }
  public resetAllowasInEnableVpnv6() {
    this._allowasInEnableVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnableVpnv6Input() {
    return this._allowasInEnableVpnv6;
  }

  // allowas_in_evpn - computed: true, optional: true, required: false
  private _allowasInEvpn?: number; 
  public get allowasInEvpn() {
    return this.getNumberAttribute('allowas_in_evpn');
  }
  public set allowasInEvpn(value: number) {
    this._allowasInEvpn = value;
  }
  public resetAllowasInEvpn() {
    this._allowasInEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEvpnInput() {
    return this._allowasInEvpn;
  }

  // allowas_in_vpnv4 - computed: false, optional: true, required: false
  private _allowasInVpnv4?: number; 
  public get allowasInVpnv4() {
    return this.getNumberAttribute('allowas_in_vpnv4');
  }
  public set allowasInVpnv4(value: number) {
    this._allowasInVpnv4 = value;
  }
  public resetAllowasInVpnv4() {
    this._allowasInVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInVpnv4Input() {
    return this._allowasInVpnv4;
  }

  // allowas_in_vpnv6 - computed: true, optional: true, required: false
  private _allowasInVpnv6?: number; 
  public get allowasInVpnv6() {
    return this.getNumberAttribute('allowas_in_vpnv6');
  }
  public set allowasInVpnv6(value: number) {
    this._allowasInVpnv6 = value;
  }
  public resetAllowasInVpnv6() {
    this._allowasInVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInVpnv6Input() {
    return this._allowasInVpnv6;
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
  private _attributeUnchanged?: string[]; 
  public get attributeUnchanged() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_unchanged'));
  }
  public set attributeUnchanged(value: string[]) {
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
  private _attributeUnchanged6?: string[]; 
  public get attributeUnchanged6() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_unchanged6'));
  }
  public set attributeUnchanged6(value: string[]) {
    this._attributeUnchanged6 = value;
  }
  public resetAttributeUnchanged6() {
    this._attributeUnchanged6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchanged6Input() {
    return this._attributeUnchanged6;
  }

  // attribute_unchanged_vpnv4 - computed: true, optional: true, required: false
  private _attributeUnchangedVpnv4?: string[]; 
  public get attributeUnchangedVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_unchanged_vpnv4'));
  }
  public set attributeUnchangedVpnv4(value: string[]) {
    this._attributeUnchangedVpnv4 = value;
  }
  public resetAttributeUnchangedVpnv4() {
    this._attributeUnchangedVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchangedVpnv4Input() {
    return this._attributeUnchangedVpnv4;
  }

  // attribute_unchanged_vpnv6 - computed: true, optional: true, required: false
  private _attributeUnchangedVpnv6?: string[]; 
  public get attributeUnchangedVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_unchanged_vpnv6'));
  }
  public set attributeUnchangedVpnv6(value: string[]) {
    this._attributeUnchangedVpnv6 = value;
  }
  public resetAttributeUnchangedVpnv6() {
    this._attributeUnchangedVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchangedVpnv6Input() {
    return this._attributeUnchangedVpnv6;
  }

  // auth_options - computed: true, optional: true, required: false
  private _authOptions?: string[]; 
  public get authOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_options'));
  }
  public set authOptions(value: string[]) {
    this._authOptions = value;
  }
  public resetAuthOptions() {
    this._authOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authOptionsInput() {
    return this._authOptions;
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

  // capability_graceful_restart - computed: true, optional: true, required: false
  private _capabilityGracefulRestart?: string; 
  public get capabilityGracefulRestart() {
    return this.getStringAttribute('capability_graceful_restart');
  }
  public set capabilityGracefulRestart(value: string) {
    this._capabilityGracefulRestart = value;
  }
  public resetCapabilityGracefulRestart() {
    this._capabilityGracefulRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityGracefulRestartInput() {
    return this._capabilityGracefulRestart;
  }

  // capability_graceful_restart6 - computed: true, optional: true, required: false
  private _capabilityGracefulRestart6?: string; 
  public get capabilityGracefulRestart6() {
    return this.getStringAttribute('capability_graceful_restart6');
  }
  public set capabilityGracefulRestart6(value: string) {
    this._capabilityGracefulRestart6 = value;
  }
  public resetCapabilityGracefulRestart6() {
    this._capabilityGracefulRestart6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityGracefulRestart6Input() {
    return this._capabilityGracefulRestart6;
  }

  // capability_graceful_restart_evpn - computed: true, optional: true, required: false
  private _capabilityGracefulRestartEvpn?: string; 
  public get capabilityGracefulRestartEvpn() {
    return this.getStringAttribute('capability_graceful_restart_evpn');
  }
  public set capabilityGracefulRestartEvpn(value: string) {
    this._capabilityGracefulRestartEvpn = value;
  }
  public resetCapabilityGracefulRestartEvpn() {
    this._capabilityGracefulRestartEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityGracefulRestartEvpnInput() {
    return this._capabilityGracefulRestartEvpn;
  }

  // capability_graceful_restart_vpnv4 - computed: true, optional: true, required: false
  private _capabilityGracefulRestartVpnv4?: string; 
  public get capabilityGracefulRestartVpnv4() {
    return this.getStringAttribute('capability_graceful_restart_vpnv4');
  }
  public set capabilityGracefulRestartVpnv4(value: string) {
    this._capabilityGracefulRestartVpnv4 = value;
  }
  public resetCapabilityGracefulRestartVpnv4() {
    this._capabilityGracefulRestartVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityGracefulRestartVpnv4Input() {
    return this._capabilityGracefulRestartVpnv4;
  }

  // capability_graceful_restart_vpnv6 - computed: true, optional: true, required: false
  private _capabilityGracefulRestartVpnv6?: string; 
  public get capabilityGracefulRestartVpnv6() {
    return this.getStringAttribute('capability_graceful_restart_vpnv6');
  }
  public set capabilityGracefulRestartVpnv6(value: string) {
    this._capabilityGracefulRestartVpnv6 = value;
  }
  public resetCapabilityGracefulRestartVpnv6() {
    this._capabilityGracefulRestartVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityGracefulRestartVpnv6Input() {
    return this._capabilityGracefulRestartVpnv6;
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

  // capability_route_refresh - computed: true, optional: true, required: false
  private _capabilityRouteRefresh?: string; 
  public get capabilityRouteRefresh() {
    return this.getStringAttribute('capability_route_refresh');
  }
  public set capabilityRouteRefresh(value: string) {
    this._capabilityRouteRefresh = value;
  }
  public resetCapabilityRouteRefresh() {
    this._capabilityRouteRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityRouteRefreshInput() {
    return this._capabilityRouteRefresh;
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
  private _defaultOriginateRoutemap?: string[]; 
  public get defaultOriginateRoutemap() {
    return cdktf.Fn.tolist(this.getListAttribute('default_originate_routemap'));
  }
  public set defaultOriginateRoutemap(value: string[]) {
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
  private _defaultOriginateRoutemap6?: string[]; 
  public get defaultOriginateRoutemap6() {
    return cdktf.Fn.tolist(this.getListAttribute('default_originate_routemap6'));
  }
  public set defaultOriginateRoutemap6(value: string[]) {
    this._defaultOriginateRoutemap6 = value;
  }
  public resetDefaultOriginateRoutemap6() {
    this._defaultOriginateRoutemap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateRoutemap6Input() {
    return this._defaultOriginateRoutemap6;
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

  // distribute_list_in - computed: true, optional: true, required: false
  private _distributeListIn?: string[]; 
  public get distributeListIn() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_in'));
  }
  public set distributeListIn(value: string[]) {
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
  private _distributeListIn6?: string[]; 
  public get distributeListIn6() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_in6'));
  }
  public set distributeListIn6(value: string[]) {
    this._distributeListIn6 = value;
  }
  public resetDistributeListIn6() {
    this._distributeListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListIn6Input() {
    return this._distributeListIn6;
  }

  // distribute_list_in_vpnv4 - computed: true, optional: true, required: false
  private _distributeListInVpnv4?: string[]; 
  public get distributeListInVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_in_vpnv4'));
  }
  public set distributeListInVpnv4(value: string[]) {
    this._distributeListInVpnv4 = value;
  }
  public resetDistributeListInVpnv4() {
    this._distributeListInVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInVpnv4Input() {
    return this._distributeListInVpnv4;
  }

  // distribute_list_in_vpnv6 - computed: true, optional: true, required: false
  private _distributeListInVpnv6?: string[]; 
  public get distributeListInVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_in_vpnv6'));
  }
  public set distributeListInVpnv6(value: string[]) {
    this._distributeListInVpnv6 = value;
  }
  public resetDistributeListInVpnv6() {
    this._distributeListInVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInVpnv6Input() {
    return this._distributeListInVpnv6;
  }

  // distribute_list_out - computed: true, optional: true, required: false
  private _distributeListOut?: string[]; 
  public get distributeListOut() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_out'));
  }
  public set distributeListOut(value: string[]) {
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
  private _distributeListOut6?: string[]; 
  public get distributeListOut6() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_out6'));
  }
  public set distributeListOut6(value: string[]) {
    this._distributeListOut6 = value;
  }
  public resetDistributeListOut6() {
    this._distributeListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOut6Input() {
    return this._distributeListOut6;
  }

  // distribute_list_out_vpnv4 - computed: true, optional: true, required: false
  private _distributeListOutVpnv4?: string[]; 
  public get distributeListOutVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_out_vpnv4'));
  }
  public set distributeListOutVpnv4(value: string[]) {
    this._distributeListOutVpnv4 = value;
  }
  public resetDistributeListOutVpnv4() {
    this._distributeListOutVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOutVpnv4Input() {
    return this._distributeListOutVpnv4;
  }

  // distribute_list_out_vpnv6 - computed: true, optional: true, required: false
  private _distributeListOutVpnv6?: string[]; 
  public get distributeListOutVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_out_vpnv6'));
  }
  public set distributeListOutVpnv6(value: string[]) {
    this._distributeListOutVpnv6 = value;
  }
  public resetDistributeListOutVpnv6() {
    this._distributeListOutVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOutVpnv6Input() {
    return this._distributeListOutVpnv6;
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

  // ebgp_multihop_ttl - computed: false, optional: true, required: false
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

  // filter_list_in - computed: true, optional: true, required: false
  private _filterListIn?: string[]; 
  public get filterListIn() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_in'));
  }
  public set filterListIn(value: string[]) {
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
  private _filterListIn6?: string[]; 
  public get filterListIn6() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_in6'));
  }
  public set filterListIn6(value: string[]) {
    this._filterListIn6 = value;
  }
  public resetFilterListIn6() {
    this._filterListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListIn6Input() {
    return this._filterListIn6;
  }

  // filter_list_in_vpnv4 - computed: true, optional: true, required: false
  private _filterListInVpnv4?: string[]; 
  public get filterListInVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_in_vpnv4'));
  }
  public set filterListInVpnv4(value: string[]) {
    this._filterListInVpnv4 = value;
  }
  public resetFilterListInVpnv4() {
    this._filterListInVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInVpnv4Input() {
    return this._filterListInVpnv4;
  }

  // filter_list_in_vpnv6 - computed: true, optional: true, required: false
  private _filterListInVpnv6?: string[]; 
  public get filterListInVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_in_vpnv6'));
  }
  public set filterListInVpnv6(value: string[]) {
    this._filterListInVpnv6 = value;
  }
  public resetFilterListInVpnv6() {
    this._filterListInVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInVpnv6Input() {
    return this._filterListInVpnv6;
  }

  // filter_list_out - computed: true, optional: true, required: false
  private _filterListOut?: string[]; 
  public get filterListOut() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_out'));
  }
  public set filterListOut(value: string[]) {
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
  private _filterListOut6?: string[]; 
  public get filterListOut6() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_out6'));
  }
  public set filterListOut6(value: string[]) {
    this._filterListOut6 = value;
  }
  public resetFilterListOut6() {
    this._filterListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOut6Input() {
    return this._filterListOut6;
  }

  // filter_list_out_vpnv4 - computed: true, optional: true, required: false
  private _filterListOutVpnv4?: string[]; 
  public get filterListOutVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_out_vpnv4'));
  }
  public set filterListOutVpnv4(value: string[]) {
    this._filterListOutVpnv4 = value;
  }
  public resetFilterListOutVpnv4() {
    this._filterListOutVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOutVpnv4Input() {
    return this._filterListOutVpnv4;
  }

  // filter_list_out_vpnv6 - computed: true, optional: true, required: false
  private _filterListOutVpnv6?: string[]; 
  public get filterListOutVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_out_vpnv6'));
  }
  public set filterListOutVpnv6(value: string[]) {
    this._filterListOutVpnv6 = value;
  }
  public resetFilterListOutVpnv6() {
    this._filterListOutVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOutVpnv6Input() {
    return this._filterListOutVpnv6;
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
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip - computed: false, optional: true, required: false
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

  // link_down_failover - computed: true, optional: true, required: false
  private _linkDownFailover?: string; 
  public get linkDownFailover() {
    return this.getStringAttribute('link_down_failover');
  }
  public set linkDownFailover(value: string) {
    this._linkDownFailover = value;
  }
  public resetLinkDownFailover() {
    this._linkDownFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDownFailoverInput() {
    return this._linkDownFailover;
  }

  // local_as - computed: false, optional: true, required: false
  private _localAs?: number; 
  public get localAs() {
    return this.getNumberAttribute('local_as');
  }
  public set localAs(value: number) {
    this._localAs = value;
  }
  public resetLocalAs() {
    this._localAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInput() {
    return this._localAs;
  }

  // local_as_no_prepend - computed: true, optional: true, required: false
  private _localAsNoPrepend?: string; 
  public get localAsNoPrepend() {
    return this.getStringAttribute('local_as_no_prepend');
  }
  public set localAsNoPrepend(value: string) {
    this._localAsNoPrepend = value;
  }
  public resetLocalAsNoPrepend() {
    this._localAsNoPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsNoPrependInput() {
    return this._localAsNoPrepend;
  }

  // local_as_replace_as - computed: true, optional: true, required: false
  private _localAsReplaceAs?: string; 
  public get localAsReplaceAs() {
    return this.getStringAttribute('local_as_replace_as');
  }
  public set localAsReplaceAs(value: string) {
    this._localAsReplaceAs = value;
  }
  public resetLocalAsReplaceAs() {
    this._localAsReplaceAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsReplaceAsInput() {
    return this._localAsReplaceAs;
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

  // maximum_prefix6 - computed: false, optional: true, required: false
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

  // maximum_prefix_evpn - computed: false, optional: true, required: false
  private _maximumPrefixEvpn?: number; 
  public get maximumPrefixEvpn() {
    return this.getNumberAttribute('maximum_prefix_evpn');
  }
  public set maximumPrefixEvpn(value: number) {
    this._maximumPrefixEvpn = value;
  }
  public resetMaximumPrefixEvpn() {
    this._maximumPrefixEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixEvpnInput() {
    return this._maximumPrefixEvpn;
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

  // maximum_prefix_threshold_evpn - computed: true, optional: true, required: false
  private _maximumPrefixThresholdEvpn?: number; 
  public get maximumPrefixThresholdEvpn() {
    return this.getNumberAttribute('maximum_prefix_threshold_evpn');
  }
  public set maximumPrefixThresholdEvpn(value: number) {
    this._maximumPrefixThresholdEvpn = value;
  }
  public resetMaximumPrefixThresholdEvpn() {
    this._maximumPrefixThresholdEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresholdEvpnInput() {
    return this._maximumPrefixThresholdEvpn;
  }

  // maximum_prefix_threshold_vpnv4 - computed: true, optional: true, required: false
  private _maximumPrefixThresholdVpnv4?: number; 
  public get maximumPrefixThresholdVpnv4() {
    return this.getNumberAttribute('maximum_prefix_threshold_vpnv4');
  }
  public set maximumPrefixThresholdVpnv4(value: number) {
    this._maximumPrefixThresholdVpnv4 = value;
  }
  public resetMaximumPrefixThresholdVpnv4() {
    this._maximumPrefixThresholdVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresholdVpnv4Input() {
    return this._maximumPrefixThresholdVpnv4;
  }

  // maximum_prefix_threshold_vpnv6 - computed: true, optional: true, required: false
  private _maximumPrefixThresholdVpnv6?: number; 
  public get maximumPrefixThresholdVpnv6() {
    return this.getNumberAttribute('maximum_prefix_threshold_vpnv6');
  }
  public set maximumPrefixThresholdVpnv6(value: number) {
    this._maximumPrefixThresholdVpnv6 = value;
  }
  public resetMaximumPrefixThresholdVpnv6() {
    this._maximumPrefixThresholdVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresholdVpnv6Input() {
    return this._maximumPrefixThresholdVpnv6;
  }

  // maximum_prefix_vpnv4 - computed: false, optional: true, required: false
  private _maximumPrefixVpnv4?: number; 
  public get maximumPrefixVpnv4() {
    return this.getNumberAttribute('maximum_prefix_vpnv4');
  }
  public set maximumPrefixVpnv4(value: number) {
    this._maximumPrefixVpnv4 = value;
  }
  public resetMaximumPrefixVpnv4() {
    this._maximumPrefixVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixVpnv4Input() {
    return this._maximumPrefixVpnv4;
  }

  // maximum_prefix_vpnv6 - computed: false, optional: true, required: false
  private _maximumPrefixVpnv6?: number; 
  public get maximumPrefixVpnv6() {
    return this.getNumberAttribute('maximum_prefix_vpnv6');
  }
  public set maximumPrefixVpnv6(value: number) {
    this._maximumPrefixVpnv6 = value;
  }
  public resetMaximumPrefixVpnv6() {
    this._maximumPrefixVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixVpnv6Input() {
    return this._maximumPrefixVpnv6;
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

  // maximum_prefix_warning_only_evpn - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnlyEvpn?: string; 
  public get maximumPrefixWarningOnlyEvpn() {
    return this.getStringAttribute('maximum_prefix_warning_only_evpn');
  }
  public set maximumPrefixWarningOnlyEvpn(value: string) {
    this._maximumPrefixWarningOnlyEvpn = value;
  }
  public resetMaximumPrefixWarningOnlyEvpn() {
    this._maximumPrefixWarningOnlyEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnlyEvpnInput() {
    return this._maximumPrefixWarningOnlyEvpn;
  }

  // maximum_prefix_warning_only_vpnv4 - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnlyVpnv4?: string; 
  public get maximumPrefixWarningOnlyVpnv4() {
    return this.getStringAttribute('maximum_prefix_warning_only_vpnv4');
  }
  public set maximumPrefixWarningOnlyVpnv4(value: string) {
    this._maximumPrefixWarningOnlyVpnv4 = value;
  }
  public resetMaximumPrefixWarningOnlyVpnv4() {
    this._maximumPrefixWarningOnlyVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnlyVpnv4Input() {
    return this._maximumPrefixWarningOnlyVpnv4;
  }

  // maximum_prefix_warning_only_vpnv6 - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnlyVpnv6?: string; 
  public get maximumPrefixWarningOnlyVpnv6() {
    return this.getStringAttribute('maximum_prefix_warning_only_vpnv6');
  }
  public set maximumPrefixWarningOnlyVpnv6(value: string) {
    this._maximumPrefixWarningOnlyVpnv6 = value;
  }
  public resetMaximumPrefixWarningOnlyVpnv6() {
    this._maximumPrefixWarningOnlyVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnlyVpnv6Input() {
    return this._maximumPrefixWarningOnlyVpnv6;
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

  // next_hop_self_rr - computed: true, optional: true, required: false
  private _nextHopSelfRr?: string; 
  public get nextHopSelfRr() {
    return this.getStringAttribute('next_hop_self_rr');
  }
  public set nextHopSelfRr(value: string) {
    this._nextHopSelfRr = value;
  }
  public resetNextHopSelfRr() {
    this._nextHopSelfRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfRrInput() {
    return this._nextHopSelfRr;
  }

  // next_hop_self_rr6 - computed: true, optional: true, required: false
  private _nextHopSelfRr6?: string; 
  public get nextHopSelfRr6() {
    return this.getStringAttribute('next_hop_self_rr6');
  }
  public set nextHopSelfRr6(value: string) {
    this._nextHopSelfRr6 = value;
  }
  public resetNextHopSelfRr6() {
    this._nextHopSelfRr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfRr6Input() {
    return this._nextHopSelfRr6;
  }

  // next_hop_self_vpnv4 - computed: true, optional: true, required: false
  private _nextHopSelfVpnv4?: string; 
  public get nextHopSelfVpnv4() {
    return this.getStringAttribute('next_hop_self_vpnv4');
  }
  public set nextHopSelfVpnv4(value: string) {
    this._nextHopSelfVpnv4 = value;
  }
  public resetNextHopSelfVpnv4() {
    this._nextHopSelfVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfVpnv4Input() {
    return this._nextHopSelfVpnv4;
  }

  // next_hop_self_vpnv6 - computed: true, optional: true, required: false
  private _nextHopSelfVpnv6?: string; 
  public get nextHopSelfVpnv6() {
    return this.getStringAttribute('next_hop_self_vpnv6');
  }
  public set nextHopSelfVpnv6(value: string) {
    this._nextHopSelfVpnv6 = value;
  }
  public resetNextHopSelfVpnv6() {
    this._nextHopSelfVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfVpnv6Input() {
    return this._nextHopSelfVpnv6;
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
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
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
  private _prefixListIn?: string[]; 
  public get prefixListIn() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_in'));
  }
  public set prefixListIn(value: string[]) {
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
  private _prefixListIn6?: string[]; 
  public get prefixListIn6() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_in6'));
  }
  public set prefixListIn6(value: string[]) {
    this._prefixListIn6 = value;
  }
  public resetPrefixListIn6() {
    this._prefixListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIn6Input() {
    return this._prefixListIn6;
  }

  // prefix_list_in_vpnv4 - computed: true, optional: true, required: false
  private _prefixListInVpnv4?: string[]; 
  public get prefixListInVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_in_vpnv4'));
  }
  public set prefixListInVpnv4(value: string[]) {
    this._prefixListInVpnv4 = value;
  }
  public resetPrefixListInVpnv4() {
    this._prefixListInVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInVpnv4Input() {
    return this._prefixListInVpnv4;
  }

  // prefix_list_in_vpnv6 - computed: true, optional: true, required: false
  private _prefixListInVpnv6?: string[]; 
  public get prefixListInVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_in_vpnv6'));
  }
  public set prefixListInVpnv6(value: string[]) {
    this._prefixListInVpnv6 = value;
  }
  public resetPrefixListInVpnv6() {
    this._prefixListInVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInVpnv6Input() {
    return this._prefixListInVpnv6;
  }

  // prefix_list_out - computed: true, optional: true, required: false
  private _prefixListOut?: string[]; 
  public get prefixListOut() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_out'));
  }
  public set prefixListOut(value: string[]) {
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
  private _prefixListOut6?: string[]; 
  public get prefixListOut6() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_out6'));
  }
  public set prefixListOut6(value: string[]) {
    this._prefixListOut6 = value;
  }
  public resetPrefixListOut6() {
    this._prefixListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOut6Input() {
    return this._prefixListOut6;
  }

  // prefix_list_out_vpnv4 - computed: true, optional: true, required: false
  private _prefixListOutVpnv4?: string[]; 
  public get prefixListOutVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_out_vpnv4'));
  }
  public set prefixListOutVpnv4(value: string[]) {
    this._prefixListOutVpnv4 = value;
  }
  public resetPrefixListOutVpnv4() {
    this._prefixListOutVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOutVpnv4Input() {
    return this._prefixListOutVpnv4;
  }

  // prefix_list_out_vpnv6 - computed: true, optional: true, required: false
  private _prefixListOutVpnv6?: string[]; 
  public get prefixListOutVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_out_vpnv6'));
  }
  public set prefixListOutVpnv6(value: string[]) {
    this._prefixListOutVpnv6 = value;
  }
  public resetPrefixListOutVpnv6() {
    this._prefixListOutVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOutVpnv6Input() {
    return this._prefixListOutVpnv6;
  }

  // remote_as - computed: false, optional: true, required: false
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

  // remove_private_as_evpn - computed: true, optional: true, required: false
  private _removePrivateAsEvpn?: string; 
  public get removePrivateAsEvpn() {
    return this.getStringAttribute('remove_private_as_evpn');
  }
  public set removePrivateAsEvpn(value: string) {
    this._removePrivateAsEvpn = value;
  }
  public resetRemovePrivateAsEvpn() {
    this._removePrivateAsEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsEvpnInput() {
    return this._removePrivateAsEvpn;
  }

  // remove_private_as_vpnv4 - computed: true, optional: true, required: false
  private _removePrivateAsVpnv4?: string; 
  public get removePrivateAsVpnv4() {
    return this.getStringAttribute('remove_private_as_vpnv4');
  }
  public set removePrivateAsVpnv4(value: string) {
    this._removePrivateAsVpnv4 = value;
  }
  public resetRemovePrivateAsVpnv4() {
    this._removePrivateAsVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsVpnv4Input() {
    return this._removePrivateAsVpnv4;
  }

  // remove_private_as_vpnv6 - computed: true, optional: true, required: false
  private _removePrivateAsVpnv6?: string; 
  public get removePrivateAsVpnv6() {
    return this.getStringAttribute('remove_private_as_vpnv6');
  }
  public set removePrivateAsVpnv6(value: string) {
    this._removePrivateAsVpnv6 = value;
  }
  public resetRemovePrivateAsVpnv6() {
    this._removePrivateAsVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsVpnv6Input() {
    return this._removePrivateAsVpnv6;
  }

  // restart_time - computed: false, optional: true, required: false
  private _restartTime?: number; 
  public get restartTime() {
    return this.getNumberAttribute('restart_time');
  }
  public set restartTime(value: number) {
    this._restartTime = value;
  }
  public resetRestartTime() {
    this._restartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartTimeInput() {
    return this._restartTime;
  }

  // retain_stale_time - computed: false, optional: true, required: false
  private _retainStaleTime?: number; 
  public get retainStaleTime() {
    return this.getNumberAttribute('retain_stale_time');
  }
  public set retainStaleTime(value: number) {
    this._retainStaleTime = value;
  }
  public resetRetainStaleTime() {
    this._retainStaleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainStaleTimeInput() {
    return this._retainStaleTime;
  }

  // route_map_in - computed: true, optional: true, required: false
  private _routeMapIn?: string[]; 
  public get routeMapIn() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_in'));
  }
  public set routeMapIn(value: string[]) {
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
  private _routeMapIn6?: string[]; 
  public get routeMapIn6() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_in6'));
  }
  public set routeMapIn6(value: string[]) {
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
  private _routeMapInEvpn?: string[]; 
  public get routeMapInEvpn() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_in_evpn'));
  }
  public set routeMapInEvpn(value: string[]) {
    this._routeMapInEvpn = value;
  }
  public resetRouteMapInEvpn() {
    this._routeMapInEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInEvpnInput() {
    return this._routeMapInEvpn;
  }

  // route_map_in_vpnv4 - computed: true, optional: true, required: false
  private _routeMapInVpnv4?: string[]; 
  public get routeMapInVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_in_vpnv4'));
  }
  public set routeMapInVpnv4(value: string[]) {
    this._routeMapInVpnv4 = value;
  }
  public resetRouteMapInVpnv4() {
    this._routeMapInVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInVpnv4Input() {
    return this._routeMapInVpnv4;
  }

  // route_map_in_vpnv6 - computed: true, optional: true, required: false
  private _routeMapInVpnv6?: string[]; 
  public get routeMapInVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_in_vpnv6'));
  }
  public set routeMapInVpnv6(value: string[]) {
    this._routeMapInVpnv6 = value;
  }
  public resetRouteMapInVpnv6() {
    this._routeMapInVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInVpnv6Input() {
    return this._routeMapInVpnv6;
  }

  // route_map_out - computed: true, optional: true, required: false
  private _routeMapOut?: string[]; 
  public get routeMapOut() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out'));
  }
  public set routeMapOut(value: string[]) {
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
  private _routeMapOut6?: string[]; 
  public get routeMapOut6() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out6'));
  }
  public set routeMapOut6(value: string[]) {
    this._routeMapOut6 = value;
  }
  public resetRouteMapOut6() {
    this._routeMapOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOut6Input() {
    return this._routeMapOut6;
  }

  // route_map_out6_preferable - computed: true, optional: true, required: false
  private _routeMapOut6Preferable?: string[]; 
  public get routeMapOut6Preferable() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out6_preferable'));
  }
  public set routeMapOut6Preferable(value: string[]) {
    this._routeMapOut6Preferable = value;
  }
  public resetRouteMapOut6Preferable() {
    this._routeMapOut6Preferable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOut6PreferableInput() {
    return this._routeMapOut6Preferable;
  }

  // route_map_out_evpn - computed: true, optional: true, required: false
  private _routeMapOutEvpn?: string[]; 
  public get routeMapOutEvpn() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out_evpn'));
  }
  public set routeMapOutEvpn(value: string[]) {
    this._routeMapOutEvpn = value;
  }
  public resetRouteMapOutEvpn() {
    this._routeMapOutEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutEvpnInput() {
    return this._routeMapOutEvpn;
  }

  // route_map_out_preferable - computed: true, optional: true, required: false
  private _routeMapOutPreferable?: string[]; 
  public get routeMapOutPreferable() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out_preferable'));
  }
  public set routeMapOutPreferable(value: string[]) {
    this._routeMapOutPreferable = value;
  }
  public resetRouteMapOutPreferable() {
    this._routeMapOutPreferable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutPreferableInput() {
    return this._routeMapOutPreferable;
  }

  // route_map_out_vpnv4 - computed: true, optional: true, required: false
  private _routeMapOutVpnv4?: string[]; 
  public get routeMapOutVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out_vpnv4'));
  }
  public set routeMapOutVpnv4(value: string[]) {
    this._routeMapOutVpnv4 = value;
  }
  public resetRouteMapOutVpnv4() {
    this._routeMapOutVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutVpnv4Input() {
    return this._routeMapOutVpnv4;
  }

  // route_map_out_vpnv4_preferable - computed: true, optional: true, required: false
  private _routeMapOutVpnv4Preferable?: string[]; 
  public get routeMapOutVpnv4Preferable() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out_vpnv4_preferable'));
  }
  public set routeMapOutVpnv4Preferable(value: string[]) {
    this._routeMapOutVpnv4Preferable = value;
  }
  public resetRouteMapOutVpnv4Preferable() {
    this._routeMapOutVpnv4Preferable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutVpnv4PreferableInput() {
    return this._routeMapOutVpnv4Preferable;
  }

  // route_map_out_vpnv6 - computed: true, optional: true, required: false
  private _routeMapOutVpnv6?: string[]; 
  public get routeMapOutVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out_vpnv6'));
  }
  public set routeMapOutVpnv6(value: string[]) {
    this._routeMapOutVpnv6 = value;
  }
  public resetRouteMapOutVpnv6() {
    this._routeMapOutVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutVpnv6Input() {
    return this._routeMapOutVpnv6;
  }

  // route_map_out_vpnv6_preferable - computed: true, optional: true, required: false
  private _routeMapOutVpnv6Preferable?: string[]; 
  public get routeMapOutVpnv6Preferable() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out_vpnv6_preferable'));
  }
  public set routeMapOutVpnv6Preferable(value: string[]) {
    this._routeMapOutVpnv6Preferable = value;
  }
  public resetRouteMapOutVpnv6Preferable() {
    this._routeMapOutVpnv6Preferable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutVpnv6PreferableInput() {
    return this._routeMapOutVpnv6Preferable;
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

  // route_reflector_client_vpnv4 - computed: true, optional: true, required: false
  private _routeReflectorClientVpnv4?: string; 
  public get routeReflectorClientVpnv4() {
    return this.getStringAttribute('route_reflector_client_vpnv4');
  }
  public set routeReflectorClientVpnv4(value: string) {
    this._routeReflectorClientVpnv4 = value;
  }
  public resetRouteReflectorClientVpnv4() {
    this._routeReflectorClientVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientVpnv4Input() {
    return this._routeReflectorClientVpnv4;
  }

  // route_reflector_client_vpnv6 - computed: true, optional: true, required: false
  private _routeReflectorClientVpnv6?: string; 
  public get routeReflectorClientVpnv6() {
    return this.getStringAttribute('route_reflector_client_vpnv6');
  }
  public set routeReflectorClientVpnv6(value: string) {
    this._routeReflectorClientVpnv6 = value;
  }
  public resetRouteReflectorClientVpnv6() {
    this._routeReflectorClientVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientVpnv6Input() {
    return this._routeReflectorClientVpnv6;
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

  // route_server_client_evpn - computed: true, optional: true, required: false
  private _routeServerClientEvpn?: string; 
  public get routeServerClientEvpn() {
    return this.getStringAttribute('route_server_client_evpn');
  }
  public set routeServerClientEvpn(value: string) {
    this._routeServerClientEvpn = value;
  }
  public resetRouteServerClientEvpn() {
    this._routeServerClientEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClientEvpnInput() {
    return this._routeServerClientEvpn;
  }

  // route_server_client_vpnv4 - computed: true, optional: true, required: false
  private _routeServerClientVpnv4?: string; 
  public get routeServerClientVpnv4() {
    return this.getStringAttribute('route_server_client_vpnv4');
  }
  public set routeServerClientVpnv4(value: string) {
    this._routeServerClientVpnv4 = value;
  }
  public resetRouteServerClientVpnv4() {
    this._routeServerClientVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClientVpnv4Input() {
    return this._routeServerClientVpnv4;
  }

  // route_server_client_vpnv6 - computed: true, optional: true, required: false
  private _routeServerClientVpnv6?: string; 
  public get routeServerClientVpnv6() {
    return this.getStringAttribute('route_server_client_vpnv6');
  }
  public set routeServerClientVpnv6(value: string) {
    this._routeServerClientVpnv6 = value;
  }
  public resetRouteServerClientVpnv6() {
    this._routeServerClientVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClientVpnv6Input() {
    return this._routeServerClientVpnv6;
  }

  // rr_attr_allow_change - computed: true, optional: true, required: false
  private _rrAttrAllowChange?: string; 
  public get rrAttrAllowChange() {
    return this.getStringAttribute('rr_attr_allow_change');
  }
  public set rrAttrAllowChange(value: string) {
    this._rrAttrAllowChange = value;
  }
  public resetRrAttrAllowChange() {
    this._rrAttrAllowChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrAttrAllowChangeInput() {
    return this._rrAttrAllowChange;
  }

  // rr_attr_allow_change6 - computed: true, optional: true, required: false
  private _rrAttrAllowChange6?: string; 
  public get rrAttrAllowChange6() {
    return this.getStringAttribute('rr_attr_allow_change6');
  }
  public set rrAttrAllowChange6(value: string) {
    this._rrAttrAllowChange6 = value;
  }
  public resetRrAttrAllowChange6() {
    this._rrAttrAllowChange6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrAttrAllowChange6Input() {
    return this._rrAttrAllowChange6;
  }

  // rr_attr_allow_change_evpn - computed: true, optional: true, required: false
  private _rrAttrAllowChangeEvpn?: string; 
  public get rrAttrAllowChangeEvpn() {
    return this.getStringAttribute('rr_attr_allow_change_evpn');
  }
  public set rrAttrAllowChangeEvpn(value: string) {
    this._rrAttrAllowChangeEvpn = value;
  }
  public resetRrAttrAllowChangeEvpn() {
    this._rrAttrAllowChangeEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrAttrAllowChangeEvpnInput() {
    return this._rrAttrAllowChangeEvpn;
  }

  // rr_attr_allow_change_vpnv4 - computed: true, optional: true, required: false
  private _rrAttrAllowChangeVpnv4?: string; 
  public get rrAttrAllowChangeVpnv4() {
    return this.getStringAttribute('rr_attr_allow_change_vpnv4');
  }
  public set rrAttrAllowChangeVpnv4(value: string) {
    this._rrAttrAllowChangeVpnv4 = value;
  }
  public resetRrAttrAllowChangeVpnv4() {
    this._rrAttrAllowChangeVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrAttrAllowChangeVpnv4Input() {
    return this._rrAttrAllowChangeVpnv4;
  }

  // rr_attr_allow_change_vpnv6 - computed: true, optional: true, required: false
  private _rrAttrAllowChangeVpnv6?: string; 
  public get rrAttrAllowChangeVpnv6() {
    return this.getStringAttribute('rr_attr_allow_change_vpnv6');
  }
  public set rrAttrAllowChangeVpnv6(value: string) {
    this._rrAttrAllowChangeVpnv6 = value;
  }
  public resetRrAttrAllowChangeVpnv6() {
    this._rrAttrAllowChangeVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrAttrAllowChangeVpnv6Input() {
    return this._rrAttrAllowChangeVpnv6;
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

  // send_community_evpn - computed: true, optional: true, required: false
  private _sendCommunityEvpn?: string; 
  public get sendCommunityEvpn() {
    return this.getStringAttribute('send_community_evpn');
  }
  public set sendCommunityEvpn(value: string) {
    this._sendCommunityEvpn = value;
  }
  public resetSendCommunityEvpn() {
    this._sendCommunityEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityEvpnInput() {
    return this._sendCommunityEvpn;
  }

  // send_community_vpnv4 - computed: true, optional: true, required: false
  private _sendCommunityVpnv4?: string; 
  public get sendCommunityVpnv4() {
    return this.getStringAttribute('send_community_vpnv4');
  }
  public set sendCommunityVpnv4(value: string) {
    this._sendCommunityVpnv4 = value;
  }
  public resetSendCommunityVpnv4() {
    this._sendCommunityVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityVpnv4Input() {
    return this._sendCommunityVpnv4;
  }

  // send_community_vpnv6 - computed: true, optional: true, required: false
  private _sendCommunityVpnv6?: string; 
  public get sendCommunityVpnv6() {
    return this.getStringAttribute('send_community_vpnv6');
  }
  public set sendCommunityVpnv6(value: string) {
    this._sendCommunityVpnv6 = value;
  }
  public resetSendCommunityVpnv6() {
    this._sendCommunityVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityVpnv6Input() {
    return this._sendCommunityVpnv6;
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

  // soft_reconfiguration_vpnv4 - computed: true, optional: true, required: false
  private _softReconfigurationVpnv4?: string; 
  public get softReconfigurationVpnv4() {
    return this.getStringAttribute('soft_reconfiguration_vpnv4');
  }
  public set softReconfigurationVpnv4(value: string) {
    this._softReconfigurationVpnv4 = value;
  }
  public resetSoftReconfigurationVpnv4() {
    this._softReconfigurationVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationVpnv4Input() {
    return this._softReconfigurationVpnv4;
  }

  // soft_reconfiguration_vpnv6 - computed: true, optional: true, required: false
  private _softReconfigurationVpnv6?: string; 
  public get softReconfigurationVpnv6() {
    return this.getStringAttribute('soft_reconfiguration_vpnv6');
  }
  public set softReconfigurationVpnv6(value: string) {
    this._softReconfigurationVpnv6 = value;
  }
  public resetSoftReconfigurationVpnv6() {
    this._softReconfigurationVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationVpnv6Input() {
    return this._softReconfigurationVpnv6;
  }

  // stale_route - computed: true, optional: true, required: false
  private _staleRoute?: string; 
  public get staleRoute() {
    return this.getStringAttribute('stale_route');
  }
  public set staleRoute(value: string) {
    this._staleRoute = value;
  }
  public resetStaleRoute() {
    this._staleRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleRouteInput() {
    return this._staleRoute;
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
  private _unsuppressMap?: string[]; 
  public get unsuppressMap() {
    return cdktf.Fn.tolist(this.getListAttribute('unsuppress_map'));
  }
  public set unsuppressMap(value: string[]) {
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
  private _unsuppressMap6?: string[]; 
  public get unsuppressMap6() {
    return cdktf.Fn.tolist(this.getListAttribute('unsuppress_map6'));
  }
  public set unsuppressMap6(value: string[]) {
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
  private _updateSource?: string[]; 
  public get updateSource() {
    return cdktf.Fn.tolist(this.getListAttribute('update_source'));
  }
  public set updateSource(value: string[]) {
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

  // conditional_advertise - computed: false, optional: true, required: false
  private _conditionalAdvertise = new RouterBgpNeighborConditionalAdvertiseList(this, "conditional_advertise", false);
  public get conditionalAdvertise() {
    return this._conditionalAdvertise;
  }
  public putConditionalAdvertise(value: RouterBgpNeighborConditionalAdvertise[] | cdktf.IResolvable) {
    this._conditionalAdvertise.internalValue = value;
  }
  public resetConditionalAdvertise() {
    this._conditionalAdvertise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalAdvertiseInput() {
    return this._conditionalAdvertise.internalValue;
  }

  // conditional_advertise6 - computed: false, optional: true, required: false
  private _conditionalAdvertise6 = new RouterBgpNeighborConditionalAdvertise6List(this, "conditional_advertise6", false);
  public get conditionalAdvertise6() {
    return this._conditionalAdvertise6;
  }
  public putConditionalAdvertise6(value: RouterBgpNeighborConditionalAdvertise6[] | cdktf.IResolvable) {
    this._conditionalAdvertise6.internalValue = value;
  }
  public resetConditionalAdvertise6() {
    this._conditionalAdvertise6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalAdvertise6Input() {
    return this._conditionalAdvertise6.internalValue;
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
export interface RouterBgpNeighborGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#activate RouterBgp#activate}
  */
  readonly activate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#activate6 RouterBgp#activate6}
  */
  readonly activate6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#activate_evpn RouterBgp#activate_evpn}
  */
  readonly activateEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#activate_vpnv4 RouterBgp#activate_vpnv4}
  */
  readonly activateVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#activate_vpnv6 RouterBgp#activate_vpnv6}
  */
  readonly activateVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path RouterBgp#additional_path}
  */
  readonly additionalPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path6 RouterBgp#additional_path6}
  */
  readonly additionalPath6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path_vpnv4 RouterBgp#additional_path_vpnv4}
  */
  readonly additionalPathVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#additional_path_vpnv6 RouterBgp#additional_path_vpnv6}
  */
  readonly additionalPathVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#adv_additional_path RouterBgp#adv_additional_path}
  */
  readonly advAdditionalPath?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#adv_additional_path6 RouterBgp#adv_additional_path6}
  */
  readonly advAdditionalPath6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#adv_additional_path_vpnv4 RouterBgp#adv_additional_path_vpnv4}
  */
  readonly advAdditionalPathVpnv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#adv_additional_path_vpnv6 RouterBgp#adv_additional_path_vpnv6}
  */
  readonly advAdditionalPathVpnv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#advertisement_interval RouterBgp#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in RouterBgp#allowas_in}
  */
  readonly allowasIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in6 RouterBgp#allowas_in6}
  */
  readonly allowasIn6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_enable RouterBgp#allowas_in_enable}
  */
  readonly allowasInEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_enable6 RouterBgp#allowas_in_enable6}
  */
  readonly allowasInEnable6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_enable_evpn RouterBgp#allowas_in_enable_evpn}
  */
  readonly allowasInEnableEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_enable_vpnv4 RouterBgp#allowas_in_enable_vpnv4}
  */
  readonly allowasInEnableVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_enable_vpnv6 RouterBgp#allowas_in_enable_vpnv6}
  */
  readonly allowasInEnableVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_evpn RouterBgp#allowas_in_evpn}
  */
  readonly allowasInEvpn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_vpnv4 RouterBgp#allowas_in_vpnv4}
  */
  readonly allowasInVpnv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#allowas_in_vpnv6 RouterBgp#allowas_in_vpnv6}
  */
  readonly allowasInVpnv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#as_override RouterBgp#as_override}
  */
  readonly asOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#as_override6 RouterBgp#as_override6}
  */
  readonly asOverride6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#attribute_unchanged RouterBgp#attribute_unchanged}
  */
  readonly attributeUnchanged?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#attribute_unchanged6 RouterBgp#attribute_unchanged6}
  */
  readonly attributeUnchanged6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#attribute_unchanged_vpnv4 RouterBgp#attribute_unchanged_vpnv4}
  */
  readonly attributeUnchangedVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#attribute_unchanged_vpnv6 RouterBgp#attribute_unchanged_vpnv6}
  */
  readonly attributeUnchangedVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#auth_options RouterBgp#auth_options}
  */
  readonly authOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#bfd RouterBgp#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_default_originate RouterBgp#capability_default_originate}
  */
  readonly capabilityDefaultOriginate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_default_originate6 RouterBgp#capability_default_originate6}
  */
  readonly capabilityDefaultOriginate6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_dynamic RouterBgp#capability_dynamic}
  */
  readonly capabilityDynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_graceful_restart RouterBgp#capability_graceful_restart}
  */
  readonly capabilityGracefulRestart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_graceful_restart6 RouterBgp#capability_graceful_restart6}
  */
  readonly capabilityGracefulRestart6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_graceful_restart_evpn RouterBgp#capability_graceful_restart_evpn}
  */
  readonly capabilityGracefulRestartEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_graceful_restart_vpnv4 RouterBgp#capability_graceful_restart_vpnv4}
  */
  readonly capabilityGracefulRestartVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_graceful_restart_vpnv6 RouterBgp#capability_graceful_restart_vpnv6}
  */
  readonly capabilityGracefulRestartVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_orf RouterBgp#capability_orf}
  */
  readonly capabilityOrf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_orf6 RouterBgp#capability_orf6}
  */
  readonly capabilityOrf6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#capability_route_refresh RouterBgp#capability_route_refresh}
  */
  readonly capabilityRouteRefresh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#connect_timer RouterBgp#connect_timer}
  */
  readonly connectTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#default_originate_routemap RouterBgp#default_originate_routemap}
  */
  readonly defaultOriginateRoutemap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#default_originate_routemap6 RouterBgp#default_originate_routemap6}
  */
  readonly defaultOriginateRoutemap6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#description RouterBgp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_in RouterBgp#distribute_list_in}
  */
  readonly distributeListIn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_in6 RouterBgp#distribute_list_in6}
  */
  readonly distributeListIn6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_in_vpnv4 RouterBgp#distribute_list_in_vpnv4}
  */
  readonly distributeListInVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_in_vpnv6 RouterBgp#distribute_list_in_vpnv6}
  */
  readonly distributeListInVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_out RouterBgp#distribute_list_out}
  */
  readonly distributeListOut?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_out6 RouterBgp#distribute_list_out6}
  */
  readonly distributeListOut6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_out_vpnv4 RouterBgp#distribute_list_out_vpnv4}
  */
  readonly distributeListOutVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#distribute_list_out_vpnv6 RouterBgp#distribute_list_out_vpnv6}
  */
  readonly distributeListOutVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#dont_capability_negotiate RouterBgp#dont_capability_negotiate}
  */
  readonly dontCapabilityNegotiate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#ebgp_enforce_multihop RouterBgp#ebgp_enforce_multihop}
  */
  readonly ebgpEnforceMultihop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#ebgp_multihop_ttl RouterBgp#ebgp_multihop_ttl}
  */
  readonly ebgpMultihopTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_in RouterBgp#filter_list_in}
  */
  readonly filterListIn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_in6 RouterBgp#filter_list_in6}
  */
  readonly filterListIn6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_in_vpnv4 RouterBgp#filter_list_in_vpnv4}
  */
  readonly filterListInVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_in_vpnv6 RouterBgp#filter_list_in_vpnv6}
  */
  readonly filterListInVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_out RouterBgp#filter_list_out}
  */
  readonly filterListOut?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_out6 RouterBgp#filter_list_out6}
  */
  readonly filterListOut6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_out_vpnv4 RouterBgp#filter_list_out_vpnv4}
  */
  readonly filterListOutVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#filter_list_out_vpnv6 RouterBgp#filter_list_out_vpnv6}
  */
  readonly filterListOutVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#holdtime_timer RouterBgp#holdtime_timer}
  */
  readonly holdtimeTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#interface RouterBgp#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#keep_alive_timer RouterBgp#keep_alive_timer}
  */
  readonly keepAliveTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#link_down_failover RouterBgp#link_down_failover}
  */
  readonly linkDownFailover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#local_as RouterBgp#local_as}
  */
  readonly localAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#local_as_no_prepend RouterBgp#local_as_no_prepend}
  */
  readonly localAsNoPrepend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#local_as_replace_as RouterBgp#local_as_replace_as}
  */
  readonly localAsReplaceAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix RouterBgp#maximum_prefix}
  */
  readonly maximumPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix6 RouterBgp#maximum_prefix6}
  */
  readonly maximumPrefix6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_evpn RouterBgp#maximum_prefix_evpn}
  */
  readonly maximumPrefixEvpn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_threshold RouterBgp#maximum_prefix_threshold}
  */
  readonly maximumPrefixThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_threshold6 RouterBgp#maximum_prefix_threshold6}
  */
  readonly maximumPrefixThreshold6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_threshold_evpn RouterBgp#maximum_prefix_threshold_evpn}
  */
  readonly maximumPrefixThresholdEvpn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_threshold_vpnv4 RouterBgp#maximum_prefix_threshold_vpnv4}
  */
  readonly maximumPrefixThresholdVpnv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_threshold_vpnv6 RouterBgp#maximum_prefix_threshold_vpnv6}
  */
  readonly maximumPrefixThresholdVpnv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_vpnv4 RouterBgp#maximum_prefix_vpnv4}
  */
  readonly maximumPrefixVpnv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_vpnv6 RouterBgp#maximum_prefix_vpnv6}
  */
  readonly maximumPrefixVpnv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_warning_only RouterBgp#maximum_prefix_warning_only}
  */
  readonly maximumPrefixWarningOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_warning_only6 RouterBgp#maximum_prefix_warning_only6}
  */
  readonly maximumPrefixWarningOnly6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_warning_only_evpn RouterBgp#maximum_prefix_warning_only_evpn}
  */
  readonly maximumPrefixWarningOnlyEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_warning_only_vpnv4 RouterBgp#maximum_prefix_warning_only_vpnv4}
  */
  readonly maximumPrefixWarningOnlyVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#maximum_prefix_warning_only_vpnv6 RouterBgp#maximum_prefix_warning_only_vpnv6}
  */
  readonly maximumPrefixWarningOnlyVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#name RouterBgp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#next_hop_self RouterBgp#next_hop_self}
  */
  readonly nextHopSelf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#next_hop_self6 RouterBgp#next_hop_self6}
  */
  readonly nextHopSelf6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#next_hop_self_rr RouterBgp#next_hop_self_rr}
  */
  readonly nextHopSelfRr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#next_hop_self_rr6 RouterBgp#next_hop_self_rr6}
  */
  readonly nextHopSelfRr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#next_hop_self_vpnv4 RouterBgp#next_hop_self_vpnv4}
  */
  readonly nextHopSelfVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#next_hop_self_vpnv6 RouterBgp#next_hop_self_vpnv6}
  */
  readonly nextHopSelfVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#override_capability RouterBgp#override_capability}
  */
  readonly overrideCapability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#passive RouterBgp#passive}
  */
  readonly passive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#password RouterBgp#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_in RouterBgp#prefix_list_in}
  */
  readonly prefixListIn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_in6 RouterBgp#prefix_list_in6}
  */
  readonly prefixListIn6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_in_vpnv4 RouterBgp#prefix_list_in_vpnv4}
  */
  readonly prefixListInVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_in_vpnv6 RouterBgp#prefix_list_in_vpnv6}
  */
  readonly prefixListInVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_out RouterBgp#prefix_list_out}
  */
  readonly prefixListOut?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_out6 RouterBgp#prefix_list_out6}
  */
  readonly prefixListOut6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_out_vpnv4 RouterBgp#prefix_list_out_vpnv4}
  */
  readonly prefixListOutVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_list_out_vpnv6 RouterBgp#prefix_list_out_vpnv6}
  */
  readonly prefixListOutVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#remote_as RouterBgp#remote_as}
  */
  readonly remoteAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#remote_as_filter RouterBgp#remote_as_filter}
  */
  readonly remoteAsFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#remove_private_as RouterBgp#remove_private_as}
  */
  readonly removePrivateAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#remove_private_as6 RouterBgp#remove_private_as6}
  */
  readonly removePrivateAs6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#remove_private_as_evpn RouterBgp#remove_private_as_evpn}
  */
  readonly removePrivateAsEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#remove_private_as_vpnv4 RouterBgp#remove_private_as_vpnv4}
  */
  readonly removePrivateAsVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#remove_private_as_vpnv6 RouterBgp#remove_private_as_vpnv6}
  */
  readonly removePrivateAsVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#restart_time RouterBgp#restart_time}
  */
  readonly restartTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#retain_stale_time RouterBgp#retain_stale_time}
  */
  readonly retainStaleTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_in RouterBgp#route_map_in}
  */
  readonly routeMapIn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_in6 RouterBgp#route_map_in6}
  */
  readonly routeMapIn6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_in_evpn RouterBgp#route_map_in_evpn}
  */
  readonly routeMapInEvpn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_in_vpnv4 RouterBgp#route_map_in_vpnv4}
  */
  readonly routeMapInVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_in_vpnv6 RouterBgp#route_map_in_vpnv6}
  */
  readonly routeMapInVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out RouterBgp#route_map_out}
  */
  readonly routeMapOut?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out6 RouterBgp#route_map_out6}
  */
  readonly routeMapOut6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out6_preferable RouterBgp#route_map_out6_preferable}
  */
  readonly routeMapOut6Preferable?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out_evpn RouterBgp#route_map_out_evpn}
  */
  readonly routeMapOutEvpn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out_preferable RouterBgp#route_map_out_preferable}
  */
  readonly routeMapOutPreferable?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out_vpnv4 RouterBgp#route_map_out_vpnv4}
  */
  readonly routeMapOutVpnv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out_vpnv4_preferable RouterBgp#route_map_out_vpnv4_preferable}
  */
  readonly routeMapOutVpnv4Preferable?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out_vpnv6 RouterBgp#route_map_out_vpnv6}
  */
  readonly routeMapOutVpnv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map_out_vpnv6_preferable RouterBgp#route_map_out_vpnv6_preferable}
  */
  readonly routeMapOutVpnv6Preferable?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_reflector_client RouterBgp#route_reflector_client}
  */
  readonly routeReflectorClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_reflector_client6 RouterBgp#route_reflector_client6}
  */
  readonly routeReflectorClient6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_reflector_client_evpn RouterBgp#route_reflector_client_evpn}
  */
  readonly routeReflectorClientEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_reflector_client_vpnv4 RouterBgp#route_reflector_client_vpnv4}
  */
  readonly routeReflectorClientVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_reflector_client_vpnv6 RouterBgp#route_reflector_client_vpnv6}
  */
  readonly routeReflectorClientVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_server_client RouterBgp#route_server_client}
  */
  readonly routeServerClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_server_client6 RouterBgp#route_server_client6}
  */
  readonly routeServerClient6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_server_client_evpn RouterBgp#route_server_client_evpn}
  */
  readonly routeServerClientEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_server_client_vpnv4 RouterBgp#route_server_client_vpnv4}
  */
  readonly routeServerClientVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_server_client_vpnv6 RouterBgp#route_server_client_vpnv6}
  */
  readonly routeServerClientVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#rr_attr_allow_change RouterBgp#rr_attr_allow_change}
  */
  readonly rrAttrAllowChange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#rr_attr_allow_change6 RouterBgp#rr_attr_allow_change6}
  */
  readonly rrAttrAllowChange6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#rr_attr_allow_change_evpn RouterBgp#rr_attr_allow_change_evpn}
  */
  readonly rrAttrAllowChangeEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#rr_attr_allow_change_vpnv4 RouterBgp#rr_attr_allow_change_vpnv4}
  */
  readonly rrAttrAllowChangeVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#rr_attr_allow_change_vpnv6 RouterBgp#rr_attr_allow_change_vpnv6}
  */
  readonly rrAttrAllowChangeVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#send_community RouterBgp#send_community}
  */
  readonly sendCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#send_community6 RouterBgp#send_community6}
  */
  readonly sendCommunity6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#send_community_evpn RouterBgp#send_community_evpn}
  */
  readonly sendCommunityEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#send_community_vpnv4 RouterBgp#send_community_vpnv4}
  */
  readonly sendCommunityVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#send_community_vpnv6 RouterBgp#send_community_vpnv6}
  */
  readonly sendCommunityVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#shutdown RouterBgp#shutdown}
  */
  readonly shutdown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#soft_reconfiguration RouterBgp#soft_reconfiguration}
  */
  readonly softReconfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#soft_reconfiguration6 RouterBgp#soft_reconfiguration6}
  */
  readonly softReconfiguration6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#soft_reconfiguration_evpn RouterBgp#soft_reconfiguration_evpn}
  */
  readonly softReconfigurationEvpn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#soft_reconfiguration_vpnv4 RouterBgp#soft_reconfiguration_vpnv4}
  */
  readonly softReconfigurationVpnv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#soft_reconfiguration_vpnv6 RouterBgp#soft_reconfiguration_vpnv6}
  */
  readonly softReconfigurationVpnv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#stale_route RouterBgp#stale_route}
  */
  readonly staleRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#strict_capability_match RouterBgp#strict_capability_match}
  */
  readonly strictCapabilityMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#unsuppress_map RouterBgp#unsuppress_map}
  */
  readonly unsuppressMap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#unsuppress_map6 RouterBgp#unsuppress_map6}
  */
  readonly unsuppressMap6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#update_source RouterBgp#update_source}
  */
  readonly updateSource?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#weight RouterBgp#weight}
  */
  readonly weight?: number;
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
    activate_vpnv4: cdktf.stringToTerraform(struct!.activateVpnv4),
    activate_vpnv6: cdktf.stringToTerraform(struct!.activateVpnv6),
    additional_path: cdktf.stringToTerraform(struct!.additionalPath),
    additional_path6: cdktf.stringToTerraform(struct!.additionalPath6),
    additional_path_vpnv4: cdktf.stringToTerraform(struct!.additionalPathVpnv4),
    additional_path_vpnv6: cdktf.stringToTerraform(struct!.additionalPathVpnv6),
    adv_additional_path: cdktf.numberToTerraform(struct!.advAdditionalPath),
    adv_additional_path6: cdktf.numberToTerraform(struct!.advAdditionalPath6),
    adv_additional_path_vpnv4: cdktf.numberToTerraform(struct!.advAdditionalPathVpnv4),
    adv_additional_path_vpnv6: cdktf.numberToTerraform(struct!.advAdditionalPathVpnv6),
    advertisement_interval: cdktf.numberToTerraform(struct!.advertisementInterval),
    allowas_in: cdktf.numberToTerraform(struct!.allowasIn),
    allowas_in6: cdktf.numberToTerraform(struct!.allowasIn6),
    allowas_in_enable: cdktf.stringToTerraform(struct!.allowasInEnable),
    allowas_in_enable6: cdktf.stringToTerraform(struct!.allowasInEnable6),
    allowas_in_enable_evpn: cdktf.stringToTerraform(struct!.allowasInEnableEvpn),
    allowas_in_enable_vpnv4: cdktf.stringToTerraform(struct!.allowasInEnableVpnv4),
    allowas_in_enable_vpnv6: cdktf.stringToTerraform(struct!.allowasInEnableVpnv6),
    allowas_in_evpn: cdktf.numberToTerraform(struct!.allowasInEvpn),
    allowas_in_vpnv4: cdktf.numberToTerraform(struct!.allowasInVpnv4),
    allowas_in_vpnv6: cdktf.numberToTerraform(struct!.allowasInVpnv6),
    as_override: cdktf.stringToTerraform(struct!.asOverride),
    as_override6: cdktf.stringToTerraform(struct!.asOverride6),
    attribute_unchanged: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeUnchanged),
    attribute_unchanged6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeUnchanged6),
    attribute_unchanged_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeUnchangedVpnv4),
    attribute_unchanged_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeUnchangedVpnv6),
    auth_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authOptions),
    bfd: cdktf.stringToTerraform(struct!.bfd),
    capability_default_originate: cdktf.stringToTerraform(struct!.capabilityDefaultOriginate),
    capability_default_originate6: cdktf.stringToTerraform(struct!.capabilityDefaultOriginate6),
    capability_dynamic: cdktf.stringToTerraform(struct!.capabilityDynamic),
    capability_graceful_restart: cdktf.stringToTerraform(struct!.capabilityGracefulRestart),
    capability_graceful_restart6: cdktf.stringToTerraform(struct!.capabilityGracefulRestart6),
    capability_graceful_restart_evpn: cdktf.stringToTerraform(struct!.capabilityGracefulRestartEvpn),
    capability_graceful_restart_vpnv4: cdktf.stringToTerraform(struct!.capabilityGracefulRestartVpnv4),
    capability_graceful_restart_vpnv6: cdktf.stringToTerraform(struct!.capabilityGracefulRestartVpnv6),
    capability_orf: cdktf.stringToTerraform(struct!.capabilityOrf),
    capability_orf6: cdktf.stringToTerraform(struct!.capabilityOrf6),
    capability_route_refresh: cdktf.stringToTerraform(struct!.capabilityRouteRefresh),
    connect_timer: cdktf.numberToTerraform(struct!.connectTimer),
    default_originate_routemap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultOriginateRoutemap),
    default_originate_routemap6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultOriginateRoutemap6),
    description: cdktf.stringToTerraform(struct!.description),
    distribute_list_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListIn),
    distribute_list_in6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListIn6),
    distribute_list_in_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListInVpnv4),
    distribute_list_in_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListInVpnv6),
    distribute_list_out: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListOut),
    distribute_list_out6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListOut6),
    distribute_list_out_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListOutVpnv4),
    distribute_list_out_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.distributeListOutVpnv6),
    dont_capability_negotiate: cdktf.stringToTerraform(struct!.dontCapabilityNegotiate),
    ebgp_enforce_multihop: cdktf.stringToTerraform(struct!.ebgpEnforceMultihop),
    ebgp_multihop_ttl: cdktf.numberToTerraform(struct!.ebgpMultihopTtl),
    filter_list_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListIn),
    filter_list_in6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListIn6),
    filter_list_in_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListInVpnv4),
    filter_list_in_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListInVpnv6),
    filter_list_out: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListOut),
    filter_list_out6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListOut6),
    filter_list_out_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListOutVpnv4),
    filter_list_out_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filterListOutVpnv6),
    holdtime_timer: cdktf.numberToTerraform(struct!.holdtimeTimer),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    keep_alive_timer: cdktf.numberToTerraform(struct!.keepAliveTimer),
    link_down_failover: cdktf.stringToTerraform(struct!.linkDownFailover),
    local_as: cdktf.numberToTerraform(struct!.localAs),
    local_as_no_prepend: cdktf.stringToTerraform(struct!.localAsNoPrepend),
    local_as_replace_as: cdktf.stringToTerraform(struct!.localAsReplaceAs),
    maximum_prefix: cdktf.numberToTerraform(struct!.maximumPrefix),
    maximum_prefix6: cdktf.numberToTerraform(struct!.maximumPrefix6),
    maximum_prefix_evpn: cdktf.numberToTerraform(struct!.maximumPrefixEvpn),
    maximum_prefix_threshold: cdktf.numberToTerraform(struct!.maximumPrefixThreshold),
    maximum_prefix_threshold6: cdktf.numberToTerraform(struct!.maximumPrefixThreshold6),
    maximum_prefix_threshold_evpn: cdktf.numberToTerraform(struct!.maximumPrefixThresholdEvpn),
    maximum_prefix_threshold_vpnv4: cdktf.numberToTerraform(struct!.maximumPrefixThresholdVpnv4),
    maximum_prefix_threshold_vpnv6: cdktf.numberToTerraform(struct!.maximumPrefixThresholdVpnv6),
    maximum_prefix_vpnv4: cdktf.numberToTerraform(struct!.maximumPrefixVpnv4),
    maximum_prefix_vpnv6: cdktf.numberToTerraform(struct!.maximumPrefixVpnv6),
    maximum_prefix_warning_only: cdktf.stringToTerraform(struct!.maximumPrefixWarningOnly),
    maximum_prefix_warning_only6: cdktf.stringToTerraform(struct!.maximumPrefixWarningOnly6),
    maximum_prefix_warning_only_evpn: cdktf.stringToTerraform(struct!.maximumPrefixWarningOnlyEvpn),
    maximum_prefix_warning_only_vpnv4: cdktf.stringToTerraform(struct!.maximumPrefixWarningOnlyVpnv4),
    maximum_prefix_warning_only_vpnv6: cdktf.stringToTerraform(struct!.maximumPrefixWarningOnlyVpnv6),
    name: cdktf.stringToTerraform(struct!.name),
    next_hop_self: cdktf.stringToTerraform(struct!.nextHopSelf),
    next_hop_self6: cdktf.stringToTerraform(struct!.nextHopSelf6),
    next_hop_self_rr: cdktf.stringToTerraform(struct!.nextHopSelfRr),
    next_hop_self_rr6: cdktf.stringToTerraform(struct!.nextHopSelfRr6),
    next_hop_self_vpnv4: cdktf.stringToTerraform(struct!.nextHopSelfVpnv4),
    next_hop_self_vpnv6: cdktf.stringToTerraform(struct!.nextHopSelfVpnv6),
    override_capability: cdktf.stringToTerraform(struct!.overrideCapability),
    passive: cdktf.stringToTerraform(struct!.passive),
    password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password),
    prefix_list_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListIn),
    prefix_list_in6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListIn6),
    prefix_list_in_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListInVpnv4),
    prefix_list_in_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListInVpnv6),
    prefix_list_out: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListOut),
    prefix_list_out6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListOut6),
    prefix_list_out_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListOutVpnv4),
    prefix_list_out_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixListOutVpnv6),
    remote_as: cdktf.numberToTerraform(struct!.remoteAs),
    remote_as_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteAsFilter),
    remove_private_as: cdktf.stringToTerraform(struct!.removePrivateAs),
    remove_private_as6: cdktf.stringToTerraform(struct!.removePrivateAs6),
    remove_private_as_evpn: cdktf.stringToTerraform(struct!.removePrivateAsEvpn),
    remove_private_as_vpnv4: cdktf.stringToTerraform(struct!.removePrivateAsVpnv4),
    remove_private_as_vpnv6: cdktf.stringToTerraform(struct!.removePrivateAsVpnv6),
    restart_time: cdktf.numberToTerraform(struct!.restartTime),
    retain_stale_time: cdktf.numberToTerraform(struct!.retainStaleTime),
    route_map_in: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapIn),
    route_map_in6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapIn6),
    route_map_in_evpn: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapInEvpn),
    route_map_in_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapInVpnv4),
    route_map_in_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapInVpnv6),
    route_map_out: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOut),
    route_map_out6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOut6),
    route_map_out6_preferable: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOut6Preferable),
    route_map_out_evpn: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOutEvpn),
    route_map_out_preferable: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOutPreferable),
    route_map_out_vpnv4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOutVpnv4),
    route_map_out_vpnv4_preferable: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOutVpnv4Preferable),
    route_map_out_vpnv6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOutVpnv6),
    route_map_out_vpnv6_preferable: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMapOutVpnv6Preferable),
    route_reflector_client: cdktf.stringToTerraform(struct!.routeReflectorClient),
    route_reflector_client6: cdktf.stringToTerraform(struct!.routeReflectorClient6),
    route_reflector_client_evpn: cdktf.stringToTerraform(struct!.routeReflectorClientEvpn),
    route_reflector_client_vpnv4: cdktf.stringToTerraform(struct!.routeReflectorClientVpnv4),
    route_reflector_client_vpnv6: cdktf.stringToTerraform(struct!.routeReflectorClientVpnv6),
    route_server_client: cdktf.stringToTerraform(struct!.routeServerClient),
    route_server_client6: cdktf.stringToTerraform(struct!.routeServerClient6),
    route_server_client_evpn: cdktf.stringToTerraform(struct!.routeServerClientEvpn),
    route_server_client_vpnv4: cdktf.stringToTerraform(struct!.routeServerClientVpnv4),
    route_server_client_vpnv6: cdktf.stringToTerraform(struct!.routeServerClientVpnv6),
    rr_attr_allow_change: cdktf.stringToTerraform(struct!.rrAttrAllowChange),
    rr_attr_allow_change6: cdktf.stringToTerraform(struct!.rrAttrAllowChange6),
    rr_attr_allow_change_evpn: cdktf.stringToTerraform(struct!.rrAttrAllowChangeEvpn),
    rr_attr_allow_change_vpnv4: cdktf.stringToTerraform(struct!.rrAttrAllowChangeVpnv4),
    rr_attr_allow_change_vpnv6: cdktf.stringToTerraform(struct!.rrAttrAllowChangeVpnv6),
    send_community: cdktf.stringToTerraform(struct!.sendCommunity),
    send_community6: cdktf.stringToTerraform(struct!.sendCommunity6),
    send_community_evpn: cdktf.stringToTerraform(struct!.sendCommunityEvpn),
    send_community_vpnv4: cdktf.stringToTerraform(struct!.sendCommunityVpnv4),
    send_community_vpnv6: cdktf.stringToTerraform(struct!.sendCommunityVpnv6),
    shutdown: cdktf.stringToTerraform(struct!.shutdown),
    soft_reconfiguration: cdktf.stringToTerraform(struct!.softReconfiguration),
    soft_reconfiguration6: cdktf.stringToTerraform(struct!.softReconfiguration6),
    soft_reconfiguration_evpn: cdktf.stringToTerraform(struct!.softReconfigurationEvpn),
    soft_reconfiguration_vpnv4: cdktf.stringToTerraform(struct!.softReconfigurationVpnv4),
    soft_reconfiguration_vpnv6: cdktf.stringToTerraform(struct!.softReconfigurationVpnv6),
    stale_route: cdktf.stringToTerraform(struct!.staleRoute),
    strict_capability_match: cdktf.stringToTerraform(struct!.strictCapabilityMatch),
    unsuppress_map: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unsuppressMap),
    unsuppress_map6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unsuppressMap6),
    update_source: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.updateSource),
    weight: cdktf.numberToTerraform(struct!.weight),
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
    activate_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.activateVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    activate_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.activateVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_path: {
      value: cdktf.stringToHclTerraform(struct!.additionalPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_path6: {
      value: cdktf.stringToHclTerraform(struct!.additionalPath6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_path_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.additionalPathVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_path_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.additionalPathVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adv_additional_path: {
      value: cdktf.numberToHclTerraform(struct!.advAdditionalPath),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adv_additional_path6: {
      value: cdktf.numberToHclTerraform(struct!.advAdditionalPath6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adv_additional_path_vpnv4: {
      value: cdktf.numberToHclTerraform(struct!.advAdditionalPathVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    adv_additional_path_vpnv6: {
      value: cdktf.numberToHclTerraform(struct!.advAdditionalPathVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    allowas_in_enable_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.allowasInEnableVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowas_in_enable_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.allowasInEnableVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowas_in_evpn: {
      value: cdktf.numberToHclTerraform(struct!.allowasInEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_vpnv4: {
      value: cdktf.numberToHclTerraform(struct!.allowasInVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allowas_in_vpnv6: {
      value: cdktf.numberToHclTerraform(struct!.allowasInVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeUnchanged),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    attribute_unchanged6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeUnchanged6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    attribute_unchanged_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeUnchangedVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    attribute_unchanged_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeUnchangedVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    auth_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    capability_graceful_restart: {
      value: cdktf.stringToHclTerraform(struct!.capabilityGracefulRestart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_graceful_restart6: {
      value: cdktf.stringToHclTerraform(struct!.capabilityGracefulRestart6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_graceful_restart_evpn: {
      value: cdktf.stringToHclTerraform(struct!.capabilityGracefulRestartEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_graceful_restart_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.capabilityGracefulRestartVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capability_graceful_restart_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.capabilityGracefulRestartVpnv6),
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
    capability_route_refresh: {
      value: cdktf.stringToHclTerraform(struct!.capabilityRouteRefresh),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultOriginateRoutemap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    default_originate_routemap6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultOriginateRoutemap6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distribute_list_in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListIn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    distribute_list_in6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListIn6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    distribute_list_in_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListInVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    distribute_list_in_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListInVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    distribute_list_out: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListOut),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    distribute_list_out6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListOut6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    distribute_list_out_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListOutVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    distribute_list_out_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.distributeListOutVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    filter_list_in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListIn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_list_in6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListIn6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_list_in_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListInVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_list_in_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListInVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_list_out: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListOut),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_list_out6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListOut6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_list_out_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListOutVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filter_list_out_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filterListOutVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    holdtime_timer: {
      value: cdktf.numberToHclTerraform(struct!.holdtimeTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    keep_alive_timer: {
      value: cdktf.numberToHclTerraform(struct!.keepAliveTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_down_failover: {
      value: cdktf.stringToHclTerraform(struct!.linkDownFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_as: {
      value: cdktf.numberToHclTerraform(struct!.localAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_as_no_prepend: {
      value: cdktf.stringToHclTerraform(struct!.localAsNoPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_as_replace_as: {
      value: cdktf.stringToHclTerraform(struct!.localAsReplaceAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    maximum_prefix_evpn: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixEvpn),
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
    maximum_prefix_threshold_evpn: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThresholdEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_threshold_vpnv4: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThresholdVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_threshold_vpnv6: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixThresholdVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_vpnv4: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_prefix_vpnv6: {
      value: cdktf.numberToHclTerraform(struct!.maximumPrefixVpnv6),
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
    maximum_prefix_warning_only_evpn: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixWarningOnlyEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_prefix_warning_only_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixWarningOnlyVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_prefix_warning_only_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.maximumPrefixWarningOnlyVpnv6),
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
    next_hop_self_rr: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelfRr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self_rr6: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelfRr6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelfVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_self_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.nextHopSelfVpnv6),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListIn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_in6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListIn6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_in_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListInVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_in_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListInVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_out: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListOut),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_out6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListOut6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_out_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListOutVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_list_out_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixListOutVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    remote_as: {
      value: cdktf.numberToHclTerraform(struct!.remoteAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_as_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteAsFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    remove_private_as_evpn: {
      value: cdktf.stringToHclTerraform(struct!.removePrivateAsEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.removePrivateAsVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_private_as_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.removePrivateAsVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restart_time: {
      value: cdktf.numberToHclTerraform(struct!.restartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retain_stale_time: {
      value: cdktf.numberToHclTerraform(struct!.retainStaleTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map_in: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapIn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_in6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapIn6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_in_evpn: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapInEvpn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_in_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapInVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_in_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapInVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOut),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOut6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out6_preferable: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOut6Preferable),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out_evpn: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOutEvpn),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out_preferable: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOutPreferable),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out_vpnv4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOutVpnv4),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out_vpnv4_preferable: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOutVpnv4Preferable),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out_vpnv6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOutVpnv6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map_out_vpnv6_preferable: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMapOutVpnv6Preferable),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    route_reflector_client_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.routeReflectorClientVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_reflector_client_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.routeReflectorClientVpnv6),
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
    route_server_client_evpn: {
      value: cdktf.stringToHclTerraform(struct!.routeServerClientEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_server_client_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.routeServerClientVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_server_client_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.routeServerClientVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rr_attr_allow_change: {
      value: cdktf.stringToHclTerraform(struct!.rrAttrAllowChange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rr_attr_allow_change6: {
      value: cdktf.stringToHclTerraform(struct!.rrAttrAllowChange6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rr_attr_allow_change_evpn: {
      value: cdktf.stringToHclTerraform(struct!.rrAttrAllowChangeEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rr_attr_allow_change_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.rrAttrAllowChangeVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rr_attr_allow_change_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.rrAttrAllowChangeVpnv6),
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
    send_community_evpn: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_community_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.sendCommunityVpnv6),
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
    soft_reconfiguration_vpnv4: {
      value: cdktf.stringToHclTerraform(struct!.softReconfigurationVpnv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    soft_reconfiguration_vpnv6: {
      value: cdktf.stringToHclTerraform(struct!.softReconfigurationVpnv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stale_route: {
      value: cdktf.stringToHclTerraform(struct!.staleRoute),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unsuppressMap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    unsuppress_map6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unsuppressMap6),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    update_source: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.updateSource),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    if (this._activateVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateVpnv4 = this._activateVpnv4;
    }
    if (this._activateVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.activateVpnv6 = this._activateVpnv6;
    }
    if (this._additionalPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPath = this._additionalPath;
    }
    if (this._additionalPath6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPath6 = this._additionalPath6;
    }
    if (this._additionalPathVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPathVpnv4 = this._additionalPathVpnv4;
    }
    if (this._additionalPathVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPathVpnv6 = this._additionalPathVpnv6;
    }
    if (this._advAdditionalPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.advAdditionalPath = this._advAdditionalPath;
    }
    if (this._advAdditionalPath6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.advAdditionalPath6 = this._advAdditionalPath6;
    }
    if (this._advAdditionalPathVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.advAdditionalPathVpnv4 = this._advAdditionalPathVpnv4;
    }
    if (this._advAdditionalPathVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.advAdditionalPathVpnv6 = this._advAdditionalPathVpnv6;
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
    if (this._allowasInEnableVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInEnableVpnv4 = this._allowasInEnableVpnv4;
    }
    if (this._allowasInEnableVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInEnableVpnv6 = this._allowasInEnableVpnv6;
    }
    if (this._allowasInEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInEvpn = this._allowasInEvpn;
    }
    if (this._allowasInVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInVpnv4 = this._allowasInVpnv4;
    }
    if (this._allowasInVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasInVpnv6 = this._allowasInVpnv6;
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
    if (this._attributeUnchangedVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeUnchangedVpnv4 = this._attributeUnchangedVpnv4;
    }
    if (this._attributeUnchangedVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeUnchangedVpnv6 = this._attributeUnchangedVpnv6;
    }
    if (this._authOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.authOptions = this._authOptions;
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
    if (this._capabilityGracefulRestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityGracefulRestart = this._capabilityGracefulRestart;
    }
    if (this._capabilityGracefulRestart6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityGracefulRestart6 = this._capabilityGracefulRestart6;
    }
    if (this._capabilityGracefulRestartEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityGracefulRestartEvpn = this._capabilityGracefulRestartEvpn;
    }
    if (this._capabilityGracefulRestartVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityGracefulRestartVpnv4 = this._capabilityGracefulRestartVpnv4;
    }
    if (this._capabilityGracefulRestartVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityGracefulRestartVpnv6 = this._capabilityGracefulRestartVpnv6;
    }
    if (this._capabilityOrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityOrf = this._capabilityOrf;
    }
    if (this._capabilityOrf6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityOrf6 = this._capabilityOrf6;
    }
    if (this._capabilityRouteRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilityRouteRefresh = this._capabilityRouteRefresh;
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
    if (this._distributeListInVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListInVpnv4 = this._distributeListInVpnv4;
    }
    if (this._distributeListInVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListInVpnv6 = this._distributeListInVpnv6;
    }
    if (this._distributeListOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListOut = this._distributeListOut;
    }
    if (this._distributeListOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListOut6 = this._distributeListOut6;
    }
    if (this._distributeListOutVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListOutVpnv4 = this._distributeListOutVpnv4;
    }
    if (this._distributeListOutVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributeListOutVpnv6 = this._distributeListOutVpnv6;
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
    if (this._filterListIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListIn = this._filterListIn;
    }
    if (this._filterListIn6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListIn6 = this._filterListIn6;
    }
    if (this._filterListInVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListInVpnv4 = this._filterListInVpnv4;
    }
    if (this._filterListInVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListInVpnv6 = this._filterListInVpnv6;
    }
    if (this._filterListOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListOut = this._filterListOut;
    }
    if (this._filterListOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListOut6 = this._filterListOut6;
    }
    if (this._filterListOutVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListOutVpnv4 = this._filterListOutVpnv4;
    }
    if (this._filterListOutVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterListOutVpnv6 = this._filterListOutVpnv6;
    }
    if (this._holdtimeTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdtimeTimer = this._holdtimeTimer;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._keepAliveTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveTimer = this._keepAliveTimer;
    }
    if (this._linkDownFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkDownFailover = this._linkDownFailover;
    }
    if (this._localAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAs = this._localAs;
    }
    if (this._localAsNoPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsNoPrepend = this._localAsNoPrepend;
    }
    if (this._localAsReplaceAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsReplaceAs = this._localAsReplaceAs;
    }
    if (this._maximumPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix;
    }
    if (this._maximumPrefix6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix6 = this._maximumPrefix6;
    }
    if (this._maximumPrefixEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixEvpn = this._maximumPrefixEvpn;
    }
    if (this._maximumPrefixThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThreshold = this._maximumPrefixThreshold;
    }
    if (this._maximumPrefixThreshold6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThreshold6 = this._maximumPrefixThreshold6;
    }
    if (this._maximumPrefixThresholdEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThresholdEvpn = this._maximumPrefixThresholdEvpn;
    }
    if (this._maximumPrefixThresholdVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThresholdVpnv4 = this._maximumPrefixThresholdVpnv4;
    }
    if (this._maximumPrefixThresholdVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixThresholdVpnv6 = this._maximumPrefixThresholdVpnv6;
    }
    if (this._maximumPrefixVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixVpnv4 = this._maximumPrefixVpnv4;
    }
    if (this._maximumPrefixVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixVpnv6 = this._maximumPrefixVpnv6;
    }
    if (this._maximumPrefixWarningOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixWarningOnly = this._maximumPrefixWarningOnly;
    }
    if (this._maximumPrefixWarningOnly6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixWarningOnly6 = this._maximumPrefixWarningOnly6;
    }
    if (this._maximumPrefixWarningOnlyEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixWarningOnlyEvpn = this._maximumPrefixWarningOnlyEvpn;
    }
    if (this._maximumPrefixWarningOnlyVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixWarningOnlyVpnv4 = this._maximumPrefixWarningOnlyVpnv4;
    }
    if (this._maximumPrefixWarningOnlyVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefixWarningOnlyVpnv6 = this._maximumPrefixWarningOnlyVpnv6;
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
    if (this._nextHopSelfRr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelfRr = this._nextHopSelfRr;
    }
    if (this._nextHopSelfRr6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelfRr6 = this._nextHopSelfRr6;
    }
    if (this._nextHopSelfVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelfVpnv4 = this._nextHopSelfVpnv4;
    }
    if (this._nextHopSelfVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopSelfVpnv6 = this._nextHopSelfVpnv6;
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
    if (this._prefixListInVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListInVpnv4 = this._prefixListInVpnv4;
    }
    if (this._prefixListInVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListInVpnv6 = this._prefixListInVpnv6;
    }
    if (this._prefixListOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListOut = this._prefixListOut;
    }
    if (this._prefixListOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListOut6 = this._prefixListOut6;
    }
    if (this._prefixListOutVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListOutVpnv4 = this._prefixListOutVpnv4;
    }
    if (this._prefixListOutVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListOutVpnv6 = this._prefixListOutVpnv6;
    }
    if (this._remoteAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAs = this._remoteAs;
    }
    if (this._remoteAsFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAsFilter = this._remoteAsFilter;
    }
    if (this._removePrivateAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs;
    }
    if (this._removePrivateAs6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs6 = this._removePrivateAs6;
    }
    if (this._removePrivateAsEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAsEvpn = this._removePrivateAsEvpn;
    }
    if (this._removePrivateAsVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAsVpnv4 = this._removePrivateAsVpnv4;
    }
    if (this._removePrivateAsVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAsVpnv6 = this._removePrivateAsVpnv6;
    }
    if (this._restartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartTime = this._restartTime;
    }
    if (this._retainStaleTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainStaleTime = this._retainStaleTime;
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
    if (this._routeMapInVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapInVpnv4 = this._routeMapInVpnv4;
    }
    if (this._routeMapInVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapInVpnv6 = this._routeMapInVpnv6;
    }
    if (this._routeMapOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOut = this._routeMapOut;
    }
    if (this._routeMapOut6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOut6 = this._routeMapOut6;
    }
    if (this._routeMapOut6Preferable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOut6Preferable = this._routeMapOut6Preferable;
    }
    if (this._routeMapOutEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutEvpn = this._routeMapOutEvpn;
    }
    if (this._routeMapOutPreferable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutPreferable = this._routeMapOutPreferable;
    }
    if (this._routeMapOutVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutVpnv4 = this._routeMapOutVpnv4;
    }
    if (this._routeMapOutVpnv4Preferable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutVpnv4Preferable = this._routeMapOutVpnv4Preferable;
    }
    if (this._routeMapOutVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutVpnv6 = this._routeMapOutVpnv6;
    }
    if (this._routeMapOutVpnv6Preferable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapOutVpnv6Preferable = this._routeMapOutVpnv6Preferable;
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
    if (this._routeReflectorClientVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeReflectorClientVpnv4 = this._routeReflectorClientVpnv4;
    }
    if (this._routeReflectorClientVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeReflectorClientVpnv6 = this._routeReflectorClientVpnv6;
    }
    if (this._routeServerClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerClient = this._routeServerClient;
    }
    if (this._routeServerClient6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerClient6 = this._routeServerClient6;
    }
    if (this._routeServerClientEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerClientEvpn = this._routeServerClientEvpn;
    }
    if (this._routeServerClientVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerClientVpnv4 = this._routeServerClientVpnv4;
    }
    if (this._routeServerClientVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerClientVpnv6 = this._routeServerClientVpnv6;
    }
    if (this._rrAttrAllowChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrAttrAllowChange = this._rrAttrAllowChange;
    }
    if (this._rrAttrAllowChange6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrAttrAllowChange6 = this._rrAttrAllowChange6;
    }
    if (this._rrAttrAllowChangeEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrAttrAllowChangeEvpn = this._rrAttrAllowChangeEvpn;
    }
    if (this._rrAttrAllowChangeVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrAttrAllowChangeVpnv4 = this._rrAttrAllowChangeVpnv4;
    }
    if (this._rrAttrAllowChangeVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrAttrAllowChangeVpnv6 = this._rrAttrAllowChangeVpnv6;
    }
    if (this._sendCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity = this._sendCommunity;
    }
    if (this._sendCommunity6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity6 = this._sendCommunity6;
    }
    if (this._sendCommunityEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityEvpn = this._sendCommunityEvpn;
    }
    if (this._sendCommunityVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVpnv4 = this._sendCommunityVpnv4;
    }
    if (this._sendCommunityVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunityVpnv6 = this._sendCommunityVpnv6;
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
    if (this._softReconfigurationVpnv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.softReconfigurationVpnv4 = this._softReconfigurationVpnv4;
    }
    if (this._softReconfigurationVpnv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.softReconfigurationVpnv6 = this._softReconfigurationVpnv6;
    }
    if (this._staleRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleRoute = this._staleRoute;
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

  public set internalValue(value: RouterBgpNeighborGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._activate6 = undefined;
      this._activateEvpn = undefined;
      this._activateVpnv4 = undefined;
      this._activateVpnv6 = undefined;
      this._additionalPath = undefined;
      this._additionalPath6 = undefined;
      this._additionalPathVpnv4 = undefined;
      this._additionalPathVpnv6 = undefined;
      this._advAdditionalPath = undefined;
      this._advAdditionalPath6 = undefined;
      this._advAdditionalPathVpnv4 = undefined;
      this._advAdditionalPathVpnv6 = undefined;
      this._advertisementInterval = undefined;
      this._allowasIn = undefined;
      this._allowasIn6 = undefined;
      this._allowasInEnable = undefined;
      this._allowasInEnable6 = undefined;
      this._allowasInEnableEvpn = undefined;
      this._allowasInEnableVpnv4 = undefined;
      this._allowasInEnableVpnv6 = undefined;
      this._allowasInEvpn = undefined;
      this._allowasInVpnv4 = undefined;
      this._allowasInVpnv6 = undefined;
      this._asOverride = undefined;
      this._asOverride6 = undefined;
      this._attributeUnchanged = undefined;
      this._attributeUnchanged6 = undefined;
      this._attributeUnchangedVpnv4 = undefined;
      this._attributeUnchangedVpnv6 = undefined;
      this._authOptions = undefined;
      this._bfd = undefined;
      this._capabilityDefaultOriginate = undefined;
      this._capabilityDefaultOriginate6 = undefined;
      this._capabilityDynamic = undefined;
      this._capabilityGracefulRestart = undefined;
      this._capabilityGracefulRestart6 = undefined;
      this._capabilityGracefulRestartEvpn = undefined;
      this._capabilityGracefulRestartVpnv4 = undefined;
      this._capabilityGracefulRestartVpnv6 = undefined;
      this._capabilityOrf = undefined;
      this._capabilityOrf6 = undefined;
      this._capabilityRouteRefresh = undefined;
      this._connectTimer = undefined;
      this._defaultOriginateRoutemap = undefined;
      this._defaultOriginateRoutemap6 = undefined;
      this._description = undefined;
      this._distributeListIn = undefined;
      this._distributeListIn6 = undefined;
      this._distributeListInVpnv4 = undefined;
      this._distributeListInVpnv6 = undefined;
      this._distributeListOut = undefined;
      this._distributeListOut6 = undefined;
      this._distributeListOutVpnv4 = undefined;
      this._distributeListOutVpnv6 = undefined;
      this._dontCapabilityNegotiate = undefined;
      this._ebgpEnforceMultihop = undefined;
      this._ebgpMultihopTtl = undefined;
      this._filterListIn = undefined;
      this._filterListIn6 = undefined;
      this._filterListInVpnv4 = undefined;
      this._filterListInVpnv6 = undefined;
      this._filterListOut = undefined;
      this._filterListOut6 = undefined;
      this._filterListOutVpnv4 = undefined;
      this._filterListOutVpnv6 = undefined;
      this._holdtimeTimer = undefined;
      this._interface = undefined;
      this._keepAliveTimer = undefined;
      this._linkDownFailover = undefined;
      this._localAs = undefined;
      this._localAsNoPrepend = undefined;
      this._localAsReplaceAs = undefined;
      this._maximumPrefix = undefined;
      this._maximumPrefix6 = undefined;
      this._maximumPrefixEvpn = undefined;
      this._maximumPrefixThreshold = undefined;
      this._maximumPrefixThreshold6 = undefined;
      this._maximumPrefixThresholdEvpn = undefined;
      this._maximumPrefixThresholdVpnv4 = undefined;
      this._maximumPrefixThresholdVpnv6 = undefined;
      this._maximumPrefixVpnv4 = undefined;
      this._maximumPrefixVpnv6 = undefined;
      this._maximumPrefixWarningOnly = undefined;
      this._maximumPrefixWarningOnly6 = undefined;
      this._maximumPrefixWarningOnlyEvpn = undefined;
      this._maximumPrefixWarningOnlyVpnv4 = undefined;
      this._maximumPrefixWarningOnlyVpnv6 = undefined;
      this._name = undefined;
      this._nextHopSelf = undefined;
      this._nextHopSelf6 = undefined;
      this._nextHopSelfRr = undefined;
      this._nextHopSelfRr6 = undefined;
      this._nextHopSelfVpnv4 = undefined;
      this._nextHopSelfVpnv6 = undefined;
      this._overrideCapability = undefined;
      this._passive = undefined;
      this._password = undefined;
      this._prefixListIn = undefined;
      this._prefixListIn6 = undefined;
      this._prefixListInVpnv4 = undefined;
      this._prefixListInVpnv6 = undefined;
      this._prefixListOut = undefined;
      this._prefixListOut6 = undefined;
      this._prefixListOutVpnv4 = undefined;
      this._prefixListOutVpnv6 = undefined;
      this._remoteAs = undefined;
      this._remoteAsFilter = undefined;
      this._removePrivateAs = undefined;
      this._removePrivateAs6 = undefined;
      this._removePrivateAsEvpn = undefined;
      this._removePrivateAsVpnv4 = undefined;
      this._removePrivateAsVpnv6 = undefined;
      this._restartTime = undefined;
      this._retainStaleTime = undefined;
      this._routeMapIn = undefined;
      this._routeMapIn6 = undefined;
      this._routeMapInEvpn = undefined;
      this._routeMapInVpnv4 = undefined;
      this._routeMapInVpnv6 = undefined;
      this._routeMapOut = undefined;
      this._routeMapOut6 = undefined;
      this._routeMapOut6Preferable = undefined;
      this._routeMapOutEvpn = undefined;
      this._routeMapOutPreferable = undefined;
      this._routeMapOutVpnv4 = undefined;
      this._routeMapOutVpnv4Preferable = undefined;
      this._routeMapOutVpnv6 = undefined;
      this._routeMapOutVpnv6Preferable = undefined;
      this._routeReflectorClient = undefined;
      this._routeReflectorClient6 = undefined;
      this._routeReflectorClientEvpn = undefined;
      this._routeReflectorClientVpnv4 = undefined;
      this._routeReflectorClientVpnv6 = undefined;
      this._routeServerClient = undefined;
      this._routeServerClient6 = undefined;
      this._routeServerClientEvpn = undefined;
      this._routeServerClientVpnv4 = undefined;
      this._routeServerClientVpnv6 = undefined;
      this._rrAttrAllowChange = undefined;
      this._rrAttrAllowChange6 = undefined;
      this._rrAttrAllowChangeEvpn = undefined;
      this._rrAttrAllowChangeVpnv4 = undefined;
      this._rrAttrAllowChangeVpnv6 = undefined;
      this._sendCommunity = undefined;
      this._sendCommunity6 = undefined;
      this._sendCommunityEvpn = undefined;
      this._sendCommunityVpnv4 = undefined;
      this._sendCommunityVpnv6 = undefined;
      this._shutdown = undefined;
      this._softReconfiguration = undefined;
      this._softReconfiguration6 = undefined;
      this._softReconfigurationEvpn = undefined;
      this._softReconfigurationVpnv4 = undefined;
      this._softReconfigurationVpnv6 = undefined;
      this._staleRoute = undefined;
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
      this._activateVpnv4 = value.activateVpnv4;
      this._activateVpnv6 = value.activateVpnv6;
      this._additionalPath = value.additionalPath;
      this._additionalPath6 = value.additionalPath6;
      this._additionalPathVpnv4 = value.additionalPathVpnv4;
      this._additionalPathVpnv6 = value.additionalPathVpnv6;
      this._advAdditionalPath = value.advAdditionalPath;
      this._advAdditionalPath6 = value.advAdditionalPath6;
      this._advAdditionalPathVpnv4 = value.advAdditionalPathVpnv4;
      this._advAdditionalPathVpnv6 = value.advAdditionalPathVpnv6;
      this._advertisementInterval = value.advertisementInterval;
      this._allowasIn = value.allowasIn;
      this._allowasIn6 = value.allowasIn6;
      this._allowasInEnable = value.allowasInEnable;
      this._allowasInEnable6 = value.allowasInEnable6;
      this._allowasInEnableEvpn = value.allowasInEnableEvpn;
      this._allowasInEnableVpnv4 = value.allowasInEnableVpnv4;
      this._allowasInEnableVpnv6 = value.allowasInEnableVpnv6;
      this._allowasInEvpn = value.allowasInEvpn;
      this._allowasInVpnv4 = value.allowasInVpnv4;
      this._allowasInVpnv6 = value.allowasInVpnv6;
      this._asOverride = value.asOverride;
      this._asOverride6 = value.asOverride6;
      this._attributeUnchanged = value.attributeUnchanged;
      this._attributeUnchanged6 = value.attributeUnchanged6;
      this._attributeUnchangedVpnv4 = value.attributeUnchangedVpnv4;
      this._attributeUnchangedVpnv6 = value.attributeUnchangedVpnv6;
      this._authOptions = value.authOptions;
      this._bfd = value.bfd;
      this._capabilityDefaultOriginate = value.capabilityDefaultOriginate;
      this._capabilityDefaultOriginate6 = value.capabilityDefaultOriginate6;
      this._capabilityDynamic = value.capabilityDynamic;
      this._capabilityGracefulRestart = value.capabilityGracefulRestart;
      this._capabilityGracefulRestart6 = value.capabilityGracefulRestart6;
      this._capabilityGracefulRestartEvpn = value.capabilityGracefulRestartEvpn;
      this._capabilityGracefulRestartVpnv4 = value.capabilityGracefulRestartVpnv4;
      this._capabilityGracefulRestartVpnv6 = value.capabilityGracefulRestartVpnv6;
      this._capabilityOrf = value.capabilityOrf;
      this._capabilityOrf6 = value.capabilityOrf6;
      this._capabilityRouteRefresh = value.capabilityRouteRefresh;
      this._connectTimer = value.connectTimer;
      this._defaultOriginateRoutemap = value.defaultOriginateRoutemap;
      this._defaultOriginateRoutemap6 = value.defaultOriginateRoutemap6;
      this._description = value.description;
      this._distributeListIn = value.distributeListIn;
      this._distributeListIn6 = value.distributeListIn6;
      this._distributeListInVpnv4 = value.distributeListInVpnv4;
      this._distributeListInVpnv6 = value.distributeListInVpnv6;
      this._distributeListOut = value.distributeListOut;
      this._distributeListOut6 = value.distributeListOut6;
      this._distributeListOutVpnv4 = value.distributeListOutVpnv4;
      this._distributeListOutVpnv6 = value.distributeListOutVpnv6;
      this._dontCapabilityNegotiate = value.dontCapabilityNegotiate;
      this._ebgpEnforceMultihop = value.ebgpEnforceMultihop;
      this._ebgpMultihopTtl = value.ebgpMultihopTtl;
      this._filterListIn = value.filterListIn;
      this._filterListIn6 = value.filterListIn6;
      this._filterListInVpnv4 = value.filterListInVpnv4;
      this._filterListInVpnv6 = value.filterListInVpnv6;
      this._filterListOut = value.filterListOut;
      this._filterListOut6 = value.filterListOut6;
      this._filterListOutVpnv4 = value.filterListOutVpnv4;
      this._filterListOutVpnv6 = value.filterListOutVpnv6;
      this._holdtimeTimer = value.holdtimeTimer;
      this._interface = value.interface;
      this._keepAliveTimer = value.keepAliveTimer;
      this._linkDownFailover = value.linkDownFailover;
      this._localAs = value.localAs;
      this._localAsNoPrepend = value.localAsNoPrepend;
      this._localAsReplaceAs = value.localAsReplaceAs;
      this._maximumPrefix = value.maximumPrefix;
      this._maximumPrefix6 = value.maximumPrefix6;
      this._maximumPrefixEvpn = value.maximumPrefixEvpn;
      this._maximumPrefixThreshold = value.maximumPrefixThreshold;
      this._maximumPrefixThreshold6 = value.maximumPrefixThreshold6;
      this._maximumPrefixThresholdEvpn = value.maximumPrefixThresholdEvpn;
      this._maximumPrefixThresholdVpnv4 = value.maximumPrefixThresholdVpnv4;
      this._maximumPrefixThresholdVpnv6 = value.maximumPrefixThresholdVpnv6;
      this._maximumPrefixVpnv4 = value.maximumPrefixVpnv4;
      this._maximumPrefixVpnv6 = value.maximumPrefixVpnv6;
      this._maximumPrefixWarningOnly = value.maximumPrefixWarningOnly;
      this._maximumPrefixWarningOnly6 = value.maximumPrefixWarningOnly6;
      this._maximumPrefixWarningOnlyEvpn = value.maximumPrefixWarningOnlyEvpn;
      this._maximumPrefixWarningOnlyVpnv4 = value.maximumPrefixWarningOnlyVpnv4;
      this._maximumPrefixWarningOnlyVpnv6 = value.maximumPrefixWarningOnlyVpnv6;
      this._name = value.name;
      this._nextHopSelf = value.nextHopSelf;
      this._nextHopSelf6 = value.nextHopSelf6;
      this._nextHopSelfRr = value.nextHopSelfRr;
      this._nextHopSelfRr6 = value.nextHopSelfRr6;
      this._nextHopSelfVpnv4 = value.nextHopSelfVpnv4;
      this._nextHopSelfVpnv6 = value.nextHopSelfVpnv6;
      this._overrideCapability = value.overrideCapability;
      this._passive = value.passive;
      this._password = value.password;
      this._prefixListIn = value.prefixListIn;
      this._prefixListIn6 = value.prefixListIn6;
      this._prefixListInVpnv4 = value.prefixListInVpnv4;
      this._prefixListInVpnv6 = value.prefixListInVpnv6;
      this._prefixListOut = value.prefixListOut;
      this._prefixListOut6 = value.prefixListOut6;
      this._prefixListOutVpnv4 = value.prefixListOutVpnv4;
      this._prefixListOutVpnv6 = value.prefixListOutVpnv6;
      this._remoteAs = value.remoteAs;
      this._remoteAsFilter = value.remoteAsFilter;
      this._removePrivateAs = value.removePrivateAs;
      this._removePrivateAs6 = value.removePrivateAs6;
      this._removePrivateAsEvpn = value.removePrivateAsEvpn;
      this._removePrivateAsVpnv4 = value.removePrivateAsVpnv4;
      this._removePrivateAsVpnv6 = value.removePrivateAsVpnv6;
      this._restartTime = value.restartTime;
      this._retainStaleTime = value.retainStaleTime;
      this._routeMapIn = value.routeMapIn;
      this._routeMapIn6 = value.routeMapIn6;
      this._routeMapInEvpn = value.routeMapInEvpn;
      this._routeMapInVpnv4 = value.routeMapInVpnv4;
      this._routeMapInVpnv6 = value.routeMapInVpnv6;
      this._routeMapOut = value.routeMapOut;
      this._routeMapOut6 = value.routeMapOut6;
      this._routeMapOut6Preferable = value.routeMapOut6Preferable;
      this._routeMapOutEvpn = value.routeMapOutEvpn;
      this._routeMapOutPreferable = value.routeMapOutPreferable;
      this._routeMapOutVpnv4 = value.routeMapOutVpnv4;
      this._routeMapOutVpnv4Preferable = value.routeMapOutVpnv4Preferable;
      this._routeMapOutVpnv6 = value.routeMapOutVpnv6;
      this._routeMapOutVpnv6Preferable = value.routeMapOutVpnv6Preferable;
      this._routeReflectorClient = value.routeReflectorClient;
      this._routeReflectorClient6 = value.routeReflectorClient6;
      this._routeReflectorClientEvpn = value.routeReflectorClientEvpn;
      this._routeReflectorClientVpnv4 = value.routeReflectorClientVpnv4;
      this._routeReflectorClientVpnv6 = value.routeReflectorClientVpnv6;
      this._routeServerClient = value.routeServerClient;
      this._routeServerClient6 = value.routeServerClient6;
      this._routeServerClientEvpn = value.routeServerClientEvpn;
      this._routeServerClientVpnv4 = value.routeServerClientVpnv4;
      this._routeServerClientVpnv6 = value.routeServerClientVpnv6;
      this._rrAttrAllowChange = value.rrAttrAllowChange;
      this._rrAttrAllowChange6 = value.rrAttrAllowChange6;
      this._rrAttrAllowChangeEvpn = value.rrAttrAllowChangeEvpn;
      this._rrAttrAllowChangeVpnv4 = value.rrAttrAllowChangeVpnv4;
      this._rrAttrAllowChangeVpnv6 = value.rrAttrAllowChangeVpnv6;
      this._sendCommunity = value.sendCommunity;
      this._sendCommunity6 = value.sendCommunity6;
      this._sendCommunityEvpn = value.sendCommunityEvpn;
      this._sendCommunityVpnv4 = value.sendCommunityVpnv4;
      this._sendCommunityVpnv6 = value.sendCommunityVpnv6;
      this._shutdown = value.shutdown;
      this._softReconfiguration = value.softReconfiguration;
      this._softReconfiguration6 = value.softReconfiguration6;
      this._softReconfigurationEvpn = value.softReconfigurationEvpn;
      this._softReconfigurationVpnv4 = value.softReconfigurationVpnv4;
      this._softReconfigurationVpnv6 = value.softReconfigurationVpnv6;
      this._staleRoute = value.staleRoute;
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

  // activate_vpnv4 - computed: true, optional: true, required: false
  private _activateVpnv4?: string; 
  public get activateVpnv4() {
    return this.getStringAttribute('activate_vpnv4');
  }
  public set activateVpnv4(value: string) {
    this._activateVpnv4 = value;
  }
  public resetActivateVpnv4() {
    this._activateVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateVpnv4Input() {
    return this._activateVpnv4;
  }

  // activate_vpnv6 - computed: true, optional: true, required: false
  private _activateVpnv6?: string; 
  public get activateVpnv6() {
    return this.getStringAttribute('activate_vpnv6');
  }
  public set activateVpnv6(value: string) {
    this._activateVpnv6 = value;
  }
  public resetActivateVpnv6() {
    this._activateVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateVpnv6Input() {
    return this._activateVpnv6;
  }

  // additional_path - computed: true, optional: true, required: false
  private _additionalPath?: string; 
  public get additionalPath() {
    return this.getStringAttribute('additional_path');
  }
  public set additionalPath(value: string) {
    this._additionalPath = value;
  }
  public resetAdditionalPath() {
    this._additionalPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathInput() {
    return this._additionalPath;
  }

  // additional_path6 - computed: true, optional: true, required: false
  private _additionalPath6?: string; 
  public get additionalPath6() {
    return this.getStringAttribute('additional_path6');
  }
  public set additionalPath6(value: string) {
    this._additionalPath6 = value;
  }
  public resetAdditionalPath6() {
    this._additionalPath6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPath6Input() {
    return this._additionalPath6;
  }

  // additional_path_vpnv4 - computed: true, optional: true, required: false
  private _additionalPathVpnv4?: string; 
  public get additionalPathVpnv4() {
    return this.getStringAttribute('additional_path_vpnv4');
  }
  public set additionalPathVpnv4(value: string) {
    this._additionalPathVpnv4 = value;
  }
  public resetAdditionalPathVpnv4() {
    this._additionalPathVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathVpnv4Input() {
    return this._additionalPathVpnv4;
  }

  // additional_path_vpnv6 - computed: true, optional: true, required: false
  private _additionalPathVpnv6?: string; 
  public get additionalPathVpnv6() {
    return this.getStringAttribute('additional_path_vpnv6');
  }
  public set additionalPathVpnv6(value: string) {
    this._additionalPathVpnv6 = value;
  }
  public resetAdditionalPathVpnv6() {
    this._additionalPathVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathVpnv6Input() {
    return this._additionalPathVpnv6;
  }

  // adv_additional_path - computed: true, optional: true, required: false
  private _advAdditionalPath?: number; 
  public get advAdditionalPath() {
    return this.getNumberAttribute('adv_additional_path');
  }
  public set advAdditionalPath(value: number) {
    this._advAdditionalPath = value;
  }
  public resetAdvAdditionalPath() {
    this._advAdditionalPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advAdditionalPathInput() {
    return this._advAdditionalPath;
  }

  // adv_additional_path6 - computed: true, optional: true, required: false
  private _advAdditionalPath6?: number; 
  public get advAdditionalPath6() {
    return this.getNumberAttribute('adv_additional_path6');
  }
  public set advAdditionalPath6(value: number) {
    this._advAdditionalPath6 = value;
  }
  public resetAdvAdditionalPath6() {
    this._advAdditionalPath6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advAdditionalPath6Input() {
    return this._advAdditionalPath6;
  }

  // adv_additional_path_vpnv4 - computed: true, optional: true, required: false
  private _advAdditionalPathVpnv4?: number; 
  public get advAdditionalPathVpnv4() {
    return this.getNumberAttribute('adv_additional_path_vpnv4');
  }
  public set advAdditionalPathVpnv4(value: number) {
    this._advAdditionalPathVpnv4 = value;
  }
  public resetAdvAdditionalPathVpnv4() {
    this._advAdditionalPathVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advAdditionalPathVpnv4Input() {
    return this._advAdditionalPathVpnv4;
  }

  // adv_additional_path_vpnv6 - computed: true, optional: true, required: false
  private _advAdditionalPathVpnv6?: number; 
  public get advAdditionalPathVpnv6() {
    return this.getNumberAttribute('adv_additional_path_vpnv6');
  }
  public set advAdditionalPathVpnv6(value: number) {
    this._advAdditionalPathVpnv6 = value;
  }
  public resetAdvAdditionalPathVpnv6() {
    this._advAdditionalPathVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advAdditionalPathVpnv6Input() {
    return this._advAdditionalPathVpnv6;
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

  // allowas_in6 - computed: false, optional: true, required: false
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

  // allowas_in_enable_vpnv4 - computed: true, optional: true, required: false
  private _allowasInEnableVpnv4?: string; 
  public get allowasInEnableVpnv4() {
    return this.getStringAttribute('allowas_in_enable_vpnv4');
  }
  public set allowasInEnableVpnv4(value: string) {
    this._allowasInEnableVpnv4 = value;
  }
  public resetAllowasInEnableVpnv4() {
    this._allowasInEnableVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnableVpnv4Input() {
    return this._allowasInEnableVpnv4;
  }

  // allowas_in_enable_vpnv6 - computed: true, optional: true, required: false
  private _allowasInEnableVpnv6?: string; 
  public get allowasInEnableVpnv6() {
    return this.getStringAttribute('allowas_in_enable_vpnv6');
  }
  public set allowasInEnableVpnv6(value: string) {
    this._allowasInEnableVpnv6 = value;
  }
  public resetAllowasInEnableVpnv6() {
    this._allowasInEnableVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEnableVpnv6Input() {
    return this._allowasInEnableVpnv6;
  }

  // allowas_in_evpn - computed: true, optional: true, required: false
  private _allowasInEvpn?: number; 
  public get allowasInEvpn() {
    return this.getNumberAttribute('allowas_in_evpn');
  }
  public set allowasInEvpn(value: number) {
    this._allowasInEvpn = value;
  }
  public resetAllowasInEvpn() {
    this._allowasInEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInEvpnInput() {
    return this._allowasInEvpn;
  }

  // allowas_in_vpnv4 - computed: false, optional: true, required: false
  private _allowasInVpnv4?: number; 
  public get allowasInVpnv4() {
    return this.getNumberAttribute('allowas_in_vpnv4');
  }
  public set allowasInVpnv4(value: number) {
    this._allowasInVpnv4 = value;
  }
  public resetAllowasInVpnv4() {
    this._allowasInVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInVpnv4Input() {
    return this._allowasInVpnv4;
  }

  // allowas_in_vpnv6 - computed: true, optional: true, required: false
  private _allowasInVpnv6?: number; 
  public get allowasInVpnv6() {
    return this.getNumberAttribute('allowas_in_vpnv6');
  }
  public set allowasInVpnv6(value: number) {
    this._allowasInVpnv6 = value;
  }
  public resetAllowasInVpnv6() {
    this._allowasInVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInVpnv6Input() {
    return this._allowasInVpnv6;
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
  private _attributeUnchanged?: string[]; 
  public get attributeUnchanged() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_unchanged'));
  }
  public set attributeUnchanged(value: string[]) {
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
  private _attributeUnchanged6?: string[]; 
  public get attributeUnchanged6() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_unchanged6'));
  }
  public set attributeUnchanged6(value: string[]) {
    this._attributeUnchanged6 = value;
  }
  public resetAttributeUnchanged6() {
    this._attributeUnchanged6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchanged6Input() {
    return this._attributeUnchanged6;
  }

  // attribute_unchanged_vpnv4 - computed: true, optional: true, required: false
  private _attributeUnchangedVpnv4?: string[]; 
  public get attributeUnchangedVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_unchanged_vpnv4'));
  }
  public set attributeUnchangedVpnv4(value: string[]) {
    this._attributeUnchangedVpnv4 = value;
  }
  public resetAttributeUnchangedVpnv4() {
    this._attributeUnchangedVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchangedVpnv4Input() {
    return this._attributeUnchangedVpnv4;
  }

  // attribute_unchanged_vpnv6 - computed: true, optional: true, required: false
  private _attributeUnchangedVpnv6?: string[]; 
  public get attributeUnchangedVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_unchanged_vpnv6'));
  }
  public set attributeUnchangedVpnv6(value: string[]) {
    this._attributeUnchangedVpnv6 = value;
  }
  public resetAttributeUnchangedVpnv6() {
    this._attributeUnchangedVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeUnchangedVpnv6Input() {
    return this._attributeUnchangedVpnv6;
  }

  // auth_options - computed: true, optional: true, required: false
  private _authOptions?: string[]; 
  public get authOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_options'));
  }
  public set authOptions(value: string[]) {
    this._authOptions = value;
  }
  public resetAuthOptions() {
    this._authOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authOptionsInput() {
    return this._authOptions;
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

  // capability_graceful_restart - computed: true, optional: true, required: false
  private _capabilityGracefulRestart?: string; 
  public get capabilityGracefulRestart() {
    return this.getStringAttribute('capability_graceful_restart');
  }
  public set capabilityGracefulRestart(value: string) {
    this._capabilityGracefulRestart = value;
  }
  public resetCapabilityGracefulRestart() {
    this._capabilityGracefulRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityGracefulRestartInput() {
    return this._capabilityGracefulRestart;
  }

  // capability_graceful_restart6 - computed: true, optional: true, required: false
  private _capabilityGracefulRestart6?: string; 
  public get capabilityGracefulRestart6() {
    return this.getStringAttribute('capability_graceful_restart6');
  }
  public set capabilityGracefulRestart6(value: string) {
    this._capabilityGracefulRestart6 = value;
  }
  public resetCapabilityGracefulRestart6() {
    this._capabilityGracefulRestart6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityGracefulRestart6Input() {
    return this._capabilityGracefulRestart6;
  }

  // capability_graceful_restart_evpn - computed: true, optional: true, required: false
  private _capabilityGracefulRestartEvpn?: string; 
  public get capabilityGracefulRestartEvpn() {
    return this.getStringAttribute('capability_graceful_restart_evpn');
  }
  public set capabilityGracefulRestartEvpn(value: string) {
    this._capabilityGracefulRestartEvpn = value;
  }
  public resetCapabilityGracefulRestartEvpn() {
    this._capabilityGracefulRestartEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityGracefulRestartEvpnInput() {
    return this._capabilityGracefulRestartEvpn;
  }

  // capability_graceful_restart_vpnv4 - computed: true, optional: true, required: false
  private _capabilityGracefulRestartVpnv4?: string; 
  public get capabilityGracefulRestartVpnv4() {
    return this.getStringAttribute('capability_graceful_restart_vpnv4');
  }
  public set capabilityGracefulRestartVpnv4(value: string) {
    this._capabilityGracefulRestartVpnv4 = value;
  }
  public resetCapabilityGracefulRestartVpnv4() {
    this._capabilityGracefulRestartVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityGracefulRestartVpnv4Input() {
    return this._capabilityGracefulRestartVpnv4;
  }

  // capability_graceful_restart_vpnv6 - computed: true, optional: true, required: false
  private _capabilityGracefulRestartVpnv6?: string; 
  public get capabilityGracefulRestartVpnv6() {
    return this.getStringAttribute('capability_graceful_restart_vpnv6');
  }
  public set capabilityGracefulRestartVpnv6(value: string) {
    this._capabilityGracefulRestartVpnv6 = value;
  }
  public resetCapabilityGracefulRestartVpnv6() {
    this._capabilityGracefulRestartVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityGracefulRestartVpnv6Input() {
    return this._capabilityGracefulRestartVpnv6;
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

  // capability_route_refresh - computed: true, optional: true, required: false
  private _capabilityRouteRefresh?: string; 
  public get capabilityRouteRefresh() {
    return this.getStringAttribute('capability_route_refresh');
  }
  public set capabilityRouteRefresh(value: string) {
    this._capabilityRouteRefresh = value;
  }
  public resetCapabilityRouteRefresh() {
    this._capabilityRouteRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityRouteRefreshInput() {
    return this._capabilityRouteRefresh;
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
  private _defaultOriginateRoutemap?: string[]; 
  public get defaultOriginateRoutemap() {
    return cdktf.Fn.tolist(this.getListAttribute('default_originate_routemap'));
  }
  public set defaultOriginateRoutemap(value: string[]) {
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
  private _defaultOriginateRoutemap6?: string[]; 
  public get defaultOriginateRoutemap6() {
    return cdktf.Fn.tolist(this.getListAttribute('default_originate_routemap6'));
  }
  public set defaultOriginateRoutemap6(value: string[]) {
    this._defaultOriginateRoutemap6 = value;
  }
  public resetDefaultOriginateRoutemap6() {
    this._defaultOriginateRoutemap6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateRoutemap6Input() {
    return this._defaultOriginateRoutemap6;
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

  // distribute_list_in - computed: true, optional: true, required: false
  private _distributeListIn?: string[]; 
  public get distributeListIn() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_in'));
  }
  public set distributeListIn(value: string[]) {
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
  private _distributeListIn6?: string[]; 
  public get distributeListIn6() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_in6'));
  }
  public set distributeListIn6(value: string[]) {
    this._distributeListIn6 = value;
  }
  public resetDistributeListIn6() {
    this._distributeListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListIn6Input() {
    return this._distributeListIn6;
  }

  // distribute_list_in_vpnv4 - computed: true, optional: true, required: false
  private _distributeListInVpnv4?: string[]; 
  public get distributeListInVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_in_vpnv4'));
  }
  public set distributeListInVpnv4(value: string[]) {
    this._distributeListInVpnv4 = value;
  }
  public resetDistributeListInVpnv4() {
    this._distributeListInVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInVpnv4Input() {
    return this._distributeListInVpnv4;
  }

  // distribute_list_in_vpnv6 - computed: true, optional: true, required: false
  private _distributeListInVpnv6?: string[]; 
  public get distributeListInVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_in_vpnv6'));
  }
  public set distributeListInVpnv6(value: string[]) {
    this._distributeListInVpnv6 = value;
  }
  public resetDistributeListInVpnv6() {
    this._distributeListInVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListInVpnv6Input() {
    return this._distributeListInVpnv6;
  }

  // distribute_list_out - computed: true, optional: true, required: false
  private _distributeListOut?: string[]; 
  public get distributeListOut() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_out'));
  }
  public set distributeListOut(value: string[]) {
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
  private _distributeListOut6?: string[]; 
  public get distributeListOut6() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_out6'));
  }
  public set distributeListOut6(value: string[]) {
    this._distributeListOut6 = value;
  }
  public resetDistributeListOut6() {
    this._distributeListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOut6Input() {
    return this._distributeListOut6;
  }

  // distribute_list_out_vpnv4 - computed: true, optional: true, required: false
  private _distributeListOutVpnv4?: string[]; 
  public get distributeListOutVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_out_vpnv4'));
  }
  public set distributeListOutVpnv4(value: string[]) {
    this._distributeListOutVpnv4 = value;
  }
  public resetDistributeListOutVpnv4() {
    this._distributeListOutVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOutVpnv4Input() {
    return this._distributeListOutVpnv4;
  }

  // distribute_list_out_vpnv6 - computed: true, optional: true, required: false
  private _distributeListOutVpnv6?: string[]; 
  public get distributeListOutVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('distribute_list_out_vpnv6'));
  }
  public set distributeListOutVpnv6(value: string[]) {
    this._distributeListOutVpnv6 = value;
  }
  public resetDistributeListOutVpnv6() {
    this._distributeListOutVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeListOutVpnv6Input() {
    return this._distributeListOutVpnv6;
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

  // filter_list_in - computed: true, optional: true, required: false
  private _filterListIn?: string[]; 
  public get filterListIn() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_in'));
  }
  public set filterListIn(value: string[]) {
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
  private _filterListIn6?: string[]; 
  public get filterListIn6() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_in6'));
  }
  public set filterListIn6(value: string[]) {
    this._filterListIn6 = value;
  }
  public resetFilterListIn6() {
    this._filterListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListIn6Input() {
    return this._filterListIn6;
  }

  // filter_list_in_vpnv4 - computed: true, optional: true, required: false
  private _filterListInVpnv4?: string[]; 
  public get filterListInVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_in_vpnv4'));
  }
  public set filterListInVpnv4(value: string[]) {
    this._filterListInVpnv4 = value;
  }
  public resetFilterListInVpnv4() {
    this._filterListInVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInVpnv4Input() {
    return this._filterListInVpnv4;
  }

  // filter_list_in_vpnv6 - computed: true, optional: true, required: false
  private _filterListInVpnv6?: string[]; 
  public get filterListInVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_in_vpnv6'));
  }
  public set filterListInVpnv6(value: string[]) {
    this._filterListInVpnv6 = value;
  }
  public resetFilterListInVpnv6() {
    this._filterListInVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInVpnv6Input() {
    return this._filterListInVpnv6;
  }

  // filter_list_out - computed: true, optional: true, required: false
  private _filterListOut?: string[]; 
  public get filterListOut() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_out'));
  }
  public set filterListOut(value: string[]) {
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
  private _filterListOut6?: string[]; 
  public get filterListOut6() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_out6'));
  }
  public set filterListOut6(value: string[]) {
    this._filterListOut6 = value;
  }
  public resetFilterListOut6() {
    this._filterListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOut6Input() {
    return this._filterListOut6;
  }

  // filter_list_out_vpnv4 - computed: true, optional: true, required: false
  private _filterListOutVpnv4?: string[]; 
  public get filterListOutVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_out_vpnv4'));
  }
  public set filterListOutVpnv4(value: string[]) {
    this._filterListOutVpnv4 = value;
  }
  public resetFilterListOutVpnv4() {
    this._filterListOutVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOutVpnv4Input() {
    return this._filterListOutVpnv4;
  }

  // filter_list_out_vpnv6 - computed: true, optional: true, required: false
  private _filterListOutVpnv6?: string[]; 
  public get filterListOutVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_list_out_vpnv6'));
  }
  public set filterListOutVpnv6(value: string[]) {
    this._filterListOutVpnv6 = value;
  }
  public resetFilterListOutVpnv6() {
    this._filterListOutVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListOutVpnv6Input() {
    return this._filterListOutVpnv6;
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
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // link_down_failover - computed: true, optional: true, required: false
  private _linkDownFailover?: string; 
  public get linkDownFailover() {
    return this.getStringAttribute('link_down_failover');
  }
  public set linkDownFailover(value: string) {
    this._linkDownFailover = value;
  }
  public resetLinkDownFailover() {
    this._linkDownFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkDownFailoverInput() {
    return this._linkDownFailover;
  }

  // local_as - computed: false, optional: true, required: false
  private _localAs?: number; 
  public get localAs() {
    return this.getNumberAttribute('local_as');
  }
  public set localAs(value: number) {
    this._localAs = value;
  }
  public resetLocalAs() {
    this._localAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInput() {
    return this._localAs;
  }

  // local_as_no_prepend - computed: true, optional: true, required: false
  private _localAsNoPrepend?: string; 
  public get localAsNoPrepend() {
    return this.getStringAttribute('local_as_no_prepend');
  }
  public set localAsNoPrepend(value: string) {
    this._localAsNoPrepend = value;
  }
  public resetLocalAsNoPrepend() {
    this._localAsNoPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsNoPrependInput() {
    return this._localAsNoPrepend;
  }

  // local_as_replace_as - computed: true, optional: true, required: false
  private _localAsReplaceAs?: string; 
  public get localAsReplaceAs() {
    return this.getStringAttribute('local_as_replace_as');
  }
  public set localAsReplaceAs(value: string) {
    this._localAsReplaceAs = value;
  }
  public resetLocalAsReplaceAs() {
    this._localAsReplaceAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsReplaceAsInput() {
    return this._localAsReplaceAs;
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

  // maximum_prefix6 - computed: false, optional: true, required: false
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

  // maximum_prefix_evpn - computed: false, optional: true, required: false
  private _maximumPrefixEvpn?: number; 
  public get maximumPrefixEvpn() {
    return this.getNumberAttribute('maximum_prefix_evpn');
  }
  public set maximumPrefixEvpn(value: number) {
    this._maximumPrefixEvpn = value;
  }
  public resetMaximumPrefixEvpn() {
    this._maximumPrefixEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixEvpnInput() {
    return this._maximumPrefixEvpn;
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

  // maximum_prefix_threshold_evpn - computed: true, optional: true, required: false
  private _maximumPrefixThresholdEvpn?: number; 
  public get maximumPrefixThresholdEvpn() {
    return this.getNumberAttribute('maximum_prefix_threshold_evpn');
  }
  public set maximumPrefixThresholdEvpn(value: number) {
    this._maximumPrefixThresholdEvpn = value;
  }
  public resetMaximumPrefixThresholdEvpn() {
    this._maximumPrefixThresholdEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresholdEvpnInput() {
    return this._maximumPrefixThresholdEvpn;
  }

  // maximum_prefix_threshold_vpnv4 - computed: true, optional: true, required: false
  private _maximumPrefixThresholdVpnv4?: number; 
  public get maximumPrefixThresholdVpnv4() {
    return this.getNumberAttribute('maximum_prefix_threshold_vpnv4');
  }
  public set maximumPrefixThresholdVpnv4(value: number) {
    this._maximumPrefixThresholdVpnv4 = value;
  }
  public resetMaximumPrefixThresholdVpnv4() {
    this._maximumPrefixThresholdVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresholdVpnv4Input() {
    return this._maximumPrefixThresholdVpnv4;
  }

  // maximum_prefix_threshold_vpnv6 - computed: true, optional: true, required: false
  private _maximumPrefixThresholdVpnv6?: number; 
  public get maximumPrefixThresholdVpnv6() {
    return this.getNumberAttribute('maximum_prefix_threshold_vpnv6');
  }
  public set maximumPrefixThresholdVpnv6(value: number) {
    this._maximumPrefixThresholdVpnv6 = value;
  }
  public resetMaximumPrefixThresholdVpnv6() {
    this._maximumPrefixThresholdVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresholdVpnv6Input() {
    return this._maximumPrefixThresholdVpnv6;
  }

  // maximum_prefix_vpnv4 - computed: false, optional: true, required: false
  private _maximumPrefixVpnv4?: number; 
  public get maximumPrefixVpnv4() {
    return this.getNumberAttribute('maximum_prefix_vpnv4');
  }
  public set maximumPrefixVpnv4(value: number) {
    this._maximumPrefixVpnv4 = value;
  }
  public resetMaximumPrefixVpnv4() {
    this._maximumPrefixVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixVpnv4Input() {
    return this._maximumPrefixVpnv4;
  }

  // maximum_prefix_vpnv6 - computed: false, optional: true, required: false
  private _maximumPrefixVpnv6?: number; 
  public get maximumPrefixVpnv6() {
    return this.getNumberAttribute('maximum_prefix_vpnv6');
  }
  public set maximumPrefixVpnv6(value: number) {
    this._maximumPrefixVpnv6 = value;
  }
  public resetMaximumPrefixVpnv6() {
    this._maximumPrefixVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixVpnv6Input() {
    return this._maximumPrefixVpnv6;
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

  // maximum_prefix_warning_only_evpn - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnlyEvpn?: string; 
  public get maximumPrefixWarningOnlyEvpn() {
    return this.getStringAttribute('maximum_prefix_warning_only_evpn');
  }
  public set maximumPrefixWarningOnlyEvpn(value: string) {
    this._maximumPrefixWarningOnlyEvpn = value;
  }
  public resetMaximumPrefixWarningOnlyEvpn() {
    this._maximumPrefixWarningOnlyEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnlyEvpnInput() {
    return this._maximumPrefixWarningOnlyEvpn;
  }

  // maximum_prefix_warning_only_vpnv4 - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnlyVpnv4?: string; 
  public get maximumPrefixWarningOnlyVpnv4() {
    return this.getStringAttribute('maximum_prefix_warning_only_vpnv4');
  }
  public set maximumPrefixWarningOnlyVpnv4(value: string) {
    this._maximumPrefixWarningOnlyVpnv4 = value;
  }
  public resetMaximumPrefixWarningOnlyVpnv4() {
    this._maximumPrefixWarningOnlyVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnlyVpnv4Input() {
    return this._maximumPrefixWarningOnlyVpnv4;
  }

  // maximum_prefix_warning_only_vpnv6 - computed: true, optional: true, required: false
  private _maximumPrefixWarningOnlyVpnv6?: string; 
  public get maximumPrefixWarningOnlyVpnv6() {
    return this.getStringAttribute('maximum_prefix_warning_only_vpnv6');
  }
  public set maximumPrefixWarningOnlyVpnv6(value: string) {
    this._maximumPrefixWarningOnlyVpnv6 = value;
  }
  public resetMaximumPrefixWarningOnlyVpnv6() {
    this._maximumPrefixWarningOnlyVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnlyVpnv6Input() {
    return this._maximumPrefixWarningOnlyVpnv6;
  }

  // name - computed: false, optional: true, required: false
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

  // next_hop_self_rr - computed: true, optional: true, required: false
  private _nextHopSelfRr?: string; 
  public get nextHopSelfRr() {
    return this.getStringAttribute('next_hop_self_rr');
  }
  public set nextHopSelfRr(value: string) {
    this._nextHopSelfRr = value;
  }
  public resetNextHopSelfRr() {
    this._nextHopSelfRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfRrInput() {
    return this._nextHopSelfRr;
  }

  // next_hop_self_rr6 - computed: true, optional: true, required: false
  private _nextHopSelfRr6?: string; 
  public get nextHopSelfRr6() {
    return this.getStringAttribute('next_hop_self_rr6');
  }
  public set nextHopSelfRr6(value: string) {
    this._nextHopSelfRr6 = value;
  }
  public resetNextHopSelfRr6() {
    this._nextHopSelfRr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfRr6Input() {
    return this._nextHopSelfRr6;
  }

  // next_hop_self_vpnv4 - computed: true, optional: true, required: false
  private _nextHopSelfVpnv4?: string; 
  public get nextHopSelfVpnv4() {
    return this.getStringAttribute('next_hop_self_vpnv4');
  }
  public set nextHopSelfVpnv4(value: string) {
    this._nextHopSelfVpnv4 = value;
  }
  public resetNextHopSelfVpnv4() {
    this._nextHopSelfVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfVpnv4Input() {
    return this._nextHopSelfVpnv4;
  }

  // next_hop_self_vpnv6 - computed: true, optional: true, required: false
  private _nextHopSelfVpnv6?: string; 
  public get nextHopSelfVpnv6() {
    return this.getStringAttribute('next_hop_self_vpnv6');
  }
  public set nextHopSelfVpnv6(value: string) {
    this._nextHopSelfVpnv6 = value;
  }
  public resetNextHopSelfVpnv6() {
    this._nextHopSelfVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfVpnv6Input() {
    return this._nextHopSelfVpnv6;
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
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
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
  private _prefixListIn?: string[]; 
  public get prefixListIn() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_in'));
  }
  public set prefixListIn(value: string[]) {
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
  private _prefixListIn6?: string[]; 
  public get prefixListIn6() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_in6'));
  }
  public set prefixListIn6(value: string[]) {
    this._prefixListIn6 = value;
  }
  public resetPrefixListIn6() {
    this._prefixListIn6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIn6Input() {
    return this._prefixListIn6;
  }

  // prefix_list_in_vpnv4 - computed: true, optional: true, required: false
  private _prefixListInVpnv4?: string[]; 
  public get prefixListInVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_in_vpnv4'));
  }
  public set prefixListInVpnv4(value: string[]) {
    this._prefixListInVpnv4 = value;
  }
  public resetPrefixListInVpnv4() {
    this._prefixListInVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInVpnv4Input() {
    return this._prefixListInVpnv4;
  }

  // prefix_list_in_vpnv6 - computed: true, optional: true, required: false
  private _prefixListInVpnv6?: string[]; 
  public get prefixListInVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_in_vpnv6'));
  }
  public set prefixListInVpnv6(value: string[]) {
    this._prefixListInVpnv6 = value;
  }
  public resetPrefixListInVpnv6() {
    this._prefixListInVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInVpnv6Input() {
    return this._prefixListInVpnv6;
  }

  // prefix_list_out - computed: true, optional: true, required: false
  private _prefixListOut?: string[]; 
  public get prefixListOut() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_out'));
  }
  public set prefixListOut(value: string[]) {
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
  private _prefixListOut6?: string[]; 
  public get prefixListOut6() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_out6'));
  }
  public set prefixListOut6(value: string[]) {
    this._prefixListOut6 = value;
  }
  public resetPrefixListOut6() {
    this._prefixListOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOut6Input() {
    return this._prefixListOut6;
  }

  // prefix_list_out_vpnv4 - computed: true, optional: true, required: false
  private _prefixListOutVpnv4?: string[]; 
  public get prefixListOutVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_out_vpnv4'));
  }
  public set prefixListOutVpnv4(value: string[]) {
    this._prefixListOutVpnv4 = value;
  }
  public resetPrefixListOutVpnv4() {
    this._prefixListOutVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOutVpnv4Input() {
    return this._prefixListOutVpnv4;
  }

  // prefix_list_out_vpnv6 - computed: true, optional: true, required: false
  private _prefixListOutVpnv6?: string[]; 
  public get prefixListOutVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list_out_vpnv6'));
  }
  public set prefixListOutVpnv6(value: string[]) {
    this._prefixListOutVpnv6 = value;
  }
  public resetPrefixListOutVpnv6() {
    this._prefixListOutVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListOutVpnv6Input() {
    return this._prefixListOutVpnv6;
  }

  // remote_as - computed: false, optional: true, required: false
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

  // remote_as_filter - computed: true, optional: true, required: false
  private _remoteAsFilter?: string[]; 
  public get remoteAsFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_as_filter'));
  }
  public set remoteAsFilter(value: string[]) {
    this._remoteAsFilter = value;
  }
  public resetRemoteAsFilter() {
    this._remoteAsFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsFilterInput() {
    return this._remoteAsFilter;
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

  // remove_private_as_evpn - computed: true, optional: true, required: false
  private _removePrivateAsEvpn?: string; 
  public get removePrivateAsEvpn() {
    return this.getStringAttribute('remove_private_as_evpn');
  }
  public set removePrivateAsEvpn(value: string) {
    this._removePrivateAsEvpn = value;
  }
  public resetRemovePrivateAsEvpn() {
    this._removePrivateAsEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsEvpnInput() {
    return this._removePrivateAsEvpn;
  }

  // remove_private_as_vpnv4 - computed: true, optional: true, required: false
  private _removePrivateAsVpnv4?: string; 
  public get removePrivateAsVpnv4() {
    return this.getStringAttribute('remove_private_as_vpnv4');
  }
  public set removePrivateAsVpnv4(value: string) {
    this._removePrivateAsVpnv4 = value;
  }
  public resetRemovePrivateAsVpnv4() {
    this._removePrivateAsVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsVpnv4Input() {
    return this._removePrivateAsVpnv4;
  }

  // remove_private_as_vpnv6 - computed: true, optional: true, required: false
  private _removePrivateAsVpnv6?: string; 
  public get removePrivateAsVpnv6() {
    return this.getStringAttribute('remove_private_as_vpnv6');
  }
  public set removePrivateAsVpnv6(value: string) {
    this._removePrivateAsVpnv6 = value;
  }
  public resetRemovePrivateAsVpnv6() {
    this._removePrivateAsVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsVpnv6Input() {
    return this._removePrivateAsVpnv6;
  }

  // restart_time - computed: false, optional: true, required: false
  private _restartTime?: number; 
  public get restartTime() {
    return this.getNumberAttribute('restart_time');
  }
  public set restartTime(value: number) {
    this._restartTime = value;
  }
  public resetRestartTime() {
    this._restartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartTimeInput() {
    return this._restartTime;
  }

  // retain_stale_time - computed: false, optional: true, required: false
  private _retainStaleTime?: number; 
  public get retainStaleTime() {
    return this.getNumberAttribute('retain_stale_time');
  }
  public set retainStaleTime(value: number) {
    this._retainStaleTime = value;
  }
  public resetRetainStaleTime() {
    this._retainStaleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainStaleTimeInput() {
    return this._retainStaleTime;
  }

  // route_map_in - computed: true, optional: true, required: false
  private _routeMapIn?: string[]; 
  public get routeMapIn() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_in'));
  }
  public set routeMapIn(value: string[]) {
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
  private _routeMapIn6?: string[]; 
  public get routeMapIn6() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_in6'));
  }
  public set routeMapIn6(value: string[]) {
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
  private _routeMapInEvpn?: string[]; 
  public get routeMapInEvpn() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_in_evpn'));
  }
  public set routeMapInEvpn(value: string[]) {
    this._routeMapInEvpn = value;
  }
  public resetRouteMapInEvpn() {
    this._routeMapInEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInEvpnInput() {
    return this._routeMapInEvpn;
  }

  // route_map_in_vpnv4 - computed: true, optional: true, required: false
  private _routeMapInVpnv4?: string[]; 
  public get routeMapInVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_in_vpnv4'));
  }
  public set routeMapInVpnv4(value: string[]) {
    this._routeMapInVpnv4 = value;
  }
  public resetRouteMapInVpnv4() {
    this._routeMapInVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInVpnv4Input() {
    return this._routeMapInVpnv4;
  }

  // route_map_in_vpnv6 - computed: true, optional: true, required: false
  private _routeMapInVpnv6?: string[]; 
  public get routeMapInVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_in_vpnv6'));
  }
  public set routeMapInVpnv6(value: string[]) {
    this._routeMapInVpnv6 = value;
  }
  public resetRouteMapInVpnv6() {
    this._routeMapInVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInVpnv6Input() {
    return this._routeMapInVpnv6;
  }

  // route_map_out - computed: true, optional: true, required: false
  private _routeMapOut?: string[]; 
  public get routeMapOut() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out'));
  }
  public set routeMapOut(value: string[]) {
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
  private _routeMapOut6?: string[]; 
  public get routeMapOut6() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out6'));
  }
  public set routeMapOut6(value: string[]) {
    this._routeMapOut6 = value;
  }
  public resetRouteMapOut6() {
    this._routeMapOut6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOut6Input() {
    return this._routeMapOut6;
  }

  // route_map_out6_preferable - computed: true, optional: true, required: false
  private _routeMapOut6Preferable?: string[]; 
  public get routeMapOut6Preferable() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out6_preferable'));
  }
  public set routeMapOut6Preferable(value: string[]) {
    this._routeMapOut6Preferable = value;
  }
  public resetRouteMapOut6Preferable() {
    this._routeMapOut6Preferable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOut6PreferableInput() {
    return this._routeMapOut6Preferable;
  }

  // route_map_out_evpn - computed: true, optional: true, required: false
  private _routeMapOutEvpn?: string[]; 
  public get routeMapOutEvpn() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out_evpn'));
  }
  public set routeMapOutEvpn(value: string[]) {
    this._routeMapOutEvpn = value;
  }
  public resetRouteMapOutEvpn() {
    this._routeMapOutEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutEvpnInput() {
    return this._routeMapOutEvpn;
  }

  // route_map_out_preferable - computed: true, optional: true, required: false
  private _routeMapOutPreferable?: string[]; 
  public get routeMapOutPreferable() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out_preferable'));
  }
  public set routeMapOutPreferable(value: string[]) {
    this._routeMapOutPreferable = value;
  }
  public resetRouteMapOutPreferable() {
    this._routeMapOutPreferable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutPreferableInput() {
    return this._routeMapOutPreferable;
  }

  // route_map_out_vpnv4 - computed: true, optional: true, required: false
  private _routeMapOutVpnv4?: string[]; 
  public get routeMapOutVpnv4() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out_vpnv4'));
  }
  public set routeMapOutVpnv4(value: string[]) {
    this._routeMapOutVpnv4 = value;
  }
  public resetRouteMapOutVpnv4() {
    this._routeMapOutVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutVpnv4Input() {
    return this._routeMapOutVpnv4;
  }

  // route_map_out_vpnv4_preferable - computed: true, optional: true, required: false
  private _routeMapOutVpnv4Preferable?: string[]; 
  public get routeMapOutVpnv4Preferable() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out_vpnv4_preferable'));
  }
  public set routeMapOutVpnv4Preferable(value: string[]) {
    this._routeMapOutVpnv4Preferable = value;
  }
  public resetRouteMapOutVpnv4Preferable() {
    this._routeMapOutVpnv4Preferable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutVpnv4PreferableInput() {
    return this._routeMapOutVpnv4Preferable;
  }

  // route_map_out_vpnv6 - computed: true, optional: true, required: false
  private _routeMapOutVpnv6?: string[]; 
  public get routeMapOutVpnv6() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out_vpnv6'));
  }
  public set routeMapOutVpnv6(value: string[]) {
    this._routeMapOutVpnv6 = value;
  }
  public resetRouteMapOutVpnv6() {
    this._routeMapOutVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutVpnv6Input() {
    return this._routeMapOutVpnv6;
  }

  // route_map_out_vpnv6_preferable - computed: true, optional: true, required: false
  private _routeMapOutVpnv6Preferable?: string[]; 
  public get routeMapOutVpnv6Preferable() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map_out_vpnv6_preferable'));
  }
  public set routeMapOutVpnv6Preferable(value: string[]) {
    this._routeMapOutVpnv6Preferable = value;
  }
  public resetRouteMapOutVpnv6Preferable() {
    this._routeMapOutVpnv6Preferable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapOutVpnv6PreferableInput() {
    return this._routeMapOutVpnv6Preferable;
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

  // route_reflector_client_vpnv4 - computed: true, optional: true, required: false
  private _routeReflectorClientVpnv4?: string; 
  public get routeReflectorClientVpnv4() {
    return this.getStringAttribute('route_reflector_client_vpnv4');
  }
  public set routeReflectorClientVpnv4(value: string) {
    this._routeReflectorClientVpnv4 = value;
  }
  public resetRouteReflectorClientVpnv4() {
    this._routeReflectorClientVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientVpnv4Input() {
    return this._routeReflectorClientVpnv4;
  }

  // route_reflector_client_vpnv6 - computed: true, optional: true, required: false
  private _routeReflectorClientVpnv6?: string; 
  public get routeReflectorClientVpnv6() {
    return this.getStringAttribute('route_reflector_client_vpnv6');
  }
  public set routeReflectorClientVpnv6(value: string) {
    this._routeReflectorClientVpnv6 = value;
  }
  public resetRouteReflectorClientVpnv6() {
    this._routeReflectorClientVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientVpnv6Input() {
    return this._routeReflectorClientVpnv6;
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

  // route_server_client_evpn - computed: true, optional: true, required: false
  private _routeServerClientEvpn?: string; 
  public get routeServerClientEvpn() {
    return this.getStringAttribute('route_server_client_evpn');
  }
  public set routeServerClientEvpn(value: string) {
    this._routeServerClientEvpn = value;
  }
  public resetRouteServerClientEvpn() {
    this._routeServerClientEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClientEvpnInput() {
    return this._routeServerClientEvpn;
  }

  // route_server_client_vpnv4 - computed: true, optional: true, required: false
  private _routeServerClientVpnv4?: string; 
  public get routeServerClientVpnv4() {
    return this.getStringAttribute('route_server_client_vpnv4');
  }
  public set routeServerClientVpnv4(value: string) {
    this._routeServerClientVpnv4 = value;
  }
  public resetRouteServerClientVpnv4() {
    this._routeServerClientVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClientVpnv4Input() {
    return this._routeServerClientVpnv4;
  }

  // route_server_client_vpnv6 - computed: true, optional: true, required: false
  private _routeServerClientVpnv6?: string; 
  public get routeServerClientVpnv6() {
    return this.getStringAttribute('route_server_client_vpnv6');
  }
  public set routeServerClientVpnv6(value: string) {
    this._routeServerClientVpnv6 = value;
  }
  public resetRouteServerClientVpnv6() {
    this._routeServerClientVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerClientVpnv6Input() {
    return this._routeServerClientVpnv6;
  }

  // rr_attr_allow_change - computed: true, optional: true, required: false
  private _rrAttrAllowChange?: string; 
  public get rrAttrAllowChange() {
    return this.getStringAttribute('rr_attr_allow_change');
  }
  public set rrAttrAllowChange(value: string) {
    this._rrAttrAllowChange = value;
  }
  public resetRrAttrAllowChange() {
    this._rrAttrAllowChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrAttrAllowChangeInput() {
    return this._rrAttrAllowChange;
  }

  // rr_attr_allow_change6 - computed: true, optional: true, required: false
  private _rrAttrAllowChange6?: string; 
  public get rrAttrAllowChange6() {
    return this.getStringAttribute('rr_attr_allow_change6');
  }
  public set rrAttrAllowChange6(value: string) {
    this._rrAttrAllowChange6 = value;
  }
  public resetRrAttrAllowChange6() {
    this._rrAttrAllowChange6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrAttrAllowChange6Input() {
    return this._rrAttrAllowChange6;
  }

  // rr_attr_allow_change_evpn - computed: true, optional: true, required: false
  private _rrAttrAllowChangeEvpn?: string; 
  public get rrAttrAllowChangeEvpn() {
    return this.getStringAttribute('rr_attr_allow_change_evpn');
  }
  public set rrAttrAllowChangeEvpn(value: string) {
    this._rrAttrAllowChangeEvpn = value;
  }
  public resetRrAttrAllowChangeEvpn() {
    this._rrAttrAllowChangeEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrAttrAllowChangeEvpnInput() {
    return this._rrAttrAllowChangeEvpn;
  }

  // rr_attr_allow_change_vpnv4 - computed: true, optional: true, required: false
  private _rrAttrAllowChangeVpnv4?: string; 
  public get rrAttrAllowChangeVpnv4() {
    return this.getStringAttribute('rr_attr_allow_change_vpnv4');
  }
  public set rrAttrAllowChangeVpnv4(value: string) {
    this._rrAttrAllowChangeVpnv4 = value;
  }
  public resetRrAttrAllowChangeVpnv4() {
    this._rrAttrAllowChangeVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrAttrAllowChangeVpnv4Input() {
    return this._rrAttrAllowChangeVpnv4;
  }

  // rr_attr_allow_change_vpnv6 - computed: true, optional: true, required: false
  private _rrAttrAllowChangeVpnv6?: string; 
  public get rrAttrAllowChangeVpnv6() {
    return this.getStringAttribute('rr_attr_allow_change_vpnv6');
  }
  public set rrAttrAllowChangeVpnv6(value: string) {
    this._rrAttrAllowChangeVpnv6 = value;
  }
  public resetRrAttrAllowChangeVpnv6() {
    this._rrAttrAllowChangeVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrAttrAllowChangeVpnv6Input() {
    return this._rrAttrAllowChangeVpnv6;
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

  // send_community_evpn - computed: true, optional: true, required: false
  private _sendCommunityEvpn?: string; 
  public get sendCommunityEvpn() {
    return this.getStringAttribute('send_community_evpn');
  }
  public set sendCommunityEvpn(value: string) {
    this._sendCommunityEvpn = value;
  }
  public resetSendCommunityEvpn() {
    this._sendCommunityEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityEvpnInput() {
    return this._sendCommunityEvpn;
  }

  // send_community_vpnv4 - computed: true, optional: true, required: false
  private _sendCommunityVpnv4?: string; 
  public get sendCommunityVpnv4() {
    return this.getStringAttribute('send_community_vpnv4');
  }
  public set sendCommunityVpnv4(value: string) {
    this._sendCommunityVpnv4 = value;
  }
  public resetSendCommunityVpnv4() {
    this._sendCommunityVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityVpnv4Input() {
    return this._sendCommunityVpnv4;
  }

  // send_community_vpnv6 - computed: true, optional: true, required: false
  private _sendCommunityVpnv6?: string; 
  public get sendCommunityVpnv6() {
    return this.getStringAttribute('send_community_vpnv6');
  }
  public set sendCommunityVpnv6(value: string) {
    this._sendCommunityVpnv6 = value;
  }
  public resetSendCommunityVpnv6() {
    this._sendCommunityVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityVpnv6Input() {
    return this._sendCommunityVpnv6;
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

  // soft_reconfiguration_vpnv4 - computed: true, optional: true, required: false
  private _softReconfigurationVpnv4?: string; 
  public get softReconfigurationVpnv4() {
    return this.getStringAttribute('soft_reconfiguration_vpnv4');
  }
  public set softReconfigurationVpnv4(value: string) {
    this._softReconfigurationVpnv4 = value;
  }
  public resetSoftReconfigurationVpnv4() {
    this._softReconfigurationVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationVpnv4Input() {
    return this._softReconfigurationVpnv4;
  }

  // soft_reconfiguration_vpnv6 - computed: true, optional: true, required: false
  private _softReconfigurationVpnv6?: string; 
  public get softReconfigurationVpnv6() {
    return this.getStringAttribute('soft_reconfiguration_vpnv6');
  }
  public set softReconfigurationVpnv6(value: string) {
    this._softReconfigurationVpnv6 = value;
  }
  public resetSoftReconfigurationVpnv6() {
    this._softReconfigurationVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationVpnv6Input() {
    return this._softReconfigurationVpnv6;
  }

  // stale_route - computed: true, optional: true, required: false
  private _staleRoute?: string; 
  public get staleRoute() {
    return this.getStringAttribute('stale_route');
  }
  public set staleRoute(value: string) {
    this._staleRoute = value;
  }
  public resetStaleRoute() {
    this._staleRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleRouteInput() {
    return this._staleRoute;
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
  private _unsuppressMap?: string[]; 
  public get unsuppressMap() {
    return cdktf.Fn.tolist(this.getListAttribute('unsuppress_map'));
  }
  public set unsuppressMap(value: string[]) {
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
  private _unsuppressMap6?: string[]; 
  public get unsuppressMap6() {
    return cdktf.Fn.tolist(this.getListAttribute('unsuppress_map6'));
  }
  public set unsuppressMap6(value: string[]) {
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
  private _updateSource?: string[]; 
  public get updateSource() {
    return cdktf.Fn.tolist(this.getListAttribute('update_source'));
  }
  public set updateSource(value: string[]) {
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
export interface RouterBgpNeighborRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#max_neighbor_num RouterBgp#max_neighbor_num}
  */
  readonly maxNeighborNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#neighbor_group RouterBgp#neighbor_group}
  */
  readonly neighborGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix RouterBgp#prefix}
  */
  readonly prefix?: string[];
}

export function routerBgpNeighborRangeToTerraform(struct?: RouterBgpNeighborRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    max_neighbor_num: cdktf.numberToTerraform(struct!.maxNeighborNum),
    neighbor_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.neighborGroup),
    prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefix),
  }
}


export function routerBgpNeighborRangeToHclTerraform(struct?: RouterBgpNeighborRange | cdktf.IResolvable): any {
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
    max_neighbor_num: {
      value: cdktf.numberToHclTerraform(struct!.maxNeighborNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.neighborGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxNeighborNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNeighborNum = this._maxNeighborNum;
    }
    if (this._neighborGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborGroup = this._neighborGroup;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._maxNeighborNum = undefined;
      this._neighborGroup = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._maxNeighborNum = value.maxNeighborNum;
      this._neighborGroup = value.neighborGroup;
      this._prefix = value.prefix;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // max_neighbor_num - computed: false, optional: true, required: false
  private _maxNeighborNum?: number; 
  public get maxNeighborNum() {
    return this.getNumberAttribute('max_neighbor_num');
  }
  public set maxNeighborNum(value: number) {
    this._maxNeighborNum = value;
  }
  public resetMaxNeighborNum() {
    this._maxNeighborNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNeighborNumInput() {
    return this._maxNeighborNum;
  }

  // neighbor_group - computed: true, optional: true, required: false
  private _neighborGroup?: string[]; 
  public get neighborGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('neighbor_group'));
  }
  public set neighborGroup(value: string[]) {
    this._neighborGroup = value;
  }
  public resetNeighborGroup() {
    this._neighborGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborGroupInput() {
    return this._neighborGroup;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class RouterBgpNeighborRangeList extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborRange[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborRangeOutputReference {
    return new RouterBgpNeighborRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNeighborRange6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#max_neighbor_num RouterBgp#max_neighbor_num}
  */
  readonly maxNeighborNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#neighbor_group RouterBgp#neighbor_group}
  */
  readonly neighborGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix6 RouterBgp#prefix6}
  */
  readonly prefix6?: string;
}

export function routerBgpNeighborRange6ToTerraform(struct?: RouterBgpNeighborRange6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    max_neighbor_num: cdktf.numberToTerraform(struct!.maxNeighborNum),
    neighbor_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.neighborGroup),
    prefix6: cdktf.stringToTerraform(struct!.prefix6),
  }
}


export function routerBgpNeighborRange6ToHclTerraform(struct?: RouterBgpNeighborRange6 | cdktf.IResolvable): any {
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
    max_neighbor_num: {
      value: cdktf.numberToHclTerraform(struct!.maxNeighborNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neighbor_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.neighborGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix6: {
      value: cdktf.stringToHclTerraform(struct!.prefix6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpNeighborRange6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpNeighborRange6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxNeighborNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNeighborNum = this._maxNeighborNum;
    }
    if (this._neighborGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborGroup = this._neighborGroup;
    }
    if (this._prefix6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix6 = this._prefix6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpNeighborRange6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._maxNeighborNum = undefined;
      this._neighborGroup = undefined;
      this._prefix6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._maxNeighborNum = value.maxNeighborNum;
      this._neighborGroup = value.neighborGroup;
      this._prefix6 = value.prefix6;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // max_neighbor_num - computed: false, optional: true, required: false
  private _maxNeighborNum?: number; 
  public get maxNeighborNum() {
    return this.getNumberAttribute('max_neighbor_num');
  }
  public set maxNeighborNum(value: number) {
    this._maxNeighborNum = value;
  }
  public resetMaxNeighborNum() {
    this._maxNeighborNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNeighborNumInput() {
    return this._maxNeighborNum;
  }

  // neighbor_group - computed: true, optional: true, required: false
  private _neighborGroup?: string[]; 
  public get neighborGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('neighbor_group'));
  }
  public set neighborGroup(value: string[]) {
    this._neighborGroup = value;
  }
  public resetNeighborGroup() {
    this._neighborGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborGroupInput() {
    return this._neighborGroup;
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
}

export class RouterBgpNeighborRange6List extends cdktf.ComplexList {
  public internalValue? : RouterBgpNeighborRange6[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpNeighborRange6OutputReference {
    return new RouterBgpNeighborRange6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#backdoor RouterBgp#backdoor}
  */
  readonly backdoor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#network_import_check RouterBgp#network_import_check}
  */
  readonly networkImportCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix RouterBgp#prefix}
  */
  readonly prefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix_name RouterBgp#prefix_name}
  */
  readonly prefixName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string[];
}

export function routerBgpNetworkToTerraform(struct?: RouterBgpNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backdoor: cdktf.stringToTerraform(struct!.backdoor),
    id: cdktf.numberToTerraform(struct!.id),
    network_import_check: cdktf.stringToTerraform(struct!.networkImportCheck),
    prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefix),
    prefix_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixName),
    route_map: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMap),
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
    network_import_check: {
      value: cdktf.stringToHclTerraform(struct!.networkImportCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    if (this._networkImportCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkImportCheck = this._networkImportCheck;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixName = this._prefixName;
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
      this._networkImportCheck = undefined;
      this._prefix = undefined;
      this._prefixName = undefined;
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
      this._networkImportCheck = value.networkImportCheck;
      this._prefix = value.prefix;
      this._prefixName = value.prefixName;
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

  // network_import_check - computed: true, optional: true, required: false
  private _networkImportCheck?: string; 
  public get networkImportCheck() {
    return this.getStringAttribute('network_import_check');
  }
  public set networkImportCheck(value: string) {
    this._networkImportCheck = value;
  }
  public resetNetworkImportCheck() {
    this._networkImportCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkImportCheckInput() {
    return this._networkImportCheck;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefix_name - computed: true, optional: true, required: false
  private _prefixName?: string[]; 
  public get prefixName() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_name'));
  }
  public set prefixName(value: string[]) {
    this._prefixName = value;
  }
  public resetPrefixName() {
    this._prefixName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNameInput() {
    return this._prefixName;
  }

  // route_map - computed: true, optional: true, required: false
  private _routeMap?: string[]; 
  public get routeMap() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map'));
  }
  public set routeMap(value: string[]) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#backdoor RouterBgp#backdoor}
  */
  readonly backdoor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#network_import_check RouterBgp#network_import_check}
  */
  readonly networkImportCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#prefix6 RouterBgp#prefix6}
  */
  readonly prefix6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string[];
}

export function routerBgpNetwork6ToTerraform(struct?: RouterBgpNetwork6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backdoor: cdktf.stringToTerraform(struct!.backdoor),
    id: cdktf.numberToTerraform(struct!.id),
    network_import_check: cdktf.stringToTerraform(struct!.networkImportCheck),
    prefix6: cdktf.stringToTerraform(struct!.prefix6),
    route_map: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMap),
  }
}


export function routerBgpNetwork6ToHclTerraform(struct?: RouterBgpNetwork6 | cdktf.IResolvable): any {
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
    network_import_check: {
      value: cdktf.stringToHclTerraform(struct!.networkImportCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix6: {
      value: cdktf.stringToHclTerraform(struct!.prefix6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    if (this._backdoor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backdoor = this._backdoor;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._networkImportCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkImportCheck = this._networkImportCheck;
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
      this._backdoor = undefined;
      this._id = undefined;
      this._networkImportCheck = undefined;
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
      this._backdoor = value.backdoor;
      this._id = value.id;
      this._networkImportCheck = value.networkImportCheck;
      this._prefix6 = value.prefix6;
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

  // id - computed: false, optional: true, required: false
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

  // network_import_check - computed: true, optional: true, required: false
  private _networkImportCheck?: string; 
  public get networkImportCheck() {
    return this.getStringAttribute('network_import_check');
  }
  public set networkImportCheck(value: string) {
    this._networkImportCheck = value;
  }
  public resetNetworkImportCheck() {
    this._networkImportCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkImportCheckInput() {
    return this._networkImportCheck;
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
  private _routeMap?: string[]; 
  public get routeMap() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map'));
  }
  public set routeMap(value: string[]) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#name RouterBgp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#status RouterBgp#status}
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
    route_map: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMap),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

  // name - computed: false, optional: true, required: false
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
  private _routeMap?: string[]; 
  public get routeMap() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map'));
  }
  public set routeMap(value: string[]) {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#name RouterBgp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#status RouterBgp#status}
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
    route_map: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMap),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

  // name - computed: false, optional: true, required: false
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
  private _routeMap?: string[]; 
  public get routeMap() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map'));
  }
  public set routeMap(value: string[]) {
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
export interface RouterBgpVrfLeakTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#interface RouterBgp#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#vrf RouterBgp#vrf}
  */
  readonly vrf?: string;
}

export function routerBgpVrfLeakTargetToTerraform(struct?: RouterBgpVrfLeakTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    route_map: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMap),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function routerBgpVrfLeakTargetToHclTerraform(struct?: RouterBgpVrfLeakTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpVrfLeakTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrfLeakTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpVrfLeakTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._routeMap = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._routeMap = value.routeMap;
      this._vrf = value.vrf;
    }
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // route_map - computed: true, optional: true, required: false
  private _routeMap?: string[]; 
  public get routeMap() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map'));
  }
  public set routeMap(value: string[]) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class RouterBgpVrfLeakTargetList extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrfLeakTarget[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrfLeakTargetOutputReference {
    return new RouterBgpVrfLeakTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpVrf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#export_rt RouterBgp#export_rt}
  */
  readonly exportRt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#import_route_map RouterBgp#import_route_map}
  */
  readonly importRouteMap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#import_rt RouterBgp#import_rt}
  */
  readonly importRt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#rd RouterBgp#rd}
  */
  readonly rd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#role RouterBgp#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#vrf RouterBgp#vrf}
  */
  readonly vrf?: string;
  /**
  * leak_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#leak_target RouterBgp#leak_target}
  */
  readonly leakTarget?: RouterBgpVrfLeakTarget[] | cdktf.IResolvable;
}

export function routerBgpVrfToTerraform(struct?: RouterBgpVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_rt: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exportRt),
    import_route_map: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.importRouteMap),
    import_rt: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.importRt),
    rd: cdktf.stringToTerraform(struct!.rd),
    role: cdktf.stringToTerraform(struct!.role),
    vrf: cdktf.stringToTerraform(struct!.vrf),
    leak_target: cdktf.listMapper(routerBgpVrfLeakTargetToTerraform, true)(struct!.leakTarget),
  }
}


export function routerBgpVrfToHclTerraform(struct?: RouterBgpVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_rt: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exportRt),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    import_route_map: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.importRouteMap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    import_rt: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.importRt),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rd: {
      value: cdktf.stringToHclTerraform(struct!.rd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leak_target: {
      value: cdktf.listMapperHcl(routerBgpVrfLeakTargetToHclTerraform, true)(struct!.leakTarget),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpVrfLeakTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportRt !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportRt = this._exportRt;
    }
    if (this._importRouteMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.importRouteMap = this._importRouteMap;
    }
    if (this._importRt !== undefined) {
      hasAnyValues = true;
      internalValueResult.importRt = this._importRt;
    }
    if (this._rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rd = this._rd;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    if (this._leakTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leakTarget = this._leakTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpVrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportRt = undefined;
      this._importRouteMap = undefined;
      this._importRt = undefined;
      this._rd = undefined;
      this._role = undefined;
      this._vrf = undefined;
      this._leakTarget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportRt = value.exportRt;
      this._importRouteMap = value.importRouteMap;
      this._importRt = value.importRt;
      this._rd = value.rd;
      this._role = value.role;
      this._vrf = value.vrf;
      this._leakTarget.internalValue = value.leakTarget;
    }
  }

  // export_rt - computed: true, optional: true, required: false
  private _exportRt?: string[]; 
  public get exportRt() {
    return cdktf.Fn.tolist(this.getListAttribute('export_rt'));
  }
  public set exportRt(value: string[]) {
    this._exportRt = value;
  }
  public resetExportRt() {
    this._exportRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRtInput() {
    return this._exportRt;
  }

  // import_route_map - computed: true, optional: true, required: false
  private _importRouteMap?: string[]; 
  public get importRouteMap() {
    return cdktf.Fn.tolist(this.getListAttribute('import_route_map'));
  }
  public set importRouteMap(value: string[]) {
    this._importRouteMap = value;
  }
  public resetImportRouteMap() {
    this._importRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importRouteMapInput() {
    return this._importRouteMap;
  }

  // import_rt - computed: true, optional: true, required: false
  private _importRt?: string[]; 
  public get importRt() {
    return cdktf.Fn.tolist(this.getListAttribute('import_rt'));
  }
  public set importRt(value: string[]) {
    this._importRt = value;
  }
  public resetImportRt() {
    this._importRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importRtInput() {
    return this._importRt;
  }

  // rd - computed: false, optional: true, required: false
  private _rd?: string; 
  public get rd() {
    return this.getStringAttribute('rd');
  }
  public set rd(value: string) {
    this._rd = value;
  }
  public resetRd() {
    this._rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdInput() {
    return this._rd;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // leak_target - computed: false, optional: true, required: false
  private _leakTarget = new RouterBgpVrfLeakTargetList(this, "leak_target", false);
  public get leakTarget() {
    return this._leakTarget;
  }
  public putLeakTarget(value: RouterBgpVrfLeakTarget[] | cdktf.IResolvable) {
    this._leakTarget.internalValue = value;
  }
  public resetLeakTarget() {
    this._leakTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leakTargetInput() {
    return this._leakTarget.internalValue;
  }
}

export class RouterBgpVrfList extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrf[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrfOutputReference {
    return new RouterBgpVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpVrf6LeakTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#interface RouterBgp#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#vrf RouterBgp#vrf}
  */
  readonly vrf?: string;
}

export function routerBgpVrf6LeakTargetToTerraform(struct?: RouterBgpVrf6LeakTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    route_map: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMap),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function routerBgpVrf6LeakTargetToHclTerraform(struct?: RouterBgpVrf6LeakTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpVrf6LeakTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrf6LeakTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpVrf6LeakTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._routeMap = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._routeMap = value.routeMap;
      this._vrf = value.vrf;
    }
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // route_map - computed: true, optional: true, required: false
  private _routeMap?: string[]; 
  public get routeMap() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map'));
  }
  public set routeMap(value: string[]) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class RouterBgpVrf6LeakTargetList extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrf6LeakTarget[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrf6LeakTargetOutputReference {
    return new RouterBgpVrf6LeakTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpVrf6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#export_rt RouterBgp#export_rt}
  */
  readonly exportRt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#import_route_map RouterBgp#import_route_map}
  */
  readonly importRouteMap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#import_rt RouterBgp#import_rt}
  */
  readonly importRt?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#rd RouterBgp#rd}
  */
  readonly rd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#role RouterBgp#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#vrf RouterBgp#vrf}
  */
  readonly vrf?: string;
  /**
  * leak_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#leak_target RouterBgp#leak_target}
  */
  readonly leakTarget?: RouterBgpVrf6LeakTarget[] | cdktf.IResolvable;
}

export function routerBgpVrf6ToTerraform(struct?: RouterBgpVrf6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_rt: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exportRt),
    import_route_map: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.importRouteMap),
    import_rt: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.importRt),
    rd: cdktf.stringToTerraform(struct!.rd),
    role: cdktf.stringToTerraform(struct!.role),
    vrf: cdktf.stringToTerraform(struct!.vrf),
    leak_target: cdktf.listMapper(routerBgpVrf6LeakTargetToTerraform, true)(struct!.leakTarget),
  }
}


export function routerBgpVrf6ToHclTerraform(struct?: RouterBgpVrf6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_rt: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exportRt),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    import_route_map: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.importRouteMap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    import_rt: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.importRt),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rd: {
      value: cdktf.stringToHclTerraform(struct!.rd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    leak_target: {
      value: cdktf.listMapperHcl(routerBgpVrf6LeakTargetToHclTerraform, true)(struct!.leakTarget),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpVrf6LeakTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpVrf6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrf6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportRt !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportRt = this._exportRt;
    }
    if (this._importRouteMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.importRouteMap = this._importRouteMap;
    }
    if (this._importRt !== undefined) {
      hasAnyValues = true;
      internalValueResult.importRt = this._importRt;
    }
    if (this._rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rd = this._rd;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    if (this._leakTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leakTarget = this._leakTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpVrf6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportRt = undefined;
      this._importRouteMap = undefined;
      this._importRt = undefined;
      this._rd = undefined;
      this._role = undefined;
      this._vrf = undefined;
      this._leakTarget.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportRt = value.exportRt;
      this._importRouteMap = value.importRouteMap;
      this._importRt = value.importRt;
      this._rd = value.rd;
      this._role = value.role;
      this._vrf = value.vrf;
      this._leakTarget.internalValue = value.leakTarget;
    }
  }

  // export_rt - computed: true, optional: true, required: false
  private _exportRt?: string[]; 
  public get exportRt() {
    return cdktf.Fn.tolist(this.getListAttribute('export_rt'));
  }
  public set exportRt(value: string[]) {
    this._exportRt = value;
  }
  public resetExportRt() {
    this._exportRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportRtInput() {
    return this._exportRt;
  }

  // import_route_map - computed: true, optional: true, required: false
  private _importRouteMap?: string[]; 
  public get importRouteMap() {
    return cdktf.Fn.tolist(this.getListAttribute('import_route_map'));
  }
  public set importRouteMap(value: string[]) {
    this._importRouteMap = value;
  }
  public resetImportRouteMap() {
    this._importRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importRouteMapInput() {
    return this._importRouteMap;
  }

  // import_rt - computed: true, optional: true, required: false
  private _importRt?: string[]; 
  public get importRt() {
    return cdktf.Fn.tolist(this.getListAttribute('import_rt'));
  }
  public set importRt(value: string[]) {
    this._importRt = value;
  }
  public resetImportRt() {
    this._importRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importRtInput() {
    return this._importRt;
  }

  // rd - computed: false, optional: true, required: false
  private _rd?: string; 
  public get rd() {
    return this.getStringAttribute('rd');
  }
  public set rd(value: string) {
    this._rd = value;
  }
  public resetRd() {
    this._rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdInput() {
    return this._rd;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // leak_target - computed: false, optional: true, required: false
  private _leakTarget = new RouterBgpVrf6LeakTargetList(this, "leak_target", false);
  public get leakTarget() {
    return this._leakTarget;
  }
  public putLeakTarget(value: RouterBgpVrf6LeakTarget[] | cdktf.IResolvable) {
    this._leakTarget.internalValue = value;
  }
  public resetLeakTarget() {
    this._leakTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leakTargetInput() {
    return this._leakTarget.internalValue;
  }
}

export class RouterBgpVrf6List extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrf6[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrf6OutputReference {
    return new RouterBgpVrf6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpVrfLeakTargetA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#interface RouterBgp#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#vrf RouterBgp#vrf}
  */
  readonly vrf?: string;
}

export function routerBgpVrfLeakTargetAToTerraform(struct?: RouterBgpVrfLeakTargetA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    route_map: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMap),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function routerBgpVrfLeakTargetAToHclTerraform(struct?: RouterBgpVrfLeakTargetA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpVrfLeakTargetAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrfLeakTargetA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpVrfLeakTargetA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._routeMap = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._routeMap = value.routeMap;
      this._vrf = value.vrf;
    }
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // route_map - computed: true, optional: true, required: false
  private _routeMap?: string[]; 
  public get routeMap() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map'));
  }
  public set routeMap(value: string[]) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class RouterBgpVrfLeakTargetAList extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrfLeakTargetA[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrfLeakTargetAOutputReference {
    return new RouterBgpVrfLeakTargetAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpVrfLeak {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#vrf RouterBgp#vrf}
  */
  readonly vrf?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#target RouterBgp#target}
  */
  readonly target?: RouterBgpVrfLeakTargetA[] | cdktf.IResolvable;
}

export function routerBgpVrfLeakToTerraform(struct?: RouterBgpVrfLeak | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vrf: cdktf.stringToTerraform(struct!.vrf),
    target: cdktf.listMapper(routerBgpVrfLeakTargetAToTerraform, true)(struct!.target),
  }
}


export function routerBgpVrfLeakToHclTerraform(struct?: RouterBgpVrfLeak | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.listMapperHcl(routerBgpVrfLeakTargetAToHclTerraform, true)(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpVrfLeakTargetAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpVrfLeakOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrfLeak | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpVrfLeak | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vrf = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vrf = value.vrf;
      this._target.internalValue = value.target;
    }
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // target - computed: false, optional: true, required: false
  private _target = new RouterBgpVrfLeakTargetAList(this, "target", false);
  public get target() {
    return this._target;
  }
  public putTarget(value: RouterBgpVrfLeakTargetA[] | cdktf.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class RouterBgpVrfLeakList extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrfLeak[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrfLeakOutputReference {
    return new RouterBgpVrfLeakOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpVrfLeak6Target {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#interface RouterBgp#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#route_map RouterBgp#route_map}
  */
  readonly routeMap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#vrf RouterBgp#vrf}
  */
  readonly vrf?: string;
}

export function routerBgpVrfLeak6TargetToTerraform(struct?: RouterBgpVrfLeak6Target | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    route_map: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeMap),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function routerBgpVrfLeak6TargetToHclTerraform(struct?: RouterBgpVrfLeak6Target | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_map: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeMap),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpVrfLeak6TargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrfLeak6Target | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpVrfLeak6Target | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._routeMap = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._routeMap = value.routeMap;
      this._vrf = value.vrf;
    }
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // route_map - computed: true, optional: true, required: false
  private _routeMap?: string[]; 
  public get routeMap() {
    return cdktf.Fn.tolist(this.getListAttribute('route_map'));
  }
  public set routeMap(value: string[]) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class RouterBgpVrfLeak6TargetList extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrfLeak6Target[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrfLeak6TargetOutputReference {
    return new RouterBgpVrfLeak6TargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBgpVrfLeak6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#vrf RouterBgp#vrf}
  */
  readonly vrf?: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#target RouterBgp#target}
  */
  readonly target?: RouterBgpVrfLeak6Target[] | cdktf.IResolvable;
}

export function routerBgpVrfLeak6ToTerraform(struct?: RouterBgpVrfLeak6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vrf: cdktf.stringToTerraform(struct!.vrf),
    target: cdktf.listMapper(routerBgpVrfLeak6TargetToTerraform, true)(struct!.target),
  }
}


export function routerBgpVrfLeak6ToHclTerraform(struct?: RouterBgpVrfLeak6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.listMapperHcl(routerBgpVrfLeak6TargetToHclTerraform, true)(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "RouterBgpVrfLeak6TargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBgpVrfLeak6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBgpVrfLeak6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBgpVrfLeak6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vrf = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vrf = value.vrf;
      this._target.internalValue = value.target;
    }
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // target - computed: false, optional: true, required: false
  private _target = new RouterBgpVrfLeak6TargetList(this, "target", false);
  public get target() {
    return this._target;
  }
  public putTarget(value: RouterBgpVrfLeak6Target[] | cdktf.IResolvable) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class RouterBgpVrfLeak6List extends cdktf.ComplexList {
  public internalValue? : RouterBgpVrfLeak6[] | cdktf.IResolvable

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
  public get(index: number): RouterBgpVrfLeak6OutputReference {
    return new RouterBgpVrfLeak6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp fmgdevice_router_bgp}
*/
export class RouterBgp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_router_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgp to import
  * @param importFromId The id of the existing RouterBgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_router_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/router_bgp fmgdevice_router_bgp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterBgpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_router_bgp',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalPath = config.additionalPath;
    this._additionalPath6 = config.additionalPath6;
    this._additionalPathSelect = config.additionalPathSelect;
    this._additionalPathSelect6 = config.additionalPathSelect6;
    this._additionalPathSelectVpnv4 = config.additionalPathSelectVpnv4;
    this._additionalPathSelectVpnv6 = config.additionalPathSelectVpnv6;
    this._additionalPathVpnv4 = config.additionalPathVpnv4;
    this._additionalPathVpnv6 = config.additionalPathVpnv6;
    this._alwaysCompareMed = config.alwaysCompareMed;
    this._as = config.as;
    this._bestpathAsPathIgnore = config.bestpathAsPathIgnore;
    this._bestpathCmpConfedAspath = config.bestpathCmpConfedAspath;
    this._bestpathCmpRouterid = config.bestpathCmpRouterid;
    this._bestpathMedConfed = config.bestpathMedConfed;
    this._bestpathMedMissingAsWorst = config.bestpathMedMissingAsWorst;
    this._clientToClientReflection = config.clientToClientReflection;
    this._clusterId = config.clusterId;
    this._confederationIdentifier = config.confederationIdentifier;
    this._confederationPeers = config.confederationPeers;
    this._crossFamilyConditionalAdv = config.crossFamilyConditionalAdv;
    this._dampening = config.dampening;
    this._dampeningMaxSuppressTime = config.dampeningMaxSuppressTime;
    this._dampeningReachabilityHalfLife = config.dampeningReachabilityHalfLife;
    this._dampeningReuse = config.dampeningReuse;
    this._dampeningRouteMap = config.dampeningRouteMap;
    this._dampeningSuppress = config.dampeningSuppress;
    this._dampeningUnreachabilityHalfLife = config.dampeningUnreachabilityHalfLife;
    this._defaultLocalPreference = config.defaultLocalPreference;
    this._deterministicMed = config.deterministicMed;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._distanceExternal = config.distanceExternal;
    this._distanceInternal = config.distanceInternal;
    this._distanceLocal = config.distanceLocal;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._ebgpMultipath = config.ebgpMultipath;
    this._enforceFirstAs = config.enforceFirstAs;
    this._fastExternalFailover = config.fastExternalFailover;
    this._gracefulEndOnTimer = config.gracefulEndOnTimer;
    this._gracefulRestart = config.gracefulRestart;
    this._gracefulRestartTime = config.gracefulRestartTime;
    this._gracefulStalepathTime = config.gracefulStalepathTime;
    this._gracefulUpdateDelay = config.gracefulUpdateDelay;
    this._holdtimeTimer = config.holdtimeTimer;
    this._ibgpMultipath = config.ibgpMultipath;
    this._id = config.id;
    this._ignoreOptionalCapability = config.ignoreOptionalCapability;
    this._keepaliveTimer = config.keepaliveTimer;
    this._logNeighbourChanges = config.logNeighbourChanges;
    this._multipathRecursiveDistance = config.multipathRecursiveDistance;
    this._networkImportCheck = config.networkImportCheck;
    this._recursiveInheritPriority = config.recursiveInheritPriority;
    this._recursiveNextHop = config.recursiveNextHop;
    this._routerId = config.routerId;
    this._scanTime = config.scanTime;
    this._synchronization = config.synchronization;
    this._tagResolveMode = config.tagResolveMode;
    this._adminDistance.internalValue = config.adminDistance;
    this._aggregateAddress.internalValue = config.aggregateAddress;
    this._aggregateAddress6.internalValue = config.aggregateAddress6;
    this._neighbor.internalValue = config.neighbor;
    this._neighborGroup.internalValue = config.neighborGroup;
    this._neighborRange.internalValue = config.neighborRange;
    this._neighborRange6.internalValue = config.neighborRange6;
    this._network.internalValue = config.network;
    this._network6.internalValue = config.network6;
    this._redistribute.internalValue = config.redistribute;
    this._redistribute6.internalValue = config.redistribute6;
    this._vrf.internalValue = config.vrf;
    this._vrf6.internalValue = config.vrf6;
    this._vrfLeak.internalValue = config.vrfLeak;
    this._vrfLeak6.internalValue = config.vrfLeak6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_path - computed: true, optional: true, required: false
  private _additionalPath?: string; 
  public get additionalPath() {
    return this.getStringAttribute('additional_path');
  }
  public set additionalPath(value: string) {
    this._additionalPath = value;
  }
  public resetAdditionalPath() {
    this._additionalPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathInput() {
    return this._additionalPath;
  }

  // additional_path6 - computed: true, optional: true, required: false
  private _additionalPath6?: string; 
  public get additionalPath6() {
    return this.getStringAttribute('additional_path6');
  }
  public set additionalPath6(value: string) {
    this._additionalPath6 = value;
  }
  public resetAdditionalPath6() {
    this._additionalPath6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPath6Input() {
    return this._additionalPath6;
  }

  // additional_path_select - computed: true, optional: true, required: false
  private _additionalPathSelect?: number; 
  public get additionalPathSelect() {
    return this.getNumberAttribute('additional_path_select');
  }
  public set additionalPathSelect(value: number) {
    this._additionalPathSelect = value;
  }
  public resetAdditionalPathSelect() {
    this._additionalPathSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathSelectInput() {
    return this._additionalPathSelect;
  }

  // additional_path_select6 - computed: true, optional: true, required: false
  private _additionalPathSelect6?: number; 
  public get additionalPathSelect6() {
    return this.getNumberAttribute('additional_path_select6');
  }
  public set additionalPathSelect6(value: number) {
    this._additionalPathSelect6 = value;
  }
  public resetAdditionalPathSelect6() {
    this._additionalPathSelect6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathSelect6Input() {
    return this._additionalPathSelect6;
  }

  // additional_path_select_vpnv4 - computed: true, optional: true, required: false
  private _additionalPathSelectVpnv4?: number; 
  public get additionalPathSelectVpnv4() {
    return this.getNumberAttribute('additional_path_select_vpnv4');
  }
  public set additionalPathSelectVpnv4(value: number) {
    this._additionalPathSelectVpnv4 = value;
  }
  public resetAdditionalPathSelectVpnv4() {
    this._additionalPathSelectVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathSelectVpnv4Input() {
    return this._additionalPathSelectVpnv4;
  }

  // additional_path_select_vpnv6 - computed: true, optional: true, required: false
  private _additionalPathSelectVpnv6?: number; 
  public get additionalPathSelectVpnv6() {
    return this.getNumberAttribute('additional_path_select_vpnv6');
  }
  public set additionalPathSelectVpnv6(value: number) {
    this._additionalPathSelectVpnv6 = value;
  }
  public resetAdditionalPathSelectVpnv6() {
    this._additionalPathSelectVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathSelectVpnv6Input() {
    return this._additionalPathSelectVpnv6;
  }

  // additional_path_vpnv4 - computed: true, optional: true, required: false
  private _additionalPathVpnv4?: string; 
  public get additionalPathVpnv4() {
    return this.getStringAttribute('additional_path_vpnv4');
  }
  public set additionalPathVpnv4(value: string) {
    this._additionalPathVpnv4 = value;
  }
  public resetAdditionalPathVpnv4() {
    this._additionalPathVpnv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathVpnv4Input() {
    return this._additionalPathVpnv4;
  }

  // additional_path_vpnv6 - computed: true, optional: true, required: false
  private _additionalPathVpnv6?: string; 
  public get additionalPathVpnv6() {
    return this.getStringAttribute('additional_path_vpnv6');
  }
  public set additionalPathVpnv6(value: string) {
    this._additionalPathVpnv6 = value;
  }
  public resetAdditionalPathVpnv6() {
    this._additionalPathVpnv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPathVpnv6Input() {
    return this._additionalPathVpnv6;
  }

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

  // confederation_identifier - computed: false, optional: true, required: false
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

  // confederation_peers - computed: true, optional: true, required: false
  private _confederationPeers?: string[]; 
  public get confederationPeers() {
    return cdktf.Fn.tolist(this.getListAttribute('confederation_peers'));
  }
  public set confederationPeers(value: string[]) {
    this._confederationPeers = value;
  }
  public resetConfederationPeers() {
    this._confederationPeers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confederationPeersInput() {
    return this._confederationPeers;
  }

  // cross_family_conditional_adv - computed: true, optional: true, required: false
  private _crossFamilyConditionalAdv?: string; 
  public get crossFamilyConditionalAdv() {
    return this.getStringAttribute('cross_family_conditional_adv');
  }
  public set crossFamilyConditionalAdv(value: string) {
    this._crossFamilyConditionalAdv = value;
  }
  public resetCrossFamilyConditionalAdv() {
    this._crossFamilyConditionalAdv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossFamilyConditionalAdvInput() {
    return this._crossFamilyConditionalAdv;
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

  // dampening_route_map - computed: true, optional: true, required: false
  private _dampeningRouteMap?: string[]; 
  public get dampeningRouteMap() {
    return cdktf.Fn.tolist(this.getListAttribute('dampening_route_map'));
  }
  public set dampeningRouteMap(value: string[]) {
    this._dampeningRouteMap = value;
  }
  public resetDampeningRouteMap() {
    this._dampeningRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningRouteMapInput() {
    return this._dampeningRouteMap;
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

  // dampening_unreachability_half_life - computed: true, optional: true, required: false
  private _dampeningUnreachabilityHalfLife?: number; 
  public get dampeningUnreachabilityHalfLife() {
    return this.getNumberAttribute('dampening_unreachability_half_life');
  }
  public set dampeningUnreachabilityHalfLife(value: number) {
    this._dampeningUnreachabilityHalfLife = value;
  }
  public resetDampeningUnreachabilityHalfLife() {
    this._dampeningUnreachabilityHalfLife = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningUnreachabilityHalfLifeInput() {
    return this._dampeningUnreachabilityHalfLife;
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

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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

  // ebgp_multipath - computed: true, optional: true, required: false
  private _ebgpMultipath?: string; 
  public get ebgpMultipath() {
    return this.getStringAttribute('ebgp_multipath');
  }
  public set ebgpMultipath(value: string) {
    this._ebgpMultipath = value;
  }
  public resetEbgpMultipath() {
    this._ebgpMultipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultipathInput() {
    return this._ebgpMultipath;
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

  // graceful_end_on_timer - computed: true, optional: true, required: false
  private _gracefulEndOnTimer?: string; 
  public get gracefulEndOnTimer() {
    return this.getStringAttribute('graceful_end_on_timer');
  }
  public set gracefulEndOnTimer(value: string) {
    this._gracefulEndOnTimer = value;
  }
  public resetGracefulEndOnTimer() {
    this._gracefulEndOnTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulEndOnTimerInput() {
    return this._gracefulEndOnTimer;
  }

  // graceful_restart - computed: true, optional: true, required: false
  private _gracefulRestart?: string; 
  public get gracefulRestart() {
    return this.getStringAttribute('graceful_restart');
  }
  public set gracefulRestart(value: string) {
    this._gracefulRestart = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart;
  }

  // graceful_restart_time - computed: false, optional: true, required: false
  private _gracefulRestartTime?: number; 
  public get gracefulRestartTime() {
    return this.getNumberAttribute('graceful_restart_time');
  }
  public set gracefulRestartTime(value: number) {
    this._gracefulRestartTime = value;
  }
  public resetGracefulRestartTime() {
    this._gracefulRestartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartTimeInput() {
    return this._gracefulRestartTime;
  }

  // graceful_stalepath_time - computed: false, optional: true, required: false
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

  // graceful_update_delay - computed: false, optional: true, required: false
  private _gracefulUpdateDelay?: number; 
  public get gracefulUpdateDelay() {
    return this.getNumberAttribute('graceful_update_delay');
  }
  public set gracefulUpdateDelay(value: number) {
    this._gracefulUpdateDelay = value;
  }
  public resetGracefulUpdateDelay() {
    this._gracefulUpdateDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulUpdateDelayInput() {
    return this._gracefulUpdateDelay;
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

  // ibgp_multipath - computed: true, optional: true, required: false
  private _ibgpMultipath?: string; 
  public get ibgpMultipath() {
    return this.getStringAttribute('ibgp_multipath');
  }
  public set ibgpMultipath(value: string) {
    this._ibgpMultipath = value;
  }
  public resetIbgpMultipath() {
    this._ibgpMultipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibgpMultipathInput() {
    return this._ibgpMultipath;
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

  // ignore_optional_capability - computed: true, optional: true, required: false
  private _ignoreOptionalCapability?: string; 
  public get ignoreOptionalCapability() {
    return this.getStringAttribute('ignore_optional_capability');
  }
  public set ignoreOptionalCapability(value: string) {
    this._ignoreOptionalCapability = value;
  }
  public resetIgnoreOptionalCapability() {
    this._ignoreOptionalCapability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreOptionalCapabilityInput() {
    return this._ignoreOptionalCapability;
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

  // multipath_recursive_distance - computed: true, optional: true, required: false
  private _multipathRecursiveDistance?: string; 
  public get multipathRecursiveDistance() {
    return this.getStringAttribute('multipath_recursive_distance');
  }
  public set multipathRecursiveDistance(value: string) {
    this._multipathRecursiveDistance = value;
  }
  public resetMultipathRecursiveDistance() {
    this._multipathRecursiveDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathRecursiveDistanceInput() {
    return this._multipathRecursiveDistance;
  }

  // network_import_check - computed: true, optional: true, required: false
  private _networkImportCheck?: string; 
  public get networkImportCheck() {
    return this.getStringAttribute('network_import_check');
  }
  public set networkImportCheck(value: string) {
    this._networkImportCheck = value;
  }
  public resetNetworkImportCheck() {
    this._networkImportCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkImportCheckInput() {
    return this._networkImportCheck;
  }

  // recursive_inherit_priority - computed: true, optional: true, required: false
  private _recursiveInheritPriority?: string; 
  public get recursiveInheritPriority() {
    return this.getStringAttribute('recursive_inherit_priority');
  }
  public set recursiveInheritPriority(value: string) {
    this._recursiveInheritPriority = value;
  }
  public resetRecursiveInheritPriority() {
    this._recursiveInheritPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInheritPriorityInput() {
    return this._recursiveInheritPriority;
  }

  // recursive_next_hop - computed: true, optional: true, required: false
  private _recursiveNextHop?: string; 
  public get recursiveNextHop() {
    return this.getStringAttribute('recursive_next_hop');
  }
  public set recursiveNextHop(value: string) {
    this._recursiveNextHop = value;
  }
  public resetRecursiveNextHop() {
    this._recursiveNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveNextHopInput() {
    return this._recursiveNextHop;
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

  // synchronization - computed: true, optional: true, required: false
  private _synchronization?: string; 
  public get synchronization() {
    return this.getStringAttribute('synchronization');
  }
  public set synchronization(value: string) {
    this._synchronization = value;
  }
  public resetSynchronization() {
    this._synchronization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizationInput() {
    return this._synchronization;
  }

  // tag_resolve_mode - computed: true, optional: true, required: false
  private _tagResolveMode?: string; 
  public get tagResolveMode() {
    return this.getStringAttribute('tag_resolve_mode');
  }
  public set tagResolveMode(value: string) {
    this._tagResolveMode = value;
  }
  public resetTagResolveMode() {
    this._tagResolveMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagResolveModeInput() {
    return this._tagResolveMode;
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

  // neighbor_range - computed: false, optional: true, required: false
  private _neighborRange = new RouterBgpNeighborRangeList(this, "neighbor_range", false);
  public get neighborRange() {
    return this._neighborRange;
  }
  public putNeighborRange(value: RouterBgpNeighborRange[] | cdktf.IResolvable) {
    this._neighborRange.internalValue = value;
  }
  public resetNeighborRange() {
    this._neighborRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborRangeInput() {
    return this._neighborRange.internalValue;
  }

  // neighbor_range6 - computed: false, optional: true, required: false
  private _neighborRange6 = new RouterBgpNeighborRange6List(this, "neighbor_range6", false);
  public get neighborRange6() {
    return this._neighborRange6;
  }
  public putNeighborRange6(value: RouterBgpNeighborRange6[] | cdktf.IResolvable) {
    this._neighborRange6.internalValue = value;
  }
  public resetNeighborRange6() {
    this._neighborRange6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborRange6Input() {
    return this._neighborRange6.internalValue;
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

  // vrf - computed: false, optional: true, required: false
  private _vrf = new RouterBgpVrfList(this, "vrf", false);
  public get vrf() {
    return this._vrf;
  }
  public putVrf(value: RouterBgpVrf[] | cdktf.IResolvable) {
    this._vrf.internalValue = value;
  }
  public resetVrf() {
    this._vrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf.internalValue;
  }

  // vrf6 - computed: false, optional: true, required: false
  private _vrf6 = new RouterBgpVrf6List(this, "vrf6", false);
  public get vrf6() {
    return this._vrf6;
  }
  public putVrf6(value: RouterBgpVrf6[] | cdktf.IResolvable) {
    this._vrf6.internalValue = value;
  }
  public resetVrf6() {
    this._vrf6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrf6Input() {
    return this._vrf6.internalValue;
  }

  // vrf_leak - computed: false, optional: true, required: false
  private _vrfLeak = new RouterBgpVrfLeakList(this, "vrf_leak", false);
  public get vrfLeak() {
    return this._vrfLeak;
  }
  public putVrfLeak(value: RouterBgpVrfLeak[] | cdktf.IResolvable) {
    this._vrfLeak.internalValue = value;
  }
  public resetVrfLeak() {
    this._vrfLeak.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfLeakInput() {
    return this._vrfLeak.internalValue;
  }

  // vrf_leak6 - computed: false, optional: true, required: false
  private _vrfLeak6 = new RouterBgpVrfLeak6List(this, "vrf_leak6", false);
  public get vrfLeak6() {
    return this._vrfLeak6;
  }
  public putVrfLeak6(value: RouterBgpVrfLeak6[] | cdktf.IResolvable) {
    this._vrfLeak6.internalValue = value;
  }
  public resetVrfLeak6() {
    this._vrfLeak6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfLeak6Input() {
    return this._vrfLeak6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_path: cdktf.stringToTerraform(this._additionalPath),
      additional_path6: cdktf.stringToTerraform(this._additionalPath6),
      additional_path_select: cdktf.numberToTerraform(this._additionalPathSelect),
      additional_path_select6: cdktf.numberToTerraform(this._additionalPathSelect6),
      additional_path_select_vpnv4: cdktf.numberToTerraform(this._additionalPathSelectVpnv4),
      additional_path_select_vpnv6: cdktf.numberToTerraform(this._additionalPathSelectVpnv6),
      additional_path_vpnv4: cdktf.stringToTerraform(this._additionalPathVpnv4),
      additional_path_vpnv6: cdktf.stringToTerraform(this._additionalPathVpnv6),
      always_compare_med: cdktf.stringToTerraform(this._alwaysCompareMed),
      as: cdktf.numberToTerraform(this._as),
      bestpath_as_path_ignore: cdktf.stringToTerraform(this._bestpathAsPathIgnore),
      bestpath_cmp_confed_aspath: cdktf.stringToTerraform(this._bestpathCmpConfedAspath),
      bestpath_cmp_routerid: cdktf.stringToTerraform(this._bestpathCmpRouterid),
      bestpath_med_confed: cdktf.stringToTerraform(this._bestpathMedConfed),
      bestpath_med_missing_as_worst: cdktf.stringToTerraform(this._bestpathMedMissingAsWorst),
      client_to_client_reflection: cdktf.stringToTerraform(this._clientToClientReflection),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      confederation_identifier: cdktf.numberToTerraform(this._confederationIdentifier),
      confederation_peers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._confederationPeers),
      cross_family_conditional_adv: cdktf.stringToTerraform(this._crossFamilyConditionalAdv),
      dampening: cdktf.stringToTerraform(this._dampening),
      dampening_max_suppress_time: cdktf.numberToTerraform(this._dampeningMaxSuppressTime),
      dampening_reachability_half_life: cdktf.numberToTerraform(this._dampeningReachabilityHalfLife),
      dampening_reuse: cdktf.numberToTerraform(this._dampeningReuse),
      dampening_route_map: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dampeningRouteMap),
      dampening_suppress: cdktf.numberToTerraform(this._dampeningSuppress),
      dampening_unreachability_half_life: cdktf.numberToTerraform(this._dampeningUnreachabilityHalfLife),
      default_local_preference: cdktf.numberToTerraform(this._defaultLocalPreference),
      deterministic_med: cdktf.stringToTerraform(this._deterministicMed),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      distance_external: cdktf.numberToTerraform(this._distanceExternal),
      distance_internal: cdktf.numberToTerraform(this._distanceInternal),
      distance_local: cdktf.numberToTerraform(this._distanceLocal),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      ebgp_multipath: cdktf.stringToTerraform(this._ebgpMultipath),
      enforce_first_as: cdktf.stringToTerraform(this._enforceFirstAs),
      fast_external_failover: cdktf.stringToTerraform(this._fastExternalFailover),
      graceful_end_on_timer: cdktf.stringToTerraform(this._gracefulEndOnTimer),
      graceful_restart: cdktf.stringToTerraform(this._gracefulRestart),
      graceful_restart_time: cdktf.numberToTerraform(this._gracefulRestartTime),
      graceful_stalepath_time: cdktf.numberToTerraform(this._gracefulStalepathTime),
      graceful_update_delay: cdktf.numberToTerraform(this._gracefulUpdateDelay),
      holdtime_timer: cdktf.numberToTerraform(this._holdtimeTimer),
      ibgp_multipath: cdktf.stringToTerraform(this._ibgpMultipath),
      id: cdktf.stringToTerraform(this._id),
      ignore_optional_capability: cdktf.stringToTerraform(this._ignoreOptionalCapability),
      keepalive_timer: cdktf.numberToTerraform(this._keepaliveTimer),
      log_neighbour_changes: cdktf.stringToTerraform(this._logNeighbourChanges),
      multipath_recursive_distance: cdktf.stringToTerraform(this._multipathRecursiveDistance),
      network_import_check: cdktf.stringToTerraform(this._networkImportCheck),
      recursive_inherit_priority: cdktf.stringToTerraform(this._recursiveInheritPriority),
      recursive_next_hop: cdktf.stringToTerraform(this._recursiveNextHop),
      router_id: cdktf.stringToTerraform(this._routerId),
      scan_time: cdktf.numberToTerraform(this._scanTime),
      synchronization: cdktf.stringToTerraform(this._synchronization),
      tag_resolve_mode: cdktf.stringToTerraform(this._tagResolveMode),
      admin_distance: cdktf.listMapper(routerBgpAdminDistanceToTerraform, true)(this._adminDistance.internalValue),
      aggregate_address: cdktf.listMapper(routerBgpAggregateAddressToTerraform, true)(this._aggregateAddress.internalValue),
      aggregate_address6: cdktf.listMapper(routerBgpAggregateAddress6ToTerraform, true)(this._aggregateAddress6.internalValue),
      neighbor: cdktf.listMapper(routerBgpNeighborToTerraform, true)(this._neighbor.internalValue),
      neighbor_group: cdktf.listMapper(routerBgpNeighborGroupToTerraform, true)(this._neighborGroup.internalValue),
      neighbor_range: cdktf.listMapper(routerBgpNeighborRangeToTerraform, true)(this._neighborRange.internalValue),
      neighbor_range6: cdktf.listMapper(routerBgpNeighborRange6ToTerraform, true)(this._neighborRange6.internalValue),
      network: cdktf.listMapper(routerBgpNetworkToTerraform, true)(this._network.internalValue),
      network6: cdktf.listMapper(routerBgpNetwork6ToTerraform, true)(this._network6.internalValue),
      redistribute: cdktf.listMapper(routerBgpRedistributeToTerraform, true)(this._redistribute.internalValue),
      redistribute6: cdktf.listMapper(routerBgpRedistribute6ToTerraform, true)(this._redistribute6.internalValue),
      vrf: cdktf.listMapper(routerBgpVrfToTerraform, true)(this._vrf.internalValue),
      vrf6: cdktf.listMapper(routerBgpVrf6ToTerraform, true)(this._vrf6.internalValue),
      vrf_leak: cdktf.listMapper(routerBgpVrfLeakToTerraform, true)(this._vrfLeak.internalValue),
      vrf_leak6: cdktf.listMapper(routerBgpVrfLeak6ToTerraform, true)(this._vrfLeak6.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_path: {
        value: cdktf.stringToHclTerraform(this._additionalPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_path6: {
        value: cdktf.stringToHclTerraform(this._additionalPath6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_path_select: {
        value: cdktf.numberToHclTerraform(this._additionalPathSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      additional_path_select6: {
        value: cdktf.numberToHclTerraform(this._additionalPathSelect6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      additional_path_select_vpnv4: {
        value: cdktf.numberToHclTerraform(this._additionalPathSelectVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      additional_path_select_vpnv6: {
        value: cdktf.numberToHclTerraform(this._additionalPathSelectVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      additional_path_vpnv4: {
        value: cdktf.stringToHclTerraform(this._additionalPathVpnv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_path_vpnv6: {
        value: cdktf.stringToHclTerraform(this._additionalPathVpnv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      confederation_peers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._confederationPeers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cross_family_conditional_adv: {
        value: cdktf.stringToHclTerraform(this._crossFamilyConditionalAdv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      dampening_route_map: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dampeningRouteMap),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dampening_suppress: {
        value: cdktf.numberToHclTerraform(this._dampeningSuppress),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dampening_unreachability_half_life: {
        value: cdktf.numberToHclTerraform(this._dampeningUnreachabilityHalfLife),
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
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
      ebgp_multipath: {
        value: cdktf.stringToHclTerraform(this._ebgpMultipath),
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
      graceful_end_on_timer: {
        value: cdktf.stringToHclTerraform(this._gracefulEndOnTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_restart: {
        value: cdktf.stringToHclTerraform(this._gracefulRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_restart_time: {
        value: cdktf.numberToHclTerraform(this._gracefulRestartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      graceful_stalepath_time: {
        value: cdktf.numberToHclTerraform(this._gracefulStalepathTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      graceful_update_delay: {
        value: cdktf.numberToHclTerraform(this._gracefulUpdateDelay),
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
      ibgp_multipath: {
        value: cdktf.stringToHclTerraform(this._ibgpMultipath),
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
      ignore_optional_capability: {
        value: cdktf.stringToHclTerraform(this._ignoreOptionalCapability),
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
      multipath_recursive_distance: {
        value: cdktf.stringToHclTerraform(this._multipathRecursiveDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_import_check: {
        value: cdktf.stringToHclTerraform(this._networkImportCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recursive_inherit_priority: {
        value: cdktf.stringToHclTerraform(this._recursiveInheritPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recursive_next_hop: {
        value: cdktf.stringToHclTerraform(this._recursiveNextHop),
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
      synchronization: {
        value: cdktf.stringToHclTerraform(this._synchronization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_resolve_mode: {
        value: cdktf.stringToHclTerraform(this._tagResolveMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_distance: {
        value: cdktf.listMapperHcl(routerBgpAdminDistanceToHclTerraform, true)(this._adminDistance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpAdminDistanceList",
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
      neighbor_range: {
        value: cdktf.listMapperHcl(routerBgpNeighborRangeToHclTerraform, true)(this._neighborRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpNeighborRangeList",
      },
      neighbor_range6: {
        value: cdktf.listMapperHcl(routerBgpNeighborRange6ToHclTerraform, true)(this._neighborRange6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpNeighborRange6List",
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
      vrf: {
        value: cdktf.listMapperHcl(routerBgpVrfToHclTerraform, true)(this._vrf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpVrfList",
      },
      vrf6: {
        value: cdktf.listMapperHcl(routerBgpVrf6ToHclTerraform, true)(this._vrf6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpVrf6List",
      },
      vrf_leak: {
        value: cdktf.listMapperHcl(routerBgpVrfLeakToHclTerraform, true)(this._vrfLeak.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpVrfLeakList",
      },
      vrf_leak6: {
        value: cdktf.listMapperHcl(routerBgpVrfLeak6ToHclTerraform, true)(this._vrfLeak6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBgpVrfLeak6List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
