// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OverlayTunnelVtepHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep_host#id OverlayTunnelVtepHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Id1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep_host#id1 OverlayTunnelVtepHost#id1}
  */
  readonly id1: string;
  /**
  * IPv4 address of the overlay host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep_host#ip_addr OverlayTunnelVtepHost#ip_addr}
  */
  readonly ipAddr: string;
  /**
  * MAC Address of the overlay host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep_host#overlay_mac_addr OverlayTunnelVtepHost#overlay_mac_addr}
  */
  readonly overlayMacAddr: string;
  /**
  * Configure the VTEP IP address (IPv4 address of the VTEP for the remote host)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep_host#remote_vtep OverlayTunnelVtepHost#remote_vtep}
  */
  readonly remoteVtep: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep_host#uuid OverlayTunnelVtepHost#uuid}
  */
  readonly uuid?: string;
  /**
  * Configure the segment id ( VNI of the remote host)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep_host#vni OverlayTunnelVtepHost#vni}
  */
  readonly vni: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep_host thunder_overlay_tunnel_vtep_host}
*/
export class OverlayTunnelVtepHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_overlay_tunnel_vtep_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OverlayTunnelVtepHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OverlayTunnelVtepHost to import
  * @param importFromId The id of the existing OverlayTunnelVtepHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OverlayTunnelVtepHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_overlay_tunnel_vtep_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/overlay_tunnel_vtep_host thunder_overlay_tunnel_vtep_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OverlayTunnelVtepHostConfig
  */
  public constructor(scope: Construct, id: string, config: OverlayTunnelVtepHostConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_overlay_tunnel_vtep_host',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._id1 = config.id1;
    this._ipAddr = config.ipAddr;
    this._overlayMacAddr = config.overlayMacAddr;
    this._remoteVtep = config.remoteVtep;
    this._uuid = config.uuid;
    this._vni = config.vni;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id1 - computed: false, optional: false, required: true
  private _id1?: string; 
  public get id1() {
    return this.getStringAttribute('id1');
  }
  public set id1(value: string) {
    this._id1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // overlay_mac_addr - computed: false, optional: false, required: true
  private _overlayMacAddr?: string; 
  public get overlayMacAddr() {
    return this.getStringAttribute('overlay_mac_addr');
  }
  public set overlayMacAddr(value: string) {
    this._overlayMacAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayMacAddrInput() {
    return this._overlayMacAddr;
  }

  // remote_vtep - computed: false, optional: false, required: true
  private _remoteVtep?: string; 
  public get remoteVtep() {
    return this.getStringAttribute('remote_vtep');
  }
  public set remoteVtep(value: string) {
    this._remoteVtep = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVtepInput() {
    return this._remoteVtep;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vni - computed: false, optional: false, required: true
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      id1: cdktf.stringToTerraform(this._id1),
      ip_addr: cdktf.stringToTerraform(this._ipAddr),
      overlay_mac_addr: cdktf.stringToTerraform(this._overlayMacAddr),
      remote_vtep: cdktf.stringToTerraform(this._remoteVtep),
      uuid: cdktf.stringToTerraform(this._uuid),
      vni: cdktf.numberToTerraform(this._vni),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id1: {
        value: cdktf.stringToHclTerraform(this._id1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_addr: {
        value: cdktf.stringToHclTerraform(this._ipAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overlay_mac_addr: {
        value: cdktf.stringToHclTerraform(this._overlayMacAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_vtep: {
        value: cdktf.stringToHclTerraform(this._remoteVtep),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vni: {
        value: cdktf.numberToHclTerraform(this._vni),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
