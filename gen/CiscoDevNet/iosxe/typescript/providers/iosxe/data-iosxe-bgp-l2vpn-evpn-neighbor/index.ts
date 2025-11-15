// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/bgp_l2vpn_evpn_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeBgpL2VpnEvpnNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/bgp_l2vpn_evpn_neighbor#asn DataIosxeBgpL2VpnEvpnNeighbor#asn}
  */
  readonly asn: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/bgp_l2vpn_evpn_neighbor#device DataIosxeBgpL2VpnEvpnNeighbor#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/bgp_l2vpn_evpn_neighbor#ip DataIosxeBgpL2VpnEvpnNeighbor#ip}
  */
  readonly ip: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/bgp_l2vpn_evpn_neighbor iosxe_bgp_l2vpn_evpn_neighbor}
*/
export class DataIosxeBgpL2VpnEvpnNeighbor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_l2vpn_evpn_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeBgpL2VpnEvpnNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeBgpL2VpnEvpnNeighbor to import
  * @param importFromId The id of the existing DataIosxeBgpL2VpnEvpnNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/bgp_l2vpn_evpn_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeBgpL2VpnEvpnNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_l2vpn_evpn_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.2/docs/data-sources/bgp_l2vpn_evpn_neighbor iosxe_bgp_l2vpn_evpn_neighbor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeBgpL2VpnEvpnNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeBgpL2VpnEvpnNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_l2vpn_evpn_neighbor',
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
    this._device = config.device;
    this._ip = config.ip;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate - computed: true, optional: false, required: false
  public get activate() {
    return this.getBooleanAttribute('activate');
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

  // route_reflector_client - computed: true, optional: false, required: false
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }

  // send_community - computed: true, optional: false, required: false
  public get sendCommunity() {
    return this.getStringAttribute('send_community');
  }

  // soft_reconfiguration - computed: true, optional: false, required: false
  public get softReconfiguration() {
    return this.getStringAttribute('soft_reconfiguration');
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
