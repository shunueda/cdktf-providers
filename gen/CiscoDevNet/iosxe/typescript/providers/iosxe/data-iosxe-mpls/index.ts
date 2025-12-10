// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/mpls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeMplsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/mpls#device DataIosxeMpls#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/mpls iosxe_mpls}
*/
export class DataIosxeMpls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_mpls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeMpls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeMpls to import
  * @param importFromId The id of the existing DataIosxeMpls that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/mpls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeMpls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_mpls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/data-sources/mpls iosxe_mpls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeMplsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeMplsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_mpls',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // label_mode_all_vrfs_all_afs_per_ce - computed: true, optional: false, required: false
  public get labelModeAllVrfsAllAfsPerCe() {
    return this.getBooleanAttribute('label_mode_all_vrfs_all_afs_per_ce');
  }

  // label_mode_all_vrfs_all_afs_per_prefix - computed: true, optional: false, required: false
  public get labelModeAllVrfsAllAfsPerPrefix() {
    return this.getBooleanAttribute('label_mode_all_vrfs_all_afs_per_prefix');
  }

  // label_mode_all_vrfs_all_afs_per_vrf - computed: true, optional: false, required: false
  public get labelModeAllVrfsAllAfsPerVrf() {
    return this.getBooleanAttribute('label_mode_all_vrfs_all_afs_per_vrf');
  }

  // label_mode_all_vrfs_all_afs_vrf_conn_aggr - computed: true, optional: false, required: false
  public get labelModeAllVrfsAllAfsVrfConnAggr() {
    return this.getBooleanAttribute('label_mode_all_vrfs_all_afs_vrf_conn_aggr');
  }

  // label_mode_all_vrfs_bgp_vpnv4_per_ce - computed: true, optional: false, required: false
  public get labelModeAllVrfsBgpVpnv4PerCe() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv4_per_ce');
  }

  // label_mode_all_vrfs_bgp_vpnv4_per_prefix - computed: true, optional: false, required: false
  public get labelModeAllVrfsBgpVpnv4PerPrefix() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv4_per_prefix');
  }

  // label_mode_all_vrfs_bgp_vpnv4_per_vrf - computed: true, optional: false, required: false
  public get labelModeAllVrfsBgpVpnv4PerVrf() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv4_per_vrf');
  }

  // label_mode_all_vrfs_bgp_vpnv4_vrf_conn_aggr - computed: true, optional: false, required: false
  public get labelModeAllVrfsBgpVpnv4VrfConnAggr() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv4_vrf_conn_aggr');
  }

  // label_mode_all_vrfs_bgp_vpnv6_per_ce - computed: true, optional: false, required: false
  public get labelModeAllVrfsBgpVpnv6PerCe() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv6_per_ce');
  }

  // label_mode_all_vrfs_bgp_vpnv6_per_prefix - computed: true, optional: false, required: false
  public get labelModeAllVrfsBgpVpnv6PerPrefix() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv6_per_prefix');
  }

  // label_mode_all_vrfs_bgp_vpnv6_per_vrf - computed: true, optional: false, required: false
  public get labelModeAllVrfsBgpVpnv6PerVrf() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv6_per_vrf');
  }

  // label_mode_all_vrfs_bgp_vpnv6_vrf_conn_aggr - computed: true, optional: false, required: false
  public get labelModeAllVrfsBgpVpnv6VrfConnAggr() {
    return this.getBooleanAttribute('label_mode_all_vrfs_bgp_vpnv6_vrf_conn_aggr');
  }

  // label_protocol - computed: true, optional: false, required: false
  public get labelProtocol() {
    return this.getStringAttribute('label_protocol');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
