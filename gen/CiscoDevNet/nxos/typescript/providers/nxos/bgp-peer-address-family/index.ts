// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_address_family
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpPeerAddressFamilyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Peer address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_address_family#address BgpPeerAddressFamily#address}
  */
  readonly address: string;
  /**
  * Address Family.
  *   - Choices: `ipv4-ucast`, `ipv4-mvpn`, `vpnv4-ucast`, `ipv6-ucast`, `vpnv6-ucast`, `l2vpn-evpn`, `lnkstate`
  *   - Default value: `ipv4-ucast`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_address_family#address_family BgpPeerAddressFamily#address_family}
  */
  readonly addressFamily: string;
  /**
  * Autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_address_family#asn BgpPeerAddressFamily#asn}
  */
  readonly asn: string;
  /**
  * Peer address-family control. Choices: `rr-client`, `nh-self`, `dis-peer-as-check`, `allow-self-as`, `default-originate`, `advertisement-interval`, `suppress-inactive`, `nh-self-all`. Can be an empty string. Allowed formats:
  *   - Single value. Example: `nh-self`
  *   - Multiple values (comma-separated). Example: `dis-peer-as-check,nh-self,rr-client,suppress-inactive`. In this case values must be in alphabetical order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_address_family#control BgpPeerAddressFamily#control}
  */
  readonly control?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_address_family#device BgpPeerAddressFamily#device}
  */
  readonly device?: string;
  /**
  * Send-community extended.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_address_family#send_community_extended BgpPeerAddressFamily#send_community_extended}
  */
  readonly sendCommunityExtended?: string;
  /**
  * Send-community standard.
  *   - Choices: `enabled`, `disabled`
  *   - Default value: `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_address_family#send_community_standard BgpPeerAddressFamily#send_community_standard}
  */
  readonly sendCommunityStandard?: string;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_address_family#vrf BgpPeerAddressFamily#vrf}
  */
  readonly vrf: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_address_family nxos_bgp_peer_address_family}
*/
export class BgpPeerAddressFamily extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_bgp_peer_address_family";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpPeerAddressFamily resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpPeerAddressFamily to import
  * @param importFromId The id of the existing BgpPeerAddressFamily that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_address_family#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpPeerAddressFamily to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_bgp_peer_address_family", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer_address_family nxos_bgp_peer_address_family} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpPeerAddressFamilyConfig
  */
  public constructor(scope: Construct, id: string, config: BgpPeerAddressFamilyConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_bgp_peer_address_family',
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
    this._addressFamily = config.addressFamily;
    this._asn = config.asn;
    this._control = config.control;
    this._device = config.device;
    this._sendCommunityExtended = config.sendCommunityExtended;
    this._sendCommunityStandard = config.sendCommunityStandard;
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

  // control - computed: false, optional: true, required: false
  private _control?: string; 
  public get control() {
    return this.getStringAttribute('control');
  }
  public set control(value: string) {
    this._control = value;
  }
  public resetControl() {
    this._control = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlInput() {
    return this._control;
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

  // send_community_extended - computed: true, optional: true, required: false
  private _sendCommunityExtended?: string; 
  public get sendCommunityExtended() {
    return this.getStringAttribute('send_community_extended');
  }
  public set sendCommunityExtended(value: string) {
    this._sendCommunityExtended = value;
  }
  public resetSendCommunityExtended() {
    this._sendCommunityExtended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityExtendedInput() {
    return this._sendCommunityExtended;
  }

  // send_community_standard - computed: true, optional: true, required: false
  private _sendCommunityStandard?: string; 
  public get sendCommunityStandard() {
    return this.getStringAttribute('send_community_standard');
  }
  public set sendCommunityStandard(value: string) {
    this._sendCommunityStandard = value;
  }
  public resetSendCommunityStandard() {
    this._sendCommunityStandard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityStandardInput() {
    return this._sendCommunityStandard;
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
      address_family: cdktf.stringToTerraform(this._addressFamily),
      asn: cdktf.stringToTerraform(this._asn),
      control: cdktf.stringToTerraform(this._control),
      device: cdktf.stringToTerraform(this._device),
      send_community_extended: cdktf.stringToTerraform(this._sendCommunityExtended),
      send_community_standard: cdktf.stringToTerraform(this._sendCommunityStandard),
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
      control: {
        value: cdktf.stringToHclTerraform(this._control),
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
      send_community_extended: {
        value: cdktf.stringToHclTerraform(this._sendCommunityExtended),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_community_standard: {
        value: cdktf.stringToHclTerraform(this._sendCommunityStandard),
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
