// https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of address families about which this peer will exchange routing information. Default: `ip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#address_families BgpPeer#address_families}
  */
  readonly addressFamilies?: string;
  /**
  * How many times to allow own AS number in AS-PATH, before discarding a prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#allow_as_in BgpPeer#allow_as_in}
  */
  readonly allowAsIn?: number;
  /**
  * If set, then all instances of remote peer's AS number in BGP AS PATH attribute are replaced with local AS number before sending route update to that peer. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#as_override BgpPeer#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * VPLS NLRI length format type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#cisco_vpls_nlri_len_fmt BgpPeer#cisco_vpls_nlri_len_fmt}
  */
  readonly ciscoVplsNlriLenFmt?: string;
  /**
  * The comment of the BGP peer to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#comment BgpPeer#comment}
  */
  readonly comment?: string;
  /**
  * The comment of the BGP peer to be created. Default: `never`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#default_originate BgpPeer#default_originate}
  */
  readonly defaultOriginate?: string;
  /**
  * Whether peer is disabled. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#disabled BgpPeer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the BGP Hold Time value to use when negotiating with peer Default: `3m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#hold_time BgpPeer#hold_time}
  */
  readonly holdTime?: string;
  /**
  * The name of the routing filter chain that is applied to the incoming routing information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#in_filter BgpPeer#in_filter}
  */
  readonly inFilter?: string;
  /**
  * The name of the instance this peer belongs to. See Mikrotik bgp instance resource. Default: `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#instance BgpPeer#instance}
  */
  readonly instance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#keepalive_time BgpPeer#keepalive_time}
  */
  readonly keepaliveTime?: string;
  /**
  * Maximum number of prefixes to accept from a specific peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#max_prefix_limit BgpPeer#max_prefix_limit}
  */
  readonly maxPrefixLimit?: number;
  /**
  * Minimum time interval after which peers can reestablish BGP session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#max_prefix_restart_time BgpPeer#max_prefix_restart_time}
  */
  readonly maxPrefixRestartTime?: string;
  /**
  * Specifies whether the remote peer is more than one hop away.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#multihop BgpPeer#multihop}
  */
  readonly multihop?: boolean | cdktf.IResolvable;
  /**
  * The name of the BGP peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#name BgpPeer#name}
  */
  readonly name: string;
  /**
  * Affects the outgoing NEXT_HOP attribute selection, either: 'default', 'force-self', or 'propagate' Default: `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#nexthop_choice BgpPeer#nexthop_choice}
  */
  readonly nexthopChoice?: string;
  /**
  * The name of the routing filter chain that is applied to the outgoing routing information. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#out_filter BgpPeer#out_filter}
  */
  readonly outFilter?: string;
  /**
  * Name of the routing filter chain that is applied to the outgoing routing information. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#passive BgpPeer#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * The address of the remote peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#remote_address BgpPeer#remote_address}
  */
  readonly remoteAddress: string;
  /**
  * The 32-bit AS number of the remote peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#remote_as BgpPeer#remote_as}
  */
  readonly remoteAs: number;
  /**
  * Remote peers port to establish tcp session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#remote_port BgpPeer#remote_port}
  */
  readonly remotePort?: number;
  /**
  * If set, then BGP AS-PATH attribute is removed before sending out route update if attribute contains only private AS numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#remove_private_as BgpPeer#remove_private_as}
  */
  readonly removePrivateAs?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether this peer is route reflection client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#route_reflect BgpPeer#route_reflect}
  */
  readonly routeReflect?: boolean | cdktf.IResolvable;
  /**
  * Key used to authenticate the connection with TCP MD5 signature as described in RFC 2385.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#tcp_md5_key BgpPeer#tcp_md5_key}
  */
  readonly tcpMd5Key?: string;
  /**
  * Time To Live, the hop limit for TCP connection. This is a `string` field that can be 'default' or '0'-'255'. Default: `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#ttl BgpPeer#ttl}
  */
  readonly ttl?: string;
  /**
  * If address is specified, this address is used as the source address of the outgoing TCP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#update_source BgpPeer#update_source}
  */
  readonly updateSource?: string;
  /**
  * Whether to use BFD protocol for fast state detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#use_bfd BgpPeer#use_bfd}
  */
  readonly useBfd?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer mikrotik_bgp_peer}
