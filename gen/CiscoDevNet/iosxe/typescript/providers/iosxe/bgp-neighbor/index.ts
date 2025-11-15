// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#asn BgpNeighbor#asn}
  */
  readonly asn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#cluster_id BgpNeighbor#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#delete_mode BgpNeighbor#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * Neighbor specific description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#description BgpNeighbor#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#device BgpNeighbor#device}
  */
  readonly device?: string;
  /**
  * one-hop away EBGP peer using loopback address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#disable_connected_check BgpNeighbor#disable_connected_check}
  */
  readonly disableConnectedCheck?: boolean | cdktf.IResolvable;
  /**
  * Allow EBGP neighbors not on directly connected networks. For single-hop ebgp peers, delete ebgp-multihop directly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#ebgp_multihop BgpNeighbor#ebgp_multihop}
  */
  readonly ebgpMultihop?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `2`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#ebgp_multihop_max_hop BgpNeighbor#ebgp_multihop_max_hop}
  */
  readonly ebgpMultihopMaxHop?: number;
  /**
  * Use BFD to detect failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#fall_over_bfd BgpNeighbor#fall_over_bfd}
  */
  readonly fallOverBfd?: boolean | cdktf.IResolvable;
  /**
  * Retrieve control plane dependent failure info from BFD for BGP GR/NSR operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#fall_over_bfd_check_control_plane_failure BgpNeighbor#fall_over_bfd_check_control_plane_failure}
  */
  readonly fallOverBfdCheckControlPlaneFailure?: boolean | cdktf.IResolvable;
  /**
  * Force BFD multi-hop to detect failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#fall_over_bfd_multi_hop BgpNeighbor#fall_over_bfd_multi_hop}
  */
  readonly fallOverBfdMultiHop?: boolean | cdktf.IResolvable;
  /**
  * Force BFD single-hop to detect failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#fall_over_bfd_single_hop BgpNeighbor#fall_over_bfd_single_hop}
  */
  readonly fallOverBfdSingleHop?: boolean | cdktf.IResolvable;
  /**
  * Enable BFD strict-mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#fall_over_bfd_strict_mode BgpNeighbor#fall_over_bfd_strict_mode}
  */
  readonly fallOverBfdStrictMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#fall_over_default_enable BgpNeighbor#fall_over_default_enable}
  */
  readonly fallOverDefaultEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#fall_over_default_route_map BgpNeighbor#fall_over_default_route_map}
  */
  readonly fallOverDefaultRouteMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#fall_over_maximum_metric_route_map BgpNeighbor#fall_over_maximum_metric_route_map}
  */
  readonly fallOverMaximumMetricRouteMap?: string;
  /**
  * Inherit a peer-session template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#inherit_peer_session BgpNeighbor#inherit_peer_session}
  */
  readonly inheritPeerSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#ip BgpNeighbor#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#local_as BgpNeighbor#local_as}
  */
  readonly localAs?: string;
  /**
  * Accept either real AS or local AS from the ebgp peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#local_as_dual_as BgpNeighbor#local_as_dual_as}
  */
  readonly localAsDualAs?: boolean | cdktf.IResolvable;
  /**
  * Do not prepend local-as to updates from ebgp peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#local_as_no_prepend BgpNeighbor#local_as_no_prepend}
  */
  readonly localAsNoPrepend?: boolean | cdktf.IResolvable;
  /**
  * Replace real AS with local AS in the EBGP updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#local_as_replace_as BgpNeighbor#local_as_replace_as}
  */
  readonly localAsReplaceAs?: boolean | cdktf.IResolvable;
  /**
  * Log neighbor up/down and reset reason
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#log_neighbor_changes BgpNeighbor#log_neighbor_changes}
  */
  readonly logNeighborChanges?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#password BgpNeighbor#password}
  */
  readonly password?: string;
  /**
  * Encryption type (0 to disable encryption, 7 for proprietary)
  *   - Range: `0`-`7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#password_type BgpNeighbor#password_type}
  */
  readonly passwordType?: number;
  /**
  * peer-group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#peer_group BgpNeighbor#peer_group}
  */
  readonly peerGroup?: string;
  /**
  * Specify a BGP peer-group remote-as
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#remote_as BgpNeighbor#remote_as}
  */
  readonly remoteAs?: string;
  /**
  * Administratively shut down this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#shutdown BgpNeighbor#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#timers_holdtime BgpNeighbor#timers_holdtime}
  */
  readonly timersHoldtime?: number;
  /**
  * 
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#timers_keepalive_interval BgpNeighbor#timers_keepalive_interval}
  */
  readonly timersKeepaliveInterval?: number;
  /**
  * 
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#timers_minimum_neighbor_hold BgpNeighbor#timers_minimum_neighbor_hold}
  */
  readonly timersMinimumNeighborHold?: number;
  /**
  * IP hops
  *   - Range: `1`-`254`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#ttl_security_hops BgpNeighbor#ttl_security_hops}
  */
  readonly ttlSecurityHops?: number;
  /**
  * Loopback interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#update_source_interface_loopback BgpNeighbor#update_source_interface_loopback}
  */
  readonly updateSourceInterfaceLoopback?: number;
  /**
  * Set the BGP version to match a neighbor
  *   - Range: `4`-`4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#version BgpNeighbor#version}
  */
  readonly version?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor iosxe_bgp_neighbor}
