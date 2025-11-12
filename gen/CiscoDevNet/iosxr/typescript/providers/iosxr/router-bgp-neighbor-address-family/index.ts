// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpNeighborAddressFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPaddress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#address RouterBgpNeighborAddressFamily#address}
  */
  readonly address: string;
  /**
  * Enable advertise vpnv4 unicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#advertise_vpnv4_unicast RouterBgpNeighborAddressFamily#advertise_vpnv4_unicast}
  */
  readonly advertiseVpnv4Unicast?: boolean | cdktf.IResolvable;
  /**
  * Advertise re-orignated and local routes only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#advertise_vpnv4_unicast_re_originated RouterBgpNeighborAddressFamily#advertise_vpnv4_unicast_re_originated}
  */
  readonly advertiseVpnv4UnicastReOriginated?: boolean | cdktf.IResolvable;
  /**
  * Advertise re-originated and local routes with stitching Route-Targets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#advertise_vpnv4_unicast_re_originated_stitching_rt RouterBgpNeighborAddressFamily#advertise_vpnv4_unicast_re_originated_stitching_rt}
  */
  readonly advertiseVpnv4UnicastReOriginatedStitchingRt?: boolean | cdktf.IResolvable;
  /**
  * Enter Address Family command mode
  *   - Choices: `all-address-family`, `ipv4-flowspec`, `ipv4-labeled-unicast`, `ipv4-mdt`, `ipv4-multicast`, `ipv4-mvpn`, `ipv4-rt-filter`, `ipv4-sr-policy`, `ipv4-tunnel`, `ipv4-unicast`, `ipv6-flowspec`, `ipv6-labeled-unicast`, `ipv6-multicast`, `ipv6-mvpn`, `ipv6-sr-policy`, `ipv6-unicast`, `l2vpn-evpn`, `l2vpn-mspw`, `l2vpn-vpls-vpws`, `link-state-link-state`, `vpnv4-flowspec`, `vpnv4-multicast`, `vpnv4-unicast`, `vpnv6-flowspec`, `vpnv6-multicast`, `vpnv6-unicast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#af_name RouterBgpNeighborAddressFamily#af_name}
  */
  readonly afName: string;
  /**
  * bgp as-number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#as_number RouterBgpNeighborAddressFamily#as_number}
  */
  readonly asNumber: string;
  /**
  * Originate default route to this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#default_originate RouterBgpNeighborAddressFamily#default_originate}
  */
  readonly defaultOriginate?: boolean | cdktf.IResolvable;
  /**
  * Prevent default-originate being inherited from a parent group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#default_originate_inheritance_disable RouterBgpNeighborAddressFamily#default_originate_inheritance_disable}
  */
  readonly defaultOriginateInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Route policy to specify criteria to originate default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#default_originate_route_policy RouterBgpNeighborAddressFamily#default_originate_route_policy}
  */
  readonly defaultOriginateRoutePolicy?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#delete_mode RouterBgpNeighborAddressFamily#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#device RouterBgpNeighborAddressFamily#device}
  */
  readonly device?: string;
  /**
  * Specify encapsulation type
  *   - Choices: `srv6`, `vxlan`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#encapsulation_type RouterBgpNeighborAddressFamily#encapsulation_type}
  */
  readonly encapsulationType?: string;
  /**
  * Reoriginate imported routes by attaching stitching RTs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#import_re_originate RouterBgpNeighborAddressFamily#import_re_originate}
  */
  readonly importReOriginate?: boolean | cdktf.IResolvable;
  /**
  * Import routes using stitching RTs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#import_stitching_rt RouterBgpNeighborAddressFamily#import_stitching_rt}
  */
  readonly importStitchingRt?: boolean | cdktf.IResolvable;
  /**
  * Re-originate imported routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#import_stitching_rt_re_originate RouterBgpNeighborAddressFamily#import_stitching_rt_re_originate}
  */
  readonly importStitchingRtReOriginate?: boolean | cdktf.IResolvable;
  /**
  * Reoriginate imported routes by attaching stitching RTs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#import_stitching_rt_re_originate_stitching_rt RouterBgpNeighborAddressFamily#import_stitching_rt_re_originate_stitching_rt}
  */
  readonly importStitchingRtReOriginateStitchingRt?: boolean | cdktf.IResolvable;
  /**
  * Discard extra paths when limit is exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#maximum_prefix_discard_extra_paths RouterBgpNeighborAddressFamily#maximum_prefix_discard_extra_paths}
  */
  readonly maximumPrefixDiscardExtraPaths?: boolean | cdktf.IResolvable;
  /**
  * maximum no. of prefix limit
  *   - Range: `1`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#maximum_prefix_limit RouterBgpNeighborAddressFamily#maximum_prefix_limit}
  */
  readonly maximumPrefixLimit: number;
  /**
  * Restart time interval
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#maximum_prefix_restart RouterBgpNeighborAddressFamily#maximum_prefix_restart}
  */
  readonly maximumPrefixRestart?: number;
  /**
  * Threshold value (%) at which to generate a warning msg
  *   - Range: `1`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#maximum_prefix_threshold RouterBgpNeighborAddressFamily#maximum_prefix_threshold}
  */
  readonly maximumPrefixThreshold: number;
  /**
  * Only give warning message when limit is exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#maximum_prefix_warning_only RouterBgpNeighborAddressFamily#maximum_prefix_warning_only}
  */
  readonly maximumPrefixWarningOnly?: boolean | cdktf.IResolvable;
  /**
  * Disable the next hop calculation for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#next_hop_self RouterBgpNeighborAddressFamily#next_hop_self}
  */
  readonly nextHopSelf?: boolean | cdktf.IResolvable;
  /**
  * Prevent next-hop-self from being inherited from the parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#next_hop_self_inheritance_disable RouterBgpNeighborAddressFamily#next_hop_self_inheritance_disable}
  */
  readonly nextHopSelfInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Apply route policy to inbound routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#route_policy_in RouterBgpNeighborAddressFamily#route_policy_in}
  */
  readonly routePolicyIn?: string;
  /**
  * Apply route policy to outbound routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#route_policy_out RouterBgpNeighborAddressFamily#route_policy_out}
  */
  readonly routePolicyOut?: string;
  /**
  * Configure a neighbor as Route Reflector client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#route_reflector_client RouterBgpNeighborAddressFamily#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * Prevent route-reflector-client from being inherited from the parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#route_reflector_client_inheritance_disable RouterBgpNeighborAddressFamily#route_reflector_client_inheritance_disable}
  */
  readonly routeReflectorClientInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Send community attribute to this external neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#send_community_ebgp RouterBgpNeighborAddressFamily#send_community_ebgp}
  */
  readonly sendCommunityEbgp?: boolean | cdktf.IResolvable;
  /**
  * Prevent send-community-ebgp from being inherited from the parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#send_community_ebgp_inheritance_disable RouterBgpNeighborAddressFamily#send_community_ebgp_inheritance_disable}
  */
  readonly sendCommunityEbgpInheritanceDisable?: boolean | cdktf.IResolvable;
  /**
  * Allow inbound soft reconfiguration for this neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#soft_reconfiguration_inbound RouterBgpNeighborAddressFamily#soft_reconfiguration_inbound}
  */
  readonly softReconfigurationInbound?: boolean | cdktf.IResolvable;
  /**
  * Always use soft reconfig, even if route refresh is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#soft_reconfiguration_inbound_always RouterBgpNeighborAddressFamily#soft_reconfiguration_inbound_always}
  */
  readonly softReconfigurationInboundAlways?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family iosxr_router_bgp_neighbor_address_family}