*/
export class BgpPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mikrotik_bgp_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpPeer to import
  * @param importFromId The id of the existing BgpPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mikrotik_bgp_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/bgp_peer mikrotik_bgp_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpPeerConfig
  */
  public constructor(scope: Construct, id: string, config: BgpPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'mikrotik_bgp_peer',
      terraformGeneratorMetadata: {
        providerName: 'mikrotik',
        providerVersion: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressFamilies = config.addressFamilies;
    this._allowAsIn = config.allowAsIn;
    this._asOverride = config.asOverride;
    this._ciscoVplsNlriLenFmt = config.ciscoVplsNlriLenFmt;
    this._comment = config.comment;
    this._defaultOriginate = config.defaultOriginate;
    this._disabled = config.disabled;
    this._holdTime = config.holdTime;
    this._inFilter = config.inFilter;
    this._instance = config.instance;
    this._keepaliveTime = config.keepaliveTime;
    this._maxPrefixLimit = config.maxPrefixLimit;
    this._maxPrefixRestartTime = config.maxPrefixRestartTime;
    this._multihop = config.multihop;
    this._name = config.name;
    this._nexthopChoice = config.nexthopChoice;
    this._outFilter = config.outFilter;
    this._passive = config.passive;
    this._remoteAddress = config.remoteAddress;
    this._remoteAs = config.remoteAs;
    this._remotePort = config.remotePort;
    this._removePrivateAs = config.removePrivateAs;
    this._routeReflect = config.routeReflect;
    this._tcpMd5Key = config.tcpMd5Key;
    this._ttl = config.ttl;
    this._updateSource = config.updateSource;
    this._useBfd = config.useBfd;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_families - computed: true, optional: true, required: false
  private _addressFamilies?: string; 
  public get addressFamilies() {
    return this.getStringAttribute('address_families');
  }
  public set addressFamilies(value: string) {
    this._addressFamilies = value;
  }
  public resetAddressFamilies() {
    this._addressFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamiliesInput() {
    return this._addressFamilies;
  }

  // allow_as_in - computed: true, optional: true, required: false
  private _allowAsIn?: number; 
  public get allowAsIn() {
    return this.getNumberAttribute('allow_as_in');
  }
  public set allowAsIn(value: number) {
    this._allowAsIn = value;
  }
  public resetAllowAsIn() {
    this._allowAsIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAsInInput() {
    return this._allowAsIn;
  }

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

  // cisco_vpls_nlri_len_fmt - computed: true, optional: true, required: false
  private _ciscoVplsNlriLenFmt?: string; 
  public get ciscoVplsNlriLenFmt() {
    return this.getStringAttribute('cisco_vpls_nlri_len_fmt');
  }
  public set ciscoVplsNlriLenFmt(value: string) {
    this._ciscoVplsNlriLenFmt = value;
  }
  public resetCiscoVplsNlriLenFmt() {
    this._ciscoVplsNlriLenFmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciscoVplsNlriLenFmtInput() {
    return this._ciscoVplsNlriLenFmt;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // default_originate - computed: true, optional: true, required: false
  private _defaultOriginate?: string; 
  public get defaultOriginate() {
    return this.getStringAttribute('default_originate');
  }
  public set defaultOriginate(value: string) {
    this._defaultOriginate = value;
  }
  public resetDefaultOriginate() {
    this._defaultOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateInput() {
    return this._defaultOriginate;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // hold_time - computed: true, optional: true, required: false
  private _holdTime?: string; 
  public get holdTime() {
    return this.getStringAttribute('hold_time');
  }
  public set holdTime(value: string) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_filter - computed: true, optional: true, required: false
  private _inFilter?: string; 
  public get inFilter() {
    return this.getStringAttribute('in_filter');
  }
  public set inFilter(value: string) {
    this._inFilter = value;
  }
  public resetInFilter() {
    this._inFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inFilterInput() {
    return this._inFilter;
  }

  // instance - computed: true, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // keepalive_time - computed: true, optional: true, required: false
  private _keepaliveTime?: string; 
  public get keepaliveTime() {
    return this.getStringAttribute('keepalive_time');
  }
  public set keepaliveTime(value: string) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // max_prefix_limit - computed: true, optional: true, required: false
  private _maxPrefixLimit?: number; 
  public get maxPrefixLimit() {
    return this.getNumberAttribute('max_prefix_limit');
  }
  public set maxPrefixLimit(value: number) {
    this._maxPrefixLimit = value;
  }
  public resetMaxPrefixLimit() {
    this._maxPrefixLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPrefixLimitInput() {
    return this._maxPrefixLimit;
  }

  // max_prefix_restart_time - computed: true, optional: true, required: false
  private _maxPrefixRestartTime?: string; 
  public get maxPrefixRestartTime() {
    return this.getStringAttribute('max_prefix_restart_time');
  }
  public set maxPrefixRestartTime(value: string) {
    this._maxPrefixRestartTime = value;
  }
  public resetMaxPrefixRestartTime() {
    this._maxPrefixRestartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPrefixRestartTimeInput() {
    return this._maxPrefixRestartTime;
  }

  // multihop - computed: true, optional: true, required: false
  private _multihop?: boolean | cdktf.IResolvable; 
  public get multihop() {
    return this.getBooleanAttribute('multihop');
  }
  public set multihop(value: boolean | cdktf.IResolvable) {
    this._multihop = value;
  }
  public resetMultihop() {
    this._multihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multihopInput() {
    return this._multihop;
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

  // nexthop_choice - computed: true, optional: true, required: false
  private _nexthopChoice?: string; 
  public get nexthopChoice() {
    return this.getStringAttribute('nexthop_choice');
  }
  public set nexthopChoice(value: string) {
    this._nexthopChoice = value;
  }
  public resetNexthopChoice() {
    this._nexthopChoice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopChoiceInput() {
    return this._nexthopChoice;
  }

  // out_filter - computed: true, optional: true, required: false
  private _outFilter?: string; 
  public get outFilter() {
    return this.getStringAttribute('out_filter');
  }
  public set outFilter(value: string) {
    this._outFilter = value;
  }
  public resetOutFilter() {
    this._outFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outFilterInput() {
    return this._outFilter;
  }

  // passive - computed: true, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // remote_address - computed: false, optional: false, required: true
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
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

  // remote_port - computed: true, optional: true, required: false
  private _remotePort?: number; 
  public get remotePort() {
    return this.getNumberAttribute('remote_port');
  }
  public set remotePort(value: number) {
    this._remotePort = value;
  }
  public resetRemotePort() {
    this._remotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }

  // remove_private_as - computed: true, optional: true, required: false
  private _removePrivateAs?: boolean | cdktf.IResolvable; 
  public get removePrivateAs() {
    return this.getBooleanAttribute('remove_private_as');
  }
  public set removePrivateAs(value: boolean | cdktf.IResolvable) {
    this._removePrivateAs = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs;
  }

  // route_reflect - computed: true, optional: true, required: false
  private _routeReflect?: boolean | cdktf.IResolvable; 
  public get routeReflect() {
    return this.getBooleanAttribute('route_reflect');
  }
  public set routeReflect(value: boolean | cdktf.IResolvable) {
    this._routeReflect = value;
  }
  public resetRouteReflect() {
    this._routeReflect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectInput() {
    return this._routeReflect;
  }

  // tcp_md5_key - computed: true, optional: true, required: false
  private _tcpMd5Key?: string; 
  public get tcpMd5Key() {
    return this.getStringAttribute('tcp_md5_key');
  }
  public set tcpMd5Key(value: string) {
    this._tcpMd5Key = value;
  }
  public resetTcpMd5Key() {
    this._tcpMd5Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMd5KeyInput() {
    return this._tcpMd5Key;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // use_bfd - computed: true, optional: true, required: false
  private _useBfd?: boolean | cdktf.IResolvable; 
  public get useBfd() {
    return this.getBooleanAttribute('use_bfd');
  }
  public set useBfd(value: boolean | cdktf.IResolvable) {
    this._useBfd = value;
  }
  public resetUseBfd() {
    this._useBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBfdInput() {
    return this._useBfd;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_families: cdktf.stringToTerraform(this._addressFamilies),
      allow_as_in: cdktf.numberToTerraform(this._allowAsIn),
      as_override: cdktf.booleanToTerraform(this._asOverride),
      cisco_vpls_nlri_len_fmt: cdktf.stringToTerraform(this._ciscoVplsNlriLenFmt),
      comment: cdktf.stringToTerraform(this._comment),
      default_originate: cdktf.stringToTerraform(this._defaultOriginate),
      disabled: cdktf.booleanToTerraform(this._disabled),
      hold_time: cdktf.stringToTerraform(this._holdTime),
      in_filter: cdktf.stringToTerraform(this._inFilter),
      instance: cdktf.stringToTerraform(this._instance),
      keepalive_time: cdktf.stringToTerraform(this._keepaliveTime),
      max_prefix_limit: cdktf.numberToTerraform(this._maxPrefixLimit),
      max_prefix_restart_time: cdktf.stringToTerraform(this._maxPrefixRestartTime),
      multihop: cdktf.booleanToTerraform(this._multihop),
      name: cdktf.stringToTerraform(this._name),
      nexthop_choice: cdktf.stringToTerraform(this._nexthopChoice),
      out_filter: cdktf.stringToTerraform(this._outFilter),
      passive: cdktf.booleanToTerraform(this._passive),
      remote_address: cdktf.stringToTerraform(this._remoteAddress),
      remote_as: cdktf.numberToTerraform(this._remoteAs),
      remote_port: cdktf.numberToTerraform(this._remotePort),
      remove_private_as: cdktf.booleanToTerraform(this._removePrivateAs),
      route_reflect: cdktf.booleanToTerraform(this._routeReflect),
      tcp_md5_key: cdktf.stringToTerraform(this._tcpMd5Key),
      ttl: cdktf.stringToTerraform(this._ttl),
      update_source: cdktf.stringToTerraform(this._updateSource),
      use_bfd: cdktf.booleanToTerraform(this._useBfd),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_families: {
        value: cdktf.stringToHclTerraform(this._addressFamilies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_as_in: {
        value: cdktf.numberToHclTerraform(this._allowAsIn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      as_override: {
        value: cdktf.booleanToHclTerraform(this._asOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cisco_vpls_nlri_len_fmt: {
        value: cdktf.stringToHclTerraform(this._ciscoVplsNlriLenFmt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_originate: {
        value: cdktf.stringToHclTerraform(this._defaultOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hold_time: {
        value: cdktf.stringToHclTerraform(this._holdTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      in_filter: {
        value: cdktf.stringToHclTerraform(this._inFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive_time: {
        value: cdktf.stringToHclTerraform(this._keepaliveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_prefix_limit: {
        value: cdktf.numberToHclTerraform(this._maxPrefixLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_prefix_restart_time: {
        value: cdktf.stringToHclTerraform(this._maxPrefixRestartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multihop: {
        value: cdktf.booleanToHclTerraform(this._multihop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthop_choice: {
        value: cdktf.stringToHclTerraform(this._nexthopChoice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_filter: {
        value: cdktf.stringToHclTerraform(this._outFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive: {
        value: cdktf.booleanToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_address: {
        value: cdktf.stringToHclTerraform(this._remoteAddress),
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
      remote_port: {
        value: cdktf.numberToHclTerraform(this._remotePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_private_as: {
        value: cdktf.booleanToHclTerraform(this._removePrivateAs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_reflect: {
        value: cdktf.booleanToHclTerraform(this._routeReflect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_md5_key: {
        value: cdktf.stringToHclTerraform(this._tcpMd5Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_source: {
        value: cdktf.stringToHclTerraform(this._updateSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_bfd: {
        value: cdktf.booleanToHclTerraform(this._useBfd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
