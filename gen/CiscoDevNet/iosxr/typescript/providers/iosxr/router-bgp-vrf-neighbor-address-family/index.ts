// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpVrfNeighborAddressFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPaddress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#address RouterBgpVrfNeighborAddressFamily#address}
  */
  readonly address: string;
  /**
  * Enter Address Family command mode
  *   - Choices: `all-address-family`, `ipv4-flowspec`, `ipv4-labeled-unicast`, `ipv4-mdt`, `ipv4-multicast`, `ipv4-mvpn`, `ipv4-rt-filter`, `ipv4-sr-policy`, `ipv4-tunnel`, `ipv4-unicast`, `ipv6-flowspec`, `ipv6-labeled-unicast`, `ipv6-multicast`, `ipv6-mvpn`, `ipv6-sr-policy`, `ipv6-unicast`, `l2vpn-evpn`, `l2vpn-mspw`, `l2vpn-vpls-vpws`, `link-state-link-state`, `vpnv4-flowspec`, `vpnv4-multicast`, `vpnv4-unicast`, `vpnv6-flowspec`, `vpnv6-multicast`, `vpnv6-unicast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#af_name RouterBgpVrfNeighborAddressFamily#af_name}
  */
  readonly afName: string;
  /**
  * bgp as-number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#as_number RouterBgpVrfNeighborAddressFamily#as_number}
  */
  readonly asNumber: string;
  /**
  * Originate default route to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#default_originate RouterBgpVrfNeighborAddressFamily#default_originate}
  */
  readonly defaultOriginate?: boolean | cdktf.IResolvable;
  /**
  * Prevent default-originate being inherited from a parent group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#default_originate_inheritance_disable RouterBgpVrfNeighborAddressFamily#default_originate_inheritance_disable}
  */
  readonly defaultOriginateInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Route policy to specify criteria to originate default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#default_originate_route_policy RouterBgpVrfNeighborAddressFamily#default_originate_route_policy}
  */
  readonly defaultOriginateRoutePolicy?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#delete_mode RouterBgpVrfNeighborAddressFamily#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#device RouterBgpVrfNeighborAddressFamily#device}
  */
  readonly device?: string;
  /**
  * Disable the next hop calculation for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#next_hop_self RouterBgpVrfNeighborAddressFamily#next_hop_self}
  */
  readonly nextHopSelf?: boolean | cdktf.IResolvable;
  /**
  * Prevent next-hop-self from being inherited from the parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#next_hop_self_inheritance_disable RouterBgpVrfNeighborAddressFamily#next_hop_self_inheritance_disable}
  */
  readonly nextHopSelfInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Remove private AS number from outbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#remove_private_as RouterBgpVrfNeighborAddressFamily#remove_private_as}
  */
  readonly removePrivateAs?: boolean | cdktf.IResolvable;
  /**
  * remove only if all ASes in the path are private
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#remove_private_as_entire_aspath RouterBgpVrfNeighborAddressFamily#remove_private_as_entire_aspath}
  */
  readonly removePrivateAsEntireAspath?: boolean | cdktf.IResolvable;
  /**
  * Remove private AS number from inbound updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#remove_private_as_inbound RouterBgpVrfNeighborAddressFamily#remove_private_as_inbound}
  */
  readonly removePrivateAsInbound?: boolean | cdktf.IResolvable;
  /**
  * remove only if all ASes in the path are private
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#remove_private_as_inbound_entire_aspath RouterBgpVrfNeighborAddressFamily#remove_private_as_inbound_entire_aspath}
  */
  readonly removePrivateAsInboundEntireAspath?: boolean | cdktf.IResolvable;
  /**
  * Prevent remove-private-AS from being inherited from the parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#remove_private_as_inbound_inheritance_disable RouterBgpVrfNeighborAddressFamily#remove_private_as_inbound_inheritance_disable}
  */
  readonly removePrivateAsInboundInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Prevent remove-private-AS from being inherited from the parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#remove_private_as_inheritance_disable RouterBgpVrfNeighborAddressFamily#remove_private_as_inheritance_disable}
  */
  readonly removePrivateAsInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * remove only if all ASes in the path are private
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#remove_private_as_internal RouterBgpVrfNeighborAddressFamily#remove_private_as_internal}
  */
  readonly removePrivateAsInternal?: boolean | cdktf.IResolvable;
  /**
  * Apply route policy to inbound routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#route_policy_in RouterBgpVrfNeighborAddressFamily#route_policy_in}
  */
  readonly routePolicyIn?: string;
  /**
  * Apply route policy to outbound routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#route_policy_out RouterBgpVrfNeighborAddressFamily#route_policy_out}
  */
  readonly routePolicyOut?: string;
  /**
  * Prevent send-community-ebgp from being inherited from the parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#send_community_ebgp_inheritance_disable RouterBgpVrfNeighborAddressFamily#send_community_ebgp_inheritance_disable}
  */
  readonly sendCommunityEbgpInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Always use soft reconfig, even if route refresh is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#soft_reconfiguration_inbound_always RouterBgpVrfNeighborAddressFamily#soft_reconfiguration_inbound_always}
  */
  readonly softReconfigurationInboundAlways?: boolean | cdktf.IResolvable;
  /**
  * VRF name - maximum length 32 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#vrf_name RouterBgpVrfNeighborAddressFamily#vrf_name}
  */
  readonly vrfName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family iosxr_router_bgp_vrf_neighbor_address_family}