*/
export class RouterBgpNeighborAddressFamily extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_bgp_neighbor_address_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgpNeighborAddressFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgpNeighborAddressFamily to import
  * @param importFromId The id of the existing RouterBgpNeighborAddressFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgpNeighborAddressFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_bgp_neighbor_address_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_bgp_neighbor_address_family iosxr_router_bgp_neighbor_address_family} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpNeighborAddressFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: RouterBgpNeighborAddressFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_bgp_neighbor_address_family',
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
    this._advertiseVpnv4Unicast = config.advertiseVpnv4Unicast;
    this._advertiseVpnv4UnicastReOriginated = config.advertiseVpnv4UnicastReOriginated;
    this._advertiseVpnv4UnicastReOriginatedStitchingRt = config.advertiseVpnv4UnicastReOriginatedStitchingRt;
    this._afName = config.afName;
    this._asNumber = config.asNumber;
    this._defaultOriginate = config.defaultOriginate;
    this._defaultOriginateInheritanceDisable = config.defaultOriginateInheritanceDisable;
    this._defaultOriginateRoutePolicy = config.defaultOriginateRoutePolicy;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._encapsulationType = config.encapsulationType;
    this._importReOriginate = config.importReOriginate;
    this._importStitchingRt = config.importStitchingRt;
    this._importStitchingRtReOriginate = config.importStitchingRtReOriginate;
    this._importStitchingRtReOriginateStitchingRt = config.importStitchingRtReOriginateStitchingRt;
    this._maximumPrefixDiscardExtraPaths = config.maximumPrefixDiscardExtraPaths;
    this._maximumPrefixLimit = config.maximumPrefixLimit;
    this._maximumPrefixRestart = config.maximumPrefixRestart;
    this._maximumPrefixThreshold = config.maximumPrefixThreshold;
    this._maximumPrefixWarningOnly = config.maximumPrefixWarningOnly;
    this._nextHopSelf = config.nextHopSelf;
    this._nextHopSelfInheritanceDisable = config.nextHopSelfInheritanceDisable;
    this._routePolicyIn = config.routePolicyIn;
    this._routePolicyOut = config.routePolicyOut;
    this._routeReflectorClient = config.routeReflectorClient;
    this._routeReflectorClientInheritanceDisable = config.routeReflectorClientInheritanceDisable;
    this._sendCommunityEbgp = config.sendCommunityEbgp;
    this._sendCommunityEbgpInheritanceDisable = config.sendCommunityEbgpInheritanceDisable;
    this._softReconfigurationInbound = config.softReconfigurationInbound;
    this._softReconfigurationInboundAlways = config.softReconfigurationInboundAlways;
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

  // advertise_vpnv4_unicast - computed: false, optional: true, required: false
  private _advertiseVpnv4Unicast?: boolean | cdktf.IResolvable; 
  public get advertiseVpnv4Unicast() {
    return this.getBooleanAttribute('advertise_vpnv4_unicast');
  }
  public set advertiseVpnv4Unicast(value: boolean | cdktf.IResolvable) {
    this._advertiseVpnv4Unicast = value;
  }
  public resetAdvertiseVpnv4Unicast() {
    this._advertiseVpnv4Unicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseVpnv4UnicastInput() {
    return this._advertiseVpnv4Unicast;
  }

  // advertise_vpnv4_unicast_re_originated - computed: false, optional: true, required: false
  private _advertiseVpnv4UnicastReOriginated?: boolean | cdktf.IResolvable; 
  public get advertiseVpnv4UnicastReOriginated() {
    return this.getBooleanAttribute('advertise_vpnv4_unicast_re_originated');
  }
  public set advertiseVpnv4UnicastReOriginated(value: boolean | cdktf.IResolvable) {
    this._advertiseVpnv4UnicastReOriginated = value;
  }
  public resetAdvertiseVpnv4UnicastReOriginated() {
    this._advertiseVpnv4UnicastReOriginated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseVpnv4UnicastReOriginatedInput() {
    return this._advertiseVpnv4UnicastReOriginated;
  }

  // advertise_vpnv4_unicast_re_originated_stitching_rt - computed: false, optional: true, required: false
  private _advertiseVpnv4UnicastReOriginatedStitchingRt?: boolean | cdktf.IResolvable; 
  public get advertiseVpnv4UnicastReOriginatedStitchingRt() {
    return this.getBooleanAttribute('advertise_vpnv4_unicast_re_originated_stitching_rt');
  }
  public set advertiseVpnv4UnicastReOriginatedStitchingRt(value: boolean | cdktf.IResolvable) {
    this._advertiseVpnv4UnicastReOriginatedStitchingRt = value;
  }
  public resetAdvertiseVpnv4UnicastReOriginatedStitchingRt() {
    this._advertiseVpnv4UnicastReOriginatedStitchingRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseVpnv4UnicastReOriginatedStitchingRtInput() {
    return this._advertiseVpnv4UnicastReOriginatedStitchingRt;
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

  // encapsulation_type - computed: false, optional: true, required: false
  private _encapsulationType?: string; 
  public get encapsulationType() {
    return this.getStringAttribute('encapsulation_type');
  }
  public set encapsulationType(value: string) {
    this._encapsulationType = value;
  }
  public resetEncapsulationType() {
    this._encapsulationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulationTypeInput() {
    return this._encapsulationType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_re_originate - computed: false, optional: true, required: false
  private _importReOriginate?: boolean | cdktf.IResolvable; 
  public get importReOriginate() {
    return this.getBooleanAttribute('import_re_originate');
  }
  public set importReOriginate(value: boolean | cdktf.IResolvable) {
    this._importReOriginate = value;
  }
  public resetImportReOriginate() {
    this._importReOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importReOriginateInput() {
    return this._importReOriginate;
  }

  // import_stitching_rt - computed: false, optional: true, required: false
  private _importStitchingRt?: boolean | cdktf.IResolvable; 
  public get importStitchingRt() {
    return this.getBooleanAttribute('import_stitching_rt');
  }
  public set importStitchingRt(value: boolean | cdktf.IResolvable) {
    this._importStitchingRt = value;
  }
  public resetImportStitchingRt() {
    this._importStitchingRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importStitchingRtInput() {
    return this._importStitchingRt;
  }

  // import_stitching_rt_re_originate - computed: false, optional: true, required: false
  private _importStitchingRtReOriginate?: boolean | cdktf.IResolvable; 
  public get importStitchingRtReOriginate() {
    return this.getBooleanAttribute('import_stitching_rt_re_originate');
  }
  public set importStitchingRtReOriginate(value: boolean | cdktf.IResolvable) {
    this._importStitchingRtReOriginate = value;
  }
  public resetImportStitchingRtReOriginate() {
    this._importStitchingRtReOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importStitchingRtReOriginateInput() {
    return this._importStitchingRtReOriginate;
  }

  // import_stitching_rt_re_originate_stitching_rt - computed: false, optional: true, required: false
  private _importStitchingRtReOriginateStitchingRt?: boolean | cdktf.IResolvable; 
  public get importStitchingRtReOriginateStitchingRt() {
    return this.getBooleanAttribute('import_stitching_rt_re_originate_stitching_rt');
  }
  public set importStitchingRtReOriginateStitchingRt(value: boolean | cdktf.IResolvable) {
    this._importStitchingRtReOriginateStitchingRt = value;
  }
  public resetImportStitchingRtReOriginateStitchingRt() {
    this._importStitchingRtReOriginateStitchingRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importStitchingRtReOriginateStitchingRtInput() {
    return this._importStitchingRtReOriginateStitchingRt;
  }

  // maximum_prefix_discard_extra_paths - computed: false, optional: true, required: false
  private _maximumPrefixDiscardExtraPaths?: boolean | cdktf.IResolvable; 
  public get maximumPrefixDiscardExtraPaths() {
    return this.getBooleanAttribute('maximum_prefix_discard_extra_paths');
  }
  public set maximumPrefixDiscardExtraPaths(value: boolean | cdktf.IResolvable) {
    this._maximumPrefixDiscardExtraPaths = value;
  }
  public resetMaximumPrefixDiscardExtraPaths() {
    this._maximumPrefixDiscardExtraPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixDiscardExtraPathsInput() {
    return this._maximumPrefixDiscardExtraPaths;
  }

  // maximum_prefix_limit - computed: false, optional: false, required: true
  private _maximumPrefixLimit?: number; 
  public get maximumPrefixLimit() {
    return this.getNumberAttribute('maximum_prefix_limit');
  }
  public set maximumPrefixLimit(value: number) {
    this._maximumPrefixLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixLimitInput() {
    return this._maximumPrefixLimit;
  }

  // maximum_prefix_restart - computed: false, optional: true, required: false
  private _maximumPrefixRestart?: number; 
  public get maximumPrefixRestart() {
    return this.getNumberAttribute('maximum_prefix_restart');
  }
  public set maximumPrefixRestart(value: number) {
    this._maximumPrefixRestart = value;
  }
  public resetMaximumPrefixRestart() {
    this._maximumPrefixRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixRestartInput() {
    return this._maximumPrefixRestart;
  }

  // maximum_prefix_threshold - computed: false, optional: false, required: true
  private _maximumPrefixThreshold?: number; 
  public get maximumPrefixThreshold() {
    return this.getNumberAttribute('maximum_prefix_threshold');
  }
  public set maximumPrefixThreshold(value: number) {
    this._maximumPrefixThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixThresholdInput() {
    return this._maximumPrefixThreshold;
  }

  // maximum_prefix_warning_only - computed: false, optional: true, required: false
  private _maximumPrefixWarningOnly?: boolean | cdktf.IResolvable; 
  public get maximumPrefixWarningOnly() {
    return this.getBooleanAttribute('maximum_prefix_warning_only');
  }
  public set maximumPrefixWarningOnly(value: boolean | cdktf.IResolvable) {
    this._maximumPrefixWarningOnly = value;
  }
  public resetMaximumPrefixWarningOnly() {
    this._maximumPrefixWarningOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixWarningOnlyInput() {
    return this._maximumPrefixWarningOnly;
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

  // route_reflector_client_inheritance_disable - computed: false, optional: true, required: false
  private _routeReflectorClientInheritanceDisable?: boolean | cdktf.IResolvable; 
  public get routeReflectorClientInheritanceDisable() {
    return this.getBooleanAttribute('route_reflector_client_inheritance_disable');
  }
  public set routeReflectorClientInheritanceDisable(value: boolean | cdktf.IResolvable) {
    this._routeReflectorClientInheritanceDisable = value;
  }
  public resetRouteReflectorClientInheritanceDisable() {
    this._routeReflectorClientInheritanceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientInheritanceDisableInput() {
    return this._routeReflectorClientInheritanceDisable;
  }

  // send_community_ebgp - computed: false, optional: true, required: false
  private _sendCommunityEbgp?: boolean | cdktf.IResolvable; 
  public get sendCommunityEbgp() {
    return this.getBooleanAttribute('send_community_ebgp');
  }
  public set sendCommunityEbgp(value: boolean | cdktf.IResolvable) {
    this._sendCommunityEbgp = value;
  }
  public resetSendCommunityEbgp() {
    this._sendCommunityEbgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityEbgpInput() {
    return this._sendCommunityEbgp;
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

  // soft_reconfiguration_inbound - computed: false, optional: true, required: false
  private _softReconfigurationInbound?: boolean | cdktf.IResolvable; 
  public get softReconfigurationInbound() {
    return this.getBooleanAttribute('soft_reconfiguration_inbound');
  }
  public set softReconfigurationInbound(value: boolean | cdktf.IResolvable) {
    this._softReconfigurationInbound = value;
  }
  public resetSoftReconfigurationInbound() {
    this._softReconfigurationInbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationInboundInput() {
    return this._softReconfigurationInbound;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      advertise_vpnv4_unicast: cdktf.booleanToTerraform(this._advertiseVpnv4Unicast),
      advertise_vpnv4_unicast_re_originated: cdktf.booleanToTerraform(this._advertiseVpnv4UnicastReOriginated),
      advertise_vpnv4_unicast_re_originated_stitching_rt: cdktf.booleanToTerraform(this._advertiseVpnv4UnicastReOriginatedStitchingRt),
      af_name: cdktf.stringToTerraform(this._afName),
      as_number: cdktf.stringToTerraform(this._asNumber),
      default_originate: cdktf.booleanToTerraform(this._defaultOriginate),
      default_originate_inheritance_disable: cdktf.booleanToTerraform(this._defaultOriginateInheritanceDisable),
      default_originate_route_policy: cdktf.stringToTerraform(this._defaultOriginateRoutePolicy),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      encapsulation_type: cdktf.stringToTerraform(this._encapsulationType),
      import_re_originate: cdktf.booleanToTerraform(this._importReOriginate),
      import_stitching_rt: cdktf.booleanToTerraform(this._importStitchingRt),
      import_stitching_rt_re_originate: cdktf.booleanToTerraform(this._importStitchingRtReOriginate),
      import_stitching_rt_re_originate_stitching_rt: cdktf.booleanToTerraform(this._importStitchingRtReOriginateStitchingRt),
      maximum_prefix_discard_extra_paths: cdktf.booleanToTerraform(this._maximumPrefixDiscardExtraPaths),
      maximum_prefix_limit: cdktf.numberToTerraform(this._maximumPrefixLimit),
      maximum_prefix_restart: cdktf.numberToTerraform(this._maximumPrefixRestart),
      maximum_prefix_threshold: cdktf.numberToTerraform(this._maximumPrefixThreshold),
      maximum_prefix_warning_only: cdktf.booleanToTerraform(this._maximumPrefixWarningOnly),
      next_hop_self: cdktf.booleanToTerraform(this._nextHopSelf),
      next_hop_self_inheritance_disable: cdktf.booleanToTerraform(this._nextHopSelfInheritanceDisable),
      route_policy_in: cdktf.stringToTerraform(this._routePolicyIn),
      route_policy_out: cdktf.stringToTerraform(this._routePolicyOut),
      route_reflector_client: cdktf.booleanToTerraform(this._routeReflectorClient),
      route_reflector_client_inheritance_disable: cdktf.booleanToTerraform(this._routeReflectorClientInheritanceDisable),
      send_community_ebgp: cdktf.booleanToTerraform(this._sendCommunityEbgp),
      send_community_ebgp_inheritance_disable: cdktf.booleanToTerraform(this._sendCommunityEbgpInheritanceDisable),
      soft_reconfiguration_inbound: cdktf.booleanToTerraform(this._softReconfigurationInbound),
      soft_reconfiguration_inbound_always: cdktf.booleanToTerraform(this._softReconfigurationInboundAlways),
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
      advertise_vpnv4_unicast: {
        value: cdktf.booleanToHclTerraform(this._advertiseVpnv4Unicast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_vpnv4_unicast_re_originated: {
        value: cdktf.booleanToHclTerraform(this._advertiseVpnv4UnicastReOriginated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_vpnv4_unicast_re_originated_stitching_rt: {
        value: cdktf.booleanToHclTerraform(this._advertiseVpnv4UnicastReOriginatedStitchingRt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      encapsulation_type: {
        value: cdktf.stringToHclTerraform(this._encapsulationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_re_originate: {
        value: cdktf.booleanToHclTerraform(this._importReOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      import_stitching_rt: {
        value: cdktf.booleanToHclTerraform(this._importStitchingRt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      import_stitching_rt_re_originate: {
        value: cdktf.booleanToHclTerraform(this._importStitchingRtReOriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      import_stitching_rt_re_originate_stitching_rt: {
        value: cdktf.booleanToHclTerraform(this._importStitchingRtReOriginateStitchingRt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maximum_prefix_discard_extra_paths: {
        value: cdktf.booleanToHclTerraform(this._maximumPrefixDiscardExtraPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maximum_prefix_limit: {
        value: cdktf.numberToHclTerraform(this._maximumPrefixLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_restart: {
        value: cdktf.numberToHclTerraform(this._maximumPrefixRestart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_threshold: {
        value: cdktf.numberToHclTerraform(this._maximumPrefixThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_prefix_warning_only: {
        value: cdktf.booleanToHclTerraform(this._maximumPrefixWarningOnly),
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
      next_hop_self_inheritance_disable: {
        value: cdktf.booleanToHclTerraform(this._nextHopSelfInheritanceDisable),
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
      route_reflector_client: {
        value: cdktf.booleanToHclTerraform(this._routeReflectorClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      route_reflector_client_inheritance_disable: {
        value: cdktf.booleanToHclTerraform(this._routeReflectorClientInheritanceDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_community_ebgp: {
        value: cdktf.booleanToHclTerraform(this._sendCommunityEbgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_community_ebgp_inheritance_disable: {
        value: cdktf.booleanToHclTerraform(this._sendCommunityEbgpInheritanceDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      soft_reconfiguration_inbound: {
        value: cdktf.booleanToHclTerraform(this._softReconfigurationInbound),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
