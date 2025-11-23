// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpIpv4UnicastVrfNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable the address family for this neighbor
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#activate BgpIpv4UnicastVrfNeighbor#activate}
  */
  readonly activate?: boolean | cdktf.IResolvable;
  /**
  * Minimum interval between sending BGP routing updates
  *   - Range: `0`-`600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#advertisement_interval BgpIpv4UnicastVrfNeighbor#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#asn BgpIpv4UnicastVrfNeighbor#asn}
  */
  readonly asn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#cluster_id BgpIpv4UnicastVrfNeighbor#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Originate default route to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#default_originate BgpIpv4UnicastVrfNeighbor#default_originate}
  */
  readonly defaultOriginate?: boolean | cdktf.IResolvable;
  /**
  * Route-map to specify criteria to originate default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#default_originate_route_map BgpIpv4UnicastVrfNeighbor#default_originate_route_map}
  */
  readonly defaultOriginateRouteMap?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#delete_mode BgpIpv4UnicastVrfNeighbor#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Neighbor specific description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#description BgpIpv4UnicastVrfNeighbor#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#device BgpIpv4UnicastVrfNeighbor#device}
  */
  readonly device?: string;
  /**
  * one-hop away EBGP peer using loopback address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#disable_connected_check BgpIpv4UnicastVrfNeighbor#disable_connected_check}
  */
  readonly disableConnectedCheck?: boolean | cdktf.IResolvable;
  /**
  * Allow EBGP neighbors not on directly connected networks. For single-hop ebgp peers, delete ebgp-multihop directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#ebgp_multihop BgpIpv4UnicastVrfNeighbor#ebgp_multihop}
  */
  readonly ebgpMultihop?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `2`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#ebgp_multihop_max_hop BgpIpv4UnicastVrfNeighbor#ebgp_multihop_max_hop}
  */
  readonly ebgpMultihopMaxHop?: number;
  /**
  * Use BFD to detect failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#fall_over_bfd BgpIpv4UnicastVrfNeighbor#fall_over_bfd}
  */
  readonly fallOverBfd?: boolean | cdktf.IResolvable;
  /**
  * Retrieve control plane dependent failure info from BFD for BGP GR/NSR operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#fall_over_bfd_check_control_plane_failure BgpIpv4UnicastVrfNeighbor#fall_over_bfd_check_control_plane_failure}
  */
  readonly fallOverBfdCheckControlPlaneFailure?: boolean | cdktf.IResolvable;
  /**
  * Force BFD multi-hop to detect failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#fall_over_bfd_multi_hop BgpIpv4UnicastVrfNeighbor#fall_over_bfd_multi_hop}
  */
  readonly fallOverBfdMultiHop?: boolean | cdktf.IResolvable;
  /**
  * Force BFD single-hop to detect failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#fall_over_bfd_single_hop BgpIpv4UnicastVrfNeighbor#fall_over_bfd_single_hop}
  */
  readonly fallOverBfdSingleHop?: boolean | cdktf.IResolvable;
  /**
  * Enable BFD strict-mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#fall_over_bfd_strict_mode BgpIpv4UnicastVrfNeighbor#fall_over_bfd_strict_mode}
  */
  readonly fallOverBfdStrictMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#fall_over_default_route_map BgpIpv4UnicastVrfNeighbor#fall_over_default_route_map}
  */
  readonly fallOverDefaultRouteMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#fall_over_maximum_metric_route_map BgpIpv4UnicastVrfNeighbor#fall_over_maximum_metric_route_map}
  */
  readonly fallOverMaximumMetricRouteMap?: string;
  /**
  * graceful-restart for this peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#ha_mode_graceful_restart BgpIpv4UnicastVrfNeighbor#ha_mode_graceful_restart}
  */
  readonly haModeGracefulRestart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#ip BgpIpv4UnicastVrfNeighbor#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#local_as BgpIpv4UnicastVrfNeighbor#local_as}
  */
  readonly localAs?: string;
  /**
  * Accept either real AS or local AS from the ebgp peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#local_as_dual_as BgpIpv4UnicastVrfNeighbor#local_as_dual_as}
  */
  readonly localAsDualAs?: boolean | cdktf.IResolvable;
  /**
  * Do not prepend local-as to updates from ebgp peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#local_as_no_prepend BgpIpv4UnicastVrfNeighbor#local_as_no_prepend}
  */
  readonly localAsNoPrepend?: boolean | cdktf.IResolvable;
  /**
  * Replace real AS with local AS in the EBGP updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#local_as_replace_as BgpIpv4UnicastVrfNeighbor#local_as_replace_as}
  */
  readonly localAsReplaceAs?: boolean | cdktf.IResolvable;
  /**
  * disable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#log_neighbor_changes_disable BgpIpv4UnicastVrfNeighbor#log_neighbor_changes_disable}
  */
  readonly logNeighborChangesDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable the next hop calculation for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#next_hop_self BgpIpv4UnicastVrfNeighbor#next_hop_self}
  */
  readonly nextHopSelf?: boolean | cdktf.IResolvable;
  /**
  * Enable next-hop-self for both eBGP and iBGP received paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#next_hop_self_all BgpIpv4UnicastVrfNeighbor#next_hop_self_all}
  */
  readonly nextHopSelfAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#password BgpIpv4UnicastVrfNeighbor#password}
  */
  readonly password?: string;
  /**
  * Encryption type (0 to disable encryption, 7 for proprietary)
  *   - Range: `0`-`7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#password_type BgpIpv4UnicastVrfNeighbor#password_type}
  */
  readonly passwordType?: number;
  /**
  * Specify a BGP peer-group remote-as
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#remote_as BgpIpv4UnicastVrfNeighbor#remote_as}
  */
  readonly remoteAs?: string;
  /**
  * Apply route map to neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#route_maps BgpIpv4UnicastVrfNeighbor#route_maps}
  */
  readonly routeMaps?: BgpIpv4UnicastVrfNeighborRouteMaps[] | cdktf.IResolvable;
  /**
  * Configure a neighbor as Route Reflector client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#route_reflector_client BgpIpv4UnicastVrfNeighbor#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Choices: `both`, `extended`, `standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#send_community BgpIpv4UnicastVrfNeighbor#send_community}
  */
  readonly sendCommunity?: string;
  /**
  * Administratively shut down this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#shutdown BgpIpv4UnicastVrfNeighbor#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Per neighbor soft reconfiguration
  *   - Choices: `inbound`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#soft_reconfiguration BgpIpv4UnicastVrfNeighbor#soft_reconfiguration}
  */
  readonly softReconfiguration?: string;
  /**
  * 
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#timers_holdtime BgpIpv4UnicastVrfNeighbor#timers_holdtime}
  */
  readonly timersHoldtime?: number;
  /**
  * 
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#timers_keepalive_interval BgpIpv4UnicastVrfNeighbor#timers_keepalive_interval}
  */
  readonly timersKeepaliveInterval?: number;
  /**
  * 
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#timers_minimum_neighbor_hold BgpIpv4UnicastVrfNeighbor#timers_minimum_neighbor_hold}
  */
  readonly timersMinimumNeighborHold?: number;
  /**
  * IP hops
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#ttl_security_hops BgpIpv4UnicastVrfNeighbor#ttl_security_hops}
  */
  readonly ttlSecurityHops?: number;
  /**
  * Loopback interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#update_source_interface_loopback BgpIpv4UnicastVrfNeighbor#update_source_interface_loopback}
  */
  readonly updateSourceInterfaceLoopback?: number;
  /**
  * Set the BGP version to match a neighbor
  *   - Range: `4`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#version BgpIpv4UnicastVrfNeighbor#version}
  */
  readonly version?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#vrf BgpIpv4UnicastVrfNeighbor#vrf}
  */
  readonly vrf: string;
}
export interface BgpIpv4UnicastVrfNeighborRouteMaps {
  /**
  * 
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#in_out BgpIpv4UnicastVrfNeighbor#in_out}
  */
  readonly inOut: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#route_map_name BgpIpv4UnicastVrfNeighbor#route_map_name}
  */
  readonly routeMapName: string;
}

