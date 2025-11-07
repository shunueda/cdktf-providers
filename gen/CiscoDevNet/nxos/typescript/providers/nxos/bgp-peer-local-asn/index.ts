// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_local_asn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpPeerLocalAsnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Peer address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_local_asn#address BgpPeerLocalAsn#address}
  */
  readonly address: string;
  /**
  * ASN Propagation.
  *   - Choices: `none`, `no-prepend`, `replace-as`, `dual-as`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_local_asn#asn_propagation BgpPeerLocalAsn#asn_propagation}
  */
  readonly asnPropagation?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_local_asn#device BgpPeerLocalAsn#device}
  */
  readonly device?: string;
  /**
  * Local Autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_local_asn#local_asn BgpPeerLocalAsn#local_asn}
  */
  readonly localAsn: string;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_local_asn#vrf BgpPeerLocalAsn#vrf}
  */
  readonly vrf: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_local_asn nxos_bgp_peer_local_asn}
*/
export class BgpPeerLocalAsn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_bgp_peer_local_asn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpPeerLocalAsn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpPeerLocalAsn to import
  * @param importFromId The id of the existing BgpPeerLocalAsn that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_local_asn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpPeerLocalAsn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_bgp_peer_local_asn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_local_asn nxos_bgp_peer_local_asn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpPeerLocalAsnConfig
  */
  public constructor(scope: Construct, id: string, config: BgpPeerLocalAsnConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_bgp_peer_local_asn',
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
    this._address = config.address;
    this._asnPropagation = config.asnPropagation;
    this._device = config.device;
    this._localAsn = config.localAsn;
    this._vrf = config.vrf;
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

  // asn_propagation - computed: true, optional: true, required: false
  private _asnPropagation?: string; 
  public get asnPropagation() {
    return this.getStringAttribute('asn_propagation');
  }
  public set asnPropagation(value: string) {
    this._asnPropagation = value;
  }
  public resetAsnPropagation() {
    this._asnPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnPropagationInput() {
    return this._asnPropagation;
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

  // local_asn - computed: false, optional: false, required: true
  private _localAsn?: string; 
  public get localAsn() {
    return this.getStringAttribute('local_asn');
  }
  public set localAsn(value: string) {
    this._localAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnInput() {
    return this._localAsn;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      asn_propagation: cdktf.stringToTerraform(this._asnPropagation),
      device: cdktf.stringToTerraform(this._device),
      local_asn: cdktf.stringToTerraform(this._localAsn),
      vrf: cdktf.stringToTerraform(this._vrf),
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
      asn_propagation: {
        value: cdktf.stringToHclTerraform(this._asnPropagation),
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
      local_asn: {
        value: cdktf.stringToHclTerraform(this._localAsn),
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
