// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/bgp_ipv4_unicast_vrf_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeBgpIpv4UnicastVrfNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/bgp_ipv4_unicast_vrf_neighbor#asn DataIosxeBgpIpv4UnicastVrfNeighbor#asn}
  */
  readonly asn: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/bgp_ipv4_unicast_vrf_neighbor#device DataIosxeBgpIpv4UnicastVrfNeighbor#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/bgp_ipv4_unicast_vrf_neighbor#ip DataIosxeBgpIpv4UnicastVrfNeighbor#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/bgp_ipv4_unicast_vrf_neighbor#vrf DataIosxeBgpIpv4UnicastVrfNeighbor#vrf}
  */
  readonly vrf: string;
}
export interface DataIosxeBgpIpv4UnicastVrfNeighborRouteMaps {
}

export function dataIosxeBgpIpv4UnicastVrfNeighborRouteMapsToTerraform(struct?: DataIosxeBgpIpv4UnicastVrfNeighborRouteMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeBgpIpv4UnicastVrfNeighborRouteMapsToHclTerraform(struct?: DataIosxeBgpIpv4UnicastVrfNeighborRouteMaps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeBgpIpv4UnicastVrfNeighborRouteMapsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIosxeBgpIpv4UnicastVrfNeighborRouteMaps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeBgpIpv4UnicastVrfNeighborRouteMaps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // in_out - computed: true, optional: false, required: false
  public get inOut() {
    return this.getStringAttribute('in_out');
  }

  // route_map_name - computed: true, optional: false, required: false
  public get routeMapName() {
    return this.getStringAttribute('route_map_name');
  }
}

export class DataIosxeBgpIpv4UnicastVrfNeighborRouteMapsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeBgpIpv4UnicastVrfNeighborRouteMapsOutputReference {
    return new DataIosxeBgpIpv4UnicastVrfNeighborRouteMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/bgp_ipv4_unicast_vrf_neighbor iosxe_bgp_ipv4_unicast_vrf_neighbor}
*/
export class DataIosxeBgpIpv4UnicastVrfNeighbor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_ipv4_unicast_vrf_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeBgpIpv4UnicastVrfNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeBgpIpv4UnicastVrfNeighbor to import
  * @param importFromId The id of the existing DataIosxeBgpIpv4UnicastVrfNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/bgp_ipv4_unicast_vrf_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeBgpIpv4UnicastVrfNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_ipv4_unicast_vrf_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/bgp_ipv4_unicast_vrf_neighbor iosxe_bgp_ipv4_unicast_vrf_neighbor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeBgpIpv4UnicastVrfNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeBgpIpv4UnicastVrfNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_ipv4_unicast_vrf_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.5',
        providerVersionConstraint: '0.14.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asn = config.asn;
    this._device = config.device;
    this._ip = config.ip;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate - computed: true, optional: false, required: false
  public get activate() {
    return this.getBooleanAttribute('activate');
  }

  // advertisement_interval - computed: true, optional: false, required: false
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
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

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // default_originate - computed: true, optional: false, required: false
  public get defaultOriginate() {
    return this.getBooleanAttribute('default_originate');
  }

  // default_originate_route_map - computed: true, optional: false, required: false
  public get defaultOriginateRouteMap() {
    return this.getStringAttribute('default_originate_route_map');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // disable_connected_check - computed: true, optional: false, required: false
  public get disableConnectedCheck() {
    return this.getBooleanAttribute('disable_connected_check');
  }

  // ebgp_multihop - computed: true, optional: false, required: false
  public get ebgpMultihop() {
    return this.getBooleanAttribute('ebgp_multihop');
  }

  // ebgp_multihop_max_hop - computed: true, optional: false, required: false
  public get ebgpMultihopMaxHop() {
    return this.getNumberAttribute('ebgp_multihop_max_hop');
  }

  // fall_over_bfd - computed: true, optional: false, required: false
  public get fallOverBfd() {
    return this.getBooleanAttribute('fall_over_bfd');
  }

  // fall_over_bfd_check_control_plane_failure - computed: true, optional: false, required: false
  public get fallOverBfdCheckControlPlaneFailure() {
    return this.getBooleanAttribute('fall_over_bfd_check_control_plane_failure');
  }

  // fall_over_bfd_multi_hop - computed: true, optional: false, required: false
  public get fallOverBfdMultiHop() {
    return this.getBooleanAttribute('fall_over_bfd_multi_hop');
  }

  // fall_over_bfd_single_hop - computed: true, optional: false, required: false
  public get fallOverBfdSingleHop() {
    return this.getBooleanAttribute('fall_over_bfd_single_hop');
  }

  // fall_over_bfd_strict_mode - computed: true, optional: false, required: false
  public get fallOverBfdStrictMode() {
    return this.getBooleanAttribute('fall_over_bfd_strict_mode');
  }

  // fall_over_default_route_map - computed: true, optional: false, required: false
  public get fallOverDefaultRouteMap() {
    return this.getStringAttribute('fall_over_default_route_map');
  }

  // fall_over_maximum_metric_route_map - computed: true, optional: false, required: false
  public get fallOverMaximumMetricRouteMap() {
    return this.getStringAttribute('fall_over_maximum_metric_route_map');
  }

  // ha_mode_graceful_restart - computed: true, optional: false, required: false
  public get haModeGracefulRestart() {
    return this.getBooleanAttribute('ha_mode_graceful_restart');
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

  // local_as - computed: true, optional: false, required: false
  public get localAs() {
    return this.getStringAttribute('local_as');
  }

  // local_as_dual_as - computed: true, optional: false, required: false
  public get localAsDualAs() {
    return this.getBooleanAttribute('local_as_dual_as');
  }

  // local_as_no_prepend - computed: true, optional: false, required: false
  public get localAsNoPrepend() {
    return this.getBooleanAttribute('local_as_no_prepend');
  }

  // local_as_replace_as - computed: true, optional: false, required: false
  public get localAsReplaceAs() {
    return this.getBooleanAttribute('local_as_replace_as');
  }

  // log_neighbor_changes_disable - computed: true, optional: false, required: false
  public get logNeighborChangesDisable() {
    return this.getBooleanAttribute('log_neighbor_changes_disable');
  }

  // next_hop_self - computed: true, optional: false, required: false
  public get nextHopSelf() {
    return this.getBooleanAttribute('next_hop_self');
  }

  // next_hop_self_all - computed: true, optional: false, required: false
  public get nextHopSelfAll() {
    return this.getBooleanAttribute('next_hop_self_all');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_type - computed: true, optional: false, required: false
  public get passwordType() {
    return this.getNumberAttribute('password_type');
  }

  // remote_as - computed: true, optional: false, required: false
  public get remoteAs() {
    return this.getStringAttribute('remote_as');
  }

  // route_maps - computed: true, optional: false, required: false
  private _routeMaps = new DataIosxeBgpIpv4UnicastVrfNeighborRouteMapsList(this, "route_maps", false);
  public get routeMaps() {
    return this._routeMaps;
  }

  // route_reflector_client - computed: true, optional: false, required: false
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }

  // send_community - computed: true, optional: false, required: false
  public get sendCommunity() {
    return this.getStringAttribute('send_community');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // soft_reconfiguration - computed: true, optional: false, required: false
  public get softReconfiguration() {
    return this.getStringAttribute('soft_reconfiguration');
  }

  // timers_holdtime - computed: true, optional: false, required: false
  public get timersHoldtime() {
    return this.getNumberAttribute('timers_holdtime');
  }

  // timers_keepalive_interval - computed: true, optional: false, required: false
  public get timersKeepaliveInterval() {
    return this.getNumberAttribute('timers_keepalive_interval');
  }

  // timers_minimum_neighbor_hold - computed: true, optional: false, required: false
  public get timersMinimumNeighborHold() {
    return this.getNumberAttribute('timers_minimum_neighbor_hold');
  }

  // ttl_security_hops - computed: true, optional: false, required: false
  public get ttlSecurityHops() {
    return this.getNumberAttribute('ttl_security_hops');
  }

  // update_source_interface_loopback - computed: true, optional: false, required: false
  public get updateSourceInterfaceLoopback() {
    return this.getNumberAttribute('update_source_interface_loopback');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
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
      asn: cdktf.stringToTerraform(this._asn),
      device: cdktf.stringToTerraform(this._device),
      ip: cdktf.stringToTerraform(this._ip),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
