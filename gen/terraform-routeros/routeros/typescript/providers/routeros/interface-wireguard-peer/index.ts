// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceWireguardPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#___path___ InterfaceWireguardPeer#___path___}
  */
  readonly path?: string;
  /**
  * List of IP (v4 or v6) addresses with CIDR masks from which incoming traffic for this peer is allowed and to which outgoing traffic for this peer is directed. The catch-all 0.0.0.0/0 may be specified for matching all IPv4 addresses, and ::/0 may be specified for matching all IPv6 addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#allowed_address InterfaceWireguardPeer#allowed_address}
  */
  readonly allowedAddress: string[];
  /**
  * When imported using a qr code for a client (for example, a phone), then this address for the wg interface is set on that device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#client_address InterfaceWireguardPeer#client_address}
  */
  readonly clientAddress?: string;
  /**
  * Specify when using WireGuard Server as a VPN gateway for peer traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#client_dns InterfaceWireguardPeer#client_dns}
  */
  readonly clientDns?: string;
  /**
  * The IP address and port number of the WireGuard Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#client_endpoint InterfaceWireguardPeer#client_endpoint}
  */
  readonly clientEndpoint?: string;
  /**
  * Same as persistent-keepalive but from peer side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#client_keepalive InterfaceWireguardPeer#client_keepalive}
  */
  readonly clientKeepalive?: string;
  /**
  * The local port upon which this WireGuard tunnel will listen for incoming traffic from peers, and the port from which it will source outgoing packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#client_listen_port InterfaceWireguardPeer#client_listen_port}
  */
  readonly clientListenPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#comment InterfaceWireguardPeer#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#disabled InterfaceWireguardPeer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * An endpoint IP or hostname can be left blank to allow remote connection from any address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#endpoint_address InterfaceWireguardPeer#endpoint_address}
  */
  readonly endpointAddress?: string;
  /**
  * An endpoint port can be left blank to allow remote connection from any port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#endpoint_port InterfaceWireguardPeer#endpoint_port}
  */
  readonly endpointPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#id InterfaceWireguardPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#interface InterfaceWireguardPeer#interface}
  */
  readonly interface: string;
  /**
  * Specifies if peer is intended to be connection initiator or only responder. Should be used on WireGuard devices that are used as `servers` for other devices as clients to connect to. Otherwise router will all repeatedly try to connect `endpoint-address` or `current-endpoint-address` causing unnecessary system logs to be written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#is_responder InterfaceWireguardPeer#is_responder}
  */
  readonly isResponder?: boolean | cdktf.IResolvable;
  /**
  * Name of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#name InterfaceWireguardPeer#name}
  */
  readonly name?: string;
  /**
  * A seconds interval, between 1 and 65535 inclusive, of how often to send an authenticated empty packet to the peer for the purpose of keeping a stateful firewall or NAT mapping valid persistently. For example, if the interface very rarely sends traffic, but it might at anytime receive traffic from a peer, and it is behind NAT, the interface might benefit from having a persistent keepalive interval of 25 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#persistent_keepalive InterfaceWireguardPeer#persistent_keepalive}
  */
  readonly persistentKeepalive?: string;
  /**
  * A **base64** preshared key. Optional, and may be omitted. This option adds an additional layer of symmetric-key cryptography to be mixed into the already existing public-key cryptography, for post-quantum resistance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#preshared_key InterfaceWireguardPeer#preshared_key}
  */
  readonly presharedKey?: string;
  /**
  * A base64 private key. If not specified, it will be automatically generated upon interface creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#private_key InterfaceWireguardPeer#private_key}
  */
  readonly privateKey?: string;
  /**
  * The remote peer's calculated public key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#public_key InterfaceWireguardPeer#public_key}
  */
  readonly publicKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer routeros_interface_wireguard_peer}
