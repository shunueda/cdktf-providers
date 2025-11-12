// https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/interface_wireguard_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceWireguardPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of IP (v4 or v6) addresses with CIDR masks from which incoming traffic for this peer is allowed and to which outgoing traffic for this peer is directed. The catch-all 0.0.0.0/0 may be specified for matching all IPv4 addresses, and ::/0 may be specified for matching all IPv6 addresses. Default: `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/interface_wireguard_peer#allowed_address InterfaceWireguardPeer#allowed_address}
  */
  readonly allowedAddress?: string;
  /**
  * Short description of the peer. Default: `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/interface_wireguard_peer#comment InterfaceWireguardPeer#comment}
  */
  readonly comment?: string;
  /**
  * Boolean for whether or not the interface peer is disabled. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/interface_wireguard_peer#disabled InterfaceWireguardPeer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * An endpoint IP or hostname can be left blank to allow remote connection from any address. Default: `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/interface_wireguard_peer#endpoint_address InterfaceWireguardPeer#endpoint_address}
  */
  readonly endpointAddress?: string;
  /**
  * An endpoint port can be left blank to allow remote connection from any port. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/interface_wireguard_peer#endpoint_port InterfaceWireguardPeer#endpoint_port}
  */
  readonly endpointPort?: number;
  /**
  * Name of the WireGuard interface the peer belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/interface_wireguard_peer#interface InterfaceWireguardPeer#interface}
  */
  readonly interface: string;
  /**
  * A seconds interval, between 1 and 65535 inclusive, of how often to send an authenticated empty packet to the peer for the purpose of keeping a stateful firewall or NAT mapping valid persistently. For example, if the interface very rarely sends traffic, but it might at anytime receive traffic from a peer, and it is behind NAT, the interface might benefit from having a persistent keepalive interval of 25 seconds. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/interface_wireguard_peer#persistent_keepalive InterfaceWireguardPeer#persistent_keepalive}
  */
  readonly persistentKeepalive?: number;
  /**
  * A base64 preshared key. Optional, and may be omitted. This option adds an additional layer of symmetric-key cryptography to be mixed into the already existing public-key cryptography, for post-quantum resistance. Default: `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/interface_wireguard_peer#preshared_key InterfaceWireguardPeer#preshared_key}
  */
  readonly presharedKey?: string;
  /**
  * The remote peer's calculated public key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/interface_wireguard_peer#public_key InterfaceWireguardPeer#public_key}
  */
  readonly publicKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/interface_wireguard_peer mikrotik_interface_wireguard_peer}
*/
export class InterfaceWireguardPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mikrotik_interface_wireguard_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceWireguardPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceWireguardPeer to import
  * @param importFromId The id of the existing InterfaceWireguardPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/interface_wireguard_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceWireguardPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mikrotik_interface_wireguard_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ddelnano/mikrotik/0.16.1/docs/resources/interface_wireguard_peer mikrotik_interface_wireguard_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceWireguardPeerConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceWireguardPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'mikrotik_interface_wireguard_peer',
      terraformGeneratorMetadata: {
        providerName: 'mikrotik',
        providerVersion: '0.16.1',
        providerVersionConstraint: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedAddress = config.allowedAddress;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._endpointAddress = config.endpointAddress;
    this._endpointPort = config.endpointPort;
    this._interface = config.interface;
    this._persistentKeepalive = config.persistentKeepalive;
    this._presharedKey = config.presharedKey;
    this._publicKey = config.publicKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_address - computed: true, optional: true, required: false
  private _allowedAddress?: string; 
  public get allowedAddress() {
    return this.getStringAttribute('allowed_address');
  }
  public set allowedAddress(value: string) {
    this._allowedAddress = value;
  }
  public resetAllowedAddress() {
    this._allowedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAddressInput() {
    return this._allowedAddress;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // endpoint_address - computed: true, optional: true, required: false
  private _endpointAddress?: string; 
  public get endpointAddress() {
    return this.getStringAttribute('endpoint_address');
  }
  public set endpointAddress(value: string) {
    this._endpointAddress = value;
  }
  public resetEndpointAddress() {
    this._endpointAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointAddressInput() {
    return this._endpointAddress;
  }

  // endpoint_port - computed: true, optional: true, required: false
  private _endpointPort?: number; 
  public get endpointPort() {
    return this.getNumberAttribute('endpoint_port');
  }
  public set endpointPort(value: number) {
    this._endpointPort = value;
  }
  public resetEndpointPort() {
    this._endpointPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointPortInput() {
    return this._endpointPort;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // persistent_keepalive - computed: true, optional: true, required: false
  private _persistentKeepalive?: number; 
  public get persistentKeepalive() {
    return this.getNumberAttribute('persistent_keepalive');
  }
  public set persistentKeepalive(value: number) {
    this._persistentKeepalive = value;
  }
  public resetPersistentKeepalive() {
    this._persistentKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentKeepaliveInput() {
    return this._persistentKeepalive;
  }

  // preshared_key - computed: true, optional: true, required: false
  private _presharedKey?: string; 
  public get presharedKey() {
    return this.getStringAttribute('preshared_key');
  }
  public set presharedKey(value: string) {
    this._presharedKey = value;
  }
  public resetPresharedKey() {
    this._presharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presharedKeyInput() {
    return this._presharedKey;
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_address: cdktf.stringToTerraform(this._allowedAddress),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      endpoint_address: cdktf.stringToTerraform(this._endpointAddress),
      endpoint_port: cdktf.numberToTerraform(this._endpointPort),
      interface: cdktf.stringToTerraform(this._interface),
      persistent_keepalive: cdktf.numberToTerraform(this._persistentKeepalive),
      preshared_key: cdktf.stringToTerraform(this._presharedKey),
      public_key: cdktf.stringToTerraform(this._publicKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_address: {
        value: cdktf.stringToHclTerraform(this._allowedAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_address: {
        value: cdktf.stringToHclTerraform(this._endpointAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_port: {
        value: cdktf.numberToHclTerraform(this._endpointPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistent_keepalive: {
        value: cdktf.numberToHclTerraform(this._persistentKeepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preshared_key: {
        value: cdktf.stringToHclTerraform(this._presharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
