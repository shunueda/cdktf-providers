// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuaggaBgpNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Override AS number of the originating router with the local AS number. This command is only allowed for eBGP peers. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#as_override QuaggaBgpNeighbor#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Specify attribute to be left unchanged when sending advertisements to a peer. Read more at FRR documentation. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#attribute_unchanged QuaggaBgpNeighbor#attribute_unchanged}
  */
  readonly attributeUnchanged?: string;
  /**
  * Enable BFD support for this neighbor. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#bfd QuaggaBgpNeighbor#bfd}
  */
  readonly bfd?: boolean | cdktf.IResolvable;
  /**
  * The time in seconds how fast a neighbor tries to reconnect. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#connect_timer QuaggaBgpNeighbor#connect_timer}
  */
  readonly connectTimer?: number;
  /**
  * Enable to send Defaultroute. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#default_route QuaggaBgpNeighbor#default_route}
  */
  readonly defaultRoute?: boolean | cdktf.IResolvable;
  /**
  * An optional description for this neighbor. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#description QuaggaBgpNeighbor#description}
  */
  readonly description?: string;
  /**
  * Enable to allow peerings between directly connected eBGP peers using loopback addresses. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#disable_connected_check QuaggaBgpNeighbor#disable_connected_check}
  */
  readonly disableConnectedCheck?: boolean | cdktf.IResolvable;
  /**
  * Enable this neighbor. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#enabled QuaggaBgpNeighbor#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The time in seconds when a neighbor is considered dead. This is usually 3 times the keepalive timer. Defaults to `180`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#hold_down QuaggaBgpNeighbor#hold_down}
  */
  readonly holdDown?: number;
  /**
  * Enable Keepalive timer to check if the neighbor is still up. Defaults to `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#keep_alive QuaggaBgpNeighbor#keep_alive}
  */
  readonly keepAlive?: number;
  /**
  * Interface to use for IPv6 link-local neighbours. Must be a valid OPNsense interface in lowercase (e.g. `wan`). Please refer to the FRR documentation for more information. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#link_local_interface QuaggaBgpNeighbor#link_local_interface}
  */
  readonly linkLocalInterface?: string;
  /**
  * The local IP connecting to the neighbor. This is only required for BGP authentication. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#local_ip QuaggaBgpNeighbor#local_ip}
  */
  readonly localIp?: string;
  /**
  * The password for BGP authentication. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#md5_password QuaggaBgpNeighbor#md5_password}
  */
  readonly md5Password?: string;
  /**
  * Enable multi-hop. Specifying ebgp-multihop allows sessions with eBGP neighbors to establish when they are multiple hops away. When the neighbor is not directly connected and this knob is not enabled, the session will not establish. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#multi_hop QuaggaBgpNeighbor#multi_hop}
  */
  readonly multiHop?: boolean | cdktf.IResolvable;
  /**
  * Mark this neighbor as multiprotocol capable per RFC 2283. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#multi_protocol QuaggaBgpNeighbor#multi_protocol}
  */
  readonly multiProtocol?: boolean | cdktf.IResolvable;
  /**
  * Enable the next-hop-self command. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#next_hop_self QuaggaBgpNeighbor#next_hop_self}
  */
  readonly nextHopSelf?: boolean | cdktf.IResolvable;
  /**
  * Add the parameter "all" after next-hop-self command. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#next_hop_self_all QuaggaBgpNeighbor#next_hop_self_all}
  */
  readonly nextHopSelfAll?: boolean | cdktf.IResolvable;
  /**
  * The IP of your neighbor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#peer_ip QuaggaBgpNeighbor#peer_ip}
  */
  readonly peerIp: string;
  /**
  * The prefix list ID for inbound direction. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#prefix_list_in QuaggaBgpNeighbor#prefix_list_in}
  */
  readonly prefixListIn?: string;
  /**
  * The prefix list ID for outbound direction. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#prefix_list_out QuaggaBgpNeighbor#prefix_list_out}
  */
  readonly prefixListOut?: string;
  /**
  * The neighbor AS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#remote_as QuaggaBgpNeighbor#remote_as}
  */
  readonly remoteAs: number;
  /**
  * The route map ID for inbound direction. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#route_map_in QuaggaBgpNeighbor#route_map_in}
  */
  readonly routeMapIn?: string;
  /**
  * The route map ID for outbound direction. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#route_map_out QuaggaBgpNeighbor#route_map_out}
  */
  readonly routeMapOut?: string;
  /**
  * Enable route reflector client. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#rr_client QuaggaBgpNeighbor#rr_client}
  */
  readonly rrClient?: boolean | cdktf.IResolvable;
  /**
  * Physical name of the IPv4 interface facing the peer. Must be a valid OPNsense interface in lowercase (e.g. `wan`). Please refer to the FRR documentation for more information. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#update_source QuaggaBgpNeighbor#update_source}
  */
  readonly updateSource?: string;
  /**
  * Specify a default weight value for the neighbor’s routes. Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#weight QuaggaBgpNeighbor#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor opnsense_quagga_bgp_neighbor}
*/
export class QuaggaBgpNeighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_quagga_bgp_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuaggaBgpNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuaggaBgpNeighbor to import
  * @param importFromId The id of the existing QuaggaBgpNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuaggaBgpNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_quagga_bgp_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/resources/quagga_bgp_neighbor opnsense_quagga_bgp_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuaggaBgpNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: QuaggaBgpNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_quagga_bgp_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asOverride = config.asOverride;
    this._attributeUnchanged = config.attributeUnchanged;
    this._bfd = config.bfd;
    this._connectTimer = config.connectTimer;
    this._defaultRoute = config.defaultRoute;
    this._description = config.description;
    this._disableConnectedCheck = config.disableConnectedCheck;
    this._enabled = config.enabled;
    this._holdDown = config.holdDown;
    this._keepAlive = config.keepAlive;
    this._linkLocalInterface = config.linkLocalInterface;
    this._localIp = config.localIp;
    this._md5Password = config.md5Password;
    this._multiHop = config.multiHop;
    this._multiProtocol = config.multiProtocol;
    this._nextHopSelf = config.nextHopSelf;
    this._nextHopSelfAll = config.nextHopSelfAll;
    this._peerIp = config.peerIp;
    this._prefixListIn = config.prefixListIn;
    this._prefixListOut = config.prefixListOut;
    this._remoteAs = config.remoteAs;
    this._routeMapIn = config.routeMapIn;
    this._routeMapOut = config.routeMapOut;
    this._rrClient = config.rrClient;
    this._updateSource = config.updateSource;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as_override - computed: true, optional: true, required: false
  private _asOverride?: boolean | cdktf.IResolvable; 
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }
  public set asOverride(value: boolean | cdktf.IResolvable) {
    this._asOverride = value;
  }
  public resetAsOverride() {
    this._asOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideInput() {
    return this._asOverride;
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

  // bfd - computed: true, optional: true, required: false
  private _bfd?: boolean | cdktf.IResolvable; 
  public get bfd() {
    return this.getBooleanAttribute('bfd');
  }
  public set bfd(value: boolean | cdktf.IResolvable) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
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

  // default_route - computed: true, optional: true, required: false
  private _defaultRoute?: boolean | cdktf.IResolvable; 
  public get defaultRoute() {
    return this.getBooleanAttribute('default_route');
  }
  public set defaultRoute(value: boolean | cdktf.IResolvable) {
    this._defaultRoute = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute;
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

  // disable_connected_check - computed: true, optional: true, required: false
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hold_down - computed: true, optional: true, required: false
  private _holdDown?: number; 
  public get holdDown() {
    return this.getNumberAttribute('hold_down');
  }
  public set holdDown(value: number) {
    this._holdDown = value;
  }
  public resetHoldDown() {
    this._holdDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdDownInput() {
    return this._holdDown;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_alive - computed: true, optional: true, required: false
  private _keepAlive?: number; 
  public get keepAlive() {
    return this.getNumberAttribute('keep_alive');
  }
  public set keepAlive(value: number) {
    this._keepAlive = value;
  }
  public resetKeepAlive() {
    this._keepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveInput() {
    return this._keepAlive;
  }

  // link_local_interface - computed: true, optional: true, required: false
  private _linkLocalInterface?: string; 
  public get linkLocalInterface() {
    return this.getStringAttribute('link_local_interface');
  }
  public set linkLocalInterface(value: string) {
    this._linkLocalInterface = value;
  }
  public resetLinkLocalInterface() {
    this._linkLocalInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkLocalInterfaceInput() {
    return this._linkLocalInterface;
  }

  // local_ip - computed: true, optional: true, required: false
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  public resetLocalIp() {
    this._localIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
  }

  // md5_password - computed: true, optional: true, required: false
  private _md5Password?: string; 
  public get md5Password() {
    return this.getStringAttribute('md5_password');
  }
  public set md5Password(value: string) {
    this._md5Password = value;
  }
  public resetMd5Password() {
    this._md5Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5PasswordInput() {
    return this._md5Password;
  }

  // multi_hop - computed: true, optional: true, required: false
  private _multiHop?: boolean | cdktf.IResolvable; 
  public get multiHop() {
    return this.getBooleanAttribute('multi_hop');
  }
  public set multiHop(value: boolean | cdktf.IResolvable) {
    this._multiHop = value;
  }
  public resetMultiHop() {
    this._multiHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiHopInput() {
    return this._multiHop;
  }

  // multi_protocol - computed: true, optional: true, required: false
  private _multiProtocol?: boolean | cdktf.IResolvable; 
  public get multiProtocol() {
    return this.getBooleanAttribute('multi_protocol');
  }
  public set multiProtocol(value: boolean | cdktf.IResolvable) {
    this._multiProtocol = value;
  }
  public resetMultiProtocol() {
    this._multiProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiProtocolInput() {
    return this._multiProtocol;
  }

  // next_hop_self - computed: true, optional: true, required: false
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

  // next_hop_self_all - computed: true, optional: true, required: false
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

  // peer_ip - computed: false, optional: false, required: true
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
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

  // remote_as - computed: false, optional: false, required: true
  private _remoteAs?: number; 
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }
  public set remoteAs(value: number) {
    this._remoteAs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
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

  // rr_client - computed: true, optional: true, required: false
  private _rrClient?: boolean | cdktf.IResolvable; 
  public get rrClient() {
    return this.getBooleanAttribute('rr_client');
  }
  public set rrClient(value: boolean | cdktf.IResolvable) {
    this._rrClient = value;
  }
  public resetRrClient() {
    this._rrClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrClientInput() {
    return this._rrClient;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_override: cdktf.booleanToTerraform(this._asOverride),
      attribute_unchanged: cdktf.stringToTerraform(this._attributeUnchanged),
      bfd: cdktf.booleanToTerraform(this._bfd),
      connect_timer: cdktf.numberToTerraform(this._connectTimer),
      default_route: cdktf.booleanToTerraform(this._defaultRoute),
      description: cdktf.stringToTerraform(this._description),
      disable_connected_check: cdktf.booleanToTerraform(this._disableConnectedCheck),
      enabled: cdktf.booleanToTerraform(this._enabled),
      hold_down: cdktf.numberToTerraform(this._holdDown),
      keep_alive: cdktf.numberToTerraform(this._keepAlive),
      link_local_interface: cdktf.stringToTerraform(this._linkLocalInterface),
      local_ip: cdktf.stringToTerraform(this._localIp),
      md5_password: cdktf.stringToTerraform(this._md5Password),
      multi_hop: cdktf.booleanToTerraform(this._multiHop),
      multi_protocol: cdktf.booleanToTerraform(this._multiProtocol),
      next_hop_self: cdktf.booleanToTerraform(this._nextHopSelf),
      next_hop_self_all: cdktf.booleanToTerraform(this._nextHopSelfAll),
      peer_ip: cdktf.stringToTerraform(this._peerIp),
      prefix_list_in: cdktf.stringToTerraform(this._prefixListIn),
      prefix_list_out: cdktf.stringToTerraform(this._prefixListOut),
      remote_as: cdktf.numberToTerraform(this._remoteAs),
      route_map_in: cdktf.stringToTerraform(this._routeMapIn),
      route_map_out: cdktf.stringToTerraform(this._routeMapOut),
      rr_client: cdktf.booleanToTerraform(this._rrClient),
      update_source: cdktf.stringToTerraform(this._updateSource),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as_override: {
        value: cdktf.booleanToHclTerraform(this._asOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      attribute_unchanged: {
        value: cdktf.stringToHclTerraform(this._attributeUnchanged),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bfd: {
        value: cdktf.booleanToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connect_timer: {
        value: cdktf.numberToHclTerraform(this._connectTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_route: {
        value: cdktf.booleanToHclTerraform(this._defaultRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hold_down: {
        value: cdktf.numberToHclTerraform(this._holdDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keep_alive: {
        value: cdktf.numberToHclTerraform(this._keepAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      link_local_interface: {
        value: cdktf.stringToHclTerraform(this._linkLocalInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_ip: {
        value: cdktf.stringToHclTerraform(this._localIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      md5_password: {
        value: cdktf.stringToHclTerraform(this._md5Password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_hop: {
        value: cdktf.booleanToHclTerraform(this._multiHop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_protocol: {
        value: cdktf.booleanToHclTerraform(this._multiProtocol),
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
      peer_ip: {
        value: cdktf.stringToHclTerraform(this._peerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_in: {
        value: cdktf.stringToHclTerraform(this._prefixListIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_list_out: {
        value: cdktf.stringToHclTerraform(this._prefixListOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_as: {
        value: cdktf.numberToHclTerraform(this._remoteAs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      route_map_in: {
        value: cdktf.stringToHclTerraform(this._routeMapIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_out: {
        value: cdktf.stringToHclTerraform(this._routeMapOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rr_client: {
        value: cdktf.booleanToHclTerraform(this._rrClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_source: {
        value: cdktf.stringToHclTerraform(this._updateSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
