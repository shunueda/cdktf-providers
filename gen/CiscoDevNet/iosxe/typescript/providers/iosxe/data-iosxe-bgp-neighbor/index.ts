// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/bgp_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeBgpNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/bgp_neighbor#asn DataIosxeBgpNeighbor#asn}
  */
  readonly asn: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/bgp_neighbor#device DataIosxeBgpNeighbor#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/bgp_neighbor#ip DataIosxeBgpNeighbor#ip}
  */
  readonly ip: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/bgp_neighbor iosxe_bgp_neighbor}
*/
export class DataIosxeBgpNeighbor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeBgpNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeBgpNeighbor to import
  * @param importFromId The id of the existing DataIosxeBgpNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/bgp_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeBgpNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/bgp_neighbor iosxe_bgp_neighbor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeBgpNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeBgpNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fall_over_default_enable - computed: true, optional: false, required: false
  public get fallOverDefaultEnable() {
    return this.getBooleanAttribute('fall_over_default_enable');
  }

  // fall_over_default_route_map - computed: true, optional: false, required: false
  public get fallOverDefaultRouteMap() {
    return this.getStringAttribute('fall_over_default_route_map');
  }

  // fall_over_maximum_metric_route_map - computed: true, optional: false, required: false
  public get fallOverMaximumMetricRouteMap() {
    return this.getStringAttribute('fall_over_maximum_metric_route_map');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inherit_peer_session - computed: true, optional: false, required: false
  public get inheritPeerSession() {
    return this.getStringAttribute('inherit_peer_session');
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

  // log_neighbor_changes - computed: true, optional: false, required: false
  public get logNeighborChanges() {
    return this.getBooleanAttribute('log_neighbor_changes');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_type - computed: true, optional: false, required: false
  public get passwordType() {
    return this.getNumberAttribute('password_type');
  }

  // peer_group - computed: true, optional: false, required: false
  public get peerGroup() {
    return this.getStringAttribute('peer_group');
  }

  // remote_as - computed: true, optional: false, required: false
  public get remoteAs() {
    return this.getStringAttribute('remote_as');
  }

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn: cdktf.stringToTerraform(this._asn),
      device: cdktf.stringToTerraform(this._device),
      ip: cdktf.stringToTerraform(this._ip),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
