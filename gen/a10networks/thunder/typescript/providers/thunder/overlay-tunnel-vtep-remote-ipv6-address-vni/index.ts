// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address_vni
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OverlayTunnelVtepRemoteIpv6AddressVniConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address_vni#id OverlayTunnelVtepRemoteIpv6AddressVni#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Id1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address_vni#id1 OverlayTunnelVtepRemoteIpv6AddressVni#id1}
  */
  readonly id1: string;
  /**
  * Ipv6Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address_vni#ipv6_address OverlayTunnelVtepRemoteIpv6AddressVni#ipv6_address}
  */
  readonly ipv6Address: string;
  /**
  * VNI configured for the remote VTEP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address_vni#segment OverlayTunnelVtepRemoteIpv6AddressVni#segment}
  */
  readonly segment: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address_vni#uuid OverlayTunnelVtepRemoteIpv6AddressVni#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address_vni thunder_overlay_tunnel_vtep_remote_ipv6_address_vni}
*/
export class OverlayTunnelVtepRemoteIpv6AddressVni extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_overlay_tunnel_vtep_remote_ipv6_address_vni";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OverlayTunnelVtepRemoteIpv6AddressVni resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OverlayTunnelVtepRemoteIpv6AddressVni to import
  * @param importFromId The id of the existing OverlayTunnelVtepRemoteIpv6AddressVni that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address_vni#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OverlayTunnelVtepRemoteIpv6AddressVni to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_overlay_tunnel_vtep_remote_ipv6_address_vni", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_remote_ipv6_address_vni thunder_overlay_tunnel_vtep_remote_ipv6_address_vni} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OverlayTunnelVtepRemoteIpv6AddressVniConfig
  */
  public constructor(scope: Construct, id: string, config: OverlayTunnelVtepRemoteIpv6AddressVniConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_overlay_tunnel_vtep_remote_ipv6_address_vni',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._ipv6Address = config.ipv6Address;
    this._segment = config.segment;
    this._uuid = config.uuid;
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

  // ipv6_address - computed: false, optional: false, required: true
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // segment - computed: false, optional: false, required: true
  private _segment?: number; 
  public get segment() {
    return this.getNumberAttribute('segment');
  }
  public set segment(value: number) {
    this._segment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      id1: cdktf.stringToTerraform(this._id1),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      segment: cdktf.numberToTerraform(this._segment),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment: {
        value: cdktf.numberToHclTerraform(this._segment),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
