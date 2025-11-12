// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFabricvpnOverlaysAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays#bgp_neighbor SystemFabricvpnOverlaysA#bgp_neighbor}
  */
  readonly bgpNeighbor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays#bgp_neighbor_group SystemFabricvpnOverlaysA#bgp_neighbor_group}
  */
  readonly bgpNeighborGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays#bgp_neighbor_range SystemFabricvpnOverlaysA#bgp_neighbor_range}
  */
  readonly bgpNeighborRange?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays#bgp_network SystemFabricvpnOverlaysA#bgp_network}
  */
  readonly bgpNetwork?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays#device_name SystemFabricvpnOverlaysA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays#id SystemFabricvpnOverlaysA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays#interface SystemFabricvpnOverlaysA#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays#ipsec_phase1 SystemFabricvpnOverlaysA#ipsec_phase1}
  */
  readonly ipsecPhase1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays#name SystemFabricvpnOverlaysA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays#overlay_policy SystemFabricvpnOverlaysA#overlay_policy}
  */
  readonly overlayPolicy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays#overlay_tunnel_block SystemFabricvpnOverlaysA#overlay_tunnel_block}
  */
  readonly overlayTunnelBlock?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays#remote_gw SystemFabricvpnOverlaysA#remote_gw}
  */
  readonly remoteGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays#route_policy SystemFabricvpnOverlaysA#route_policy}
  */
  readonly routePolicy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays#sdwan_member SystemFabricvpnOverlaysA#sdwan_member}
  */
  readonly sdwanMember?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays fmgdevice_system_fabricvpn_overlays}
*/
export class SystemFabricvpnOverlaysA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_fabricvpn_overlays";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFabricvpnOverlaysA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFabricvpnOverlaysA to import
  * @param importFromId The id of the existing SystemFabricvpnOverlaysA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFabricvpnOverlaysA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_fabricvpn_overlays", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_fabricvpn_overlays fmgdevice_system_fabricvpn_overlays} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFabricvpnOverlaysAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemFabricvpnOverlaysAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_fabricvpn_overlays',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bgpNeighbor = config.bgpNeighbor;
    this._bgpNeighborGroup = config.bgpNeighborGroup;
    this._bgpNeighborRange = config.bgpNeighborRange;
    this._bgpNetwork = config.bgpNetwork;
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._interface = config.interface;
    this._ipsecPhase1 = config.ipsecPhase1;
    this._name = config.name;
    this._overlayPolicy = config.overlayPolicy;
    this._overlayTunnelBlock = config.overlayTunnelBlock;
    this._remoteGw = config.remoteGw;
    this._routePolicy = config.routePolicy;
    this._sdwanMember = config.sdwanMember;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_neighbor - computed: true, optional: true, required: false
  private _bgpNeighbor?: string[]; 
  public get bgpNeighbor() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_neighbor'));
  }
  public set bgpNeighbor(value: string[]) {
    this._bgpNeighbor = value;
  }
  public resetBgpNeighbor() {
    this._bgpNeighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNeighborInput() {
    return this._bgpNeighbor;
  }

  // bgp_neighbor_group - computed: true, optional: true, required: false
  private _bgpNeighborGroup?: string[]; 
  public get bgpNeighborGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_neighbor_group'));
  }
  public set bgpNeighborGroup(value: string[]) {
    this._bgpNeighborGroup = value;
  }
  public resetBgpNeighborGroup() {
    this._bgpNeighborGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNeighborGroupInput() {
    return this._bgpNeighborGroup;
  }

  // bgp_neighbor_range - computed: true, optional: true, required: false
  private _bgpNeighborRange?: string[]; 
  public get bgpNeighborRange() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_neighbor_range'));
  }
  public set bgpNeighborRange(value: string[]) {
    this._bgpNeighborRange = value;
  }
  public resetBgpNeighborRange() {
    this._bgpNeighborRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNeighborRangeInput() {
    return this._bgpNeighborRange;
  }

  // bgp_network - computed: true, optional: true, required: false
  private _bgpNetwork?: string[]; 
  public get bgpNetwork() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_network'));
  }
  public set bgpNetwork(value: string[]) {
    this._bgpNetwork = value;
  }
  public resetBgpNetwork() {
    this._bgpNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpNetworkInput() {
    return this._bgpNetwork;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ipsec_phase1 - computed: true, optional: true, required: false
  private _ipsecPhase1?: string[]; 
  public get ipsecPhase1() {
    return cdktf.Fn.tolist(this.getListAttribute('ipsec_phase1'));
  }
  public set ipsecPhase1(value: string[]) {
    this._ipsecPhase1 = value;
  }
  public resetIpsecPhase1() {
    this._ipsecPhase1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPhase1Input() {
    return this._ipsecPhase1;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // overlay_policy - computed: true, optional: true, required: false
  private _overlayPolicy?: string[]; 
  public get overlayPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('overlay_policy'));
  }
  public set overlayPolicy(value: string[]) {
    this._overlayPolicy = value;
  }
  public resetOverlayPolicy() {
    this._overlayPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayPolicyInput() {
    return this._overlayPolicy;
  }

  // overlay_tunnel_block - computed: true, optional: true, required: false
  private _overlayTunnelBlock?: string[]; 
  public get overlayTunnelBlock() {
    return this.getListAttribute('overlay_tunnel_block');
  }
  public set overlayTunnelBlock(value: string[]) {
    this._overlayTunnelBlock = value;
  }
  public resetOverlayTunnelBlock() {
    this._overlayTunnelBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayTunnelBlockInput() {
    return this._overlayTunnelBlock;
  }

  // remote_gw - computed: true, optional: true, required: false
  private _remoteGw?: string; 
  public get remoteGw() {
    return this.getStringAttribute('remote_gw');
  }
  public set remoteGw(value: string) {
    this._remoteGw = value;
  }
  public resetRemoteGw() {
    this._remoteGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwInput() {
    return this._remoteGw;
  }

  // route_policy - computed: true, optional: true, required: false
  private _routePolicy?: string[]; 
  public get routePolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('route_policy'));
  }
  public set routePolicy(value: string[]) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }

  // sdwan_member - computed: true, optional: true, required: false
  private _sdwanMember?: string[]; 
  public get sdwanMember() {
    return cdktf.Fn.tolist(this.getListAttribute('sdwan_member'));
  }
  public set sdwanMember(value: string[]) {
    this._sdwanMember = value;
  }
  public resetSdwanMember() {
    this._sdwanMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanMemberInput() {
    return this._sdwanMember;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bgp_neighbor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bgpNeighbor),
      bgp_neighbor_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bgpNeighborGroup),
      bgp_neighbor_range: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bgpNeighborRange),
      bgp_network: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bgpNetwork),
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      ipsec_phase1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipsecPhase1),
      name: cdktf.stringToTerraform(this._name),
      overlay_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._overlayPolicy),
      overlay_tunnel_block: cdktf.listMapper(cdktf.stringToTerraform, false)(this._overlayTunnelBlock),
      remote_gw: cdktf.stringToTerraform(this._remoteGw),
      route_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routePolicy),
      sdwan_member: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sdwanMember),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_neighbor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bgpNeighbor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bgp_neighbor_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bgpNeighborGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bgp_neighbor_range: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bgpNeighborRange),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bgp_network: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bgpNetwork),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipsec_phase1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipsecPhase1),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overlay_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._overlayPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      overlay_tunnel_block: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._overlayTunnelBlock),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote_gw: {
        value: cdktf.stringToHclTerraform(this._remoteGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routePolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sdwan_member: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sdwanMember),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
