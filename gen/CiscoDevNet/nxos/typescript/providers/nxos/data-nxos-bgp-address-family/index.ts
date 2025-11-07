// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/bgp_address_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNxosBgpAddressFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Address Family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/bgp_address_family#address_family DataNxosBgpAddressFamily#address_family}
  */
  readonly addressFamily: string;
  /**
  * Autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/bgp_address_family#asn DataNxosBgpAddressFamily#asn}
  */
  readonly asn: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/bgp_address_family#device DataNxosBgpAddressFamily#device}
  */
  readonly device?: string;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/bgp_address_family#vrf DataNxosBgpAddressFamily#vrf}
  */
  readonly vrf: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/bgp_address_family nxos_bgp_address_family}
*/
export class DataNxosBgpAddressFamily extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_bgp_address_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNxosBgpAddressFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNxosBgpAddressFamily to import
  * @param importFromId The id of the existing DataNxosBgpAddressFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/bgp_address_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNxosBgpAddressFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_bgp_address_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/data-sources/bgp_address_family nxos_bgp_address_family} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNxosBgpAddressFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: DataNxosBgpAddressFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_bgp_address_family',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10'
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
    this._asn = config.asn;
    this._device = config.device;
    this._vrf = config.vrf;
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

  // advertise_l2vpn_evpn - computed: true, optional: false, required: false
  public get advertiseL2VpnEvpn() {
    return this.getStringAttribute('advertise_l2vpn_evpn');
  }

  // advertise_only_active_routes - computed: true, optional: false, required: false
  public get advertiseOnlyActiveRoutes() {
    return this.getStringAttribute('advertise_only_active_routes');
  }

  // advertise_physical_ip_for_type5_routes - computed: true, optional: false, required: false
  public get advertisePhysicalIpForType5Routes() {
    return this.getStringAttribute('advertise_physical_ip_for_type5_routes');
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

  // critical_nexthop_timeout - computed: true, optional: false, required: false
  public get criticalNexthopTimeout() {
    return this.getStringAttribute('critical_nexthop_timeout');
  }

  // default_information_originate - computed: true, optional: false, required: false
  public get defaultInformationOriginate() {
    return this.getStringAttribute('default_information_originate');
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

  // max_ecmp_paths - computed: true, optional: false, required: false
  public get maxEcmpPaths() {
    return this.getNumberAttribute('max_ecmp_paths');
  }

  // max_external_ecmp_paths - computed: true, optional: false, required: false
  public get maxExternalEcmpPaths() {
    return this.getNumberAttribute('max_external_ecmp_paths');
  }

  // max_external_internal_ecmp_paths - computed: true, optional: false, required: false
  public get maxExternalInternalEcmpPaths() {
    return this.getNumberAttribute('max_external_internal_ecmp_paths');
  }

  // max_local_ecmp_paths - computed: true, optional: false, required: false
  public get maxLocalEcmpPaths() {
    return this.getNumberAttribute('max_local_ecmp_paths');
  }

  // max_mixed_ecmp_paths - computed: true, optional: false, required: false
  public get maxMixedEcmpPaths() {
    return this.getNumberAttribute('max_mixed_ecmp_paths');
  }

  // next_hop_route_map_name - computed: true, optional: false, required: false
  public get nextHopRouteMapName() {
    return this.getStringAttribute('next_hop_route_map_name');
  }

  // non_critical_nexthop_timeout - computed: true, optional: false, required: false
  public get nonCriticalNexthopTimeout() {
    return this.getStringAttribute('non_critical_nexthop_timeout');
  }

  // prefix_priority - computed: true, optional: false, required: false
  public get prefixPriority() {
    return this.getStringAttribute('prefix_priority');
  }

  // retain_rt_all - computed: true, optional: false, required: false
  public get retainRtAll() {
    return this.getStringAttribute('retain_rt_all');
  }

  // table_map_route_map_name - computed: true, optional: false, required: false
  public get tableMapRouteMapName() {
    return this.getStringAttribute('table_map_route_map_name');
  }

  // vni_ethernet_tag - computed: true, optional: false, required: false
  public get vniEthernetTag() {
    return this.getStringAttribute('vni_ethernet_tag');
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

  // wait_igp_converged - computed: true, optional: false, required: false
  public get waitIgpConverged() {
    return this.getStringAttribute('wait_igp_converged');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_family: cdktf.stringToTerraform(this._addressFamily),
      asn: cdktf.stringToTerraform(this._asn),
      device: cdktf.stringToTerraform(this._device),
      vrf: cdktf.stringToTerraform(this._vrf),
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