*/
export class InterfaceWireguardPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_wireguard_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceWireguardPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceWireguardPeer to import
  * @param importFromId The id of the existing InterfaceWireguardPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceWireguardPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_wireguard_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireguard_peer routeros_interface_wireguard_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceWireguardPeerConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceWireguardPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_wireguard_peer',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._allowedAddress = config.allowedAddress;
    this._clientAddress = config.clientAddress;
    this._clientDns = config.clientDns;
    this._clientEndpoint = config.clientEndpoint;
    this._clientKeepalive = config.clientKeepalive;
    this._clientListenPort = config.clientListenPort;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._endpointAddress = config.endpointAddress;
    this._endpointPort = config.endpointPort;
    this._id = config.id;
    this._interface = config.interface;
    this._isResponder = config.isResponder;
    this._name = config.name;
    this._persistentKeepalive = config.persistentKeepalive;
    this._presharedKey = config.presharedKey;
    this._privateKey = config.privateKey;
    this._publicKey = config.publicKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // allowed_address - computed: false, optional: false, required: true
  private _allowedAddress?: string[]; 
  public get allowedAddress() {
    return this.getListAttribute('allowed_address');
  }
  public set allowedAddress(value: string[]) {
    this._allowedAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAddressInput() {
    return this._allowedAddress;
  }

  // client_address - computed: false, optional: true, required: false
  private _clientAddress?: string; 
  public get clientAddress() {
    return this.getStringAttribute('client_address');
  }
  public set clientAddress(value: string) {
    this._clientAddress = value;
  }
  public resetClientAddress() {
    this._clientAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAddressInput() {
    return this._clientAddress;
  }

  // client_dns - computed: false, optional: true, required: false
  private _clientDns?: string; 
  public get clientDns() {
    return this.getStringAttribute('client_dns');
  }
  public set clientDns(value: string) {
    this._clientDns = value;
  }
  public resetClientDns() {
    this._clientDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDnsInput() {
    return this._clientDns;
  }

  // client_endpoint - computed: false, optional: true, required: false
  private _clientEndpoint?: string; 
  public get clientEndpoint() {
    return this.getStringAttribute('client_endpoint');
  }
  public set clientEndpoint(value: string) {
    this._clientEndpoint = value;
  }
  public resetClientEndpoint() {
    this._clientEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEndpointInput() {
    return this._clientEndpoint;
  }

  // client_keepalive - computed: false, optional: true, required: false
  private _clientKeepalive?: string; 
  public get clientKeepalive() {
    return this.getStringAttribute('client_keepalive');
  }
  public set clientKeepalive(value: string) {
    this._clientKeepalive = value;
  }
  public resetClientKeepalive() {
    this._clientKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeepaliveInput() {
    return this._clientKeepalive;
  }

  // client_listen_port - computed: false, optional: true, required: false
  private _clientListenPort?: number; 
  public get clientListenPort() {
    return this.getNumberAttribute('client_listen_port');
  }
  public set clientListenPort(value: number) {
    this._clientListenPort = value;
  }
  public resetClientListenPort() {
    this._clientListenPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientListenPortInput() {
    return this._clientListenPort;
  }

  // comment - computed: false, optional: true, required: false
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

  // current_endpoint_address - computed: true, optional: false, required: false
  public get currentEndpointAddress() {
    return this.getStringAttribute('current_endpoint_address');
  }

  // current_endpoint_port - computed: true, optional: false, required: false
  public get currentEndpointPort() {
    return this.getNumberAttribute('current_endpoint_port');
  }

  // disabled - computed: false, optional: true, required: false
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

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
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
  private _endpointPort?: string; 
  public get endpointPort() {
    return this.getStringAttribute('endpoint_port');
  }
  public set endpointPort(value: string) {
    this._endpointPort = value;
  }
  public resetEndpointPort() {
    this._endpointPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointPortInput() {
    return this._endpointPort;
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

  // is_responder - computed: false, optional: true, required: false
  private _isResponder?: boolean | cdktf.IResolvable; 
  public get isResponder() {
    return this.getBooleanAttribute('is_responder');
  }
  public set isResponder(value: boolean | cdktf.IResolvable) {
    this._isResponder = value;
  }
  public resetIsResponder() {
    this._isResponder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isResponderInput() {
    return this._isResponder;
  }

  // last_handshake - computed: true, optional: false, required: false
  public get lastHandshake() {
    return this.getStringAttribute('last_handshake');
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

  // persistent_keepalive - computed: false, optional: true, required: false
  private _persistentKeepalive?: string; 
  public get persistentKeepalive() {
    return this.getStringAttribute('persistent_keepalive');
  }
  public set persistentKeepalive(value: string) {
    this._persistentKeepalive = value;
  }
  public resetPersistentKeepalive() {
    this._persistentKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentKeepaliveInput() {
    return this._persistentKeepalive;
  }

  // preshared_key - computed: false, optional: true, required: false
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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // rx - computed: true, optional: false, required: false
  public get rx() {
    return this.getStringAttribute('rx');
  }

  // tx - computed: true, optional: false, required: false
  public get tx() {
    return this.getStringAttribute('tx');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      allowed_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAddress),
      client_address: cdktf.stringToTerraform(this._clientAddress),
      client_dns: cdktf.stringToTerraform(this._clientDns),
      client_endpoint: cdktf.stringToTerraform(this._clientEndpoint),
      client_keepalive: cdktf.stringToTerraform(this._clientKeepalive),
      client_listen_port: cdktf.numberToTerraform(this._clientListenPort),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      endpoint_address: cdktf.stringToTerraform(this._endpointAddress),
      endpoint_port: cdktf.stringToTerraform(this._endpointPort),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      is_responder: cdktf.booleanToTerraform(this._isResponder),
      name: cdktf.stringToTerraform(this._name),
      persistent_keepalive: cdktf.stringToTerraform(this._persistentKeepalive),
      preshared_key: cdktf.stringToTerraform(this._presharedKey),
      private_key: cdktf.stringToTerraform(this._privateKey),
      public_key: cdktf.stringToTerraform(this._publicKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      client_address: {
        value: cdktf.stringToHclTerraform(this._clientAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_dns: {
        value: cdktf.stringToHclTerraform(this._clientDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_endpoint: {
        value: cdktf.stringToHclTerraform(this._clientEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_keepalive: {
        value: cdktf.stringToHclTerraform(this._clientKeepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_listen_port: {
        value: cdktf.numberToHclTerraform(this._clientListenPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: cdktf.stringToHclTerraform(this._endpointPort),
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
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_responder: {
        value: cdktf.booleanToHclTerraform(this._isResponder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistent_keepalive: {
        value: cdktf.stringToHclTerraform(this._persistentKeepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preshared_key: {
        value: cdktf.stringToHclTerraform(this._presharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
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
