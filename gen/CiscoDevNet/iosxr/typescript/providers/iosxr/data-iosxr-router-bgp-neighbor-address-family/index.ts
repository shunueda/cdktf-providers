// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_neighbor_address_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrRouterBgpNeighborAddressFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPaddress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_neighbor_address_family#address DataIosxrRouterBgpNeighborAddressFamily#address}
  */
  readonly address: string;
  /**
  * Enter Address Family command mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_neighbor_address_family#af_name DataIosxrRouterBgpNeighborAddressFamily#af_name}
  */
  readonly afName: string;
  /**
  * bgp as-number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_neighbor_address_family#as_number DataIosxrRouterBgpNeighborAddressFamily#as_number}
  */
  readonly asNumber: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_neighbor_address_family#device DataIosxrRouterBgpNeighborAddressFamily#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_neighbor_address_family iosxr_router_bgp_neighbor_address_family}
*/
export class DataIosxrRouterBgpNeighborAddressFamily extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_bgp_neighbor_address_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrRouterBgpNeighborAddressFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrRouterBgpNeighborAddressFamily to import
  * @param importFromId The id of the existing DataIosxrRouterBgpNeighborAddressFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_neighbor_address_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrRouterBgpNeighborAddressFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_bgp_neighbor_address_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/router_bgp_neighbor_address_family iosxr_router_bgp_neighbor_address_family} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrRouterBgpNeighborAddressFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrRouterBgpNeighborAddressFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_bgp_neighbor_address_family',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
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
    this._device = config.device;
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

  // advertise_vpnv4_unicast - computed: true, optional: false, required: false
  public get advertiseVpnv4Unicast() {
    return this.getBooleanAttribute('advertise_vpnv4_unicast');
  }

  // advertise_vpnv4_unicast_re_originated - computed: true, optional: false, required: false
  public get advertiseVpnv4UnicastReOriginated() {
    return this.getBooleanAttribute('advertise_vpnv4_unicast_re_originated');
  }

  // advertise_vpnv4_unicast_re_originated_stitching_rt - computed: true, optional: false, required: false
  public get advertiseVpnv4UnicastReOriginatedStitchingRt() {
    return this.getBooleanAttribute('advertise_vpnv4_unicast_re_originated_stitching_rt');
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

  // default_originate - computed: true, optional: false, required: false
  public get defaultOriginate() {
    return this.getBooleanAttribute('default_originate');
  }

  // default_originate_inheritance_disable - computed: true, optional: false, required: false
  public get defaultOriginateInheritanceDisable() {
    return this.getBooleanAttribute('default_originate_inheritance_disable');
  }

  // default_originate_route_policy - computed: true, optional: false, required: false
  public get defaultOriginateRoutePolicy() {
    return this.getStringAttribute('default_originate_route_policy');
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

  // encapsulation_type - computed: true, optional: false, required: false
  public get encapsulationType() {
    return this.getStringAttribute('encapsulation_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_re_originate - computed: true, optional: false, required: false
  public get importReOriginate() {
    return this.getBooleanAttribute('import_re_originate');
  }

  // import_stitching_rt - computed: true, optional: false, required: false
  public get importStitchingRt() {
    return this.getBooleanAttribute('import_stitching_rt');
  }

  // import_stitching_rt_re_originate - computed: true, optional: false, required: false
  public get importStitchingRtReOriginate() {
    return this.getBooleanAttribute('import_stitching_rt_re_originate');
  }

  // import_stitching_rt_re_originate_stitching_rt - computed: true, optional: false, required: false
  public get importStitchingRtReOriginateStitchingRt() {
    return this.getBooleanAttribute('import_stitching_rt_re_originate_stitching_rt');
  }

  // maximum_prefix_discard_extra_paths - computed: true, optional: false, required: false
  public get maximumPrefixDiscardExtraPaths() {
    return this.getBooleanAttribute('maximum_prefix_discard_extra_paths');
  }

  // maximum_prefix_limit - computed: true, optional: false, required: false
  public get maximumPrefixLimit() {
    return this.getNumberAttribute('maximum_prefix_limit');
  }

  // maximum_prefix_restart - computed: true, optional: false, required: false
  public get maximumPrefixRestart() {
    return this.getNumberAttribute('maximum_prefix_restart');
  }

  // maximum_prefix_threshold - computed: true, optional: false, required: false
  public get maximumPrefixThreshold() {
    return this.getNumberAttribute('maximum_prefix_threshold');
  }

  // maximum_prefix_warning_only - computed: true, optional: false, required: false
  public get maximumPrefixWarningOnly() {
    return this.getBooleanAttribute('maximum_prefix_warning_only');
  }

  // next_hop_self - computed: true, optional: false, required: false
  public get nextHopSelf() {
    return this.getBooleanAttribute('next_hop_self');
  }

  // next_hop_self_inheritance_disable - computed: true, optional: false, required: false
  public get nextHopSelfInheritanceDisable() {
    return this.getBooleanAttribute('next_hop_self_inheritance_disable');
  }

  // route_policy_in - computed: true, optional: false, required: false
  public get routePolicyIn() {
    return this.getStringAttribute('route_policy_in');
  }

  // route_policy_out - computed: true, optional: false, required: false
  public get routePolicyOut() {
    return this.getStringAttribute('route_policy_out');
  }

  // route_reflector_client - computed: true, optional: false, required: false
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }

  // route_reflector_client_inheritance_disable - computed: true, optional: false, required: false
  public get routeReflectorClientInheritanceDisable() {
    return this.getBooleanAttribute('route_reflector_client_inheritance_disable');
  }

  // send_community_ebgp - computed: true, optional: false, required: false
  public get sendCommunityEbgp() {
    return this.getBooleanAttribute('send_community_ebgp');
  }

  // send_community_ebgp_inheritance_disable - computed: true, optional: false, required: false
  public get sendCommunityEbgpInheritanceDisable() {
    return this.getBooleanAttribute('send_community_ebgp_inheritance_disable');
  }

  // soft_reconfiguration_inbound - computed: true, optional: false, required: false
  public get softReconfigurationInbound() {
    return this.getBooleanAttribute('soft_reconfiguration_inbound');
  }

  // soft_reconfiguration_inbound_always - computed: true, optional: false, required: false
  public get softReconfigurationInboundAlways() {
    return this.getBooleanAttribute('soft_reconfiguration_inbound_always');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      af_name: cdktf.stringToTerraform(this._afName),
      as_number: cdktf.stringToTerraform(this._asNumber),
      device: cdktf.stringToTerraform(this._device),
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
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
