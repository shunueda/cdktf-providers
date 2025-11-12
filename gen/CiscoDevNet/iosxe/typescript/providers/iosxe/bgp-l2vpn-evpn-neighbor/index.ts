// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bgp_l2vpn_evpn_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpL2VpnEvpnNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable the address family for this neighbor
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bgp_l2vpn_evpn_neighbor#activate BgpL2VpnEvpnNeighbor#activate}
  */
  readonly activate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bgp_l2vpn_evpn_neighbor#asn BgpL2VpnEvpnNeighbor#asn}
  */
  readonly asn: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bgp_l2vpn_evpn_neighbor#delete_mode BgpL2VpnEvpnNeighbor#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bgp_l2vpn_evpn_neighbor#device BgpL2VpnEvpnNeighbor#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bgp_l2vpn_evpn_neighbor#ip BgpL2VpnEvpnNeighbor#ip}
  */
  readonly ip: string;
  /**
  * Configure a neighbor as Route Reflector client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bgp_l2vpn_evpn_neighbor#route_reflector_client BgpL2VpnEvpnNeighbor#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * 
  *   - Choices: `both`, `extended`, `standard`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bgp_l2vpn_evpn_neighbor#send_community BgpL2VpnEvpnNeighbor#send_community}
  */
  readonly sendCommunity?: string;
  /**
  * Per neighbor soft reconfiguration
  *   - Choices: `inbound`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bgp_l2vpn_evpn_neighbor#soft_reconfiguration BgpL2VpnEvpnNeighbor#soft_reconfiguration}
  */
  readonly softReconfiguration?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bgp_l2vpn_evpn_neighbor iosxe_bgp_l2vpn_evpn_neighbor}
*/
export class BgpL2VpnEvpnNeighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bgp_l2vpn_evpn_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpL2VpnEvpnNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpL2VpnEvpnNeighbor to import
  * @param importFromId The id of the existing BgpL2VpnEvpnNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bgp_l2vpn_evpn_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpL2VpnEvpnNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bgp_l2vpn_evpn_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/bgp_l2vpn_evpn_neighbor iosxe_bgp_l2vpn_evpn_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpL2VpnEvpnNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: BgpL2VpnEvpnNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bgp_l2vpn_evpn_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activate = config.activate;
    this._asn = config.asn;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._ip = config.ip;
    this._routeReflectorClient = config.routeReflectorClient;
    this._sendCommunity = config.sendCommunity;
    this._softReconfiguration = config.softReconfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate - computed: true, optional: true, required: false
  private _activate?: boolean | cdktf.IResolvable; 
  public get activate() {
    return this.getBooleanAttribute('activate');
  }
  public set activate(value: boolean | cdktf.IResolvable) {
    this._activate = value;
  }
  public resetActivate() {
    this._activate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInput() {
    return this._activate;
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

  // send_community - computed: false, optional: true, required: false
  private _sendCommunity?: string; 
  public get sendCommunity() {
    return this.getStringAttribute('send_community');
  }
  public set sendCommunity(value: string) {
    this._sendCommunity = value;
  }
  public resetSendCommunity() {
    this._sendCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity;
  }

  // soft_reconfiguration - computed: false, optional: true, required: false
  private _softReconfiguration?: string; 
  public get softReconfiguration() {
    return this.getStringAttribute('soft_reconfiguration');
  }
  public set softReconfiguration(value: string) {
    this._softReconfiguration = value;
  }
  public resetSoftReconfiguration() {
    this._softReconfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigurationInput() {
    return this._softReconfiguration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activate: cdktf.booleanToTerraform(this._activate),
      asn: cdktf.stringToTerraform(this._asn),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      ip: cdktf.stringToTerraform(this._ip),
      route_reflector_client: cdktf.booleanToTerraform(this._routeReflectorClient),
      send_community: cdktf.stringToTerraform(this._sendCommunity),
      soft_reconfiguration: cdktf.stringToTerraform(this._softReconfiguration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activate: {
        value: cdktf.booleanToHclTerraform(this._activate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
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
      send_community: {
        value: cdktf.stringToHclTerraform(this._sendCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_reconfiguration: {
        value: cdktf.stringToHclTerraform(this._softReconfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
