// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpAddressFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Address Family.
  *   - Choices: `ipv4-ucast`, `ipv4-mcast`, `vpnv4-ucast`, `ipv6-ucast`, `ipv6-mcast`, `vpnv6-ucast`, `vpnv6-mcast`, `l2vpn-evpn`, `ipv4-lucast`, `ipv6-lucast`, `lnkstate`, `ipv4-mvpn`, `ipv6-mvpn`, `l2vpn-vpls`, `ipv4-mdt`
  *   - Default value: `ipv4-ucast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#address_family BgpAddressFamily#address_family}
  */
  readonly addressFamily: string;
  /**
  * Enable or disable the advertisement of L2VPN EVPN routes.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#advertise_l2vpn_evpn BgpAddressFamily#advertise_l2vpn_evpn}
  */
  readonly advertiseL2VpnEvpn?: string;
  /**
  * Advertise only active routes to peers
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#advertise_only_active_routes BgpAddressFamily#advertise_only_active_routes}
  */
  readonly advertiseOnlyActiveRoutes?: string;
  /**
  * Advertise physical IP for type-5 routes
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#advertise_physical_ip_for_type5_routes BgpAddressFamily#advertise_physical_ip_for_type5_routes}
  */
  readonly advertisePhysicalIpForType5Routes?: string;
  /**
  * Autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#asn BgpAddressFamily#asn}
  */
  readonly asn: string;
  /**
  * The next-hop address tracking delay timer for critical next-hop reachability routes.
  *   - Default value: `crit`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#critical_nexthop_timeout BgpAddressFamily#critical_nexthop_timeout}
  */
  readonly criticalNexthopTimeout?: string;
  /**
  * Enable or disable the default-information originate.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#default_information_originate BgpAddressFamily#default_information_originate}
  */
  readonly defaultInformationOriginate?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#device BgpAddressFamily#device}
  */
  readonly device?: string;
  /**
  * Maximum number of ECMP paths.
  *   - Range: `1`-`128`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#max_ecmp_paths BgpAddressFamily#max_ecmp_paths}
  */
  readonly maxEcmpPaths?: number;
  /**
  * Maximum number of external ECMP paths.
  *   - Range: `1`-`128`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#max_external_ecmp_paths BgpAddressFamily#max_external_ecmp_paths}
  */
  readonly maxExternalEcmpPaths?: number;
  /**
  * Maximum number of external/internal ECMP paths.
  *   - Range: `1`-`128`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#max_external_internal_ecmp_paths BgpAddressFamily#max_external_internal_ecmp_paths}
  */
  readonly maxExternalInternalEcmpPaths?: number;
  /**
  * Maximum number of equal-cost multipath for local paths ECMP paths.
  *   - Range: `1`-`128`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#max_local_ecmp_paths BgpAddressFamily#max_local_ecmp_paths}
  */
  readonly maxLocalEcmpPaths?: number;
  /**
  * Maximum mixed equal-cost multipath for local and remote ECMP paths.
  *   - Range: `1`-`128`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#max_mixed_ecmp_paths BgpAddressFamily#max_mixed_ecmp_paths}
  */
  readonly maxMixedEcmpPaths?: number;
  /**
  * Next hope route map name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#next_hop_route_map_name BgpAddressFamily#next_hop_route_map_name}
  */
  readonly nextHopRouteMapName?: string;
  /**
  * The next-hop address tracking delay timer for non-critical next-hop reachability routes.
  *   - Default value: `noncrit`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#non_critical_nexthop_timeout BgpAddressFamily#non_critical_nexthop_timeout}
  */
  readonly nonCriticalNexthopTimeout?: string;
  /**
  * Enable prefix priority for AF
  *   - Choices: `none`, `high`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#prefix_priority BgpAddressFamily#prefix_priority}
  */
  readonly prefixPriority?: string;
  /**
  * Retain Route Target All
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#retain_rt_all BgpAddressFamily#retain_rt_all}
  */
  readonly retainRtAll?: string;
  /**
  * Route Map name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#table_map_route_map_name BgpAddressFamily#table_map_route_map_name}
  */
  readonly tableMapRouteMapName?: string;
  /**
  * Allow VNI in Ethernet Tag field in EVPN route
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#vni_ethernet_tag BgpAddressFamily#vni_ethernet_tag}
  */
  readonly vniEthernetTag?: string;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#vrf BgpAddressFamily#vrf}
  */
  readonly vrf: string;
  /**
  * Delay initial bestpath until redistributed IGPs have converged
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#wait_igp_converged BgpAddressFamily#wait_igp_converged}
  */
  readonly waitIgpConverged?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family nxos_bgp_address_family}
*/
export class BgpAddressFamily extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_bgp_address_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpAddressFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpAddressFamily to import
  * @param importFromId The id of the existing BgpAddressFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpAddressFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_bgp_address_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_address_family nxos_bgp_address_family} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpAddressFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: BgpAddressFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_bgp_address_family',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10',
        providerVersionConstraint: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressFamily = config.addressFamily;
    this._advertiseL2VpnEvpn = config.advertiseL2VpnEvpn;
    this._advertiseOnlyActiveRoutes = config.advertiseOnlyActiveRoutes;
    this._advertisePhysicalIpForType5Routes = config.advertisePhysicalIpForType5Routes;
    this._asn = config.asn;
    this._criticalNexthopTimeout = config.criticalNexthopTimeout;
    this._defaultInformationOriginate = config.defaultInformationOriginate;
    this._device = config.device;
    this._maxEcmpPaths = config.maxEcmpPaths;
    this._maxExternalEcmpPaths = config.maxExternalEcmpPaths;
    this._maxExternalInternalEcmpPaths = config.maxExternalInternalEcmpPaths;
    this._maxLocalEcmpPaths = config.maxLocalEcmpPaths;
    this._maxMixedEcmpPaths = config.maxMixedEcmpPaths;
    this._nextHopRouteMapName = config.nextHopRouteMapName;
    this._nonCriticalNexthopTimeout = config.nonCriticalNexthopTimeout;
    this._prefixPriority = config.prefixPriority;
    this._retainRtAll = config.retainRtAll;
    this._tableMapRouteMapName = config.tableMapRouteMapName;
    this._vniEthernetTag = config.vniEthernetTag;
    this._vrf = config.vrf;
    this._waitIgpConverged = config.waitIgpConverged;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: false, optional: false, required: true
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // advertise_l2vpn_evpn - computed: true, optional: true, required: false
  private _advertiseL2VpnEvpn?: string; 
  public get advertiseL2VpnEvpn() {
    return this.getStringAttribute('advertise_l2vpn_evpn');
  }
  public set advertiseL2VpnEvpn(value: string) {
    this._advertiseL2VpnEvpn = value;
  }
  public resetAdvertiseL2VpnEvpn() {
    this._advertiseL2VpnEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseL2VpnEvpnInput() {
    return this._advertiseL2VpnEvpn;
  }

  // advertise_only_active_routes - computed: true, optional: true, required: false
  private _advertiseOnlyActiveRoutes?: string; 
  public get advertiseOnlyActiveRoutes() {
    return this.getStringAttribute('advertise_only_active_routes');
  }
  public set advertiseOnlyActiveRoutes(value: string) {
    this._advertiseOnlyActiveRoutes = value;
  }
  public resetAdvertiseOnlyActiveRoutes() {
    this._advertiseOnlyActiveRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnlyActiveRoutesInput() {
    return this._advertiseOnlyActiveRoutes;
  }

  // advertise_physical_ip_for_type5_routes - computed: true, optional: true, required: false
  private _advertisePhysicalIpForType5Routes?: string; 
  public get advertisePhysicalIpForType5Routes() {
    return this.getStringAttribute('advertise_physical_ip_for_type5_routes');
  }
  public set advertisePhysicalIpForType5Routes(value: string) {
    this._advertisePhysicalIpForType5Routes = value;
  }
  public resetAdvertisePhysicalIpForType5Routes() {
    this._advertisePhysicalIpForType5Routes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisePhysicalIpForType5RoutesInput() {
    return this._advertisePhysicalIpForType5Routes;
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

  // critical_nexthop_timeout - computed: true, optional: true, required: false
  private _criticalNexthopTimeout?: string; 
  public get criticalNexthopTimeout() {
    return this.getStringAttribute('critical_nexthop_timeout');
  }
  public set criticalNexthopTimeout(value: string) {
    this._criticalNexthopTimeout = value;
  }
  public resetCriticalNexthopTimeout() {
    this._criticalNexthopTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalNexthopTimeoutInput() {
    return this._criticalNexthopTimeout;
  }

  // default_information_originate - computed: true, optional: true, required: false
  private _defaultInformationOriginate?: string; 
  public get defaultInformationOriginate() {
    return this.getStringAttribute('default_information_originate');
  }
  public set defaultInformationOriginate(value: string) {
    this._defaultInformationOriginate = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate;
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

  // max_ecmp_paths - computed: true, optional: true, required: false
  private _maxEcmpPaths?: number; 
  public get maxEcmpPaths() {
    return this.getNumberAttribute('max_ecmp_paths');
  }
  public set maxEcmpPaths(value: number) {
    this._maxEcmpPaths = value;
  }
  public resetMaxEcmpPaths() {
    this._maxEcmpPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEcmpPathsInput() {
    return this._maxEcmpPaths;
  }

  // max_external_ecmp_paths - computed: true, optional: true, required: false
  private _maxExternalEcmpPaths?: number; 
  public get maxExternalEcmpPaths() {
    return this.getNumberAttribute('max_external_ecmp_paths');
  }
  public set maxExternalEcmpPaths(value: number) {
    this._maxExternalEcmpPaths = value;
  }
  public resetMaxExternalEcmpPaths() {
    this._maxExternalEcmpPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExternalEcmpPathsInput() {
    return this._maxExternalEcmpPaths;
  }

  // max_external_internal_ecmp_paths - computed: true, optional: true, required: false
  private _maxExternalInternalEcmpPaths?: number; 
  public get maxExternalInternalEcmpPaths() {
    return this.getNumberAttribute('max_external_internal_ecmp_paths');
  }
  public set maxExternalInternalEcmpPaths(value: number) {
    this._maxExternalInternalEcmpPaths = value;
  }
  public resetMaxExternalInternalEcmpPaths() {
    this._maxExternalInternalEcmpPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExternalInternalEcmpPathsInput() {
    return this._maxExternalInternalEcmpPaths;
  }

  // max_local_ecmp_paths - computed: true, optional: true, required: false
  private _maxLocalEcmpPaths?: number; 
  public get maxLocalEcmpPaths() {
    return this.getNumberAttribute('max_local_ecmp_paths');
  }
  public set maxLocalEcmpPaths(value: number) {
    this._maxLocalEcmpPaths = value;
  }
  public resetMaxLocalEcmpPaths() {
    this._maxLocalEcmpPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLocalEcmpPathsInput() {
    return this._maxLocalEcmpPaths;
  }

  // max_mixed_ecmp_paths - computed: true, optional: true, required: false
  private _maxMixedEcmpPaths?: number; 
  public get maxMixedEcmpPaths() {
    return this.getNumberAttribute('max_mixed_ecmp_paths');
  }
  public set maxMixedEcmpPaths(value: number) {
    this._maxMixedEcmpPaths = value;
  }
  public resetMaxMixedEcmpPaths() {
    this._maxMixedEcmpPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMixedEcmpPathsInput() {
    return this._maxMixedEcmpPaths;
  }

  // next_hop_route_map_name - computed: false, optional: true, required: false
  private _nextHopRouteMapName?: string; 
  public get nextHopRouteMapName() {
    return this.getStringAttribute('next_hop_route_map_name');
  }
  public set nextHopRouteMapName(value: string) {
    this._nextHopRouteMapName = value;
  }
  public resetNextHopRouteMapName() {
    this._nextHopRouteMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopRouteMapNameInput() {
    return this._nextHopRouteMapName;
  }

  // non_critical_nexthop_timeout - computed: true, optional: true, required: false
  private _nonCriticalNexthopTimeout?: string; 
  public get nonCriticalNexthopTimeout() {
    return this.getStringAttribute('non_critical_nexthop_timeout');
  }
  public set nonCriticalNexthopTimeout(value: string) {
    this._nonCriticalNexthopTimeout = value;
  }
  public resetNonCriticalNexthopTimeout() {
    this._nonCriticalNexthopTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonCriticalNexthopTimeoutInput() {
    return this._nonCriticalNexthopTimeout;
  }

  // prefix_priority - computed: true, optional: true, required: false
  private _prefixPriority?: string; 
  public get prefixPriority() {
    return this.getStringAttribute('prefix_priority');
  }
  public set prefixPriority(value: string) {
    this._prefixPriority = value;
  }
  public resetPrefixPriority() {
    this._prefixPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPriorityInput() {
    return this._prefixPriority;
  }

  // retain_rt_all - computed: true, optional: true, required: false
  private _retainRtAll?: string; 
  public get retainRtAll() {
    return this.getStringAttribute('retain_rt_all');
  }
  public set retainRtAll(value: string) {
    this._retainRtAll = value;
  }
  public resetRetainRtAll() {
    this._retainRtAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainRtAllInput() {
    return this._retainRtAll;
  }

  // table_map_route_map_name - computed: false, optional: true, required: false
  private _tableMapRouteMapName?: string; 
  public get tableMapRouteMapName() {
    return this.getStringAttribute('table_map_route_map_name');
  }
  public set tableMapRouteMapName(value: string) {
    this._tableMapRouteMapName = value;
  }
  public resetTableMapRouteMapName() {
    this._tableMapRouteMapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableMapRouteMapNameInput() {
    return this._tableMapRouteMapName;
  }

  // vni_ethernet_tag - computed: true, optional: true, required: false
  private _vniEthernetTag?: string; 
  public get vniEthernetTag() {
    return this.getStringAttribute('vni_ethernet_tag');
  }
  public set vniEthernetTag(value: string) {
    this._vniEthernetTag = value;
  }
  public resetVniEthernetTag() {
    this._vniEthernetTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniEthernetTagInput() {
    return this._vniEthernetTag;
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

  // wait_igp_converged - computed: true, optional: true, required: false
  private _waitIgpConverged?: string; 
  public get waitIgpConverged() {
    return this.getStringAttribute('wait_igp_converged');
  }
  public set waitIgpConverged(value: string) {
    this._waitIgpConverged = value;
  }
  public resetWaitIgpConverged() {
    this._waitIgpConverged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitIgpConvergedInput() {
    return this._waitIgpConverged;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: cdktf.stringToTerraform(this._addressFamily),
      advertise_l2vpn_evpn: cdktf.stringToTerraform(this._advertiseL2VpnEvpn),
      advertise_only_active_routes: cdktf.stringToTerraform(this._advertiseOnlyActiveRoutes),
      advertise_physical_ip_for_type5_routes: cdktf.stringToTerraform(this._advertisePhysicalIpForType5Routes),
      asn: cdktf.stringToTerraform(this._asn),
      critical_nexthop_timeout: cdktf.stringToTerraform(this._criticalNexthopTimeout),
      default_information_originate: cdktf.stringToTerraform(this._defaultInformationOriginate),
      device: cdktf.stringToTerraform(this._device),
      max_ecmp_paths: cdktf.numberToTerraform(this._maxEcmpPaths),
      max_external_ecmp_paths: cdktf.numberToTerraform(this._maxExternalEcmpPaths),
      max_external_internal_ecmp_paths: cdktf.numberToTerraform(this._maxExternalInternalEcmpPaths),
      max_local_ecmp_paths: cdktf.numberToTerraform(this._maxLocalEcmpPaths),
      max_mixed_ecmp_paths: cdktf.numberToTerraform(this._maxMixedEcmpPaths),
      next_hop_route_map_name: cdktf.stringToTerraform(this._nextHopRouteMapName),
      non_critical_nexthop_timeout: cdktf.stringToTerraform(this._nonCriticalNexthopTimeout),
      prefix_priority: cdktf.stringToTerraform(this._prefixPriority),
      retain_rt_all: cdktf.stringToTerraform(this._retainRtAll),
      table_map_route_map_name: cdktf.stringToTerraform(this._tableMapRouteMapName),
      vni_ethernet_tag: cdktf.stringToTerraform(this._vniEthernetTag),
      vrf: cdktf.stringToTerraform(this._vrf),
      wait_igp_converged: cdktf.stringToTerraform(this._waitIgpConverged),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_family: {
        value: cdktf.stringToHclTerraform(this._addressFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_l2vpn_evpn: {
        value: cdktf.stringToHclTerraform(this._advertiseL2VpnEvpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_only_active_routes: {
        value: cdktf.stringToHclTerraform(this._advertiseOnlyActiveRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advertise_physical_ip_for_type5_routes: {
        value: cdktf.stringToHclTerraform(this._advertisePhysicalIpForType5Routes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      critical_nexthop_timeout: {
        value: cdktf.stringToHclTerraform(this._criticalNexthopTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_information_originate: {
        value: cdktf.stringToHclTerraform(this._defaultInformationOriginate),
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
      max_ecmp_paths: {
        value: cdktf.numberToHclTerraform(this._maxEcmpPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_external_ecmp_paths: {
        value: cdktf.numberToHclTerraform(this._maxExternalEcmpPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_external_internal_ecmp_paths: {
        value: cdktf.numberToHclTerraform(this._maxExternalInternalEcmpPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_local_ecmp_paths: {
        value: cdktf.numberToHclTerraform(this._maxLocalEcmpPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_mixed_ecmp_paths: {
        value: cdktf.numberToHclTerraform(this._maxMixedEcmpPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      next_hop_route_map_name: {
        value: cdktf.stringToHclTerraform(this._nextHopRouteMapName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_critical_nexthop_timeout: {
        value: cdktf.stringToHclTerraform(this._nonCriticalNexthopTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_priority: {
        value: cdktf.stringToHclTerraform(this._prefixPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_rt_all: {
        value: cdktf.stringToHclTerraform(this._retainRtAll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_map_route_map_name: {
        value: cdktf.stringToHclTerraform(this._tableMapRouteMapName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vni_ethernet_tag: {
        value: cdktf.stringToHclTerraform(this._vniEthernetTag),
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
      wait_igp_converged: {
        value: cdktf.stringToHclTerraform(this._waitIgpConverged),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