*/
export class BgpNeighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpNeighbor to import
  * @param importFromId The id of the existing BgpNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/resources/bgp_neighbor iosxe_bgp_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: BgpNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.2',
        providerVersionConstraint: '0.10.2'
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
    this._clusterId = config.clusterId;
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
    this._fallOverDefaultEnable = config.fallOverDefaultEnable;
    this._fallOverDefaultRouteMap = config.fallOverDefaultRouteMap;
    this._fallOverMaximumMetricRouteMap = config.fallOverMaximumMetricRouteMap;
    this._inheritPeerSession = config.inheritPeerSession;
    this._ip = config.ip;
    this._localAs = config.localAs;
    this._localAsDualAs = config.localAsDualAs;
    this._localAsNoPrepend = config.localAsNoPrepend;
    this._localAsReplaceAs = config.localAsReplaceAs;
    this._logNeighborChanges = config.logNeighborChanges;
    this._password = config.password;
    this._passwordType = config.passwordType;
    this._peerGroup = config.peerGroup;
    this._remoteAs = config.remoteAs;
    this._shutdown = config.shutdown;
    this._timersHoldtime = config.timersHoldtime;
    this._timersKeepaliveInterval = config.timersKeepaliveInterval;
    this._timersMinimumNeighborHold = config.timersMinimumNeighborHold;
    this._ttlSecurityHops = config.ttlSecurityHops;
    this._updateSourceInterfaceLoopback = config.updateSourceInterfaceLoopback;
    this._version = config.version;
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

  // fall_over_default_enable - computed: false, optional: true, required: false
  private _fallOverDefaultEnable?: boolean | cdktf.IResolvable; 
  public get fallOverDefaultEnable() {
    return this.getBooleanAttribute('fall_over_default_enable');
  }
  public set fallOverDefaultEnable(value: boolean | cdktf.IResolvable) {
    this._fallOverDefaultEnable = value;
  }
  public resetFallOverDefaultEnable() {
    this._fallOverDefaultEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallOverDefaultEnableInput() {
    return this._fallOverDefaultEnable;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inherit_peer_session - computed: false, optional: true, required: false
  private _inheritPeerSession?: string; 
  public get inheritPeerSession() {
    return this.getStringAttribute('inherit_peer_session');
  }
  public set inheritPeerSession(value: string) {
    this._inheritPeerSession = value;
  }
  public resetInheritPeerSession() {
    this._inheritPeerSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritPeerSessionInput() {
    return this._inheritPeerSession;
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

  // log_neighbor_changes - computed: false, optional: true, required: false
  private _logNeighborChanges?: boolean | cdktf.IResolvable; 
  public get logNeighborChanges() {
    return this.getBooleanAttribute('log_neighbor_changes');
  }
  public set logNeighborChanges(value: boolean | cdktf.IResolvable) {
    this._logNeighborChanges = value;
  }
  public resetLogNeighborChanges() {
    this._logNeighborChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNeighborChangesInput() {
    return this._logNeighborChanges;
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

  // peer_group - computed: false, optional: true, required: false
  private _peerGroup?: string; 
  public get peerGroup() {
    return this.getStringAttribute('peer_group');
  }
  public set peerGroup(value: string) {
    this._peerGroup = value;
  }
  public resetPeerGroup() {
    this._peerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupInput() {
    return this._peerGroup;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn: cdktf.stringToTerraform(this._asn),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
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
      fall_over_default_enable: cdktf.booleanToTerraform(this._fallOverDefaultEnable),
      fall_over_default_route_map: cdktf.stringToTerraform(this._fallOverDefaultRouteMap),
      fall_over_maximum_metric_route_map: cdktf.stringToTerraform(this._fallOverMaximumMetricRouteMap),
      inherit_peer_session: cdktf.stringToTerraform(this._inheritPeerSession),
      ip: cdktf.stringToTerraform(this._ip),
      local_as: cdktf.stringToTerraform(this._localAs),
      local_as_dual_as: cdktf.booleanToTerraform(this._localAsDualAs),
      local_as_no_prepend: cdktf.booleanToTerraform(this._localAsNoPrepend),
      local_as_replace_as: cdktf.booleanToTerraform(this._localAsReplaceAs),
      log_neighbor_changes: cdktf.booleanToTerraform(this._logNeighborChanges),
      password: cdktf.stringToTerraform(this._password),
      password_type: cdktf.numberToTerraform(this._passwordType),
      peer_group: cdktf.stringToTerraform(this._peerGroup),
      remote_as: cdktf.stringToTerraform(this._remoteAs),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      timers_holdtime: cdktf.numberToTerraform(this._timersHoldtime),
      timers_keepalive_interval: cdktf.numberToTerraform(this._timersKeepaliveInterval),
      timers_minimum_neighbor_hold: cdktf.numberToTerraform(this._timersMinimumNeighborHold),
      ttl_security_hops: cdktf.numberToTerraform(this._ttlSecurityHops),
      update_source_interface_loopback: cdktf.numberToTerraform(this._updateSourceInterfaceLoopback),
      version: cdktf.numberToTerraform(this._version),
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
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      fall_over_default_enable: {
        value: cdktf.booleanToHclTerraform(this._fallOverDefaultEnable),
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
      inherit_peer_session: {
        value: cdktf.stringToHclTerraform(this._inheritPeerSession),
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
      log_neighbor_changes: {
        value: cdktf.booleanToHclTerraform(this._logNeighborChanges),
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
      peer_group: {
        value: cdktf.stringToHclTerraform(this._peerGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_as: {
        value: cdktf.stringToHclTerraform(this._remoteAs),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
