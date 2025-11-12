// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Peer address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#address BgpPeer#address}
  */
  readonly address: string;
  /**
  * Autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#asn BgpPeer#asn}
  */
  readonly asn: string;
  /**
  * Peer description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#description BgpPeer#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#device BgpPeer#device}
  */
  readonly device?: string;
  /**
  * eBGP Multihop TTL
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#ebgp_multihop_ttl BgpPeer#ebgp_multihop_ttl}
  */
  readonly ebgpMultihopTtl?: number;
  /**
  * BGP Hold Timer in seconds. The value must be greater than the keepalive timer
  *   - Range: `3`-`3600`
  *   - Default value: `180`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#hold_time BgpPeer#hold_time}
  */
  readonly holdTime?: number;
  /**
  * BGP Keepalive Timer in seconds
  *   - Range: `0`-`3600`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#keepalive BgpPeer#keepalive}
  */
  readonly keepalive?: number;
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#password BgpPeer#password}
  */
  readonly password?: string;
  /**
  * Password Encryption Type.
  *   - Choices: `0`, `3`, `LINE`, `7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#password_type BgpPeer#password_type}
  */
  readonly passwordType?: string;
  /**
  * Peer Controls. Choices: `bfd`, `dis-conn-check`, `cap-neg-off`, `no-dyn-cap`. Can be an empty string. Allowed formats:
  *   - Single value. Example: `bfd`
  *   - Multiple values (comma-separated). Example: `bfd,dis-conn-check`. In this case values must be in alphabetical order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#peer_control BgpPeer#peer_control}
  */
  readonly peerControl?: string;
  /**
  * Peer template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#peer_template BgpPeer#peer_template}
  */
  readonly peerTemplate?: string;
  /**
  * Neighbor Fabric Type.
  *   - Choices: `fabric-internal`, `fabric-external`, `fabric-border-leaf`
  *   - Default value: `fabric-internal`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#peer_type BgpPeer#peer_type}
  */
  readonly peerType?: string;
  /**
  * Peer autonomous system number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#remote_asn BgpPeer#remote_asn}
  */
  readonly remoteAsn?: string;
  /**
  * Source Interface. Must match first field in the output of `show intf brief`.
  *   - Default value: `unspecified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#source_interface BgpPeer#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * VRF name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#vrf BgpPeer#vrf}
  */
  readonly vrf: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer nxos_bgp_peer}
*/
export class BgpPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_bgp_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpPeer to import
  * @param importFromId The id of the existing BgpPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_bgp_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/bgp_peer nxos_bgp_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpPeerConfig
  */
  public constructor(scope: Construct, id: string, config: BgpPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_bgp_peer',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10',
        providerVersionConstraint: '0.5.10'
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
    this._asn = config.asn;
    this._description = config.description;
    this._device = config.device;
    this._ebgpMultihopTtl = config.ebgpMultihopTtl;
    this._holdTime = config.holdTime;
    this._keepalive = config.keepalive;
    this._password = config.password;
    this._passwordType = config.passwordType;
    this._peerControl = config.peerControl;
    this._peerTemplate = config.peerTemplate;
    this._peerType = config.peerType;
    this._remoteAsn = config.remoteAsn;
    this._sourceInterface = config.sourceInterface;
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // ebgp_multihop_ttl - computed: false, optional: true, required: false
  private _ebgpMultihopTtl?: number; 
  public get ebgpMultihopTtl() {
    return this.getNumberAttribute('ebgp_multihop_ttl');
  }
  public set ebgpMultihopTtl(value: number) {
    this._ebgpMultihopTtl = value;
  }
  public resetEbgpMultihopTtl() {
    this._ebgpMultihopTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpMultihopTtlInput() {
    return this._ebgpMultihopTtl;
  }

  // hold_time - computed: true, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keepalive - computed: true, optional: true, required: false
  private _keepalive?: number; 
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }
  public set keepalive(value: number) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_type - computed: false, optional: true, required: false
  private _passwordType?: string; 
  public get passwordType() {
    return this.getStringAttribute('password_type');
  }
  public set passwordType(value: string) {
    this._passwordType = value;
  }
  public resetPasswordType() {
    this._passwordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordTypeInput() {
    return this._passwordType;
  }

  // peer_control - computed: false, optional: true, required: false
  private _peerControl?: string; 
  public get peerControl() {
    return this.getStringAttribute('peer_control');
  }
  public set peerControl(value: string) {
    this._peerControl = value;
  }
  public resetPeerControl() {
    this._peerControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerControlInput() {
    return this._peerControl;
  }

  // peer_template - computed: false, optional: true, required: false
  private _peerTemplate?: string; 
  public get peerTemplate() {
    return this.getStringAttribute('peer_template');
  }
  public set peerTemplate(value: string) {
    this._peerTemplate = value;
  }
  public resetPeerTemplate() {
    this._peerTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTemplateInput() {
    return this._peerTemplate;
  }

  // peer_type - computed: true, optional: true, required: false
  private _peerType?: string; 
  public get peerType() {
    return this.getStringAttribute('peer_type');
  }
  public set peerType(value: string) {
    this._peerType = value;
  }
  public resetPeerType() {
    this._peerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerTypeInput() {
    return this._peerType;
  }

  // remote_asn - computed: false, optional: true, required: false
  private _remoteAsn?: string; 
  public get remoteAsn() {
    return this.getStringAttribute('remote_asn');
  }
  public set remoteAsn(value: string) {
    this._remoteAsn = value;
  }
  public resetRemoteAsn() {
    this._remoteAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsnInput() {
    return this._remoteAsn;
  }

  // source_interface - computed: true, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
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
      asn: cdktf.stringToTerraform(this._asn),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      ebgp_multihop_ttl: cdktf.numberToTerraform(this._ebgpMultihopTtl),
      hold_time: cdktf.numberToTerraform(this._holdTime),
      keepalive: cdktf.numberToTerraform(this._keepalive),
      password: cdktf.stringToTerraform(this._password),
      password_type: cdktf.stringToTerraform(this._passwordType),
      peer_control: cdktf.stringToTerraform(this._peerControl),
      peer_template: cdktf.stringToTerraform(this._peerTemplate),
      peer_type: cdktf.stringToTerraform(this._peerType),
      remote_asn: cdktf.stringToTerraform(this._remoteAsn),
      source_interface: cdktf.stringToTerraform(this._sourceInterface),
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
      asn: {
        value: cdktf.stringToHclTerraform(this._asn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      ebgp_multihop_ttl: {
        value: cdktf.numberToHclTerraform(this._ebgpMultihopTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hold_time: {
        value: cdktf.numberToHclTerraform(this._holdTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keepalive: {
        value: cdktf.numberToHclTerraform(this._keepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_type: {
        value: cdktf.stringToHclTerraform(this._passwordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_control: {
        value: cdktf.stringToHclTerraform(this._peerControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_template: {
        value: cdktf.stringToHclTerraform(this._peerTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_type: {
        value: cdktf.stringToHclTerraform(this._peerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_asn: {
        value: cdktf.stringToHclTerraform(this._remoteAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_interface: {
        value: cdktf.stringToHclTerraform(this._sourceInterface),
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