export function bgpIpv4UnicastVrfNeighborRouteMapsToTerraform(struct?: BgpIpv4UnicastVrfNeighborRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_out: cdktf.stringToTerraform(struct!.inOut),
    route_map_name: cdktf.stringToTerraform(struct!.routeMapName),
  }
}


export function bgpIpv4UnicastVrfNeighborRouteMapsToHclTerraform(struct?: BgpIpv4UnicastVrfNeighborRouteMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_out: {
      value: cdktf.stringToHclTerraform(struct!.inOut),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_map_name: {
      value: cdktf.stringToHclTerraform(struct!.routeMapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpIpv4UnicastVrfNeighborRouteMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpIpv4UnicastVrfNeighborRouteMaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.inOut = this._inOut;
    }
    if (this._routeMapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMapName = this._routeMapName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpIpv4UnicastVrfNeighborRouteMaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inOut = undefined;
      this._routeMapName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inOut = value.inOut;
      this._routeMapName = value.routeMapName;
    }
  }

  // in_out - computed: false, optional: false, required: true
  private _inOut?: string; 
  public get inOut() {
    return this.getStringAttribute('in_out');
  }
  public set inOut(value: string) {
    this._inOut = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inOutInput() {
    return this._inOut;
  }

  // route_map_name - computed: false, optional: false, required: true
  private _routeMapName?: string; 
  public get routeMapName() {
    return this.getStringAttribute('route_map_name');
  }
  public set routeMapName(value: string) {
    this._routeMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapNameInput() {
    return this._routeMapName;
  }
}

export class BgpIpv4UnicastVrfNeighborRouteMapsList extends cdktf.ComplexList {
  public internalValue? : BgpIpv4UnicastVrfNeighborRouteMaps[] | cdktf.IResolvable

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
  public get(index: number): BgpIpv4UnicastVrfNeighborRouteMapsOutputReference {
    return new BgpIpv4UnicastVrfNeighborRouteMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor iosxe_bgp_ipv4_unicast_vrf_neighbor}
*/
export class BgpIpv4UnicastVrfNeighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_ipv4_unicast_vrf_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpIpv4UnicastVrfNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpIpv4UnicastVrfNeighbor to import
  * @param importFromId The id of the existing BgpIpv4UnicastVrfNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpIpv4UnicastVrfNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_ipv4_unicast_vrf_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bgp_ipv4_unicast_vrf_neighbor iosxe_bgp_ipv4_unicast_vrf_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpIpv4UnicastVrfNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: BgpIpv4UnicastVrfNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_ipv4_unicast_vrf_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activate = config.activate;
    this._advertisementInterval = config.advertisementInterval;
    this._asn = config.asn;
    this._clusterId = config.clusterId;
    this._defaultOriginate = config.defaultOriginate;
    this._defaultOriginateRouteMap = config.defaultOriginateRouteMap;
    this._deleteMode = config.deleteMode;
    this._description = config.description;
    this._device = config.device;
    this._disableConnectedCheck = config.disableConnectedCheck;
    this._ebgpMultihop = config.ebgpMultihop;
    this._ebgpMultihopMaxHop = config.ebgpMultihopMaxHop;
    this._fallOverBfd = config.fallOverBfd;
    this._fallOverBfdCheckControlPlaneFailure = config.fallOverBfdCheckControlPlaneFailure;
    this._fallOverBfdMultiHop = config.fallOverBfdMultiHop;
    this._fallOverBfdSingleHop = config.fallOverBfdSingleHop;
    this._fallOverBfdStrictMode = config.fallOverBfdStrictMode;
    this._fallOverDefaultRouteMap = config.fallOverDefaultRouteMap;
    this._fallOverMaximumMetricRouteMap = config.fallOverMaximumMetricRouteMap;
    this._haModeGracefulRestart = config.haModeGracefulRestart;
    this._ip = config.ip;
    this._localAs = config.localAs;
    this._localAsDualAs = config.localAsDualAs;
    this._localAsNoPrepend = config.localAsNoPrepend;
    this._localAsReplaceAs = config.localAsReplaceAs;
    this._logNeighborChangesDisable = config.logNeighborChangesDisable;
    this._nextHopSelf = config.nextHopSelf;
    this._nextHopSelfAll = config.nextHopSelfAll;
    this._password = config.password;
    this._passwordType = config.passwordType;
    this._remoteAs = config.remoteAs;
    this._routeMaps.internalValue = config.routeMaps;
    this._routeReflectorClient = config.routeReflectorClient;
    this._sendCommunity = config.sendCommunity;
    this._shutdown = config.shutdown;
    this._softReconfiguration = config.softReconfiguration;
    this._timersHoldtime = config.timersHoldtime;
    this._timersKeepaliveInterval = config.timersKeepaliveInterval;
    this._timersMinimumNeighborHold = config.timersMinimumNeighborHold;
    this._ttlSecurityHops = config.ttlSecurityHops;
    this._updateSourceInterfaceLoopback = config.updateSourceInterfaceLoopback;
    this._version = config.version;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate - computed: true, optional: true, required: false
  private _activate?: boolean | cdktf.IResolvable; 
  public get activate() {
    return this.getBooleanAttribute('activate');
  }
  public set activate(value: boolean | cdktf.IResolvable) {
    this._activate = value;
  }
  public resetActivate() {
    this._activate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInput() {
    return this._activate;
  }

  // advertisement_interval - computed: false, optional: true, required: false
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

  // asn - computed: false, optional: false, required: true
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // cluster_id - computed: false, optional: true, required: false
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

  // default_originate - computed: false, optional: true, required: false
  private _defaultOriginate?: boolean | cdktf.IResolvable; 
  public get defaultOriginate() {
    return this.getBooleanAttribute('default_originate');
  }
  public set defaultOriginate(value: boolean | cdktf.IResolvable) {
    this._defaultOriginate = value;
  }
  public resetDefaultOriginate() {
    this._defaultOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateInput() {
    return this._defaultOriginate;
  }

  // default_originate_route_map - computed: false, optional: true, required: false
  private _defaultOriginateRouteMap?: string; 
  public get defaultOriginateRouteMap() {
    return this.getStringAttribute('default_originate_route_map');
  }
  public set defaultOriginateRouteMap(value: string) {
    this._defaultOriginateRouteMap = value;
  }
  public resetDefaultOriginateRouteMap() {
    this._defaultOriginateRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateRouteMapInput() {
    return this._defaultOriginateRouteMap;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // disable_connected_check - computed: false, optional: true, required: false
  private _disableConnectedCheck?: boolean | cdktf.IResolvable; 
  public get disableConnectedCheck() {
    return this.getBooleanAttribute('disable_connected_check');
  }
  public set disableConnectedCheck(value: boolean | cdktf.IResolvable) {
    this._disableConnectedCheck = value;
  }
  public resetDisableConnectedCheck() {
    this._disableConnectedCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableConnectedCheckInput() {
    return this._disableConnectedCheck;
  }

  // ebgp_multihop - computed: false, optional: true, required: false
  private _ebgpMultihop?: boolean | cdktf.IResolvable; 
  public get ebgpMultihop() {
    return this.getBooleanAttribute('ebgp_multihop');
  }
  public set ebgpMultihop(value: boolean | cdktf.IResolvable) {
    this._ebgpMultihop = value;
  }
  public resetEbgpMultihop() {
    this._ebgpMultihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopInput() {
    return this._ebgpMultihop;
  }

  // ebgp_multihop_max_hop - computed: false, optional: true, required: false
  private _ebgpMultihopMaxHop?: number; 
  public get ebgpMultihopMaxHop() {
    return this.getNumberAttribute('ebgp_multihop_max_hop');
  }
  public set ebgpMultihopMaxHop(value: number) {
    this._ebgpMultihopMaxHop = value;
  }
  public resetEbgpMultihopMaxHop() {
    this._ebgpMultihopMaxHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopMaxHopInput() {
    return this._ebgpMultihopMaxHop;
  }

  // fall_over_bfd - computed: false, optional: true, required: false
  private _fallOverBfd?: boolean | cdktf.IResolvable; 
  public get fallOverBfd() {
    return this.getBooleanAttribute('fall_over_bfd');
  }
  public set fallOverBfd(value: boolean | cdktf.IResolvable) {
    this._fallOverBfd = value;
  }
  public resetFallOverBfd() {
    this._fallOverBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallOverBfdInput() {
    return this._fallOverBfd;
  }

  // fall_over_bfd_check_control_plane_failure - computed: false, optional: true, required: false
  private _fallOverBfdCheckControlPlaneFailure?: boolean | cdktf.IResolvable; 
  public get fallOverBfdCheckControlPlaneFailure() {
    return this.getBooleanAttribute('fall_over_bfd_check_control_plane_failure');
  }
  public set fallOverBfdCheckControlPlaneFailure(value: boolean | cdktf.IResolvable) {
    this._fallOverBfdCheckControlPlaneFailure = value;
  }
  public resetFallOverBfdCheckControlPlaneFailure() {
    this._fallOverBfdCheckControlPlaneFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallOverBfdCheckControlPlaneFailureInput() {
    return this._fallOverBfdCheckControlPlaneFailure;
  }

  // fall_over_bfd_multi_hop - computed: false, optional: true, required: false
  private _fallOverBfdMultiHop?: boolean | cdktf.IResolvable; 
  public get fallOverBfdMultiHop() {
    return this.getBooleanAttribute('fall_over_bfd_multi_hop');
  }
  public set fallOverBfdMultiHop(value: boolean | cdktf.IResolvable) {
    this._fallOverBfdMultiHop = value;
  }
  public resetFallOverBfdMultiHop() {
    this._fallOverBfdMultiHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallOverBfdMultiHopInput() {
    return this._fallOverBfdMultiHop;
  }

  // fall_over_bfd_single_hop - computed: false, optional: true, required: false
  private _fallOverBfdSingleHop?: boolean | cdktf.IResolvable; 
  public get fallOverBfdSingleHop() {
    return this.getBooleanAttribute('fall_over_bfd_single_hop');
  }
  public set fallOverBfdSingleHop(value: boolean | cdktf.IResolvable) {
    this._fallOverBfdSingleHop = value;
  }
  public resetFallOverBfdSingleHop() {
    this._fallOverBfdSingleHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallOverBfdSingleHopInput() {
    return this._fallOverBfdSingleHop;
  }

  // fall_over_bfd_strict_mode - computed: false, optional: true, required: false
  private _fallOverBfdStrictMode?: boolean | cdktf.IResolvable; 
  public get fallOverBfdStrictMode() {
    return this.getBooleanAttribute('fall_over_bfd_strict_mode');
  }
  public set fallOverBfdStrictMode(value: boolean | cdktf.IResolvable) {
    this._fallOverBfdStrictMode = value;
  }
  public resetFallOverBfdStrictMode() {
    this._fallOverBfdStrictMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallOverBfdStrictModeInput() {
    return this._fallOverBfdStrictMode;
  }

  // fall_over_default_route_map - computed: false, optional: true, required: false
  private _fallOverDefaultRouteMap?: string; 
  public get fallOverDefaultRouteMap() {
    return this.getStringAttribute('fall_over_default_route_map');
  }
  public set fallOverDefaultRouteMap(value: string) {
    this._fallOverDefaultRouteMap = value;
  }
  public resetFallOverDefaultRouteMap() {
    this._fallOverDefaultRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallOverDefaultRouteMapInput() {
    return this._fallOverDefaultRouteMap;
  }

  // fall_over_maximum_metric_route_map - computed: false, optional: true, required: false
  private _fallOverMaximumMetricRouteMap?: string; 
  public get fallOverMaximumMetricRouteMap() {
    return this.getStringAttribute('fall_over_maximum_metric_route_map');
  }
  public set fallOverMaximumMetricRouteMap(value: string) {
    this._fallOverMaximumMetricRouteMap = value;
  }
  public resetFallOverMaximumMetricRouteMap() {
    this._fallOverMaximumMetricRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallOverMaximumMetricRouteMapInput() {
    return this._fallOverMaximumMetricRouteMap;
  }

  // ha_mode_graceful_restart - computed: false, optional: true, required: false
  private _haModeGracefulRestart?: boolean | cdktf.IResolvable; 
  public get haModeGracefulRestart() {
    return this.getBooleanAttribute('ha_mode_graceful_restart');
  }
  public set haModeGracefulRestart(value: boolean | cdktf.IResolvable) {
    this._haModeGracefulRestart = value;
  }
  public resetHaModeGracefulRestart() {
    this._haModeGracefulRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haModeGracefulRestartInput() {
    return this._haModeGracefulRestart;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // local_as - computed: false, optional: true, required: false
  private _localAs?: string; 
  public get localAs() {
    return this.getStringAttribute('local_as');
  }
  public set localAs(value: string) {
    this._localAs = value;
  }
  public resetLocalAs() {
    this._localAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInput() {
    return this._localAs;
  }

  // local_as_dual_as - computed: false, optional: true, required: false
  private _localAsDualAs?: boolean | cdktf.IResolvable; 
  public get localAsDualAs() {
    return this.getBooleanAttribute('local_as_dual_as');
  }
  public set localAsDualAs(value: boolean | cdktf.IResolvable) {
    this._localAsDualAs = value;
  }
  public resetLocalAsDualAs() {
    this._localAsDualAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsDualAsInput() {
    return this._localAsDualAs;
  }

  // local_as_no_prepend - computed: false, optional: true, required: false
  private _localAsNoPrepend?: boolean | cdktf.IResolvable; 
  public get localAsNoPrepend() {
    return this.getBooleanAttribute('local_as_no_prepend');
  }
  public set localAsNoPrepend(value: boolean | cdktf.IResolvable) {
    this._localAsNoPrepend = value;
  }
  public resetLocalAsNoPrepend() {
    this._localAsNoPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsNoPrependInput() {
    return this._localAsNoPrepend;
  }

  // local_as_replace_as - computed: false, optional: true, required: false
  private _localAsReplaceAs?: boolean | cdktf.IResolvable; 
  public get localAsReplaceAs() {
    return this.getBooleanAttribute('local_as_replace_as');
  }
  public set localAsReplaceAs(value: boolean | cdktf.IResolvable) {
    this._localAsReplaceAs = value;
  }
  public resetLocalAsReplaceAs() {
    this._localAsReplaceAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsReplaceAsInput() {
    return this._localAsReplaceAs;
  }

  // log_neighbor_changes_disable - computed: false, optional: true, required: false
  private _logNeighborChangesDisable?: boolean | cdktf.IResolvable; 
  public get logNeighborChangesDisable() {
    return this.getBooleanAttribute('log_neighbor_changes_disable');
  }
  public set logNeighborChangesDisable(value: boolean | cdktf.IResolvable) {
    this._logNeighborChangesDisable = value;
  }
  public resetLogNeighborChangesDisable() {
    this._logNeighborChangesDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNeighborChangesDisableInput() {
    return this._logNeighborChangesDisable;
  }

  // next_hop_self - computed: false, optional: true, required: false
  private _nextHopSelf?: boolean | cdktf.IResolvable; 
  public get nextHopSelf() {
    return this.getBooleanAttribute('next_hop_self');
  }
  public set nextHopSelf(value: boolean | cdktf.IResolvable) {
    this._nextHopSelf = value;
  }
  public resetNextHopSelf() {
    this._nextHopSelf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInput() {
    return this._nextHopSelf;
  }

  // next_hop_self_all - computed: false, optional: true, required: false
  private _nextHopSelfAll?: boolean | cdktf.IResolvable; 
  public get nextHopSelfAll() {
    return this.getBooleanAttribute('next_hop_self_all');
  }
  public set nextHopSelfAll(value: boolean | cdktf.IResolvable) {
    this._nextHopSelfAll = value;
  }
  public resetNextHopSelfAll() {
    this._nextHopSelfAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfAllInput() {
    return this._nextHopSelfAll;
  }

  // password - computed: false, optional: true, required: false
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

  // password_type - computed: false, optional: true, required: false
  private _passwordType?: number; 
  public get passwordType() {
    return this.getNumberAttribute('password_type');
  }
  public set passwordType(value: number) {
    this._passwordType = value;
  }
  public resetPasswordType() {
    this._passwordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordTypeInput() {
    return this._passwordType;
  }

  // remote_as - computed: false, optional: true, required: false
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

  // route_maps - computed: false, optional: true, required: false
  private _routeMaps = new BgpIpv4UnicastVrfNeighborRouteMapsList(this, "route_maps", false);
  public get routeMaps() {
    return this._routeMaps;
  }
  public putRouteMaps(value: BgpIpv4UnicastVrfNeighborRouteMaps[] | cdktf.IResolvable) {
    this._routeMaps.internalValue = value;
  }
  public resetRouteMaps() {
    this._routeMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapsInput() {
    return this._routeMaps.internalValue;
  }

  // route_reflector_client - computed: false, optional: true, required: false
  private _routeReflectorClient?: boolean | cdktf.IResolvable; 
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }
  public set routeReflectorClient(value: boolean | cdktf.IResolvable) {
    this._routeReflectorClient = value;
  }
  public resetRouteReflectorClient() {
    this._routeReflectorClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientInput() {
    return this._routeReflectorClient;
  }

  // send_community - computed: false, optional: true, required: false
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

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // soft_reconfiguration - computed: false, optional: true, required: false
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

  // timers_holdtime - computed: false, optional: true, required: false
  private _timersHoldtime?: number; 
  public get timersHoldtime() {
    return this.getNumberAttribute('timers_holdtime');
  }
  public set timersHoldtime(value: number) {
    this._timersHoldtime = value;
  }
  public resetTimersHoldtime() {
    this._timersHoldtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersHoldtimeInput() {
    return this._timersHoldtime;
  }

  // timers_keepalive_interval - computed: false, optional: true, required: false
  private _timersKeepaliveInterval?: number; 
  public get timersKeepaliveInterval() {
    return this.getNumberAttribute('timers_keepalive_interval');
  }
  public set timersKeepaliveInterval(value: number) {
    this._timersKeepaliveInterval = value;
  }
  public resetTimersKeepaliveInterval() {
    this._timersKeepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersKeepaliveIntervalInput() {
    return this._timersKeepaliveInterval;
  }

  // timers_minimum_neighbor_hold - computed: false, optional: true, required: false
  private _timersMinimumNeighborHold?: number; 
  public get timersMinimumNeighborHold() {
    return this.getNumberAttribute('timers_minimum_neighbor_hold');
  }
  public set timersMinimumNeighborHold(value: number) {
    this._timersMinimumNeighborHold = value;
  }
  public resetTimersMinimumNeighborHold() {
    this._timersMinimumNeighborHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersMinimumNeighborHoldInput() {
    return this._timersMinimumNeighborHold;
  }

  // ttl_security_hops - computed: false, optional: true, required: false
  private _ttlSecurityHops?: number; 
  public get ttlSecurityHops() {
    return this.getNumberAttribute('ttl_security_hops');
  }
  public set ttlSecurityHops(value: number) {
    this._ttlSecurityHops = value;
  }
  public resetTtlSecurityHops() {
    this._ttlSecurityHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecurityHopsInput() {
    return this._ttlSecurityHops;
  }

  // update_source_interface_loopback - computed: false, optional: true, required: false
  private _updateSourceInterfaceLoopback?: number; 
  public get updateSourceInterfaceLoopback() {
    return this.getNumberAttribute('update_source_interface_loopback');
  }
  public set updateSourceInterfaceLoopback(value: number) {
    this._updateSourceInterfaceLoopback = value;
  }
  public resetUpdateSourceInterfaceLoopback() {
    this._updateSourceInterfaceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceInterfaceLoopbackInput() {
    return this._updateSourceInterfaceLoopback;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activate: cdktf.booleanToTerraform(this._activate),
      advertisement_interval: cdktf.numberToTerraform(this._advertisementInterval),
      asn: cdktf.stringToTerraform(this._asn),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      default_originate: cdktf.booleanToTerraform(this._defaultOriginate),
      default_originate_route_map: cdktf.stringToTerraform(this._defaultOriginateRouteMap),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      disable_connected_check: cdktf.booleanToTerraform(this._disableConnectedCheck),
      ebgp_multihop: cdktf.booleanToTerraform(this._ebgpMultihop),
      ebgp_multihop_max_hop: cdktf.numberToTerraform(this._ebgpMultihopMaxHop),
      fall_over_bfd: cdktf.booleanToTerraform(this._fallOverBfd),
      fall_over_bfd_check_control_plane_failure: cdktf.booleanToTerraform(this._fallOverBfdCheckControlPlaneFailure),
      fall_over_bfd_multi_hop: cdktf.booleanToTerraform(this._fallOverBfdMultiHop),
      fall_over_bfd_single_hop: cdktf.booleanToTerraform(this._fallOverBfdSingleHop),
      fall_over_bfd_strict_mode: cdktf.booleanToTerraform(this._fallOverBfdStrictMode),
      fall_over_default_route_map: cdktf.stringToTerraform(this._fallOverDefaultRouteMap),
      fall_over_maximum_metric_route_map: cdktf.stringToTerraform(this._fallOverMaximumMetricRouteMap),
      ha_mode_graceful_restart: cdktf.booleanToTerraform(this._haModeGracefulRestart),
      ip: cdktf.stringToTerraform(this._ip),
      local_as: cdktf.stringToTerraform(this._localAs),
      local_as_dual_as: cdktf.booleanToTerraform(this._localAsDualAs),
      local_as_no_prepend: cdktf.booleanToTerraform(this._localAsNoPrepend),
      local_as_replace_as: cdktf.booleanToTerraform(this._localAsReplaceAs),
      log_neighbor_changes_disable: cdktf.booleanToTerraform(this._logNeighborChangesDisable),
      next_hop_self: cdktf.booleanToTerraform(this._nextHopSelf),
      next_hop_self_all: cdktf.booleanToTerraform(this._nextHopSelfAll),
      password: cdktf.stringToTerraform(this._password),
      password_type: cdktf.numberToTerraform(this._passwordType),
      remote_as: cdktf.stringToTerraform(this._remoteAs),
      route_maps: cdktf.listMapper(bgpIpv4UnicastVrfNeighborRouteMapsToTerraform, false)(this._routeMaps.internalValue),
      route_reflector_client: cdktf.booleanToTerraform(this._routeReflectorClient),
      send_community: cdktf.stringToTerraform(this._sendCommunity),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      soft_reconfiguration: cdktf.stringToTerraform(this._softReconfiguration),
      timers_holdtime: cdktf.numberToTerraform(this._timersHoldtime),
      timers_keepalive_interval: cdktf.numberToTerraform(this._timersKeepaliveInterval),
      timers_minimum_neighbor_hold: cdktf.numberToTerraform(this._timersMinimumNeighborHold),
      ttl_security_hops: cdktf.numberToTerraform(this._ttlSecurityHops),
      update_source_interface_loopback: cdktf.numberToTerraform(this._updateSourceInterfaceLoopback),
      version: cdktf.numberToTerraform(this._version),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activate: {
        value: cdktf.booleanToHclTerraform(this._activate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertisement_interval: {
        value: cdktf.numberToHclTerraform(this._advertisementInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
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
      default_originate: {
        value: cdktf.booleanToHclTerraform(this._defaultOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_originate_route_map: {
        value: cdktf.stringToHclTerraform(this._defaultOriginateRouteMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      disable_connected_check: {
        value: cdktf.booleanToHclTerraform(this._disableConnectedCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ebgp_multihop: {
        value: cdktf.booleanToHclTerraform(this._ebgpMultihop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ebgp_multihop_max_hop: {
        value: cdktf.numberToHclTerraform(this._ebgpMultihopMaxHop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fall_over_bfd: {
        value: cdktf.booleanToHclTerraform(this._fallOverBfd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fall_over_bfd_check_control_plane_failure: {
        value: cdktf.booleanToHclTerraform(this._fallOverBfdCheckControlPlaneFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fall_over_bfd_multi_hop: {
        value: cdktf.booleanToHclTerraform(this._fallOverBfdMultiHop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fall_over_bfd_single_hop: {
        value: cdktf.booleanToHclTerraform(this._fallOverBfdSingleHop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fall_over_bfd_strict_mode: {
        value: cdktf.booleanToHclTerraform(this._fallOverBfdStrictMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fall_over_default_route_map: {
        value: cdktf.stringToHclTerraform(this._fallOverDefaultRouteMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fall_over_maximum_metric_route_map: {
        value: cdktf.stringToHclTerraform(this._fallOverMaximumMetricRouteMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_mode_graceful_restart: {
        value: cdktf.booleanToHclTerraform(this._haModeGracefulRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_as: {
        value: cdktf.stringToHclTerraform(this._localAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_as_dual_as: {
        value: cdktf.booleanToHclTerraform(this._localAsDualAs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_as_no_prepend: {
        value: cdktf.booleanToHclTerraform(this._localAsNoPrepend),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_as_replace_as: {
        value: cdktf.booleanToHclTerraform(this._localAsReplaceAs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_neighbor_changes_disable: {
        value: cdktf.booleanToHclTerraform(this._logNeighborChangesDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      next_hop_self: {
        value: cdktf.booleanToHclTerraform(this._nextHopSelf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      next_hop_self_all: {
        value: cdktf.booleanToHclTerraform(this._nextHopSelfAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_type: {
        value: cdktf.numberToHclTerraform(this._passwordType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_as: {
        value: cdktf.stringToHclTerraform(this._remoteAs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_maps: {
        value: cdktf.listMapperHcl(bgpIpv4UnicastVrfNeighborRouteMapsToHclTerraform, false)(this._routeMaps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpIpv4UnicastVrfNeighborRouteMapsList",
      },
      route_reflector_client: {
        value: cdktf.booleanToHclTerraform(this._routeReflectorClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_community: {
        value: cdktf.stringToHclTerraform(this._sendCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      soft_reconfiguration: {
        value: cdktf.stringToHclTerraform(this._softReconfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timers_holdtime: {
        value: cdktf.numberToHclTerraform(this._timersHoldtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_keepalive_interval: {
        value: cdktf.numberToHclTerraform(this._timersKeepaliveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timers_minimum_neighbor_hold: {
        value: cdktf.numberToHclTerraform(this._timersMinimumNeighborHold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl_security_hops: {
        value: cdktf.numberToHclTerraform(this._ttlSecurityHops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_source_interface_loopback: {
        value: cdktf.numberToHclTerraform(this._updateSourceInterfaceLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
