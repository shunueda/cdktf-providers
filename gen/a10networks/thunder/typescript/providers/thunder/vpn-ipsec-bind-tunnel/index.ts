// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ipsec_bind_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnIpsecBindTunnelAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ipsec_bind_tunnel#id VpnIpsecBindTunnelA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ipsec_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ipsec_bind_tunnel#ipsec_name VpnIpsecBindTunnelA#ipsec_name}
  */
  readonly ipsecName: string;
  /**
  * IPsec Next Hop IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ipsec_bind_tunnel#next_hop VpnIpsecBindTunnelA#next_hop}
  */
  readonly nextHop?: string;
  /**
  * IPsec Next Hop IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ipsec_bind_tunnel#next_hop_v6 VpnIpsecBindTunnelA#next_hop_v6}
  */
  readonly nextHopV6?: string;
  /**
  * Tunnel interface index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ipsec_bind_tunnel#tunnel VpnIpsecBindTunnelA#tunnel}
  */
  readonly tunnel?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ipsec_bind_tunnel#uuid VpnIpsecBindTunnelA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ipsec_bind_tunnel thunder_vpn_ipsec_bind_tunnel}
*/
export class VpnIpsecBindTunnelA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_ipsec_bind_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnIpsecBindTunnelA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnIpsecBindTunnelA to import
  * @param importFromId The id of the existing VpnIpsecBindTunnelA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ipsec_bind_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnIpsecBindTunnelA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_ipsec_bind_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vpn_ipsec_bind_tunnel thunder_vpn_ipsec_bind_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnIpsecBindTunnelAConfig
  */
  public constructor(scope: Construct, id: string, config: VpnIpsecBindTunnelAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_ipsec_bind_tunnel',
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
    this._ipsecName = config.ipsecName;
    this._nextHop = config.nextHop;
    this._nextHopV6 = config.nextHopV6;
    this._tunnel = config.tunnel;
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

  // ipsec_name - computed: false, optional: false, required: true
  private _ipsecName?: string; 
  public get ipsecName() {
    return this.getStringAttribute('ipsec_name');
  }
  public set ipsecName(value: string) {
    this._ipsecName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecNameInput() {
    return this._ipsecName;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // next_hop_v6 - computed: false, optional: true, required: false
  private _nextHopV6?: string; 
  public get nextHopV6() {
    return this.getStringAttribute('next_hop_v6');
  }
  public set nextHopV6(value: string) {
    this._nextHopV6 = value;
  }
  public resetNextHopV6() {
    this._nextHopV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopV6Input() {
    return this._nextHopV6;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel?: number; 
  public get tunnel() {
    return this.getNumberAttribute('tunnel');
  }
  public set tunnel(value: number) {
    this._tunnel = value;
  }
  public resetTunnel() {
    this._tunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel;
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
      ipsec_name: cdktf.stringToTerraform(this._ipsecName),
      next_hop: cdktf.stringToTerraform(this._nextHop),
      next_hop_v6: cdktf.stringToTerraform(this._nextHopV6),
      tunnel: cdktf.numberToTerraform(this._tunnel),
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
      ipsec_name: {
        value: cdktf.stringToHclTerraform(this._ipsecName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop: {
        value: cdktf.stringToHclTerraform(this._nextHop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_v6: {
        value: cdktf.stringToHclTerraform(this._nextHopV6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel: {
        value: cdktf.numberToHclTerraform(this._tunnel),
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