*/
export class RouterBgpVrfNeighborAddressFamily extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_bgp_vrf_neighbor_address_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpVrfNeighborAddressFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpVrfNeighborAddressFamily to import
  * @param importFromId The id of the existing RouterBgpVrfNeighborAddressFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpVrfNeighborAddressFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_bgp_vrf_neighbor_address_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_vrf_neighbor_address_family iosxr_router_bgp_vrf_neighbor_address_family} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpVrfNeighborAddressFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpVrfNeighborAddressFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_bgp_vrf_neighbor_address_family',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._afName = config.afName;
    this._asNumber = config.asNumber;
    this._defaultOriginate = config.defaultOriginate;
    this._defaultOriginateInheritanceDisable = config.defaultOriginateInheritanceDisable;
    this._defaultOriginateRoutePolicy = config.defaultOriginateRoutePolicy;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._nextHopSelf = config.nextHopSelf;
    this._nextHopSelfInheritanceDisable = config.nextHopSelfInheritanceDisable;
    this._removePrivateAs = config.removePrivateAs;
    this._removePrivateAsEntireAspath = config.removePrivateAsEntireAspath;
    this._removePrivateAsInbound = config.removePrivateAsInbound;
    this._removePrivateAsInboundEntireAspath = config.removePrivateAsInboundEntireAspath;
    this._removePrivateAsInboundInheritanceDisable = config.removePrivateAsInboundInheritanceDisable;
    this._removePrivateAsInheritanceDisable = config.removePrivateAsInheritanceDisable;
    this._removePrivateAsInternal = config.removePrivateAsInternal;
    this._routePolicyIn = config.routePolicyIn;
    this._routePolicyOut = config.routePolicyOut;
    this._sendCommunityEbgpInheritanceDisable = config.sendCommunityEbgpInheritanceDisable;
    this._softReconfigurationInboundAlways = config.softReconfigurationInboundAlways;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // af_name - computed: false, optional: false, required: true
  private _afName?: string; 
  public get afName() {
    return this.getStringAttribute('af_name');
  }
  public set afName(value: string) {
    this._afName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get afNameInput() {
    return this._afName;
  }

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

  // default_originate_inheritance_disable - computed: false, optional: true, required: false
  private _defaultOriginateInheritanceDisable?: boolean | cdktf.IResolvable; 
  public get defaultOriginateInheritanceDisable() {
    return this.getBooleanAttribute('default_originate_inheritance_disable');
  }
  public set defaultOriginateInheritanceDisable(value: boolean | cdktf.IResolvable) {
    this._defaultOriginateInheritanceDisable = value;
  }
  public resetDefaultOriginateInheritanceDisable() {
    this._defaultOriginateInheritanceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateInheritanceDisableInput() {
    return this._defaultOriginateInheritanceDisable;
  }

  // default_originate_route_policy - computed: false, optional: true, required: false
  private _defaultOriginateRoutePolicy?: string; 
  public get defaultOriginateRoutePolicy() {
    return this.getStringAttribute('default_originate_route_policy');
  }
  public set defaultOriginateRoutePolicy(value: string) {
    this._defaultOriginateRoutePolicy = value;
  }
  public resetDefaultOriginateRoutePolicy() {
    this._defaultOriginateRoutePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateRoutePolicyInput() {
    return this._defaultOriginateRoutePolicy;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // next_hop_self_inheritance_disable - computed: false, optional: true, required: false
  private _nextHopSelfInheritanceDisable?: boolean | cdktf.IResolvable; 
  public get nextHopSelfInheritanceDisable() {
    return this.getBooleanAttribute('next_hop_self_inheritance_disable');
  }
  public set nextHopSelfInheritanceDisable(value: boolean | cdktf.IResolvable) {
    this._nextHopSelfInheritanceDisable = value;
  }
  public resetNextHopSelfInheritanceDisable() {
    this._nextHopSelfInheritanceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopSelfInheritanceDisableInput() {
    return this._nextHopSelfInheritanceDisable;
  }

  // remove_private_as - computed: false, optional: true, required: false
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

  // remove_private_as_entire_aspath - computed: false, optional: true, required: false
  private _removePrivateAsEntireAspath?: boolean | cdktf.IResolvable; 
  public get removePrivateAsEntireAspath() {
    return this.getBooleanAttribute('remove_private_as_entire_aspath');
  }
  public set removePrivateAsEntireAspath(value: boolean | cdktf.IResolvable) {
    this._removePrivateAsEntireAspath = value;
  }
  public resetRemovePrivateAsEntireAspath() {
    this._removePrivateAsEntireAspath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsEntireAspathInput() {
    return this._removePrivateAsEntireAspath;
  }

  // remove_private_as_inbound - computed: false, optional: true, required: false
  private _removePrivateAsInbound?: boolean | cdktf.IResolvable; 
  public get removePrivateAsInbound() {
    return this.getBooleanAttribute('remove_private_as_inbound');
  }
  public set removePrivateAsInbound(value: boolean | cdktf.IResolvable) {
    this._removePrivateAsInbound = value;
  }
  public resetRemovePrivateAsInbound() {
    this._removePrivateAsInbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInboundInput() {
    return this._removePrivateAsInbound;
  }

  // remove_private_as_inbound_entire_aspath - computed: false, optional: true, required: false
  private _removePrivateAsInboundEntireAspath?: boolean | cdktf.IResolvable; 
  public get removePrivateAsInboundEntireAspath() {
    return this.getBooleanAttribute('remove_private_as_inbound_entire_aspath');
  }
  public set removePrivateAsInboundEntireAspath(value: boolean | cdktf.IResolvable) {
    this._removePrivateAsInboundEntireAspath = value;
  }
  public resetRemovePrivateAsInboundEntireAspath() {
    this._removePrivateAsInboundEntireAspath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInboundEntireAspathInput() {
    return this._removePrivateAsInboundEntireAspath;
  }

  // remove_private_as_inbound_inheritance_disable - computed: false, optional: true, required: false
  private _removePrivateAsInboundInheritanceDisable?: boolean | cdktf.IResolvable; 
  public get removePrivateAsInboundInheritanceDisable() {
    return this.getBooleanAttribute('remove_private_as_inbound_inheritance_disable');
  }
  public set removePrivateAsInboundInheritanceDisable(value: boolean | cdktf.IResolvable) {
    this._removePrivateAsInboundInheritanceDisable = value;
  }
  public resetRemovePrivateAsInboundInheritanceDisable() {
    this._removePrivateAsInboundInheritanceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInboundInheritanceDisableInput() {
    return this._removePrivateAsInboundInheritanceDisable;
  }

  // remove_private_as_inheritance_disable - computed: false, optional: true, required: false
  private _removePrivateAsInheritanceDisable?: boolean | cdktf.IResolvable; 
  public get removePrivateAsInheritanceDisable() {
    return this.getBooleanAttribute('remove_private_as_inheritance_disable');
  }
  public set removePrivateAsInheritanceDisable(value: boolean | cdktf.IResolvable) {
    this._removePrivateAsInheritanceDisable = value;
  }
  public resetRemovePrivateAsInheritanceDisable() {
    this._removePrivateAsInheritanceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInheritanceDisableInput() {
    return this._removePrivateAsInheritanceDisable;
  }

  // remove_private_as_internal - computed: false, optional: true, required: false
  private _removePrivateAsInternal?: boolean | cdktf.IResolvable; 
  public get removePrivateAsInternal() {
    return this.getBooleanAttribute('remove_private_as_internal');
  }
  public set removePrivateAsInternal(value: boolean | cdktf.IResolvable) {
    this._removePrivateAsInternal = value;
  }
  public resetRemovePrivateAsInternal() {
    this._removePrivateAsInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInternalInput() {
    return this._removePrivateAsInternal;
  }

  // route_policy_in - computed: false, optional: true, required: false
  private _routePolicyIn?: string; 
  public get routePolicyIn() {
    return this.getStringAttribute('route_policy_in');
  }
  public set routePolicyIn(value: string) {
    this._routePolicyIn = value;
  }
  public resetRoutePolicyIn() {
    this._routePolicyIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInInput() {
    return this._routePolicyIn;
  }

  // route_policy_out - computed: false, optional: true, required: false
  private _routePolicyOut?: string; 
  public get routePolicyOut() {
    return this.getStringAttribute('route_policy_out');
  }
  public set routePolicyOut(value: string) {
    this._routePolicyOut = value;
  }
  public resetRoutePolicyOut() {
    this._routePolicyOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyOutInput() {
    return this._routePolicyOut;
  }

  // send_community_ebgp_inheritance_disable - computed: false, optional: true, required: false
  private _sendCommunityEbgpInheritanceDisable?: boolean | cdktf.IResolvable; 
  public get sendCommunityEbgpInheritanceDisable() {
    return this.getBooleanAttribute('send_community_ebgp_inheritance_disable');
  }
  public set sendCommunityEbgpInheritanceDisable(value: boolean | cdktf.IResolvable) {
    this._sendCommunityEbgpInheritanceDisable = value;
  }
  public resetSendCommunityEbgpInheritanceDisable() {
    this._sendCommunityEbgpInheritanceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityEbgpInheritanceDisableInput() {
    return this._sendCommunityEbgpInheritanceDisable;
  }

  // soft_reconfiguration_inbound_always - computed: false, optional: true, required: false
  private _softReconfigurationInboundAlways?: boolean | cdktf.IResolvable; 
  public get softReconfigurationInboundAlways() {
    return this.getBooleanAttribute('soft_reconfiguration_inbound_always');
  }
  public set softReconfigurationInboundAlways(value: boolean | cdktf.IResolvable) {
    this._softReconfigurationInboundAlways = value;
  }
  public resetSoftReconfigurationInboundAlways() {
    this._softReconfigurationInboundAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationInboundAlwaysInput() {
    return this._softReconfigurationInboundAlways;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      af_name: cdktf.stringToTerraform(this._afName),
      as_number: cdktf.stringToTerraform(this._asNumber),
      default_originate: cdktf.booleanToTerraform(this._defaultOriginate),
      default_originate_inheritance_disable: cdktf.booleanToTerraform(this._defaultOriginateInheritanceDisable),
      default_originate_route_policy: cdktf.stringToTerraform(this._defaultOriginateRoutePolicy),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      next_hop_self: cdktf.booleanToTerraform(this._nextHopSelf),
      next_hop_self_inheritance_disable: cdktf.booleanToTerraform(this._nextHopSelfInheritanceDisable),
      remove_private_as: cdktf.booleanToTerraform(this._removePrivateAs),
      remove_private_as_entire_aspath: cdktf.booleanToTerraform(this._removePrivateAsEntireAspath),
      remove_private_as_inbound: cdktf.booleanToTerraform(this._removePrivateAsInbound),
      remove_private_as_inbound_entire_aspath: cdktf.booleanToTerraform(this._removePrivateAsInboundEntireAspath),
      remove_private_as_inbound_inheritance_disable: cdktf.booleanToTerraform(this._removePrivateAsInboundInheritanceDisable),
      remove_private_as_inheritance_disable: cdktf.booleanToTerraform(this._removePrivateAsInheritanceDisable),
      remove_private_as_internal: cdktf.booleanToTerraform(this._removePrivateAsInternal),
      route_policy_in: cdktf.stringToTerraform(this._routePolicyIn),
      route_policy_out: cdktf.stringToTerraform(this._routePolicyOut),
      send_community_ebgp_inheritance_disable: cdktf.booleanToTerraform(this._sendCommunityEbgpInheritanceDisable),
      soft_reconfiguration_inbound_always: cdktf.booleanToTerraform(this._softReconfigurationInboundAlways),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      af_name: {
        value: cdktf.stringToHclTerraform(this._afName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as_number: {
        value: cdktf.stringToHclTerraform(this._asNumber),
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
      default_originate_inheritance_disable: {
        value: cdktf.booleanToHclTerraform(this._defaultOriginateInheritanceDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_originate_route_policy: {
        value: cdktf.stringToHclTerraform(this._defaultOriginateRoutePolicy),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_self: {
        value: cdktf.booleanToHclTerraform(this._nextHopSelf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      next_hop_self_inheritance_disable: {
        value: cdktf.booleanToHclTerraform(this._nextHopSelfInheritanceDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_private_as: {
        value: cdktf.booleanToHclTerraform(this._removePrivateAs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_private_as_entire_aspath: {
        value: cdktf.booleanToHclTerraform(this._removePrivateAsEntireAspath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_private_as_inbound: {
        value: cdktf.booleanToHclTerraform(this._removePrivateAsInbound),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_private_as_inbound_entire_aspath: {
        value: cdktf.booleanToHclTerraform(this._removePrivateAsInboundEntireAspath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_private_as_inbound_inheritance_disable: {
        value: cdktf.booleanToHclTerraform(this._removePrivateAsInboundInheritanceDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_private_as_inheritance_disable: {
        value: cdktf.booleanToHclTerraform(this._removePrivateAsInheritanceDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_private_as_internal: {
        value: cdktf.booleanToHclTerraform(this._removePrivateAsInternal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_policy_in: {
        value: cdktf.stringToHclTerraform(this._routePolicyIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_policy_out: {
        value: cdktf.stringToHclTerraform(this._routePolicyOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_community_ebgp_inheritance_disable: {
        value: cdktf.booleanToHclTerraform(this._sendCommunityEbgpInheritanceDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      soft_reconfiguration_inbound_always: {
        value: cdktf.booleanToHclTerraform(this._softReconfigurationInboundAlways),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
